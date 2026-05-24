'use client'

import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { SplineScene } from './ui/splite'

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
      className="min-h-dvh relative overflow-hidden"
    >
      {/* 3D Spline Scene — positioned on the right half */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.2 }}
        className="absolute top-0 bottom-0 left-[45%] right-0 hidden md:block"
      >
        <SplineScene 
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full"
        />
      </motion.div>

      {/* Text content — floats on top, pointer-events-none so cursor reaches Spline */}
      <div className="relative z-10 pointer-events-none flex items-center min-h-dvh px-6 md:px-12 pt-24 pb-24 md:pb-32">
        <div className="max-w-[1280px] w-full mx-auto">
          <div className="max-w-[600px] space-y-8">
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
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pointer-events-auto"
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
        </div>
      </div>
    </section>
  )
}
