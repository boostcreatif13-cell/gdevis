import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import {
  Database,
  TrendingUp,
  Shield,
  Eye,
  CheckCircle,
} from "lucide-react";
import { generateSEOMetadata } from "@/components/seo/SEOHead";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = generateSEOMetadata({
  title: "La solution GDEVIS - Outil de gestion administrative dentaire",
  description:
    "GDEVIS est une solution administrative spécialisée permettant aux cabinets et centres dentaires de centraliser, structurer et piloter leurs prises en charge mutuelles dans un environnement professionnel, sécurisé et organisé.",
  canonicalUrl: "https://www.gdevis.fr/la-solution",
  keywords: [
    "solution administrative dentaire",
    "gestion prises en charge mutuelles",
    "outil administratif cabinet dentaire",
    "centralisation dossiers dentaires",
    "pilotage administratif dentaire",
    "logiciel gestion mutuelle",
  ],
});

export default function LaSolutionPage() {
  const piliers = [
    {
      icon: Database,
      title: "Centralisation des prises en charge",
      description:
        "L'ensemble des dossiers, documents et informations liés aux prises en charge est regroupé dans un espace structuré, accessible à tout moment par les équipes autorisées.",
    },
    {
      icon: TrendingUp,
      title: "Suivi clair et structuré des dossiers",
      description:
        "Chaque prise en charge bénéficie d'un statut clair et actualisé, permettant une lecture immédiate de l'avancement du dossier, sans recherche inutile.",
    },
    {
      icon: Shield,
      title: "Pilotage de l'activité liée aux prises en charge",
      description:
        "GDEVIS permet de piloter l'activité administrative liée aux prises en charge afin d'améliorer l'organisation, l'anticipation et la gestion du temps des équipes.",
    },
    {
      icon: CheckCircle,
      title: "Sécurisation et réduction des erreurs administratives",
      description:
        "La structuration des dossiers et des informations contribue à limiter les oublis, doublons et erreurs de transmission.",
    },
    {
      icon: Eye,
      title: "Transparence et visibilité en temps réel",
      description:
        "Les actions réalisées et l'état des dossiers sont visibles en temps réel, offrant une transparence continue sur le suivi des prises en charge.",
    },
  ];

  return (
    <>
      {/* Hero Section avec image de fond */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center text-white overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
              La solution GDEVIS
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              GDEVIS est une solution administrative spécialisée permettant
              aux cabinets et centres dentaires de centraliser, structurer et
              piloter leurs prises en charge mutuelles dans un environnement
              professionnel, sécurisé et organisé.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto drop-shadow-sm">
              Conçue pour répondre aux contraintes concrètes du terrain :
              multiplication des dossiers, délais variables selon les
              mutuelles, risques d'erreurs et manque de visibilité sur l'état
              d'avancement des demandes.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Les grands piliers - Disposition équilibrée et élégante */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <AnimateOnScroll direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">
                Les grands piliers de la solution
              </h2>
            </AnimateOnScroll>

            {/* 4 premières cartes en grille 2x2 */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {piliers.slice(0, 4).map((pilier, index) => (
                <AnimateOnScroll
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group border border-primary-100">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mb-4 group-hover:from-primary-500 group-hover:to-primary-600 group-hover:scale-110 transition-all duration-300">
                      <pilier.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                      {pilier.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {pilier.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="spaced" />

      {/* Ce que GDEVIS n'est pas */}
      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                    Une solution administrative spécialisée, pas un logiciel médical
                  </h2>
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  GDEVIS n'est ni un logiciel médical, ni un outil de gestion des
                  soins.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  La solution est exclusivement dédiée à l'organisation et au suivi
                  administratif des prises en charge mutuelles.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Elle s'intègre dans le fonctionnement existant des cabinets et
                  centres dentaires, sans interférer avec leurs outils cliniques.
                </p>
              </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl group">
                  <Image
                    src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Solution administrative"
                    fill
                    quality={80}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* À qui s'adresse */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              À qui s'adresse la solution
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              GDEVIS s'adresse aux cabinets et centres dentaires souhaitant
              structurer et sécuriser leur gestion administrative des prises en
              charge mutuelles.
            </p>
            <CTAButton
              href="/nos-clients"
              variant="secondary"
              size="lg"
              className="font-bold"
            >
              Découvrir à qui s'adresse GDEVIS
            </CTAButton>
          </div>
        </div>
      </section>

      <SectionDivider variant="minimal" />

      {/* Appel à l'action */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Chaque structure dispose d'une organisation spécifique
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              L'accès à la solution GDEVIS se fait après étude de vos besoins et
              validation préalable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href="/demander-une-demonstration"
                size="lg"
                className="bg-white text-primary-900 hover:bg-gray-50 hover:shadow-2xl font-bold shadow-lg"
              >
                Demander une démonstration
              </CTAButton>
              <CTAButton
                href="/nos-clients"
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 font-bold shadow-lg backdrop-blur-sm"
              >
                Découvrir à qui s'adresse GDEVIS
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
