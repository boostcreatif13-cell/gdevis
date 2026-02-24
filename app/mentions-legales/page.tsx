import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales - GDEVIS",
  robots: {
    index: true,
    follow: true,
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-16 lg:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-primary-900 mb-8">
            Mentions légales
          </h1>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Éditeur du site
          </h2>
          <p>
            Le présent site est édité par :
          </p>
          <div className="bg-medical-light p-6 rounded-lg my-6">
            <p className="font-semibold mb-2">GDEVIS</p>
            <p>SASU au capital social de 1 200 €</p>
            <p>Immatriculée au Registre du Commerce et des Sociétés de Paris</p>
            <p>SIRET : 948 280 177 00015</p>
            <p className="mt-4">
              <strong>Siège social :</strong>
            </p>
            <p>6 rue d'Armaillé</p>
            <p>75017 PARIS</p>
            <p>France</p>
            <p className="mt-4">
              <strong>Directrice de la publication :</strong>
            </p>
            <p>Sabrina BOUAIFEL, Présidente</p>
            <p className="mt-4">
              <strong>Adresse de contact :</strong>
            </p>
            <p>contact@gdevis.fr</p>
          </div>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Hébergement
          </h2>
          <p>
            Le site est hébergé par :
          </p>
          <div className="bg-medical-light p-6 rounded-lg my-6">
            <p className="text-gray-600 italic">
              Nom d'hébergeur à compléter
            </p>
            <p className="text-gray-600 italic">
              Adresse hébergeur à compléter
            </p>
            <p className="text-gray-600 italic">
              Téléphone hébergeur à compléter
            </p>
            <p className="text-gray-600 italic">
              Site web hébergeur à compléter
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Accès au site
          </h2>
          <p>
            Le site est accessible à tout moment, sauf interruption pour
            maintenance technique ou cas de force majeure.
          </p>
          <p>
            GDEVIS se réserve le droit de suspendre, limiter ou interrompre
            l'accès au site sans préavis, notamment pour des raisons de
            maintenance ou de sécurité.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble des éléments présents sur le site GDEVIS, notamment les
            textes, contenus rédactionnels, éléments graphiques, logos,
            structure, organisation, conception et architecture, sont protégés
            par le droit de la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication,
            transmission ou adaptation, totale ou partielle, de tout ou partie
            du site, par quelque procédé que ce soit, sans autorisation écrite
            préalable de GDEVIS, est strictement interdite.
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l'un quelconque de
            ses éléments pourra faire l'objet de poursuites conformément aux
            dispositions légales en vigueur.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Responsabilité
          </h2>
          <p>
            GDEVIS s'efforce de fournir sur le site des informations aussi
            précises et actualisées que possible.
          </p>
          <p>
            Toutefois, la société ne saurait garantir l'exactitude, la
            complétude ou l'actualité des informations diffusées.
          </p>
          <p>GDEVIS ne pourra être tenue responsable :</p>
          <ul className="list-disc pl-6 my-4">
            <li>Des erreurs ou omissions</li>
            <li>D'une indisponibilité temporaire du site</li>
            <li>
              Ou de tout dommage résultant de l'utilisation des informations
              présentes sur le site
            </li>
          </ul>
          <p>
            L'utilisation du site s'effectue sous la responsabilité exclusive de
            l'utilisateur.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Données personnelles
          </h2>
          <p>
            Les données collectées via les formulaires présents sur le site sont
            conformément à la réglementation en vigueur, notamment le Règlement
            Général sur la Protection des Données (RGPD).
          </p>
          <p>
            Pour plus d'informations concernant la collecte et le traitement des
            données personnelles, l'utilisateur est invité à consulter la page :{" "}
            <a
              href="/politique-confidentialite"
              className="text-accent-600 hover:text-accent-700 underline"
            >
              Politique de confidentialité
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Cookies
          </h2>
          <p>
            Le site peut utiliser des cookies strictement nécessaires à son
            fonctionnement ainsi que, le cas échéant, des cookies destinés à
            améliorer l'expérience utilisateur.
          </p>
          <p>
            Les modalités relatives à l'utilisation des cookies sont détaillées
            dans la page :{" "}
            <a
              href="/politique-cookies"
              className="text-accent-600 hover:text-accent-700 underline"
            >
              Politique de cookies
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
