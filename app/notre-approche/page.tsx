import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { CheckCircle, Shield, Code } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Notre approche GDEVIS - Une solution née du terrain dentaire",
  description:
    "GDEVIS est née d'une réalité vécue au sein des cabinets et centres dentaires. Découvrez l'expérience opérationnelle complète qui a donné naissance à cette solution.",
  keywords: [
    "histoire GDEVIS",
    "expérience dentaire",
    "solution terrain dentaire",
    "fondateur GDEVIS",
  ],
};

export default function NotreApprochePage() {
  const problematiques = [
    "Un volume important de dossiers à suivre",
    "Des échanges multiples avec les mutuelles",
    "Un manque de visibilité sur l'état réel des demandes",
    "Des risques d'erreurs ou de doublons",
    "Une organisation parfois fragmentée",
  ];

  const principes = [
    "Une meilleure traçabilité",
    "Une séparation claire des demandes",
    "Une réduction des risques d'erreurs",
    "Une gestion plus lisible des priorités",
  ];

  return (
    <>
      {/* Hero Section avec image de fond */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center justify-center text-white overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1920"
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
              Une solution née du terrain dentaire
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              GDEVIS est née d'une réalité vécue au sein des cabinets et
              centres dentaires : la gestion des prises en charge mutuelles est
              souvent complexe, chronophage et source d'erreurs
              administratives.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto drop-shadow-sm">
              La solution a été pensée pour structurer, sécuriser et clarifier
              l'organisation des dossiers liés aux prises en charge, dans un
              cadre professionnel et maîtrisé.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Parcours et expertise */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll direction="left">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-primary-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  <Image
                    src="/assets/images/Directrice.png"
                    alt="Sabrina BOUAIFEL, Directrice GDEVIS"
                    width={400}
                    height={400}
                    className="relative rounded-lg shadow-xl object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right">
                <div>
                  <div className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-4 hover:bg-primary-200 transition-colors duration-300">
                    👋 Un mot de la Directrice
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                    Une expérience opérationnelle complète
                  </h2>
                  <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                    <p>
                      Avant la création de GDEVIS, j'ai exercé différentes
                      fonctions au sein de structures dentaires : secrétaire
                      médicale, responsable administrative, puis directrice de
                      centre dentaire.
                    </p>
                    <p>
                      Cette évolution m'a permis de maîtriser l'ensemble du cycle
                      administratif des prises en charge, de la création du dossier
                      jusqu'au suivi des règlements et au contrôle des paiements.
                    </p>
                    <p>
                      GDEVIS est le prolongement direct de cette expérience terrain
                      et d'une volonté d'apporter un cadre structuré et fiable aux
                      équipes administratives.
                    </p>
                  </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="spaced" />

      {/* Constat et problématique */}
      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
                    Un besoin de clarté et d'organisation
                  </h2>
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 mb-6">
                  Au quotidien, les équipes administratives sont confrontées à :
                </p>
                <ul className="space-y-3">
                  {problematiques.map((problematique, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent-500 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{problematique}</p>
                    </li>
                  ))}
                </ul>
                <p className="text-lg text-gray-700 mt-6">
                  GDEVIS a été conçue pour apporter une réponse structurée et
                  sécurisée à ces enjeux.
                </p>
              </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl group">
                  <Image
                    src="https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Organisation administrative"
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

      {/* Philosophie */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll direction="left">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl group order-2 lg:order-1">
                  <Image
                    src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Cadre professionnel"
                    fill
                    quality={80}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right">
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
                    Un cadre clair, une logique maîtrisée
                  </h2>
                  <div className="bg-medical-light p-8 rounded-lg">
                <p className="text-lg text-gray-700 mb-6">
                  La solution repose sur un principe simple : chaque dossier est
                  traité de manière individualisée, dans un cadre structuré.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Cette approche garantit :
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {principes.map((principe, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 bg-white p-4 rounded-lg"
                    >
                      <CheckCircle className="w-6 h-6 text-accent-500 flex-shrink-0" />
                      <p className="text-gray-700 font-medium">{principe}</p>
                    </div>
                  ))}
                </div>
              </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="spaced" />

      {/* Sécurité */}
      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                    Une attention particulière portée à la sécurité
                  </h2>
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  La gestion des données de santé implique un niveau d'exigence
                  élevé.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  GDEVIS est conçue dans le respect des obligations réglementaires
                  applicables, notamment en matière de protection des données et de
                  sécurité des informations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Les données sont hébergées sur des infrastructures conformes aux
                  exigences du secteur de la santé.
                </p>
              </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl group">
                  <Image
                    src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Sécurité des données"
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

      {/* Développement */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6 text-center">
              Une solution construite pour évoluer
            </h2>
            <div className="bg-medical-light p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Le développement et l'architecture technique de la plateforme ont
                été réalisés en collaboration avec un partenaire spécialisé dans
                la conception d'applications web sécurisées.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Cette collaboration garantit un socle technologique fiable,
                évolutif et adapté aux exigences du secteur dentaire.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                GDEVIS s'inscrit dans une démarche d'amélioration continue, avec
                une volonté constante d'adapter la solution aux réalités du
                terrain tout en conservant un cadre structuré et maîtrisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="spaced" />

      {/* Partenariat */}
      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Code className="w-16 h-16 text-accent-500 mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
              Partenariat technique
            </h2>
            <p className="text-lg text-gray-700">
              Le développement technique de la plateforme GDEVIS est réalisé en
              collaboration avec{" "}
              <a
                href="https://creatif-web.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 font-semibold underline decoration-2 underline-offset-2 hover:decoration-primary-500 transition-all duration-200"
              >
                Créatif-web
              </a>
              , spécialisé dans la conception d'applications web sécurisées.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              Ce partenariat technique permet de garantir un haut niveau
              d'exigence en matière de performance, de fiabilité et de sécurité.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="minimal" />

      {/* Appel à l'action */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Découvrir la solution en détail
            </h2>
            <p className="text-lg text-primary-100 mb-8">
              Vous souhaitez vérifier si la solution GDEVIS correspond à
              l'organisation de votre structure ?
            </p>
            <CTAButton
              href="/demander-une-demonstration"
              size="lg"
              className="bg-white text-primary-900 hover:bg-gray-50 hover:shadow-2xl font-bold shadow-lg"
            >
              Demander une démonstration personnalisée
            </CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
