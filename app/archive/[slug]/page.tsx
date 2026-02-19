import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const archiveMeta = {
  art: {
    title: "Arts",
    label: "Visual Experiments",
    description: "Generative studies, poster drafts, and interface sketches.",
  },
  photo: {
    title: "Images",
    label: "Photographic Notes",
    description: "Light studies, city fragments, and texture collections.",
  },
  blog: {
    title: "Blogs",
    label: "Build Logs",
    description: "Shipping notes, architecture diaries, and systems essays.",
  },
  music: {
    title: "Musical Thoughts",
    label: "Audio Margins",
    description: "Loops, ambient sketches, and production fragments.",
  },
} as const

const artPieces = [
  {
    title: "Signal Shrine",
    slug: "signal-shrine",
    year: "2024",
    medium: "GLSL · Generative",
    src: "/ascii-art-glsl-shader-terminal-aesthetic.png",
  },
  {
    title: "Protocol Bloom",
    slug: "protocol-bloom",
    year: "2023",
    medium: "Mixed Media",
    src: "/network-protocol-3d-visualization-cyberpunk.png",
  },
  {
    title: "Cache Cathedral",
    slug: "cache-cathedral",
    year: "2024",
    medium: "3D Diagram",
    src: "/distributed-cache-system-dark-technical-diagram.png",
  },
  {
    title: "Neural Lattice",
    slug: "neural-lattice",
    year: "2024",
    medium: "Data Sculpture",
    src: "/neural-network-visualization-dark-cyberpunk.png",
  },
  {
    title: "Observability Noir",
    slug: "observability-noir",
    year: "2023",
    medium: "Interface Study",
    src: "/observability-dashboard-dark-cyberpunk.png",
  },
]

const photoSets = [
  {
    title: "Night Transit",
    slug: "night-transit",
    detail: "City light studies",
    src: "/observability-dashboard-dark-cyberpunk.png",
  },
  {
    title: "Substrate",
    slug: "substrate",
    detail: "Texture catalog",
    src: "/abstract-dark-digital-art-glitch-aesthetic.png",
  },
  {
    title: "Neon Lattice",
    slug: "neon-lattice",
    detail: "Structural pattern",
    src: "/neural-network-visualization-dark-cyberpunk.png",
  },
  {
    title: "Echo Grid",
    slug: "echo-grid",
    detail: "Interface fragments",
    src: "/immutable-database-architecture-dark.png",
  },
  {
    title: "Cold Cache",
    slug: "cold-cache",
    detail: "Midnight reflections",
    src: "/distributed-cache-system-dark-technical-diagram.png",
  },
  {
    title: "Signal Drift",
    slug: "signal-drift",
    detail: "Noise fields",
    src: "/ascii-art-glsl-shader-terminal-aesthetic.png",
  },
]

const blogEntries = [
  {
    title: "Ship logs: the invisible costs of caching",
    slug: "ship-logs-invisible-costs-of-caching",
    date: "2024-11-08",
    summary: "Why misses are more expensive than hits, and how I budget for them.",
    tags: ["systems", "reliability"],
  },
  {
    title: "A build note on latency budgets",
    slug: "latency-budgets-human-scale",
    date: "2024-08-12",
    summary: "Designing backpressure with a human-centered mental model.",
    tags: ["performance", "design"],
  },
  {
    title: "From prototype to production: observability",
    slug: "prototype-to-production-observability",
    date: "2024-06-21",
    summary: "A minimal checklist that saved me more than once.",
    tags: ["observability", "process"],
  },
  {
    title: "Serverless edges: a field memo",
    slug: "serverless-edges-field-memo",
    date: "2024-05-02",
    summary: "What changes when your system becomes a constellation of tiny nodes.",
    tags: ["cloud", "architecture"],
  },
  {
    title: "On ritualizing incident response",
    slug: "ritualizing-incident-response",
    date: "2024-03-19",
    summary: "How I document, rehearse, and reduce cognitive load during outages.",
    tags: ["ops", "culture"],
  },
]

const musicEntries = [
  {
    title: "Glassline",
    slug: "glassline",
    length: "3:42",
    mood: "Ambient",
    notes: "Granular pads with terminal clicks as percussion.",
  },
  {
    title: "Soft Cache",
    slug: "soft-cache",
    length: "2:58",
    mood: "Loop",
    notes: "Short loop written during an all-night deploy.",
  },
  {
    title: "Night Compile",
    slug: "night-compile",
    length: "4:11",
    mood: "Field",
    notes: "Recorded rain patterns, processed through spectral delay.",
  },
  {
    title: "Deploy Sleep",
    slug: "deploy-sleep",
    length: "3:07",
    mood: "Drone",
    notes: "Sustained tones with low-frequency drift.",
  },
  {
    title: "Logline",
    slug: "logline",
    length: "2:36",
    mood: "Ambient",
    notes: "Minimal loop made from keyboard ambience.",
  },
]

export const metadata = {
  title: "Archive — Field Notes",
}

function ArtArchive() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
        {artPieces.map((piece) => (
          <Link
            key={piece.title}
            href={`/archive/art/${piece.slug}`}
            className="group relative border border-primary/20 bg-card/10 overflow-hidden hover:border-primary/50 transition-all duration-300"
          >
            <div className="relative aspect-16/10">
              <Image
                src={piece.src}
                alt={piece.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/60 via-transparent to-transparent opacity-70" />
              <div className="pointer-events-none absolute inset-x-0 top-10 h-px bg-primary/40 opacity-0 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="pointer-events-none absolute inset-x-0 top-14 h-px bg-secondary/30 opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            </div>
            <div className="p-5 flex items-center justify-between">
              <div>
                <div className="font-mono text-xs text-primary/70 uppercase tracking-widest">{piece.medium}</div>
                <h3 className="text-lg text-foreground">{piece.title}</h3>
              </div>
              <span className="font-mono text-xs text-muted-foreground">{piece.year}</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="border border-primary/20 bg-card/10 p-6 font-mono text-sm text-foreground/70">
        <div className="text-primary text-xs uppercase tracking-widest">[PROCESS.LOG]</div>
        <div className="mt-3 space-y-2">
          <p>→ sketch layers in grayscale first</p>
          <p>→ introduce signal noise and misalignment</p>
          <p>→ compress into a single artifact</p>
        </div>
      </div>
    </div>
  )
}

function PhotoArchive() {
  return (
    <div className="space-y-6">
      <div className="border border-primary/20 bg-card/10 px-4 py-3 font-mono text-xs text-muted-foreground flex items-center justify-between">
        <span>[FILM.ROLL]</span>
        <span className="text-primary/70">FRAME SYNC</span>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {photoSets.map((photo, index) => (
          <Link
            key={photo.title}
            href={`/archive/photo/${photo.slug}`}
            className="group relative border border-primary/20 bg-card/10 overflow-hidden hover:border-primary/50 transition-all duration-300"
            style={{ gridColumn: index === 0 ? "span 2" : undefined }}
          >
            <div className={`relative ${index === 0 ? "aspect-video" : "aspect-3/4"}`}>
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary/70">{photo.detail}</div>
              <div className="text-sm text-foreground">{photo.title}</div>
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-2 w-px bg-primary/30 opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
          </Link>
        ))}
      </div>
    </div>
  )
}

function BlogArchive() {
  return (
    <div className="space-y-6">
      {blogEntries.map((entry, index) => (
        <Link
          key={entry.title}
          href={`/archive/blog/${entry.slug}`}
          className="block group border border-primary/20 bg-card/10 p-6 hover:border-primary/40 transition-all duration-300"
        >
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <div className="font-mono text-xs text-primary/70 uppercase tracking-widest">LOG {index + 1}</div>
              <h3 className="text-xl text-foreground mt-2">{entry.title}</h3>
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span>{entry.date}</span>
              <span className="w-1.5 h-3 bg-primary/60 animate-pulse" />
            </div>
          </div>
          <p className="text-foreground/70 mt-3">{entry.summary}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {entry.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] uppercase tracking-widest border border-primary/20 px-2 py-1 text-foreground/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  )
}

function MusicArchive() {
  return (
    <div className="space-y-6">
      {musicEntries.map((track, index) => (
        <Link
          key={track.title}
          href={`/archive/music/${track.slug}`}
          className="border border-primary/20 bg-card/10 p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 hover:border-primary/50 transition-all duration-300"
        >
          <div>
            <div className="font-mono text-xs text-secondary uppercase tracking-widest">TRACK {index + 1}</div>
            <h3 className="text-xl text-foreground mt-2">{track.title}</h3>
            <p className="text-foreground/60 mt-2">{track.notes}</p>
          </div>
          <div className="min-w-[220px]">
            <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
              <span>{track.mood}</span>
              <span>{track.length}</span>
            </div>
            <div className="mt-3 flex items-end gap-1">
              {Array.from({ length: 16 }).map((_, i) => (
                <span
                  key={`${track.title}-${i}`}
                  className="block w-2 rounded-sm bg-primary/40 animate-pulse"
                  style={{
                    height: `${8 + ((i + index) % 6) * 6}px`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </Link>
      ))}
      <div className="border border-primary/20 bg-card/10 p-5 font-mono text-xs text-muted-foreground">
        <div className="flex items-center justify-between">
          <span>LISTENING NOTES</span>
          <span className="text-primary/70">LIVE</span>
        </div>
        <p className="mt-2">Low-volume loops designed for long coding sessions and late-night reviews.</p>
      </div>
    </div>
  )
}

export default async function ArchiveSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const meta = archiveMeta[slug as keyof typeof archiveMeta]

  if (!meta) {
    notFound()
  }
  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="border border-primary/20 bg-card/20 p-8 md:p-10 box-glow">
          <div className="font-mono text-xs text-primary uppercase tracking-widest">[ARCHIVE/{slug.toUpperCase()}]</div>
          <h1 className="font-serif text-4xl text-foreground mt-3">{meta.title}</h1>
          <p className="text-foreground/70 mt-4 max-w-2xl">{meta.description}</p>
        </div>

        {slug === "art" && <ArtArchive />}
        {slug === "photo" && <PhotoArchive />}
        {slug === "blog" && <BlogArchive />}
        {slug === "music" && <MusicArchive />}
      </div>
    </main>
  )
}

export function generateStaticParams() {
  return Object.keys(archiveMeta).map((slug) => ({ slug }))
}
