# 🔧 SOLUTION SIMPLE - Erreur Vercel

## ❌ L'erreur que vous voyez

```
Erreur : > Impossible de trouver les répertoires `pages`
```

## 🎯 Pourquoi cette erreur ?

Vercel ne trouve **PAS** le dossier `app/` dans votre repository GitHub.

## ✅ SOLUTION EN 3 ÉTAPES

### ÉTAPE 1 : Vérifier que le code est sur GitHub

1. Allez sur votre repository GitHub : `https://github.com/boostcreatif13-cell/gdevis-sabrina`
2. Vérifiez que vous voyez bien :
   - ✅ Un dossier `app/` (cliquez dessus)
   - ✅ À l'intérieur : `page.tsx`, `layout.tsx`, etc.
   - ✅ Le fichier `package.json` à la racine

**Si vous ne voyez PAS le dossier `app/` sur GitHub** → Le code n'est pas poussé !

### ÉTAPE 2 : Si le code n'est PAS sur GitHub

Exécutez ces commandes dans PowerShell :

```powershell
# 1. Aller dans le dossier
cd "C:\Users\creat\OneDrive\Bureau\Sites clients\Sabrina"

# 2. Configurer Git (une seule fois)
git config user.name "Votre Nom"
git config user.email "votre-email@example.com"

# 3. Vérifier ce qui doit être commité
git status

# 4. Tout ajouter
git add .

# 5. Créer le commit
git commit -m "Ajout de tous les fichiers du projet"

# 6. Vérifier le remote GitHub
git remote -v

# 7. Si pas de remote, l'ajouter (remplacez par votre vrai username)
git remote add origin https://github.com/boostcreatif13-cell/gdevis-sabrina.git

# 8. Pousser sur GitHub
git push -u origin master
```

### ÉTAPE 3 : Configurer Vercel correctement

1. Allez sur Vercel → Votre projet → **Settings**
2. Allez dans **General**
3. Vérifiez que **Root Directory** est vide ou contient juste `/`
4. Allez dans **Git**
5. Cliquez sur **Redeploy** ou attendez le prochain déploiement automatique

## 🔍 VÉRIFICATION RAPIDE

Sur GitHub, vous DEVEZ voir cette structure :

```
gdevis-sabrina/
├── app/              ← CE DOSSIER DOIT EXISTER !
│   ├── page.tsx
│   ├── layout.tsx
│   └── ...
├── components/
├── package.json      ← CE FICHIER DOIT EXISTER !
├── next.config.js
└── ...
```

## ⚠️ SI ÇA NE MARCHE TOUJOURS PAS

1. **Vérifiez le Root Directory dans Vercel Settings**
   - Il doit être vide ou `/`
   - PAS `app/` ou autre chose

2. **Vérifiez que vous avez bien poussé sur la bonne branche**
   - Vercel doit regarder la branche `master` ou `main`
   - Vérifiez dans Vercel Settings → Git → Production Branch

3. **Supprimez et recréez le projet sur Vercel**
   - Parfois, il faut repartir de zéro

---

## 📞 AIDE SUPPLÉMENTAIRE

Si après ces étapes ça ne marche toujours pas, dites-moi :
1. Voyez-vous le dossier `app/` sur GitHub ? (OUI/NON)
2. Quel est le nom exact de votre repository GitHub ?
3. Quelle branche utilisez-vous ? (master/main)
