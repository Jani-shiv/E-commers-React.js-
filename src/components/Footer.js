import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          {/* Column 1: About */}
          <div className="col-md-4">
            <h5>About Pixle & Vibes</h5>
            <p>Discover premium fashion, electronics, and lifestyle products at the best prices.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/shop" className="footer-link">Shop</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>Email: support@pixlevibes.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123, E-Commerce Street, City</p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-top pt-3 text-center mt-3">
          <p className="mb-0">© 2025 Pixle & Vibes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
