import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'HippoRecipeApp',
  description: 'A collection of recipes by me',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-sky-50 ">
      <body className={inter.className}>
        <NextUIProvider>
          <Navbar />
          <div className="flex my-5">
            <main className="container">{children}</main>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
