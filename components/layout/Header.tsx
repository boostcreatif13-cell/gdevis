"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, LogOut } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur est connecté (localStorage ou cookie)
    const checkAuth = () => {
      const authToken = localStorage.getItem("gdevis_auth_token");
      setIsConnected(!!authToken);
    };
    checkAuth();
    // Écouter les changements d'authentification
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  const handleDeconnexion = () => {
    localStorage.removeItem("gdevis_auth_token");
    setIsConnected(false);
    window.location.href = "/";
  };

  const menuItems = [
    { href: "/", label: "Accueil" },
    { href: "/la-solution", label: "La solution" },
    { href: "/fonctionnement", label: "Fonctionnement" },
    { href: "/nos-clients", label: "Nos clients" },
    { href: "/notre-approche", label: "Notre approche" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-primary-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 flex-shrink-0 group">
            <div className="relative">
              <Image
                src="/assets/images/logo.jpeg"
                alt="GDEVIS - Solution administrative dentaire"
                width={80}
                height={80}
                className="relative object-contain group-hover:scale-110 transition-transform duration-300"
                priority
                unoptimized
              />
            </div>
            <span className="text-2xl lg:text-3xl font-bold text-primary-700 hidden sm:block group-hover:text-primary-600 transition-colors duration-300">
              GDEVIS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-primary-700 hover:text-primary-600 font-semibold transition-all duration-300 text-base relative group py-2"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </Link>
            ))}
            {isConnected ? (
              <button
                onClick={handleDeconnexion}
                className="flex items-center space-x-2 text-primary-700 hover:text-primary-600 font-semibold transition-all duration-300 text-base relative group py-2"
              >
                <LogOut size={18} />
                <span>Déconnexion</span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </button>
            ) : (
              <>
                <Link
                  href="/inscription"
                  className="text-primary-700 hover:text-primary-600 font-semibold transition-all duration-300 text-base relative group py-2"
                >
                  Inscription
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
                <Link
                  href="/connexion"
                  className="text-primary-700 hover:text-primary-600 font-semibold transition-all duration-300 text-base relative group py-2"
                >
                  Connexion
                  <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                </Link>
              </>
            )}
            <div className="ml-4">
              <CTAButton 
                href="/demander-une-demonstration" 
                size="md"
                className="bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg hover:scale-105 transition-all duration-300 font-bold px-6 py-3 shadow-md"
              >
                Demander une démo
              </CTAButton>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-primary-700 hover:text-primary-600 transition-all duration-200 hover:scale-110"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-primary-100 bg-white">
            <div className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-primary-700 hover:text-primary-600 font-medium transition-all duration-300 px-4 py-2 hover:translate-x-2 hover:bg-primary-50 rounded-lg"
                >
                  {item.label}
                </Link>
              ))}
              {isConnected ? (
                <button
                  onClick={() => {
                    handleDeconnexion();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 text-primary-700 hover:text-primary-600 font-medium transition-all duration-300 px-4 py-2 hover:translate-x-2 hover:bg-primary-50 rounded-lg"
                >
                  <LogOut size={18} />
                  <span>Déconnexion</span>
                </button>
              ) : (
                <>
                  <Link
                    href="/inscription"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-primary-700 hover:text-primary-600 font-medium transition-all duration-300 px-4 py-2 hover:translate-x-2 hover:bg-primary-50 rounded-lg"
                  >
                    Inscription
                  </Link>
                  <Link
                    href="/connexion"
                    onClick={() => setIsMenuOpen(false)}
                    className="text-primary-700 hover:text-primary-600 font-medium transition-all duration-300 px-4 py-2 hover:translate-x-2 hover:bg-primary-50 rounded-lg"
                  >
                    Connexion
                  </Link>
                </>
              )}
              <div className="pt-4">
                <CTAButton
                  href="/demander-une-demonstration"
                  onClick={() => setIsMenuOpen(false)}
                  fullWidth
                  className="bg-primary-600 text-white hover:bg-primary-700 font-bold shadow-md"
                >
                  Demander une démo
                </CTAButton>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
