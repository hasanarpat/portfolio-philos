import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ExternalLink, Calendar, Layers, Activity, FileText, Github, ChevronLeft } from "lucide-react"
import { MarkdownRenderer, renderInlineMarkdown } from "@/lib/markdown"
import { ALL_PROJECTS, Project } from "@/lib/projects"
import { ZoomableImage } from "@/components/ui/zoomable-image"

export const metadata = {
  title: "Project — Systems Built",
}

export async function generateStaticParams() {
  return Object.keys(ALL_PROJECTS).map((slug) => ({
    slug,
  }))
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = ALL_PROJECTS[slug]

  if (!project) {
    notFound()
  }

  // Type assertion not needed as much now, but keeping structure for potential extension
  const projectWithUrl = project

  return (
    <main className="min-h-screen pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-6 space-y-10">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <Link
            href="/projects"
            className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary/60 hover:text-primary transition-colors"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            [BACK.TO.ARCHIVE]
          </Link>
          <div className="font-mono text-[10px] text-primary/40 uppercase tracking-[0.2em]">
            Serial No: MM-2024-{project.id.toString().padStart(3, "0")}
          </div>
        </div>

        <div className="border border-primary/20 bg-card/20 p-8 md:p-10 box-glow">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-0">
            <div>
              <div className="font-mono text-xs text-primary uppercase tracking-widest">[PROJECT.DOSSIER]</div>
              <h1 className="font-serif text-4xl md:text-5xl text-foreground mt-3">{project.title}</h1>
            </div>
            <div className="flex flex-row gap-4 flex-wrap">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-secondary/30 bg-secondary/5 text-secondary hover:bg-secondary/10 transition-colors font-mono uppercase text-xs tracking-wider flex-1 justify-center whitespace-nowrap"
                >
                  <Github className="w-4 h-4" />
                  <span>See Source Code</span>
                </a>
              )}
              {projectWithUrl.url && (
                <a
                  href={projectWithUrl.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-primary bg-primary/10 text-primary hover:bg-primary/20 transition-colors font-mono uppercase text-xs tracking-wider group flex-1 justify-center whitespace-nowrap"
                >
                  <span>Launch System</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              )}
            </div>
          </div>
          <div className="text-foreground/70 mt-4 max-w-3xl leading-relaxed">{renderInlineMarkdown(project.summary)}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 border border-primary/10 bg-card/10 overflow-hidden group">
            <ZoomableImage
              src={project.image}
              alt={project.title}
              caption="Artifact Visualization: Captured in Production"
              className="my-0 border-0 bg-transparent"
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
            />
          </div>

          <div className="lg:col-span-2 border border-primary/10 p-6 bg-card/10 space-y-4">
            <div className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">[SYSTEM.SPEC]</div>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-primary/5 pb-2">
                <span className="text-primary/40 font-mono text-[10px] uppercase">Type</span>
                <span className="text-foreground/90 font-serif">{project.type.join(" / ")}</span>
              </div>
              <div className="flex justify-between border-b border-primary/5 pb-2">
                <span className="text-primary/40 font-mono text-[10px] uppercase">Timeline</span>
                <span className="text-foreground/90 font-serif">{project.year}</span>
              </div>
              <div className="flex justify-between border-b border-primary/5 pb-2">
                <span className="text-primary/40 font-mono text-[10px] uppercase">Status</span>
                <span className="text-primary font-mono text-[10px] text-glow">{project.status}</span>
              </div>
            </div>
          </div>

          {/* Bottom Row: Stack (2) + Metrics (2) */}
          <div className="lg:col-span-2 border border-primary/10 p-6 bg-card/10 space-y-4">
            <div className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">[CORE.STACK]</div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] px-2 py-1 bg-primary/5 text-primary/80 border border-primary/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 border border-primary/10 p-6 bg-card/10 space-y-4">
            <div className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">[KEY.METRICS]</div>
            <div className="space-y-2">
              {project.metrics.map((metric) => (
                <div key={metric} className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full box-glow" />
                  <span className="font-serif text-foreground/80">{metric}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {projectWithUrl.notes && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
            <div className="space-y-6">
              <div className="font-mono text-xs text-primary uppercase tracking-widest">[ENGINEER.LOGS]</div>
              <div className="space-y-4">
                {projectWithUrl.notes.map((note, i) => (
                  <div key={i} className="flex gap-4 group">
                    <span className="font-mono text-primary/40 text-[10px] mt-1 italic">
                      L-{i.toString().padStart(3, "0")}
                    </span>
                    <div className="text-foreground/70 leading-relaxed font-serif group-hover:text-foreground/90 transition-colors">
                      {renderInlineMarkdown(note)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {projectWithUrl.techAnalysis && (
              <div className="space-y-6">
                <div className="font-mono text-xs text-primary uppercase tracking-widest">[TECH.ANALYSIS]</div>
                <div className="border border-primary/10 p-8 bg-primary/5 space-y-4">
                  <h3 className="font-serif text-xl text-foreground">{projectWithUrl.techAnalysis.title}</h3>
                  <div className="text-foreground/70 leading-relaxed font-serif italic text-lg border-l border-primary/30 pl-6">
                    {renderInlineMarkdown(projectWithUrl.techAnalysis.content)}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Workflows Section */}
        {project.workflows && (
          <div className="space-y-6 pt-10 border-t border-primary/10 mt-10">
            <div className="font-mono text-xs text-primary uppercase tracking-widest">[OPERATIONAL.PROTOCOLS]</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.workflows.map((workflow, i) => (
                <div key={i} className="border border-primary/10 bg-primary/5 p-6 space-y-4 hover:border-primary/30 transition-colors">
                  <div className="flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary/60" />
                    <h3 className="font-serif text-lg text-foreground">{workflow.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {workflow.steps.map((step, j) => (
                      <div key={j} className="flex gap-3">
                        <span className="font-mono text-primary/40 text-[10px] mt-0.5">{(j + 1).toString().padStart(2, '0')}</span>
                        <p className="text-foreground/70 text-sm leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Directory Map Section */}
        {project.directoryMap && (
          <div className="space-y-6 pt-10">
            <div className="font-mono text-xs text-primary uppercase tracking-widest">[SYSTEM.ARCHITECTURE]</div>
            <div className="border border-primary/20 bg-card/20 p-6 overflow-x-auto relative group">
              <div className="absolute top-2 right-2 text-[10px] font-mono text-primary/30 uppercase tracking-widest group-hover:text-primary/60 transition-colors">tree -L 2</div>
              <pre className="font-mono text-xs text-foreground/70 leading-relaxed whitespace-pre font-ligatures-none">
                {project.directoryMap}
              </pre>
            </div>
          </div>
        )}

        {/* UX Insights & Analysis */}
        {project.uxInsights && (
          <div className="space-y-6 pt-10">
            <div className="font-mono text-xs text-primary uppercase tracking-widest">[USER.INTERACTION.ANALYSIS]</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.uxInsights.map((insight, i) => (
                <div key={i} className="group border-l border-primary/10 pl-6 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <Activity className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" />
                    <h3 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">{insight.title}</h3>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {projectWithUrl.fullContent && (
          <div className="pt-20 border-t border-primary/10">
            <div className="max-w-3xl mx-auto">
              <div className="font-mono text-xs text-primary uppercase tracking-widest mb-12 text-center">
                —— [FULL.REPORT] ——
              </div>
              <div className="prose prose-invert prose-primary max-w-none">
                <MarkdownRenderer content={projectWithUrl.fullContent} />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
