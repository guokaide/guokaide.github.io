import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">
          <span>Kai</span>
          <svg className="logo-mark" width="13" height="13" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 0 C12.5 9 13 11 24 12 C13 13 12.5 15 12 24 C11.5 15 11 13 0 12 C11 11 11.5 9 12 0 Z" fill="currentColor"/>
          </svg>
        </Link>
        <nav className="site-nav">
          <Link href="/archive" className="nav-link">Archive</Link>
          <span className="nav-sep">·</span>
          <Link href="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  )
}
