// app/about/page.tsx
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { getProfile } from '@/lib/content/profile';
import { Image } from '@/components/ui/Image';

export default function AboutPage() {
  const profile = getProfile();

  return (
    <Section spacing="large" containerVariant="reading" wrapped>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Kolom kiri: Foto */}
        <div className="flex-shrink-0 md:w-48">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-2 border-[var(--color-primary-light)] shadow-[var(--shadow-card)]">
            <Image
              src="/images/profile/hero-photo.png"
              alt={`Foto ${profile.name}`}
              aspectRatio="square"
              containerClassName="w-full h-full"
            />
          </div>
        </div>

        {/* Kolom kanan: Teks */}
        <div className="flex-1 min-w-0">
          <SectionHeading title="Tentang Saya" />

          <p className="mt-4 text-[var(--color-text-secondary)] leading-relaxed whitespace-pre-line">
            {profile.aboutLong}
          </p>

          <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
            <h3 className="text-lg font-semibold text-[var(--color-text-primary)]">Informasi Singkat</h3>
            <ul className="mt-3 space-y-1.5 text-[var(--color-text-secondary)]">
              <li><span className="font-medium text-[var(--color-text-primary)]">Nama:</span> {profile.name}</li>
              <li><span className="font-medium text-[var(--color-text-primary)]">Posisi:</span> {profile.positioning}</li>
              <li><span className="font-medium text-[var(--color-text-primary)]">Email:</span> {profile.email}</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}