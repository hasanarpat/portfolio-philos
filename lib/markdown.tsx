import React from "react"
import Image from "next/image"
import { ZoomableImage } from "@/components/ui/zoomable-image"

export const renderInlineMarkdown = (text: string): React.ReactNode[] => {
    // 1. Handle Bold: **text**
    let step1: React.ReactNode[] = text.split(/(\*\*.*?\*\*)/g).map((part, i) => {
        if (typeof part === 'string' && part.startsWith('**') && part.endsWith('**')) {
            return <strong key={'b' + i} className="text-foreground font-bold">{part.slice(2, -2)}</strong>;
        }
        return part;
    });

    // 2. Handle Italics: *text* (only on string parts)
    let step2: React.ReactNode[] = [];
    step1.forEach((part, i) => {
        if (typeof part === 'string') {
            const italicMatches = part.split(/(\*.*?\*)/g);
            italicMatches.forEach((itPart, j) => {
                if (itPart.startsWith('*') && itPart.endsWith('*')) {
                    step2.push(<em key={'i' + i + j} className="italic text-foreground/90">{itPart.slice(1, -1)}</em>);
                } else {
                    step2.push(itPart);
                }
            });
        } else {
            step2.push(part);
        }
    });

    // 3. Handle Links: [label](url)
    const step3: React.ReactNode[] = [];
    step2.forEach((part, i) => {
        if (typeof part === 'string') {
            const linkMatches = part.split(/(\[.*?\]\(.*?\))/g);
            linkMatches.forEach((linkPart, j) => {
                const match = linkPart.match(/\[(.*?)\]\((.*?)\)/);
                if (match) {
                    step3.push(
                        <a
                            key={'l' + i + j}
                            href={match[2]}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline underline-offset-4"
                        >
                            {match[1]}
                        </a>
                    );
                } else {
                    // Handle Inline Code: `code`
                    const codeMatches = linkPart.split(/(`.*?`)/g);
                    codeMatches.forEach((codePart, k) => {
                        if (codePart.startsWith('`') && codePart.endsWith('`')) {
                            step3.push(<code key={'c' + i + j + k} className="bg-primary/10 text-primary px-1.5 py-0.5 rounded font-mono text-sm">{codePart.slice(1, -1)}</code>);
                        } else {
                            // Final cleanup: Replace -- with —
                            step3.push(codePart.replace(/--/g, '—'));
                        }
                    });
                }
            });
        } else {
            step3.push(part);
        }
    });

    return step3;
};

interface MarkdownRendererProps {
    content: string
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
    if (!content) return null;

    // Robustly split content into blocks while respecting code block boundaries
    const splitIntoBlocks = (text: string) => {
        const lines = text.split(/\r?\n/);
        const blocks: string[] = [];
        let currentBlock: string[] = [];
        let insideCodeBlock = false;

        for (const line of lines) {
            const isCodeDelimiter = line.trim().startsWith('```');

            if (isCodeDelimiter) {
                if (!insideCodeBlock && currentBlock.length > 0) {
                    blocks.push(currentBlock.join('\n'));
                    currentBlock = [];
                }
                insideCodeBlock = !insideCodeBlock;
                currentBlock.push(line);
                if (!insideCodeBlock) {
                    blocks.push(currentBlock.join('\n'));
                    currentBlock = [];
                }
            } else if (insideCodeBlock) {
                currentBlock.push(line);
            } else if (line.trim() === '') {
                if (currentBlock.length > 0) {
                    blocks.push(currentBlock.join('\n'));
                    currentBlock = [];
                }
            } else {
                currentBlock.push(line);
            }
        }

        if (currentBlock.length > 0) {
            blocks.push(currentBlock.join('\n'));
        }

        return blocks;
    };

    const blocks = splitIntoBlocks(content);

    return (
        <div className="space-y-12 text-foreground/80 leading-relaxed font-serif text-lg">
            {blocks.map((paragraph, i) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;
                // ... rest of the logic

                if (trimmed.startsWith("# ")) {
                    return <h2 key={i} className="text-4xl font-serif text-foreground border-b border-primary/20 pb-6 mt-16 mb-8">{trimmed.replace("# ", "")}</h2>
                }
                if (trimmed.startsWith("## ")) {
                    return <h3 key={i} className="text-3xl font-serif text-foreground mt-14 mb-6">{trimmed.replace("## ", "")}</h3>
                }
                if (trimmed.startsWith("### ")) {
                    return <h4 key={i} className="text-2xl font-serif text-foreground mt-10 mb-4">{trimmed.replace("### ", "")}</h4>
                }
                if (trimmed.startsWith("#### ")) {
                    return <h5 key={i} className="text-xl font-serif text-foreground mt-8 mb-3">{trimmed.replace("#### ", "")}</h5>
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
                            <ZoomableImage
                                key={i}
                                src={imageSrc}
                                alt={alt}
                                caption={alt}
                            />
                        );
                    }
                }

                // Blockquotes & Alerts
                if (trimmed.startsWith("> ")) {
                    const innerContent = trimmed.replace(/^> /, "");
                    const isAlert = innerContent.startsWith("[!");

                    if (isAlert) {
                        const alertMatch = innerContent.match(/\[!(.*?)\]\n([\s\S]*)/);
                        if (alertMatch) {
                            const [, type, text] = alertMatch;
                            return (
                                <div key={i} className="my-8 border border-primary/30 bg-primary/5 p-6 space-y-2">
                                    <div className="font-mono text-[10px] uppercase tracking-tighter text-primary font-bold">
                                        [{type}]
                                    </div>
                                    <div className="text-foreground/90 italic">{renderInlineMarkdown(text)}</div>
                                </div>
                            );
                        }
                    }

                    return (
                        <blockquote key={i} className="border-l-2 border-primary/30 pl-6 my-10 italic text-foreground/60 text-xl font-serif">
                            {renderInlineMarkdown(innerContent)}
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
                                    <div className="flex-1">{renderInlineMarkdown(item.trim().replace(/^[*+-]\s+/, ""))}</div>
                                </li>
                            ))}
                        </ul>
                    );
                }

                if (trimmed.match(/^\d+\./)) {
                    return (
                        <ol key={i} className="space-y-6 my-8 ml-4">
                            {trimmed.split("\n").map((item, j) => {
                                const itemContent = item.trim().replace(/^\d+\.\s+/, "");
                                const parts = itemContent.split(':');
                                if (parts.length > 1) {
                                    return (
                                        <li key={j} className="flex gap-5 items-start">
                                            <span className="font-mono text-primary/40 text-sm mt-1">{j + 1}.</span>
                                            <div className="flex-1">
                                                <strong className="text-foreground/90 block mb-1">{renderInlineMarkdown(parts[0] + ':')}</strong>
                                                {renderInlineMarkdown(parts.slice(1).join(':'))}
                                            </div>
                                        </li>
                                    );
                                }
                                return (
                                    <li key={j} className="flex gap-5 items-start">
                                        <span className="font-mono text-primary/40 text-sm mt-1">{j + 1}.</span>
                                        <div className="flex-1">
                                            {renderInlineMarkdown(itemContent)}
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    );
                }

                // Default paragraph with dropcap
                return (
                    <div key={i} className="first-letter:text-5xl first-letter:font-serif first-letter:mr-2 first-letter:float-left first-letter:text-primary first-letter:leading-none">
                        {renderInlineMarkdown(trimmed)}
                    </div>
                );
            })}
        </div>
    );
};
