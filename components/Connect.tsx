import { Linkedin, Instagram, FileDown, BookOpen } from 'lucide-react'
import MotionWrapper from './MotionWrapper'

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/ishan-mishra-b874b3287/',
  },
  {
    name: 'Medium',
    icon: BookOpen,
    href: 'https://medium.com/@ishanmishra2059',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    href: 'https://www.instagram.com/ish_ann1/',
  },
]

export default function Connect() {
  return (
    <section
      id="connect"
      className="py-20 md:py-32 px-6 md:px-12 mb-12 md:mb-24 border-t border-border"
      aria-labelledby="connect-heading"
    >
      <div className="max-w-[1280px] mx-auto grid md:grid-cols-2 gap-12 md:gap-24">
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
              href="mailto:hello@ishanmishra.com.np"
              className="inline-block font-syne font-bold text-[20px] text-accent hover:underline underline-offset-4 transition-all"
            >
              hello@ishanmishra.com.np
            </a>
          </MotionWrapper>
        </div>

        {/* Right Column - Action Grid */}
        <MotionWrapper delay={0.4}>
          <div className="grid grid-cols-2 gap-4">
            {/* Social Cards */}
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-card bg-surface border border-border rounded-md p-6 flex flex-col items-start justify-between gap-4 group min-h-[140px]"
              >
                <social.icon
                  size={24}
                  className="text-text-secondary group-hover:text-accent transition-colors duration-200"
                  aria-hidden="true"
                />
                <span className="font-dm font-medium text-[14px] text-text-secondary group-hover:text-text-primary transition-colors duration-200">
                  {social.name}
                </span>
              </a>
            ))}

            {/* Resume Download Card */}
            <a
              href="/resume.pdf"
              download="Ishan-Mishra-Resume.pdf"
              className="resume-card bg-accent text-bg border-2 border-accent rounded-md p-6 flex flex-col items-start justify-between gap-4 group min-h-[140px]"
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
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
