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
      <div className="logo-container">
        <Link to="/" onClick={closeMenu} style={{ display: "flex", alignItems: "center", textDecoration: "none", gap: "15px" }}>
          <img src="/images/logopresmunaslinofekfek.png" alt="PresMUN Logo" className="logo"/>
          <div className="logo-text">
            <span className="logo-title">PresMUN</span>
          </div>
        </Link>
      </div>
      
      
      <button className="hamburger-btn" onClick={toggleMenu}>
        {isMenuOpen ? "✕" : "☰"}
      </button>

      
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
      </nav>

    </header>
  );
}