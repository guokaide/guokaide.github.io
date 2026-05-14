export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>&copy; {new Date().getFullYear()} · Kai</span>
        <div className="footer-links">
          <a href="https://github.com/guokaide" className="footer-link" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:kaideguo@gmail.com" className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  )
}
