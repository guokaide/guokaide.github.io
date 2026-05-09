import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Kai's Blog",
    template: "%s — Kai's Blog",
  },
  description: 'Personal blog by Kai — thoughts on tech, life, and learning.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body>
        <Header />
        <main className="page-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
