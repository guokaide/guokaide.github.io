'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const linkClass = (href: string) => {
    const active = pathname === href || pathname.startsWith(href + '/')
    return `nav-link${active ? ' nav-link-active' : ''}`
  }

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">Kai</Link>
        <nav className="site-nav">
          <Link href="/archive" className={linkClass('/archive')}>Archive</Link>
          <span className="nav-sep">·</span>
          <Link href="/about" className={linkClass('/about')}>About</Link>
        </nav>
      </div>
    </header>
  )
}
