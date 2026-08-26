// components/layout/Header.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Container } from './Container';
import { MobileNavigation } from './MobileNavigation';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/education', label: 'Education' }, // TAMBAHKAN INI
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/activities', label: 'Activities' },
  { href: '/about', label: 'About' },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-background)] border-b border-[var(--color-border)] shadow-[var(--shadow-card)]">
      <Container>
        <div className="flex items-center justify-between py-4">
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
                  href="mailto:vito.pratama@gmail.com" // TODO: ganti email asli
                  className="inline-flex items-center px-5 py-2 text-sm font-medium rounded-[var(--radius-full)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all duration-200"
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
            <Menu className="w-6 h-6" />
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