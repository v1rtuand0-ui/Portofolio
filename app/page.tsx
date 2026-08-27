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

export default function Home() {
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const featuredExperiences = getFeaturedExperiences(5);
  const featuredActivities = getFeaturedActivities(4);
  const featuredEducation = getFeaturedEducation(4);

  return (
    <>
      {/* 1. Hero — REDESIGN (Desktop + Mobile) */}
      <section className="relative overflow-hidden bg-[var(--color-primary)]">

        {/* ===== MOBILE (di bawah lg): foto besar di belakang, teks & CTA ===== */}
        <div className="lg:hidden relative min-h-[520px] px-6 pt-8 pb-10">

          {/* Foto — absolute di kanan, BESAR, overflow/terpotong (z-0) */}
          <div className="absolute bottom-0 right-[-24%] z-0 w-[90%] aspect-[4/5]">
            <Image
              src="/images/profile/hero-photo.png"
              alt={`Foto ${profile.name}`}
              fill
              priority
              aspectRatio="auto"
              className="object-cover object-top"
              containerClassName="w-full h-full rounded-none bg-transparent"
            />
          </div>

          {/* Teks — nama + tagline (z-10), didorong turun mt-20 */}
          <div className="relative z-10 max-w-[62%] flex flex-col mt-20">
            <h1 className="text-3xl font-extrabold tracking-tight leading-[1.15] text-white">
              {profile.name}
            </h1>
            <p className="mt-3 text-base font-medium leading-snug text-white/90">
              {profile.positioning}
            </p>
          </div>

          {/* CTA — hanya tombol "Lihat Proyek →" di mobile */}
          <div className="absolute z-10 bottom-16 left-6">
            <Button variant="filled" size="sm" asChild className="bg-white text-[var(--color-primary)] hover:bg-white/90">
              <a href="/projects">Lihat Proyek →</a>
            </Button>
          </div>

        </div>

        {/* ===== DESKTOP (lg ke atas): 2 kolom ===== */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center">

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

            {/* Tombol CTA — hanya "Lihat Proyek →" di desktop */}
            <div className="mt-8">
              <Button variant="filled" size="md" asChild className="bg-white text-[var(--color-primary)] hover:bg-white/90">
                <a href="/projects">Lihat Proyek →</a>
              </Button>
            </div>
          </div>

          {/* KOLOM KANAN — foto proporsional (tidak ter-crop) */}
          <div className="relative order-1 lg:order-2 w-full max-w-[420px] mx-auto lg:max-w-[480px] lg:mx-0 xl:max-w-[560px]">
            <Image
              src="/images/profile/hero-photo.png"
              alt={`Foto ${profile.name}`}
              width={1400}
              height={1750}
              priority
              aspectRatio="auto"
              className="object-cover object-top"
              containerClassName="rounded-none bg-transparent w-full aspect-[4/5] lg:my-10"
            />
          </div>

        </div>

      </section>

      {/* 2. About teaser — FLAT putih (bg-surface) */}
      <Section spacing="large" containerVariant="reading" className="bg-[var(--color-surface)]">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] mb-4">Tentang Saya</h2>
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {profile.aboutLong.slice(0, 300)}…
        </p>
        <div className="mt-6">
          <Button variant="filled" size="md" asChild className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]">
            <a href="/about">Baca selengkapnya →</a>
          </Button>
        </div>
      </Section>

      {/* 3. Education — FLAT (tanpa wrapped, background putih) */}
      <Section spacing="large" className="bg-[var(--color-background)]">
        <div className="border-t border-[var(--color-border)] pt-8 md:pt-12">
          <SectionHeading
            title="Pendidikan & Bootcamp"
            description="Institusi dan program yang membentuk perjalanan saya."
            viewAllHref="/education"
          />
          <EducationGrid education={featuredEducation} />
        </div>
      </Section>

      {/* 4. Experience — FLAT (tanpa wrapped, background surface) */}
      <Section spacing="large" className="bg-[var(--color-surface)]">
        <SectionHeading
          title="Pengalaman"
          description="Beberapa pengalaman paling relevan dan terkini."
          viewAllHref="/experience"
        />
        <ExperienceList experiences={featuredExperiences} />
      </Section>

      {/* 5. Projects — FLAT (tanpa wrapped, background putih, border tipis) */}
      <Section spacing="large" className="bg-[var(--color-background)]">
        <div className="border-t border-[var(--color-border)] pt-8 md:pt-12">
          <SectionHeading
            title="Proyek Pilihan"
            description="Proyek yang saya bangun — dari game hingga sistem backend."
            viewAllHref="/projects"
          />
          <ProjectGrid projects={featuredProjects} />
        </div>
      </Section>

      {/* 6. Organizations / Activities — FLAT (tanpa wrapped, background surface) */}
      <Section spacing="large" className="bg-[var(--color-surface)]">
        <SectionHeading
          title="Organisasi & Aktivitas"
          description="Keterlibatan di luar perkuliahan yang membentuk saya."
          viewAllHref="/activities"
        />
        <ActivityList activities={featuredActivities} />
      </Section>

    </>
  );
}