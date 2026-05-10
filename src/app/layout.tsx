import type { Metadata } from 'next'
import { Fraunces, Newsreader, JetBrains_Mono } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  style: ['normal', 'italic'],
})

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
  weight: ['400', '500', '600'],
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500'],
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
    <html lang="zh-Hans" className={`${fraunces.variable} ${newsreader.variable} ${mono.variable}`}>
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
