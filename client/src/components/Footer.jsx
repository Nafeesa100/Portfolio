import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-name">Na<span>feesa</span></div>
      <div className="footer-copy">© 2025 Nafeesa · All rights reserved</div>
      <div className="footer-socials">
        <a
          href="https://www.linkedin.com/in/nafeesa110"
          target="_blank"
          rel="noreferrer"
          className="footer-social-link"
          title="LinkedIn"
        >in</a>
        <a
          href="mailto:naf.dhk2003@gmail.com"
          className="footer-social-link"
          title="Email"
        >@</a>
      </div>
    </footer>
  )
}
