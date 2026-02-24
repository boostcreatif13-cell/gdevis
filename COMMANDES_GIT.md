# 📝 Commandes Git pour pousser sur GitHub

## ⚠️ Problème actuel

Vercel ne trouve pas le dossier `app/` car **les fichiers ne sont pas encore sur GitHub** !

## ✅ Solution étape par étape

### 1. Configurer Git (une seule fois)

```powershell
# Configurer votre nom (remplacez par votre nom)
git config --global user.name "Votre Nom"

# Configurer votre email (remplacez par votre email GitHub)
git config --global user.email "votre-email@example.com"
```

### 2. Vérifier que tout est prêt

```powershell
cd "C:\Users\creat\OneDrive\Bureau\Sites clients\Sabrina"
git status
```

### 3. Créer le commit

```powershell
# Ajouter tous les fichiers
git add .

# Créer le commit
git commit -m "Initial commit - Site web GDEVIS complet"
```

### 4. Vérifier le remote GitHub

```powershell
# Voir si un remote est configuré
git remote -v
```

Si rien n'apparaît, ajoutez votre repository GitHub :

```powershell
# Remplacez VOTRE-USERNAME par votre nom d'utilisateur GitHub
git remote add origin https://github.com/VOTRE-USERNAME/gdevis-sabrina.git
```

### 5. Pousser sur GitHub

```powershell
# Pousser sur GitHub (branche master)
git push -u origin master
```

**OU** si votre branche s'appelle `main` :

```powershell
# Renommer la branche en main
git branch -M main

# Pousser sur GitHub
git push -u origin main
```

### 6. Vérifier sur GitHub

1. Allez sur votre repository GitHub
2. Vérifiez que vous voyez bien :
   - ✅ Le dossier `app/` avec tous les fichiers `.tsx`
   - ✅ Le fichier `package.json`
   - ✅ Le fichier `next.config.js`

### 7. Redéployer sur Vercel

Une fois le code poussé sur GitHub :

1. Retournez sur Vercel
2. Le déploiement devrait se relancer automatiquement
3. **OU** allez dans **Deployments** → Cliquez sur **"Redeploy"**

---

## 🔍 Vérification rapide

Pour vérifier que tout est bien sur GitHub :

```powershell
# Voir tous les fichiers trackés par Git
git ls-files | Select-Object -First 20
```

Vous devriez voir `app/page.tsx`, `app/layout.tsx`, etc.

---

**Une fois ces étapes faites, Vercel trouvera le dossier `app/` et le déploiement fonctionnera !** 🎉
