import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/hooks/use-cart"
import { ThemeProvider } from "@/providers/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Unique Enterprises - RO Water Purification Solutions",
  description:
    "Premium RO water purifiers, repair services, and daily water subscriptions. Get pure drinking water with our advanced water purification systems.",
  icons: {
    icon: [
      {
        url: "https://t4.ftcdn.net/jpg/04/14/66/07/360_F_414660785_SkJBfss6cojmk1lwbnweEBrVsaQjE7TX.jpg",
        type: "image/svg+xml",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThemeProvider>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
