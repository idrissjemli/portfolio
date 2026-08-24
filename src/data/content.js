/**
 * Source unique de verite du site, construite a partir de CONTENU.md.
 *
 * Regles :
 *  - aucun texte n'est reecrit ni invente : les chaines sont copiees a l'identique ;
 *  - une information absente de CONTENU.md vaut `null` (jamais une valeur de remplacement) ;
 *  - les chemins d'assets pointent vers `public/` (racine du site).
 *
 * Convention de mise en forme : `**...**` dans un paragraphe signale une emphase
 * presente dans CONTENU.md, rendue en gras par les composants.
 */

export const identity = {
  name: "Idriss Jemli",
  title: "Ingénieur Data & BI",
  location: "Ariana, Tunisie",
  email: "idriss.jemli@esprit.tn",
  github: "https://github.com/idrissjemli",
  linkedin: "https://linkedin.com/in/idriss-jemli-892068218",
};

/** Navigation par ancres — ordre impose par le brief. */
export const nav = [
  { id: "accueil", label: "Accueil" },
  { id: "a-propos", label: "À propos" },
  { id: "competences", label: "Compétences" },
  { id: "experiences", label: "Expériences" },
  { id: "projets", label: "Projets" },
  { id: "certifications", label: "Certifications" },
  { id: "cv", label: "CV" },
  { id: "contact", label: "Contact" },
];

/* ---------------------------------------------------------------------- 0. CV */

/**
 * Chemins des CV et version des fichiers.
 *
 * Les navigateurs gardent un PDF en cache : sans ce parametre, l'iframe
 * continue d'afficher l'ancienne version apres remplacement du fichier dans
 * `public/cv/`. Il suffit d'incrementer `cvVersion` a chaque remplacement.
 *
 * Defini ici, avant la section « Accueil », parce que le bouton du hero pointe
 * lui aussi vers le CV francais et doit servir la meme URL.
 */
export const cvVersion = 2;

const cvChemins = {
  fr: "/cv/cv-fr.pdf",
  en: "/cv/cv-en.pdf",
};

/** URL d'un CV, parametre de version compris. */
export const cvUrl = (langue) => `${cvChemins[langue]}?v=${cvVersion}`;

/* ------------------------------------------------------------------ 1. Accueil */

export const hero = {
  /** Titres enchaines par l'effet machine a ecrire. */
  typewriter: [
    "Ingénieur Data & BI",
    "Développeur full-stack",
    "Consultant ERP & Business Intelligence",
  ],
  /** Accroche : deux lignes, le retour a la ligne fait partie du texte. */
  tagline: [
    "Ingénieur diplômé de l'ESPRIT, spécialisé en ERP et Business Intelligence.",
    "Je conçois des chaînes de données, de la source au tableau de bord — et les applications qui vont avec.",
  ],
  buttons: [
    { label: "Voir mes projets", href: "#projets", variant: "primary" },
    // CONTENU.md dit « Télécharger mon CV » sans preciser la langue : le CV francais
    // est celui affiche dans la page, c'est donc lui qui est propose ici.
    {
      label: "Télécharger mon CV",
      href: cvUrl("fr"),
      variant: "secondary",
      download: true,
    },
    { label: "Me contacter", href: "#contact", variant: "ghost" },
  ],
};

/* ----------------------------------------------------------------- 2. À propos */

export const about = {
  photo: {
    src: "/photo.jpg",
    alt: "Portrait d'Idriss Jemli",
  },
  paragraphs: [
    "Ingénieur en informatique diplômé de l'ESPRIT, spécialisé en ERP et Business Intelligence. Mon travail se situe à la rencontre de deux mondes : la donnée — modélisation, ETL, entrepôts, tableaux de bord — et le développement d'applications qui la rendent utilisable.",
    "Ce qui me plaît dans ce métier, c'est de comprendre **pourquoi** ça marche. Je ne suis pas à l'aise tant que je n'ai pas ouvert la boîte : d'où vient la donnée, ce qu'elle traverse, ce qui la casse en chemin. C'est aussi pour ça que j'aime autant la partie données que la partie développement — l'une sans l'autre ne raconte que la moitié de l'histoire.",
    "J'aime aussi finir ce que je commence. Cet été, j'ai repris un projet de stage qui dormait depuis un an, dont les deux moitiés n'avaient en réalité jamais fonctionné ensemble. Il m'a fallu une journée pour comprendre pourquoi et le rendre opérationnel, et j'y ai trouvé une quinzaine de bugs que personne n'avait jamais vus. C'est le genre de travail qui m'apprend le plus.",
    "Aujourd'hui je cherche un premier poste où continuer à apprendre vite, sur des sujets data ou full-stack, dans une équipe qui n'a pas peur d'expliquer.",
  ],
  aside: {
    label: "En dehors du code",
    value: "moto, salle de sport, jeux vidéo",
  },
};

/* -------------------------------------------------------------- 3. Compétences */

export const skills = [
  {
    group: "Données & BI",
    items: [
      "SQL Server",
      "T-SQL",
      "SSIS",
      "Power BI",
      "DAX",
      "Modélisation en étoile",
      "Entrepôt de données",
      "ETL",
    ],
  },
  {
    group: "Développement",
    items: [
      "Python",
      "Flask",
      "Angular",
      "React",
      "Node.js",
      "Express",
      "API REST",
      "Java",
      "Spring Boot",
      "PHP",
      "Symfony",
      "C++",
      "C",
    ],
  },
  {
    group: "Bases de données",
    items: ["SQL Server", "MySQL", "MongoDB", "PostgreSQL"],
  },
  {
    group: "Machine learning",
    items: ["Scikit-learn", "Détection d'anomalies", "Pandas"],
  },
  {
    group: "Outils & méthodes",
    items: [
      "Git",
      "Docker",
      "Agile Scrum",
      "Jira",
      "Hadoop",
      "SAP BW",
      "SAP ABAP & Fiori",
    ],
  },
];

/* -------------------------------------------------------------- 4. Expériences */
/* Frise verticale : la plus recente en premier. */

export const experiences = [
  {
    role: "Ingénieur Data & Full-Stack — Projet de fin d'études",
    company: "BIAT IT",
    place: "La Goulette",
    period: "Février – Juillet 2026",
    description:
      "Conception et développement d'une plateforme de supervision de l'activité monétique : entrepôt de données SQL Server en modélisation étoile, détection d'anomalies par machine learning en Python, API Flask, interface Angular, tableaux de bord Power BI et assistant conversationnel branché sur la base. Projet publié, dockerisé et reproductible.",
  },
  {
    role: "Conseiller Client & Gestionnaire de Données",
    company: "California Gym",
    place: null,
    period: "Septembre 2025 – Février 2026",
    description:
      "Accueil et conseil des adhérents au quotidien : découverte du besoin, présentation des offres, suivi des abonnements et gestion des situations difficiles. En parallèle, gestion des données des adhérents dans Heitz System, le logiciel métier de la salle — saisie, mise à jour, fiabilité des dossiers et suivi des échéances. Une expérience hors informatique qui m'a appris deux choses utiles à mon métier : parler à des utilisateurs qui ne parlent pas technique, et mesurer ce que coûte une donnée mal saisie.",
  },
  {
    role: "Stagiaire Ingénieur Full-Stack & BI",
    company: "STEG",
    place: null,
    period: "Juin – Août 2025",
    description:
      "Développement d'une application web de gestion des stagiaires : API Node.js/Express avec MongoDB, interface React, authentification JWT et contrôle d'accès par rôle, tableaux de bord et exports. Application reprise et achevée en 2026, publiée sur GitHub.",
  },
  {
    role: "Stagiaire Technicien Data & Analyse",
    company: "Assurances BIAT",
    place: null,
    period: "Juin – Juillet 2024",
    description:
      "Intégration de données multi-sources, nettoyage et préparation, construction de tableaux de bord Power BI pour le suivi de l'activité assurance.",
  },
  {
    role: "Stage Ouvrier — Immersion métier",
    company: "Assurances BIAT",
    place: null,
    period: "Juillet – Août 2022",
    description:
      "Découverte des métiers de l'assurance : types de contrats, gestion des sinistres, circuits internes.",
  },
];

/* ----------------------------------------------------------------- 5. Formation */
/* Pas de section ni d'entree de navigation dediees : la formation est rendue
   comme une entree de plus, en bas de la frise Experiences (cf. `timeline`). */

export const education = [
  {
    degree: "Diplôme national d'ingénieur en informatique",
    school: "ESPRIT",
    place: "Ariana",
    period: "2021 – 2026",
    specialty: "Spécialité ERP & Business Intelligence",
  },
];

/**
 * Frise unique de la section Experiences : les postes du plus recent au plus
 * ancien, puis la formation (2021 – 2026) en derniere position.
 * `type` permet aux composants de distinguer les deux natures d'entree.
 */
export const timeline = [
  ...experiences.map((item) => ({ ...item, type: "experience" })),
  ...education.map((item) => ({
    type: "education",
    role: item.degree,
    company: item.school,
    place: item.place,
    period: item.period,
    description: item.specialty,
  })),
];

/* ------------------------------------------------------------------ 6. Projets */

/** Filtres affiches au-dessus de la grille — liste et ordre imposes par le brief. */
export const projectFilters = ["Tous", "Data", "Full-stack", "Backend", "Desktop"];

export const projects = [
  {
    id: "biat-monitoring",
    title: "BIAT Monitoring",
    subtitle: "Supervision monétique et détection d'anomalies",
    categories: ["Data", "Full-stack"],
    image: "/projets/biat-monitoring.jpg",
    github: "https://github.com/idrissjemli/biat-monitoring",
    stack: [
      "SQL Server",
      "Python",
      "Scikit-learn",
      "Flask",
      "Angular",
      "Power BI",
      "Docker",
      "LLM",
    ],
    description:
      "Plateforme de supervision de l'activité monétique d'une banque, réalisée comme projet de fin d'études. Entrepôt de données en modélisation étoile, détection automatique d'anomalies par machine learning, alertes par email, tableaux de bord Power BI et assistant conversationnel capable d'interroger la base en langage naturel. Entièrement dockerisé et reproductible.",
  },
  {
    id: "steg-intern-management",
    title: "STEG Intern Management",
    subtitle: "Gestion des stagiaires",
    categories: ["Full-stack"],
    image: "/projets/steg.jpg",
    github: "https://github.com/idrissjemli/steg-intern-management",
    stack: [
      "React",
      "Vite",
      "TailwindCSS",
      "Redux Toolkit",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    description:
      "Application de gestion des stagiaires développée pour la STEG : dossiers complets, affectation aux départements avec gestion des quotas, évaluations de stage, tableaux de bord, exports et contrôle d'accès par rôle. Reprise intégrale un an après le stage — les deux moitiés de l'application n'avaient jamais fonctionné ensemble. Une quinzaine de défauts identifiés et corrigés, documentés dans le dépôt.",
  },
  {
    id: "pipeline-etl-ssis",
    title: "Pipeline ETL avec gestion de la qualité des données",
    subtitle: null,
    categories: ["Data"],
    image: "/projets/ssis.jpg",
    github: "https://github.com/idrissjemli/ssis-etl-qualite-donnees",
    stack: ["SSIS", "SQL Server", "T-SQL"],
    description:
      "Flux ETL complet construit avec SSIS : nettoyage et normalisation, séparation des lignes valides, des rejets métier et des erreurs techniques vers trois destinations distinctes, avec traçabilité de chaque rejet et rechargement idempotent.",
  },
  {
    id: "gestion-foyer-universitaire",
    title: "Gestion de foyers universitaires",
    subtitle: null,
    categories: ["Backend"],
    image: "/projets/foyer.jpg",
    github: "https://github.com/idrissjemli/gestion-foyer-universitaire",
    stack: [
      "Java 17",
      "Spring Boot",
      "Spring Security",
      "JPA/Hibernate",
      "MySQL",
      "JUnit",
      "Mockito",
    ],
    description:
      "API REST de gestion de foyers étudiants : foyers, blocs, chambres, étudiants et réservations, avec règles métier (capacité des blocs, unicité des chambres, contrôle des réservations), sécurité par rôles, tests unitaires et interface web de gestion.",
  },
  {
    id: "fitconnect-javafx",
    title: "FitConnect",
    subtitle: "Application de bureau",
    categories: ["Desktop"],
    image: "/projets/javafx.jpg",
    github: "https://github.com/idrissjemli/gestion-evenements-javafx",
    stack: ["JavaFX", "Java", "JDBC", "MySQL"],
    description:
      "Module de gestion d'événements d'une plateforme sport et bien-être, en application de bureau. Partage sa base de données avec la version web du projet, illustrant un motif d'intégration par base partagée entre deux applications hétérogènes.",
  },
];

/* ----------------------------------------------------------- 7. Certifications */

export const certifications = [
  {
    title: "AWS Academy Graduate — Cloud Foundations",
    org: "AWS Academy",
    image: "/certifs/certif-aws-cloud-foundations.jpg",
    link: "https://www.credly.com/badges/507fcadd-5e66-470e-a947-3f85510354fb",
  },
  {
    title: "CCNA — Switching, Routing & Wireless Essentials",
    org: "Cisco Networking Academy",
    image: "/certifs/certif-ccnav7-cisco.jpg",
    link: "https://www.credly.com/badges/4a965bd8-b149-4aa7-afa2-f2b2be73a674",
  },
  {
    title: "Introduction to Cybersecurity",
    org: "Cisco Networking Academy",
    image: "/certifs/certif-cybersecurity.jpg",
    link: "https://www.credly.com/badges/2edcbc9b-c009-4f7c-90d3-825fb6c312e1",
  },
  {
    title: "SQL Associate",
    org: "DataCamp",
    image: "/certifs/certif-sql-datacamp.jpg",
    link: "https://www.datacamp.com/certificate/SQA0013105080684",
  },
  {
    title: "Hashgraph Developer",
    org: "The Hashgraph Association",
    image: "/certifs/certif-hashgraph-developer.jpg",
    // CONTENU.md : « (pas de lien public) » — la vignette ne sera pas cliquable.
    link: null,
  },
];

/* ----------------------------------------------------------------------- 8. CV */

export const cv = {
  /** Affiche dans un <iframe> au sein de la page. Voir `cvVersion` en tete de fichier. */
  embedded: cvUrl("fr"),
  downloads: [
    { label: "CV (FR)", href: cvUrl("fr"), lang: "fr" },
    { label: "CV (EN)", href: cvUrl("en"), lang: "en" },
  ],
};

/* ------------------------------------------------------------------ 9. Contact */

export const contact = {
  title: "Travaillons ensemble",
  text: "Une opportunité, une question, ou simplement l'envie d'échanger ? Écrivez-moi.",
  fields: [
    { name: "name", label: "Nom", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "message", label: "Message", type: "textarea" },
  ],
  location: "Ariana, Tunisie",
};

/* ------------------------------------------------------ Libellés d'interface */
/**
 * ATTENTION : ces chaines ne viennent PAS de CONTENU.md.
 *
 * Ce sont des messages fonctionnels (etats du formulaire, titre de l'iframe)
 * qui n'ont aucun equivalent dans la source. Ils sont regroupes ici pour etre
 * relus et corriges en un seul endroit, et pour ne pas se melanger au contenu
 * valide. Toute autre chaine du site vient de CONTENU.md.
 */
export const ui = {
  form: {
    submit: "Envoyer",
    sending: "Envoi en cours…",
    sent: "Message envoyé. Merci, je vous réponds rapidement.",
    error: `L'envoi a échoué. Réessayez, ou écrivez-moi directement à ${identity.email}.`,
    unconfigured: `Le formulaire n'est pas encore relié à EmailJS. En attendant, écrivez-moi directement à ${identity.email}.`,
  },
  cv: {
    iframeTitle: "CV d'Idriss Jemli, version française",
    open: "Ouvrir le CV",
  },
};

export const footer = "Conçu et développé par Idriss Jemli — 2026";

export default {
  identity,
  nav,
  hero,
  about,
  skills,
  experiences,
  education,
  timeline,
  projectFilters,
  projects,
  certifications,
  cv,
  contact,
  footer,
  ui,
};
