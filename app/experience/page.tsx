// app/experience/page.tsx
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { ExperienceList } from '@/components/experience/ExperienceList';
import { getAllExperiences } from '@/lib/content/experience';

export default function ExperiencePage() {
  const experiences = getAllExperiences();

  return (
    <Section spacing="large" wrapped>
      <SectionHeading
        title="Semua Pengalaman"
        description="Riwayat lengkap perjalanan profesional dan organisasi."
      />
      <ExperienceList experiences={experiences} />
    </Section>
  );
}