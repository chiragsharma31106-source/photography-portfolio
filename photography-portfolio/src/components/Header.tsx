
"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setWorkOpen(false);
  };

  return (
    <header className="site-header">
      <Link
        className="brand"
        href="/"
        aria-label={`${siteConfig.photographerName} home`}
        onClick={closeMenu}
      >
        {siteConfig.photographerName}
        <span className="brand-dot">.</span>
      </Link>

      {/* Desktop navigation */}
      <nav className="nav-links" aria-label="Main navigation">
        <Link href="/portfolio">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact" className="nav-contact">
          Let&apos;s talk <span aria-hidden="true">↗</span>
        </Link>
      </nav>

      {/* Mobile menu button */}
      <button
        type="button"
        className="mobile-menu-button"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={menuOpen}
        onClick={() => {
          setMenuOpen((open) => !open);
          setWorkOpen(false);
        }}
      >
        <span>{menuOpen ? "✕" : "☰"}</span>
      </button>

      {/* Mobile navigation */}
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <button
            type="button"
            className="mobile-nav-work"
            aria-expanded={workOpen}
            onClick={() => setWorkOpen((open) => !open)}
          >
            <span>Work</span>
            <span aria-hidden="true">{workOpen ? "−" : "+"}</span>
          </button>

          {workOpen && (
            <div className="mobile-work-dropdown">
              <Link href="/portfolio" onClick={closeMenu}>
                All Work
              </Link>
              <Link href="/portfolio/nightlife" onClick={closeMenu}>
                Nightlife
              </Link>
            </div>
          )}

          <Link href="/about" onClick={closeMenu}>
            About
          </Link>
          <Link href="/services" onClick={closeMenu}>
            Services
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
