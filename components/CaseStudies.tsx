import { ArrowUpRight } from 'lucide-react'
import MotionWrapper from './MotionWrapper'

export default function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="py-20 md:py-32 px-6 md:px-12 mb-12 md:mb-24 border-t border-border"
      aria-labelledby="case-studies-heading"
    >
      <div className="max-w-[1280px] mx-auto space-y-16">
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

        {/* Large Card */}
        <MotionWrapper delay={0.2}>
          <a
            href="https://www.behance.net/dwfice"
            target="_blank"
            rel="noopener noreferrer"
            className="card-link block w-full bg-surface border border-border rounded-md p-12 md:p-16 group cursor-pointer relative"
          >
            <div className="grid md:grid-cols-2 gap-4 md:gap-12">
              {/* Top Left - Title */}
              <div className="font-syne font-extrabold text-[clamp(28px,7vw,64px)] leading-none text-text-primary break-words">
                BEHANCE
              </div>

              {/* Top Right - Arrow Icon */}
              <div className="flex justify-start md:justify-end">
                <ArrowUpRight
                  size={32}
                  className="text-accent flex-shrink-0 card-arrow"
                  aria-hidden="true"
                />
              </div>

              {/* Bottom - Description */}
              <div className="md:col-span-2 font-dm text-[12px] md:text-[14px] text-text-muted break-words">
                Full case studies with process documentation →
              </div>
            </div>

            {/* Glow effect — CSS box-shadow transition only */}
            <span className="card-glow absolute inset-0 rounded-md pointer-events-none" />
          </a>
        </MotionWrapper>
      </div>
    </section>
  )
}
