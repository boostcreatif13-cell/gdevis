"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  direction?: "left" | "right" | "up";
  delay?: number;
  className?: string;
}

// Observer partagé pour améliorer les performances
let sharedObserver: IntersectionObserver | null = null;
const observedElements = new Map<HTMLElement, (isVisible: boolean) => void>();

function getSharedObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const callback = observedElements.get(entry.target as HTMLElement);
          if (callback && entry.isIntersecting) {
            callback(true);
            // Une fois visible, on arrête d'observer cet élément
            sharedObserver?.unobserve(entry.target);
            observedElements.delete(entry.target as HTMLElement);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );
  }
  return sharedObserver;
}

export default function AnimateOnScroll({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getSharedObserver();
    observedElements.set(element, setIsVisible);
    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
        observedElements.delete(element);
      }
    };
  }, []);

  const directionClasses = {
    left: isVisible
      ? "animate-slide-in-left"
      : "opacity-0 translate-x-[-50px]",
    right: isVisible
      ? "animate-slide-in-right"
      : "opacity-0 translate-x-[50px]",
    up: isVisible
      ? "animate-slide-in-up"
      : "opacity-0 translate-y-[30px]",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${directionClasses[direction]} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
