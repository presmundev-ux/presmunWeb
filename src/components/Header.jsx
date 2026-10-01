import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import "../styles/header.css";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
          <Link to="/" onClick={closeMenu}>Home</Link>
          
          <div className="dropdown">
            <span className="dropbtn">About</span>
            <div className="dropdown-content">
              <Link to="/about-pumun" onClick={closeMenu}>About PUMUN</Link>
              <Link to="/about-presmun" onClick={closeMenu}>About PresMUN</Link>
            </div>
          </div>

          <Link to="/committees" onClick={closeMenu}>Committees</Link>
          <Link to="/secretariat" onClick={closeMenu}>The Secretariat</Link>
          <Link to="/press" onClick={closeMenu}>Press articles</Link>
          <Link to="/president-university" className="nav-link" onClick={closeMenu}>President University</Link>

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