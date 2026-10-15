import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; 
import "../styles/header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  const isHome = pathname === "/";
  const isAbout = pathname.startsWith("/about");
  const isCommittees = pathname.startsWith("/committees");
  const isSecretariat = pathname === "/secretariat";
  const isPress = (pathname === "/press" || pathname.startsWith("/press/")) && !pathname.startsWith("/press-release");
  const isPressRelease = pathname === "/press-release" || pathname === "/press-releases";
  const isPU = pathname === "/president-university";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-left">
        <Link to="/" onClick={closeMenu} className="logo-container" style={{ textDecoration: "none" }}>
          <img src="/images/logopresmunaslinofekfek.png" alt="PresMUN Logo" className="logo"/>
          <div className="logo-text">
            <span className="logo-title">PresMUN</span>
          </div>
        </Link>

        <nav className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link to="/" onClick={closeMenu} className={isHome ? "active" : ""}>Home</Link>
          <Link to="/about-presmun" onClick={closeMenu} className={isAbout ? "active" : ""}>About PresMUN</Link>

          <Link to="/committees" onClick={closeMenu} className={isCommittees ? "active" : ""}>Committees</Link>
          <Link to="/secretariat" onClick={closeMenu} className={isSecretariat ? "active" : ""}>The Secretariat</Link>
          <Link to="/press" onClick={closeMenu} className={isPress ? "active" : ""}>Press articles</Link>
          <Link to="/press-release" onClick={closeMenu} className={isPressRelease ? "active" : ""}>Press Release</Link>
          <Link to="/president-university" className={`nav-link ${isPU ? "active" : ""}`} onClick={closeMenu}>President University</Link>

          <div className="mobile-cta-wrapper">
            <a 
              href="https://forms.gle/rAPHW3nB4Pf4WYZw9" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="navbar-cta-btn"
              onClick={closeMenu}
            >
              Register Now
            </a>
          </div>
        </nav>
      </div>

      <div className="header-right">
        <a 
          href="https://forms.gle/rAPHW3nB4Pf4WYZw9" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="navbar-cta-btn desktop-cta"
        >
          <span>Register Now</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </a>

        <button className="hamburger-btn" onClick={toggleMenu} aria-label="Toggle navigation">
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}