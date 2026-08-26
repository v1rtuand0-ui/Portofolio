// components/layout/Footer.tsx
import Link from 'next/link';
import { Container } from './Container';
import { getProfile } from '@/lib/content/profile';
import { Mail } from 'lucide-react';
import * as SimpleIcons from '@icons-pack/react-simple-icons';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/experience', label: 'Experience' },
  { href: '/projects', label: 'Projects' },
  { href: '/activities', label: 'Activities' },
  { href: '/about', label: 'About' },
];

// Mapping label ke icon dengan fallback ke Mail
const socialIconMap: Record<string, React.ElementType> = {
  'GitHub': SimpleIcons.SiGithub || Mail,
  'LinkedIn': SimpleIcons.SiLinkedin || Mail,
  'Twitter/X': SimpleIcons.SiTwitter || Mail,
  'Instagram': SimpleIcons.SiInstagram || Mail,
};

export function Footer() {
  const profile = getProfile();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)] py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Kolom 1: Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
            >
              {profile.name}
            </Link>
            <p className="mt-2 text-sm text-[var(--color-text-secondary)] max-w-xs">
              {profile.positioning}
            </p>
            <p className="mt-4 text-xs text-[var(--color-text-muted)]">
              &copy; {new Date().getFullYear()} — Built with Next.js &amp; Tailwind
            </p>
          </div>

          {/* Kolom 2: Navigasi */}
          <div>
            <h4 className="text-sm font-medium text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Kontak & Sosial */}
          <div>
            <h4 className="text-sm font-medium text-[var(--color-text-primary)] uppercase tracking-wider mb-4">
              Hubungi
            </h4>
            <div className="space-y-2 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
              >
                <Mail className="w-4 h-4" />
                {profile.email}
              </a>
              <div className="flex gap-3 pt-2">
                {profile.socialLinks.map((link) => {
                  const Icon = socialIconMap[link.label] || Mail;
                  return (
                    <a
                      key={link.label}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
                {profile.resumeUrl && (
                  <a
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors text-sm"
                  >
                    Resume
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}