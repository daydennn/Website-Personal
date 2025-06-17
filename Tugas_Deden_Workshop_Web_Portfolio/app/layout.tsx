import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Deden Jamaludin - Full Stack Developer",
  description:
    "Portfolio website Deden Jamaludin - Full Stack Developer passionate dalam menciptakan solusi digital yang amazing",
  keywords: "deden jamaludin, full stack developer, web developer, react, next.js, javascript, portfolio",
  authors: [{ name: "Deden Jamaludin" }],
  creator: "Deden Jamaludin",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
