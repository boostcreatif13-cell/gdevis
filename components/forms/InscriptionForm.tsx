"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import { AlertCircle, CheckCircle } from "lucide-react";

const formSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  prenom: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Numéro de téléphone invalide"),
  nomStructure: z.string().min(2, "Le nom de la structure est requis"),
  siret: z
    .string()
    .length(14, "Le SIRET doit contenir exactement 14 chiffres")
    .regex(/^\d+$/, "Le SIRET ne doit contenir que des chiffres"),
  password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
  confirmPassword: z.string(),
  confirmation: z.boolean().refine((val) => val === true, {
    message: "Vous devez confirmer exercer dans une structure dentaire",
  }),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Les mots de passe ne correspondent pas",
  path: ["confirmPassword"],
});

type FormData = z.infer<typeof formSchema>;

export default function InscriptionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);

    try {
      // TODO: Appel API backend pour inscription
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: data.nom,
          prenom: data.prenom,
          email: data.email,
          telephone: data.telephone,
          nomStructure: data.nomStructure,
          siret: data.siret,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'inscription");
      }

      setSuccess(true);
      // Redirection après 2 secondes
      setTimeout(() => {
        window.location.href = "/connexion";
      }, 2000);
    } catch (error) {
      setError("Une erreur est survenue lors de l'inscription. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
        <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-green-900 mb-2">
          Inscription réussie !
        </h3>
        <p className="text-green-700">
          Votre demande d'inscription a été envoyée. Vous allez être redirigé vers la page de connexion...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-lg flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.nom && (
            <p className="mt-1 text-sm text-red-600">{errors.nom.message}</p>
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.prenom && (
            <p className="mt-1 text-sm text-red-600">{errors.prenom.message}</p>
          )}
        </div>
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        {errors.telephone && (
          <p className="mt-1 text-sm text-red-600">{errors.telephone.message}</p>
        )}
      </div>

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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
        {errors.nomStructure && (
          <p className="mt-1 text-sm text-red-600">{errors.nomStructure.message}</p>
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
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          placeholder="12345678901234"
        />
        {errors.siret && (
          <p className="mt-1 text-sm text-red-600">{errors.siret.message}</p>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Mot de passe *
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Confirmer le mot de passe *
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          id="confirmation"
          {...register("confirmation")}
          className="mt-1 mr-3"
        />
        <label htmlFor="confirmation" className="text-sm text-gray-700">
          Je confirme exercer dans une structure dentaire et avoir le droit de créer un compte pour cette structure. *
        </label>
      </div>
      {errors.confirmation && (
        <p className="text-sm text-red-600">{errors.confirmation.message}</p>
      )}

      <div className="bg-primary-50 p-4 rounded-lg">
        <p className="text-sm text-gray-700">
          <strong>Important :</strong> L'accès à la plateforme GDEVIS est strictement réservé aux structures dentaires. 
          Votre demande sera validée avant activation de votre compte.
        </p>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Inscription en cours..." : "Créer mon compte"}
      </button>

      <p className="text-center text-sm text-gray-600">
        Déjà un compte ?{" "}
        <Link href="/connexion" className="text-primary-600 hover:text-primary-700 font-medium">
          Se connecter
        </Link>
      </p>
    </form>
  );
}
