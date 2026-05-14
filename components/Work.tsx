'use client'

import { motion } from 'framer-motion'
import MotionWrapper from './MotionWrapper'

export default function Work() {
  return (
    <section
      id="work"
      className="py-32 px-6 md:px-12 pt-40 border-t border-border"
      aria-labelledby="work-heading"
    >
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <MotionWrapper>
            <h2
              id="work-heading"
              className="font-syne font-bold text-[40px] tracking-[-0.02em] text-text-primary"
            >
              Look at My Work.
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <p className="font-dm text-[17px] leading-[1.65] text-text-secondary max-w-[560px]">
              Shot-for-shot visual design — interfaces, flows, and visual
              systems. The full collection lives on Dribbble.
            </p>
          </MotionWrapper>
        </div>

        {/* Large Card */}
        <MotionWrapper delay={0.2}>
          <motion.a
            href="https://dribbble.com/Ishan_Mishra"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-surface border border-border rounded-md p-12 md:p-16 group cursor-pointer overflow-hidden"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              {/* Left - Large Text */}
              <motion.div
                className="font-syne font-extrabold text-[clamp(40px,8vw,64px)] leading-none text-accent"
                whileHover={{ x: 8 }}
                transition={{ duration: 0.2 }}
              >
                DRIBBBLE →
              </motion.div>

              {/* Right - Tagline */}
              <div className="font-dm text-[14px] text-text-muted">
                View all design shots
              </div>
            </div>

            {/* Hover effect border */}
            <motion.div
              className="absolute inset-0 border-2 border-transparent rounded-md pointer-events-none"
              initial={{ borderColor: 'transparent' }}
              whileHover={{ borderColor: '#CAFF00' }}
              transition={{ duration: 0.2 }}
            />
          </motion.a>
        </MotionWrapper>
      </div>
    </section>
  )
}
