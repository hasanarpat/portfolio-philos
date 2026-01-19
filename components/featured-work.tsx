import { ProjectCard } from "@/components/project-card"

const projects = [
  {
    title: "Distributed Event Platform",
    description: "Real-time event processing system handling millions of transactions daily with sub-second latency.",
    year: "2024",
  },
  {
    title: "Infrastructure Orchestration",
    description: "Kubernetes-native platform for managing cloud infrastructure across multi-region deployments.",
    year: "2023",
  },
  {
    title: "Developer Analytics Engine",
    description: "Privacy-first analytics platform providing actionable insights for engineering teams.",
    year: "2023",
  },
]

export function FeaturedWork() {
  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 tracking-tight">Selected Work</h2>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
