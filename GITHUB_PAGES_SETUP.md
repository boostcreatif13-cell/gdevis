# 🚀 Configuration GitHub Pages - Guide Simple

## ✅ Ce qui a été fait

1. ✅ Next.js configuré pour l'export statique (`output: 'export'`)
2. ✅ Code poussé sur GitHub (branche `main`)

## 📋 Étapes finales sur GitHub

### 1. Activer GitHub Pages

1. Allez sur votre repository : `https://github.com/boostcreatif13-cell/gdevis`
2. Cliquez sur **Settings**
3. Dans le menu de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez :
   - **Deploy from a branch**
   - **Branch** : `main`
   - **Folder** : `/ (root)` ou `/out` (selon ce qui fonctionne)
5. Cliquez sur **Save**

### 2. Builder le site en local (optionnel mais recommandé)

Pour tester avant, exécutez dans PowerShell :

```powershell
cd "C:\Users\creat\OneDrive\Bureau\Sites clients\Sabrina"
npm run build
```

Cela créera un dossier `out/` avec tous les fichiers statiques.

### 3. Pousser le dossier `out/` sur GitHub (si nécessaire)

Si GitHub Pages ne trouve pas automatiquement les fichiers :

```powershell
cd "C:\Users\creat\OneDrive\Bureau\Sites clients\Sabrina"
npm run build
git add out/
git commit -m "Ajout des fichiers statiques"
git push origin main
```

### 4. Votre site sera accessible sur

`https://boostcreatif13-cell.github.io/gdevis/`

---

## ⚠️ Note importante

GitHub Pages ne peut pas exécuter Next.js directement. Il faut :
- Soit utiliser l'export statique (ce qu'on a fait)
- Soit utiliser GitHub Actions (nécessite un token avec permission `workflow`)

Avec l'export statique, certaines fonctionnalités Next.js ne fonctionneront pas (API routes, Server Components, etc.), mais le site sera accessible.

---

## 🔧 Si ça ne marche pas

1. Vérifiez que le dossier `out/` existe après `npm run build`
2. Vérifiez que GitHub Pages est activé dans Settings → Pages
3. Attendez quelques minutes (le déploiement peut prendre 5-10 minutes)
