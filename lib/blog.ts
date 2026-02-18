export interface BlogPost {
    id: number
    title: string
    slug: string
    excerpt: string
    content: string
    date: string
    readTime: string
    category: string
    featured?: boolean
}

export const BLOG_POSTS: BlogPost[] = [
    {
        id: 1,
        title: "Designing for Decades: The Long-Term Architecture Philosophy",
        slug: "designing-for-decades-long-term-architecture",
        excerpt:
            "Most software is built to last months, maybe years. What if we designed systems with a 20-year horizon in mind? Exploring trade-offs, dependencies, and resilience patterns.",
        content: `
      Most software is built to last months, maybe years. The typical enterprise application gets rewritten every 18 months—a cycle that burns resources and institutional knowledge alike.

      But what if we designed systems with a 20-year horizon in mind? Or 50?

      ## The Cost of Short-Term Thinking

      When we optimize for delivery speed over longevity, we accumulate what I call "architectural debt"—decisions that compound negatively over time. A quick fix becomes a pattern, that pattern becomes convention, and before long, we're maintaining systems that actively resist change.

      We treat software as disposable, yet critical infrastructure runs on code written in the 70s. The disconnect is palpable.

      ## Principles for Long-Term Design

      **1. Prefer boring technology.**
      The best systems are built on foundations that have survived decades of production use. PostgreSQL over the hot new vector database. Plain HTTP over WebSockets unless you truly need bidirectional communication. "Boring" means predictable failure modes. "Boring" means you can hire for it in ten years.

      **2. Design for replacement.**
      Every component should be removable. If your architecture depends on a specific vendor or implementation, you've created a single point of fragility. Isolate your dependencies. Wrap them in adapters. Never let a third-party library leak into your domain logic.

      **3. Optimize for understanding.**
      Code is read far more often than it's written. Clarity beats cleverness, always. A clever one-liner might save you five minutes today, but it will cost the next developer five hours of debugging next year. Write code that explains itself.

      ## The Compound Effect

      Good architecture compounds. Each thoughtful decision makes future decisions easier. Each abstraction that reveals rather than hides complexity makes debugging faster.
      
      When you build for the long term, you aren't just writing code; you are defining the constraints and freedoms of the future system. You are crafting a legacy.

      Build accordingly.
    `,
        date: "2026-02-18",
        readTime: "12 min",
        category: "Architecture",
        featured: true,
    },
    {
        id: 2,
        title: "The Terminal as a Design Pattern",
        slug: "the-terminal-as-a-design-pattern",
        excerpt:
            "Why command-line interfaces outlast most GUI applications, and what that teaches us about building lasting digital experiences.",
        content: `
      The terminal is one of the oldest user interfaces still in active use. While countless GUIs have come and gone—Metro UI, Aqua, Material Design v1 through v3—the command line persists. And not just persists; it thrives.

      ## Why Terminals Endure

      The terminal's longevity isn't nostalgia or stubbornness. It's a superior interface for many tasks, and understanding why can inform how we build other systems.

      **Composability.**
      Unix pipes let you combine simple tools into complex workflows. \`ls | grep | wc\`. Each command does one thing well. This modularity has proven remarkably adaptable. In contrast, modern GUIs are often monolithic silos where data goes to die.

      **Text as Universal Interface.**
      Everything in the terminal is text—input, output, configuration. Text is inspectable, searchable, versionable, and portable. It doesn't rot like binary formats. It doesn't require proprietary viewers.

      **Low Bandwidth, High Information.**
      A terminal conveys more actionable information per pixel than most GUIs. No chrome, no decoration—just content. It respects the user's attention.

      ## Lessons for Modern Systems

      Modern interfaces could learn from the terminal's durability.
      
      *   **Design for composability.** Allow your users to script your application. Provide an API first, then a UI.
      *   **Prefer text-based configuration.** Don't hide settings in opaque databases. Let users diff their configs.
      *   **Minimize the distance between intent and action.** A CLI command is a direct expression of intent. A GUI often requires navigating a maze of menus to achieve the same result.

      The best interfaces don't try to anticipate every use case. They provide primitives that users can combine in unexpected ways. They trust the user.
    `,
        date: "2026-02-18",
        readTime: "8 min",
        category: "Design",
        featured: false,
    },
    {
        id: 3,
        title: "Observability Beyond Metrics: Building Systems That Explain Themselves",
        slug: "observability-beyond-metrics",
        excerpt:
            "Modern observability isn't just about dashboards and alerts. It's about creating systems with introspection capabilities built into their core.",
        content: `
      Observability has become a buzzword, often reduced to "the three pillars"—logs, metrics, and traces. But true observability goes deeper than tools. It's a property of the system itself.

      ## The Problem with Pillar-Based Thinking

      Logs, metrics, and traces are outputs, not capabilities. They tell you *what* happened, but not *why*. A system that generates terabytes of unstructured logs isn't observable—it's just noisy. You can have all the dashboards in the world and still have no idea why the latency spiked at 3 AM.

      ## Systems That Explain Themselves

      The goal isn't more data. It's understanding. An observable system can answer questions you didn't know to ask when you built it.

      **Structured Events over Printf.**
      Instead of \`console.log("Error: " + err)\`, emit structured events with rich context. User ID, request ID, feature flags, relevant state. Every event should be queryable, filterable, correlatable.

      **Causality over Correlation.**
      Metrics show correlation ("CPU went up when latency went up"). Traces show causality ("Database lock contention on table X caused the delay"). Invest in distributed tracing that captures the full request lifecycle across service boundaries.

      **Runtime Introspection.**
      The best debugging happens in production. Build systems that can describe their own state—current connections, active transactions, resource utilization—without deploying new code. Add control planes that let you toggle feature flags or change log levels dynamically.

      ## Building Introspection In

      Observability isn't something you add after the fact. It's an architectural decision that shapes how you build from day one. It requires a shift in mindset: from "how do I monitor this?" to "how will I debug this when it breaks at 3 AM?"
    `,
        date: "2026-02-10",
        readTime: "15 min",
        category: "Systems",
        featured: true,
    },
    {
        id: 5,
        title: "Against Premature Abstraction",
        slug: "against-premature-abstraction",
        excerpt:
            "Code should reveal intention, not hide it. On the balance between DRY principles and clarity in system design.",
        content: `
      Don't Repeat Yourself (DRY) is one of the first principles taught to new developers. But like all dogma, it's dangerous when applied without context. In my experience, premature abstraction is the root of far more evil than duplication.

      ## The Cost of Abstraction

      Every abstraction introduces a layer of indirection. It asks the reader to hold a mental model in their head. "This function calls \`UserHandler\`, which inherits from \`BaseHandler\`, which implements \`IHandler\`..."

      Too many layers, and you lose sight of what the code is actually *doing*. You spend your time navigating the hierarchy instead of solving the problem. The code becomes "enterprisey"—technically correct, but practically impenetrable.

      ## The Rule of Three

      A good rule of thumb: Don't abstract until you've copied and pasted the exact same code three times.

      *   **First time:** Just write it.
      *   **Second time:** Copy it. It's fine. The use cases might diverge.
      *   **Third time:** Now you have enough context to see the commonalities. Now you can create a meaningful abstraction.

      ## Clarity > Brevity

      We often conflate "short code" with "clean code." They are not the same.

      It's better to have a slightly verbose function that is explicit and easy to understand ("WET" - Write Everything Twice) than a concise one that requires a PhD in the codebase's history to decipher.

      Code is communication. If your abstraction obscures the intent, it has failed, no matter how "DRY" it is.
    `,
        date: "2026-02-18",
        readTime: "7 min",
        category: "Philosophy",
        featured: false,
    },
    {
        id: 6,
        title: "Network Protocols I've Known and Loved",
        slug: "network-protocols-ive-known-and-loved",
        excerpt:
            "A nostalgic tour through SMTP, IRC, and the beauty of simple, text-based protocols that still power the internet.",
        content: `
      The modern web is built on layers of abstraction so thick we often forget what lies beneath. We deal in JSON, gRPC, and GraphQL. But the backbone of the internet was built on something much simpler: text.

      ## The Beauty of Text Protocols

      HTTP/1.1, SMTP, IRC, POP3 directly allow humans to converse with machines. You can open a terminal, type \`telnet google.com 80\`, and manually type \`GET / HTTP/1.1\`. You can send an email by typing commands to an SMTP server.

      This transparency is a feature, not a bug. It makes these systems:
      *   **Debuggable:** You don't need a specialized tool to see what's wrong. You just need to look.
      *   **Implementable:** You can write a client in a weekend.
      *   **Resilient:** Text is forgiving. It survives truncation and corruption better than brittle binary formats.

      ## IRC: The Chat Protocol of Kings

      Internet Relay Chat (IRC) is a masterpiece of minimalism. No centralized identity, no complex rich text, no reaction emojis. Just channels, nicks, and messages.

      It's decentralized, federated, and persistent. It has survived for over 30 years while proprietary walled gardens like AIM, MSN, and Slack rise and fall. It proves that a protocol, once established, is harder to kill than any product.

      ## SMTP: The Cockroach of the Internet

      Email is often hated, but SMTP (Simple Mail Transfer Protocol) is a marvel of reliability. It is a store-and-forward protocol designed for a network that is unreliable and intermittent. It assumes failure. It retries. It persists.

      In an era of "move fast and break things," there is a quiet dignity in protocols that were built to move slowly and break nothing. We should study them more often.
    `,
        date: "2026-02-18",
        readTime: "11 min",
        category: "Systems",
        featured: false,
    },
    {
        id: 7,
        title: "Networking for Web Developers",
        slug: "networking-for-web-developers",
        excerpt: "All you need to know about networking and internet as a web developer.",
        content: `
      In this century everything gets more and more complex. The internet is in the first place of course. So especially as web developers, we need to know the basics of the internet and its protocols to work with it effectively.

      In this case, software companies are asking questions like:
      **"What do you know about Protocols, DNS, and how an HTTP request works?"**

      So they asked me too. And I didn't do it very well actually, even though I have taken lessons such as Computer Networks and Network Programming. I believe if you can't explain plain topics and the idea of a subject, it's good to have a look back on your knowledge and dig into the subject.

      So I decided to take the **Networking for Web Developers** course on [Udacity](https://www.udacity.com).

      [Watch: Introduction to Networking for Web Developers](https://www.youtube.com/watch?v=wlVcGc1OdD8)

      > I really recommend anyone who wants to learn about networking, you will think much more detailed when coding and design your project as knowing what processes are going to work for example when you fetch data from an outside server.

      ## What Are The Topics You Should Take A Look At?

      First you need to install these two programs to work on a linux machine if you are using a windows machine:
      *   [Virtual Box](https://www.virtualbox.org/wiki/Downloads)
      *   [Vagrant](https://www.vagrantup.com/downloads.html)

      You will also need a Unix-style terminal program. On Mac or Linux systems, you can use the built-in Terminal. On Windows, I recommend Hyper.js which is a great and customizable terminal.

      ## Key Concepts

      *   **Internet Protocols**
      *   **ping**
      *   **netcat**
      *   **tcpdump**
      *   **Ports**
      *   **IPv4 and IPv6**
      *   **How to work with IP addresses and IP Dividing**
      *   **TCP/IP**

      ## TCP/IP Layers

      ![TCP/IP Protocol Layers](https://www.ibm.com/docs/en/ssw_aix_72/network/figures/comma32.jpg)
      *TCP/IP suite of protocols*

      ![Movement of information](https://www.ibm.com/docs/en/ssw_aix_72/network/figures/comma28.jpg)
      *Movement of information from sender application to receiver host*
    `,
        date: "2023-07-07",
        readTime: "6 min",
        category: "Systems",
        featured: false,
    },
]
