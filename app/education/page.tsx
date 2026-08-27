// app/education/page.tsx
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { EducationGrid } from '@/components/education/EducationGrid';
import { getFormalEducation, getBootcampEducation } from '@/lib/content/education';

export default function EducationPage() {
  const formalEducation = getFormalEducation();
  const bootcampEducation = getBootcampEducation();

  return (
    <>
      {/* Bagian 1: Pendidikan Formal */}
      <Section spacing="large" wrapped className="!py-0 !my-0">
        <SectionHeading
          title="Pendidikan Formal"
          description="Riwayat pendidikan formal dari sekolah hingga perguruan tinggi."
        />
        <EducationGrid education={formalEducation} />
      </Section>

      {/* Bagian 2: Bootcamp & Program */}
      {bootcampEducation.length > 0 && (
        <Section spacing="large" wrapped className="!py-0 !my-0">
          <SectionHeading
            title="Bootcamp & Program"
            description="Program pelatihan dan pengembangan yang saya ikuti."
          />
          <EducationGrid education={bootcampEducation} />
        </Section>
      )}
    </>
  );
}