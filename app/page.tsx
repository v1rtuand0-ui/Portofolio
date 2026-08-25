// app/page.tsx
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { getProfile } from '@/lib/content/profile';
import { getFeaturedProjects } from '@/lib/content/projects';
import { getFeaturedExperiences } from '@/lib/content/experience';
import { getFeaturedActivities } from '@/lib/content/activities';
import { ExperienceList } from '@/components/experience/ExperienceList';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { ActivityList } from '@/components/activities/ActivityList';

export default function Home() {
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const featuredExperiences = getFeaturedExperiences(5);
  const featuredActivities = getFeaturedActivities(4);

  return (
    <>
      {/* 1. Hero */}
      <Section spacing="large" containerVariant="reading">
        <div className="py-4">
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
            <a
              href="/projects"
              className="inline-flex px-6 py-3 text-sm font-medium rounded-[var(--radius-full)] bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] transition-all duration-200 shadow-[var(--shadow-elevation-1)] hover:shadow-[var(--shadow-elevation-2)]"
            >
              Lihat Proyek →
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex px-6 py-3 text-sm font-medium rounded-[var(--radius-full)] border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-200"
            >
              Hubungi
            </a>
          </div>
        </div>
      </Section>

      {/* 3. Selected Experience */}
      <Section spacing="large">
        <SectionHeading
          title="Pengalaman"
          description="Beberapa pengalaman paling relevan dan terkini."
          viewAllHref="/experience"
        />
        <ExperienceList experiences={featuredExperiences} />
      </Section>

      {/* 4. Featured Projects */}
      <Section spacing="large">
        <SectionHeading
          title="Proyek Pilihan"
          description="Proyek yang saya bangun — dari game hingga sistem backend."
          viewAllHref="/projects"
        />
        <ProjectGrid projects={featuredProjects} />
      </Section>

      {/* 5. Organizations / Activities */}
      <Section spacing="large">
        <SectionHeading
          title="Organisasi & Aktivitas"
          description="Keterlibatan di luar perkuliahan yang membentuk saya."
          viewAllHref="/activities"
        />
        <ActivityList activities={featuredActivities} />
      </Section>

      {/* 6. About teaser */}
      <Section spacing="large" containerVariant="reading">
        <SectionHeading title="Tentang Saya" />
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {profile.aboutLong.slice(0, 200)}…
        </p>
        <div className="mt-4">
          <a
            href="/about"
            className="text-[var(--color-primary)] hover:text-[var(--color-primary-hover)] font-medium transition-colors"
          >
            Baca selengkapnya →
          </a>
        </div>
      </Section>

      {/* 7. Contact */}
      <Section spacing="large" containerVariant="reading">
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
      </Section>
    </>
  );
}