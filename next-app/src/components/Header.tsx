"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#messaging", label: "Messaging" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-crimson py-4 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <div className="hidden md:flex justify-center flex-1 gap-8 flex-wrap">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-cream font-medium px-6 py-2 rounded-md hover:bg-crimson-light hover:-translate-y-0.5 transition-all"
            >
              {label}
            </Link>
          ))}
        </div>
        <button
          type="button"
          className="md:hidden p-2 text-cream"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-cream font-medium px-4 py-2 rounded-md hover:bg-crimson-light block"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
