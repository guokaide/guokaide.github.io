export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span className="footer-brand">Kai</span>
        <span>© {new Date().getFullYear()}</span>
      </div>
    </footer>
  )
}
