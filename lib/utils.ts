// lib/utils.ts

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


/**
 * Merge Tailwind classes safely
 */
export function cn(
  ...inputs: ClassValue[]
) {
  return twMerge(
    clsx(inputs)
  );
}


/**
 * Format ISO date string to year only (e.g., "2024")
 */
export function formatDate(
  dateString: string | null | undefined
): string {

  if (!dateString) return "Present";

  try {

    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
      return "Invalid Date";
    }

    return date.getFullYear().toString();

  } catch {

    return "Invalid Date";

  }
}



/**
 * Format date range for Experience/Activity entries
 * Example: "2024 - Present" or "2022 - 2024"
 */
export function formatDateRange(
  startDate: string,
  endDate?: string | null
): string {

  const start =
    formatDate(startDate);


  const end =
    endDate
      ? formatDate(endDate)
      : "Present";


  return `${start} - ${end}`;

}