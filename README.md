# DataCube - Site Web

Site web professionnel pour DataCube, startup spécialisée en Intelligence Artificielle, Data Science et Développement Web/Mobile.

## 🚀 Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **Strapi** - CMS headless (optionnel)

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── expertises/        # Pages d'expertises
│   ├── realisations/      # Pages de réalisations
│   ├── blog/              # Pages du blog
│   ├── contact/           # Page de contact
│   └── rdv/               # Page de rendez-vous
├── components/            # Composants réutilisables
│   ├── Header.tsx         # Navigation principale
│   ├── Footer.tsx         # Pied de page
│   ├── Hero.tsx           # Section hero
│   └── ...                # Autres composants
├── lib/                   # Utilitaires et configuration
│   ├── strapi.js          # Client Strapi
│   └── utils.js           # Fonctions utilitaires
└── styles/                # Styles globaux
    └── globals.css        # CSS global avec Tailwind
```

## 🛠️ Installation

1. **Cloner le projet**
   ```bash
   git clone <repository-url>
   cd datacube
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Configuration de l'environnement**
   ```bash
   cp env.example .env.local
   ```
   Modifiez les variables dans `.env.local` selon vos besoins.

4. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

5. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

## 📝 Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit l'application pour la production
- `npm run start` - Lance l'application en production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.js` :
- **Primary** : Bleu principal (#3b82f6)
- **Secondary** : Gris (#64748b)
- **Accent** : Bleu clair (#0ea5e9)

### Contenu
- Modifiez les textes directement dans les composants
- Ajoutez vos propres images dans le dossier `public/`
- Personnalisez les métadonnées SEO dans `layout.tsx`

## 🔧 Configuration Strapi (optionnel)

Si vous souhaitez utiliser Strapi comme CMS :

1. **Installer Strapi**
   ```bash
   npx create-strapi-app@latest datacube-strapi --quickstart
   ```

2. **Configurer les types de contenu**
   - Blog Posts
   - Projects
   - Testimonials
   - Services
   - Team Members

3. **Mettre à jour l'URL Strapi**
   ```bash
   STRAPI_URL=http://localhost:1337
   ```

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🚀 Déploiement

### Vercel (recommandé)
1. Connectez votre repository GitHub à Vercel
2. Configurez les variables d'environnement
3. Déployez automatiquement

### Netlify
1. Connectez votre repository
2. Configurez le build command : `npm run build`
3. Configurez le publish directory : `.next`

### Serveur VPS
1. Construisez l'application : `npm run build`
2. Lancez en production : `npm run start`
3. Configurez un reverse proxy (Nginx)

## 📊 SEO et Performance

- **Métadonnées SEO** optimisées
- **Images optimisées** avec Next.js
- **Lazy loading** des composants
- **Code splitting** automatique
- **Compression** et mise en cache

## 🤝 Contribution

1. Fork le projet
2. Créez une branche feature (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Email : contact@datacube.fr
- Téléphone : +33 1 23 45 67 89

---

Développé avec ❤️ par l'équipe DataCube