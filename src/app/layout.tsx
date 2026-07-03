import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

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
    "private AI rancaekek",
    "rio andrianto",
    "skyedigipreneur",
    "Robotic",
    "Rio Andrianto",
    "Robotic Science",
    "SMK Cileunyi",
    "Sekolah Bandung Timur",
    "Kabupaten Bandung",
    "Teman Ngoding",
    "Ngoding Seru",
    "Belajar IT Seru",
    "SMK Bandung Timur",
    "Universitas Padjajaran",
    "Bandung Timur",
    "Rancaekek",
    "Cileunyi",
    "Jatinangor",
    "Sumedang",
    "SMK Al-Ma'soem",
    "SMK Cileunyi"
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
        url: "/assets/images/web/cover.png",
        width: 1200,
        height: 630,
        alt: "Teman Ngoding Cover",
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "temanngoding.id - Kursus Coding Rancaekek",
    description: "Private tutoring & course online dengan gamifikasi ala RPG Game!",
    images: ["/assets/images/web/cover.png"],
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
      <body className="bg-bg-deep text-text-main font-space">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["EducationalOrganization", "LocalBusiness"],
              name: "temanngoding.id",
              url: "https://temanngoding.id",
              logo: "https://temanngoding.id/assets/images/web/cover.png",
              description:
                "Tempat privat & les coding online/offline di Rancaekek buat yang serius mau jago IT. Kurikulum berbasis RPG game dengan mentor berpengalaman.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rancaekek",
                addressRegion: "Jawa Barat",
                addressCountry: "ID",
              },
              areaServed: {
                "@type": "Place",
                name: "Rancaekek, Bandung, Indonesia",
              },
              sameAs: [],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "120",
                bestRating: "5",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Course",
                    name: "Web Dev Fundamentals",
                    description: "HTML, CSS, JS dasar — 8 sesi",
                    provider: { "@type": "Organization", name: "temanngoding.id" },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Course",
                    name: "React & Next.js Mastery",
                    description: "Component, state, routing — 10 sesi",
                    provider: { "@type": "Organization", name: "temanngoding.id" },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Course",
                    name: "Laravel Backend Engineer",
                    description: "REST API, Auth, DB — 12 sesi",
                    provider: { "@type": "Organization", name: "temanngoding.id" },
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Course",
                    name: "Bootcamp: Job-Ready Fullstack",
                    description: "Project portofolio + interview prep — 16 sesi",
                    provider: { "@type": "Organization", name: "temanngoding.id" },
                  },
                },
              ],
            }),
          }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
