import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { User, Users, Building2, Network } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "À qui s'adresse GDEVIS - Cabinets et centres dentaires",
  description:
    "GDEVIS s'adresse aux structures dentaires souhaitant structurer et sécuriser la gestion de leurs prises en charge mutuelles, quel que soit leur mode d'organisation ou leur volume d'activité.",
  keywords: [
    "cabinet dentaire",
    "centre dentaire",
    "dentiste libéral",
    "groupe multi-sites dentaire",
    "structure dentaire",
  ],
};

export default function NosClientsPage() {
  const cibles = [
    {
      icon: User,
      titre: "Pour les dentistes libéraux",
      description:
        "Vous exercez seul ou avec une équipe restreinte et souhaitez mieux encadrer la gestion de vos prises en charge mutuelles. GDEVIS vous permet de centraliser vos dossiers, de limiter les erreurs administratives et d'optimiser votre organisation quotidienne. Une solution claire et structurée, sans complexité inutile.",
    },
    {
      icon: Users,
      titre: "Pour les cabinets dentaires multipraticiens",
      description:
        "La coordination des prises en charge entre plusieurs praticiens et assistantes nécessite une organisation rigoureuse. GDEVIS offre une visibilité globale sur les dossiers en cours, facilite le suivi des statuts et permet d'harmoniser les pratiques administratives au sein du cabinet. Une gestion maîtrisée, même lorsque le volume d'activité augmente.",
    },
    {
      icon: Building2,
      titre: "Pour les centres dentaires",
      description:
        "Les centres dentaires traitent un volume important de demandes de prise en charge et nécessitent une structure claire afin d'éviter toute désorganisation. GDEVIS permet de piloter les dossiers de manière structurée, d'assurer une gestion individualisée par dossier et de sécuriser les échanges liés aux mutuelles. Une approche adaptée aux environnements à forte activité.",
    },
    {
      icon: Network,
      titre: "Pour les groupes multi-sites",
      description:
        "Lorsque plusieurs structures sont impliquées, la cohérence et l'harmonisation des processus deviennent essentielles. GDEVIS facilite le pilotage structuré des prises en charge mutuelles, avec une organisation claire et une visibilité adaptée aux besoins des groupes. Une solution pensée pour accompagner les structures en croissance.",
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
              À qui s'adresse GDEVIS ?
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              La solution GDEVIS s'adresse aux structures dentaires souhaitant
              structurer et sécuriser la gestion de leurs prises en charge
              mutuelles, quel que soit leur mode d'organisation ou leur volume
              d'activité.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto drop-shadow-sm">
              Elle s'adapte aussi bien à l'exercice libéral qu'aux organisations
              multi-sites.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Cibles */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {cibles.map((cible, index) => (
                <AnimateOnScroll
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 150}
                >
                  <div className="bg-medical-light p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                    <cible.icon className="w-12 h-12 text-accent-500 mb-4" />
                    <h2 className="text-2xl font-semibold text-primary-900 mb-4">
                      {cible.titre}
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                      {cible.description}
                    </p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="spaced" />

      {/* Différenciation */}
      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
              Une organisation adaptée à chaque structure
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                De l'exercice libéral aux organisations multi-sites, GDEVIS
                s'adapte à la réalité de votre fonctionnement interne.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                La solution structure la gestion des prises en charge mutuelles
                sans alourdir vos processus existants, tout en garantissant une
                organisation claire et maîtrisée.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="minimal" />

      {/* Appel à l'action */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous souhaitez vérifier si la solution GDEVIS est adaptée à votre
              organisation ?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                href="/demander-une-demonstration"
                size="lg"
                className="bg-white text-primary-900 hover:bg-gray-50 hover:shadow-2xl font-bold shadow-lg"
              >
                Demander une démonstration
              </CTAButton>
              <CTAButton
                href="/fonctionnement"
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 font-bold shadow-lg backdrop-blur-sm"
              >
                Découvrir le fonctionnement
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
