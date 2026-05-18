import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Isaiyana School',
  description: 'A modern single page school website with programs and admissions sub pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
