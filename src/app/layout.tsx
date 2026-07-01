import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "temanngoding.com — Level Up Your Code",
  description: "Private tutoring & course online buat yang serius mau jago IT.",
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
