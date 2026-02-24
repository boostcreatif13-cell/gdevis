"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle, AlertCircle } from "lucide-react";

const formSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  nomCabinet: z.string().min(2, "Le nom du cabinet est requis"),
  ville: z.string().min(2, "La ville est requise"),
  email: z.string().email("Email invalide"),
  siret: z
    .string()
    .length(14, "Le SIRET doit contenir exactement 14 chiffres")
    .regex(/^\d+$/, "Le SIRET ne doit contenir que des chiffres"),
  objet: z.enum([
    "information-generale",
    "question-technique",
    "partenariat",
    "autre",
  ]),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
  rgpd: z.boolean().refine((val) => val === true, {
    message: "Vous devez accepter la politique de confidentialité",
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
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
      const response = await fetch("/api/contact", {
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
      <section className="py-16 lg:py-20 bg-medical-light">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <CheckCircle className="w-16 h-16 text-accent-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary-900 mb-4">
                Votre message a bien été transmis
              </h2>
              <p className="text-lg text-gray-700">
                Nous vous recontacterons si votre demande nécessite une réponse
                ou un échange complémentaire.
              </p>
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

            <div>
              <label
                htmlFor="nomCabinet"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nom du cabinet / Centre dentaire *
              </label>
              <input
                type="text"
                id="nomCabinet"
                {...register("nomCabinet")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              {errors.nomCabinet && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.nomCabinet.message}
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
                htmlFor="siret"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                SIRET *
              </label>
              <input
                type="text"
                id="siret"
                {...register("siret")}
                maxLength={14}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              {errors.siret && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.siret.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="objet"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Objet de la demande *
              </label>
              <select
                id="objet"
                {...register("objet")}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              >
                <option value="">Sélectionnez un objet</option>
                <option value="information-generale">
                  Information générale
                </option>
                <option value="question-technique">Question technique</option>
                <option value="partenariat">Partenariat</option>
                <option value="autre">Autre</option>
              </select>
              {errors.objet && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.objet.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                {...register("message")}
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-500 focus:border-transparent"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.message.message}
                </p>
              )}
            </div>

            <div className="bg-primary-50 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="rgpd"
                  {...register("rgpd")}
                  className="mt-1 w-5 h-5 text-accent-500 border-gray-300 rounded focus:ring-accent-500"
                />
                <label htmlFor="rgpd" className="text-sm text-gray-700">
                  Je confirme être un professionnel du secteur dentaire et
                  accepter que mes données soient utilisées pour le traitement de
                  ma demande conformément à la{" "}
                  <a
                    href="/politique-confidentialite"
                    className="text-accent-600 hover:text-accent-700 underline"
                  >
                    politique de confidentialité
                  </a>
                  . *
                </label>
              </div>
              {errors.rgpd && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.rgpd.message}
                </p>
              )}
            </div>

            {submitError && (
              <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-red-600">{submitError}</p>
              </div>
            )}

            <div className="bg-medical-light p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                Les informations transmises sont traitées de manière
                confidentielle et utilisées exclusivement dans le cadre du
                traitement de votre demande.
              </p>
            </div>

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
