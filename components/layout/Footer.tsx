// components/layout/Footer.tsx
import Link from 'next/link';
import { Container } from './Container';
import { getProfile } from '@/lib/content/profile';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/activities', label: 'Activities' },
  { href: '/about', label: 'About' },
];

export function Footer() {
  const profile = getProfile();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)] py-8 md:py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          {/* Brand + copyright */}
          <div>
            <Link
              href="/"
              className="text-sm font-bold text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              {profile.name}
            </Link>
            <p className="text-xs text-[var(--color-text-muted)] mt-1">
              &copy; {new Date().getFullYear()} — built with Next.js &amp; Tailwind
            </p>
          </div>

          {/* Nav mirror (footer) */}
          <nav className="flex flex-wrap gap-4 text-sm" aria-label="Footer navigation">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex gap-3">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            {/* Email */}
            <a
              href={`mailto:${profile.email}`}
              className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}