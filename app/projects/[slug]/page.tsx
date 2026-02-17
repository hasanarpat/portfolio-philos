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
  "memento-mori": {
    title: "Memento Mori",
    status: "LIVE",
    year: "2024-2025",
    summary:
      "A premium e-commerce platform for dark fashion artifacts. Built with a monolithic headless approach using Next.js 15 and Payload CMS 3.0 for superior performance and developer experience.",
    stack: ["Next.js 15", "Payload CMS 3.0", "MongoDB", "Redux Toolkit", "Resend"],
    metrics: ["Sub-second TTFB", "Zero-latency Local API", "36/36 Static Pages"],
    image: "/dark-brutalist-architecture-at-night.png",
    notes: [
      "Monolithic Headless architecture sharing DB connections and React components.",
      "Multi-stage authentication with email verification and timing attack protection.",
      "Synchronized Cart logic with hybrid local/server state persistence.",
      "Next.js 15 adaptation with async params and dynamic suspense boundaries.",
    ],
    techAnalysis: {
      title: "Core Infrastructure & Engineering Decisions",
      content: "The decision to use Next.js 15 + Payload 3.0 represents a modern engineering shift. Instead of maintaining two separate repositories (Frontend/Backend), Memento Mori uses a Monolithic Headless approach. This results in zero-latency API calls via the Local API, shared end-to-end type safety, and a simplified deployment process with one build and one environment.",
    },
    directoryMap: `├── app/
│   ├── (app)/               # The "Mortal" Realm (E-commerce Frontend)
│   │   ├── account/         # Dashboard, Order History, Wishlist Management
│   │   ├── checkout/        # Secure Multi-step Checkout Flow
│   │   ├── product/[id]/    # Dynamic Product Detail (SSR/SEO Optimized)
│   │   └── worlds/          # Aesthetic Category Hub for Genre Navigation
│   ├── (payload)/           # The "Void" (Admin Control Panel)
│   ├── api/                 # Custom Zod-Validated API Endpoints
├── cms/                     # Payload Schema definitions (The Data Model)
└── lib/                     # Global utilities, Redux Hooks, Site Config`,
    workflows: [
      {
        title: "Multi-Stage Authentication & Verification",
        steps: [
          "User registers with schema validation via Zod.",
          "Payload CMS creates user with 'verified: false' status.",
          "Resend triggers a 'Ritual' verification email.",
          "User clicks token-verified link to recognize presence.",
          "Redirect to account with full verified permissions.",
        ],
      },
      {
        title: "Synchronized Cart & Inventory Flow",
        steps: [
          "Guest session items stored in Redux & LocalStorage.",
          "Authentication triggers background 'cart-sync' operation.",
          "Client-side cart pushed to Payload 'users' collection.",
          "Atomic server-side stock check performed during checkout ritual.",
        ],
      },
    ],
    uxInsights: [
      {
        title: "The Shopping Rituals",
        description: "Built with Redux Toolkit and hybrid sync logic for persistent artifacts across sessions. Wishlist items are cached as server-side relationships for cross-device longing.",
      },
      {
        title: "The Checkout Ritual",
        description: "A refined three-step process: Shipping (Zod validated), Payment (Integrated simulation), and Review (Immutable record creation). Success triggers the Resent confirmation ritual.",
      },
    ],
  },
} as const

export const metadata = {
  title: "Project — Systems Built",
}

type Project = (typeof projects)[keyof typeof projects]

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug as keyof typeof projects] as Project | undefined

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
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
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

        {"techAnalysis" in project && project.techAnalysis && (
          <div className="border border-primary/20 bg-card/20 p-8">
            <div className="font-mono text-xs text-primary uppercase tracking-widest">
              [TECH.ANALYSIS]
            </div>
            <h3 className="font-serif text-2xl text-foreground mt-4">{project.techAnalysis.title}</h3>
            <p className="text-foreground/70 mt-4 leading-relaxed">{project.techAnalysis.content}</p>
          </div>
        )}

        {"workflows" in project && project.workflows && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.workflows.map((flow, i) => (
              <div key={i} className="border border-primary/20 bg-card/10 p-6">
                <div className="font-mono text-xs text-primary uppercase tracking-widest">
                  [SYSTEM.FLOW_{i + 1}]
                </div>
                <h3 className="font-serif text-xl text-foreground mt-3">{flow.title}</h3>
                <div className="mt-4 space-y-3">
                  {flow.steps.map((step, j) => (
                    <div key={j} className="flex gap-3 text-sm text-foreground/70">
                      <span className="font-mono text-primary/50">{j + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Dynamic content sections would go here */}
        {"directoryMap" in project && project.directoryMap && (
          <div className="border border-primary/20 bg-card/10 p-6 overflow-x-auto">
            <div className="font-mono text-xs text-primary uppercase tracking-widest mb-4">
              [DIRECTORY.LOG]
            </div>
            <pre className="font-mono text-xs text-primary/80 leading-relaxed whitespace-pre">
              {project.directoryMap}
            </pre>
          </div>
        )}

        {"uxInsights" in project && project.uxInsights && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.uxInsights.map((insight, i) => (
              <div key={i} className="border border-primary/20 bg-card/10 p-6">
                <div className="font-mono text-xs text-secondary uppercase tracking-widest">
                  [UX.RITUAL_{i + 1}]
                </div>
                <h3 className="font-serif text-xl text-foreground mt-3">{insight.title}</h3>
                <p className="text-foreground/70 mt-3 text-sm leading-relaxed">{insight.description}</p>
              </div>
            ))}
          </div>
        )}

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
