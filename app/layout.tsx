import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaOrg from "@/components/seo/SchemaOrg";
import { generateSEOMetadata } from "@/components/seo/SEOHead";

// Imports dynamiques pour améliorer les performances
const PerformanceOptimizer = dynamic(() => import("@/components/seo/PerformanceOptimizer"), {
  ssr: false,
});
const ConversionTracker = dynamic(() => import("@/components/conversion/ConversionTracker"), {
  ssr: false,
});
const ExitIntent = dynamic(() => import("@/components/conversion/ExitIntent"), {
  ssr: false,
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = generateSEOMetadata({
  title: "Solution administrative spécialisée pour la gestion des prises en charge mutuelles dentaires",
  description:
    "GDEVIS accompagne les cabinets et centres dentaires dans la gestion et le suivi des prises en charge mutuelles, grâce à une solution administrative spécialisée combinant outil de pilotage structuré associé à une organisation dédiée.",
  canonicalUrl: "https://www.gdevis.fr",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable}>
      <head>
        <link rel="icon" type="image/jpeg" href="/assets/images/logo.jpeg" />
        <link rel="apple-touch-icon" href="/assets/images/logo.jpeg" />
        <link rel="canonical" href="https://www.gdevis.fr" />
        <link rel="alternate" hrefLang="fr" href="https://www.gdevis.fr" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="Paris" />
        <meta name="geo.position" content="48.8566;2.3522" />
        <meta name="ICBM" content="48.8566, 2.3522" />
        {/* Preconnect pour améliorer les performances */}
        <link rel="preconnect" href="https://images.pexels.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.linkedin.com" />
        <SchemaOrg />
      </head>
      <body className="min-h-screen flex flex-col">
        <PerformanceOptimizer />
        <ConversionTracker />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <ExitIntent />
      </body>
    </html>
  );
}
