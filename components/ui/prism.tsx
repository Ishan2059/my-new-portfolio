'use client'

import { Component, Suspense, lazy, useEffect, useRef, useState, type ReactNode } from 'react'

const PrismScene = lazy(() => import('./prism-scene'))

function PrismFallback() {
  return (
    <svg viewBox="0 0 500 600" className="h-full w-full" aria-hidden="true">
      <g stroke="var(--color-accent)" strokeOpacity="0.35" strokeWidth="1">
        <path d="M250 135 385 245 345 410 175 445 110 275Z" fill="var(--color-surface)" />
        <path d="M250 135 285 290 110 275ZM285 290 345 410 175 445Z" fill="var(--color-accent)" fillOpacity="0.12" />
        <path d="m250 135 135 110-100 45ZM110 275l65 170 110-155 60 120 40-165" fill="none" />
      </g>
    </svg>
  )
}

class PrismBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? <PrismFallback /> : this.props.children }
}

export function Prism({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    let visible = false
    const sync = () => {
      const next = visible && !document.hidden
      setActive(next)
      if (next) setMounted(true)
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.boundingClientRect.width > 0
      sync()
    })
    observer.observe(element)
    document.addEventListener('visibilitychange', sync)
    return () => {
      observer.disconnect()
      document.removeEventListener('visibilitychange', sync)
    }
  }, [])

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <PrismBoundary>
        <Suspense fallback={<PrismFallback />}>
          {mounted ? <PrismScene active={active} /> : <PrismFallback />}
        </Suspense>
      </PrismBoundary>
    </div>
  )
}
