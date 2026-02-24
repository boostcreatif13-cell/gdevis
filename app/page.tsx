import type { Metadata } from "next";
import CTAButton from "@/components/ui/CTAButton";
import {
  Shield,
  CheckCircle,
  Database,
  Eye,
  Users,
  FileText,
  Lock,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import { generateSEOMetadata } from "@/components/seo/SEOHead";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = generateSEOMetadata({
  title: "Solution administrative spécialisée pour la gestion des prises en charge mutuelles dentaires",
  description:
    "Centralisez, structurez et pilotez vos prises en charge mutuelles dans un environnement simple, sécurisé et professionnel. GDEVIS est un outil de gestion et de suivi administratif dédié aux cabinets et centres dentaires.",
  canonicalUrl: "https://www.gdevis.fr",
  keywords: [
    "centralisation dossiers dentaires",
    "pilotage prises en charge",
    "gestion administrative professionnelle",
  ],
});

export default function HomePage() {
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
              La solution administrative spécialisée pour la gestion et le
              suivi des prises en charge mutuelles dentaires.
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed drop-shadow-md">
              Centralisez, structurez et pilotez vos prises en charge mutuelles
              dans un environnement simple, sécurisé et professionnel.
            </p>
            <p className="text-lg mb-10 max-w-2xl mx-auto drop-shadow-sm">
              GDEVIS est un outil de gestion et de suivi administratif. Le
              traitement des dossiers repose sur une organisation spécialisée
              dédiée aux prises en charge mutuelles dentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAButton 
                href="/demander-une-demonstration" 
                size="lg"
                className="bg-white text-primary-900 hover:bg-white/95 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold shadow-lg"
              >
                Demander une démonstration
              </CTAButton>
              <CTAButton
                href="/la-solution"
                variant="secondary"
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-900 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold backdrop-blur-sm"
              >
                Découvrir la solution
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Bloc 2: Problématique métier */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8">
                    Les prises en charge mutuelles : un enjeu administratif devenu
                    stratégique.
                  </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Multiplication des demandes et des échanges avec les mutuelles",
                    "Manque de visibilité sur l'état réel des dossiers",
                    "Risque d'erreurs, d'oublis ou de retards",
                    "Perte de temps administratif pour les équipes",
                    "Difficulté à prioriser les dossiers sensibles",
                    "Impact direct sur les encaissements",
                  ].map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-3 p-4 bg-medical-light rounded-lg hover:bg-primary-50 hover:shadow-md transition-all duration-300 group"
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-3 h-3 bg-primary-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                      </div>
                      <p className="text-gray-700 group-hover:text-primary-900 transition-colors duration-300">{point}</p>
                    </div>
                  ))}
                </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/5215017/pexels-photo-5215017.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Gestion administrative dentaire"
                    fill
                    quality={80}
                    className="object-cover hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent"></div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="spaced" />

      {/* Bloc 3: La réponse GDEVIS */}
      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">
              Une organisation claire et un pilotage fiable de vos prises en
              charge.
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Database,
                  title: "Centralisation des dossiers et documents",
                },
                {
                  icon: TrendingUp,
                  title: "Suivi structuré des statuts",
                },
                {
                  icon: Eye,
                  title: "Vision globale de l'activité liée aux prises en charge",
                },
                {
                  icon: CheckCircle,
                  title: "Réduction des erreurs administratives",
                },
                {
                  icon: FileText,
                  title: "Gain de temps pour les équipes",
                },
                {
                  icon: Shield,
                  title: "Transparence sur les actions réalisées",
                },
              ].map((item, index) => (
                <AnimateOnScroll
                  key={index}
                  direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "right" : "up"}
                  delay={index * 100}
                >
                  <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4 group-hover:bg-primary-500 group-hover:scale-110 transition-all duration-300">
                      <item.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Bloc 4: À qui s'adresse GDEVIS */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">
              Une solution réservée aux structures dentaires
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {[
                "Cabinets dentaires",
                "Centres dentaires",
                "Structures multi-sites dentaires",
                "Directions et équipes administratives dentaires",
              ].map((item, index) => (
                <AnimateOnScroll
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <div className="flex items-center justify-center p-4 bg-medical-light rounded-lg hover:bg-primary-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <Users className="w-6 h-6 text-primary-500 mr-3 group-hover:scale-125 transition-transform duration-300" />
                    <span className="text-gray-700 font-medium group-hover:text-primary-900 transition-colors duration-300">{item}</span>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-500 hover:shadow-lg transition-all duration-300">
              <p className="text-gray-700 font-medium">
                La solution GDEVIS est exclusivement réservée aux structures
                dentaires.
              </p>
              <p className="text-gray-600 mt-2">
                Chaque demande fait l'objet d'une validation préalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="spaced" />

      {/* Bloc 5: Confiance & Conformité */}
      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">
              Une solution conçue pour un environnement exigeant
            </h2>
            {/* Grille équilibrée : 2 colonnes sur desktop, dernière ligne centrée avec flex */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {[
                {
                  icon: Shield,
                  title: "Conformité RGPD",
                  description: "Protection des données professionnelles",
                },
                {
                  icon: Lock,
                  title: "Hébergement certifié HDS",
                  description: "Infrastructure conforme aux exigences santé",
                },
                {
                  icon: Database,
                  title: "Données sécurisées",
                  description: "Chiffrement et protection renforcée",
                },
                {
                  icon: CheckCircle,
                  title: "Accès strictement contrôlés",
                  description: "Authentification et autorisations sécurisées",
                },
              ].map((item, index) => (
                <AnimateOnScroll
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <div className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group border border-primary-100">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full mx-auto mb-4 group-hover:from-primary-500 group-hover:to-primary-600 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                      <item.icon className="w-8 h-8 text-primary-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Bloc 6: Comment ça se passe */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">
              Un accompagnement structuré
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Demande de démonstration",
                "Étude de votre organisation",
                "Échange personnalisé",
                "Mise en place encadrée",
              ].map((step, index) => (
                <AnimateOnScroll
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <div className="bg-medical-light p-6 rounded-lg text-center relative hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold group-hover:scale-125 group-hover:bg-primary-600 transition-all duration-300">
                      {index + 1}
                    </div>
                    <p className="text-gray-700 font-medium mt-4 group-hover:text-primary-900 transition-colors duration-300">{step}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="minimal" />

      {/* Bloc 7: Appel à l'action final */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt=""
            fill
            quality={60}
            className="object-cover"
            sizes="(max-width: 1920px) 100vw, 1920px"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vous souhaitez vérifier si GDEVIS est adapté à votre organisation
              ?
            </h2>
            <div className="mb-8">
              <CTAButton
                href="/demander-une-demonstration"
                size="lg"
                className="bg-white text-primary-900 hover:bg-gray-50 hover:shadow-2xl font-bold shadow-lg"
              >
                Demander une démonstration
              </CTAButton>
            </div>
            <p className="text-lg text-primary-100 mb-2">
              Démonstration sans engagement.
            </p>
            <p className="text-primary-200">
              Aucune activation ni abonnement sans validation préalable.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
