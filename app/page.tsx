// app/page.tsx
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { getProfile } from '@/lib/content/profile';
import { getFeaturedProjects } from '@/lib/content/projects';
import { getFeaturedExperiences } from '@/lib/content/experience';
import { getFeaturedActivities } from '@/lib/content/activities';
import { getFeaturedEducation } from '@/lib/content/education';
import { ExperienceList } from '@/components/experience/ExperienceList';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { ActivityList } from '@/components/activities/ActivityList';
import { EducationGrid } from '@/components/education/EducationGrid';
import { Button } from '@/components/ui/Button';
import { Image } from '@/components/ui/Image';

// Sementara — nanti pindah ke content/profile.ts
const heroLogos = [
  { src: '/images/logos/umrah.png', alt: 'UMRAH' },
  { src: '/images/logos/gdsc.png', alt: 'GDSC' },
  { src: '/images/logos/bangkit.png', alt: 'Bangkit Academy' },
];

export default function Home() {
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const featuredExperiences = getFeaturedExperiences(5);
  const featuredActivities = getFeaturedActivities(4);
  const featuredEducation = getFeaturedEducation(4);

  return (
    <>
      {/* 1. Hero — REDESIGN (background biru solid, teks putih, foto full-bleed) */}
      <section className="relative overflow-hidden bg-[var(--color-primary)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[560px] md:min-h-[640px] lg:min-h-[720px]">

          {/* KOLOM KIRI — teks putih */}
          <div className="order-2 lg:order-1 flex flex-col justify-center
                          px-6 md:px-10 py-12 lg:py-16
                          max-w-xl lg:ml-auto lg:pr-10 xl:pr-16 w-full">

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-white">
              {profile.name}
            </h1>

            <p className="mt-3 text-xl md:text-2xl font-medium text-white/90">
              {profile.positioning}
            </p>

            <p className="mt-5 max-w-md text-white/80 leading-relaxed">
              {profile.introShort}
            </p>

            {/* Logo strip — pakai <img> biasa (karena file PNG aslinya SVG) */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              {heroLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-6 md:h-7 w-auto brightness-0 invert opacity-90 hover:opacity-100 transition"
                />
              ))}
            </div>

            {/* Tombol CTA + chip status */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="filled" size="md" asChild className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                <a href="/projects">Lihat Proyek →</a>
              </Button>
              <Button variant="outlined" size="md" asChild className="border-white/40 text-white hover:bg-white/10">
                <a href="/about">Tentang Saya</a>
              </Button>
              <span className="inline-flex items-center gap-1.5 text-sm text-white/80">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent-green)]" />
                Open to Internship
              </span>
            </div>
          </div>

          {/* KOLOM KANAN — foto full-bleed, tanpa rounded */}
          <div className="relative order-1 lg:order-2 h-[420px] sm:h-[480px] lg:h-auto w-full">
            <Image
              src="/images/profile/hero-photo.png"
              alt={`Foto ${profile.name}`}
              fill
              priority
              aspectRatio="auto"
              className="object-cover object-[center_bottom]"
              containerClassName="rounded-none bg-transparent w-full h-full"
            />
          </div>

        </div>
      </section>

      {/* 2. About teaser — background biru solid */}
      <Section spacing="large" containerVariant="reading">
        <div className="bg-[#1A73E8] rounded-[var(--radius-xl)] shadow-[var(--shadow-container)] px-6 md:px-10 py-8 md:py-12 mx-auto" style={{ maxWidth: 'var(--container-reading)' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Tentang Saya</h2>
          <p className="text-white leading-relaxed">
            {profile.aboutLong.slice(0, 300)}…
          </p>
          <div className="mt-6">
            <Button variant="outlined" size="md" asChild className="border-white text-white hover:bg-white/10 hover:border-white">
              <a href="/about">Baca selengkapnya →</a>
            </Button>
          </div>
        </div>
      </Section>

      {/* 3. Education — wrapped card putih */}
      <Section spacing="large" wrapped>
        <SectionHeading
          title="Pendidikan & Bootcamp"
          description="Institusi dan program yang membentuk perjalanan saya."
          viewAllHref="/education"
        />
        <EducationGrid education={featuredEducation} />
      </Section>

      {/* 4. Experience — wrapped card putih */}
      <Section spacing="large" wrapped>
        <SectionHeading
          title="Pengalaman"
          description="Beberapa pengalaman paling relevan dan terkini."
          viewAllHref="/experience"
        />
        <ExperienceList experiences={featuredExperiences} />
      </Section>

      {/* 5. Projects — wrapped card putih */}
      <Section spacing="large" wrapped>
        <SectionHeading
          title="Proyek Pilihan"
          description="Proyek yang saya bangun — dari game hingga sistem backend."
          viewAllHref="/projects"
        />
        <ProjectGrid projects={featuredProjects} />
      </Section>

      {/* 6. Organizations / Activities — wrapped card putih */}
      <Section spacing="large" wrapped>
        <SectionHeading
          title="Organisasi & Aktivitas"
          description="Keterlibatan di luar perkuliahan yang membentuk saya."
          viewAllHref="/activities"
        />
        <ActivityList activities={featuredActivities} />
      </Section>

      {/* 7. Contact — gradient biru-putih */}
      <Section spacing="large" containerVariant="reading" className="!py-6 md:!py-8">
        <div className="bg-[image:var(--gradient-contact)] rounded-[var(--radius-xl)] shadow-[var(--shadow-container)] px-6 md:px-10 py-8 md:py-12 mx-auto" style={{ maxWidth: 'var(--container-reading)' }}>
          <SectionHeading title="Hubungi Saya" />
          <div className="space-y-3">
            <p className="text-[var(--color-text-secondary)]">
              Kirim email ke{' '}
              <a
                href={`mailto:${profile.email}`}
                className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] transition-colors font-medium"
              >
                {profile.email}
              </a>
            </p>
            <div className="flex flex-wrap gap-4">
              {profile.socialLinks.map(({ label, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  {label}
                </a>
              ))}
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary)] transition-colors"
                >
                  Resume
                </a>
              )}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}