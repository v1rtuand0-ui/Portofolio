// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';  // <--- TAMBAHKAN INI
import { Container } from './Container';
import { MobileNavigation } from './MobileNavigation';

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
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
          >
            Vito
          </Link>

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
                          ? 'text-[var(--color-primary)]'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                      }`}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <a
                  href="mailto:vito@example.com" // TODO: ganti dengan email asli
                  className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-[var(--radius-full)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all duration-200 shadow-[var(--shadow-elevation-1)] hover:shadow-[var(--shadow-elevation-2)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="md:hidden p-2 text-[var(--color-text-primary)]"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label="Open navigation menu"
          >
            <Menu className="w-6 h-6" />  {/* <--- GANTI INI */}
          </button>
        </div>
      </Container>

      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={NAV_ITEMS}
        currentPath={pathname}
      />
    </header>
  );
}