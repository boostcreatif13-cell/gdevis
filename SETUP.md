# Guide de configuration GDEVIS

## 📋 Prérequis

- Node.js 18+ installé
- npm ou yarn
- PostgreSQL (pour le backend)

## 🚀 Installation

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Configurer les images**
   
   Copiez les images depuis `assets/images/` vers `public/assets/images/` :
   ```bash
   # Créer le dossier si nécessaire
   mkdir -p public/assets/images
   
   # Copier les images
   cp assets/images/logo.jpeg public/assets/images/
   cp assets/images/Directrice.png public/assets/images/
   ```

3. **Configurer les variables d'environnement**
   
   Créez un fichier `.env.local` à partir de `.env.example` :
   ```bash
   cp .env.example .env.local
   ```
   
   Puis remplissez les valeurs nécessaires.

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

   Le site sera accessible sur http://localhost:3000

## 📁 Structure des images

Les images doivent être placées dans :
- `public/assets/images/logo.jpeg` - Logo GDEVIS
- `public/assets/images/Directrice.png` - Photo de la directrice

## 🔧 Configuration Next.js

Le projet utilise :
- **Next.js 14** avec App Router
- **TypeScript** pour le typage
- **Tailwind CSS** pour le styling
- **React Hook Form** + **Zod** pour les formulaires

## 📝 TODO Backend

Les API suivantes doivent être créées :

1. **API Démonstration** (`/api/demonstration`)
   - Validation SIRET via INSEE SIRENE
   - Enregistrement en base
   - Scoring automatique

2. **API Contact** (`/api/contact`)
   - Enregistrement des demandes de contact

3. **API Authentification** (`/api/auth/login`)
   - Authentification utilisateur
   - Gestion des sessions
   - 2FA

## 🎨 Charte graphique

- **Couleur principale** : Bleu profond (#0066cc)
- **Couleur accent** : Bleu pétrole (#008080)
- **Style** : Professionnel, sobre, médical/dentaire

## 🌐 Déploiement

1. Build de production :
   ```bash
   npm run build
   ```

2. Lancer en production :
   ```bash
   npm start
   ```

## 📊 SEO

- Sitemap XML : `/sitemap.xml`
- Robots.txt : `/robots.txt`
- Metadata optimisée sur toutes les pages
- Mots-clés intégrés naturellement

## 🔒 Sécurité

- Validation côté client et serveur
- Protection CSRF/XSS
- Conformité RGPD
- Hébergement HDS requis
