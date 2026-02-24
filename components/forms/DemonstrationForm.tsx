"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import CTAButton from "@/components/ui/CTAButton";
import { CheckCircle, AlertCircle } from "lucide-react";

const formSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  nomStructure: z.string().min(2, "Le nom de la structure est requis"),
  ville: z.string().min(2, "La ville est requise"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  siret: z
    .string()
    .length(14, "Le SIRET doit contenir exactement 14 chiffres")
    .regex(/^\d+$/, "Le SIRET ne doit contenir que des chiffres"),
  volumePriseEnCharge: z.enum([
    "0-10",
    "10-20",
    "20-30",
    "30-40",
    "40-50",
    "+50",
  ]),
  typeStructure: z.enum([
    "dentiste-liberal",
    "cabinet-multipraticiens",
    "centre-dentaire",
    "groupe-multisites",
  ]),
  confirmation: z.boolean().refine((val) => val === true, {
    message: "Vous devez confirmer exercer dans une structure dentaire",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function DemonstrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // TODO: Appel API backend pour validation SIRET et enregistrement
      const response = await fetch("/api/demonstration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      setSubmitSuccess(true);
    } catch (error) {
      setSubmitError(
        "Une erreur est survenue. Veuillez réessayer ou nous contacter directement."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section className="py-16 lg:py-20 bg-medical-light min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <CheckCircle className="w-16 h-16 text-accent-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Votre demande a bien été prise en compte
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nous vous recontacterons prochainement afin de convenir d'un
                créneau de démonstration adapté à votre organisation.
              </p>
              <CTAButton href="/" size="lg">
                Retour à l'accueil
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Informations personnelles */}
            <div className="bg-medical-light p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-primary-900 mb-6">
                Informations personnelles
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="nom"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    {...register("nom")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                  {errors.nom && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.nom.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="prenom"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    {...register("prenom")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                  {errors.prenom && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.prenom.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Informations structure */}
            <div className="bg-medical-light p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-primary-900 mb-6">
                Informations sur votre structure
              </h2>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="nomStructure"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nom de la structure *
                  </label>
                  <input
                    type="text"
                    id="nomStructure"
                    {...register("nomStructure")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                  {errors.nomStructure && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.nomStructure.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="ville"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Ville *
                  </label>
                  <input
                    type="text"
                    id="ville"
                    {...register("ville")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                  {errors.ville && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.ville.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="siret"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    SIRET (14 chiffres) *
                  </label>
                  <input
                    type="text"
                    id="siret"
                    {...register("siret")}
                    maxLength={14}
                    placeholder="12345678901234"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                  {errors.siret && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.siret.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Le SIRET sera vérifié via l'API SIRENE de l'INSEE
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="typeStructure"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Type de structure *
                  </label>
                  <select
                    id="typeStructure"
                    {...register("typeStructure")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un type</option>
                    <option value="dentiste-liberal">Dentiste libéral</option>
                    <option value="cabinet-multipraticiens">
                      Cabinet dentaire multi-praticiens
                    </option>
                    <option value="centre-dentaire">Centre dentaire</option>
                    <option value="groupe-multisites">Groupe multi-sites</option>
                  </select>
                  {errors.typeStructure && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.typeStructure.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="volumePriseEnCharge"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Nombre approximatif de prises en charge mensuelles *
                  </label>
                  <select
                    id="volumePriseEnCharge"
                    {...register("volumePriseEnCharge")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  >
                    <option value="">Sélectionnez un volume</option>
                    <option value="0-10">0-10</option>
                    <option value="10-20">10-20</option>
                    <option value="20-30">20-30</option>
                    <option value="30-40">30-40</option>
                    <option value="40-50">40-50</option>
                    <option value="+50">+50</option>
                  </select>
                  {errors.volumePriseEnCharge && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.volumePriseEnCharge.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-medical-light p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-primary-900 mb-6">
                Coordonnées
              </h2>
              <div className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email professionnel *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register("email")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="telephone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    {...register("telephone")}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                  />
                  {errors.telephone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.telephone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Confirmation */}
            <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-accent-500">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="confirmation"
                  {...register("confirmation")}
                  className="mt-1 w-5 h-5 text-accent-500 border-gray-300 rounded focus:ring-accent-500"
                />
                <label htmlFor="confirmation" className="text-sm text-gray-700">
                  Je confirme exercer dans une structure dentaire et souhaiter
                  une présentation professionnelle de la solution GDEVIS. *
                </label>
              </div>
              {errors.confirmation && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.confirmation.message}
                </p>
              )}
            </div>

            {/* Message rassurant */}
            <div className="bg-medical-light p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                La demande de démonstration est sans engagement. L'accès à la
                solution est activé uniquement après validation contractuelle.
                Les informations transmises dans le cadre d'une demande de
                démonstration sont traitées de manière strictement
                confidentielle et ne font l'objet d'aucune communication à des
                tiers.
              </p>
            </div>

            {/* Erreur */}
            {submitError && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-600">{submitError}</p>
              </div>
            )}

            {/* Bouton submit */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
