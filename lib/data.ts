// ============================================================
//  PERSONAL INFORMATION
//  Modify this section to change name, email, and description
// ============================================================

export const personalInfo = {
  name: 'Daniele Caldarola',
  role: 'Web Developer',
  email: 'daniele.digitalweb@gmail.com',
  phone: '+39 3287508286',
  tagline: 'Creo esperienze web moderne, veloci e curate nei dettagli.',
  aboutPart1:
    'Sono Daniele Caldarola e mi sto costruendo il mio percorso nel mondo dello sviluppo web. Mi appassiona creare esperienze digitali moderne, intuitive e curate nei dettagli.',
  aboutPart2:
    'Il mio obiettivo è trasformare idee e necessità in siti web semplici da utilizzare, veloci e visivamente curati.',
};

// ============================================================
//  NAVIGATION — multi-page routes
// ============================================================

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Chi sono', href: '/chi-sono' },
  { label: 'Competenze', href: '/competenze' },
  { label: 'Progetti', href: '/progetti' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Contatti', href: '/contatti' },
];

// ============================================================
//  ICON NAMES — use string identifiers that map to lucide-react
//  icons via the iconMap in components/Icon.tsx
//  Available names: code2, layout, smartphone, sparkles, fileCode2,
//  palette, braces, atom, hexagon, squareCode, gitBranch, github,
//  server, database, wrench, target, eye, heart, mail, send,
//  checkCircle2, arrowRight, arrowDown, externalLink, folderOpen,
//  menu, x
// ============================================================

export type IconName =
  | 'code2' | 'layout' | 'smartphone' | 'sparkles'
  | 'fileCode2' | 'palette' | 'braces' | 'atom' | 'hexagon'
  | 'squareCode' | 'gitBranch' | 'github'
  | 'server' | 'database' | 'wrench'
  | 'target' | 'eye' | 'heart'
  | 'mail' | 'send' | 'checkCircle2' | 'arrowRight' | 'arrowDown'
  | 'externalLink' | 'folderOpen' | 'menu' | 'x' | 'phone';

// ============================================================
//  SKILLS / TECHNOLOGIES
//  ⚠️ ATTENZIONE: Questa lista è un PLACEHOLDER.
//  Modifica gli array qui sotto con le TUE reali competenze.
//  Le voci qui sotto NON sono competenze certificate —
//  sostituiscile o rimuovile in base alle tue effettive conoscenze.
// ============================================================

export interface Skill {
  name: string;
  description: string;
  icon: IconName;
}

export interface SkillCategory {
  category: string;
  icon: IconName;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: 'layout',
    skills: [
      {
        name: 'HTML',
        description: 'Struttura semantica per il web moderno.',
        icon: 'fileCode2',
      },
      {
        name: 'CSS',
        description: 'Stili, layout responsive e animazioni.',
        icon: 'palette',
      },
      {
        name: 'JavaScript',
        description: 'Interattività e logica lato client.',
        icon: 'braces',
      },
      {
        name: 'React',
        description: 'Interfacce component-based e reattive.',
        icon: 'atom',
      },
      {
        name: 'Next.js',
        description: 'Framework React per app performanti.',
        icon: 'hexagon',
      },
      {
        name: 'TypeScript',
        description: 'JavaScript con tipizzazione statica.',
        icon: 'squareCode',
      },
    ],
  },
  {
    category: 'Backend',
    icon: 'server',
    skills: [
      // ↑ Aggiungi qui le tue competenze backend reali
    ],
  },
  {
    category: 'Database',
    icon: 'database',
    skills: [
      // ↑ Aggiungi qui le tue competenze database reali
    ],
  },
  {
    category: 'Tools',
    icon: 'wrench',
    skills: [
      {
        name: 'Git',
        description: 'Controllo versione per progetti collaborativi.',
        icon: 'gitBranch',
      },
      {
        name: 'GitHub',
        description: 'Piattaforma di hosting e collaborazione.',
        icon: 'github',
      },
    ],
  },
];

// Flattened list for home & about previews
export const allSkills: Skill[] = skillCategories.flatMap((c) => c.skills);

// ============================================================
//  SERVICES
// ============================================================

export interface Service {
  title: string;
  description: string;
  icon: IconName;
  benefits: string[];
  process: string[];
}

export const services: Service[] = [
  {
    title: 'Siti Web',
    description: 'Siti moderni, responsive e ottimizzati per il web.',
    icon: 'code2',
    benefits: [
      'Design responsive su tutti i dispositivi',
      'Ottimizzazione per performance e velocità',
      'Codice pulito e manutenibile',
    ],
    process: [
      'Analisi delle esigenze e degli obiettivi',
      'Progettazione di layout e struttura',
      'Sviluppo e integrazione dei contenuti',
      'Test e ottimizzazione finale',
    ],
  },
  {
    title: 'Landing Page',
    description:
      'Pagine progettate per presentare un\'attività, un servizio o un prodotto.',
    icon: 'layout',
    benefits: [
      'Focus su conversione e chiarezza',
      'Contenuti strutturati ed efficaci',
      'Call-to-action strategiche',
    ],
    process: [
      'Definizione del messaggio chiave',
      'Progettazione della gerarchia visiva',
      'Sviluppo della pagina',
      'Revisione e ottimizzazione',
    ],
  },
  {
    title: 'Siti Portfolio',
    description:
      'Portfolio personali moderni per professionisti e creativi.',
    icon: 'smartphone',
    benefits: [
      'Presentazione personale elegante',
      'Sezioni modulari e personalizzabili',
      'Esperienza utente curata',
    ],
    process: [
      'Comprensione dello stile personale',
      'Progettazione della struttura',
      'Sviluppo del portfolio',
      'Rifinitura e dettagli',
    ],
  },
  {
    title: 'Soluzioni Web',
    description: 'Progetti web personalizzati in base alle esigenze.',
    icon: 'sparkles',
    benefits: [
      'Soluzioni su misura per ogni necessità',
      'Flessibilità e scalabilità',
      'Supporto durante tutto il progetto',
    ],
    process: [
      'Confronto su obiettivi e requisiti',
      'Progettazione della soluzione',
      'Sviluppo e integrazione',
      'Test, rilascio e assistenza',
    ],
  },
];

// ============================================================
//  PROCESS TIMELINE
// ============================================================

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Idea',
    description: 'Partiamo dall\'obiettivo e dall\'idea.',
  },
  {
    step: '02',
    title: 'Progettazione',
    description: 'Definiamo struttura, contenuti e stile.',
  },
  {
    step: '03',
    title: 'Sviluppo',
    description: 'Trasformiamo il progetto in un\'esperienza web funzionante.',
  },
  {
    step: '04',
    title: 'Ottimizzazione',
    description: 'Testiamo e miglioriamo il risultato finale.',
  },
];

// ============================================================
//  PROJECTS
//  ⚠️ L'array è vuoto: non ci sono progetti da mostrare.
//  Per aggiungere un progetto, inseriscilo nell'array qui sotto
//  con i campi specificati dall'interfaccia Project.
// ============================================================

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  // Esempio:
  // {
  //   title: 'Il mio primo progetto',
  //   description: 'Breve descrizione del progetto.',
  //   image: '/images/project-1.png',
  //   technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  //   category: 'Web App',
  //   demoUrl: 'https://example.com',
  //   githubUrl: 'https://github.com/daniele/project',
  // },
];

// ============================================================
//  ABOUT PAGE — values & approach (no invented personal info)
// ============================================================

export const approachItems = [
  {
    title: 'Design centrato sull\'utente',
    description:
      'Ogni scelta di design parte dall\'esperienza di chi usa il sito: chiarezza, semplicità e accessibilità.',
  },
  {
    title: 'Performance come priorità',
    description:
      'Siti veloci, leggeri e ottimizzati. La velocità non è un optional, è parte della qualità.',
  },
  {
    title: 'Codice pulito e mantenibile',
    description:
      'Scrivo codice ordinato, leggibile e strutturato per poter crescere ed evolversi nel tempo.',
  },
];

export const valueItems = [
  {
    title: 'Trasparenza',
    description:
      'Comunicazione chiara in ogni fase del progetto, senza sorprese.',
  },
  {
    title: 'Cura dei dettagli',
    description:
      'I dettagli fanno la differenza tra un sito qualunque e un sito curato.',
  },
  {
    title: 'Crescita continua',
    description:
      'Mi aggiorno costantemente per offrire soluzioni moderne e all\'avanguardia.',
  },
];

export const goalsText =
  'Il mio obiettivo è crescere come sviluppatore, lavorare a progetti sempre più stimolanti e costruire esperienze web che combinino estetica, funzionalità e performance.';
