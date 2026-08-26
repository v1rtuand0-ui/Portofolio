// lib/content/education.ts
import type { Education } from '@/lib/types';
import rawEducation from '@/content/education';

/**
 * Ambil semua data pendidikan, diurutkan dari yang terbaru
 */
export function getAllEducation(): Education[] {
  return [...rawEducation].sort(
    (a, b) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );
}

/**
 * Ambil data pendidikan yang ditandai featured, dengan batas jumlah
 * @param limit - jumlah maksimal yang diambil (default: 4)
 */
export function getFeaturedEducation(limit: number = 4): Education[] {
  return getAllEducation().filter((e) => e.featured === true).slice(0, limit);
}

/**
 * Cari pendidikan berdasarkan ID
 */
export function getEducationById(id: string): Education | undefined {
  return getAllEducation().find((e) => e.id === id);
}

/**
 * Ambil data pendidikan berdasarkan kategori
 * @param category - 'formal' | 'bootcamp' | 'program' | 'other'
 */
export function getEducationByCategory(category: Education['category']): Education[] {
  return getAllEducation().filter((e) => e.category === category);
}

/**
 * Ambil data pendidikan formal (kategori 'formal')
 */
export function getFormalEducation(): Education[] {
  return getEducationByCategory('formal');
}

/**
 * Ambil data bootcamp & program (kategori 'bootcamp' atau 'program')
 */
export function getBootcampEducation(): Education[] {
  return getAllEducation().filter(
    (e) => e.category === 'bootcamp' || e.category === 'program'
  );
}