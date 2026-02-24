"use client";

import type { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import CTAButton from "@/components/ui/CTAButton";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqCategories = [
  {
    category: "Fonctionnement de la solution",
    questions: [
      {
        q: "Comment fonctionne GDEVIS ?",
        a: "GDEVIS est une solution digitale dédiée à l'optimisation du suivi des prises en charge mutuelles au sein des cabinets et centres dentaires. La plateforme permet de structurer, centraliser et sécuriser le traitement administratif des dossiers mutuelles afin d'améliorer la traçabilité, réduire les oublis et retards, fluidifier le suivi des paiements et sécuriser les relances. L'outil s'intègre dans l'organisation existante sans modifier les habitudes cliniques du cabinet.",
      },
      {
        q: "La solution est-elle compatible avec les logiciels métiers existants ?",
        a: "Oui. GDEVIS est conçu pour fonctionner indépendamment des logiciels métiers utilisés dans les cabinets et centres dentaires. La solution n'interfère pas avec votre logiciel clinique ou de facturation et vient compléter votre organisation administrative. Des évolutions d'intégration peuvent être envisagées selon les besoins.",
      },
      {
        q: "Combien de temps dure la mise en place ?",
        a: "La mise en place est rapide. Après validation de l'adéquation de la solution avec votre structure, l'accès à la plateforme peut être activé sous quelques jours. Un accompagnement est prévu afin d'assurer une prise en main fluide et efficace par vos équipes.",
      },
      {
        q: "Est-ce adapté aux centres multisites ?",
        a: "Oui. GDEVIS est adapté aux cabinets individuels, aux centres dentaires et aux structures multi-sites. La plateforme permet une gestion centralisée tout en conservant une organisation claire par site si nécessaire.",
      },
      {
        q: "Proposez-vous un accompagnement ?",
        a: "Oui. GDEVIS ne se limite pas à la mise à disposition d'un outil. Un accompagnement est proposé afin de comprendre votre organisation actuelle, d'adapter l'utilisation de la solution à vos besoins et d'optimiser votre gestion administrative. L'objectif est d'assurer une mise en place structurée et efficace.",
      },
    ],
  },
  {
    category: "Sécurité & conformité",
    questions: [
      {
        q: "La solution est-elle conforme au RGPD ?",
        a: "Oui. GDEVIS est conçu dans le respect du Règlement Général sur la Protection des Données (RGPD). La plateforme applique les principes de minimisation des données, sécurisation des accès, traçabilité des actions et protection contre les accès non autorisés. Un cadre contractuel encadre également les responsabilités respectives en matière de traitement des données.",
      },
      {
        q: "Où sont hébergées les données ?",
        a: "Les données sont hébergées en France auprès d'un hébergeur certifié Hébergeur de Données de Santé (HDS). Cette certification garantit le respect des exigences réglementaires applicables aux données de santé, notamment en matière de sécurité, d'intégrité et de confidentialité. L'infrastructure est située au sein de l'Union Européenne.",
      },
      {
        q: "GDEVIS accède-t-il aux données patients ?",
        a: "GDEVIS n'exploite aucune donnée patient à des fins commerciales. L'accès aux données est strictement limité aux besoins techniques, aux opérations de maintenance et à l'assistance, si nécessaire. Ces accès sont encadrés et tracés.",
      },
      {
        q: "Comment les accès sont-ils sécurisés ?",
        a: "L'accès à la plateforme est protégé par authentification sécurisée, connexion HTTPS chiffrée, gestion des droits par profil utilisateur et journalisation des actions. Des mesures techniques et organisationnelles adaptées au secteur de la santé sont mises en œuvre afin de prévenir tout accès non autorisé.",
      },
    ],
  },
  {
    category: "Commercial",
    questions: [
      {
        q: "À qui s'adresse la solution ?",
        a: "GDEVIS s'adresse exclusivement aux professionnels du secteur dentaire : chirurgiens dentistes libéraux, cabinets multi-praticiens, centres dentaires et groupes multi-sites. La solution est conçue pour répondre aux enjeux administratifs liés au suivi des prises en charge mutuelles dans un cadre professionnel structuré.",
      },
      {
        q: "Comment se déroule une démonstration ?",
        a: "La démonstration est réalisée sur rendez-vous, en visio-conférence. Elle permet de présenter le fonctionnement de la plateforme, d'évaluer l'organisation actuelle de la structure, d'identifier les axes d'optimisation possibles et de répondre aux questions spécifiques. La démonstration est personnalisée en fonction du volume et du type de structure.",
      },
      {
        q: "Y a-t-il un engagement contractuel ?",
        a: "La demande de démonstration est sans engagement. En cas d'intérêt pour la solution, les modalités contractuelles sont présentées de manière claire et transparente avant toute signature. Aucun engagement n'est imposé sans validation préalable du client.",
      },
      {
        q: "La solution est-elle adaptée aux petites structures ?",
        a: "Oui. GDEVIS est adapté aussi bien aux cabinets libéraux à faible volume qu'aux centres dentaires structurés. L'organisation de la solution permet une adaptation proportionnée aux besoins réels de chaque structure.",
      },
      {
        q: "Comment sont définis les tarifs ?",
        a: "Les tarifs sont définis en fonction du type de structure, du volume de prises en charge et du niveau d'accompagnement souhaité. Une proposition personnalisée est établie après analyse des besoins.",
      },
      {
        q: "Est-il possible de souscrire en ligne ?",
        a: "La souscription n'est pas ouverte en libre-service sur le site. L'adhésion à la solution se fait uniquement après échange et validation mutuelle, afin de garantir l'adéquation entre GDEVIS et l'organisation de la structure. La contractualisation peut être réalisée de manière dématérialisée et sécurisée.",
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-primary-900 pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-accent-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="w-5 h-5 text-accent-500 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-700 leading-relaxed">{answer}</div>
      )}
    </div>
  );
}

export default function FAQPage() {
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
              Foire aux questions
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed drop-shadow-md">
              Retrouvez les réponses aux principales questions sur GDEVIS
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary-50 via-white to-medical-light py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-900 mb-6">
              Foire aux questions
            </h1>
            <p className="text-xl text-gray-700">
              Retrouvez les réponses aux principales questions sur GDEVIS
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-primary-900 mb-6">
                  {category.category}
                </h2>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  {category.questions.map((item, qIndex) => (
                    <FAQItem
                      key={qIndex}
                      question={item.q}
                      answer={item.a}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              N'hésitez pas à nous contacter ou à demander une démonstration
              personnalisée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton href="/demander-une-demonstration" size="lg">
                Demander une démonstration
              </CTAButton>
              <CTAButton
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Nous contacter
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
