import type { Metadata } from "next"
import "./globals.css"
import { Manrope } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const manrope = Manrope({ subsets: ["latin"], weight: ["300", "400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "Webx - Future Web Design",
  description: "Crafting immersive digital experiences for the modern web.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Remove previous Inter font link if necessary - though next/font handles it */}
      </head>
      <body className={manrope.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
