import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppFloating from '@/components/WhatsAppFloating'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LetsGoBuddy Travels',
  description: 'Best tour packages Himachal, Rajasthan & more',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>

        {/* GLOBAL HEADER */}
        <Header />

        {/* PAGE CONTENT */}
        <main className="pt-16">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />

        {/* Sticky WhatsApp Button */}
        <WhatsAppFloating />

      </body>
    </html>
  )
}
