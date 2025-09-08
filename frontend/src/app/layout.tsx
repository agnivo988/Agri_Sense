import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cookies } from "next/headers"; // for server access to cookies
import 'leaflet/dist/leaflet.css';

 // import your i18n config

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}



