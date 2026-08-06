import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cocinas Modernas | Ebanisteria y Diseño en Panama",
  description: "Diseño y fabricación de muebles a medida en Panama. Expertos en cocinas, clósets y remodelaciones con materiales de alta gama.",
};

import Navbar from '../components/Navbar'; // Importas la pieza
import './globals.css';


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />{children}</body>
    </html>
  );
}
