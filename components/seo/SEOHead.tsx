import { Metadata } from "next";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  type?: "website" | "article" | "product";
}

export const generateSEOMetadata = ({
  title,
  description,
  keywords = [],
  ogImage = "https://www.gdevis.fr/og-image.jpg",
  canonicalUrl,
  noindex = false,
  type = "website",
}: SEOHeadProps): Metadata => {
  const defaultTitle =
    "GDEVIS - Solution administrative spécialisée pour la gestion des prises en charge mutuelles dentaires";
  const defaultDescription =
    "GDEVIS accompagne les cabinets et centres dentaires dans la gestion et le suivi des prises en charge mutuelles, grâce à une solution administrative spécialisée combinant outil de pilotage structuré associé à une organisation dédiée.";

  const fullTitle = title
    ? `${title} | GDEVIS`
    : defaultTitle;

  const allKeywords = [
    // Mots-clés principaux
    "prise en charge mutuelle dentaire",
    "gestion mutuelle cabinet dentaire",
    "logiciel administratif centre dentaire",
    "suivi prises en charge mutuelles",
    "organisation administrative dentaire",
    "optimisation gestion mutuelles dentaire",
    "pilotage administratif cabinet dentaire",
    "demande prise en charge dentaire",
    "gestion administrative dentaire",
    "solution mutuelle dentaire",
    
    // Mots-clés spécifiques
    "logiciel gestion mutuelle dentaire",
    "plateforme administrative dentaire",
    "outil gestion prises en charge dentaire",
    "système suivi mutuelle dentaire",
    "application administrative dentaire",
    "logiciel cabinet dentaire",
    "gestion administrative centre dentaire",
    "suivi administratif dentaire",
    "organisation mutuelle dentaire",
    "pilotage mutuelle dentaire",
    
    // Mots-clés géographiques
    "gestion mutuelle dentaire France",
    "logiciel dentaire France",
    "solution administrative dentaire France",
    "gestion mutuelle dentaire DROM",
    "cabinet dentaire France",
    "centre dentaire France",
    
    // Mots-clés fonctionnels
    "centralisation dossiers dentaires",
    "suivi statuts prises en charge",
    "traçabilité prises en charge",
    "sécurisation données dentaires",
    "conformité RGPD dentaire",
    "hébergement HDS dentaire",
    "chiffrement données dentaires",
    "authentification sécurisée dentaire",
    
    // Mots-clés cibles
    "dentiste libéral",
    "cabinet multi-praticiens",
    "groupe multi-sites dentaire",
    "direction administrative dentaire",
    "secrétaire médicale dentaire",
    
    // Mots-clés concurrentiels
    "alternative gestion mutuelle dentaire",
    "meilleur logiciel mutuelle dentaire",
    "solution professionnelle dentaire",
    "outil spécialisé dentaire",
    
    // Mots-clés long tail
    "comment gérer prises en charge mutuelles dentaire",
    "logiciel pour gérer mutuelles dentaire",
    "automatisation gestion mutuelle dentaire",
    "réduire erreurs administratives dentaire",
    "optimiser gestion mutuelle cabinet",
    
    // Mots-clés logiciel futur
    "logiciel GDEVIS",
    "application GDEVIS",
    "plateforme GDEVIS",
    "système GDEVIS",
    "outil GDEVIS",
    
    ...keywords,
  ];

  const baseUrl = "https://www.gdevis.fr";
  const canonical = canonicalUrl || baseUrl;

  return {
    title: fullTitle,
    description: description || defaultDescription,
    keywords: allKeywords.join(", "),
    authors: [{ name: "GDEVIS", url: baseUrl }],
    creator: "GDEVIS",
    publisher: "GDEVIS",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonical,
    },
    openGraph: {
      type: type,
      locale: "fr_FR",
      url: canonical,
      siteName: "GDEVIS",
      title: fullTitle,
      description: description || defaultDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || defaultDescription,
      images: [ogImage],
      creator: "@gdevis",
      site: "@gdevis",
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      // À remplir avec les tokens réels
      // google: "verification_token",
      // yandex: "verification_token",
      // yahoo: "verification_token",
    },
    category: "Santé - Dentaire - Logiciel",
    classification: "Solution administrative dentaire",
  };
};
