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
    image: "/memento_home.png",
    url: "https://memento-mori-rouge.vercel.app/",
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
│   ├── (app)/               # The \"Mortal\" Realm (E-commerce Frontend)
│   │   ├── account/         # Dashboard, Order History, Wishlist Management
│   │   ├── checkout/        # Secure Multi-step Checkout Flow
│   │   ├── product/[id]/    # Dynamic Product Detail (SSR/SEO Optimized)
│   │   └── worlds/          # Aesthetic Category Hub for Genre Navigation
│   ├── (payload)/           # The \"Void\" (Admin Control Panel)
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
    fullContent: `
# Memento Mori — High-End Aesthetic E-Commerce Artifact

Memento Mori is a premium, specialized e-commerce platform designed for dark fashion and subculture artifacts. Built with a \"Headless-First\" philosophy, the project leverages the cutting-edge capabilities of **Next.js 15** and **Payload CMS 3.0** to deliver a lightning-fast, SEO-optimized, and highly customizable shopping experience.

---

## 🛠️ Technology Stack & Engineering Decisions

### Core Infrastructure
*   **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) — Selected for its superior SSR/SSG capabilities, allowing for near-instant page loads on image-heavy product grids.
*   **Headless CMS:** [Payload CMS 3.x](https://payloadcms.com/) — Chosen over standard CMS options for its \"Payload is just Next.js\" architecture, allowing sharing of the same React server components and database connection.
*   **Database:** [MongoDB Atlas](https://www.mongodb.com/) — Used for its flexible document schema, ideal for product modeling where attributes (size, material, themes) vary across collections.
*   **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) — Managed complex client states (Cart, Wishlist, UI toggles) while maintaining persistence through \`localStorage\`.

### Why This Stack?
The decision to use Next.js 15 + Payload 3.0 represents a modern engineering shift. Instead of maintaining two separate repositories (Frontend/Backend), this project uses a **Monolithic Headless** approach. This results in:
1.  **Zero-latency API calls:** Fetching data via Local API instead of HTTP when on the server.
2.  **Shared Types:** Payload's type generator provides end-to-end type safety from the DB to the UI.
3.  **Simplified Deployment:** One build, one process, one environment.

---

## 🏗️ Architecture & System Flows

### 🔐 Multi-Stage Authentication & Verification
The authentication system is designed with security-first principles, incorporating email validation and anti-brute-force measures.

\`\`\`mermaid
sequenceDiagram
    participant U as User
    participant F as Next.js Frontend
    participant A as Auth API (Zod)
    participant P as Payload CMS
    participant R as Resend (Email)

    U->>F: Register (Name, Email, Password)
    F->>A: Validate Schema & Input
    A->>P: Create User (Verified: false)
    P->>R: Trigger \"Ritual\" Verification Email
    U->>F: Click Verification Link (with token)
    F->>P: Verify Token & Update Status
    P-->>F: Success: Presence Recognized
    F-->>U: Redirect to Account (Verified: true)
\`\`\`

**Engineer's Note:** We implemented artificial delays (500-1000ms) in auth routes to prevent timing attacks and brute-force enumeration.

### 🛒 Synchronized Cart & Inventory Flow
The shopping cart manages a complex state that bridges guest sessions and logged-in profiles.

1.  **Guest Browsing:** Items added to Redux state and \`localStorage\`.
2.  **Authentication:** Upon login, the frontend triggers a \`cart-sync\` operation.
3.  **Server Persistance:** The client-side cart is pushed to the Payload \`users\` collection, ensuring the \"Ritual\" continues across devices.
4.  **Stock Lock:** During checkout, the system performs a final atomic server-side stock check.

---

## 🏛️ Admin Panel & Content Orchestration

Memento Mori is not just a static storefront; it is a dynamic content engine. The custom-built Admin Panel (via Payload 3.0) allows non-technical managers to orchestrate complex marketing campaigns and manage the site's lifecycle with ease.

![Admin Panel Dashboard: Curated Collections and Shop Management](/memento_admin.png)

### 🎭 Dynamic Page Builder (No-Code Blocks)
The system features a \"WordPress-style\" but modern block-based page builder. Administrators can create new pages (e.g., \`/p/sevgililer-gunu\`) by stacking modular blocks:

1.  **Hero Block:** High-impact banners with custom imagery, headings, and call-to-actions.
2.  **Product Grid Block:** Curated selections of artifacts linked directly from the \`Products\` collection. Supports both Grid and Carousel layouts.
3.  **Content Block:** Lexical RichText editor for deep storytelling and ritual descriptions.

> [!TIP]
> **Example Campaign (Valentine's Day):** An admin can launch a campaign in minutes by creating a page with a romantic-gothic Hero banner, a Product Grid showing \"Gifts for Her,\" and a Content block explaining the ritual of the day—all without a single line of code.

### 🎟️ Advanced Coupon & Discount Engine
Campaigns are powered by a robust, multi-layered logic engine that balances administrative flexibility with strict runtime validation.

#### 1. Administrative Orchestration (Admin Panel)
Administrators define the \"Rules of Engagement\" for each coupon:
*   **Discount Logic:** Toggle between \`Percentage\` (e.g., 15% OFF) or \`Fixed Amount\` (e.g., ₺200 OFF).
*   **Temporal Constraints:** \`Valid From\` and \`Valid Until\` dates to automate \"Flash Sale\" behavior.
*   **Scarcity Controls:** \`Max Uses\` (site-wide limit) and \`Max Uses Per User\` to maintain brand exclusivity.
*   **Targeted Rituals:** \`Minimum Order Amount\` requirement and \`Applicable to New Users Only\` flags (authenticated by checking historical order archives).

#### 2. Runtime Validation API (\`/api/shop/validate-coupon\`)
When a user attempts to apply a coupon, the system triggers a secure backend ritual:
1.  **Identity Check:** If the coupon is for \"New Users Only,\" the API queries the \`Orders\` collection to ensure the user has zero previous non-cancelled transactions.
2.  **Capacity Check:** The system verifies the global \`usageCount\` hasn't exceeded the \`maxUses\` threshold.
3.  **Atomic Calculation:** Instead of trusting the client, the server re-calculates the discount based on the current cart subtotal and the immutable coupon rules in the database.

#### 3. Frontend Integration (Redux & UI)
*   **Available Coupons UI:** A dedicated component fetches valid, public-facing coupons and presents them as \"Ritual Offerings\" that can be copied or applied with a single click.
*   **State Persistence:** Once validated, the coupon is stored in the Redux state, persisting across the shopping journey and automatically applied to the final checkout calculation.

### 📦 Lifecycle Management
*   **Order Tracking:** View and manage orders in real-time, update fulfillment statuses, and track payment integrity.
*   **Inventory Control:** Centralized dashboard for stock management, price updates, and category organization.
*   **Media Library:** A unified asset manager for all product photography and campaign visuals.

---

## 📂 Engineering Directory Map

\`\`\`text
├── app/
│   ├── (app)/               # The \"Mortal\" Realm (E-commerce Frontend)
│   │   ├── account/         # Dashboard, Order History, Wishlist Management
│   │   ├── checkout/        # Secure Multi-step Checkout Flow
│   │   ├── product/[id]/    # Dynamic Product Detail (SSR/SEO Optimized)
│   │   └── worlds/          # Aesthetic Category Hub for Genre Navigation
│   ├── (payload)/           # The \"Void\" (Admin Control Panel)
│   ├── api/                 # Custom Zod-Validated API Endpoints
│   │   ├── auth/            # Login, Register, Verify logic
│   │   └── shop/            # Cart Sync, Checkout, Coupons, Search
│   └── components/          # Fragmented Atomic Design Components
├── cms/                     # Payload Schema definitions (The Data Model)
│   ├── Products.ts          # Advanced mapping for artifacts
│   ├── Orders.ts            # Immutable transaction history
│   └── seed.ts              # Data bootstrapping logic
└── lib/                     # Global utilities, Redux Hooks, Site Config
\`\`\`

---

## 🏛️ Page Deep-Dives & UX

### 🛒 The Shopping Rituals (Cart & Wishlist)
*   **State Persistence:** Built with Redux Toolkit and \`redux-persist\` logic (manual localStorage implementation) to ensure items remain across sessions even for guest users.
*   **Hybrid Sync Logic:** 
    *   **Phase 1 (Browser):** Immediate UI feedback via client-side state.
    *   **Phase 2 (Background):** Debounced API calls to \`api/shop/cart\` to sync the state with the Payload \`users\` collection when authenticated.
*   **Wishlist Caching:** A server-side relationship between Users and Products, allowing for persistent artifacts that the user \"longs for\" regardless of their device.

### 🏺 The Product Detail Page (PDP)
*   **SSR for SEO:** Next.js generates static metadata and JSON-LD for rich snippets (price, stock, rating) on search engines.
*   **High-End Visuals:** Responsive images with blur-up placeholders.
*   **Relationship Mapping:** Automatically fetches \"Related Artifacts\" based on category and theme hierarchy.
*   ![PDP Mockup: Aesthetic Product Grid with Dark Mode Overlays](/memento_home.png)

### 💳 The Checkout Ritual
A refined, frictionless three-step process built for reliability.

1.  **Shipping:** Intelligent form validation with Zod. Supports guest checkout and saved addresses.
2.  **Payment:** Integrated simulation layer for secure card processing.
3.  **Review:** Final summary before creating the immutable \`Orders\` record in the database.
*   **Order Creation Logic:** When a user completes a checkout, the system generates a unique ID, sends a confirmation email via **Resend**, and clears the cart on both the server and client simultaneously.
*   ![Checkout Mockup: Minimalist Multi-Step Form with Progress Indicator](/memento_cart.png)

---

## 🚀 Performance & Optimization

### Next.js 15 Adaptation
*   **Awaiting Params:** Adapted all dynamic routes to meet the new async requirement in Next.js 15 for \`params\` and \`searchParams\`.
*   **Suspense Boundaries:** Critical Client Components (Search, Filtering) are wrapped in \`Suspense\` to prevent \"Bailout of client-side rendering\" errors during production builds.
*   **Static Generation:** 36/36 pages generated during build time for sub-second TTFB (Time to First Byte).

---

## 🖋️ Portfolio Context
*Developed by Hasan Arpat*

Memento Mori represents the intersection of subculture aesthetics and high-end web architecture. It demonstrates proficiency in full-stack JavaScript development, headless CMS integration, and the implementation of secure, scalable commerce logic.
    `,
  },
} as const

export const metadata = {
  title: "Project — Systems Built",
}

type Project = (typeof projects)[keyof typeof projects]

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = (projects as any)[slug] as Project | undefined

  if (!project) {
    notFound()
  }

  const projectWithUrl = project as Project & { url?: string; fullContent?: string }

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
          <div className="flex justify-between items-start">
            <div>
              <div className="font-mono text-xs text-primary uppercase tracking-widest">[PROJECT.DOSSIER]</div>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-3">{project.title}</h1>
            </div>
            {projectWithUrl.url && (
              <a
                href={projectWithUrl.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs uppercase tracking-widest border border-primary px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 transition-all text-glow"
              >
                [LAUNCH.SYSTEM]
              </a>
            )}
          </div>
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

        {projectWithUrl.fullContent && (
          <div className="pt-20 border-t border-primary/10">
            <div className="max-w-3xl mx-auto">
              <div className="font-mono text-xs text-primary uppercase tracking-widest mb-12 text-center">
                —— [FULL.REPORT] ——
              </div>
              <div className="prose prose-invert prose-primary max-w-none">
                <div className="space-y-12 text-foreground/80 leading-relaxed font-serif text-lg">
                  {projectWithUrl.fullContent.split("\n\n").map((paragraph, i) => {
                    const trimmed = paragraph.trim();

                    if (trimmed.startsWith("# ")) {
                      return <h2 key={i} className="text-4xl font-serif text-foreground border-b border-primary/20 pb-6 mt-16 mb-8">{trimmed.replace("# ", "")}</h2>
                    }
                    if (trimmed.startsWith("## ")) {
                      return <h3 key={i} className="text-3xl font-serif text-foreground mt-14 mb-6">{trimmed.replace("## ", "")}</h3>
                    }
                    if (trimmed.startsWith("### ")) {
                      return <h4 key={i} className="text-2xl font-serif text-foreground mt-10 mb-4">{trimmed.replace("### ", "")}</h4>
                    }
                    if (trimmed.startsWith("---")) {
                      return <hr key={i} className="border-primary/20 my-16" />
                    }

                    // Image rendering: ![caption](path)
                    if (trimmed.startsWith("![")) {
                      const match = trimmed.match(/!\[(.*?)\]\((.*?)\)/);
                      if (match) {
                        const [, alt, src] = match;
                        // Map specific placeholder paths if needed, otherwise use src as provided
                        const imageSrc = src.includes('atlas.jpg') ? '/memento_home.png' :
                          src.includes('chateau.jpg') ? '/memento_cart.png' : src;

                        return (
                          <figure key={i} className="my-12 border border-primary/20 bg-card/10 overflow-hidden">
                            <div className="relative aspect-video">
                              <Image
                                src={imageSrc}
                                alt={alt}
                                fill
                                className="object-cover opacity-80 hover:opacity-100 transition-opacity"
                                sizes="(max-width: 768px) 100vw, 800px"
                              />
                            </div>
                            <figcaption className="p-4 border-t border-primary/10 font-mono text-[10px] uppercase tracking-widest text-primary/60 text-center">
                              [{alt}]
                            </figcaption>
                          </figure>
                        );
                      }
                    }

                    // Blockquotes & Alerts
                    if (trimmed.startsWith("> ")) {
                      const content = trimmed.replace(/^> /, "");
                      const isAlert = content.startsWith("[!");

                      if (isAlert) {
                        const alertMatch = content.match(/\[!(.*?)\]\n([\s\S]*)/);
                        if (alertMatch) {
                          const [, type, text] = alertMatch;
                          return (
                            <div key={i} className="my-8 border border-primary/30 bg-primary/5 p-6 space-y-2">
                              <div className="font-mono text-[10px] uppercase tracking-tighter text-primary font-bold">
                                [{type}]
                              </div>
                              <div className="text-foreground/90 italic">{text}</div>
                            </div>
                          );
                        }
                      }

                      return (
                        <blockquote key={i} className="border-l-2 border-primary/30 pl-6 my-10 italic text-foreground/60 text-xl font-serif">
                          {content}
                        </blockquote>
                      );
                    }

                    // Code blocks
                    if (trimmed.startsWith("```")) {
                      const codeContent = trimmed.replace(/^```\w*\n/, "").replace(/```$/, "");
                      return (
                        <div key={i} className="my-8 border border-primary/20 bg-black/40 p-6 overflow-x-auto">
                          <pre className="font-mono text-xs text-primary/80 leading-relaxed whitespace-pre">
                            {codeContent}
                          </pre>
                        </div>
                      );
                    }

                    // Lists
                    if (trimmed.startsWith("* ") || trimmed.startsWith("- ")) {
                      return (
                        <ul key={i} className="space-y-4 my-8 ml-4">
                          {trimmed.split("\n").map((item, j) => (
                            <li key={j} className="flex gap-4 items-start">
                              <span className="text-primary mt-2 text-[10px]">◆</span>
                              <span className="flex-1">{item.trim().replace(/^[*+-]\s+/, "")}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    if (trimmed.match(/^\d+\./)) {
                      return (
                        <ol key={i} className="space-y-6 my-8 ml-4">
                          {trimmed.split("\n").map((item, j) => (
                            <li key={j} className="flex gap-5 items-start">
                              <span className="font-mono text-primary/40 text-sm mt-1">{j + 1}.</span>
                              <span className="flex-1">
                                <strong className="text-foreground/90 block mb-1">{item.trim().split(':')[0]}:</strong>
                                {item.trim().split(':').slice(1).join(':')}
                              </span>
                            </li>
                          ))}
                        </ol>
                      );
                    }

                    // Default paragraph with dropcap for first or specific breaks
                    return (
                      <p key={i} className="first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-primary first-letter:leading-none">
                        {trimmed}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
