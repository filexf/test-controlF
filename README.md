# test-Control-F

## Liens importants ‼️

- [Version en ligne](https://test-control-f.vercel.app/) 🚀
- [Figma du projet](https://www.figma.com/design/P81etWQVPhpMEKQtp2vINJ/Test-Control-F-maquette?node-id=0-1&t=BXZagYSEEMoj3dXM-1) 🎨
- [Prototype Figma interactif](https://www.figma.com/proto/P81etWQVPhpMEKQtp2vINJ/Test-Control-F-maquette?node-id=43-205&p=f&t=WrUsazUvnAS1AQa4-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=43%3A205) 🖱️

## Présentation 📝

Ce projet est une application front-end réalisée en React 19 et Tailwind CSS 4, répondant à au test technique de control-F. L'objectif est de créer une interface moderne, performante et accessible, avec une sidebar et une page principale, le tout en monopage (SPA).

### Démarche d'optimisation et bonnes pratiques 🚀

- **Audit de performance** : Un audit Lighthouse a été réalisé pour évaluer les performances, l'accessibilité, les bonnes pratiques et le SEO du site. [Voir le rapport Lighthouse](https://pagespeed.web.dev/analysis/https-test-control-f-vercel-app/9hmi18ni4g?form_factor=desktop&category=performance&category=accessibility&category=best-practices&category=seo&hl=fr&utm_source=lh-chrome-ext)
- **Images optimisées** : Toutes les images ont été converties au format WebP afin de réduire leur poids et d'améliorer le temps de chargement.
- **Code allégé** : Le code a été structuré pour être le plus léger et lisible possible, en limitant les dépendances externes et en factorisant les composants réutilisables.
- **Accessibilité** : Une attention particulière a été portée à l'accessibilité (contrastes, navigation clavier, attributs ARIA si nécessaire).
- **Responsive design** : L'interface est conçue pour être utilisable sur tous types d'écrans (desktop, tablette, mobile).

### Axes d'amélioration pour la suite 🔭

- **Optimisation avancée des performances** :
  - Mettre en place le lazy loading des images et des composants React pour accélérer le chargement initial.
  - Utiliser un CDN pour les assets statiques si le projet évolue.
- **Tests automatisés** : Ajouter des tests unitaires et d'intégration pour garantir la robustesse du code.
- **Amélioration de l'accessibilité** : Aller plus loin dans l'accessibilité (tests avec des lecteurs d'écran, audit approfondi ARIA).

## Stack technique 🛠️

- [React 19](https://react.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Installation 💻

1. **Cloner le dépôt**
   ```bash
   git clone ['repo url'](https://github.com/filexf/test-controlF.git)
   cd controlF-exercice
   ```
2. **Installer les dépendances**
   ```bash
   npm install
   ```
3. **Lancer le projet**
   ```bash
   npm run dev
   ```

## Structure du projet 📁

- `src/` : code source principal
  - `App.jsx` : composant racine, gère la structure générale (sidebar, pages)
  - `main.jsx` : point d'entrée React
  - `index.css` : styles globaux (inclut Tailwind)
  - `assets/` : images et ressources statiques

## Conventions & bonnes pratiques 📚

- Utilisation stricte de React 19 et Tailwind CSS 4
- Navigation monopage (SPA) avec React Router
- Respect des règles définies dans `cursorrules`
- Toujours demander avant d'installer un nouveau package

## Auteur 👨‍💻

- Felix Orain

---

Pour toute question, se référer au fichier `cursorrules` ou contacter l'auteur.
