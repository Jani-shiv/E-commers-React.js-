import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-brand">
        <Link to="https://avatars.githubusercontent.com/u/153932136?v=4" className="logo animate-logo">MyStore</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/" className={`nav-link ${location.pathname === "/" ? "active" : ""}`}>Home</Link></li>
        <li><Link to="/about" className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}>About</Link></li>
        <li><Link to="/contact" className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link></li>
        <li><Link to="/products" className={`nav-link ${location.pathname === "/products" ? "active" : ""}`}>Shop</Link></li>
        <li><Link to="/cart" className={`nav-link ${location.pathname === "/cart" ? "active" : ""}`}>Cart</Link></li>
        <li><Link to="/profile" className={`nav-link ${location.pathname === "/profile" ? "active" : ""}`}>Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;