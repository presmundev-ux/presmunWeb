import { Link } from "react-router-dom";
import "../styles/footer.css";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col footer-col-brand">
          <Link to="/" onClick={scrollToTop} className="footer-brand-header">
            <img 
              src="/images/logopresmunaslinofekfek.png" 
              alt="PresMUN Logo" 
              className="footer-brand-logo" 
            />
            <div className="footer-brand-text">
              <span className="footer-brand-title">PresMUN</span>
              <span className="footer-brand-tagline">PRESIDENT INTERNATIONAL MODEL UNITED NATIONS</span>
            </div>
          </Link>
          <p className="footer-brand-desc">
            Premier collegiate Model United Nations conference hosted by President University, cultivating global leadership through multilateral dialogue and international diplomacy.
          </p>
        </div>

        <div className="footer-col footer-col-nav">
          <h4 className="footer-heading">NAVIGATION</h4>
          <ul className="footer-links-list">
            <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
            <li><Link to="/about-pumun" onClick={scrollToTop}>About PUMUN</Link></li>
            <li><Link to="/about-presmun" onClick={scrollToTop}>About PresMUN</Link></li>
            <li><Link to="/committees" onClick={scrollToTop}>Committees</Link></li>
            <li><Link to="/secretariat" onClick={scrollToTop}>The Secretariat</Link></li>
            <li><Link to="/press" onClick={scrollToTop}>Press Articles</Link></li>
            <li><Link to="/president-university" onClick={scrollToTop}>President University</Link></li>
          </ul>
        </div>

        <div className="footer-col footer-col-contact">
          <h4 className="footer-heading">ADDRESS &amp; CONTACT</h4>
          <div className="footer-contact-item">
            <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span>Jl. Ki Hajar Dewantara, Kota Jababeka, Cikarang Baru, Bekasi 17550 – Indonesia</span>
          </div>
          <div className="footer-contact-item">
            <svg className="footer-contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <a href="mailto:secretariat.presmun@gmail.com">secretariat.presmun@gmail.com</a>
          </div>
          <div className="footer-contact-socials">
            <a href="https://www.instagram.com/pumunclub/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/president-university-model-united-nations/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.27a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/>
              </svg>
            </a>
            <a href="https://x.com/pumunclub" target="_blank" rel="noopener noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@pumunclub" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom-bar">
        <div className="footer-bottom-left">
          <img src="/images/logopresmunaslinofekfek.png" alt="PresMUN" className="footer-bottom-logo" />
          <span>&copy; {new Date().getFullYear()} President International Model United Nations. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
}