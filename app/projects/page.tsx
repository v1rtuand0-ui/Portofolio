// app/projects/page.tsx
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { getAllProjects } from '@/lib/content/projects';

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Section spacing="large" wrapped>
      <SectionHeading
        title="Semua Proyek"
        description="Kumpulan proyek yang saya kerjakan — dari eksperimen hingga produk."
      />
      <ProjectGrid projects={projects} />
    </Section>
  );
}