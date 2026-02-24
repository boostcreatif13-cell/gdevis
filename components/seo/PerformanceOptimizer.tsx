"use client";

import { useEffect } from "react";

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Lazy load des images (seulement si nécessaire, car next/image gère déjà ça)
    // Cette fonction est maintenant minimale car next/image gère le lazy loading
    if (typeof window !== "undefined" && "IntersectionObserver" in window) {
      // Observer uniquement pour les images avec data-src (fallback)
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target as HTMLImageElement;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute("data-src");
                imageObserver.unobserve(img);
              }
            }
          });
        },
        { rootMargin: "50px" }
      );

      // Observer uniquement les images avec data-src (pas les next/image)
      const lazyImages = document.querySelectorAll("img[data-src]");
      lazyImages.forEach((img) => imageObserver.observe(img));

      return () => {
        lazyImages.forEach((img) => imageObserver.unobserve(img));
      };
    }
  }, []);

  return null;
}
