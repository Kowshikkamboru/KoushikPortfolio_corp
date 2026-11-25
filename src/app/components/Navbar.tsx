"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#positioning", label: "Positioning" },
  { href: "#approach", label: "Approach" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const tickingRef = useRef(false);

  const closeMenu = useCallback(() => setIsOpen(false), []);

  const syncNav = useCallback(() => {
    setIsScrolled(window.scrollY > 30);
    const sections = navItems
      .map((item) => item.href.slice(1))
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const current =
      sections
        .map((section) => ({
          id: section.id,
          top: Math.abs(section.getBoundingClientRect().top - 120),
        }))
        .sort((a, b) => a.top - b.top)[0]?.id ?? "home";

    setActive(current);
    tickingRef.current = false;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(syncNav);
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [syncNav]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, closeMenu]);

  const goTo = (href: string) => {
    closeMenu();
    const target = document.querySelector(href);
    if (target) {
      const top = (target as HTMLElement).offsetTop - 85;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className={`site-header ${isScrolled ? "is-scrolled" : ""}`}>
      <nav className="nav-shell" aria-label="Primary navigation">
        <button
          className="brand-mark"
          type="button"
          onClick={() => goTo("#home")}
          aria-label="Go to home"
        >
          <span>{profile.initials}</span>
        </button>

        {isOpen && (
          <div
            className="mobile-backdrop"
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}

        <div
          id="primary-nav-links"
          className={`nav-links ${isOpen ? "is-open" : ""}`}
          role="navigation"
        >
          {navItems.map((item) => (
            <a
              href={item.href}
              key={item.href}
              className={active === item.href.slice(1) ? "is-active" : ""}
              onClick={(event) => {
                event.preventDefault();
                goTo(item.href);
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a className="nav-cta" href={`mailto:${profile.email}`} aria-label="Send email">
          <span>Email</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 6h16v12H4V6zm2 2v.2l6 4.2 6-4.2V8H6zm12 8v-5.4l-6 4.2-6-4.2V16h12z" />
          </svg>
        </a>

        <button
          className={`menu-toggle ${isOpen ? "is-open" : ""}`}
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="primary-nav-links"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </nav>
    </header>
  );
}
