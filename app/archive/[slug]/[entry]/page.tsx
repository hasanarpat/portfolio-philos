import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const archiveEntries = {
  art: [
    {
      slug: "signal-shrine",
      title: "Signal Shrine",
      year: "2024",
      medium: "GLSL · Generative",
      summary: "An exercise in controlled noise and deliberate distortion.",
      src: "/ascii-art-glsl-shader-terminal-aesthetic.png",
      notes: ["Layered scanlines", "Spectral color offsets", "Terminal glyph texture"],
    },
    {
      slug: "protocol-bloom",
      title: "Protocol Bloom",
      year: "2023",
      medium: "Mixed Media",
      summary: "A visual study of protocol choreography in abstract space.",
      src: "/network-protocol-3d-visualization-cyberpunk.png",
      notes: ["Spatial packet trails", "Depth-mapped color bloom", "Realtime noise fields"],
    },
    {
      slug: "cache-cathedral",
      title: "Cache Cathedral",
      year: "2024",
      medium: "3D Diagram",
      summary: "A structural representation of distributed state and cache hierarchy.",
      src: "/distributed-cache-system-dark-technical-diagram.png",
      notes: ["Hierarchical nodes", "Latency-mapped edges", "State propagation paths"],
    },
    {
      slug: "neural-lattice",
      title: "Neural Lattice",
      year: "2024",
      medium: "Data Sculpture",
      summary: "Visualizing the weight distribution and attention of a transformer layer.",
      src: "/neural-network-visualization-dark-cyberpunk.png",
      notes: ["Attention head clusters", "Gradient flow lines", "Activation density"],
    },
    {
      slug: "observability-noir",
      title: "Observability Noir",
      year: "2023",
      medium: "Interface Study",
      summary: "A dark-mode exploration of real-time system metrics and telemetry.",
      src: "/observability-dashboard-dark-cyberpunk.png",
      notes: ["High-density telemetry", "Threshold alerts", "Temporal drift"],
    },
  ],
  photo: [
    {
      slug: "night-transit",
      title: "Night Transit",
      detail: "City light studies",
      src: "/observability-dashboard-dark-cyberpunk.png",
      summary: "Reflections, rails, and repetitive motion.",
      notes: ["Lens flare capture", "ISO push", "Handheld blur"],
    },
    {
      slug: "signal-drift",
      title: "Signal Drift",
      detail: "Noise fields",
      src: "/ascii-art-glsl-shader-terminal-aesthetic.png",
      summary: "Textures collected across late-night sessions.",
      notes: ["High contrast grain", "Digitized film overlays", "Randomized frames"],
    },
  ],
  blog: [
    {
      slug: "latency-budgets-human-scale",
      title: "A build note on latency budgets",
      date: "2024-08-12",
      summary: "Designing backpressure with a human-centered mental model.",
      tags: ["performance", "design"],
      body: [
        "Latency budgets are easiest to manage when they can be explained in human terms.",
        "Break your critical path into three clear phases. Name them. Document them.",
        "A budget is only useful if it is visible at the moment of failure.",
      ],
    },
    {
      slug: "ship-logs-invisible-costs-of-caching",
      title: "Ship logs: the invisible costs of caching",
      date: "2024-11-08",
      summary: "Why misses are more expensive than hits, and how I budget for them.",
      tags: ["systems", "reliability"],
      body: [
        "Every cache is a promise. Every miss is a broken promise.",
        "Design your observability so misses are visible and actionable.",
      ],
    },
    {
      slug: "prototype-to-production-observability",
      title: "From prototype to production: observability",
      date: "2024-06-21",
      summary: "A minimal checklist that saved me more than once.",
      tags: ["observability", "process"],
      body: [
        "Start with the basics: logs, metrics, and traces.",
        "Automate your alerts before you need them.",
        "Keep your dashboards simple and focused on user impact.",
      ],
    },
    {
      slug: "serverless-edges-field-memo",
      title: "Serverless edges: a field memo",
      date: "2024-05-02",
      summary: "What changes when your system becomes a constellation of tiny nodes.",
      tags: ["cloud", "architecture"],
      body: [
        "The edge is not just a cache; it's a compute environment.",
        "State management becomes the primary challenge in a distributed world.",
        "Latency is the new currency of user experience.",
      ],
    },
    {
      slug: "ritualizing-incident-response",
      title: "On ritualizing incident response",
      date: "2024-03-19",
      summary: "How I document, rehearse, and reduce cognitive load during outages.",
      tags: ["ops", "culture"],
      body: [
        "Create a shared language for incidents to reduce confusion.",
        "Practice your response during low-stakes moments.",
        "Post-mortems are for learning, not for blaming.",
      ],
    },
  ],
  music: [
    {
      slug: "soft-cache",
      title: "Soft Cache",
      length: "2:58",
      mood: "Loop",
      notes: "Short loop written during an all-night deploy.",
      waveform: [12, 18, 10, 22, 14, 20, 16, 24, 18, 22, 12, 16],
    },
    {
      slug: "glassline",
      title: "Glassline",
      length: "3:42",
      mood: "Ambient",
      notes: "Granular pads with terminal clicks as percussion.",
      waveform: [10, 20, 14, 26, 12, 18, 22, 16, 24, 14, 20, 12],
    },
  ],
} as const

const archiveMeta = {
  art: {
    title: "Arts",
    label: "Visual Experiments",
  },
  photo: {
    title: "Images",
    label: "Photographic Notes",
  },
  blog: {
    title: "Blogs",
    label: "Build Logs",
  },
  music: {
    title: "Musical Thoughts",
    label: "Audio Margins",
  },
} as const

type ArchiveCategory = keyof typeof archiveEntries
type ArchiveEntry = (typeof archiveEntries)[ArchiveCategory][number]

const isArtEntry = (entry: ArchiveEntry): entry is (typeof archiveEntries)["art"][number] =>
  "medium" in entry

const isPhotoEntry = (entry: ArchiveEntry): entry is (typeof archiveEntries)["photo"][number] =>
  "detail" in entry

const isBlogEntry = (entry: ArchiveEntry): entry is (typeof archiveEntries)["blog"][number] =>
  "body" in entry

const isMusicEntry = (entry: ArchiveEntry): entry is (typeof archiveEntries)["music"][number] =>
  "waveform" in entry

export default async function ArchiveEntryPage({ params }: { params: Promise<{ slug: string; entry: string }> }) {
  const { slug, entry: entrySlug } = await params
  const category = slug as ArchiveCategory
  const entry = archiveEntries[category]?.find((item) => item.slug === entrySlug)
  const meta = archiveMeta[category]

  if (!entry || !meta) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link
            href={`/archive/${category}`}
            className="font-mono text-xs uppercase tracking-widest text-primary/70 hover:text-primary transition-colors"
          >
            ← back to {meta.title}
          </Link>
          <span className="font-mono text-xs text-muted-foreground">[{meta.label}]</span>
        </div>

        {category === "art" && entry && isArtEntry(entry) && (
          <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
            <div className="border border-primary/20 bg-card/10 overflow-hidden">
              <div className="relative aspect-video">
                <Image src={entry.src} alt={entry.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
              </div>
              <div className="p-5">
                <div className="font-mono text-xs text-primary uppercase tracking-widest">[ARTIFACT]</div>
                <p className="text-foreground/70 mt-2">{entry.summary}</p>
              </div>
            </div>
            <div className="border border-primary/20 bg-card/10 p-6 space-y-4">
              <div>
                <div className="font-mono text-xs text-primary uppercase tracking-widest">[DETAILS]</div>
                <h1 className="font-serif text-3xl text-foreground mt-3">{entry.title}</h1>
                <p className="text-foreground/60 mt-2">{entry.medium}</p>
                <p className="font-mono text-xs text-muted-foreground mt-1">{entry.year}</p>
              </div>
              <div>
                <div className="font-mono text-xs text-primary uppercase tracking-widest">[NOTES]</div>
                <div className="mt-3 space-y-2 text-foreground/70">
                  {entry.notes.map((note) => (
                    <div key={note} className="flex items-start gap-2">
                      <span className="text-secondary">▸</span>
                      <span>{note}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {category === "photo" && entry && isPhotoEntry(entry) && (
          <div className="space-y-6">
            <div className="border border-primary/20 bg-card/10 overflow-hidden">
              <div className="relative aspect-video">
                <Image src={entry.src} alt={entry.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
              </div>
            </div>
            <div className="border border-primary/20 bg-card/10 p-6">
              <div className="font-mono text-xs text-primary uppercase tracking-widest">[FRAME.NOTES]</div>
              <h1 className="font-serif text-3xl text-foreground mt-3">{entry.title}</h1>
              <p className="text-foreground/60 mt-2">{entry.detail}</p>
              <p className="text-foreground/70 mt-4">{entry.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {entry.notes.map((note) => (
                  <span
                    key={note}
                    className="font-mono text-[10px] uppercase tracking-widest border border-primary/20 px-2 py-1 text-foreground/60"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {category === "blog" && entry && isBlogEntry(entry) && (
          <div className="border border-primary/20 bg-card/10 p-8 md:p-10">
            <div className="font-mono text-xs text-primary uppercase tracking-widest">[LOG ENTRY]</div>
            <h1 className="font-serif text-3xl text-foreground mt-3">{entry.title}</h1>
            <div className="font-mono text-xs text-muted-foreground mt-2">{entry.date}</div>
            <p className="text-foreground/70 mt-4">{entry.summary}</p>
            <div className="mt-6 space-y-4 text-foreground/70">
              {entry.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {entry.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-widest border border-primary/20 px-2 py-1 text-foreground/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {category === "music" && entry && isMusicEntry(entry) && (
          <div className="border border-primary/20 bg-card/10 p-8 md:p-10">
            <div className="font-mono text-xs text-primary uppercase tracking-widest">[AUDIO NOTE]</div>
            <h1 className="font-serif text-3xl text-foreground mt-3">{entry.title}</h1>
            <div className="font-mono text-xs text-muted-foreground mt-2">
              {entry.mood} · {entry.length}
            </div>
            <p className="text-foreground/70 mt-4">{entry.notes}</p>
            <div className="mt-6 border border-primary/20 bg-background/40 px-4 py-4">
              <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                <span>WAVEFORM</span>
                <span>LIVE</span>
              </div>
              <div className="mt-4 flex items-end gap-1">
                {entry.waveform.map((height, index) => (
                  <span
                    key={`${entry.slug}-${index}`}
                    className="block w-2 rounded-sm bg-primary/40"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return Object.entries(archiveEntries).flatMap(([slug, entries]) =>
    entries.map((entry) => ({
      slug,
      entry: entry.slug,
    }))
  )
}
