import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de cookies - GDEVIS",
  description:
    "Découvrez l'utilisation des cookies et autres traceurs sur le site www.gdevis.fr",
};

export default function PolitiqueCookiesPage() {
  return (
    <section className="py-16 lg:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-primary-900 mb-8">
            Politique de cookies
          </h1>
          <p className="text-lg text-gray-700">
            La présente politique de cookies décrit l'utilisation des cookies et
            autres traceurs sur le site www.gdevis.fr
          </p>
          <p>
            Elle a pour objectif d'informer les utilisateurs de manière claire
            et transparente sur les technologies utilisées lors de leur navigation.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Qu'est-ce qu'un cookie ?
          </h2>
          <p>
            Un cookie est un fichier texte déposé sur votre terminal (ordinateur,
            tablette, smartphone) lors de la consultation d'un site internet.
          </p>
          <p>Il permet notamment :</p>
          <ul className="list-disc pl-6 my-4">
            <li>D'assurer le bon fonctionnement technique du site</li>
            <li>De sécuriser certaines fonctionnalités</li>
            <li>
              Le cas échéant, d'analyser l'audience de manière statistique
            </li>
          </ul>
          <p>Un cookie ne permet pas d'identifier directement un utilisateur.</p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Types de cookies utilisés
          </h2>
          <p>
            Le site GDEVIS adopte une approche minimaliste et respectueuse de la
            vie privée.
          </p>
          <p>Il utilise exclusivement :</p>
          <ul className="list-disc pl-6 my-4">
            <li>Des cookies strictement nécessaires au fonctionnement du site</li>
            <li>
              Un outil de mesure d'audience configuré conformément aux
              recommandations de la CNIL
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-primary-900 mt-6 mb-4">
            Cookies strictement nécessaires
          </h3>
          <p>Ces cookies sont indispensables au fonctionnement du site.</p>
          <p>Ils permettent notamment :</p>
          <ul className="list-disc pl-6 my-4">
            <li>Le bon fonctionnement des formulaires</li>
            <li>La sécurisation des connexions</li>
            <li>La gestion des sessions utilisateur</li>
            <li>La protection contre les tentatives d'intrusion</li>
          </ul>
          <p>
            Ces cookies ne peuvent pas être désactivés, car le site ne
            fonctionnerait pas correctement sans eux.
          </p>
          <p>Ils ne sont pas utilisés à des fins commerciales.</p>

          <h3 className="text-xl font-semibold text-primary-900 mt-6 mb-4">
            Cookies de mesure d'audience (le cas échéant)
          </h3>
          <p>
            Le site utilise un outil de mesure d'audience configuré de manière à
            :
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Anonymiser les adresses IP</li>
            <li>Ne pas transmettre les données à des tiers</li>
            <li>Héberger les données au sein de l'Union européenne</li>
            <li>
              Limiter la collecte aux seules données statistiques nécessaires
            </li>
            <li>Ne pas utiliser les données à des fins publicitaires</li>
          </ul>
          <p>
            Lorsque la configuration le permet, cet outil fonctionne sans dépôt
            de cookies.
          </p>
          <p>
            Les données collectées sont utilisées exclusivement à des fins
            d'analyse interne afin d'améliorer la qualité du site et l'expérience
            utilisateur.
          </p>

          <h3 className="text-xl font-semibold text-primary-900 mt-6 mb-4">
            Absence de cookies publicitaires
          </h3>
          <p>Le site GDEVIS :</p>
          <ul className="list-disc pl-6 my-4">
            <li>N'utilise pas de cookies publicitaires</li>
            <li>N'utilise pas de pixel de retargeting</li>
            <li>Ne partage aucune donnée avec des plateformes publicitaires</li>
            <li>Ne procède à aucun profilage marketing</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Durée de conservation des cookies
          </h2>
          <p>
            Les cookies strictement nécessaires sont conservés pour la durée
            technique requise au fonctionnement du site.
          </p>
          <p>
            Les données statistiques anonymisées sont conservées pour une durée
            maximale de 13 mois conformément aux recommandations de la CNIL.
          </p>
          <p>
            Le choix de l'utilisateur concernant le consentement est conservé pour
            une durée maximale de 6 mois.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Gestion du consentement
          </h2>
          <p>
            Lors de sa première visite, l'utilisateur est informé de l'utilisation
            des cookies via un bandeau d'information.
          </p>
          <p>
            Lorsque des cookies soumis à consentement sont susceptibles d'être
            utilisés, aucun dépôt n'est effectué avant l'accord explicite de
            l'utilisateur.
          </p>
          <p>
            L'utilisateur peut à tout moment modifier ses préférences via le
            gestionnaire de cookies accessible depuis le site.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Paramétrage via le navigateur
          </h2>
          <p>
            L'utilisateur peut configurer son navigateur afin de bloquer tout ou
            partie des cookies.
          </p>
          <p>
            La désactivation des cookies strictement nécessaires peut toutefois
            altérer le bon fonctionnement du site.
          </p>
        </div>
      </div>
    </section>
  );
}
