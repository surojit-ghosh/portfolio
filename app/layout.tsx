import type { Metadata } from 'next';
import './globals.css';
import { montserrat } from '@/fonts';

export const metadata: Metadata = {
  title: 'Surojit Ghosh',
  description: 'Portfolio Website of Surojit Ghosh',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en">
    <body className={montserrat.className}>{children}</body>
  </html>);
};