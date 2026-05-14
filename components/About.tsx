'use client'

import MotionWrapper from './MotionWrapper'

const skills = [
  'User Research',
  'Wireframing',
  'Prototyping',
  'Visual Design',
  'Design Systems',
  'Figma',
  'Usability Testing',
  'Handoff',
]

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 md:px-12 pt-40 border-t border-border"
      aria-labelledby="about-heading"
    >
      <div className="max-w-[1440px] mx-auto grid md:grid-cols-[200px_1fr] gap-12 md:gap-24">
        {/* Left Column - Decorative Label - REMOVED */}

        {/* Right Column - Content */}
        <div className="space-y-12 md:col-span-2">
          <MotionWrapper>
            <h2
              id="about-heading"
              className="font-syne font-bold text-[40px] tracking-[-0.02em] text-text-primary"
            >
              Who am I?.
            </h2>
          </MotionWrapper>

          <MotionWrapper delay={0.1}>
            <div className="space-y-6 max-w-[600px]">
              <p className="font-dm text-[18px] leading-[1.7] text-text-secondary">
                I&apos;m Ishan Mishra, a UI/UX Designer from Nepal. I don&apos;t just
                make things look good ,I figure out what&apos;s broken, why it
                confuses people, and how to fix it at the root. Then I make
                it look good too.
              </p>
              <p className="font-dm text-[18px] leading-[1.7] text-text-secondary">
                I work with founders, startups, and businesses who need
                design that moves the needle but not just a prettier version
                of the same problem.
              </p>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.2}>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-dm text-[14px] px-4 py-2 bg-surface border border-border rounded-sm text-text-secondary hover:border-accent hover:text-accent transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </MotionWrapper>

          <MotionWrapper delay={0.3}>
            <div className="inline-flex items-center gap-2 bg-accent text-bg font-dm font-medium text-[14px] px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-bg animate-pulse" />
              Available for projects
            </div>
          </MotionWrapper>

          {/* FAQ Section for AEO */}
          <MotionWrapper delay={0.4}>
            <div className="mt-16 pt-16 border-t border-border space-y-6 max-w-[700px]">
              <details className="group">
                <summary className="font-dm font-medium text-[16px] text-text-primary cursor-pointer list-none flex items-center justify-between py-3 hover:text-accent transition-colors">
                  Who is Ishan Mishra?
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="font-dm text-[15px] leading-[1.7] text-text-secondary mt-2 pl-4">
                  Ishan Mishra is a UI/UX Designer based in Nepal (Kathmandu and Biratnagar) who specializes in freelance digital product design. He solves user problems through research-driven, visually precise design.
                </p>
              </details>

              <details className="group">
                <summary className="font-dm font-medium text-[16px] text-text-primary cursor-pointer list-none flex items-center justify-between py-3 hover:text-accent transition-colors">
                  What does Ishan Mishra design?
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="font-dm text-[15px] leading-[1.7] text-text-secondary mt-2 pl-4">
                  Ishan designs digital interfaces, user flows, and visual systems for web and mobile products. His process focuses on problem-solving first, aesthetics second. He also provides branding.
                </p>
              </details>

              <details className="group">
                <summary className="font-dm font-medium text-[16px] text-text-primary cursor-pointer list-none flex items-center justify-between py-3 hover:text-accent transition-colors">
                  Is Ishan Mishra available for freelance work?
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="font-dm text-[15px] leading-[1.7] text-text-secondary mt-2 pl-4">
                  Yes. Ishan Mishra is available for freelance UI/UX design projects. He works with clients worldwide.
                </p>
              </details>

              <details className="group">
                <summary className="font-dm font-medium text-[16px] text-text-primary cursor-pointer list-none flex items-center justify-between py-3 hover:text-accent transition-colors">
                  Where can I see Ishan Mishra's design work?
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="font-dm text-[15px] leading-[1.7] text-text-secondary mt-2 pl-4">
                  His visual design shots are on Dribbble, and his full process case studies are documented on Behance.
                </p>
              </details>

              <details className="group">
                <summary className="font-dm font-medium text-[16px] text-text-primary cursor-pointer list-none flex items-center justify-between py-3 hover:text-accent transition-colors">
                  How do I contact Ishan Mishra?
                  <span className="text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="font-dm text-[15px] leading-[1.7] text-text-secondary mt-2 pl-4">
                  You can reach Ishan via email or through his social profiles linked on his website.
                </p>
              </details>
            </div>
          </MotionWrapper>
        </div>
      </div>
    </section>
  )
}
