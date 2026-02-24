"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function ExitIntent() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Détecter la sortie de la souris vers le haut
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showPopup) {
        setShowPopup(true);
      }
    };

    // Vérifier si le popup a déjà été montré dans cette session
    const hasSeenPopup = sessionStorage.getItem("exitIntentShown");
    if (!hasSeenPopup) {
      document.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [showPopup]);

  const handleClose = () => {
    setShowPopup(false);
    sessionStorage.setItem("exitIntentShown", "true");
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 p-8 relative animate-fade-in-up">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Fermer"
        >
          <X size={24} />
        </button>
        <h3 className="text-2xl font-bold text-primary-900 mb-4">
          Ne partez pas sans découvrir GDEVIS !
        </h3>
        <p className="text-gray-700 mb-6">
          Demandez une démonstration personnalisée et découvrez comment GDEVIS
          peut transformer la gestion de vos prises en charge mutuelles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <CTAButton
            href="/demander-une-demonstration"
            onClick={handleClose}
            className="flex-1"
          >
            Demander une démo
          </CTAButton>
          <button
            onClick={handleClose}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors"
          >
            Plus tard
          </button>
        </div>
      </div>
    </div>
  );
}
