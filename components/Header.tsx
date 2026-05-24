'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Connect', href: '#connect' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (ticking) return
      ticking = true

      requestAnimationFrame(() => {
        const scrollY = window.scrollY
        setScrolled(scrollY > 60)

        const sections = ['home', 'about', 'work', 'case-studies', 'connect']
        const scrollPosition = scrollY + 100

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const { offsetTop, offsetHeight } = element
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section)
              break
            }
          }
        }
        ticking = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    // Initial check
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.replace('#', '')
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  // Pure CSS class toggling replaces framer-motion useTransform
  const headerClasses = `fixed top-0 left-0 right-0 z-[1000] border-b transition-all duration-300 ${
    scrolled 
      ? 'bg-[rgba(10,10,10,0.95)] md:bg-[rgba(10,10,10,0.85)] border-transparent backdrop-blur-[12px] md:backdrop-blur-[12px]' 
      : 'bg-transparent border-transparent backdrop-blur-none'
  }`

  return (
    <>
      <header
        ref={headerRef}
        className={headerClasses}
      >
        <nav
          className="max-w-[1440px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group transition-colors"
            aria-label="Ishan Mishra - Home"
          >
            <img
              src="/logo.png"
              alt="Ishan Mishra Logo"
              className="h-10 w-auto transition-opacity logo-img"
              draggable="false"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('#', '')
              const isActive = activeSection === sectionId
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-dm font-medium text-[13px] text-text-secondary hover:text-text-primary transition-colors relative flex items-center gap-2"
                >
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-accent" aria-hidden="true" />
                  )}
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-text-primary hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[999] bg-bg md:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ transitionDelay: mobileMenuOpen ? `${index * 0.1}s` : '0s' }}
              className={`font-syne font-bold text-4xl hover:text-accent transition-all duration-300 transform ${
                mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  )
}
