# 📸 Guide pour ajouter les photos d'équipe DataCube

## 🎯 Objectif
Remplacer les avatars avec gradients par de vraies photos professionnelles de l'équipe DataCube.

## 📁 Structure des fichiers
```
public/images/team/
├── marie-dubois.jpg          # CEO & Co-fondatrice
├── jean-martin.jpg           # CTO & Co-fondateur  
├── sophie-laurent.jpg        # Lead Developer Frontend
├── pierre-moreau.jpg         # Lead Developer Mobile
├── alexandre-chen.jpg        # Data Scientist Senior
└── camille-rousseau.jpg      # DevOps & Infrastructure
```

## 📋 Spécifications techniques

### Format et qualité :
- **Format** : JPG (recommandé) ou PNG
- **Taille** : 400x400px minimum (format carré)
- **Poids** : < 200KB par image
- **Résolution** : 72-96 DPI (optimisé web)

### Style et contenu :
- **Style** : Photos professionnelles en studio
- **Fond** : Neutre (blanc, gris clair, ou dégradé subtil)
- **Éclairage** : Uniforme et naturel
- **Expression** : Souriante et professionnelle
- **Tenue** : Professionnelle (costume, chemise, blouse)
- **Pose** : Regard vers l'objectif, épaules droites

## 🛠️ Options pour obtenir les photos

### Option 1 : Photographe professionnel (Recommandé)
- **Avantages** : Qualité maximale, cohérence, professionnalisme
- **Coût** : 200-500€ pour 6 photos
- **Durée** : 1-2 heures de shooting

### Option 2 : Services d'avatars générés
- **This Person Does Not Exist** : https://thispersondoesnotexist.com/
- **Generated Photos** : https://generated.photos/
- **Avataaars** : https://avataaars.com/
- **Avantages** : Gratuit, rapide, diversité
- **Inconvénients** : Moins personnalisé

### Option 3 : Photos existantes optimisées
- Utiliser des photos existantes de l'équipe
- Optimiser avec des outils comme Canva ou Photoshop
- Uniformiser le style et le format

## 🔧 Outils recommandés

### Pour optimiser les images :
- **TinyPNG** : https://tinypng.com/ (compression)
- **Squoosh** : https://squoosh.app/ (optimisation Google)
- **Canva** : https://canva.com/ (édition et templates)

### Pour supprimer le fond :
- **Remove.bg** : https://remove.bg/ (automatique)
- **Canva** : Outil de suppression de fond
- **Photoshop** : Sélection et suppression manuelle

## 📝 Instructions d'installation

### 1. Préparer les photos
```bash
# Créer le dossier (déjà fait)
mkdir -p public/images/team

# Vérifier la structure
ls -la public/images/team/
```

### 2. Ajouter les fichiers
- Télécharger ou créer les 6 photos
- Les renommer selon la convention :
  - `marie-dubois.jpg`
  - `jean-martin.jpg`
  - `sophie-laurent.jpg`
  - `pierre-moreau.jpg`
  - `alexandre-chen.jpg`
  - `camille-rousseau.jpg`

### 3. Vérifier le fonctionnement
```bash
# Redémarrer le serveur
npm run dev

# Tester les pages
# http://localhost:3000/about
# http://localhost:3000 (section équipe)
```

## ✅ Fonctionnalités déjà implémentées

- ✅ **Composant AvatarImage** mis à jour pour supporter les photos
- ✅ **Fallback automatique** vers les avatars gradient si photo manquante
- ✅ **Optimisation Next.js** avec composant Image
- ✅ **Gestion d'erreurs** si photo ne se charge pas
- ✅ **Responsive design** pour toutes les tailles d'écran

## 🎨 Styles appliqués

- **Forme** : Cercle parfait
- **Bordure** : Aucune (design moderne)
- **Ombre** : Subtile sur les cartes
- **Hover** : Effet de zoom léger
- **Transitions** : Fluides et professionnelles

## 🔄 Système de fallback

Si une photo n'est pas trouvée ou ne se charge pas :
1. **Affichage automatique** de l'avatar gradient
2. **Initiales** du nom affichées
3. **Couleur unique** basée sur le nom
4. **Aucune erreur** visible pour l'utilisateur

## 📱 Responsive

- **Mobile** : Photos 64x64px
- **Tablet** : Photos 80x80px  
- **Desktop** : Photos 96x96px
- **Grand écran** : Photos 128x128px

## 🚀 Prochaines étapes

1. **Ajouter les vraies photos** selon ce guide
2. **Tester sur tous les appareils**
3. **Optimiser les performances** si nécessaire
4. **Passer à l'ÉTAPE 3** (SEO et contenu)

---

**Note** : Le système fonctionne déjà parfaitement avec les avatars gradient. Les photos sont un bonus pour le professionnalisme !