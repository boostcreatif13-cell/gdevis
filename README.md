# GDEVIS - Plateforme Web

Site web professionnel pour **GDEVIS**, solution administrative spécialisée pour la gestion et le suivi des prises en charge mutuelles dentaires.

## 🎯 À propos

GDEVIS est une solution administrative dédiée aux cabinets et centres dentaires, permettant de centraliser, structurer et piloter les prises en charge mutuelles dans un environnement simple, sécurisé et professionnel.

## 🚀 Technologies

- **Next.js 14** (App Router) - Framework React
- **React 18** - Bibliothèque UI
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **React Hook Form** + **Zod** - Validation de formulaires
- **Lucide React** - Bibliothèque d'icônes
- **next-seo** - Optimisation SEO

## 📦 Installation

```bash
# Cloner le repository
git clone https://github.com/[votre-username]/gdevis-website.git
cd gdevis-website

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Ouvrir http://localhost:3000 dans votre navigateur
```

## 🛠️ Scripts disponibles

```bash
# Développement (avec Turbopack)
npm run dev

# Build de production
npm run build

# Lancer en production
npm start

# Linter
npm run lint
```

## 📁 Structure du projet

```
├── app/                          # Pages Next.js (App Router)
│   ├── page.tsx                  # Page d'accueil
│   ├── la-solution/              # Page La solution
│   ├── fonctionnement/           # Page Fonctionnement
│   ├── nos-clients/              # Page Nos clients
│   ├── notre-approche/           # Page Notre approche
│   ├── demander-une-demonstration/  # Formulaire démonstration
│   ├── connexion/                # Page de connexion
│   ├── inscription/              # Page d'inscription
│   ├── contact/                  # Page contact
│   ├── faq/                      # FAQ
│   ├── securite-conformite/      # Sécurité & Conformité
│   └── [pages-legales]/          # Pages légales
├── components/                    # Composants React
│   ├── layout/                   # Header, Footer
│   ├── ui/                       # Composants UI réutilisables
│   ├── forms/                    # Formulaires
│   ├── seo/                      # Composants SEO
│   └── conversion/               # Optimisation conversion
├── lib/                          # Utilitaires
├── assets/                       # Images, logos
│   └── images/                   # Logo, photos
└── public/                       # Fichiers statiques
```

## 🎨 Charte graphique

- **Couleur principale** : Bleu ciel (#87CEEB)
- **Couleur accent** : Bleu pétrole / Teal (#008080)
- **Style** : Professionnel, sobre, adapté au secteur médical/dentaire
- **Typographie** : Inter (Google Fonts)

## ✨ Fonctionnalités

- ✅ Design responsive et moderne
- ✅ Optimisation SEO complète (Open Graph, Twitter Cards, Schema.org)
- ✅ Animations au scroll
- ✅ Formulaires validés (React Hook Form + Zod)
- ✅ Performance optimisée (Turbopack, lazy loading)
- ✅ Accessibilité
- ✅ Conversion optimisée (Exit Intent, tracking)

## 🔒 Sécurité & Conformité

- Validation côté client et serveur
- Protection CSRF/XSS
- Conformité RGPD
- Hébergement HDS (à configurer)
- Chiffrement HTTPS
- Authentification sécurisée

## 🌐 SEO

- ✅ Sitemap XML automatique
- ✅ Robots.txt configuré
- ✅ Metadata optimisée par page
- ✅ Structure sémantique HTML5
- ✅ Mots-clés intégrés naturellement
- ✅ Schema.org (Organization, Service, SoftwareApplication)
- ✅ Open Graph & Twitter Cards

## 📝 Développement futur

- [ ] API validation SIRET (INSEE SIRENE)
- [ ] API authentification complète
- [ ] API formulaires (contact, démonstration)
- [ ] Base de données PostgreSQL
- [ ] Système de scoring des demandes
- [ ] CRM interne
- [ ] Intégration logiciel métier

## 📄 Licence

Propriétaire - GDEVIS © 2024

## 👥 Développement

Développé par [Créatif-web](https://creatif-web.eu)

---

**Note** : Ce projet est en cours de développement. Pour toute question, contactez l'équipe GDEVIS.
