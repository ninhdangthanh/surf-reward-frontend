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

if (typeof localStorage !== 'undefined') {
  localStorage.setItem('key', 'value');
} else if (typeof sessionStorage !== 'undefined') {
  // Fallback to sessionStorage if localStorage is not supported
  sessionStorage.setItem('key', 'value');
} else {
  // If neither localStorage nor sessionStorage is supported
  console.log('Web Storage is not supported in this environment.');
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
