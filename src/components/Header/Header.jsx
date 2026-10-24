"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main Navigation">
        <a href="#" className={styles.navLogo} aria-label="MOSU - Home">
          <div className={styles.logoWrapper}>
            <Image
              src="/Logo.png"
              alt="MOSU Modern Solution Logo"
              width={120}
              height={36}
              priority
              className={styles.logoImg}
            />
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#tech">Tech Stack</a></li>
        </ul>

        <div className={styles.navRight}>
          <a
            href="https://wa.me/6287725064056"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navCta}
            aria-label="Contact us via WhatsApp (opens in new tab)"
          >
            Contact Us
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileMenuButton}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className={`${styles.menuIconBar} ${mobileMenuOpen ? styles.menuIconBarOpen1 : ""}`} />
            <span className={`${styles.menuIconBar} ${mobileMenuOpen ? styles.menuIconBarOpen2 : ""}`} />
            <span className={`${styles.menuIconBar} ${mobileMenuOpen ? styles.menuIconBarOpen3 : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <ul className={styles.mobileNavLinks}>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#services" onClick={closeMenu}>Services</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#tech" onClick={closeMenu}>Tech Stack</a></li>
          <li className={styles.mobileCtaLi}>
            <a
              href="https://wa.me/6287725064056"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCta}
              onClick={closeMenu}
            >
              Contact Us on WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
