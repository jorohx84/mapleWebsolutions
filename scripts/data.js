

const icons = [
  {
    path: "icons/skills/html.svg",
    name: "HTML 5",
    description:
      "Sauberes, semantisches HTML als stabiles Fundament für jede moderne Website.",
  },
  {
    path: "icons/skills/css.svg",
    name: "CSS 3",
    description:
      "Responsives, pixelgenaues Styling – von Flexbox bis Animationen.",
  },
  {
    path: "icons/skills/javascript.svg",
    name: "JavaScript",
    description:
      "Interaktive Web-Erlebnisse durch performanten und wartbaren JavaScript-Code.",
  },
  {
    path: "icons/skills/angular.svg",
    name: "Angular",
    description:
      "Strukturierte Webanwendungen mit Angular – skalierbar, robust und zukunftssicher.",
  },
  {
    path: "icons/skills/react.svg",
    name: "React",
    description:
      "Strukturierte Webanwendungen mit Angular – skalierbar, robust und zukunftssicher.",
  },
  {
    path: "icons/skills/typescript.svg",
    name: "TypeScript",
    description:
      "Typsicherheit und saubere Architektur dank TypeScript – für langfristige Codequalität.",
  },
  {
    path: "icons/skills/firebase.svg",
    name: "Rest-API",
    description:
      "Echtzeitdaten, Authentifizierung und Hosting – direkt aus der Cloud mit Firebase.",
  },
  // {
  //   path: "icons/php.svg",
  //   name: "PHP",
  //   description:
  //     "Solide Backend-Entwicklung mit PHP – von APIs bis zu CMS-Anbindungen.",
  // },
  // {
  //   path: "icons/mysql.svg",
  //   name: "mySQL",
  //   description:
  //     "Zuverlässige Datenbanklösungen mit mySQL – sicher, performant, skalierbar.",
  // },
  {
    path: "icons/skills/figma.svg",
    name: "Figma",
    description:
      "Nahtlose Zusammenarbeit mit Designern durch Figma – vom Konzept bis zum finalen Pixel.",
  },
  // {
  //     path: 'icons/materialdesign.svg',
  //     name: 'Material Design',
  //     description: 'Konsistente UI-Erlebnisse mit Googles Designsystem – modern, zugänglich und intuitiv umgesetzt.'
  // },
];





const services = [
  {
    path: "icons/agencies/design.svg",
    title: "Design zu Code",
    text: "Ich setze Ihre Designvorlagen präzise und responsiv in sauberen, wartbaren Code um – pixelgenau und browserübergreifend.",
  },
  {
   path: "icons/agencies/code.svg",
    title: "Moderne Frontend-Entwicklung",
    text: "Entwicklung moderner Benutzeroberflächen mit HTML, CSS, JavaScript und Frameworks wie React oder Angular – stets performant und barrierefrei.",
  },
  {
    path: "icons/agencies/responsive.svg",
    title: "Responsives Webdesign",
    text: "Ihre Website funktioniert und sieht auf allen Geräten optimal aus – vom Smartphone bis zum 4K-Monitor.",
  },
  // {
  //   path: "icons/maintenance.svg",
  //   title: "Sauberer & wartbarer Code",
  //   text: "Ich schreibe strukturierten/agencies, gut dokumentierten Code, der langfristig wartbar und erweiterbar bleibt.",
  // },

  {
    path: "icons/agencies/performance.svg",
    title: "Optimierung für Performance",
    text: "Ich achte auf schnelle Ladezeiten, optimierte Assets und Best Practices – für eine bessere User Experience und SEO.",
  },
  {
    path: "icons/agencies/teamwork.svg",
    title: "Effiziente Zusammenarbeit",
    text: "Klare Kommunikation, transparente Abläufe und reibungslose Übergabe – ich integriere mich nahtlos in bestehende Workflows.",
  },
  {
    path: "icons/agencies/component.svg",
    title: "Komponentenbasierte Entwicklung",
    text: "Ich entwickle UI-Komponenten strukturiert und wiederverwendbar – z. B. für Design-Systeme mit Storybook oder Frameworks.",
  },
  {
    path: "icons/agencies/shuffle.svg",
    title: "Cross-Browser-Kompatibilität",
    text: "Ich stelle sicher, dass Ihre Website in allen gängigen Browsern einheitlich funktioniert und professionell aussieht – inklusive sauberer Fallbacks bei Bedarf.",
  },
  {
    path: "icons/agencies/shoppingcart.svg", // Beispiel-Icon – ggf. Shopify-Logo verwenden
    title: "Storefronts als Headless-Lösung",
    text: "Ich entwickle individuelle Frontends für Shopify als Headless-Lösung mit modernen Frameworks und APIs, ganz nach Projektanforderung.",
  }
];


const colors = [
  '#1E90FF',
  '#FF6F00',
  '#E91E63',
  '#4CAF50',
  '#9C27B0',
  '#FFD600',
  '#00BCD4',
  '#F44336'
];

const colorClasses = [
  'blue',
  'orange',
  'pink',
  'green',
  'violett',
  'yellow',
  'turquoise',
  'red'
];


const apps = [
  {
    title: "JOIN Business",
    imagePath: "img/join.webp",
    stack: [
      "icons/skills/html.svg",
      "icons/skills/css.svg",
      "icons/skills/javascript.svg",
      "icons/skills/firebase.svg",
    ],
    description:
      "Join ist eine intuitive Multi-Device-Anwendung zur Aufgabenverwaltung im Stil eines Kanban-Boards. Aufgaben lassen sich per Drag & Drop zwischen den Bearbeitungsphasen verschieben. Jeder Task kann gezielt einzelnen Nutzern zugewiesen werden – ideal für Teamarbeit und strukturierte Workflows.",
    link: "https://www.maple-websolutions.de/join",
    duration: "3 Wochen",
    show: true,
  },
  {
    title: "DABubble",
    imagePath: "/img/dabubble.webp",
    stack: [
      "icons/skills/html.svg",
      "icons/skills/css.svg",
      "icons/skills/typescript.svg",
      "icons/skills/angular.svg",
      "icons/skills/firebase.svg",
    ],
    description:
      "DABubble ist ein Slack-Klon. Mit einer intuitiven Benutzeroberfläche, Echtzeitnachrichten und leistungsstarker Kanalorganisation fördert sie effizientes Arbeiten in Gruppen. Entwickelt wurde die Anwendung mit Angular und TypeScript – für maximale Performance und Skalierbarkeit im modernen Web.",
    link: "https://www.maple-websolutions.de/dabubble",
    duration: "5 Wochen",
    show: true,
  },
  {
    title: "Todo App",
    imagePath: "/img/todolist.webp",
    stack: [
      "icons/skills/html.svg",
      "icons/skills/css.svg",
      "icons/skills/typescript.svg",
      "icons/skills/react.svg",
    ],
    description:
      "Mit dieser Desktop-Anwendung kannst du deine Aufgaben einfach anlegen, verwalten und priorisieren. Die App wurde mit React und TypeScript entwickelt und bietet eine übersichtliche Benutzeroberfläche für strukturierte Tagesplanung. Ob Termine, Notizen oder Prioritäten – behalte alles im Blick und steigere deine Produktivität.",
    link: "https://www.maple-websolutions.de/todoapp",
    duration: "3 Tage",
    show: true,
  },
  {
    title: "Bewerbungsmanager",
    imagePath: "img/bewerbung_titelphoto.webp",
    stack: [
      "icons/skills/html.svg",
      "icons/skills/css.svg",
      "icons/skills/typescript.svg",
      "icons/skills/react.svg",
      "icons/skills/firebase.svg",
    ],
    description:
      "Mit dem Bewerbungsmanager kannst du Bewerbungen erfassen, Stellenanzeigen auf eine Merkliste setzen und jederzeit den aktuellen Status deiner Bewerbungen und Termine im Blick behalten. Einfach, übersichtlich und ideal für deine Jobsuche.",
    link: "https://www.maple-websolutions.de/applications",
    duration: "2 Wochen",
    show: true,
  },
];

const websites = [
  // {
  //     title: 'RaysGarden',
  //     imagePath: 'img/raysgarden.webp',
  //     stack: [],
  //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus harum blanditiis voluptatum itaque eos molestiae, doloribus minima commodi fugit impedit, et eveniet hic, illum vero provident pariatur porro distinctio?',
  //     link: '',
  //     duration: '',
  //     show: false,
  // },
  // {
  //     title: 'Personal Website',
  //     imagePath: 'img/natalie.webp',
  //       stack: [
  //     "icons/skills/html.svg",
  //     "icons/skills/css.svg",
  //     "icons/skills/javascript.svg",
  //   ],
  //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus harum blanditiis voluptatum itaque eos molestiae, doloribus minima commodi fugit impedit, et eveniet hic, illum vero provident pariatur porro distinctio?',
  //     link: 'https://www.natalie-schlindwein.com',
  //     duration: '',
  //     show: false,
  // },
  {
    title: "Personal Website",
    imagePath: "img/johannes.webp",
    stack: [
      "icons/skills/html.svg",
      "icons/skills/css.svg",
      "icons/skills/typescript.svg",
      "icons/skills/angular.svg",
    ],
    description:
      "Diese Website wurde im Rahmen meiner Abschlussarbeit als Softwareentwickler entwickelt. Sie dient nicht nur als persönliches Portfolio, sondern stellt auch meine Fähigkeiten und Erfahrungen als Entwickler vor. Auf der Seite finden Besucher detaillierte Informationen zu den Technologien, mit denen ich gearbeitet habe, sowie zu den Projekten, die ich während meiner Ausbildung und darüber hinaus realisiert habe.",
    link: "https://www.johannes-roth.de",
    duration: "2 Wochen",
    show: true,
  },
];