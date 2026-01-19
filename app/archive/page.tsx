import Link from "next/link"

export const metadata = {
  title: "Archive — Field Notes",
  description: "A living archive of visuals, writings, experiments, and musical thoughts.",
}

const archiveCategories = [
  {
    slug: "art",
    title: "Arts",
    label: "Visual Experiments",
    description: "Generative studies, poster drafts, and interface sketches.",
    count: 28,
    formats: ["Generative", "Posters", "Interface"],
  },
  {
    slug: "photo",
    title: "Images",
    label: "Photographic Notes",
    description: "Light studies, city fragments, and texture collections.",
    count: 42,
    formats: ["Street", "Abstract", "Textures"],
  },
  {
    slug: "blog",
    title: "Blogs",
    label: "Build Logs",
    description: "Shipping notes, architecture diaries, and systems essays.",
    count: 19,
    formats: ["Essays", "Logs", "Drafts"],
  },
  {
    slug: "music",
    title: "Musical Thoughts",
    label: "Audio Margins",
    description: "Loops, ambient sketches, and production fragments.",
    count: 12,
    formats: ["Ambient", "Loops", "Field"],
  },
]

const recentDrops = [
  {
    title: "Signal Shrine",
    type: "art",
    detail: "GLSL · generative study",
    time: "2h ago",
    entry: "signal-shrine",
  },
  {
    title: "Night Transit",
    type: "photo",
    detail: "urban light textures",
    time: "yesterday",
    entry: "night-transit",
  },
  {
    title: "Latency budgets, human scale",
    type: "blog",
    detail: "build note draft",
    time: "3 days ago",
    entry: "latency-budgets-human-scale",
  },
  {
    title: "Soft Cache",
    type: "music",
    detail: "ambient loop 02",
    time: "1 week ago",
    entry: "soft-cache",
  },
]

export default function ArchivePage() {
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border border-primary/20 bg-card/20 p-8 md:p-12 box-glow">
          <div className="flex items-center justify-between flex-wrap gap-6">
            <div>
              <div className="font-mono text-xs text-primary mb-3 uppercase tracking-widest">[ARCHIVE.INDEX]</div>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground">Field Notes & Artifacts</h1>
              <p className="text-foreground/70 mt-4 max-w-2xl">
                A living archive of experiments and observations across visuals, writing, and sound. Each category has
                its own format, cadence, and aesthetic.
              </p>
            </div>
            <div className="border border-primary/20 bg-background/40 px-4 py-3 font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                ARCHIVE STREAM · LIVE
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {archiveCategories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/archive/${category.slug}`}
              className="group relative overflow-hidden border border-primary/20 bg-card/10 p-6 hover:border-primary/50 hover:bg-card/20 transition-all duration-300 hover-lift"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(90,255,180,0.2),transparent_60%)]" />
                <div className="absolute inset-x-0 top-10 h-px bg-primary/40 opacity-60 animate-pulse" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs text-primary/70 uppercase tracking-widest">
                  [{category.label}]
                </span>
                <span className="font-mono text-xs text-secondary text-glow-copper">{category.count} entries</span>
              </div>
              <h2 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h2>
              <p className="text-foreground/70 mt-3">{category.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.formats.map((format) => (
                  <span
                    key={format}
                    className="font-mono text-[10px] uppercase tracking-widest border border-primary/20 px-2 py-1 text-foreground/60"
                  >
                    {format}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>Open archive</span>
                <span className="text-primary/70 group-hover:text-primary transition-colors">↗</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
          <div className="border border-primary/20 bg-card/10 p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="font-mono text-xs text-primary uppercase tracking-widest">[RECENT.DROPS]</div>
              <span className="font-mono text-[10px] text-muted-foreground">auto-synced</span>
            </div>
            <div className="space-y-4">
              {recentDrops.map((drop, index) => (
                <Link
                  key={`${drop.title}-${index}`}
                  href={`/archive/${drop.type}/${drop.entry}`}
                  className="border border-primary/20 bg-background/40 px-4 py-3 flex items-center justify-between gap-4 hover:border-primary/50 hover:bg-card/20 transition-all duration-300"
                >
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-primary/70">
                      {drop.type}
                    </div>
                    <div className="text-foreground">{drop.title}</div>
                    <div className="text-foreground/60 text-xs">{drop.detail}</div>
                  </div>
                  <div className="font-mono text-[10px] text-muted-foreground">{drop.time}</div>
                </Link>
              ))}
            </div>
          </div>
          <div className="border border-primary/20 bg-card/10 p-6">
            <div className="font-mono text-xs text-primary uppercase tracking-widest">[ARCHIVE.PULSE]</div>
            <p className="text-foreground/70 mt-3">
              Each entry is a trace. Each trace is a clue. Scroll, filter, and stitch the fragments.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {Array.from({ length: 18 }).map((_, i) => (
                <span
                  key={`pulse-${i}`}
                  className={`block h-1.5 w-2 rounded-sm border border-primary/20 ${
                    i % 4 === 0 ? "bg-primary/60" : "bg-primary/10"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 border border-primary/20 bg-card/10 p-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="font-mono text-xs text-primary uppercase tracking-widest">[SIGNAL.MAP]</div>
              <p className="text-foreground/70 mt-3 max-w-2xl">
                Everything in the archive is loosely connected. The threads are visible if you look long enough.
              </p>
            </div>
            <div className="font-mono text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                SYNCED
              </div>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3 text-[10px] font-mono text-foreground/50">
            {["visuals", "systems", "notes", "sound", "textures", "letters", "light", "motion"].map((tag) => (
              <div key={tag} className="border border-primary/20 bg-background/40 px-3 py-2">
                #{tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
