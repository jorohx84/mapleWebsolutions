const apps = [
  {
    title: "JOIN Business",
    imagePath: "img/join.webp",
    stack: [
      "icons/html.svg",
      "icons/css.svg",
      "icons/javascript.svg",
      "icons/firebase.svg",
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
      "icons/html.svg",
      "icons/css.svg",
      "icons/typescript.svg",
      "icons/angular.svg",
      "icons/firebase.svg",
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
      "icons/html.svg",
      "icons/css.svg",
      "icons/typescript.svg",
      "icons/react.svg",
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
      "icons/html.svg",
      "icons/css.svg",
      "icons/typescript.svg",
      "icons/react.svg",
      "icons/firebase.svg",
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
  //     title: 'Natalie Schlindwein',
  //     imagePath: 'img/natalie.png',
  //     stack: [],
  //     description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus harum blanditiis voluptatum itaque eos molestiae, doloribus minima commodi fugit impedit, et eveniet hic, illum vero provident pariatur porro distinctio?',
  //     link: '',
  //     duration: '',
  //     show: false,
  // },
  {
    title: "Johannes Roth",
    imagePath: "img/johannes.webp",
    stack: [
      "icons/html.svg",
      "icons/css.svg",
      "icons/typescript.svg",
      "icons/angular.svg",
    ],
    description:
      "Diese Website wurde im Rahmen meiner Abschlussarbeit als Softwareentwickler entwickelt. Sie dient nicht nur als persönliches Portfolio, sondern stellt auch meine Fähigkeiten und Erfahrungen als Entwickler vor. Auf der Seite finden Besucher detaillierte Informationen zu den Technologien, mit denen ich gearbeitet habe, sowie zu den Projekten, die ich während meiner Ausbildung und darüber hinaus realisiert habe.",
    link: "https://www.johannes-roth.de",
    duration: "2 Wochen",
    show: true,
  },
];

const projects = {
  apps: apps,
  websites: websites,
};

function renderprojects() {
  renderProjectList("apps");
  renderProjectList("websites");
}

function renderProjectList(divID) {
  const projectArray = projects[divID];
  console.log(projectArray);

  const div = document.getElementById(divID);
  div.innerHTML = "";
  for (let index = 0; index < projectArray.length; index++) {
    const project = projectArray[index];
    if (project.show === true) {
      div.innerHTML += `<div onclick="openOverlay(${index}, '${divID}')" class="projectCard">
            <img src="${project.imagePath}" alt="">
           
                            </div>`;
    }
  }
}

function openOverlay(index, divID) {
  const overlay = document.getElementById("projectsOverlay");
  overlay.classList.remove("dnone");
  renderOverlayView(index, divID, overlay);
  document.getElementById("body").style.overflowY = "hidden";
}

function renderOverlayView(index, divID, overlay) {
  const projectArray = projects[divID];
  console.log(projectArray);
  overlay.innerHTML = "";
  const project = projectArray[index];
  console.log(project);
  overlay.innerHTML += getProjectsTemplate(project, index, divID);
}

function renderStack(index, divID) {
  const projectArray = projects[divID];
  const project = projectArray[index];
  const stack = project.stack;

  let stackHTML = "";
  for (let stackIndex = 0; stackIndex < stack.length; stackIndex++) {
    const stackImage = stack[stackIndex];
    console.log(stackImage);
    stackHTML += `<img class="stacks" src="${stackImage}" alt="">`;
  }
  return stackHTML;
}

function step(index, divID, step, event) {
  let stepIndex = step === "back" ? index - 1 : index + 1;
  const projectArray = projects[divID];
  console.log(stepIndex);
  if (stepIndex < 0) {
    stepIndex = projectArray.length - 1;
  }
  if (stepIndex >= projectArray.length) {
    stepIndex = 0;
  }
  const overlay = document.getElementById("projectsOverlay");
  renderOverlayView(stepIndex, divID, overlay);
  event.stopPropagation();
}

function closeOverlay() {
  const overlay = document.getElementById("projectsOverlay");
  overlay.classList.add("dnone");
  document.getElementById("body").style.overflowY = "unset";
}


