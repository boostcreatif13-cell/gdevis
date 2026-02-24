import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/assets/images/logo.jpeg"
                alt="GDEVIS"
                width={50}
                height={50}
                className="object-contain"
                unoptimized
              />
              <span className="text-xl font-bold">GDEVIS</span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Solution administrative spécialisée pour la gestion et le suivi
              des prises en charge mutuelles dentaires.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/la-solution"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  La solution
                </Link>
              </li>
              <li>
                <Link
                  href="/fonctionnement"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Fonctionnement
                </Link>
              </li>
              <li>
                <Link
                  href="/nos-clients"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Nos clients
                </Link>
              </li>
              <li>
                <Link
                  href="/notre-approche"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Notre approche
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Légales */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-cookies"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Politique cookies
                </Link>
              </li>
              <li>
                <Link
                  href="/cgu"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  CGU
                </Link>
              </li>
              <li>
                <Link
                  href="/securite-conformite"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Sécurité & Conformité
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Réseaux */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Contact</h3>
            <ul className="space-y-2 mb-4">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Nous contacter
                </Link>
              </li>
              <li>
                <Link
                  href="/demander-une-demonstration"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Demander une démonstration
                </Link>
              </li>
              <li>
                <Link
                  href="/connexion"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Connexion
                </Link>
              </li>
            </ul>
            <div className="flex items-center space-x-4 pt-4">
              <a
                href="https://www.linkedin.com/company/sas-gdevis/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn GDEVIS"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm text-center md:text-left">
              © {currentYear} GDEVIS. Tous droits réservés.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-gray-400 text-xs text-center md:text-right">
                SASU au capital de 1 200 € - SIRET : 948 280 177 00015
              </p>
              <p className="text-gray-300 text-sm">
                Plate-forme créée par{" "}
                <a
                  href="https://creatif-web.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary-300 font-semibold transition-all duration-200 hover:underline hover:scale-105 inline-block"
                >
                  Créatif-web
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
