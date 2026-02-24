import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation - GDEVIS",
  description:
    "Consultez les Conditions Générales d'Utilisation du site www.gdevis.fr",
};

export default function CGUPage() {
  return (
    <section className="py-16 lg:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-primary-900 mb-8">
            Conditions Générales d'Utilisation
          </h1>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Objet
          </h2>
          <p>
            Les présentes Conditions Générales d'Utilisation (CGU) ont pour objet
            de définir les modalités et conditions d'accès et d'utilisation du site
            internet www.gdevis.fr.
          </p>
          <p>
            Le site a pour finalité la présentation de la solution GDEVIS et la
            mise en relation avec des professionnels du secteur dentaire.
          </p>
          <p>
            Toute navigation sur le site implique l'acceptation pleine et entière
            des présentes CGU.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Accès au site
          </h2>
          <p>
            Le site est accessible gratuitement à tout utilisateur disposant d'un
            accès à Internet.
          </p>
          <p>
            GDEVIS s'efforce d'assurer un accès continu au site. Toutefois,
            l'accès peut être suspendu, limité ou interrompu à tout moment,
            notamment pour des raisons techniques, de maintenance ou de mise à
            jour.
          </p>
          <p>
            GDEVIS ne saurait être tenue responsable en cas d'interruption
            temporaire ou définitive du site.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Nature des informations diffusées
          </h2>
          <p>
            Les informations publiées sur le site sont fournies à titre informatif
            et indicatif.
          </p>
          <p>
            Elles ont pour objectif de présenter la solution GDEVIS sans constituer
            une offre contractuelle.
          </p>
          <p>Seule la signature d'un contrat distinct engage les parties.</p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Utilisation du site
          </h2>
          <p>L'utilisateur s'engage à :</p>
          <ul className="list-disc pl-6 my-4">
            <li>Utiliser le site conformément à sa destination</li>
            <li>Ne pas porter atteinte au bon fonctionnement du site</li>
            <li>
              Ne pas tenter d'accéder frauduleusement aux systèmes informatiques
            </li>
            <li>
              Ne pas collecter ou détourner les données présentes sur le site
            </li>
          </ul>
          <p>
            Toute utilisation abusive pourra donner lieu à des mesures appropriées,
            y compris des poursuites.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Réservation de démonstration
          </h2>
          <p>
            La demande de démonstration effectuée via le formulaire en ligne :
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Ne constitue pas une souscription</li>
            <li>Ne vaut pas engagement contractuel</li>
            <li>Ne garantit pas l'accès à la solution</li>
          </ul>
          <p>GDEVIS se réserve le droit :</p>
          <ul className="list-disc pl-6 my-4">
            <li>D'analyser la demande</li>
            <li>
              De vérifier la qualité de professionnel du secteur dentaire
            </li>
            <li>
              De refuser toute demande ne correspondant pas au positionnement de
              la solution
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble des éléments composant le site (textes, contenus
            rédactionnels, éléments graphiques, structure, logos, marque GDEVIS,
            etc.) est protégé par le droit de la propriété intellectuelle.
          </p>
          <p>
            Toute reproduction, représentation, modification ou exploitation,
            totale ou partielle, sans autorisation écrite préalable est
            strictement interdite.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Responsabilité
          </h2>
          <p>
            GDEVIS met en œuvre tous les moyens raisonnables pour assurer
            l'exactitude des informations diffusées.
          </p>
          <p>Toutefois GDEVIS ne saurait être tenue responsable :</p>
          <ul className="list-disc pl-6 my-4">
            <li>Des éventuelles erreurs ou omissions</li>
            <li>
              Des dommages directs ou indirects résultants de l'utilisation du
              site
            </li>
            <li>
              De l'utilisation qui pourrait être faite des informations publiées
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Liens hypertextes
          </h2>
          <p>Le site peut contenir des liens vers des sites tiers.</p>
          <p>
            GDEVIS n'exerce aucun contrôle sur ces sites et décline toute
            responsabilité quant à leur contenu ou à leur politique de protection
            des données.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Protection des données
          </h2>
          <p>
            Les données personnelles collectées via le site sont traitées
            conformément à la{" "}
            <a
              href="/politique-confidentialite"
              className="text-accent-600 hover:text-accent-700 underline"
            >
              Politique de Confidentialité
            </a>{" "}
            accessible sur le site.
          </p>
          <p>
            L'utilisateur est invité à la consulter pour toute information relative
            au traitement de ses données.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Sécurité du site
          </h2>
          <p>L'utilisateur s'interdit toute tentative :</p>
          <ul className="list-disc pl-6 my-4">
            <li>D'intrusion dans les systèmes informatiques</li>
            <li>De perturbations du fonctionnement du site</li>
            <li>D'extraction non autorisée de données</li>
          </ul>
          <p>
            Toute tentative de ce type pourra faire l'objet de poursuites
            conformément aux dispositions légales en vigueur.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Modification des CGU
          </h2>
          <p>
            GDEVIS se réserve le droit de modifier à tout moment les présentes
            CGU.
          </p>
          <p>
            Les CGU applicables sont celles en vigueur à la date de consultation
            du site.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Droit applicable
          </h2>
          <p>Les présentes CGU sont soumises au droit français.</p>
          <p>
            En cas de litige relatif à leur interprétation ou à leur exécution, et
            à défaut de résolution amiable, les tribunaux compétents du ressort du
            siège social de GDEVIS seront seuls compétents.
          </p>
        </div>
      </div>
    </section>
  );
}
