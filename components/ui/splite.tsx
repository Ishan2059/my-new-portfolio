'use client'

import { useEffect, useRef, useState } from 'react'
import type { Application } from '@splinetool/runtime'

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    let app: Application | undefined
    let disposed = false
    let started = false
    let inView = false
    let loaded = false
    let idleId: number | undefined
    let frameId: number | undefined
    const abort = new AbortController()
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReady(false)

    const resize = () => {
      if (!app || !container.clientWidth || !container.clientHeight) return
      // Render fewer pixels while keeping the same aspect ratio and scene framing.
      // 80% on each axis uses 36% fewer pixels than the full-size canvas.
      const scale = 0.8
      app.setSize(Math.round(container.clientWidth * scale), Math.round(container.clientHeight * scale))
      app.setZoom(scale)
      canvas.style.width = '100%'
      canvas.style.height = '100%'
    }

    const syncPlayback = () => {
      if (!app || !loaded) return
      if (inView && !document.hidden && !motion.matches) app.play()
      else app.stop()
    }

    const start = async () => {
      if (started || disposed || !inView || document.hidden) return
      started = true
      try {
        // Start both downloads together instead of waiting for the JS bundle
        // before requesting the scene. No fixed multi-second delay.
        const [{ Application }, data] = await Promise.all([
          import('@splinetool/runtime'),
          fetch(scene, { signal: abort.signal }).then(response => {
            if (!response.ok) throw new Error('Scene unavailable')
            return response.arrayBuffer()
          }),
        ])
        if (disposed) return
        app = new Application(canvas, { renderMode: 'auto' })
        resize()
        await app.start(data)
        if (disposed) { app.dispose(); return }
        resize()
        loaded = true
        // Allow the first frame to paint before revealing or freezing the scene.
        frameId = requestAnimationFrame(() => {
          if (disposed) return
          setReady(true)
          syncPlayback()
        })
      } catch {
        // This decorative scene must never prevent the page from working.
        app?.dispose()
        app = undefined
      }
    }

    const schedule = () => {
      syncPlayback()
      if (started || !inView || document.hidden) return
      if (idleId !== undefined) window.cancelIdleCallback(idleId)
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(() => { void start() }, { timeout: 250 })
      } else {
        void start()
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      // Do not download or initialize the hidden mobile scene.
      inView = entry.isIntersecting && entry.boundingClientRect.width > 0 && entry.boundingClientRect.height > 0
      schedule()
    })
    const resizeObserver = new ResizeObserver(resize)
    observer.observe(container)
    resizeObserver.observe(container)
    document.addEventListener('visibilitychange', schedule)
    motion.addEventListener('change', syncPlayback)

    return () => {
      disposed = true
      abort.abort()
      if (idleId !== undefined) window.cancelIdleCallback(idleId)
      if (frameId !== undefined) cancelAnimationFrame(frameId)
      observer.disconnect()
      resizeObserver.disconnect()
      document.removeEventListener('visibilitychange', schedule)
      motion.removeEventListener('change', syncPlayback)
      app?.dispose()
    }
  }, [scene])

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      {/* Keep the runtime's own ResizeObserver at the reduced resolution too. */}
      <div className="w-4/5 h-4/5 origin-top-left scale-125">
        <canvas ref={canvasRef} className={`block w-full h-full transition-opacity duration-300 ${ready ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  )
}
