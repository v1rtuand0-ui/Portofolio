// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getProjectBySlug, getAllProjectSlugs } from '@/lib/content/projects';
import { ProjectDetail } from '@/components/projects/ProjectDetail';
import { Section } from '@/components/layout/Section';
import type { Metadata } from 'next';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return {
      title: 'Proyek Tidak Ditemukan',
    };
  }
  return {
    title: `${project.title} — Vito`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Section spacing="large" containerVariant="reading">
      <ProjectDetail project={project} />
    </Section>
  );
}