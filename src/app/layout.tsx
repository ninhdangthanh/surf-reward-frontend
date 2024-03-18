"use client";

import type { Metadata } from 'next';

import '@/styles/app.css';
import '@/styles/index.css';


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
