import { Gamepad2 } from 'lucide-react'
import MotionWrapper from './MotionWrapper'

export default function Play() {
  return (
    <section
      id="play"
      className="py-20 md:py-32 px-6 md:px-12 mb-12 md:mb-24 border-t border-border"
      aria-labelledby="play-heading"
    >
      <div className="max-w-[1280px] mx-auto space-y-16">
        {/* Header */}
        <div className="space-y-6">
          <MotionWrapper>
            <h2
              id="play-heading"
              className="font-syne font-bold text-[40px] tracking-[-0.02em] text-text-primary leading-tight"
            >
              Take a break.
              <br />
              Play my game.
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <p className="font-dm text-[17px] leading-[1.65] text-text-secondary max-w-[560px]">
              Cube Crush — a small browser game I designed and built. No
              install, no signup. Just open it and play.
            </p>
          </MotionWrapper>
        </div>

        {/* Large Card */}
        <MotionWrapper delay={0.2}>
          <div className="card-link block w-full bg-surface border border-border rounded-md p-12 md:p-16 overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-4 md:gap-12">
              {/* Top Left - Title */}
              <div className="card-link-text font-syne font-extrabold text-[clamp(28px,7vw,64px)] leading-none text-accent break-words">
                CUBE CRUSH
              </div>

              {/* Top Right - Icon */}
              <div className="flex justify-start md:justify-end">
                <Gamepad2
                  size={32}
                  className="text-accent flex-shrink-0 card-arrow"
                  aria-hidden="true"
                />
              </div>

              {/* Bottom - Description + CTA */}
              <div className="md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="font-dm text-[12px] md:text-[14px] text-text-muted break-words">
                  Built for the browser · Playable in seconds
                </div>

                <a
                  href="https://cubecrush.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 w-full md:w-auto bg-accent text-bg font-syne font-bold text-[14px] px-10 py-5 rounded-full hover:bg-accent-dim transition-colors text-center flex-shrink-0"
                >
                  Play Cube Crush
                </a>
              </div>
            </div>

            <span className="card-link-border absolute inset-0 border-2 border-transparent rounded-md pointer-events-none" />
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
