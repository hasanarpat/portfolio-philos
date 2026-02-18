"use client"

import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    title: "Memento Mori",
    problem: "Balancing high-end e-commerce aesthetics with sub-second performance",
    approach: "Monolithic Headless (Next.js 15 + Payload 3.0), Zero-latency API",
    status: "LIVE",
    year: "2026",
    href: "/projects/memento-mori",
  },
  {
    title: "Masalcı Kedi",
    problem: "Achieving perfect SEO scores and zero-latency performance for content-heavy sites",
    approach: "Astro Island Architecture, Zero-JS hydration, Deterministic builds",
    status: "BETA",
    year: "2025",
    href: "/projects/masalci-kedi",
  },
  {
    title: "DupliCheck",
    problem: "Preventing accidental bulk orders by detecting duplicate items in real-time",
    approach: "Self-recognition heuristics, Shadow DOM isolation, Event-driven strategy",
    status: "LIVE",
    year: "2026",
    href: "/projects/duplicheck",
  },
]

export function SelectedWork() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={sectionRef} className="px-6 md:px-12 py-24 max-w-6xl">
      <h2
        className={`text-xs font-mono text-primary tracking-widest uppercase mb-12 text-glow transition-all duration-700 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
      >
        &gt;&gt; SELECTED_MISSIONS.log
      </h2>

      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            parentVisible={sectionVisible}
          />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  parentVisible
}: {
  project: typeof projects[number]
  index: number
  parentVisible: boolean
}) {
  return (
    <Link
      href={project.href}
      className={`grid grid-cols-1 md:grid-cols-12 gap-6 pb-12 border-b border-primary/20 last:border-0 hover:border-primary/40 transition-all duration-700 group hover-lift cursor-pointer ${parentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      style={{ transitionDelay: `${0.15 + index * 0.1}s` }}
    >
      <div className="md:col-span-1">
        <span className="text-secondary font-mono text-sm text-glow-copper">{project.year}</span>
      </div>
      <div className="md:col-span-4">
        <h3 className="text-foreground text-xl md:text-2xl font-medium mb-2 group-hover:text-primary group-hover:text-glow transition-all duration-300">
          {project.title}
        </h3>
        <span className="inline-block px-2 py-1 text-xs font-mono bg-primary/10 text-primary border border-primary/30 box-glow group-hover:bg-primary/20 transition-colors duration-300">
          [ {project.status} ]
        </span>
      </div>
      <div className="md:col-span-7 space-y-3">
        <div>
          <span className="text-primary/80 text-sm font-mono tracking-wider">&gt; PROBLEM:</span>
          <p className="text-foreground/80 mt-1 leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <span className="text-secondary/80 text-sm font-mono tracking-wider">&gt; SOLUTION:</span>
          <p className="text-muted-foreground mt-1 leading-relaxed font-mono text-sm">{project.approach}</p>
        </div>
      </div>
    </Link>
  )
}
