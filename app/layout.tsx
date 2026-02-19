import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { LightboxProvider } from "@/components/providers/lightbox-provider"
import { Footer } from "@/components/footer"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Hasan Arpat — Software Developer",
  description:
    "Building systems that matter, with clarity and intention. Portfolio of a software developer focused on depth, resilience, and the long term.",
  generator: "Next.js",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/favicon-32x32.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <LightboxProvider>
          <Navigation />
          {children}
          <Analytics />
          <Footer />
        </LightboxProvider>
      </body>
    </html>
  )
}
