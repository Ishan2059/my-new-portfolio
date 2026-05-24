'use client'

import { ReactNode } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
}

// Removed framer-motion spring physics entirely.
// The magnetic effect on desktop is done with CSS custom properties + transform,
// avoiding JS-per-frame animation loops. On mobile it's a plain button/link.
export default function MagneticButton({
  children,
  className = '',
  href,
  onClick,
}: MagneticButtonProps) {
  if (href) {
    return (
      <a href={href} className={className} onClick={onClick as any}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}
