# Brief de construction — site portfolio d'Idriss Jemli

## Objectif

Un site portfolio personnel, en ligne aujourd'hui. Une seule page à ancres, sobre, rapide,
irréprochable sur mobile. Le contenu textuel intégral est dans `CONTENU.md` — **c'est la source
de vérité, ne réécris aucun texte, n'en invente aucun**.

## Stack imposée

- React 18 + Vite + TailwindCSS
- Pas de bibliothèque de composants lourde. `framer-motion` autorisé pour des apparitions discrètes au défilement.
- Aucune donnée en dur dispersée dans les composants : tout le contenu vient d'un module `src/data/content.js` construit à partir de `CONTENU.md`.

## Structure

Une page unique avec navigation par ancres, barre de navigation fixe en haut :
Accueil · À propos · Compétences · Expériences · Projets · Certifications · CV · Contact

Sections dans cet ordre :

1. **Accueil** — nom, titres défilants (effet machine à écrire sur les trois titres de `CONTENU.md`), accroche, trois boutons, liens GitHub/LinkedIn/email.
2. **À propos** — photo (`assets/photo.jpg`, ronde ou arrondie) à gauche, texte à droite ; sur mobile l'un sous l'autre.
3. **Compétences** — les cinq groupes en cartes, chaque technologie en pastille.
4. **Expériences** — frise verticale, la plus récente en haut, poste / entreprise / dates / description.
5. **Projets** — grille de cartes : image, titre, description, pastilles de stack, bouton GitHub. Filtres par catégorie au-dessus (Tous, Data, Full-stack, Web, Backend, Desktop, ETL, Machine Learning) — un projet peut appartenir à plusieurs catégories.
6. **Certifications** — grille d'images cliquables vers le lien de vérification, titre et organisme sous chaque image. Celle sans lien n'est pas cliquable.
7. **CV** — le PDF français affiché dans un `<iframe>`, deux boutons de téléchargement FR et EN.
8. **Contact** — formulaire (nom, email, message) + liens à côté.
9. **Pied de page**.

## Design

- **Thème sombre uniquement.** Fond bleu nuit très sombre (`#0B1120` / slate-950), cartes légèrement plus claires (`#111827`), texte principal `#E2E8F0`, texte secondaire `#94A3B8`.
- **Accent : cyan** (`#22D3EE`) pour les liens, les pastilles actives et les traits sous les titres de section. Un seul accent, pas de dégradé multicolore.
- Typographie : une seule police sans-serif (Inter via Google Fonts), deux graisses.
- Coins arrondis discrets, bordures fines `#1E293B`, ombres légères. Pas d'effet néon, pas d'étoiles animées, pas de fond en particules.
- Contraste : tout texte doit rester lisible — vérifie que le texte secondaire garde un rapport d'au moins 4,5:1 sur son fond.

## Contraintes

- **Mobile d'abord.** Teste mentalement à 375 px : rien ne doit déborder horizontalement, la navigation devient un menu hamburger.
- **Accessibilité** : balises sémantiques (`nav`, `main`, `section`, `h1`–`h3` dans l'ordre), `alt` sur chaque image, focus visible au clavier.
- **Performance** : images en `loading="lazy"` sauf celle de l'accueil, pas de police auto-hébergée lourde.
- **Aucune donnée inventée.** Si une information manque dans `CONTENU.md` (par exemple le lien GitHub du projet SSIS), laisse le champ vide et signale-le-moi — ne mets pas de lien fictif.
- Le site doit se construire sans erreur : `npm run build` doit sortir en code 0.

## Assets

Déjà présents dans `assets/`, à déplacer dans `public/` lors de l'initialisation :

```
assets/photo.jpg
assets/projets/{biat-monitoring,steg,ssis,foyer,javafx}.jpg
assets/certifs/certif-{aws-cloud-foundations,ccnav7-cisco,cybersecurity,sql-datacamp,hashgraph-developer}.jpg
assets/cv/{cv-fr,cv-en}.pdf
```

## Formulaire de contact

Via **EmailJS** (gratuit, sans backend). Prépare le code et les variables d'environnement
(`VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, `VITE_EMAILJS_PUBLIC_KEY`) dans un
`.env.example`, et **exclus `.env` du dépôt**. Si les variables sont absentes, le formulaire
affiche un message clair au lieu de planter silencieusement.

## Déploiement

Prévu sur **Vercel** (dépôt GitHub `idrissjemli/portfolio`, puis domaine personnalisé plus tard).
Vérifie que la construction Vite fonctionne et que les chemins d'assets sont relatifs.

## Méthode de travail

Procède **par étapes, en t'arrêtant entre chacune** pour que je valide :

1. Initialisation du projet (Vite + Tailwind), déplacement des assets, `src/data/content.js` rempli depuis `CONTENU.md`.
2. Mise en page générale : navigation, sections vides, thème, responsive.
3. Sections Accueil, À propos, Compétences.
4. Sections Expériences, Projets avec filtres.
5. Sections Certifications, CV, Contact, pied de page.
6. Passe finale : build, vérification mobile, accessibilité.

Explique ce que tu comptes faire avant chaque étape.
