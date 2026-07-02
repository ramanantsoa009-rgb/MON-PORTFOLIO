# Portfolio — Adrien Ainanirina Ramanantsoa

Portfolio personnel construit avec **Next.js 16**, **Tailwind CSS v4** et **Framer Motion**.

> Ingénieur IA & Fullstack — agents intelligents, APIs robustes, automatisation de processus métiers.

## Stack

- **Next.js 16** — App Router, SSR/SSG
- **Tailwind CSS v4** — configuration CSS-first via `@theme`
- **Framer Motion** — animations et transitions
- **TypeScript** — typage strict
- **react-icons / lucide-react** — icônes

## Lancer le projet en local

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000).

## Personnaliser le contenu

Tout le contenu est centralisé dans `src/content/` — aucun JSX à toucher pour modifier du texte.

| Ce que vous voulez changer | Fichier |
|---|---|
| Nom, rôle, tagline, bio, contacts | `src/content/site.ts` |
| Projets | `src/content/projects.ts` |
| Compétences & stack | `src/content/skills.ts` |
| Expertises | `src/content/services.ts` |
| Expériences professionnelles | `src/content/experiences.ts` |
| Formation & certifications | `src/content/education.ts` |
| Couleurs du thème | `src/app/globals.css` → bloc `@theme` |
| CV téléchargeable | Déposer le PDF dans `/public/cv/` et mettre à jour `cvUrl` dans `site.ts` |

## Structure

```
src/
  app/
    layout.tsx        Shell (font, metadata, Header, Footer)
    page.tsx          Assemblage des sections
    globals.css       Thème Tailwind (couleurs, police)
  components/
    layout/           Header, Footer
    sections/         Hero, Expertises, Projets, Compétences, Expériences, Formation, À propos, Contact
    motion/           FloatingShapes, SmoothScroll, FadeIn
    ui/               Button, SectionTitle
  content/            Tout le contenu du site
  lib/
    types.ts          Types TypeScript partagés
    skillIcons.ts     Icônes associées aux compétences
```

## Contact

- Email : [Ramanantsoa009@gmail.com](mailto:Ramanantsoa009@gmail.com)
- LinkedIn : [adrien-rmnt](https://www.linkedin.com/in/adrien-rmnt)
- GitHub : [ramanantsoa009-rgb](https://github.com/ramanantsoa009-rgb)
