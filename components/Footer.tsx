'use client'

export default function Footer() {
  const handleBackToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border px-6 md:px-12 py-8">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Copyright */}
        <p className="font-dm text-[13px] text-text-muted text-center md:text-left">
          © 2025 Ishan Mishra. Designed & built with intent.
        </p>

        {/* Right - Back to Top */}
        <a
          href="#home"
          onClick={handleBackToTop}
          className="font-dm text-[13px] text-text-muted hover:text-accent transition-colors"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
