
export interface Project {
    id: number
    slug: string
    title: string
    type: string[]
    status: string
    year: string
    summary: string // Used for detail page
    description?: string // Used for grid (can fallback to summary)
    stack: string[]
    metrics: string[]
    image: string
    url?: string
    github?: string
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
    // "distributed-event-system": {
    //     id: 1,
    //     slug: "distributed-event-system",
    //     type: "Production System",
    //     title: "Distributed Event System", // Grid title: DistributedCache.io (will need to handle this)
    //     status: "PRODUCTION",
    //     year: "2024",
    //     summary:
    //         "Event-driven backbone built for zero data loss and precise replay. Designed to stay resilient under spiky, unpredictable workloads.",
    //     description:
    //         "High-throughput distributed caching layer serving 50M+ requests/day. Built for resilience with automatic failover and geographic replication.",
    //     stack: ["Rust", "Kafka", "PostgreSQL", "Kubernetes"], // Grid adds Redis
    //     metrics: ["99.99% uptime", "4.2B events/month", "< 40ms publish latency"],
    //     image: "/distributed-cache-system-dark-technical-diagram.png",
    //     notes: [
    //         "Idempotent handlers with deterministic replay windows.",
    //         "Dual-write mitigation with ledger reconciliation.",
    //         "Realtime dashboards for drift detection and lag budgets.",
    //     ],
    // },
    // "real-time-data-pipeline": {
    //     id: 2,
    //     slug: "real-time-data-pipeline",
    //     type: "Open Source",
    //     title: "ObservabilityKit", // Changed to match grid title preference for consistency
    //     status: "LIVE",
    //     year: "2023",
    //     summary:
    //         "Streaming aggregation layer focused on sub-second insights and graceful backpressure under load.",
    //     description:
    //         "Batteries-included observability toolkit for Node.js applications. Zero-config tracing, metrics, and structured logging with minimal overhead.",
    //     stack: ["TypeScript", "Node.js", "OpenTelemetry"], // Grid stack
    //     metrics: ["< 800ms latency", "2.1M events/min", "24/7 alerting"], // Hybrid metrics
    //     image: "/observability-dashboard-dark-cyberpunk.png",
    //     notes: [
    //         "Time-windowed aggregation with adaptive buffering.",
    //         "Hot path optimized for 99th percentile latency.",
    //         "Operator tooling for manual replays and audits.",
    //     ],
    // },
    // "neural-archive": {
    //     id: 3,
    //     slug: "neural-archive",
    //     title: "Neural Archive",
    //     type: "Experiment",
    //     status: "PROTOTYPE",
    //     year: "2024",
    //     summary:
    //         "Semantic search engine for personal archives using neural embeddings. Explores how machines can help us remember and connect ideas.",
    //     description:
    //         "Semantic search engine for personal archives using neural embeddings. Explores how machines can help us remember and connect ideas.",
    //     stack: ["Python", "PyTorch", "React"],
    //     metrics: ["10k+ documents indexed", "Sub-second search", "Self-hosted"],
    //     image: "/neural-network-semantic-search-visualization.png",
    // },
    // "protocol-explorer": {
    //     id: 4,
    //     slug: "protocol-explorer",
    //     title: "Protocol Explorer",
    //     type: "Educational",
    //     status: "DEMO",
    //     year: "2023",
    //     summary:
    //         "Interactive visualization of network protocols. Watch TCP handshakes, DNS queries, and HTTP requests in real-time 3D space.",
    //     description:
    //         "Interactive visualization of network protocols. Watch TCP handshakes, DNS queries, and HTTP requests in real-time 3D space.",
    //     stack: ["Go", "WebAssembly", "Three.js"],
    //     metrics: ["5k+ students used", "15 protocols visualized", "Browser-based"],
    //     image: "/network-protocol-3d-visualization-cyberpunk.png",
    // },
    // "infrastructure-orchestration": {
    //     id: 5,
    //     slug: "infrastructure-orchestration",
    //     title: "TimeCapsule DB", // Grid title
    //     type: "Production System",
    //     status: "DEPLOYED",
    //     year: "2023",
    //     summary:
    //         "A control plane for managing hundreds of services across regions with steady, observable rollouts.",
    //     description:
    //         "Immutable append-only database for audit trails and compliance. Every write is permanent, every read is verifiable.",
    //     stack: ["PostgreSQL", "Rust", "Docker"], // Grid stack
    //     metrics: ["200+ services", "5 regions", "60% faster rollouts"],
    //     image: "/immutable-database-architecture-dark.png",
    //     notes: [
    //         "Policy-driven deploys with progressive exposure.",
    //         "Custom operators for environment drift correction.",
    //         "Unified audit trail with diff snapshots.",
    //     ],
    // },
    // "terminal-aesthetics": {
    //     id: 6,
    //     slug: "terminal-aesthetics",
    //     title: "Terminal Aesthetics",
    //     type: "Art Project",
    //     status: "ONGOING",
    //     year: "2024",
    //     summary:
    //         "Generative art project creating terminal-inspired visuals. ASCII meets shaders in real-time algorithmic compositions.",
    //     description:
    //         "Generative art project creating terminal-inspired visuals. ASCII meets shaders in real-time algorithmic compositions.",
    //     stack: ["JavaScript", "WebGL", "GLSL"],
    //     metrics: ["100+ compositions", "WebGL shaders", "Generative"],
    //     image: "/ascii-art-glsl-shader-terminal-aesthetic.png",
    // },
    "memento-mori": {
        id: 7,
        slug: "memento-mori",
        type: ["Production System", "Open Source"],
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
        github: "https://github.com/hasanarpat/memento-mori",
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
        type: ["Production System", "Open Source"],
        title: "Masalcı Kedi",
        url: "https://masalci-kedi.vercel.app/",
        github: "https://github.com/hasanarpat/masalci-kedi",
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
    "restaurant-food-delivery": {
        id: 9,
        slug: "restaurant-food-delivery",
        title: "Restaurant Food Delivery",
        url: "https://antepli-pizza.vercel.app/",
        github: "https://github.com/hasanarpat/Restaurant-Food-Delivery-NextJS",
        type: ["Production System", "Open Source"],
        status: "LIVE",
        year: "2024",
        summary:
            "A modern full-stack food delivery application focusing on performance, reliability, and user experience. Features a module-based architecture, optimized infinite scroll, and robust security.",
        description:
            "This project goes beyond a standard food ordering app by focusing on performance, reliability, and user experience. By combining a strict Domain-Driven Backend with a smooth, interactive Frontend, the system bridges the gap between complex data handling and a seamless user interface.",
        stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion", "MongoDB", "Zod", "Jose"],
        metrics: ["30-40% Faster (Lean)", "80% Less Load", "Secure Auth"],
        image: "/restaurant/cover.png",
        techAnalysis: {
            title: "Optimized Infinite Scroll",
            content:
                "Infinite scrolling can often lead to performance issues if not handled correctly. We implemented a **smart loading mechanism** using `IntersectionObserver` to ensure data loads smoothly as the user scrolls. We use **Mongoose Lean Logic** to return plain JavaScript objects instead of heavy database documents, reducing data processing overhead by **30-40%**.",
        },
        directoryMap: `Restaurant-Food-Delivery/
├── src/
│   ├── modules/            # Core Business Logic
│   │   └── [feature]/      # Service, Repository, Types
│   ├── core/               # Global Utilities (Errors, Config)
│   ├── components/         # UI Components
│   │   ├── ui/             # Basic Elements (Input, Button)
│   │   └── molecules/      # Complex Components
│   └── app/                # Next.js App Router (Pages & API)`,
        workflows: [
            {
                title: "Optimized Infinite Scroll",
                steps: [
                    "User scrolls to bottom, triggering Scroll Observer.",
                    "State Lock checks if already loading.",
                    "If Ready, lock activates and API requests more items.",
                    "Database queries in Lean Mode (Plain JS Objects).",
                    "Data returned, items shown, and lock releases.",
                ],
            },
            {
                title: "Cursor-Based Pagination",
                steps: [
                    "Client requests items after a specific timestamp cursor.",
                    "Server fetches next batch based on stable sort order.",
                    "Prevents duplicate items even if new data is added during scroll.",
                ],
            },
        ],
        uxInsights: [
            {
                title: "Staggered Animations",
                description:
                    "Items enter smoothly using Framer Motion's staggered effects, making the list feel polished rather than abrupt.",
            },
            {
                title: "Smart Search",
                description:
                    "Search requests are debounced by 500ms, reducing server load by 80% while maintaining a responsive feel.",
            },
        ],
        fullContent: `
# Restaurant Food Delivery — Modern Full-Stack Architecture

This project goes beyond a standard food ordering app by focusing on **performance**, **reliability**, and **user experience**. By combining a strict Domain-Driven Backend with a smooth, interactive Frontend, the system bridges the gap between complex data handling and a seamless user interface. It proves that performance isn't just a feature—it's the foundation of the entire product.

![Restaurant App Hero Mockup](/restaurant/cover.png)

---

## 🏛️ System Architecture

The application is built with a clear separation of concerns, ensuring that the **Frontend** handles the user experience while the **Backend** manages data integrity and business logic. We moved away from a simple MVC structure to a **Module-Based Architecture**, where each feature (Auth, Product, Cart) is self-contained and communicates through strictly typed interfaces.

### The Stack
- **Core:** \`Next.js 14 (App Router)\`, \`TypeScript\`
- **State & Logic:** \`React Hooks\`, \`Zod\` (Data Validation)
- **Visuals:** \`Tailwind CSS\`, \`Framer Motion\` (Ui Animations)
- **Database:** \`MongoDB\`, \`Mongoose\`
- **Security:** \`Jose\` (JWT), \`Bcrypt\`, \`Rate Limiting\`

\`\`\`text
Restaurant-Food-Delivery/
├── src/
│   ├── modules/            # Core Business Logic
│   │   └── [feature]/      # Service, Repository, Types
│   ├── core/               # Global Utilities (Errors, Config)
│   ├── components/         # UI Components
│   │   ├── ui/             # Basic Elements (Input, Button)
│   │   └── molecules/      # Complex Components
│   └── app/                # Next.js App Router (Pages & API)
\`\`\`

---

## ⚡ Engineering Deep-Dives

### 1. Optimized Infinite Scroll
Infinite scrolling can often lead to performance issues if not handled correctly. We implemented a **smart loading mechanism** using \`IntersectionObserver\` to ensure data loads smoothly as the user scrolls.

![Interactive Menu Grid with Infinite Scroll](/restaurant/gallery-1.png)

> [!TIP]
> **Performance Boost:** We use **Mongoose Lean Logic** to return plain JavaScript objects instead of heavy database documents. This reduces the data processing overhead by **30-40%**, making the app much faster.

#### The Data Flow
\`\`\`mermaid
sequenceDiagram
    participant U as User
    participant O as Scroll Observer
    participant S as State Lock
    participant A as API
    participant D as Database

    U->>O: Scrolls to bottom
    O->>S: Check if already loading
    alt is Loading
        S-->>O: Do nothing
    else is Ready
        S->>S: Lock (Loading = True)
        O->>A: Request more items
        A->>D: Query Database (Lean Mode)
        D-->>A: Return Data
        A-->>U: Show new items
        S->>S: Unlock (Loading = False)
    end
\`\`\`

### 2. User Experience & Animations
We believe the interface should feel alive. Instead of items simply appearing on the screen, they enter smoothly. Using **Framer Motion**, we added a **staggered animation effect** to lists. This makes the content feel more polished and high-quality, rather than just popping in abruptly.

![Detailed Product View with Animation](/restaurant/gallery-3.png)

- **Smart Search:** The search bar waits 500ms after you stop typing before sending a request. This **reduces server load by 80%**.
- **Touch Gestures:** The image viewer supports natural swipe and zoom gestures, making the web app feel like a native mobile app.

---

## 🛡️ Backend Security Practices

Security is built into the core, not added as an afterthought. Every request goes through a strict process to ensure safety.

![Location Services and User Dashboard](/restaurant/gallery-2.png)

> [!IMPORTANT]
> **Always Validate:** No data reaches the core logic without first being checked by **Zod Schemas**. We treat every request as untrusted until it proves it is valid.

### Key Security Measures
1.  **Rate Limiting:** We limit how many requests can come from one IP address to prevent abuse.
2.  **HttpOnly Cookies:** We store sensitive tokens in cookies that JavaScript cannot access, preventing common attacks (XSS).
3.  **Role-Based Access:** User permissions are stored directly in their session token, so we don't need to check the database for every single action.

---

## ⚔️ Challenges & Solutions: Pagination Issues

**The Challenge:** When combining Server-Side Rendering (loading on the server) with Client-Side Rendering (loading in the browser), we faced a "Pagination Sync" issue. This meant sometimes users would see the same item twice if new data was added while they were scrolling.

**The Solution:** We switched to a **Cursor-Based Pagination** system.
1.  **Timestamp Cursor:** Instead of saying "Page 2", the client asks for "items created after this timestamp".
2.  **Consistent Feed:** This ensures that even if new items are added, the user's feed remains consistent and they never see duplicates.

![Comprehensive Footer and Info Section](/restaurant/gallery-4.png)

> [!CAUTION]
> **Trade-off:** This method solves the duplicate issue but makes it harder to jump to a specific page number. We chose this trade-off because a smooth scrolling experience was more important for this app.
`,
    },
    "duplicheck": {
        id: 10,
        slug: "duplicheck",
        type: ["Experiment", "Browser Extension", "Open Source"],
        title: "DupliCheck",
        status: 'LIVE',
        year: "2026",
        summary:
            "A deterministic browser extension that acts as a client-side sentinel, enforcing cart state consistency across e-commerce platforms.",
        description:
            "DupliCheck is a deterministic browser extension that acts as a client-side sentinel, enforcing cart state consistency across seven major e-commerce platforms through real-time heuristic analysis. It functions as a layered observer system, preventing accidental bulk orders.",
        stack: ["JavaScript (ES6+)", "Manifest V3", "MutationObserver", "Shadow DOM"],
        metrics: ["<16ms analysis cycle", "Zero-Dependency", "100% Client-Side"],
        image: "/duplicheck/cover.png",
        notes: [
            "Zero-Dependency Architecture: Built on pure, vanilla ECMAScript.",
            "Privacy: 100% Client-Side Processing (No external telemetry).",
            "Resilience over Rigidity: Selectors designed with fallback cascading.",
        ],
        techAnalysis: {
            title: "The Observer Paradox & Heuristic Polymorphism",
            content:
                "The primary engineering challenge in DOM-resident extensions is the Infinite Mutation Loop. DupliCheck solves this via a 'Self-Recognition' filter (`isOurOwnMutation`), creating a safe namespace. Instead of rigid selectors, it uses a Strategy Pattern to normalize diverse DOM structures into a unified internal model.",
        },
        directoryMap: `/
├── manifest.json        # Extension Definition & Permissions
├── content.js           # The "Eye" (Logic & DOM Manipulation)
├── popup.js             # User Preferences Interface
├── icons/               # Visual Identity Assets
└── styles/              # Injected CSS Modules (Shadow DOM emulation)`,
        workflows: [
            {
                title: "System Orchestration Flow",
                steps: [
                    "MutationObserver detects DOM changes (Debounced).",
                    "Heuristic Engine executes analysis (<16ms).",
                    "Maps DOM elements to 'Product Identity' composite key.",
                    "Checks for duplicates (Self-Recognition filter applied).",
                    "Injects Warning Label or Mounts Checkout Guard.",
                ],
            },
        ],
        uxInsights: [
            {
                title: "The Checkout Guardian",
                description:
                    "A prioritized overlay mechanism that captures focus (Focus Trap) to prevent accidental clicks. It 'pauses' the user's journey until they acknowledge the risk, respecting 'Snooze' preferences.",
            },
            {
                title: "State Convergence",
                description:
                    "When a user accepts a 'Fix', the system dispatches synthetic InputEvent and ChangeEvent signals to trigger underlying React/Angular listeners, ensuring virtual DOM consistency.",
            },
        ],
        fullContent: `
# DupliCheck — Client-Side Cart Integrity Engine

In the chaotic flux of modern e-commerce—where SPAs hydrate and re-render aggressively—user intent is often lost in translation, leading to accidental bulk orders and user frustration. **DupliCheck** is a deterministic browser extension that acts as a client-side sentinel, enforcing cart state consistency across seven major e-commerce platforms through real-time heuristic analysis.

---

## ⚡ Technology Stack & Metrics

> [!NOTE]
> **Zero-Dependency Architecture:** The system is built on pure, vanilla ECMAScript to ensure maximum performance and zero supply-chain attack surface.

*   **Core:** JavaScript (ES6+), Manifest V3
*   **Runtime APIs:** MutationObserver, chrome.storage, Shadow DOM (conceptual)
*   **Performance:** <16ms analysis cycle (targeting 60fps frame budget)
*   **Architecture:** Event-Driven Heuristic Engine
*   **Privacy:** 100% Client-Side Processing (No external telemetry)

---

## 🏛️ Architectural Philosophy

The extension functions not merely as a script, but as a layered observer system that sits between the user's perception and the raw DOM state.

### 1. The Observer Paradox

The primary engineering challenge in DOM-resident extensions is the **Infinite Mutation Loop**. modifying the DOM triggers the observer, which triggers the modifier, ad infinitum.

DupliCheck solves this via a "Self-Recognition" filter (\`isOurOwnMutation\`), creating a safe namespace for its own artifacts within the hostile DOM environment.

### 2. Heuristic Polymorphism

Instead of rigid selectors, the system uses a **Strategy Pattern** to normalize the diverse DOM structures of different retailers (Trendyol, Amazon, Hepsiburada) into a unified internal model of "Product Identity."

#### Identity Heuristic

A product is not just a URL. It is a composite key of:

1.  **Canonical Path:** \`url.pathname\` (stripping ephemeral query params)
2.  **Merchant Identity:** \`sellerId\` (to distinguish marketplace vendors)
3.  **Variant Signature:** sku/attributes (size/color)

\`\`\`typescript
// Conceptual signature of the identity resolution
type ItemKey = string; // Format: "url_path|seller_id|variant_hash"
function getItemKey(row: Element, config: SiteConfig): ItemKey {
  const url = normalizeUrl(row);
  const seller = extractSeller(row);
  const variant = extractVariant(row);
  return [url, seller, variant].join('|');
}
\`\`\`

---

## 🔄 System Orchestration Flow

The following diagram illustrates the lifecycle of a cart validation event. Note the **Debounce Barrier**, which protects the main thread during rapid React/Vue hydration cycles.

\`\`\`mermaid
sequenceDiagram
    participant U as User/DOM
    participant M as MutationObserver
    participant D as Debounce Barrier
    participant E as Heuristic Engine
    participant W as Warning Layer

    loop [Hydration Noise]
        U->>M: Adds Item to Cart (SPA Render)
        M->>D: Fires Mutation Entries
        D->>D: Filter (isOurOwnMutation?)
        D->>E: Schedule Check (200ms)
    end
    
    D->>E: Reset Timer
    E->>E: Execute Analysis
    E->>E: Map DOM to Standard Model
    E->>E: Group by Identity Key
    
    alt [Duplicates Found > 0]
        E->>W: Inject Warning Label
        E->>W: Mount Checkout Guard (if applicable)
        W-->>U: Visual Feedback (Bounce Animation)
    else [No Duplicates]
        E->>W: Teardown Artifacts (Clean State)
    end
\`\`\`

---

## 🧠 Engineering Deep-Dives

### 1. Cross-Site Normalization Engine

Supporting multiple non-standardized platforms required an abstraction layer. The \`SITE_CONFIG\` object acts as a driver definition, mapping abstract concepts (e.g., "Quantity Input") to concrete DOM implementations.

> [!IMPORTANT]
> **Resilience over Rigidity:** The selectors are designed with fallback cascading. If a specific \`data-testid\` is missing, the engine falls back to structural relationships (parent/child) to locate the target.

### 2. State Convergence (The "Fix" Ritual)

When a user accepts the "Fix" action, the system must forcefully converge the remote state to the desired local state.

For platforms using input fields, we dispatch synthetic \`InputEvent\` and \`ChangeEvent\` signals to trigger the underlying React/Angular listeners, ensuring the framework's virtual DOM creates a transaction to update the server.

\`\`\`javascript
// Triggering React's onChange logic programmatically
quantityEl.value = String(targetValue);
quantityEl.dispatchEvent(new Event('input', { bubbles: true }));
quantityEl.dispatchEvent(new Event('change', { bubbles: true }));
\`\`\`

### 3. The Checkout Guardian

A modal intervention layer intercepts the checkout flow if consistency checks fail. This required a high-priority "overlay" mechanism that captures focus (Focus Trap) and prevents accidental clicks, effectively "pausing" the user's journey until they acknowledge the risk.

> [!CAUTION]
> **User Agency:** While we warn, we never block. The "Snooze" feature respects the user's decision to proceed with duplicates (e.g., buying gifts), persisting this preference via \`chrome.storage.local\` to prevent alert fatigue.

---

## 📂 Project Structure

\`\`\`text
/
├── manifest.json        # Extension Definition & Permissions
├── content.js           # The "Eye" (Logic & DOM Manipulation)
├── popup.js             # User Preferences Interface
├── icons/               # Visual Identity Assets
└── styles/              # Injected CSS Modules (Shadow DOM emulation)
\`\`\`

---

## Key Takeaway

DupliCheck demonstrates that client-side state integrity does not require heavy frameworks. With precise DOM observation and intelligent heuristics, we can build robust, performance-neutral reliability tools that improve the economic efficiency of the user's digital experience.
`,
    },
}

export function getAllProjects() {
    return Object.values(ALL_PROJECTS).map((project) => ({
        ...project,
        description: project.description || project.summary,
    }))
}
