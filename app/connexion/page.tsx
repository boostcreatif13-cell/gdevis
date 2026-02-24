import type { Metadata } from "next";
import Image from "next/image";
import ConnexionForm from "@/components/forms/ConnexionForm";

export const metadata: Metadata = {
  title: "Connexion à l'espace sécurisé GDEVIS",
  description:
    "Accédez à votre espace client GDEVIS de manière sécurisée. Connexion chiffrée et données hébergées sur des infrastructures conformes aux exigences du secteur de la santé.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ConnexionPage() {
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
              Connexion à l'espace sécurisé GDEVIS
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              Accédez à votre espace client de manière sécurisée
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-medical-light min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-primary-900 mb-4 text-center">
              Connexion à l'espace sécurisé GDEVIS
            </h1>
            <p className="text-gray-700 mb-6 text-center">
              L'accès à la plateforme est strictement réservé aux structures
              disposant d'un compte actif.
            </p>
            <p className="text-sm text-gray-600 mb-8 text-center">
              Les connexions sont chiffrées et les données hébergées sur des
              infrastructures conformes aux exigences applicables au secteur de
              la santé.
            </p>
            <ConnexionForm />
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
