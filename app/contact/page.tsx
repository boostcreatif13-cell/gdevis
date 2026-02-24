import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact GDEVIS - Nous contacter",
  description:
    "Contactez GDEVIS pour toute demande d'information complémentaire, question relative à la solution ou prise de contact préalable à une démonstration.",
  keywords: ["contact GDEVIS", "support GDEVIS", "aide GDEVIS"],
};

export default function ContactPage() {
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
              Contact
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              GDEVIS accompagne les structures dentaires dans l'organisation et la sécurisation du suivi administratif
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary-50 via-white to-medical-light py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Contact
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              GDEVIS accompagne les structures dentaires dans l'organisation et
              la sécurisation du suivi administratif des prises en charge
              mutuelle
            </p>
            <p className="text-lg text-gray-600">
              Pour toute demande d'information complémentaire, question relative
              à la solution ou prise de contact préalable à une démonstration,
              vous pouvez utiliser le formulaire ci-dessous.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Chaque demande est analysée avec attention par notre équipe.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
    </>
  );
}
