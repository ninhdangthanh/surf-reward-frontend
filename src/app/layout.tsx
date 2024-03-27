/* eslint-disable @next/next/no-document-import-in-page */
import type { Metadata } from 'next';

import '@/styles/app.css';
import '@/styles/index.css';

export const metadata: Metadata = {
  title: 'SURF Reward',
  description: 'WELCOME TO SURF REWARD - BIGGEST PRESALE 2024! WHAT DO YOU THINK? 100X OR MORE!?',
  icons: {
    icon: '/public/favicon.ico', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
