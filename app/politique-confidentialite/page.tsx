import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité - GDEVIS",
  description:
    "Découvrez comment GDEVIS collecte et traite les données personnelles via le site www.gdevis.fr conformément au RGPD.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-16 lg:py-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <h1 className="text-4xl font-bold text-primary-900 mb-8">
            Politique de confidentialité
          </h1>
          <p className="text-lg text-gray-700">
            La présente politique de confidentialité décrit la manière dont
            GDEVIS collecte et traite les données personnelles via le site
            www.gdevis.fr
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Responsable du traitement
          </h2>
          <div className="bg-medical-light p-6 rounded-lg my-6">
            <p>Les données personnelles collectées sur le site www.gdevis.fr sont traitées par :</p>
            <p className="font-semibold mt-4">GDEVIS</p>
            <p>SASU au capital social de 1 200 €</p>
            <p>SIRET : 948 280 177 00015</p>
            <p className="mt-4">
              <strong>Siège social :</strong>
            </p>
            <p>6 rue d'Armaillé</p>
            <p>75017 PARIS</p>
            <p>France</p>
            <p className="mt-4">
              <strong>Adresse de contact :</strong> contact@gdevis.fr
            </p>
            <p className="mt-4">
              GDEVIS agit en qualité de responsable du traitement au sens du
              Règlement (UE) 2016/679 du 27 avril 2016 relatif à la protection
              des données à caractère personnel (RGPD).
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Données collectées
          </h2>
          <p>
            Les données susceptibles d'être collectées via les formulaires du
            site sont :
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Nom</li>
            <li>Prénom</li>
            <li>Nom du cabinet ou centre dentaire</li>
            <li>Ville</li>
            <li>Email professionnel</li>
            <li>Numéro de téléphone professionnel</li>
            <li>Volume approximatif de prises en charge</li>
            <li>Message libre</li>
          </ul>
          <p className="font-semibold">
            Aucune donnée de santé relative à des patients n'est collectée via
            le site internet.
          </p>
          <p>Le site n'a pas vocation à recueillir des données médicales.</p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Finalité du traitement
          </h2>
          <p>Les données collectées sont utilisées exclusivement pour :</p>
          <ul className="list-disc pl-6 my-4">
            <li>Répondre aux demandes de contact</li>
            <li>Organiser une démonstration de la solution GDEVIS</li>
            <li>
              Évaluer l'adéquation de la solution avec la structure
              professionnelle concernée
            </li>
            <li>Assurer un suivi commercial professionnel</li>
          </ul>
          <p>
            Les données ne sont pas utilisées à des fins de prospection non
            sollicitée ou cédées à des tiers.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Base légale du traitement
          </h2>
          <p>Le traitement des données repose sur :</p>
          <ul className="list-disc pl-6 my-4">
            <li>
              Le consentement de l'utilisateur lors de l'envoi du formulaire
            </li>
            <li>
              L'intérêt légitime de GDEVIS à répondre aux demandes
              professionnelles et à assurer le suivi des échanges
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Durée de conservation
          </h2>
          <p>Les données sont conservées :</p>
          <ul className="list-disc pl-6 my-4">
            <li>Pendant la durée nécessaire au traitement de la demande</li>
            <li>
              Et au maximum 3 ans après le dernier contact en l'absence de
              relation contractuelle
            </li>
          </ul>
          <p>
            En cas de conclusion d'un contrat, les données sont conservées
            conformément aux obligations légales, comptables et contractuelles
            applicables.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Destinataires des données
          </h2>
          <p>Les données sont exclusivement destinées :</p>
          <ul className="list-disc pl-6 my-4">
            <li>À GDEVIS</li>
            <li>
              Aux personnes habilitées au sein de la société dans le cadre de
              leurs fonctions
            </li>
          </ul>
          <p>
            Aucune donnée personnelle n'est vendue, louée, échangée ou cédée à
            des tiers.
          </p>
          <p>
            Les données peuvent être hébergées auprès de prestataires techniques
            agissant en qualité de sous-traitants au sens du RGPD, dans le strict
            respect des obligations de sécurité et de confidentialité.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Sécurité des données
          </h2>
          <p>
            GDEVIS met en œuvre des mesures techniques et organisationnelles
            appropriées afin de garantir la sécurité, l'intégrité et la
            confidentialité des données personnelles.
          </p>
          <p>
            Les infrastructures d'hébergement utilisées respectent les exigences
            applicables au secteur de la santé.
          </p>
          <p>
            L'accès aux données est strictement limité aux personnes autorisées.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Droits des utilisateurs
          </h2>
          <p>
            Conformément au RGPD, vous disposez des droits suivants :
          </p>
          <ul className="list-disc pl-6 my-4">
            <li>Droit d'accès</li>
            <li>Droit de rectification</li>
            <li>Droit d'effacement</li>
            <li>Droit à la limitation du traitement</li>
            <li>Droit d'opposition</li>
            <li>Droit à la portabilité des données</li>
          </ul>
          <p>
            Vous pouvez exercer vos droits en adressant votre demande à :{" "}
            <a
              href="mailto:rgpd@gdevis.fr"
              className="text-accent-600 hover:text-accent-700 underline"
            >
              rgpd@gdevis.fr
            </a>
          </p>
          <p>
            Une réponse sera apportée dans un délai maximum d'un mois à compter
            de la réception de la demande.
          </p>
          <p>
            Une pièce d'identité pourra être demandée en cas de doute raisonnable
            sur l'identité du demandeur.
          </p>

          <h2 className="text-2xl font-semibold text-primary-900 mt-8 mb-4">
            Réclamation
          </h2>
          <p>
            En cas de désaccord persistant concernant le traitement de vos
            données personnelles, vous avez la possibilité d'introduire une
            réclamation auprès de l'autorité de contrôle compétente :
          </p>
          <div className="bg-medical-light p-6 rounded-lg my-6">
            <p className="font-semibold">
              Commission Nationale de l'Informatique et des Libertés (CNIL)
            </p>
            <p>
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-600 hover:text-accent-700 underline"
              >
                www.cnil.fr
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
