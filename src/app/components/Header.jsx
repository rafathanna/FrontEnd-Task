"use client";
import { useState } from "react";

// روابط الهيدر
const navLinks = [
  { name: "Home", icon: "/img/icon1.png", href: "#" },
  { name: "Our Category", icon: "/img/icon2.png", href: "#" },
  { name: "About Us", icon: "/img/icon3.png", href: "#" },
  { name: "Contact Us", icon: "/img/icon4.png", href: "#" },
  { name: "FAQs", icon: "/img/icon5.png", href: "#" },
];

// الأزرار الأصلية (مثل Search, Cart, Profile)
const headerActions = [
  { icon: "/img/img1.png", alt: "Search" },
  { icon: "/img/img2.png", alt: "Cart" },
  { icon: "/img/img3.png", alt: "Profile" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container nav-flex">
        {/* mobile */}
        <div
          className="mobile-menu-icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
          <div className={`bar ${isMenuOpen ? "change" : ""}`}></div>
        </div>

        <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="logo">
            <img src="/img/logo.png" alt="logo" width={65.9} />
          </div>
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} onClick={() => setIsMenuOpen(false)}>
              <img src={link.icon} alt={link.name} width={20} /> {link.name}
            </a>
          ))}
        </nav>

        {/* desktop */}
        <div className="header-actions">
          {headerActions.map((action) => (
            <img
              key={action.alt}
              src={action.icon}
              alt={action.alt}
              width={18}
            />
          ))}
          <div className="icon-btn">
            <button className="btn">
              EN
              <img src="/img/row.png" alt="img" width={24} />
            </button>
            <button className="btn">
              <img src="/img/user.png" width={24} />
              <img src="/img/row.png" alt="img" width={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
