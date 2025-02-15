import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import TopNav from "./components/TopNav"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "Aero - Play to earn, not just to win",
  description: "Aero is a blockchain and play-to-earn gaming ecosystem",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-sans">
        <TopNav />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

