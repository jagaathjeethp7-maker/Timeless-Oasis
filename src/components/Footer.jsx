import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Youtube, Twitter, Heart } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top container">
        <div className="footer__brand">
          <div className="footer__logo">
            <span className="footer__logo-serif">Timeless</span>
            <span className="footer__logo-sans">Oasis</span>
          </div>
          <p className="footer__tagline">
            Where every space tells a story. Curated home decor for every style, every soul.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Instagram" className="footer__social-link"><Instagram size={18} /></a>
            <a href="#" aria-label="Pinterest" className="footer__social-link"><Heart size={18} /></a>
            <a href="#" aria-label="YouTube" className="footer__social-link"><Youtube size={18} /></a>
            <a href="#" aria-label="Twitter" className="footer__social-link"><Twitter size={18} /></a>
          </div>
        </div>

        <div className="footer__nav">
          <h4 className="footer__nav-title">Navigate</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__nav">
          <h4 className="footer__nav-title">Categories</h4>
          <ul>
            <li><Link to="/shop?category=Living Room">Living Room</Link></li>
            <li><Link to="/shop?category=Bedroom">Bedroom</Link></li>
            <li><Link to="/shop?category=Lighting">Lighting</Link></li>
            <li><Link to="/shop?category=Wall Art">Wall Art</Link></li>
            <li><Link to="/shop?category=Accessories">Accessories</Link></li>
          </ul>
        </div>

        <div className="footer__newsletter">
          <h4 className="footer__nav-title">Stay Inspired</h4>
          <p>Get the latest decor finds and style guides delivered to your inbox.</p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {new Date().getFullYear()} Timeless Oasis. All rights reserved.</p>
        <p>Curated with love for beautiful spaces.</p>
      </div>
    </footer>
  );
}
