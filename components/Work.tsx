import { ArrowUpRight } from 'lucide-react'
import MotionWrapper from './MotionWrapper'

const projects = [
  { name: 'Lumino Technology', category: 'Technology', domain: 'luminotechnology.com', href: 'https://luminotechnology.com/' },
  { name: 'AHUT International', category: 'Education', domain: 'istudy.ahut.edu.cn', href: 'https://istudy.ahut.edu.cn/' },
  { name: 'CZIMT', category: 'Education', domain: 'czimt.wiseadmit.io', href: 'https://czimt.wiseadmit.io/' },
]

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-32 px-6 md:px-12 mb-12 md:mb-24 border-t border-border" aria-labelledby="work-heading">
      <div className="max-w-[1280px] mx-auto space-y-12 md:space-y-16">
        <div className="space-y-6">
          <MotionWrapper>
            <h2 id="work-heading" className="font-syne font-bold text-[40px] tracking-[-0.02em] text-text-primary">Look at My Work.</h2>
          </MotionWrapper>
          <MotionWrapper delay={0.1}>
            <p className="font-dm text-[17px] leading-[1.65] text-text-secondary max-w-[560px]">
              A selection of websites I’ve worked on. Explore the live projects, or find more of my design work on Dribbble.
            </p>
          </MotionWrapper>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <MotionWrapper key={project.href} delay={index * 0.1} className="h-full">
              <a href={project.href} target="_blank" rel="noopener noreferrer"
                className="card-link group relative flex h-full flex-col bg-surface border border-border rounded-md p-8 overflow-hidden"
                aria-label={`Visit ${project.name} (opens in a new tab)`}>
                <div className="flex items-center justify-between gap-4 mb-12">
                  <span className="font-dm font-medium text-[12px] tracking-[0.12em] uppercase text-text-secondary">{project.category}</span>
                  <span className="font-dm text-[12px] text-accent">0{index + 1}</span>
                </div>
                <h3 className="font-syne font-bold text-[28px] tracking-[-0.02em] leading-tight text-text-primary">{project.name}</h3>
                <p className="font-dm text-[14px] text-text-secondary mt-4 mb-12 break-words">{project.domain}</p>
                <div className="mt-auto flex items-center justify-between gap-4 text-accent">
                  <span className="font-syne font-bold text-[14px]">View live project</span>
                  <ArrowUpRight size={24} aria-hidden="true" className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
                <span className="card-link-border absolute inset-0 border-2 border-transparent rounded-md pointer-events-none" />
              </a>
            </MotionWrapper>
          ))}
        </div>
        <MotionWrapper>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-border pt-8">
            <p className="font-dm text-[17px] text-text-secondary">There’s more where that came from.</p>
            <a href="https://dribbble.com/Ishan_Mishra" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-accent text-bg font-syne font-bold text-[14px] px-8 py-4 rounded-full hover:bg-accent-dim transition-colors">
              More projects on Dribbble <ArrowUpRight size={20} aria-hidden="true" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </MotionWrapper>
      </div>
    </section>
  )
}
