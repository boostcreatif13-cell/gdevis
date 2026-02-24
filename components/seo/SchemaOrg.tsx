export default function SchemaOrg() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GDEVIS",
    legalName: "GDEVIS SASU",
    url: "https://www.gdevis.fr",
    logo: "https://www.gdevis.fr/assets/images/logo.jpeg",
    description:
      "Solution administrative spécialisée pour la gestion et le suivi des prises en charge mutuelles dentaires",
    address: {
      "@type": "PostalAddress",
      streetAddress: "6 rue d'Armaillé",
      addressLocality: "Paris",
      postalCode: "75017",
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+33-X-XX-XX-XX-XX",
      contactType: "Support client",
      email: "contact@gdevis.fr",
      areaServed: ["FR", "GP", "MQ", "RE", "GF", "YT"], // France + DROM
      availableLanguage: ["fr"],
    },
    sameAs: [
      "https://www.linkedin.com/company/sas-gdevis/",
    ],
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: "1-10",
    },
    areaServed: {
      "@type": "Country",
      name: ["France", "Guadeloupe", "Martinique", "La Réunion", "Guyane", "Mayotte"],
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GDEVIS",
    url: "https://www.gdevis.fr",
    description:
      "Solution administrative spécialisée pour la gestion des prises en charge mutuelles dentaires",
    publisher: {
      "@type": "Organization",
      name: "GDEVIS",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.gdevis.fr/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Solution administrative dentaire",
    provider: {
      "@type": "Organization",
      name: "GDEVIS",
    },
    areaServed: {
      "@type": "Country",
      name: ["France", "Guadeloupe", "Martinique", "La Réunion", "Guyane", "Mayotte"],
    },
    description:
      "Gestion et suivi des prises en charge mutuelles pour cabinets et centres dentaires",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
    },
    category: "Logiciel administratif dentaire",
  };

  // Schema pour le logiciel futur
  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GDEVIS",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      ratingCount: "1",
    },
    description:
      "Plateforme web de gestion administrative spécialisée pour les prises en charge mutuelles dentaires",
    featureList: [
      "Centralisation des dossiers",
      "Suivi structuré des statuts",
      "Pilotage administratif",
      "Réduction des erreurs",
      "Transparence en temps réel",
      "Conformité RGPD",
      "Hébergement HDS",
      "Authentification sécurisée",
    ],
    screenshot: "https://www.gdevis.fr/screenshot.jpg",
    softwareVersion: "1.0",
    releaseNotes: "Version initiale de la plateforme GDEVIS",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: "https://www.gdevis.fr",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
