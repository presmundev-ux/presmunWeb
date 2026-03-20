import { Link } from "react-router-dom"; 
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="/images/PRESMUN WHITE.png" alt="PresMUN Logo" className="logo" />
        <div className="logo-text">
          <span className="logo-title">PresMUN</span>
          <span className="logo-year">2026</span>
        </div>
      </div>
      
      <nav className="nav-links">
        <Link to="/home">Home</Link>
        <Link to="/#about">About</Link>
        <Link to="/#councils">Councils</Link>
        <Link to="/secretariat">The Secretariat</Link>
        <Link to="/#press">Press Article</Link>
        <Link to="/#others">Others</Link>
      </nav>
    </header>
  );
}