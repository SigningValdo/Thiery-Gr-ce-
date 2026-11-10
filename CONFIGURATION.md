# Guide de Configuration Rapide

Ce document liste tous les éléments à personnaliser pour adapter le site à vos besoins.

## ✅ Checklist de Configuration

### 1. Informations de base

#### Date et heure du mariage
📁 `components/Countdown.tsx` - Ligne 17
```typescript
const targetDate = new Date('2026-12-12T09:30:00+01:00').getTime();
const endOfDay = new Date('2026-12-12T23:59:59+01:00').getTime();
```

#### Numéro WhatsApp pour les réponses
📁 `components/RSVP.tsx` - Ligne 13
```typescript
const WHATSAPP = '237677136741'; // Format: 237XXXXXXXXX (sans + ni espaces)
```

### 2. Métadonnées et domaine

#### URL du site
📁 `app/layout.tsx` - Lignes 12-18
```typescript
url: "https://VOTRE-DOMAINE.com/",
images: [
  {
    url: "https://VOTRE-DOMAINE.com/apercu.jpg",
    width: 1200,
    height: 630,
  },
],
```

**Important:** Remplacez toutes les occurrences de `VOTRE-DOMAINE.com` par votre vraie adresse.

### 3. Événements du mariage

#### Lieux et horaires
📁 `components/Program.tsx` - Lignes 4-27

**Bénédiction nuptiale:**
```typescript
{
  title: 'Bénédiction nuptiale',
  time: '9h30',
  location: 'en la Chapelle Saint-Esprit de Mvolyé',
  mapQuery: 'Chapelle+Saint+Esprit+Mvoly%C3%A9+Yaound%C3%A9',
  calendarEvent: {
    title: 'Mariage+de+Thierry+et+Gr%C3%A2ce+-+B%C3%A9n%C3%A9diction+nuptiale',
    dates: '20261212T083000Z/20261212T103000Z', // Format: YYYYMMDDTHHMMSSZ
    location: 'Chapelle+Saint+Esprit+de+Mvoly%C3%A9%2C+Yaound%C3%A9',
  },
}
```

**Réception:**
```typescript
{
  title: 'Réception',
  time: '19h00',
  timePrefix: 'à partir de',
  location: 'à la Salle Polyvalente de la Brigade, Quartier Général, Yaoundé',
  mapQuery: 'Salle+Polyvalente+de+la+Brigade+Quartier+G%C3%A9n%C3%A9ral+Yaound%C3%A9',
  calendarEvent: {
    title: 'Mariage+de+Thierry+et+Gr%C3%A2ce+-+R%C3%A9ception',
    dates: '20261212T180000Z/20261212T230000Z',
    location: 'Salle+Polyvalente+de+la+Brigade%2C+Quartier+G%C3%A9n%C3%A9ral%2C+Yaound%C3%A9',
  },
}
```

### 4. Textes personnalisables

#### Message d'accueil
📁 `components/Hero.tsx` - Ligne 123
```typescript
Thierry et Grâce vous invitent à célébrer leur union.
```

#### Histoire du couple
📁 `components/Story.tsx` - Ligne 30
```typescript
Deux âmes qui se sont mises au diapason, deux cœurs qui battent à l'unisson,
ils se sont promis une vie de bonheur ensemble et se sont dit oui sous une
pluie de belles fleurs.
```

#### Message du compte à rebours
📁 `components/Countdown.tsx` - Ligne 83
```typescript
avant la bénédiction nuptiale, le samedi 12 décembre à 9h30.
```

### 5. Photos

Remplacez les fichiers dans `public/`:

- `public/img/couple-1.jpg` - Photo hero (format portrait 5:7 recommandé)
- `public/img/couple-2.jpg` - Galerie photo 1 (format portrait 2:3)
- `public/img/couple-3.jpg` - Galerie photo 2 (format portrait 2:3)
- `public/img/couple-4.jpg` - Galerie photo 3 (format portrait 2:3)
- `public/apercu.jpg` - Image de partage social (1200x630px)

**Recommandations:**
- Format: JPEG optimisé
- Taille max: 500 KB par image
- Résolution: 1024px de largeur minimum

### 6. Personnalisation des invités

Créez des liens personnalisés en ajoutant un hash à l'URL:

**Format:** `https://votre-domaine.com/#[nom-prenom]`

**Exemples:**
- `#famille-mballa` → "Famille Mballa"
- `#mme-nathalie-owona` → "Mme Nathalie Owona"
- `#m-et-mme-dupont` → "M. et Mme Dupont"
- `#dr-kamga` → "Dr Kamga"

**Titres reconnus automatiquement:**
- `m`, `mr` → M.
- `mme` → Mme
- `mlle` → Mlle
- `dr` → Dr
- `pr` → Pr
- `famille` → Famille

### 7. Couleurs (optionnel)

Si vous souhaitez changer les couleurs du thème:

📁 `app/globals.css` - Lignes 5-20
```css
@theme inline {
  --color-night: #2B0812;        /* Bordeaux profond */
  --color-emerald: #0F4034;      /* Vert émeraude */
  --color-gold: #C9A961;         /* Or */
  --color-accent: #8A1C2E;       /* Accent rouge/bordeaux */
  /* ... */
}
```

## 🚀 Après la configuration

1. **Testez localement:**
   ```bash
   npm run dev
   ```
   Ouvrez http://localhost:3000

2. **Vérifiez:**
   - [ ] Le compte à rebours affiche la bonne date
   - [ ] Les liens Google Maps fonctionnent
   - [ ] Les liens Google Calendar créent le bon événement
   - [ ] Le bouton WhatsApp ouvre la bonne conversation
   - [ ] Les photos s'affichent correctement
   - [ ] Les URLs personnalisées fonctionnent (ex: `#famille-test`)

3. **Construisez pour la production:**
   ```bash
   npm run build
   ```

4. **Déployez sur Vercel, Netlify ou Cloudflare Pages**

## 📝 Notes importantes

- **Format des dates pour Google Calendar:** Format ISO 8601 en UTC (YYYYMMDDTHHMMSSZ)
- **WhatsApp:** Le numéro doit être au format international sans + (ex: 237677136741)
- **Images:** Optimisez vos images avant de les ajouter pour de meilleures performances
- **Domaine:** N'oubliez pas de remplacer TOUTES les occurrences de VOTRE-DOMAINE.com

## ❓ Besoin d'aide?

Consultez le README-FR.md pour plus d'informations sur la structure du projet et les options de déploiement.
