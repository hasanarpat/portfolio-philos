import { ImageResponse } from "next/og"
import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const runtime = "nodejs"

// Route segment config
export const alt = "Hasan Arpat — Software Developer"
export const size = {
    width: 1200,
    height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
    // Font
    // const font = await fetch(new URL('./assets/Inter-Bold.ttf', import.meta.url)).then(res => res.arrayBuffer())

    // Logo
    const logoData = await readFile(join(process.cwd(), "public", "abstract-dark-digital-art-glitch-aesthetic.png"))

    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    background: "#0a0a0a",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "1px solid rgba(90, 255, 180, 0.2)",
                        background: "rgba(20, 20, 20, 0.5)",
                        padding: "40px 80px",
                        borderRadius: "16px",
                        boxShadow: "0 0 50px rgba(0,0,0,0.5)",
                    }}
                >
                    {/* Logo */}
                    <img
                        // @ts-ignore
                        src={logoData.buffer}
                        alt="Logo"
                        width={80}
                        height={80}
                        style={{
                            borderRadius: "12px",
                            border: "2px solid rgba(90, 255, 180, 0.4)",
                            marginRight: "40px",
                        }}
                    />

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "0",
                        }}
                    >
                        <div
                            style={{
                                fontSize: 64,
                                color: "#5affb4",
                                marginBottom: "10px",
                                fontFamily: "monospace",
                                letterSpacing: "-0.05em",
                                textShadow: "0 0 20px rgba(90, 255, 180, 0.3)",
                            }}
                        >
                            [System.Init]
                        </div>
                        <div
                            style={{
                                fontSize: 32,
                                color: "#a1a1aa",
                                fontFamily: "sans-serif",
                                letterSpacing: "-0.02em",
                            }}
                        >
                            Hasan Arpat — Software Developer
                        </div>
                    </div>
                </div>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    )
}
