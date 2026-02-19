"use client"

import { useState } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

// Tech Stack with context
const techStack = [
  { name: "React", context: "Primary frontend framework, 2+ years production", category: "Frontend" },
  { name: "Next.js", context: "Full-stack apps, SSR/SSG, API routes", category: "Frontend" },
  { name: "TypeScript", context: "Type-safe development across all projects", category: "Language" },
  { name: "Redux / Saga", context: "Complex state management, async flows", category: "State" },
  { name: "Tailwind CSS", context: "Rapid UI development, design systems", category: "Styling" },
  { name: "REST APIs", context: "API design, integration, documentation", category: "Backend" },
  { name: "Git", context: "Version control, branching strategies, CI/CD", category: "Tools" },
  { name: "Testing", context: "Jest, React Testing Library, Cypress E2E", category: "Quality" },
  { name: "Linux", context: "Daily driver, bash scripting, server configs", category: "System" },
  { name: "Game Dev", context: "Unity/Godot prototyping & mechanics", category: "Creative" },
  { name: "Visual Effects", context: "GLSL shaders, particle systems", category: "Creative" },
  { name: "IoT", context: "Arduino/ESP32, MQTT, hardware interfacing", category: "Hardware" },
  { name: "Processing", context: "p5.js, generative art algorithms", category: "Creative" },
]

const getSignalPattern = (seed: string, size = 12) => {
  let hash = 0
  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i)
    hash |= 0
  }

  return Array.from({ length: size }, (_, index) => {
    const bit = (hash >> (index % 24)) & 1
    return (bit ^ (index % 3 === 0 ? 1 : 0)) === 1
  })
}

// Experience Timeline
const experiences = [
  {
    role: "Fullstack Developer",
    company: "35 Dijital",
    period: "Oct 2025 – Present",
    description: "Developing scalable fullstack applications and managing serverless infrastructure.",
    responsibilities: [
      "Developing SSR-based frontend applications using Next.js and TypeScript",
      "Building fullstack systems with Hono, Cloudflare Workers, Drizzle ORM, and SQLite",
      "Designing scalable APIs and handling serverless deployment workflows",
    ],
    scale: "Serverless / High-Performance",
  },
  {
    role: "Frontend Engineer Intern",
    company: "Jotform",
    period: "Jul 2024 – Aug 2024",
    description: "Built webhook-based features for the Approval product in a high-traffic SaaS environment.",
    responsibilities: [
      "Built webhook-based features for the Approval product using React",
      "Managed complex state with Redux-Saga",
      "Worked in Linux-based RDS, using pnpm",
      "Created reusable custom React hooks to improve performance",
    ],
    scale: "20M+ Users / Global SaaS",
  },
  {
    role: "Frontend Engineer Intern",
    company: "Radity",
    period: "Oct 2023 – Jan 2024",
    description: "Remote internship focused on fintech reporting and document workflows.",
    responsibilities: [
      "Developed report and invoice templates using Liquid Template Language",
      "Integrated Socotra for invoice generation and document workflows",
      "Wrote E2E tests with Playwright and Cypress",
      "Monitored workflows and application insights via Azure",
    ],
    scale: "Fintech / Enterprise",
  },
]

export function AboutLayout() {
  const [activeSection, setActiveSection] = useState<string>("bio")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const sections = [
    { id: "bio", label: "Bio" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "principles", label: "Principles" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Split Layout: Navigation sidebar + Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Section Navigation (25%) */}
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Header */}
              <div className="border border-primary/30 bg-card/20 p-6 box-glow">
                <div className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">[USER.INFO]</div>
                <h1 className="font-serif text-3xl text-foreground">
                  {sections.find((s) => s.id === activeSection)?.label}
                </h1>
              </div>


              {/* Navigation */}
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full text-left px-4 py-3 font-mono text-sm border transition-all duration-300 ${activeSection === section.id
                      ? "border-primary bg-primary/20 text-primary text-glow"
                      : "border-primary/20 text-foreground/60 hover:border-primary/50 hover:text-primary hover:bg-card/20"
                      }`}
                  >
                    <span className="text-primary mr-2">▸</span>
                    {section.label}
                  </button>
                ))}
              </nav>

              {/* Status Indicator */}
              <div className="border border-primary/20 bg-card/10 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse box-glow" />
                  <span className="font-mono text-xs text-foreground">Currently</span>
                </div>
                <p className="text-xs text-muted-foreground">Building systems, writing code, exploring ideas.</p>
              </div>
            </div>
          </div>

          {/* Right: Content Area (75%) */}
          <div className="lg:col-span-9">
            <div className="border border-primary/20 bg-card/20 p-8 md:p-12">
              {/* Bio Section */}
              {activeSection === "bio" && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="font-serif text-4xl text-foreground mb-6">Who I Am</h2>

                  <div className="prose prose-invert max-w-none space-y-4 text-foreground/80 leading-relaxed">
                    <p>I’m a frontend-focused fullstack developer with 3 years of experience building production-grade web applications and 1 year of professional industry experience.</p>

                    <p>I specialize in building scalable, maintainable systems rather than short-lived prototypes. My work spans modern frontend architectures, API-driven systems, and micro-SaaS style platforms.</p>

                    <p>I’ve worked with webhook-based integrations, insurance APIs, reporting systems, PDF generation pipelines, workflow builders, and service-oriented architectures. On the frontend side, I’ve built complex state-driven applications using TypeScript and Redux-Saga, focusing on predictable state management and long-term maintainability.</p>

                    <p>I’m particularly interested in:</p>

                    <ul className="list-disc list-inside">
                      <li className="text-foreground/80 hover:text-primary text-glow-copper">API–panel–client architectures (similar to WordPress-style ecosystems)</li>
                      <li className="text-foreground/80 hover:text-primary text-glow-copper">Micro-SaaS product structures</li>
                      <li className="text-foreground/80 hover:text-primary text-glow-copper">Distributed service communication</li>
                      <li className="text-foreground/80 hover:text-primary text-glow-copper">Workflow automation systems</li>
                      <li className="text-foreground/80 hover:text-primary text-glow-copper">Performance-aware frontend systems</li>
                    </ul>

                    <p>I prefer understanding how systems actually work — from protocol level to UI behavior — and I design software with clarity, extensibility, and observability in mind.</p>

                    <p className="text-secondary text-glow-copper italic">
                      This portfolio is an experiment in cyberpunk aesthetics meets engineering portfolio. Because why
                      not.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-primary/20">
                    <div>
                      <div className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">Location</div>
                      <div className="text-foreground">İzmir - Türkiye (Open to remote / international roles)</div>
                    </div>
                    <div>
                      <div className="font-mono text-xs text-primary mb-2 uppercase tracking-widest">Years Coding</div>
                      <div className="text-foreground">5+</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Principles Section */}
              {activeSection === "principles" && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="font-serif text-4xl text-foreground mb-6">How I Work</h2>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Long-term thinking over quick wins",
                        description:
                          "Systems should be designed with decades in mind, not quarters. Trade-offs that favor maintainability over initial velocity often pay off.",
                      },
                      {
                        title: "Observability is not optional",
                        description:
                          "If you can't see what your system is doing, you don't control it. Build introspection from day one.",
                      },
                      {
                        title: "Simplicity as a discipline",
                        description:
                          "The best code is the code you don't write. The second best is code that's obvious. Everything else requires justification.",
                      },
                      {
                        title: "Embrace constraints",
                        description:
                          "Limitations force creativity. Whether it's memory, latency, or legacy APIs, constraints clarify what matters.",
                      },
                      {
                        title: "Test what matters",
                        description:
                          "Tests are documentation for the future. Write tests that capture intent, not implementation details.",
                      },
                    ].map((principle, index) => (
                      <div
                        key={index}
                        className="border border-primary/20 bg-card/10 p-6 hover:border-primary/40 hover:bg-card/20 transition-all duration-300"
                      >
                        <h3 className="font-mono text-sm text-primary text-glow mb-2">
                          [{index + 1}] {principle.title}
                        </h3>
                        <p className="text-foreground/70 text-sm leading-relaxed">{principle.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Section - Interactive Cards */}
              {activeSection === "skills" && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="font-serif text-4xl text-foreground mb-2">Tech Stack & Skills</h2>
                  <p className="text-foreground/60 text-sm mb-8 font-mono">[Hover for context]</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {techStack.map((skill, index) => (
                      <div
                        key={skill.name}
                        onMouseEnter={() => setHoveredSkill(skill.name)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className="relative border border-primary/20 bg-card/10 p-5 hover:border-primary/50 hover:bg-card/20 transition-all duration-300 group cursor-pointer hover-lift"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {/* Skill Header */}
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <span className="font-mono text-xs text-primary/50">[{skill.category}]</span>
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                              {skill.name}
                            </span>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
                              Signal Trace
                            </span>
                            <div className="grid grid-cols-6 gap-1">
                              {getSignalPattern(skill.name).map((isActive, i) => (
                                <span
                                  key={`${skill.name}-${i}`}
                                  className={`h-2 w-2 rounded-sm border border-primary/20 transition-all duration-300 ${isActive
                                    ? "bg-primary/50 shadow-[0_0_6px_rgba(90,255,180,0.35)]"
                                    : "bg-primary/10"
                                    } ${hoveredSkill === skill.name ? "opacity-100" : "opacity-60"}`}
                                />
                              ))}
                            </div>
                          </div>

                          <div className="relative border border-primary/20 bg-background/40 px-3 py-2">
                            <div className="flex items-center justify-between text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                              <span>ASCII Scope</span>
                              <span className={hoveredSkill === skill.name ? "text-primary/80" : ""}>Live</span>
                            </div>
                            <div className="mt-2 font-mono text-xs leading-4 text-primary/80">
                              <div>/\__/\____/\___/\____/\__</div>
                              <div className="text-foreground/50">--\_/--\__/--\_/--\__/--</div>
                            </div>
                            <div className="mt-2 flex items-center gap-2">
                              {Array.from({ length: 10 }).map((_, i) => (
                                <span
                                  key={`scope-${skill.name}-${i}`}
                                  className={`block h-1.5 w-2 rounded-sm border border-primary/20 ${i % 3 === 0 ? "bg-primary/60" : "bg-primary/15"
                                    } ${hoveredSkill === skill.name ? "opacity-100" : "opacity-70"}`}
                                />
                              ))}
                            </div>
                            <div className="pointer-events-none absolute inset-x-5 top-[92px] h-[2px] bg-primary/40 blur-[2px] opacity-40" />
                            <div className="pointer-events-none absolute inset-x-5 top-[96px] h-[1px] bg-primary/60 opacity-50" />
                          </div>
                        </div>

                        {/* Context on Hover */}
                        <div
                          className={`mt-3 text-xs text-foreground/60 font-mono transition-all duration-300 overflow-hidden ${hoveredSkill === skill.name ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
                            }`}
                        >
                          <span className="text-primary">▸</span> {skill.context}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Experience Timeline Section */}
              {activeSection === "experience" && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="font-serif text-4xl text-foreground mb-2">Experience</h2>
                  <p className="text-foreground/60 text-sm mb-8 font-mono">[Professional timeline]</p>

                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-primary/30" />

                    {/* Timeline Items */}
                    <div className="space-y-8">
                      {experiences.map((exp, index) => (
                        <div
                          key={exp.company}
                          className="relative pl-8 md:pl-20 group"
                        >
                          {/* Timeline Dot */}
                          <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2 w-3 h-3 border-2 border-primary bg-background group-hover:bg-primary group-hover:box-glow transition-all duration-300" />

                          {/* Year Badge */}
                          <div className="hidden md:block absolute left-0 top-0 w-8 text-right">
                            <span className="font-mono text-xs text-secondary text-glow-copper">{exp.period.split(" - ")[0]}</span>
                          </div>

                          {/* Content Card */}
                          <div className="border border-primary/20 bg-card/10 p-6 hover:border-primary/40 hover:bg-card/20 transition-all duration-500 group-hover:translate-x-2">
                            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                              <div>
                                <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors">
                                  {exp.role}
                                </h3>
                                <p className="font-mono text-sm text-secondary">{exp.company}</p>
                              </div>
                              <span className="font-mono text-xs text-muted-foreground border border-primary/20 px-2 py-1">
                                {exp.period}
                              </span>
                            </div>

                            <p className="text-foreground/70 text-sm mb-4">{exp.description}</p>

                            {/* Responsibilities */}
                            <div className="space-y-2 mb-4">
                              {exp.responsibilities.map((resp, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary mt-1">▸</span>
                                  <span className="text-foreground/60">{resp}</span>
                                </div>
                              ))}
                            </div>

                            {/* Scale Badge */}
                            <div className="inline-block font-mono text-xs px-3 py-1 border border-secondary/30 bg-secondary/10 text-secondary">
                              {exp.scale}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Section */}
              {activeSection === "contact" && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="font-serif text-4xl text-foreground mb-6">Get In Touch</h2>

                  <p className="text-foreground/70 leading-relaxed mb-8">
                    I'm always interested in hearing about interesting problems, ambitious projects, and opportunities
                    to collaborate. If you're building something that matters, let's talk.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        label: "Email",
                        value: "hasanarpat99@gmail.com",
                        link: "mailto:hasanarpat99@gmail.com",
                      },
                      {
                        label: "GitHub",
                        value: "hasanarpat",
                        link: "https://github.com/hasanarpat",
                      },
                      // {
                      //   label: "Twitter",
                      //   value: "@alexbuilds",
                      //   link: "https://twitter.com/alexbuilds",
                      // },
                      {
                        label: "LinkedIn",
                        value: "hasan-arpat",
                        link: "https://linkedin.com/in/hasan-arpat",
                      },
                    ].map((contact) => (
                      <a
                        key={contact.label}
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border border-primary/20 bg-card/10 p-6 hover:border-primary/50 hover:bg-card/20 transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-mono text-xs text-primary mb-1 uppercase tracking-widest">
                              {contact.label}
                            </div>
                            <div className="text-foreground group-hover:text-primary transition-colors">
                              {contact.value}
                            </div>
                          </div>
                          <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                        </div>
                      </a>
                    ))}
                  </div>

                  <div className="border border-secondary/30 bg-card/20 p-6 mt-8 box-glow-copper">
                    <div className="font-mono text-xs text-secondary mb-3 uppercase tracking-widest text-glow-copper">
                      [Response.Time]
                    </div>
                    <p className="text-foreground/70 text-sm">
                      I typically respond within 24 hours. If it's urgent, mention that in the subject line.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
