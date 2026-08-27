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
      {/* 1. Hero — tanpa wrapped, dengan blob biru soft */}
      <Section spacing="large" containerVariant="reading" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[var(--color-primary)] opacity-[0.06] blur-[100px]" />
          <div className="absolute top-40 right-0 w-80 h-80 rounded-full bg-[var(--color-primary)] opacity-[0.05] blur-[100px]" />
          <div className="absolute bottom-0 left-1/2 w-72 h-72 rounded-full bg-[var(--color-primary)] opacity-[0.04] blur-[100px]" />
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 py-4 relative z-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-[var(--color-text-secondary)] mt-2">
              {profile.positioning}
            </p>
            <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
              {profile.introShort}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="dark" size="md" asChild>
                <a href="/projects">Lihat Proyek →</a>
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-[var(--color-primary)] shadow-[var(--shadow-container)]">
            <Image
              src="/images/profile-placeholder.jpg"
              alt="Foto Vito"
              aspectRatio="square"
              containerClassName="w-full h-full"
            />
          </div>
        </div>
      </Section>

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