// components/layout/Footer.tsx
import Link from 'next/link';
import { Container } from './Container';
import { getProfile } from '@/lib/content/profile';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const socialIconMap: Record<string, React.ElementType> = {
  'GitHub': FaGithub,
  'LinkedIn': FaLinkedin,
  'Twitter/X': FaXTwitter,
  'Instagram': FaInstagram,
};

export function Footer() {
  const profile = getProfile();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)] py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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

          {/* Kolom 2: Kontak & Sosial */}
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