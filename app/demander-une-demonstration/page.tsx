import type { Metadata } from "next";
import Image from "next/image";
import DemonstrationForm from "@/components/forms/DemonstrationForm";
import { generateSEOMetadata } from "@/components/seo/SEOHead";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = generateSEOMetadata({
  title: "Demander une démonstration GDEVIS",
  description:
    "Demandez une démonstration personnalisée de la solution GDEVIS pour évaluer son adéquation avec votre organisation dentaire. Sans engagement.",
  canonicalUrl: "https://www.gdevis.fr/demander-une-demonstration",
  keywords: [
    "démonstration GDEVIS",
    "essai solution dentaire",
    "découvrir GDEVIS",
    "test solution mutuelle dentaire",
    "demander démo logiciel dentaire",
    "essai gratuit gestion mutuelle",
  ],
});

export default function DemanderDemonstrationPage() {
  return (
    <>
      {/* Hero Section avec image de fond */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center text-white overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            fill
            priority
            quality={85}
            className="object-cover"
            sizes="(max-width: 1920px) 100vw, 1920px"
          />
          {/* Overlay avec gradient pour lisibilité */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 via-primary-500/85 to-primary-400/80"></div>
          {/* Effet de brillance subtil */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
        </div>
        
        {/* Contenu du Hero */}
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Demander une démonstration personnalisée
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              GDEVIS propose une démonstration personnalisée afin d'évaluer
              l'adéquation de la solution avec l'organisation et le volume de
              votre structure.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto drop-shadow-sm">
              Cette présentation permet de découvrir le cadre général de
              fonctionnement de la plateforme, d'identifier les éventuels axes
              d'amélioration de votre gestion actuelle et de répondre à vos
              questions dans un cadre professionnel.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      <DemonstrationForm />
    </>
  );
}
