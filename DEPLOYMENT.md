# Guide de déploiement GDEVIS

## ⚠️ IMPORTANT : GitHub Pages ne peut pas exécuter Next.js

Si vous voyez le README.md au lieu du site, c'est normal ! **GitHub Pages ne peut pas exécuter Next.js directement**.

## 🚀 Solution recommandée : Vercel (GRATUIT)

**Vercel est la plateforme officielle pour Next.js. C'est gratuit et très simple !**

👉 **Voir le guide complet** : `DEPLOIEMENT_VERCEL.md`

### Déploiement rapide sur Vercel :

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez sur **"Add New Project"**
4. Sélectionnez votre repository `gdevis-sabrina`
5. Cliquez sur **"Deploy"** (tout est automatique !)
6. En 2-3 minutes, votre site sera en ligne !

**URL générée** : `https://gdevis-sabrina.vercel.app` (ou votre domaine personnalisé)

---

## 📋 Préparation du projet pour GitHub (code source uniquement)

Le projet est maintenant prêt pour être partagé sur GitHub (pour le code source).

## 🚀 Étapes pour publier sur GitHub

### 1. Créer un nouveau repository sur GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur le bouton **"+"** en haut à droite
3. Sélectionnez **"New repository"**
4. Remplissez les informations :
   - **Repository name** : `gdevis-website` (ou le nom de votre choix)
   - **Description** : "Site web professionnel GDEVIS - Solution administrative pour la gestion des prises en charge mutuelles dentaires"
   - **Visibilité** : Public ou Private (selon vos préférences)
   - **Ne cochez PAS** "Initialize this repository with a README" (on a déjà un README)

### 2. Connecter le projet local à GitHub

Exécutez ces commandes dans le terminal (PowerShell) depuis le dossier du projet :

```powershell
# Se placer dans le dossier du projet
cd "C:\Users\creat\OneDrive\Bureau\Sites clients\Sabrina"

# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le premier commit
git commit -m "Initial commit - Site web GDEVIS"

# Ajouter le remote GitHub (remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub)
git remote add origin https://github.com/VOTRE-USERNAME/gdevis-website.git

# Pousser le code sur GitHub
git branch -M main
git push -u origin main
```

### 3. Commandes complètes (copier-coller)

```powershell
cd "C:\Users\creat\OneDrive\Bureau\Sites clients\Sabrina"
git init
git add .
git commit -m "Initial commit - Site web GDEVIS complet"
git branch -M main
git remote add origin https://github.com/VOTRE-USERNAME/gdevis-website.git
git push -u origin main
```

**⚠️ Important** : Remplacez `VOTRE-USERNAME` par votre nom d'utilisateur GitHub réel.

## 📝 Informations du projet

- **Nom** : GDEVIS Website
- **Description** : Solution administrative spécialisée pour la gestion des prises en charge mutuelles dentaires
- **Technologies** : Next.js 14, React 18, TypeScript, Tailwind CSS
- **Développeur** : Créatif-web

## 🔐 Fichiers exclus (déjà dans .gitignore)

- `node_modules/`
- `.env` et `.env.local`
- `.next/`
- `build/`
- Fichiers de logs
- Fichiers système

## ✅ Vérification

Une fois le code poussé, vous pouvez :

1. Vérifier sur GitHub que tous les fichiers sont présents
2. Vérifier que le README.md s'affiche correctement
3. Partager le lien du repository avec votre cliente

## 🔗 Lien du repository

Une fois publié, le lien sera :
```
https://github.com/VOTRE-USERNAME/gdevis-website
```

## 📧 Partage avec la cliente

Vous pouvez partager :
- Le lien du repository GitHub
- Le README.md (qui contient toutes les informations du projet)
- Les instructions d'installation et de déploiement

---

**Note** : Si vous avez besoin d'aide pour configurer GitHub, n'hésitez pas à demander !
