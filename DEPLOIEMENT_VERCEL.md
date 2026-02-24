# 🚀 Déploiement sur Vercel (Recommandé)

Vercel est la plateforme officielle pour Next.js. C'est **GRATUIT** et très simple à utiliser.

## 📋 Étapes de déploiement

### 1. Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez sur **"Sign Up"**
3. Choisissez **"Continue with GitHub"** (pour connecter votre compte GitHub)

### 2. Importer votre projet

1. Une fois connecté, cliquez sur **"Add New..."** → **"Project"**
2. Sélectionnez votre repository GitHub `gdevis-sabrina` (ou le nom que vous avez donné)
3. Vercel détectera automatiquement que c'est un projet Next.js

### 3. Configuration (automatique)

Vercel configure automatiquement :
- ✅ Framework : Next.js
- ✅ Build Command : `npm run build`
- ✅ Output Directory : `.next`
- ✅ Install Command : `npm install`

**Vous n'avez RIEN à modifier !** Cliquez simplement sur **"Deploy"**

### 4. Attendre le déploiement

- Le build prend 2-3 minutes
- Vous verrez l'avancement en temps réel
- Une fois terminé, vous aurez une URL comme : `https://gdevis-sabrina.vercel.app`

### 5. Configuration du domaine personnalisé (optionnel)

Si vous avez un domaine (ex: `gdevis.fr`) :
1. Allez dans **Settings** → **Domains**
2. Ajoutez votre domaine
3. Suivez les instructions pour configurer les DNS

## ✅ Avantages de Vercel

- ✅ **Gratuit** pour les projets personnels
- ✅ **Déploiement automatique** à chaque push sur GitHub
- ✅ **HTTPS automatique**
- ✅ **CDN global** (site rapide partout)
- ✅ **Optimisé pour Next.js** (meilleures performances)
- ✅ **Preview des branches** (test avant de publier)

## 🔄 Déploiements automatiques

Une fois configuré, **chaque fois que vous poussez du code sur GitHub**, Vercel redéploie automatiquement le site !

## 📝 Commandes utiles

Si vous voulez installer Vercel CLI (optionnel) :

```bash
npm i -g vercel
vercel login
vercel
```

---

**C'est tout !** En 5 minutes, votre site sera en ligne et accessible partout dans le monde.
