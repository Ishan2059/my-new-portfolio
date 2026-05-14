'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram, FileDown, BookOpen } from 'lucide-react'
import MotionWrapper from './MotionWrapper'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ishan-mishra-b874b3287/',
    special: false,
  },
  {
    name: 'Medium',
    icon: BookOpen,
    href: 'https://medium.com/@ishanmishra2059',
    special: false,
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/ish_ann1/',
    special: false,
  },
]

export default function Connect() {
  return (
    <section
      id="connect"
      className="py-32 px-6 md:px-12 pt-40 border-t border-border"
      aria-labelledby="connect-heading"
    >
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-2 gap-12 md:gap-24">
        {/* Left Column - Message */}
        <div className="space-y-8">
          <MotionWrapper>
            <div className="font-dm font-medium text-[12px] tracking-[0.12em] uppercase text-text-muted">
              CONNECT
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <h2
              id="connect-heading"
              className="font-syne font-extrabold text-[clamp(40px,6vw,64px)] leading-tight tracking-[-0.03em] text-text-primary"
            >
              Let&apos;s build
              <br />
              something.
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <p className="font-dm text-[17px] leading-[1.65] text-text-secondary max-w-[420px]">
              Whether you have a specific project or just a problem
              you can&apos;t figure out — reach out. I respond to everyone.
            </p>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <a
              href="mailto:ishanmishra2059@gmail.com"
              className="inline-block font-syne font-bold text-[20px] text-accent hover:underline underline-offset-4 transition-all"
            >
              ishanmishra2059@gmail.com
            </a>
          </MotionWrapper>
        </div>

        {/* Right Column - Action Grid */}
        <MotionWrapper delay={0.4}>
          <div className="grid grid-cols-2 gap-4">
            {/* Social Cards */}
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-surface border border-border rounded-md p-6 flex flex-col items-start justify-between gap-4 hover:border-accent group transition-colors min-h-[140px]"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <social.icon
                  size={24}
                  className="text-text-secondary group-hover:text-accent transition-colors"
                  aria-hidden="true"
                />
                <span className="font-dm font-medium text-[14px] text-text-secondary group-hover:text-text-primary transition-colors">
                  {social.name}
                </span>
              </motion.a>
            ))}

            {/* Resume Download Card - Special Treatment */}
            <motion.a
              href="/resume.pdf"
              download="Ishan-Mishra-Resume.pdf"
              className="bg-accent text-bg border-2 border-accent rounded-md p-6 flex flex-col items-start justify-between gap-4 group min-h-[140px]"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <FileDown
                size={24}
                className="text-bg"
                aria-hidden="true"
              />
              <div className="space-y-1">
                <div className="font-syne font-bold text-[14px] text-bg">
                  DOWNLOAD CV
                </div>
                <div className="font-dm text-[12px] text-bg opacity-70">
                  PDF · Updated 2025
                </div>
              </div>
              {/* Glow effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-md pointer-events-none"
                initial={{ boxShadow: '0 0 0 0 rgba(202,255,0,0)' }}
                whileHover={{ boxShadow: '0 0 24px rgba(202,255,0,0.3)' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
