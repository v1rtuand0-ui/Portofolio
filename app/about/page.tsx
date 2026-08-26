// app/about/page.tsx
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { getProfile } from '@/lib/content/profile';

export default function AboutPage() {
  const profile = getProfile();

  return (
    <Section spacing="large" containerVariant="reading">
      <SectionHeading title="Tentang Saya" />
      <div>
        <p className="text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
          {profile.aboutLong}
        </p>
        <div className="mt-6 pt-6 border-t border-[var(--color-border)]">
          <h3 className="text-lg font-semibold">Informasi Singkat</h3>
          <ul className="mt-2 space-y-1 text-[var(--color-text-secondary)]">
            <li><span className="font-medium">Nama:</span> {profile.name}</li>
            <li><span className="font-medium">Posisi:</span> {profile.positioning}</li>
            <li><span className="font-medium">Email:</span> {profile.email}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
}