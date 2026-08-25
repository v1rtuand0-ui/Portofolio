// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Container } from './Container';
import { MobileNavigation } from './MobileNavigation';

// PRD Section 6.3 — nav items
const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/activities', label: 'Activities' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--color-border)] bg-[var(--color-background)] py-4">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo / Home link */}
          <Link
            href="/"
            className="text-lg font-bold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
          >
            Vito
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-6 text-sm font-medium">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`transition-colors ${
                        isActive
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              {/* Contact CTA — email action, not a nav page */}
              <li>
                <a
                  href="mailto:vito@example.com" // ganti dengan email asli
                  className="inline-flex items-center px-4 py-2 text-sm font-medium rounded-[var(--radius-sm)] bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 text-[var(--color-text-primary)]"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Open navigation menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Navigation overlay */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={NAV_ITEMS}
        currentPath={pathname}
      />
    </header>
  );
}