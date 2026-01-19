const writings = [
  {
    title: "On Building for the Long Term",
    type: "Essay",
    date: "Dec 2024",
  },
  {
    title: "System Design Tradeoffs",
    type: "Note",
    date: "Nov 2024",
  },
  {
    title: "Why Complexity Compounds",
    type: "Essay",
    date: "Oct 2024",
  },
]

export function Thinking() {
  return (
    <section className="px-6 md:px-12 py-24 max-w-6xl">
      <h2 className="text-xs font-mono text-muted-foreground tracking-widest uppercase mb-12">Thinking</h2>

      <div className="space-y-6">
        {writings.map((writing, index) => (
          <div
            key={index}
            className="flex items-baseline justify-between py-4 border-b border-muted/10 last:border-0 hover:border-muted/30 transition-colors cursor-pointer group"
          >
            <div className="flex-1">
              <h3 className="text-foreground/90 text-lg group-hover:text-foreground transition-colors">
                {writing.title}
              </h3>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground/60 font-mono">
              <span>{writing.type}</span>
              <span>{writing.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
