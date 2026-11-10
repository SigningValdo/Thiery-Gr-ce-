# Faire-part de Thierry & Grâce

Site de faire-part de mariage moderne construit avec Next.js, TypeScript et Tailwind CSS.

## Fonctionnalités

- ✨ Design élégant avec animations fluides
- ⏱️ Compte à rebours en temps réel jusqu'au mariage
- 📸 Galerie de photos responsive
- 📅 Intégration avec Google Maps et Google Calendar
- 💬 Formulaire RSVP avec envoi WhatsApp
- 🎨 Personnalisation par URL (ex: `#famille-mballa`)
- 📱 Entièrement responsive (mobile, tablette, desktop)
- 🌐 Métadonnées OpenGraph pour le partage social

## Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm start
```

## Configuration

### 1. Mettre à jour le domaine

Dans `app/layout.tsx`, remplacez `VOTRE-DOMAINE.com` par votre vrai domaine :

```typescript
url: "https://thierry-et-grace.com/",
images: [
  {
    url: "https://thierry-et-grace.com/apercu.jpg",
    // ...
  },
],
```

### 2. Personnaliser le numéro WhatsApp

Dans `components/RSVP.tsx`, ligne 13 :

```typescript
const WHATSAPP = '237677136741'; // Format international sans + ni espaces
```

### 3. Modifier la date du mariage

Dans `components/Countdown.tsx`, ligne 17 :

```typescript
const targetDate = new Date('2026-12-12T09:30:00+01:00').getTime();
```

### 4. Personnalisation des invités

Vous pouvez créer des liens personnalisés pour chaque invité :

- `https://votre-domaine.com/#famille-mballa` → "Famille Mballa, Thierry et Grâce vous invitent..."
- `https://votre-domaine.com/#mme-nathalie-owona` → "Mme Nathalie Owona, Thierry et Grâce vous invitent..."

Le nom sera automatiquement prérempli dans le formulaire RSVP.

## Déploiement

### Option 1: Netlify Drop
1. Générez le build : `npm run build`
2. Ouvrez [app.netlify.com/drop](https://app.netlify.com/drop)
3. Glissez-déposez le dossier `.next` ou le dossier complet du projet

### Option 2: Vercel (recommandé)
```bash
npm install -g vercel
vercel
```

### Option 3: Cloudflare Pages
1. Créez un nouveau projet sur Cloudflare Pages
2. Connectez votre dépôt Git ou uploadez les fichiers
3. Build command: `npm run build`
4. Output directory: `.next`

## Structure du projet

```
faire-part-next/
├── app/
│   ├── globals.css       # Styles globaux et configuration Tailwind
│   ├── layout.tsx        # Layout principal avec métadonnées
│   └── page.tsx          # Page d'accueil avec logique de hash routing
├── components/
│   ├── Hero.tsx          # Section hero avec photo et titre
│   ├── Countdown.tsx     # Compte à rebours
│   ├── Story.tsx         # Section histoire avec galerie
│   ├── Program.tsx       # Programme des événements
│   ├── RSVP.tsx          # Formulaire de confirmation
│   ├── Footer.tsx        # Pied de page
│   └── FloatingButton.tsx # Bouton flottant
└── public/
    ├── img/              # Photos du couple
    └── apercu.jpg        # Image de prévisualisation sociale
```

## Technologies utilisées

- [Next.js 15](https://nextjs.org/) - Framework React
- [TypeScript](https://www.typescriptlang.org/) - Typage statique
- [Tailwind CSS v4](https://tailwindcss.com/) - Framework CSS utilitaire
- [Google Fonts](https://fonts.google.com/) - Polices Jost & Cormorant Garamond

## Personnalisation avancée

### Couleurs

Les couleurs sont définies dans `app/globals.css` sous `@theme inline` :

```css
--color-night: #2B0812;
--color-emerald: #0F4034;
--color-gold: #C9A961;
/* ... */
```

### Photos

Remplacez les images dans `public/img/` :
- `couple-1.jpg` - Photo hero principale
- `couple-2.jpg`, `couple-3.jpg`, `couple-4.jpg` - Galerie
- `apercu.jpg` - Aperçu pour WhatsApp/réseaux sociaux (1200x630px recommandé)

## Licence

Ce projet est sous licence MIT.

## Crédits

Photos : Air Force Studio
