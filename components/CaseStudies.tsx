'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import MotionWrapper from './MotionWrapper'

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-32 px-6 md:px-12 pt-40 border-t border-border"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-[1440px] mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <MotionWrapper>
            <h2
              id="case-studies-heading"
              className="font-syne font-bold text-[40px] tracking-[-0.02em] text-text-primary leading-tight"
            >
              The thinking
              <br />
              behind the work.
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <p className="font-dm text-[17px] leading-[1.65] text-text-secondary max-w-[560px]">
              Full process documentation — research, decisions, iterations,
              and outcomes. Everything you need to trust the work.
            </p>
          </MotionWrapper>
        </div>

        {/* Large Card - Different Treatment */}
        <MotionWrapper delay={0.2}>
          <motion.a
            href="https://www.behance.net/dwfice"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-surface border border-border rounded-md p-12 md:p-16 group cursor-pointer relative"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Top Left - Title */}
              <div className="font-syne font-extrabold text-[clamp(40px,8vw,64px)] leading-none text-text-primary">
                BEHANCE
              </div>

              {/* Top Right - Arrow Icon */}
              <div className="flex justify-start md:justify-end">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight
                    size={32}
                    className="text-accent"
                    aria-hidden="true"
                  />
                </motion.div>
              </div>

              {/* Bottom - Description */}
              <div className="md:col-span-2 font-dm text-[14px] text-text-muted">
                Full case studies with process documentation →
              </div>
            </div>

            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-md pointer-events-none"
              initial={{ boxShadow: '0 0 0 0 rgba(202,255,0,0)' }}
              whileHover={{ boxShadow: '0 0 24px rgba(202,255,0,0.15)' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
        </MotionWrapper>
      </div>
    </section>
  )
}
