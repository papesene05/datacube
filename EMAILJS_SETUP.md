# Configuration EmailJS pour le formulaire de contact

## 📧 Guide de configuration EmailJS

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Configurer un service email

1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. Notez le **Service ID** (ex: `service_xxxxxxx`)

### 3. Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Utilisez ce template :

```html
Nouveau message de contact - DataCube

Nom: {{from_name}}
Email: {{from_email}}
Entreprise: {{company}}
Téléphone: {{phone}}
Sujet: {{subject}}

Message:
{{message}}

Budget estimé: {{budget}}
Délai souhaité: {{timeline}}

---
Ce message a été envoyé depuis le formulaire de contact du site DataCube.
```

4. Notez le **Template ID** (ex: `template_xxxxxxx`)

### 4. Obtenir la clé publique

1. Allez dans **"Account"** > **"General"**
2. Copiez votre **Public Key** (ex: `xxxxxxxxxxxxxxx`)

### 5. Configurer les variables d'environnement

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez vos clés :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 6. Redémarrer le serveur

```bash
npm run dev
```

## ✅ Test du formulaire

1. Allez sur `http://localhost:3000/contact`
2. Remplissez le formulaire
3. Cliquez sur "Envoyer le message"
4. Vérifiez que l'email arrive dans votre boîte de réception

## 🔧 Fonctionnalités du formulaire

- ✅ Validation côté client
- ✅ Affichage des erreurs
- ✅ Envoi d'email réel
- ✅ Message de confirmation
- ✅ Réinitialisation du formulaire après envoi
- ✅ Gestion des erreurs

## 📝 Notes importantes

- Le plan gratuit EmailJS permet 200 emails/mois
- Les emails sont envoyés depuis votre compte email configuré
- Le formulaire fonctionne même sans configuration (avec un message d'erreur)
- Tous les champs obligatoires sont validés