import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font"
import "./globals.css"

export const metadata: Metadata = {
  title: "Modern Generation - Autonomous Tools for Regenerative Farmers",
  description:
    "Daily drone mapping and AI-powered grazing plans for regenerative farmers. Monitor land, assess pasture health, and plan grazing schedules automatically.",
    generator: 'v0.app',
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000')
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${GeistSans.className} relative min-h-screen`}> 
        {/* Background texture overlays */}
        <div className="contours" />
        <div className="grain" />
        {/* App */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
