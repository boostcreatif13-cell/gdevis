import type { Metadata } from "next";
import Image from "next/image";
import { Shield, Lock, Database, CheckCircle, Eye } from "lucide-react";
import SectionDivider from "@/components/ui/SectionDivider";

export const metadata: Metadata = {
  title: "Sécurité & Conformité - GDEVIS",
  description:
    "Découvrez les engagements de GDEVIS en matière de protection des données, sécurité des accès, confidentialité professionnelle et respect des obligations réglementaires du secteur santé.",
};

export default function SecuriteConformitePage() {
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
              Sécurité & Conformité
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              Les engagements de GDEVIS en matière de protection des données et de sécurité
            </p>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      <section className="bg-gradient-to-br from-primary-50 via-white to-medical-light py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Sécurité & Conformité
            </h1>
            <p className="text-xl text-gray-700">
              Les engagements de GDEVIS en matière de protection des données et
              de sécurité
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              Sécurité des données
            </h2>
            {/* Grille équilibrée : 2x2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-medical-light p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <Shield className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  Hébergement sécurisé
                </h3>
                <p className="text-gray-700">
                  Infrastructure certifiée HDS (Hébergeur de Données de Santé)
                  située en France, conforme aux exigences réglementaires du
                  secteur de la santé.
                </p>
              </div>
              <div className="bg-medical-light p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <Lock className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  Protocole HTTPS
                </h3>
                <p className="text-gray-700">
                  Toutes les communications sont chiffrées via le protocole HTTPS
                  avec certificat SSL valide, garantissant la confidentialité
                  des échanges.
                </p>
              </div>
              <div className="bg-medical-light p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <Database className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  Chiffrement des données
                </h3>
                <p className="text-gray-700">
                  Les données sensibles sont chiffrées au repos et en transit,
                  avec des algorithmes de cryptographie robustes.
                </p>
              </div>
              <div className="bg-medical-light p-6 rounded-lg hover:shadow-lg transition-all duration-300">
                <CheckCircle className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  Accès restreint
                </h3>
                <p className="text-gray-700">
                  Authentification sécurisée avec double authentification (2FA)
                  obligatoire et gestion fine des droits d'accès par profil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="spaced" />

      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              Conformité réglementaire
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  Respect du RGPD
                </h3>
                <p className="text-gray-700">
                  GDEVIS est conçu dans le respect du Règlement Général sur la
                  Protection des Données (RGPD). La plateforme applique les
                  principes de minimisation des données, sécurisation des accès,
                  traçabilité des actions et protection contre les accès non
                  autorisés.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  Traitement des données limité aux finalités définies
                </h3>
                <p className="text-gray-700">
                  Les données collectées sont utilisées exclusivement pour les
                  finalités définies dans le cadre contractuel. Aucune
                  utilisation secondaire n'est autorisée sans consentement
                  explicite.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">
                  Aucune revente ou cession de données
                </h3>
                <p className="text-gray-700">
                  GDEVIS s'engage à ne jamais vendre, louer, échanger ou céder
                  les données personnelles ou professionnelles collectées à des
                  tiers, à des fins commerciales ou autres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="spaced" />

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              Confidentialité contractuelle
            </h2>
            <div className="bg-medical-light p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                GDEVIS s'engage contractuellement à une stricte confidentialité
                des informations professionnelles des structures accompagnées.
                Toutes les données sont traitées dans le respect du secret
                professionnel et des obligations contractuelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="line" />

      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-primary-900 mb-8 text-center">
              Environnement professionnel
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed">
                La solution est conçue spécifiquement pour les cabinets et
                centres dentaires, avec une approche adaptée aux exigences
                administratives du secteur santé. L'architecture technique et
                organisationnelle respecte les standards de sécurité et de
                conformité applicables aux données de santé.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
