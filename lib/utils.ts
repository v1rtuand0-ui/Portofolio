// lib/utils.ts

/**
 * Format ISO date string to "MMM YYYY" (e.g., "Jan 2024")
 */
export function formatDate(dateString: string | null | undefined): string {
  if (!dateString) return 'Present';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Invalid Date';
    return date.toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric',
    });
  } catch {
    return 'Invalid Date';
  }
}

/**
 * Format date range for Experience/Activity entries
 * Example: "Jan 2024 - Present" or "Jan 2024 - Mar 2024"
 */
export function formatDateRange(
  startDate: string,
  endDate?: string | null
): string {
  const start = formatDate(startDate);
  const end = endDate ? formatDate(endDate) : 'Present';
  return `${start} — ${end}`;
}