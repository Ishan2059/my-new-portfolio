'use client'

import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

const words = ['Ishan', 'Mishra']

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.5,
      },
    },
  }

  const wordVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const handleWorkClick = () => {
    const element = document.getElementById('work')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-dvh flex items-center justify-center px-6 md:px-12 pt-24 pb-24 md:pb-32"
    >
      <div className="max-w-[1280px] w-full mx-auto grid md:grid-cols-[60fr_40fr] gap-12 md:gap-24 items-center">
        {/* Left Column - Copy */}
        <div className="space-y-8">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-dm font-medium text-[12px] tracking-[0.12em] uppercase text-accent"
          >
            → UI/UX Designer · Nepal
          </motion.div>

          {/* Display Headline */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="font-syne font-extrabold text-[clamp(52px,8vw,96px)] leading-[0.95] tracking-[-0.04em] text-text-primary"
            style={{ wordSpacing: '100vw' }}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className="inline-block"
              >
                {word}{' '}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="font-dm text-[18px] leading-[1.65] text-text-secondary max-w-[480px]"
          >
            Hey, I&apos;m Ishan Mishra. I design digital products that work clearly,
            beautifully, and without confusion. Based in Biratnagar, Nepal.
            Available for freelance work worldwide.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <MagneticButton
              onClick={handleWorkClick}
              className="w-full sm:w-auto bg-accent text-bg font-syne font-bold text-[14px] px-10 py-5 rounded-full hover:bg-accent-dim transition-colors"
            >
              See My Work
            </MagneticButton>
            <a
              href="/resume.pdf"
              download="Ishan-Mishra-Resume.pdf"
              className="w-full sm:w-auto border border-[#333] text-text-primary font-syne font-bold text-[14px] px-10 py-5 rounded-full hover:border-accent hover:text-accent transition-colors text-center"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right Column - Abstract Geometric Mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="hidden md:flex items-center justify-center"
        >
          <motion.svg
            width="320"
            height="320"
            viewBox="0 0 320 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: 360 }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {/* 4x4 Dot Grid with variations */}
            {[0, 1, 2, 3].map((row) =>
              [0, 1, 2, 3].map((col) => {
                const x = 80 + col * 60
                const y = 80 + row * 60
                
                // Special elements
                if (row === 1 && col === 1) {
                  // Accent square
                  return (
                    <rect
                      key={`${row}-${col}`}
                      x={x - 8}
                      y={y - 8}
                      width="16"
                      height="16"
                      fill="#CAFF00"
                    />
                  )
                }
                if (row === 0 && col === 2) {
                  // Horizontal line
                  return (
                    <line
                      key={`${row}-${col}`}
                      x1={x - 20}
                      y1={y}
                      x2={x + 20}
                      y2={y}
                      stroke="#F5F5F5"
                      strokeWidth="2"
                    />
                  )
                }
                if (row === 2 && col === 3) {
                  // Vertical line
                  return (
                    <line
                      key={`${row}-${col}`}
                      x1={x}
                      y1={y - 20}
                      x2={x}
                      y2={y + 20}
                      stroke="#F5F5F5"
                      strokeWidth="2"
                    />
                  )
                }
                
                // Regular dots
                return (
                  <circle
                    key={`${row}-${col}`}
                    cx={x}
                    cy={y}
                    r="3"
                    fill="#444444"
                  />
                )
              })
            )}
          </motion.svg>
        </motion.div>
      </div>
    </section>
  )
}
