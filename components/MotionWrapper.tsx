'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ReactNode } from 'react'

interface MotionWrapperProps {
  children: ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right'
  className?: string
}

export default function MotionWrapper({
  children,
  delay = 0,
  direction = 'up',
  className = '',
}: MotionWrapperProps) {
  const shouldReduceMotion = useReducedMotion()

  const directionOffset = {
    up: { y: 40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
  }

  const initial = shouldReduceMotion
    ? { opacity: 0 }
    : { ...directionOffset[direction], opacity: 0 }

  const animate = shouldReduceMotion
    ? { opacity: 1 }
    : { y: 0, x: 0, opacity: 1 }

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
