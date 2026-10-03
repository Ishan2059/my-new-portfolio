'use client'

import MagneticButton from './MagneticButton'

const words = ['Ishan', 'Mishra']

export default function Hero() {
  const handleWorkClick = () => {
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-[100dvh] relative overflow-hidden"
    >
      <div className="relative mx-auto flex min-h-[100dvh] max-w-[1376px] items-center px-[24px] pb-[80px] pt-[144px] md:px-[48px] lg:pt-[128px]">
        <div className="grid w-full grid-cols-1 items-center gap-[32px] md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-[48px]">
          <div className="relative z-10 flex min-w-0 max-w-[600px] flex-col gap-[24px] md:gap-[32px]">
            {/* Label */}
            <div
              className="hero-animate-label font-dm font-medium text-[12px] tracking-[0.12em] uppercase text-accent"
            >
              → UI/UX Designer · Nepal
            </div>

            {/* Display Headline */}
            <h1
              className="font-syne font-extrabold text-[clamp(52px,8vw,96px)] leading-[1] tracking-[-0.04em] text-text-primary"
            >
              {words.map((word, index) => (
                <span
                  key={index}
                  className={`block hero-animate-word-${index}`}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subheading */}
            <p
              className="hero-animate-sub max-w-[480px] font-dm text-[16px] leading-[1.65] text-text-secondary md:text-[18px]"
            >
              Hey, I&apos;m Ishan Mishra. I design digital products that work clearly,
              beautifully, and without confusion. Based in Biratnagar, Nepal.
              Available for freelance work worldwide.
            </p>

            {/* CTA Row */}
            <div
              className="hero-animate-cta flex w-full flex-col items-stretch gap-[16px] sm:w-auto sm:flex-row sm:flex-wrap sm:items-center"
            >
              <MagneticButton
                onClick={handleWorkClick}
                className="inline-flex min-h-[60px] w-full items-center justify-center rounded-full bg-accent px-[32px] py-[16px] font-syne text-[14px] font-bold text-bg transition-colors hover:bg-accent-dim sm:w-auto"
              >
                See My Work
              </MagneticButton>
              <a
                href="https://calendly.com/ishanmishra2059/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[60px] w-full items-center justify-center rounded-full border border-[#333] px-[32px] py-[16px] text-center font-syne text-[14px] font-bold text-text-primary transition-colors hover:border-accent hover:text-accent sm:w-auto"
              >
                Book meeting
              </a>
            </div>
          </div>

          <div
            className="hero-animate-scene pointer-events-none hidden min-w-0 items-center justify-center md:flex"
            aria-hidden="true"
          >
            <video
              src="/portfolio-hero-transparent.webm"
              className="w-[150%] max-w-none shrink-0 object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
            />
          </div>
        </div>
      </div>
    </section>
  )
}
