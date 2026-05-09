import Link from 'next/link'

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="logo">Kai</Link>
        <nav className="site-nav">
          <Link href="/archive" className="nav-link">Archive</Link>
          <span className="nav-sep">·</span>
          <Link href="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  )
}
