import type { Metadata } from 'next';
import './globals.css';
import {albert_sans } from '@/fonts';

export const metadata: Metadata = {
  title: 'Surojit Ghosh',
  description: 'Portfolio Website of Surojit Ghosh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en">
    <body className={albert_sans.className}>{children}</body>
  </html>);
};