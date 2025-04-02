import type React from "react"
import type { Metadata } from "next"
import { Sora, Wix_Madefor_Display } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/organisms/Navbar"
import Footer from "@/components/organisms/Footer"
import { ThemeProvider } from "@/components/theme-provider"

// Import fonts
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
})

const wixMadefor = Wix_Madefor_Display({
  subsets: ["latin"],
  variable: "--font-wix-madefor",
})

export const metadata: Metadata = {
  title: "Portfolio - Thivakar JEYASEELAN",
  description: "Portfolio of Thivakar JEYASEELAN, a computer science student.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sora.variable} ${wixMadefor.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'
