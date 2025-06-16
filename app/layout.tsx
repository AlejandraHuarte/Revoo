import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@/components/google-analytics"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Revoo - Peer-to-Peer Rental Platform",
  description: "Borrow what you need, rent out what you don't. Join the sharing economy with Revoo.",
  keywords: "rental, sharing economy, peer-to-peer, rent items, list items",
  authors: [{ name: "Revoo Team" }],
  openGraph: {
    title: "Revoo - Why buy it when you can Revoo it?",
    description: "Borrow what you need, rent out what you don't. Join the sharing economy with Revoo.",
    type: "website",
    locale: "en_US",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense fallback={null}>
          <GoogleAnalytics />
          {children}
        </Suspense>
      </body>
    </html>
  )
}
