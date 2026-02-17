import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronLeft } from "lucide-react"
import { MarkdownRenderer, renderInlineMarkdown } from "@/lib/markdown"
import { ALL_PROJECTS, Project } from "@/lib/projects"

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
          <div className="text-foreground/70 mt-4 max-w-3xl leading-relaxed">{renderInlineMarkdown(project.summary)}</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-3 border border-primary/10 bg-card/10 overflow-hidden group">
            <div className="relative aspect-video">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                priority
                sizes="(max-width: 1280px) 100vw, 1200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div className="font-mono text-[10px] text-primary/40 uppercase tracking-[0.3em]">
                  Artifact Visualization: Captured in Production
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 border border-primary/10 p-6 bg-card/10 space-y-4">
            <div className="font-mono text-[10px] text-primary/60 uppercase tracking-widest">[SYSTEM.SPEC]</div>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-primary/5 pb-2">
                <span className="text-primary/40 font-mono text-[10px] uppercase">Type</span>
                <span className="text-foreground/90 font-serif">{project.type}</span>
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
