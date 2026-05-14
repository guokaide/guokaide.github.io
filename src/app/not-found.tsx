import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', paddingTop: '4rem' }}>
      <h1 className="page-heading" style={{ marginBottom: '1rem' }}>404</h1>
      <p style={{
        fontFamily: 'var(--font-tech)',
        fontSize: '0.75rem',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.14em',
        color: 'var(--text-faint)',
        marginBottom: '2.5rem',
      }}>
        Page not found
      </p>
      <Link href="/" className="back-link">← Back to home</Link>
    </div>
  )
}
