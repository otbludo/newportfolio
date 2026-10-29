# Portfolio d’Otabela (OT)

Portfolio personnel de Ludovic Otabela, développeur Full-Stack spécialisé en
IA et Big Data. Le site présente son profil, ses compétences, ses projets et
ses voyages.

## Fonctionnalités

- Page d’accueil avec présentation, portrait et liens vers GitHub et LinkedIn.
- Page Compétences avec filtres par catégorie.
- Page Projets réalisés et expériences.
- Page Voyages avec photos et globe interactif.
- Navigation fixe en bas de page.
- Métadonnées de partage social avec aperçu du portrait (`public/profile.png`).
- Manifeste web pour les navigateurs compatibles avec l’installation sur mobile.

## Technologies

- React 19
- Vite 8
- Tailwind CSS 4
- Motion pour les animations
- Lucide React pour les icônes
- Cobe pour le globe interactif

## Prérequis

- Node.js `^20.19.0` ou `>=22.12.0` (requis par Vite 8)
- npm

> Node.js 18 n’est pas compatible avec la version de Vite utilisée par ce
> projet.

## Lancer le projet en local

Depuis la racine du projet :

```bash
npm install
npm run dev
```

Vite affiche dans le terminal l’adresse locale à ouvrir dans le navigateur,
généralement `http://localhost:5173`.

## Commandes disponibles

```bash
npm run dev      # Lance le serveur de développement
npm run build    # Génère la version de production dans dist/
npm run preview  # Prévisualise localement la version compilée
npm run lint     # Vérifie le code avec ESLint
```

Pour prévisualiser une version de production, lance d’abord `npm run build`,
puis `npm run preview`.

## Organisation du projet

```text
public/
  imgexperience/       Images associées aux expériences
  imgvoyages/          Photos des voyages
  logoSkills/          Logos des compétences
  projets/             Images des projets
  profile.png          Portrait et image d’aperçu social
  manifest.webmanifest Manifeste web
src/
  components/
    base/              Navigation et pied de page
    skills/            Composants de la page Compétences
    ui/                Composants d’interface réutilisables
  data/                Données des compétences
  pages/               Pages Accueil, Compétences, Projets et Voyages
  App.jsx              Navigation entre les pages
  main.jsx             Point d’entrée React
  index.css            Styles globaux et imports CSS
index.html             Document HTML et métadonnées sociales
vite.config.js         Configuration Vite
```

## Déploiement

Le projet peut être déployé sur Vercel avec les paramètres par défaut d’un
projet Vite. Les métadonnées de partage utilisent l’URL publique stable
`https://otabelaludovic.vercel.app/profile.png` pour éviter de référencer une
URL de déploiement Vercel qui peut être protégée par une connexion. Les services
de partage peuvent mettre en cache l’aperçu et mettre du temps à l’actualiser.
