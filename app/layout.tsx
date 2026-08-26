// app/layout.tsx
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Vito — Student Builder · AI & Technology Enthusiast',
  description: 'Personal portfolio of Vito — Informatics Engineering student.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={roboto.variable}>
      <body className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text-primary)] antialiased font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}