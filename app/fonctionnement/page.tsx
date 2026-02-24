import type { Metadata } from "next";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import { CheckCircle, Shield, FileText } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Fonctionnement GDEVIS - Comment ça se passe",
  description:
    "Un fonctionnement simple, structuré et maîtrisé. Découvrez comment GDEVIS s'intègre naturellement à l'organisation des cabinets et centres dentaires.",
  keywords: [
    "fonctionnement GDEVIS",
    "mise en place solution dentaire",
    "accompagnement cabinet dentaire",
    "démarrage GDEVIS",
  ],
};

export default function FonctionnementPage() {
  const etapes = [
    {
      numero: 1,
      titre: "Prise de contact et découverte",
      description:
        "La première étape consiste à effectuer une demande de démonstration via le site GDEVIS. Cet échange permet de découvrir la solution et d'évaluer son adéquation avec votre organisation.",
    },
    {
      numero: 2,
      titre: "Analyse de votre organisation",
      description:
        "Une étude préalable est réalisée afin de comprendre le fonctionnement de votre organisation et d'identifier les besoins administratifs liés aux prises en charge mutuelles.",
    },
    {
      numero: 3,
      titre: "Création de l'accès sécurisé",
      description:
        "Après validation de la souscription et signature du cadre contractuel, l'accès à la solution GDEVIS est mis en place de manière sécurisée, conformément aux modalités définies pour votre organisation.",
    },
    {
      numero: 4,
      titre: "Un cadre clair pour une gestion fiable",
      description:
        "Avant la mise en production, les modalités d'utilisation de la solution GDEVIS sont définies et présentées. Cette étape permet d'établir un cadre de fonctionnement précis, aligné avec les exigences administratives des prises en charge mutuelles. Les règles d'utilisation et les bonnes pratiques sont exposées afin de garantir la fiabilité des dossiers, de limiter les erreurs de traitement et d'assurer une gestion conforme et sécurisée.",
    },
    {
      numero: 5,
      titre: "Un suivi structuré au quotidien",
      description:
        "Une fois la solution en place, les équipes utilisent la plateforme GDEVIS dans leur gestion quotidienne des prises en charge. Les dossiers sont centralisés, suivis et actualisés de manière structurée, avec une visibilité claire sur leur avancement. Un accompagnement administratif est assuré via les outils intégrés à la plateforme, permettant un suivi continu et une communication encadrée, dans le respect du cadre défini.",
    },
  ];

  const garanties = [
    "Un cadre clair et structuré",
    "Une visibilité continue sur les prises en charge",
    "Une organisation administrative maîtrisée",
    "Une réduction des risques d'erreurs",
    "Une collaboration fluide et encadrée",
  ].slice(0, 4);

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
              Un fonctionnement simple, structuré et maîtrisé
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              Le fonctionnement de GDEVIS a été conçu pour s'intégrer
              naturellement à l'organisation des cabinets et centres dentaires,
              sans complexité inutile ni modification des outils cliniques
              existants.
            </p>
            <p className="text-lg text-white mb-10 max-w-2xl mx-auto drop-shadow-sm">
              Chaque étape est encadrée afin de garantir un suivi clair des
              prises en charge mutuelles, dans un cadre sécurisé et conforme.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      {/* Les grandes étapes */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-12 text-center">
              Les grandes étapes du fonctionnement
            </h2>
            <div className="space-y-6">
              {etapes.map((etape, index) => (
                <AnimateOnScroll
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <div className="flex flex-col md:flex-row gap-6 bg-medical-light p-6 rounded-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-110 group-hover:bg-primary-600 transition-all duration-300">
                        {etape.numero}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-2xl font-semibold text-primary-900 mb-3">
                        {etape.titre}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {etape.description}
                      </p>
                    </div>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="spaced" />

      {/* Cadre de communication */}
      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll direction="left">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                    Un cadre de communication structuré
                  </h2>
                  <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Les échanges relatifs aux dossiers s'effectuent directement via
                  la plateforme GDEVIS afin de centraliser les informations et
                  d'assurer une traçabilité complète.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ce mode de fonctionnement favorise une meilleure organisation,
                  limite les pertes d'informations et améliore le suivi des
                  dossiers.
                </p>
              </div>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll direction="right">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl group">
                  <Image
                    src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Communication structurée"
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

      {/* Sécurité & Conformité */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimateOnScroll direction="left">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl group order-2 lg:order-1">
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
              <AnimateOnScroll direction="right">
                <div className="order-1 lg:order-2">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                    Sécurité et conformité des données
                  </h2>
                  <div className="bg-medical-light p-8 rounded-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  La solution GDEVIS est conçue dans le respect des obligations
                  réglementaires en vigueur, notamment en matière de protection des
                  données et de sécurité des informations.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Les données sont hébergées sur des infrastructures conformes aux
                  exigences applicables au secteur de la santé.
                </p>
              </div>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="spaced" />

      {/* Ce que le fonctionnement garantit */}
      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-8 text-center">
              Ce que le fonctionnement garantit
            </h2>
            {/* Grille équilibrée : 2x2 + 1 centrée */}
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              {garanties.slice(0, 4).map((garantie, index) => (
                <AnimateOnScroll
                  key={index}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <div className="flex items-center space-x-3 bg-white p-4 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                    <CheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1 group-hover:scale-125 transition-transform duration-300" />
                    <p className="text-gray-700 font-medium group-hover:text-primary-900 transition-colors duration-300">{garantie}</p>
                  </div>
                </AnimateOnScroll>
              ))}
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
