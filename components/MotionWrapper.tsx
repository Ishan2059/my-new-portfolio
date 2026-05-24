'use client'

import { useRef, useEffect, ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}

// Pure CSS IntersectionObserver — zero framer-motion, zero JS animation cost.
// Adds a CSS class when the element enters the viewport.
// All animation is handled by GPU compositor-thread CSS transitions.
export default function MotionWrapper({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: MotionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`
          el.classList.add('in-view')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const dirClass =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
      ? 'reveal-right'
      : 'reveal-up'

  return (
    <div ref={ref} className={`reveal ${dirClass} ${className}`}>
      {children}
    </div>
  )
}
