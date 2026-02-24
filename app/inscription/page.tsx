import type { Metadata } from "next";
import Image from "next/image";
import InscriptionForm from "@/components/forms/InscriptionForm";

export const metadata: Metadata = {
  title: "Inscription - Créer un compte GDEVIS",
  description:
    "Créez votre compte pour accéder à la solution GDEVIS. L'inscription est réservée aux structures dentaires. Votre demande sera validée avant activation.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function InscriptionPage() {
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
              Créer votre compte GDEVIS
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              Accédez à votre espace client sécurisé
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-medical-light min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 lg:p-10 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-primary-900 mb-4 text-center">
                Formulaire d'inscription
              </h2>
              <p className="text-gray-700 mb-6 text-center">
                L'accès à la plateforme est strictement réservé aux structures
                dentaires disposant d'un compte validé.
              </p>
              <p className="text-sm text-gray-600 mb-8 text-center">
                Les connexions sont chiffrées et les données hébergées sur des
                infrastructures conformes aux exigences applicables au secteur de
                la santé.
              </p>
              <InscriptionForm />
              <p className="text-xs text-gray-500 mt-6 text-center">
                Connexion chiffrée et accès protégé
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
