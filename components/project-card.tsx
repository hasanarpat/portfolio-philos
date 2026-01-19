interface ProjectCardProps {
  title: string
  description: string
  year: string
}

export function ProjectCard({ title, description, year }: ProjectCardProps) {
  return (
    <article className="group border border-border/50 bg-card p-8 md:p-10 hover:border-border transition-colors duration-300">
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground tracking-tight">{title}</h3>
        <span className="text-muted-foreground text-sm tracking-wider shrink-0">{year}</span>
      </div>

      <p className="text-foreground/70 leading-relaxed">{description}</p>
    </article>
  )
}
