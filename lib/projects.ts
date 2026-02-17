
export interface Project {
    id: number
    slug: string
    title: string
    type: string
    status: string
    year: string
    summary: string // Used for detail page
    description?: string // Used for grid (can fallback to summary)
    stack: string[]
    metrics: string[]
    image: string
    url?: string
    check?: boolean
    notes?: string[]
    techAnalysis?: {
        title: string
        content: string
    }
    directoryMap?: string
    workflows?: {
        title: string
        steps: string[]
    }[]
    uxInsights?: {
        title: string
        description: string
    }[]
    fullContent?: string
}

export const ALL_PROJECTS: Record<string, Project> = {
    "distributed-event-system": {
        id: 1,
        slug: "distributed-event-system",
        type: "Production System",
        title: "Distributed Event System", // Grid title: DistributedCache.io (will need to handle this)
        status: "PRODUCTION",
        year: "2024",
        summary:
            "Event-driven backbone built for zero data loss and precise replay. Designed to stay resilient under spiky, unpredictable workloads.",
        description:
            "High-throughput distributed caching layer serving 50M+ requests/day. Built for resilience with automatic failover and geographic replication.",
        stack: ["Rust", "Kafka", "PostgreSQL", "Kubernetes"], // Grid adds Redis
        metrics: ["99.99% uptime", "4.2B events/month", "< 40ms publish latency"],
        image: "/distributed-cache-system-dark-technical-diagram.png",
        notes: [
            "Idempotent handlers with deterministic replay windows.",
            "Dual-write mitigation with ledger reconciliation.",
            "Realtime dashboards for drift detection and lag budgets.",
        ],
    },
    "real-time-data-pipeline": {
        id: 2,
        slug: "real-time-data-pipeline",
        type: "Open Source",
        title: "ObservabilityKit", // Changed to match grid title preference for consistency
        status: "LIVE",
        year: "2023",
        summary:
            "Streaming aggregation layer focused on sub-second insights and graceful backpressure under load.",
        description:
            "Batteries-included observability toolkit for Node.js applications. Zero-config tracing, metrics, and structured logging with minimal overhead.",
        stack: ["TypeScript", "Node.js", "OpenTelemetry"], // Grid stack
        metrics: ["< 800ms latency", "2.1M events/min", "24/7 alerting"], // Hybrid metrics
        image: "/observability-dashboard-dark-cyberpunk.png",
        notes: [
            "Time-windowed aggregation with adaptive buffering.",
            "Hot path optimized for 99th percentile latency.",
            "Operator tooling for manual replays and audits.",
        ],
    },
    "neural-archive": {
        id: 3,
        slug: "neural-archive",
        title: "Neural Archive",
        type: "Experiment",
        status: "PROTOTYPE",
        year: "2024",
        summary:
            "Semantic search engine for personal archives using neural embeddings. Explores how machines can help us remember and connect ideas.",
        description:
            "Semantic search engine for personal archives using neural embeddings. Explores how machines can help us remember and connect ideas.",
        stack: ["Python", "PyTorch", "React"],
        metrics: ["10k+ documents indexed", "Sub-second search", "Self-hosted"],
        image: "/neural-network-semantic-search-visualization.png",
    },
    "protocol-explorer": {
        id: 4,
        slug: "protocol-explorer",
        title: "Protocol Explorer",
        type: "Educational",
        status: "DEMO",
        year: "2023",
        summary:
            "Interactive visualization of network protocols. Watch TCP handshakes, DNS queries, and HTTP requests in real-time 3D space.",
        description:
            "Interactive visualization of network protocols. Watch TCP handshakes, DNS queries, and HTTP requests in real-time 3D space.",
        stack: ["Go", "WebAssembly", "Three.js"],
        metrics: ["5k+ students used", "15 protocols visualized", "Browser-based"],
        image: "/network-protocol-3d-visualization-cyberpunk.png",
    },
    "infrastructure-orchestration": {
        id: 5,
        slug: "infrastructure-orchestration",
        title: "TimeCapsule DB", // Grid title
        type: "Production System",
        status: "DEPLOYED",
        year: "2023",
        summary:
            "A control plane for managing hundreds of services across regions with steady, observable rollouts.",
        description:
            "Immutable append-only database for audit trails and compliance. Every write is permanent, every read is verifiable.",
        stack: ["PostgreSQL", "Rust", "Docker"], // Grid stack
        metrics: ["200+ services", "5 regions", "60% faster rollouts"],
        image: "/immutable-database-architecture-dark.png",
        notes: [
            "Policy-driven deploys with progressive exposure.",
            "Custom operators for environment drift correction.",
            "Unified audit trail with diff snapshots.",
        ],
    },
    "terminal-aesthetics": {
        id: 6,
        slug: "terminal-aesthetics",
        title: "Terminal Aesthetics",
        type: "Art Project",
        status: "ONGOING",
        year: "2024",
        summary:
            "Generative art project creating terminal-inspired visuals. ASCII meets shaders in real-time algorithmic compositions.",
        description:
            "Generative art project creating terminal-inspired visuals. ASCII meets shaders in real-time algorithmic compositions.",
        stack: ["JavaScript", "WebGL", "GLSL"],
        metrics: ["100+ compositions", "WebGL shaders", "Generative"],
        image: "/ascii-art-glsl-shader-terminal-aesthetic.png",
    },
    "memento-mori": {
        id: 7,
        slug: "memento-mori",
        type: "Production System",
        title: "Memento Mori",
        status: "LIVE",
        year: "2024-2025",
        summary:
            "A premium e-commerce platform for dark fashion artifacts. Built with a monolithic headless approach using Next.js 15 and Payload CMS 3.0 for superior performance and developer experience.",
        description:
            "A high-end e-commerce platform for dark fashion artifacts, leveraging a headless-first architecture for zero-latency performance.",
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
            content:
                "The decision to use Next.js 15 + Payload 3.0 represents a modern engineering shift. Instead of maintaining two separate repositories (Frontend/Backend), Memento Mori uses a Monolithic Headless approach. This results in zero-latency API calls via the Local API, shared end-to-end type safety, and a simplified deployment process with one build and one environment.",
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
                description:
                    "Built with Redux Toolkit and hybrid sync logic for persistent artifacts across sessions. Wishlist items are cached as server-side relationships for cross-device longing.",
            },
            {
                title: "The Checkout Ritual",
                description:
                    "A refined three-step process: Shipping (Zod validated), Payment (Integrated simulation), and Review (Immutable record creation). Success triggers the Resent confirmation ritual.",
            },
        ],
        fullContent: `
# Memento Mori — High-End Aesthetic E-Commerce Artifact

Memento Mori is a premium, specialized e-commerce platform designed for dark fashion and subculture artifacts. Built with a "Headless-First" philosophy, the project leverages the cutting-edge capabilities of **Next.js 15** and **Payload CMS 3.0** to deliver a lightning-fast, SEO-optimized, and highly customizable shopping experience.

---

## 🛠️ Technology Stack & Engineering Decisions

### Core Infrastructure

*   **Framework:** [Next.js 15 (App Router)](https://nextjs.org/) — Selected for its superior SSR/SSG capabilities, allowing for near-instant page loads on image-heavy product grids.
*   **Headless CMS:** [Payload CMS 3.x](https://payloadcms.com/) — Chosen over standard CMS options for its "Payload is just Next.js" architecture, allowing sharing of the same React server components and database connection.
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
    P->>R: Trigger "Ritual" Verification Email
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
3.  **Server Persistance:** The client-side cart is pushed to the Payload \`users\` collection, ensuring the "Ritual" continues across devices.
4.  **Stock Lock:** During checkout, the system performs a final atomic server-side stock check.

---

## 🏛️ Admin Panel & Content Orchestration

Memento Mori is not just a static storefront; it is a dynamic content engine. The custom-built Admin Panel (via Payload 3.0) allows non-technical managers to orchestrate complex marketing campaigns and manage the site's lifecycle with ease.

![Admin Panel Dashboard: Curated Collections and Shop Management](/memento_admin.png)

### 🎭 Dynamic Page Builder (No-Code Blocks)

The system features a "WordPress-style" but modern block-based page builder. Administrators can create new pages (e.g., \`/p/sevgililer-gunu\`) by stacking modular blocks:

1.  **Hero Block:** High-impact banners with custom imagery, headings, and call-to-actions.
2.  **Product Grid Block:** Curated selections of artifacts linked directly from the \`Products\` collection. Supports both Grid and Carousel layouts.
3.  **Content Block:** Lexical RichText editor for deep storytelling and ritual descriptions.

> [!TIP]
> **Example Campaign (Valentine's Day):** An admin can launch a campaign in minutes by creating a page with a romantic-gothic Hero banner, a Product Grid showing "Gifts for Her," and a Content block explaining the ritual of the day—all without a single line of code.

### 🎟️ Advanced Coupon & Discount Engine

Campaigns are powered by a robust, multi-layered logic engine that balances administrative flexibility with strict runtime validation.

#### 1. Administrative Orchestration (Admin Panel)

Administrators define the "Rules of Engagement" for each coupon:

*   **Discount Logic:** Toggle between \`Percentage\` (e.g., 15% OFF) or \`Fixed Amount\` (e.g., ₺200 OFF).
*   **Temporal Constraints:** \`Valid From\` and \`Valid Until\` dates to automate "Flash Sale" behavior.
*   **Scarcity Controls:** \`Max Uses\` (site-wide limit) and \`Max Uses Per User\` to maintain brand exclusivity.
*   **Targeted Rituals:** \`Minimum Order Amount\` requirement and \`Applicable to New Users Only\` flags (authenticated by checking historical order archives).

#### 2. Runtime Validation API (\`/api/shop/validate-coupon\`)

When a user attempts to apply a coupon, the system triggers a secure backend ritual:

1.  **Identity Check:** If the coupon is for "New Users Only," the API queries the \`Orders\` collection to ensure the user has zero previous non-cancelled transactions.
2.  **Capacity Check:** The system verifies the global \`usageCount\` hasn't exceeded the \`maxUses\` threshold.
3.  **Atomic Calculation:** Instead of trusting the client, the server re-calculates the discount based on the current cart subtotal and the immutable coupon rules in the database.

#### 3. Frontend Integration (Redux & UI)

*   **Available Coupons UI:** A dedicated component fetches valid, public-facing coupons and presents them as "Ritual Offerings" that can be copied or applied with a single click.
*   **State Persistence:** Once validated, the coupon is stored in the Redux state, persisting across the shopping journey and automatically applied to the final checkout calculation.

### 📦 Lifecycle Management

*   **Order Tracking:** View and manage orders in real-time, update fulfillment statuses, and track payment integrity.
*   **Inventory Control:** Centralized dashboard for stock management, price updates, and category organization.
*   **Media Library:** A unified asset manager for all product photography and campaign visuals.

---

## 📂 Engineering Directory Map

\`\`\`text
├── app/
│   ├── (app)/               # The "Mortal" Realm (E-commerce Frontend)
│   │   ├── account/         # Dashboard, Order History, Wishlist Management
│   │   ├── checkout/        # Secure Multi-step Checkout Flow
│   │   ├── product/[id]/    # Dynamic Product Detail (SSR/SEO Optimized)
│   │   └── worlds/          # Aesthetic Category Hub for Genre Navigation
│   ├── (payload)/           # The "Void" (Admin Control Panel)
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
*   **Wishlist Caching:** A server-side relationship between Users and Products, allowing for persistent artifacts that the user "longs for" regardless of their device.

### 🏺 The Product Detail Page (PDP)

*   **SSR for SEO:** Next.js generates static metadata and JSON-LD for rich snippets (price, stock, rating) on search engines.
*   **High-End Visuals:** Responsive images with blur-up placeholders.
*   **Relationship Mapping:** Automatically fetches "Related Artifacts" based on category and theme hierarchy.

![PDP Mockup: Aesthetic Product Grid with Dark Mode Overlays](/memento_home.png)

### 💳 The Checkout Ritual

A refined, frictionless three-step process built for reliability.

1.  **Shipping:** Intelligent form validation with Zod. Supports guest checkout and saved addresses.
2.  **Payment:** Integrated simulation layer for secure card processing.
3.  **Review:** Final summary before creating the immutable \`Orders\` record in the database.

*   **Order Creation Logic:** When a user completes a checkout, the system generates a unique ID, sends a confirmation email via **Resend**, and clears the cart on both the server and client simultaneously.

![Checkout Mockup: Minimalist Multi-Step Form with Progress Indicator](/memento_cart.png)

---

## 🚀 Performance & Optimization

### Next.js 15 Adaptation

*   **Awaiting Params:** Adapted all dynamic routes to meet the new async requirement in Next.js 15 for \`params\` and \`searchParams\`.
*   **Suspense Boundaries:** Critical Client Components (Search, Filtering) are wrapped in \`Suspense\` to prevent "Bailout of client-side rendering" errors during production builds.
*   **Static Generation:** 36/36 pages generated during build time for sub-second TTFB (Time to First Byte).

---

## 🖋️ Portfolio Context

*Developed by Hasan Arpat*

Memento Mori represents the intersection of subculture aesthetics and high-end web architecture. It demonstrates proficiency in full-stack JavaScript development, headless CMS integration, and the implementation of secure, scalable commerce logic.
    `,
    },
    "masalci-kedi": {
        id: 8,
        type: "Production System",
        title: "Masalcı Kedi",
        url: "https://masalci-kedi.vercel.app/",
        slug: "masalci-kedi",
        status: "BETA",
        year: "2025",
        summary:
            "A deterministic narrative engine fusing Astro's island architecture with generative AI for high-fidelity, zero-latency storytelling.",
        description:
            "A deterministic narrative engine fusing Astro's island architecture with generative AI for high-fidelity, zero-latency storytelling.",
        stack: ["Astro v5.1", "Gemini AI", "Zod", "TypeScript", "Tailwind"],
        metrics: ["Zero-JS Hydration", "100/100 Lighthouse", "Edge-Native"],
        image: "/masalci_kedi_cover.png",
        notes: [
            "Zero-JS baseline providing absolute performance on legacy hardware.",
            "Deterministic build rituals ensure completely immutable artifacts.",
            "AI media pipeline with 16:9 aspect ratio heuristics for modern discovery.",
        ],
        techAnalysis: {
            title: "Architectural Philosophy: The Island of Determinism",
            content:
                "Masalcı Kedi rejects the complexity of modern SPAs in favor of **Astro Island Architecture**. By treating JavaScript as an optional enhancement rather than a requirement, the platform achieves a 'Zero-JS' baseline. This ensures that the narrative experience is delivered with zero latency, regardless of network conditions.",
        },
        directoryMap: `src/
├── components/      # UI Atoms & Molecules (The Visual Layer)
├── content/         # Markdown Artifacts (The Core Narrative Store)
│   ├── config.ts    # Schema Protocols
│   └── stories/     # Individual Tale Manifests
├── layouts/         # Structural Blueprints (The Skeletal Framework)
├── pages/           # Deterministic Routing (The Navigation Ley-Lines)
└── styles/          # Global Aesthetic Consonants (Tailwind Directives)`,
        workflows: [
            {
                title: "The Narrative Lifecycle",
                steps: [
                    "Agent (Architect) submits Story Markdown to Content Collection.",
                    "Zod Schema performs a rigorous Validation Ritual.",
                    "Astro Builder synthesizes the Static Site artifacts.",
                    "Files are deployed immutably to the Global Edge (Vercel).",
                ],
            },
        ],
        fullContent: `
# Masalcı Kedi — The Alchemy of Narrative and Performance

In an era of digital saturation, "Masalcı Kedi" emerges as a paradigm shift in educational content delivery, fusing the structural rigidity of modern web architecture with the fluid creativity of generative AI. This platform is not merely a repository of stories but a deterministic engine designed to deliver high-fidelity artifacts with near-zero latency, ensuring that the digital bridge between child and story remains unbroken by the "mortal realm" of network bottlenecks.

---

## 🏛️ Architectural Foundations: The Island of Determinism

The architectural philosophy of Masalcı Kedi centers on the **Astro Island Architecture**, a ritual of isolation where JavaScript is only permitted to manifest where interaction is absolutely essential. For a content-centric platform, this provides a "Zero-JS" baseline, projecting static HTML artifacts to the edge with unmatched efficiency.

### 1. The Zenith of Performance: Zero-JS Hydration
By leveraging **Astro v5.1**, we’ve achieved a state of absolute performance. The system bypasses the traditional overhead of SPA frameworks, ensuring that the critical rendering path remains unencumbered. This is not just a performance optimization; it is a commitment to accessibility, allowing the engine to run on legacy hardware and low-bandwidth channels without compromise.

### 2. Static Site Synthesis (SSG)
Every story is pre-compiled during the *Build Ritual*. This ensures that the frontend is decoupled from any backend volatility, creating an immutable state that is served via global CDN edge nodes.

---

## ⚙️ Engineering Rituals & Deterministic Flows

The backend operations—or what we call the **Digital Forge**—are governed by strict type-safe protocols to ensure that no corrupted artifact ever reaches the production realm.

### 1. Content Orchestration via Type-Safe Artifacts
We utilize **Astro Content Collections** coupled with **Zod** schema validation. Every markdown entry must satisfy a complex interface before it is processed by the build pipeline.

> [!IMPORTANT]
> **Deterministic Validation:** The Zod schema acts as a gatekeeper in the "Mortal Realm" (Development), ensuring that every story includes mandatory SEO metadata, reading duration heuristics, and verified image paths.

![Caption: The "Educational Stories" category page, dynamically generated from type-safe content collections.](/masalci_kedi_category.png)

\`\`\`typescript
// The schema ritual for story artifacts
const storiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(10),
    description: z.string().max(160),
    image: z.string().url().or(z.string().regex(/^\//)), 
    category: z.enum(['hayvan-hikayeleri', 'egitici-hikayeler', 'dogasever-cocuk-hikayeleri']),
    readingTime: z.number().positive(),
  }),
});
\`\`\`

### 2. The Visionary Eye: AI Media Pipeline
Visual storytelling is powered by a custom orchestration of **Google Gemini (Imagen)** models. The engineering challenge was not just generation, but the adaptation of assets for modern search surfaces like Google Discover.

> [!TIP]
> **Aspect Ratio Heuristics:** To maximize visibility in the "Discovery Void," we implemented a 16:9 post-processing ritual for key narrative assets, moving away from standard 1:1 squares to capture premium real estate in user feeds.

![Caption: The "Story Grid" interface, showcasing the 16:9 aspect ratio and category filtering.](/masalci_kedi_story_grid.png)

---

## 📜 System Provenance (Structure)

The directory map reflects the separation of concerns, ensuring that the *Rituals* (logic) are distinct from the *Artifacts* (content).

\`\`\`text
src/
├── components/      # UI Atoms & Molecules (The Visual Layer)
├── content/         # Markdown Artifacts (The Core Narrative Store)
│   ├── config.ts    # Schema Protocols
│   └── stories/     # Individual Tale Manifests
├── layouts/         # Structural Blueprints (The Skeletal Framework)
├── pages/           # Deterministic Routing (The Navigation Ley-Lines)
└── styles/          # Global Aesthetic Consonants (Tailwind Directives)
\`\`\`

---

## 🔄 The Narrative Lifecycle

The following sequence visualizes the transformation of a raw idea into a production-ready narrative artifact.

\`\`\`mermaid
sequenceDiagram
    participant A as Agent (Architect)
    participant C as Content Collection (Zod)
    participant B as Astro Builder (The Forge)
    participant V as Vercel Edge (The Void)
    
    A->>C: Submit Story Markdown
    Note right of C: Validation Ritual
    C-->>A: Throws Error if Missing Meta
    A->>C: Corrects Artifact
    C->>B: Schema Verified
    B->>B: Static Site Synthesis
    B->>V: Deploy Immutable Result
    Note over V: Distributed to Global Edge
\`\`\`

### 📚 The Reading Experience

The detail page is designed for immersion, removing all distractions to focus on the narrative.

![Caption: Detail view of "Doğruyu Söyleyen Minik Fil Timo," demonstrating the clean, distraction-free reading environment.](/masalci_kedi_detail.png)

### 🧠 Educational Reinforcement

Every story concludes with a "Deduced Lesson" and "Related Stories" to encourage continuous engagement and moral reinforcement.

![Caption: The lesson summary and related stories section, powered by vector similarity search.](/masalci_kedi_lesson.png)

---

## 🔮 Engineering Post-Mortem: Overcoming the Void

The development journey was not without its shadows. Two primary challenges tested the resilience of our architecture.

### 1. The Schema Enigma
During the integration of the "Nature Lovers" (Doğa Sever) category, the build pipeline collapsed due to an unmapped enum value. This failure highlighted the strength of our **Deterministic Validation**; the system preferred to halt completely rather than serve a malformed page.

### 2. The Resolution Threshold
Google’s requirement for 1200px wide imagery conflicted with our initial 1024px square AI generations. This necessitated a reconfiguration of our **Media Pipeline Rituals**, implementing a new prompt-engineered 16:9 generation phase for high-risk, high-reward content.

> [!CAUTION]
> **Performance Regressions:** While images are aesthetic artifacts, their weight can induce latency. We mitigated this by utilizing \`sharp\` to convert all assets into highly-efficient WebP formats, maintaining the 100/100 Lighthouse sanctity.

---

## 🏁 Final Synthesis

"Masalcı Kedi" stands as a monument to the intersection of code and soul. By treating every line of TypeScript as a ritual and every content entry as a sacred artifact, we have built a platform that transcends simple technical requirements, offering a glimpse into the future of automated, high-performance web engineering.
    `,
    },
}

export function getAllProjects() {
    return Object.values(ALL_PROJECTS).map((project) => ({
        ...project,
        description: project.description || project.summary,
    }))
}
