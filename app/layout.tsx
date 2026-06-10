import type { Metadata } from "next";
import type { ReactNode } from "react";
import PageTransition from "@/components/PageTransition";
import UnderConstructionBanner from "@/components/UnderConstructionBanner";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.akya.net";

// Metadata arama motorları ve sosyal önizlemeler için sayfanın temel kimliğini tanımlar.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Akya Group | Uçtan Uca Dijital Çözümler",
  description:
    "Akya Dijital Dönüşüm; yazılım, otomasyon, veri, bulut ve sürdürülebilir teknoloji çözümleriyle işletmelerin dönüşüm yolculuğunu hızlandırır.",
  alternates: {
    canonical: "/",
  },
  // Bismillah
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: siteUrl,
    siteName: "Akya Group",
    title: "Akya Group | Uçtan Uca Dijital Çözümler",
    description:
      "Akya Dijital Dönüşüm; yazılım, otomasyon, veri, bulut ve sürdürülebilir teknoloji çözümleriyle işletmelerin dönüşüm yolculuğunu hızlandırır.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icon.svg",
  },
};

// RootLayout tüm sayfalarda ortak HTML iskeletini ve dil bilgisini sağlar.
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="bg-background text-on-surface font-body-md">
        <UnderConstructionBanner />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
