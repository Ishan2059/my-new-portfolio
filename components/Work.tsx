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
      <div className="max-w-[1280px] mx-auto space-y-8 md:space-y-12">
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <MotionWrapper key={project.href} delay={index * 0.05} className="h-full">
              <a href={project.href} target="_blank" rel="noopener noreferrer"
                className="group flex h-full items-center justify-between gap-6 bg-surface border border-border rounded-md p-6 md:p-8 hover:border-accent transition-colors"
                aria-label={`Visit ${project.name} (opens in a new tab)`}>
                <div className="min-w-0 space-y-2">
                  <h3 className="font-syne font-bold text-[22px] tracking-[-0.02em] leading-tight text-text-primary">{project.name}</h3>
                  <p className="font-dm text-[14px] text-text-secondary break-words">{project.domain}</p>
                </div>
                <ArrowUpRight size={22} aria-hidden="true" className="shrink-0 text-text-secondary group-hover:text-accent transition-colors" />
              </a>
            </MotionWrapper>
          ))}
        </div>
        <MotionWrapper>
          <a href="https://dribbble.com/Ishan_Mishra" target="_blank" rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-2 font-syne font-bold text-[14px] text-accent hover:underline underline-offset-4">
            more designs <ArrowUpRight size={18} aria-hidden="true" />
            <span className="sr-only">on Dribbble (opens in a new tab)</span>
          </a>
        </MotionWrapper>
      </div>
    </section>
  )
}
