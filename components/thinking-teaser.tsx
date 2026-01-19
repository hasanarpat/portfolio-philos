import Link from "next/link"

export function ThinkingTeaser() {
  return (
    <section className="py-32 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 tracking-tight">Thinking</h2>

        <p className="text-foreground/70 text-lg mb-8 max-w-2xl">
          Occasional notes on systems, architecture, and the philosophy of building software.
        </p>

        <Link
          href="/thinking"
          className="inline-flex items-center text-foreground hover:text-foreground/70 transition-colors group"
        >
          <span className="text-sm tracking-wider border-b border-foreground/30 group-hover:border-foreground/70 transition-colors pb-0.5">
            Read thoughts
          </span>
          <svg
            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}
