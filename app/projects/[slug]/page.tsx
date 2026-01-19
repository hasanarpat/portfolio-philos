import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

const projects = {
  "distributed-event-system": {
    title: "Distributed Event System",
    status: "PRODUCTION",
    year: "2024",
    summary:
      "Event-driven backbone built for zero data loss and precise replay. Designed to stay resilient under spiky, unpredictable workloads.",
    stack: ["Rust", "Kafka", "PostgreSQL", "Kubernetes"],
    metrics: ["99.99% uptime", "4.2B events/month", "< 40ms publish latency"],
    image: "/distributed-cache-system-dark-technical-diagram.png",
    notes: [
      "Idempotent handlers with deterministic replay windows.",
      "Dual-write mitigation with ledger reconciliation.",
      "Realtime dashboards for drift detection and lag budgets.",
    ],
  },
  "infrastructure-orchestration": {
    title: "Infrastructure Orchestration",
    status: "DEPLOYED",
    year: "2023",
    summary:
      "A control plane for managing hundreds of services across regions with steady, observable rollouts.",
    stack: ["Go", "Kubernetes", "Terraform", "Prometheus"],
    metrics: ["200+ services", "5 regions", "60% faster rollouts"],
    image: "/network-protocol-3d-visualization-cyberpunk.png",
    notes: [
      "Policy-driven deploys with progressive exposure.",
      "Custom operators for environment drift correction.",
      "Unified audit trail with diff snapshots.",
    ],
  },
  "real-time-data-pipeline": {
    title: "Real-time Data Pipeline",
    status: "LIVE",
    year: "2023",
    summary:
      "Streaming aggregation layer focused on sub-second insights and graceful backpressure under load.",
    stack: ["Python", "Spark", "Redis", "Grafana"],
    metrics: ["< 800ms latency", "2.1M events/min", "24/7 alerting"],
    image: "/observability-dashboard-dark-cyberpunk.png",
    notes: [
      "Time-windowed aggregation with adaptive buffering.",
      "Hot path optimized for 99th percentile latency.",
      "Operator tooling for manual replays and audits.",
    ],
  },
} as const

export const metadata = {
  title: "Project — Systems Built",
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/projects"
            className="font-mono text-xs uppercase tracking-widest text-primary/70 hover:text-primary transition-colors"
          >
            ← back to projects
          </Link>
          <div className="font-mono text-xs text-muted-foreground">[{project.status}] · {project.year}</div>
        </div>

        <div className="border border-primary/20 bg-card/20 p-8 md:p-10 box-glow">
          <div className="font-mono text-xs text-primary uppercase tracking-widest">[PROJECT.DOSSIER]</div>
          <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-3">{project.title}</h1>
          <p className="text-foreground/70 mt-4 max-w-3xl">{project.summary}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
          <div className="border border-primary/20 bg-card/10 overflow-hidden">
            <div className="relative aspect-video">
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 60vw" />
            </div>
            <div className="p-5">
              <div className="font-mono text-xs text-primary uppercase tracking-widest">[SYSTEM.MAP]</div>
              <p className="text-foreground/70 mt-2">
                Visual map of critical lanes, dependencies, and observability touchpoints.
              </p>
            </div>
          </div>
          <div className="border border-primary/20 bg-card/10 p-6 space-y-5">
            <div>
              <div className="font-mono text-xs text-primary uppercase tracking-widest">[STACK]</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[10px] uppercase tracking-widest border border-primary/20 px-2 py-1 text-foreground/60"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-primary uppercase tracking-widest">[KEY.METRICS]</div>
              <div className="mt-3 space-y-2 text-foreground/70 text-sm">
                {project.metrics.map((metric) => (
                  <div key={metric} className="flex items-center gap-2">
                    <span className="text-primary">▸</span>
                    {metric}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border border-primary/20 bg-card/10 p-6">
          <div className="font-mono text-xs text-primary uppercase tracking-widest">[ARCHITECTURE.NOTES]</div>
          <div className="mt-4 space-y-2 text-foreground/70">
            {project.notes.map((note) => (
              <div key={note} className="flex items-start gap-2">
                <span className="text-secondary">▸</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
