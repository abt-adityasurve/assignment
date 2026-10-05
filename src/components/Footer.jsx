import './footer.css'

function Footer() {
  return (
    <footer className="store-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="footer-brand-mark">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.5 18.5 11.1 5.2a1 1 0 0 1 1.8 0l2.2 3.9-5.4 9.4H3.5Z" />
              <path d="m13.9 12.4 3.5 6.1h-7l3.5-6.1Z" />
            </svg>
          </span>
          <span>ACME STORE</span>
        </div>

        <nav className="footer-links">
          <a href="#"><span>Home</span></a>
          <a href="#"><span>About</span></a>
         <a href="#"> <span>Terms  & Conditions</span></a>
         <a href="#"> <span>Shipping & Return Policy</span></a>
         <a href="#"> <span>Privacy Policy</span></a>
         <a href="#"> <span>FAQ</span></a>
        </nav>
      </div>
      <div className="footer-legal">
        <span>© 2023-2026 ACME, Inc. All rights reserved. | View the source</span>
        <span>Created by vercel</span>
      </div>
    </footer>
  )
}

export default Footer
