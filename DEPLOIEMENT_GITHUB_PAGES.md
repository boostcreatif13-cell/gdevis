# 🌐 Déploiement sur GitHub Pages (Alternative)

Si vous préférez utiliser GitHub Pages, il faut exporter le site en statique.

## ⚠️ Limitations

- Les fonctionnalités serveur (API routes) ne fonctionneront pas
- Certaines fonctionnalités Next.js peuvent être limitées
- Il faut exporter en statique

## 📋 Étapes

### 1. Configurer Next.js pour l'export statique

Modifiez `next.config.js` :

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Ajoutez cette ligne
  reactStrictMode: true,
  // ... reste de la config
};
```

### 2. Modifier package.json

Ajoutez un script d'export :

```json
{
  "scripts": {
    "export": "next build && next export"
  }
}
```

### 3. Builder le site

```bash
npm run build
```

### 4. Configurer GitHub Pages

1. Allez dans **Settings** de votre repository GitHub
2. Allez dans **Pages** (dans le menu de gauche)
3. Sous **Source**, sélectionnez **"GitHub Actions"**
4. Créez un fichier `.github/workflows/deploy.yml` :

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

### 5. Pousser les changements

```bash
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

## ⚠️ Note importante

**Vercel est beaucoup plus simple et recommandé pour Next.js !**

GitHub Pages nécessite plus de configuration et certaines fonctionnalités Next.js ne fonctionneront pas.
