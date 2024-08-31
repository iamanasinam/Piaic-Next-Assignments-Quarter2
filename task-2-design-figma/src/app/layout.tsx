import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sora } from 'next/font/google';

const inter = Inter({ subsets: ["latin"] });
// Import the Sora font
// const sora = Sora({ subsets: ['latin'], weight: ['400', '700'] });
const sora = Sora({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800'] });

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
    <body className={sora.className}>{children}</body>
  </html>
  );
}
