import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sora } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });
// Import the Sora font
const sora = Sora({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Intro Essay",
  description: "Essay about me ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${sora.className}`}>{children}</body>
    </html>
  );
}
