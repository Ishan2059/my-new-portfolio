import { ArrowUpRight } from 'lucide-react'
import MotionWrapper from './MotionWrapper'

const projects = [
  { name: 'Lumino Technology', domain: 'luminotechnology.com', href: 'https://luminotechnology.com/' },
  { name: 'AHUT International', domain: 'istudy.ahut.edu.cn', href: 'https://istudy.ahut.edu.cn/' },
  { name: 'CZIMT', domain: 'czimt.wiseadmit.io', href: 'https://czimt.wiseadmit.io/' },
]

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-12 mb-12 md:mb-24 border-t border-border" aria-labelledby="work-heading">
      <div className="max-w-[1280px] mx-auto space-y-48">
        <div className="space-y-6">
          <MotionWrapper>
            <h2 id="work-heading" className="font-syne font-bold text-[40px] tracking-[-0.02em] text-text-primary">Look at My Work.</h2>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <p className="font-dm text-[17px] leading-[1.65] text-text-secondary max-w-[560px]">
              A few selected projects. Take a look around.
            </p>
          </MotionWrapper>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          {projects.map((project, index) => (
            <MotionWrapper key={project.href} delay={index * 0.05} className="h-full">
              <a href={project.href} target="_blank" rel="noopener noreferrer"
                className="group flex h-full min-h-[176px] md:min-h-[200px] flex-col justify-between gap-32 bg-surface border border-border rounded-md p-24 md:p-32 hover:border-accent transition-colors"
                aria-label={`Visit ${project.name} (opens in a new tab)`}>
                <div className="flex items-start justify-between gap-24">
                  <h3 className="font-syne font-bold text-[24px] tracking-[-0.02em] leading-snug text-text-primary">{project.name}</h3>
                  <ArrowUpRight size={22} aria-hidden="true" className="mt-1 shrink-0 text-text-secondary group-hover:text-accent transition-colors" />
                </div>
                <p className="font-dm text-[14px] leading-relaxed text-text-secondary break-words">{project.domain}</p>
              </a>
            </MotionWrapper>
          ))}
        </div>
        <MotionWrapper>
          <a href="https://dribbble.com/Ishan_Mishra" target="_blank" rel="noopener noreferrer"
            className="inline-flex min-h-[56px] w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-accent px-32 py-4 font-syne font-bold text-[14px] text-bg hover:bg-accent-dim transition-colors">
            more designs <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only">on Dribbble (opens in a new tab)</span>
          </a>
        </MotionWrapper>
      </div>
    </section>
  )
}
