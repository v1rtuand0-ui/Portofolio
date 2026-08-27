// app/activities/page.tsx
import { Section } from '@/components/layout/Section';
import { SectionHeading } from '@/components/layout/SectionHeading';
import { ActivityList } from '@/components/activities/ActivityList';
import { getAllActivities } from '@/lib/content/activities';

export default function ActivitiesPage() {
  const activities = getAllActivities();

  return (
    <Section spacing="large" wrapped>
      <SectionHeading
        title="Semua Aktivitas & Organisasi"
        description="Keterlibatan di komunitas, organisasi, dan event."
      />
      <ActivityList activities={activities} />
    </Section>
  );
}