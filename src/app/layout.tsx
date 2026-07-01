import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "temanngoding.id | Belajar IT Lebih Cepat",
    template: "%s | temanngoding.id"
  },
  description: "Tempat privat & les coding online/offline di Rancaekek buat yang serius mau jago IT. Kurikulum berbasis RPG game dengan mentor berpengalaman.",
  keywords: [
    "teman ngoding",
    "temanngoding id",
    "course coding rancaekek",
    "les coding rancaekek",
    "tempat belajar IT di rancaekek",
    "kursus pemrograman bandung",
    "privat coding rancaekek",
    "belajar web development",
    "les privat IT rancaekek",
    "belajar coding seru",
    "private mentor IT rancaekek",
    "belajar arduino rancaekek",
    "belajar ngoding dari nol",
    "private python rancaekek",
    "private game dev rancaekek",
    "privat robotik rancaekek",
    "privat solo journey bandung",
    "private AI rancaekek"
  ],
  authors: [{ name: "Teman Ngoding Team" }],
  creator: "temanngoding.id",
  metadataBase: new URL("https://temanngoding.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "temanngoding.id - Tempat Belajar IT & Kursus Coding Rancaekek",
    description: "Private tutoring & course online buat yang serius mau jago IT dengan tema seru ala RPG Game!",
    url: "https://temanngoding.id",
    siteName: "temanngoding.id",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/web/cover.png",
        width: 1200,
        height: 630,
        alt: "TemanNgoding Cover",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "temanngoding.id - Kursus Coding Rancaekek",
    description: "Private tutoring & course online dengan gamifikasi ala RPG Game!",
    images: ["/images/web/cover.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=Ey2ECY5JvG2YVkobe6ezl8oFMthIrBggO06_qJDa3eY",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="bg-[#0a0d18] text-[#dfe3f5] font-space">
        {children}
      </body>
    </html>
  );
}
