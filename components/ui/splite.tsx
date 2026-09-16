'use client'

import { Component, Suspense, lazy, useState, useEffect, useRef, useCallback, type ReactNode } from 'react'
import type { Application } from '@splinetool/runtime'

const Spline = lazy(() => import('@splinetool/react-spline'))

// A failed decorative scene should never take down the portfolio.
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? null : this.props.children }
}

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [ready, setReady] = useState(false)
  const [active, setActive] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const appRef = useRef<Application | null>(null)
  const activeRef = useRef(false)
  const reducedMotionRef = useRef(false)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    let inView = false
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => {
      const visible = inView && !document.hidden
      activeRef.current = visible
      reducedMotionRef.current = motion.matches
      setActive(visible)
      if (visible && !motion.matches) appRef.current?.play()
      else appRef.current?.stop()
    }
    const observer = new IntersectionObserver(([entry]) => {
      // Hidden mobile containers must not load WebGL.
      inView = entry.isIntersecting && entry.boundingClientRect.width > 0 && entry.boundingClientRect.height > 0
      update()
    })
    observer.observe(container)
    document.addEventListener('visibilitychange', update)
    motion.addEventListener('change', update)
    update()
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', update)
      motion.removeEventListener('change', update)
      appRef.current = null
    }
  }, [])

  useEffect(() => {
    if (!active || shouldLoad) return
    let idleId: number | undefined
    // Let the hero entrance finish before downloading and initializing WebGL.
    const timer = window.setTimeout(() => {
      if ('requestIdleCallback' in window) {
        idleId = window.requestIdleCallback(() => setShouldLoad(true), { timeout: 3000 })
      } else {
        setShouldLoad(true)
      }
    }, 2200)
    return () => {
      window.clearTimeout(timer)
      if (idleId !== undefined) window.cancelIdleCallback(idleId)
    }
  }, [active, shouldLoad])

  const handleLoad = useCallback((app: Application) => {
    appRef.current = app
    if (!activeRef.current || reducedMotionRef.current) app.stop()
    setReady(true)
  }, [])

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      {shouldLoad && (
        <SceneBoundary>
          <Suspense fallback={null}>
            <Spline scene={scene} onLoad={handleLoad} renderOnDemand
              className={`w-full h-full transition-opacity duration-700 ${ready ? 'opacity-100' : 'opacity-0'}`} />
          </Suspense>
        </SceneBoundary>
      )}
    </div>
  )
}
