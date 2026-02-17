"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    id: 1,
    slug: "distributed-event-system",
    title: "DistributedCache.io", // Note: The title in grid is different from detail page in [slug]/page.tsx
    type: "Production System",
    stack: ["Rust", "Redis", "Kubernetes"],
    description:
      "High-throughput distributed caching layer serving 50M+ requests/day. Built for resilience with automatic failover and geographic replication.",
    year: "2023-2024",
    status: "Live",
    metrics: ["99.99% uptime", "< 5ms p99 latency", "50M+ req/day"],
    image: "/distributed-cache-system-dark-technical-diagram.png",
  },
  {
    id: 2,
    slug: "real-time-data-pipeline",
    title: "ObservabilityKit",
    type: "Open Source",
    stack: ["TypeScript", "Node.js", "OpenTelemetry"],
    description:
      "Batteries-included observability toolkit for Node.js applications. Zero-config tracing, metrics, and structured logging with minimal overhead.",
    year: "2023",
    status: "Maintained",
    metrics: ["2.5k GitHub stars", "150k+ weekly downloads", "Active community"],
    image: "/observability-dashboard-dark-cyberpunk.png",
  },
  {
    id: 3,
    slug: "neural-archive",
    title: "Neural Archive",
    type: "Experiment",
    stack: ["Python", "PyTorch", "React"],
    description:
      "Semantic search engine for personal archives using neural embeddings. Explores how machines can help us remember and connect ideas.",
    year: "2024",
    status: "Prototype",
    metrics: ["10k+ documents indexed", "Sub-second search", "Self-hosted"],
    image: "/neural-network-semantic-search-visualization.png",
  },
  {
    id: 4,
    slug: "protocol-explorer",
    title: "Protocol Explorer",
    type: "Educational",
    stack: ["Go", "WebAssembly", "Three.js"],
    description:
      "Interactive visualization of network protocols. Watch TCP handshakes, DNS queries, and HTTP requests in real-time 3D space.",
    year: "2023",
    status: "Demo",
    metrics: ["5k+ students used", "15 protocols visualized", "Browser-based"],
    image: "/network-protocol-3d-visualization-cyberpunk.png",
  },
  {
    id: 5,
    slug: "infrastructure-orchestration",
    title: "TimeCapsule DB",
    type: "Production System",
    stack: ["PostgreSQL", "Rust", "Docker"],
    description:
      "Immutable append-only database for audit trails and compliance. Every write is permanent, every read is verifiable.",
    year: "2022-2023",
    status: "Live",
    metrics: ["Zero data loss", "Cryptographic verification", "SOC 2 compliant"],
    image: "/immutable-database-architecture-dark.png",
  },
  {
    id: 6,
    slug: "terminal-aesthetics",
    title: "Terminal Aesthetics",
    type: "Art Project",
    stack: ["JavaScript", "WebGL", "GLSL"],
    description:
      "Generative art project creating terminal-inspired visuals. ASCII meets shaders in real-time algorithmic compositions.",
    year: "2024",
    status: "Ongoing",
    metrics: ["100+ compositions", "WebGL shaders", "Generative"],
    image: "/ascii-art-glsl-shader-terminal-aesthetic.png",
  },
  {
    id: 7,
    slug: "memento-mori",
    title: "Memento Mori",
    type: "Production System",
    stack: ["Next.js 15", "Payload CMS 3.0", "MongoDB"],
    description:
      "A high-end e-commerce platform for dark fashion artifacts, leveraging a headless-first architecture for zero-latency performance.",
    year: "2024-2025",
    status: "Live",
    metrics: ["Next.js 15 SSR", "Payload 3.0 Local API", "Zero-latency Sync"],
    image: "/dark-brutalist-architecture-at-night.png",
  },
]

const filterTypes = ["All", "Production System", "Open Source", "Experiment", "Educational", "Art Project"]

const buildTerminalLines = (project: (typeof projects)[0]) => [
  `> ACCESSING ${project.title.toUpperCase().replace(/\s/g, "_")}...`,
  `> STATUS: ${project.status}`,
  `> STACK: ${project.stack.join(" | ")}`,
  `> YEAR: ${project.year}`,
  "",
  "> METRICS:",
  ...project.metrics.map((m) => `  - ${m}`),
  "",
  "> [ENTER] View Project",
  "> [ESC] Close",
]

// Hacker Modal Component
function HackerModal({ project, isVisible }: { project: typeof projects[0]; isVisible: boolean }) {
  const [typedLines, setTypedLines] = useState<string[]>([])
  const terminalLines = buildTerminalLines(project)

  useEffect(() => {
    if (!isVisible) {
      setTypedLines([])
      return
    }

    const lines = buildTerminalLines(project)

    let currentLine = 0
    const interval = setInterval(() => {
      if (currentLine < lines.length) {
        const nextLine = lines[currentLine] ?? ""
        setTypedLines((prev) => [...prev, nextLine])
        currentLine++
      } else {
        clearInterval(interval)
      }
    }, 80)

    return () => clearInterval(interval)
  }, [isVisible, project])

  if (!isVisible) return null

  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm hacker-modal-enter">
      <div className="w-full max-w-md border border-primary bg-background p-6 font-mono text-xs">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 pb-2 border-b border-primary/30">
          <div className="w-3 h-3 rounded-full bg-destructive/70" />
          <div className="w-3 h-3 rounded-full bg-secondary/70" />
          <div className="w-3 h-3 rounded-full bg-primary/70" />
          <span className="ml-2 text-muted-foreground">project_info.sh</span>
        </div>

        {/* Terminal Content */}
        <div className="space-y-1 text-primary min-h-[200px]">
          {terminalLines.map((line, i) => {
            const isTyped = i < typedLines.length
            return (
              <div
                key={i}
                className={`min-h-[1.2em] ${line.startsWith(">") ? "text-primary text-glow" : "text-foreground/70"}`}
              >
                <span className={isTyped ? "" : "opacity-0"}>{line}</span>
                {i === typedLines.length - 1 && <span className="animate-pulse">_</span>}
              </div>
            )
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-6 pt-4 border-t border-primary/30">
          <Link
            href={`/projects/${project.slug}`}
            className="flex-1 px-4 py-2 border border-primary bg-primary/20 text-primary hover:bg-primary/30 transition-colors text-glow text-center"
          >
            [View Details]
          </Link>
          <button className="flex-1 px-4 py-2 border border-secondary bg-secondary/20 text-secondary hover:bg-secondary/30 transition-colors">
            [GitHub]
          </button>
        </div>
      </div>
    </div>
  )
}

export function ProjectsGrid() {
  const [filter, setFilter] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.05 })

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.type === filter)

  // Trigger animations after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  // Re-trigger when filter changes
  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [filter])

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex items-end justify-between border-b border-primary/30 pb-8">
          <div>
            <div className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">[SYSTEM.PROJECTS]</div>
            <h1 className="font-serif text-5xl md:text-6xl text-foreground">Systems Built</h1>
            <p className="text-foreground/70 text-lg mt-4 max-w-2xl">
              Production systems, open source tools, experiments, and explorations. Each built with intention and
              attention to craft.
            </p>
          </div>
          <div className="hidden md:block font-mono text-sm text-muted-foreground">
            <div className="border border-primary/20 bg-card/20 px-4 py-2">
              [{filteredProjects.length} {filteredProjects.length === 1 ? "project" : "projects"}]
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap gap-3">
          {filterTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-5 py-2 font-mono text-xs uppercase tracking-wider border transition-all duration-300 hover-lift ${filter === type
                ? "border-primary bg-primary/20 text-primary text-glow"
                : "border-primary/20 text-foreground/60 hover:border-primary/50 hover:text-primary"
                }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid - Masonry-style layout */}
      <div ref={sectionRef} className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => router.push(`/projects/${project.slug}`)}
              className={`scatter-item group relative border border-primary/20 bg-card/20 overflow-hidden transition-all duration-500 hover:border-primary/50 cursor-pointer ${index % 3 === 0 ? "md:col-span-2" : ""
                } ${isVisible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Hacker Modal Overlay */}
              <HackerModal
                project={project}
                isVisible={hoveredProject === project.id}
              />

              {/* Project Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:blur-sm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Status Badge */}
                <div className="absolute top-4 right-4 font-mono text-xs px-3 py-1 border border-secondary/50 bg-background/80 backdrop-blur-sm text-secondary text-glow-copper">
                  [{project.status}]
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="font-mono text-xs text-primary/70 uppercase tracking-wider">[{project.type}]</div>
                  <div className="font-mono text-xs text-muted-foreground">{project.year}</div>
                </div>

                <h2 className="font-serif text-3xl md:text-4xl mb-4 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h2>

                <p className="text-foreground/70 leading-relaxed mb-6">{project.description}</p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-3 py-1 border border-primary/30 bg-background/50 text-foreground/80 group-hover:border-primary/50 group-hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                <div className="border-t border-primary/20 pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="font-mono text-xs text-muted-foreground">
                        <span className="text-primary">▸</span> {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty state */}
      {filteredProjects.length === 0 && (
        <div className="max-w-7xl mx-auto px-6">
          <div className="border border-primary/20 bg-card/10 p-12 text-center">
            <div className="font-mono text-sm text-muted-foreground">[No projects found in this category]</div>
          </div>
        </div>
      )}
    </div>
  )
}
