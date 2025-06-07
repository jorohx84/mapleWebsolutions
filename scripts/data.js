const packages = [

    {
        'category': "BASIC",
        'description': 'Erstellung einer statischen Website und grundlegenden Funktionen',
        'service': [
            'OnePager mit Bildern und Texten',
            'Menüleiste mit Links', 'Legal Sites',
            'Responsive Design'
        ],
        'sort': 'package',
        'packID': '1',

    },
    {
        'category': "PRO",
        'description': 'Erstellung einer dynamischen Website. Individuelles Design, erweiterte Funktionen.',
        'service': [
            'Mehrseitge Website',
            'Bilder und Texte',
            'Animationen',
            'Kontaktformular',
            'Angebotsanfrage-Formular',
            'Call-to-Action-Elemente'
        ],
        'sort': 'package',
        'packID': '2',
    },

];

const services = [
    {
        'category': "Suchmaschinenoptimerung",
        'description': 'Optimierung von Meta-Tags, Ladegeschwindigkeit und URL-Strukturen für bessere Auffindbarkeit.',
        'serviceID': '1',
        'sort': 'service',
    },
    {
        'category': "Bilder und Grafiken",
        'description': 'Bereitstellen von Grafiken und Bildern für Ihre Website.',
        'serviceID': '2',
        'sort': 'service',
    },
    {
        'category': "Texte",
        'description': 'Erstellen und überarbeiten von Texten.',
        'serviceID': '3',
        'sort': 'service',
    },
    {
        'category': "Domain",
        'description': ' Beratung bei der Registrierung einer Domain sowie die anschließende Konfiguration.',
        'serviceID': '4',
        'sort': 'service',
    },
    {
        'category': "Wartung und Support",
        'description': 'Regelmäßige Wartung, Performance-Checks und Sicherheitsprüfungen.',
        'serviceID': '5',
        'sort': 'service',
    },
    {
        'category': "Animationen",
        'description': 'Intagration animierter Texte und Grafiken',
        'serviceID': '6',
        'sort': 'service',
    },


];

// const advantages = [
//     {
//         title: "REICHWEITE",
//         description: "Mit einer professionellen Website können Sie sicherstellen, dass Ihr Unternehmen rund um die Uhr online sichtbar ist. Durch gezielte SEO-Optimierung steigern Sie Ihre Sichtbarkeit in den Suchergebnissen von Google, was zu mehr organischem Traffic und einer höheren Conversion-Rate führt."
//     },
//     {
//         title: "MARKENIMAGE STÄRKEN",
//         description: "Eine gut gestaltete Website vermittelt Vertrauen und Professionalität. Wenn Ihre Kunden eine benutzerfreundliche und optisch ansprechende Seite besuchen, wird ihre Bereitschaft, mit Ihnen Geschäfte zu machen, erheblich steigen. Eine markenkonforme Gestaltung stärkt zudem Ihre Wiedererkennbarkeit."
//     },
//     {
//         title: "CONVERSION OPTIMIERUNG",
//         description: "Eine gut optimierte Website ermöglicht es Ihnen, gezielt Leads zu generieren. Mit Call-to-Actions (CTAs), Kontaktformularen und gezielten Landing Pages können Sie die Conversion-Rate deutlich steigern und potenzielle Kunden in treue Käufer verwandeln."
//     },
//     {
//         title: "BESSERE KUNDENBINDUNG",
//         description: "Moderne Websites bieten Ihnen die Möglichkeit, Ihren Besuchern eine maßgeschneiderte Erfahrung zu bieten. Mit interaktiven Elementen, personalisierten Angeboten oder einem Blog können Sie eine langfristige Kundenbindung aufbauen und Ihre Kunden regelmäßig auf dem Laufenden halten."
//     },
//     {
//         title: "EFFIZIENTES MARKETING",
//         description: "Im Vergleich zu traditionellen Werbemaßnahmen wie Printanzeigen oder TV-Spots ist eine professionelle Website eine kostengünstige und effektive Plattform, um Ihre Produkte und Dienstleistungen zu bewerben. Mit gezieltem Online-Marketing (z. B. Google Ads, Social Media) steigern Sie Ihre Reichweite in kürzester Zeit."
//     },
//     {
//         title: "MARKTANALYSEN IN ECHTZEIT",
//         description: "Durch den Einsatz von Tools wie Google Analytics und anderen Tracking-Tools können Sie das Verhalten Ihrer Website-Besucher in Echtzeit überwachen und schnell Anpassungen vornehmen. So können Sie Ihre Marketingstrategien optimieren und die Nutzererfahrung (UX) weiter verbessern."
//     },

// ];

const images = [
    'icons/pin-location.svg',
    'icons/like.svg',
    'icons/phone-calling.svg',
    'icons/user-heart.svg',
    'icons/document.svg',
    'icons/analytics.svg',

];

const icons = [
    {
        path: 'icons/html.svg',
        name: 'HTML 5',
        description: 'Sauberes, semantisches HTML als stabiles Fundament für jede moderne Website.'
    },
    {
        path: 'icons/css.svg',
        name: 'CSS 3',
        description: 'Responsives, pixelgenaues Styling – von Flexbox bis Animationen.'
    },
    {
        path: 'icons/javascript.svg',
        name: 'JavaScript',
        description: 'Interaktive Web-Erlebnisse durch performanten und wartbaren JavaScript-Code.'
    },
    {
        path: 'icons/angular.svg',
        name: 'Angular',
        description: 'Strukturierte Webanwendungen mit Angular – skalierbar, robust und zukunftssicher.'
    },
    {
        path: 'icons/react.svg',
        name: 'React',
        description: 'Strukturierte Webanwendungen mit Angular – skalierbar, robust und zukunftssicher.'
    },
    {
        path: 'icons/typescript.svg',
        name: 'TypeScript',
        description: 'Typsicherheit und saubere Architektur dank TypeScript – für langfristige Codequalität.'
    },
    {
        path: 'icons/firebase.svg',
        name: 'Firebase',
        description: 'Echtzeitdaten, Authentifizierung und Hosting – direkt aus der Cloud mit Firebase.'
    },
    {
        path: 'icons/php.svg',
        name: 'PHP',
        description: 'Solide Backend-Entwicklung mit PHP – von APIs bis zu CMS-Anbindungen.'
    },
    {
        path: 'icons/mysql.svg',
        name: 'mySQL',
        description: 'Zuverlässige Datenbanklösungen mit mySQL – sicher, performant, skalierbar.'
    },
    {
        path: 'icons/figma.svg',
        name: 'Figma',
        description: 'Nahtlose Zusammenarbeit mit Designern durch Figma – vom Konzept bis zum finalen Pixel.'
    },
    // {
    //     path: 'icons/materialdesign.svg',
    //     name: 'Material Design',
    //     description: 'Konsistente UI-Erlebnisse mit Googles Designsystem – modern, zugänglich und intuitiv umgesetzt.'
    // },
];

const skills = [
    {
        title: "WEBDESIGN UI/UX-DESIGN",
        text: "Gestaltung ansprechender und benutzerfreundlicher Oberflächen mit Fokus auf optimale Nutzererfahrung."
    },
    {
        title: "PROGRAMMIERUNG",
        text: "Entwicklung von dynamischen Frontend-Lösungen mit HTML5, CSS3, JavaScript, Angular und TypeScript."
    },
    {
        title: "SUCHMASCHINEN OPTIMIERUNG",
        text: "Optimierung von Meta-Tags, Ladegeschwindigkeit und URL-Strukturen für bessere Auffindbarkeit."
    },
    {
        title: "WEB PERFORMANCE",
        text: "Optimierung der Ladegeschwindigkeit und Durchführung von Performance-Audits für eine schnelle Website."
    },



];

const skillIcons = [
    'icons/design.svg',
    'icons/develop.svg',
    'icons/glass.svg',
    'icons/performance.svg',
];

const serviceList = [
    {
        text: 'Landingpages, Websites, Web-Apps'
    },
    {
        text: 'Figma -> Code. Schnell, responsiv, wartbar.'
    },
    {
        text: 'Umsetzung direkt aus Figma, XD oder Sketch'
    },
    {
        text: 'Pixelgenau, responsiv, komponentenbasiert'
    },
    {
        text: 'breiter Techstack: HTML, CSS, JavaScript, TypeScript, React und Angular'
    },
    {
        text: 'Saubere Übergabe & Dokumentation'
    },
    {
        text: 'Zuverlässige Kommunikation & Projektabwicklung'
    },
    {
        text: 'Zusammenarbeit auf Augenhöhe'
    },
    {
        text: 'White-Label möglich'
    }



];

const advantages = [
    {
        text:'Technisches Know-how trifft Designverständnis',
    },
      {
        text:'Keine Einarbeitung nötig – wir kennen Agenturprozesse',
    },
      {
        text:'Flexibel einsetzbar (auch langfristig oder als White-Label-Partner)',
    },
      {
        text:'Projekte skalierbar – vom Onepager bis zur Komponentensammlung',
    },

];

const process=[
    {
        text:'Design übergeben (Figma, Sketch etc.)',
    },
    {
        text:'Technische Einschätzung & Aufwandsschätzung',
    },
    {
        text:'Entwicklung & Testing',
    },
    {
        text:'Übergabe oder Livegang',
    },
    {
        text:'Betreuung (optional)',
    },

];

// Leistungen für Agenturen & Designstudios
// Als spezialisierter Frontend-Entwickler unterstütze ich Agenturen und kreative Teams dabei, aus starken Designs ebenso starke digitale Erlebnisse zu machen – präzise, schnell und zuverlässig. Hier ein Auszug meiner Leistungen: