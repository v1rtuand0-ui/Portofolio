// app/page.tsx
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { getProfile } from '@/lib/content/profile';
import { getFeaturedProjects } from '@/lib/content/projects';
import { getFeaturedExperiences } from '@/lib/content/experience';
import { getFeaturedActivities } from '@/lib/content/activities';
import { ExperienceList } from '@/components/experience/ExperienceList';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { ActivityList } from '@/components/activities/ActivityList';
import { Button } from '@/components/ui/Button';
import { Image } from '@/components/ui/Image';

export default function Home() {
  const profile = getProfile();
  const featuredProjects = getFeaturedProjects();
  const featuredExperiences = getFeaturedExperiences(5);
  const featuredActivities = getFeaturedActivities(4);

  return (
    <>
      {/* 1. Hero — background putih */}
      <Section spacing="large" containerVariant="reading" className="bg-[var(--color-background)]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 py-4">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl font-light text-[var(--color-text-secondary)] mt-2">
              {profile.positioning}
            </p>
            <p className="mt-4 text-[var(--color-text-secondary)] max-w-2xl leading-relaxed">
              {profile.introShort}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="filled" size="md" asChild>
                <a href="/projects">Lihat Proyek →</a>
              </Button>
              <Button variant="outlined" size="md" asChild>
                <a href={`mailto:${profile.email}`}>Hubungi</a>
              </Button>
            </div>
          </div>
          <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-[var(--color-primary-light)] shadow-[var(--shadow-elevation-2)]">
            <Image
              src="/images/profile-placeholder.jpg"
              alt="Foto Vito"
              aspectRatio="square"
              containerClassName="w-full h-full"
            />
          </div>
        </div>
      </Section>

      {/* 3. Selected Experience — background surface */}
      <Section spacing="large" className="bg-[var(--color-surface)]">
        <SectionHeading
          title="Pengalaman"
          description="Beberapa pengalaman paling relevan dan terkini."
          viewAllHref="/experience"
        />
        <ExperienceList experiences={featuredExperiences} />
      </Section>

      {/* 4. Featured Projects — background putih */}
      <Section spacing="large" className="bg-[var(--color-background)]">
        <SectionHeading
          title="Proyek Pilihan"
          description="Proyek yang saya bangun — dari game hingga sistem backend."
          viewAllHref="/projects"
        />
        <ProjectGrid projects={featuredProjects} />
      </Section>

      {/* 5. Organizations / Activities — background surface */}
      <Section spacing="large" className="bg-[var(--color-surface)]">
        <SectionHeading
          title="Organisasi & Aktivitas"
          description="Keterlibatan di luar perkuliahan yang membentuk saya."
          viewAllHref="/activities"
        />
        <ActivityList activities={featuredActivities} />
      </Section>

      {/* 6. About teaser — background putih */}
      <Section spacing="large" containerVariant="reading" className="bg-[var(--color-background)]">
        <SectionHeading title="Tentang Saya" />
        <p className="text-[var(--color-text-secondary)] leading-relaxed">
          {profile.aboutLong.slice(0, 300)}…
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

      {/* 7. Contact — background surface */}
      <Section spacing="large" containerVariant="reading" className="bg-[var(--color-surface)]">
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