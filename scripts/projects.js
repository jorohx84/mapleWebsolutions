const apps = [
    {
        title: 'JOIN Business',
        imagePath: 'img/join.png',
        stack: ['icons/html.svg', 'icons/css.svg', 'icons/javascript.svg', 'icons/firebase.svg',],
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus harum blanditiis voluptatum itaque eos molestiae, doloribus minima commodi fugit impedit, et eveniet hic, illum vero provident pariatur porro distinctio?',
        link: 'https://www.johannes-roth.de/join',
        duration: '3 Wochen',
        show: true,
    },
    {
        title: 'DABubble',
        imagePath: '/img/dabubble.png',
        stack: ['icons/html.svg', 'icons/css.svg', 'icons/typescript.svg', 'icons/angular.svg', 'icons/firebase.svg',],
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus harum blanditiis voluptatum itaque eos molestiae, doloribus minima commodi fugit impedit, et eveniet hic, illum vero provident pariatur porro distinctio?',
        link: '',
        duration: '5 Wochen',
        show: true,
    },
];

const websites = [
    {
        title: 'RaysGarden',
        imagePath: 'img/raysgarden.png',
        stack: [],
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus harum blanditiis voluptatum itaque eos molestiae, doloribus minima commodi fugit impedit, et eveniet hic, illum vero provident pariatur porro distinctio?',
        link: '',
        duration: '',
        show: true,
    },
    {
        title: 'Natalie Schlindwein',
        imagePath: 'img/natalie.png',
        stack: [],
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus harum blanditiis voluptatum itaque eos molestiae, doloribus minima commodi fugit impedit, et eveniet hic, illum vero provident pariatur porro distinctio?',
        link: '',
        duration: '',
        show: true,
    },
    {
        title: 'Johannes Roth',
        imagePath: 'img/johannes.png',
        stack: [],
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit repellendus harum blanditiis voluptatum itaque eos molestiae, doloribus minima commodi fugit impedit, et eveniet hic, illum vero provident pariatur porro distinctio?',
        link: 'https://www.johannes-roth.de',
        duration: '',
        show: true,
    },
];

const projects = {
    apps: apps,
    websites: websites,
}

function renderprojects() {
    renderProjectList('apps');
    renderProjectList('websites');
}

function renderProjectList(divID) {

    const projectArray = projects[divID];
    console.log(projectArray);


    const div = document.getElementById(divID);
    div.innerHTML = '';
    for (let index = 0; index < projectArray.length; index++) {
        const project = projectArray[index];
        if (project.show === true) {
            div.innerHTML += `<div onclick="openOverlay(${index}, '${divID}')" class="projectCard">
            <img src="${project.imagePath}" alt="">
           
                            </div>`
        }

    }

}

function openOverlay(index, divID) {
    const overlay = document.getElementById('projectsOverlay');
    overlay.classList.remove('dnone');
    renderOverlayView(index, divID, overlay);
    document.getElementById('body').style.overflowY = "hidden";

}


function renderOverlayView(index, divID, overlay) {
    const projectArray = projects[divID];
    console.log(projectArray);
    overlay.innerHTML = '';
    const project = projectArray[index];
    console.log(project);
    overlay.innerHTML += `
                        <div class="viewContainer">
                        <button class="closeBtn">X</button>
                        <h1>Projektdetails</h1>
                        <div class="viewContent">
                        <img class="projectImage" src="${project.imagePath}" alt="">
                        
                           <div class="projectDetails">
                           <div class="detailsHeadline">
                             <h2>${project.title}</h2>
                             <div class="underline"></div>
                           </div>
                           
                            <span>${project.description}</span>
                            <span>Dauer: ${project.duration}</span>
                         
                             <div class="stack">${renderStack(index, divID)}</div>
                         </div>
                        
                     
                        
                        </div>
       
      
                         <div class="btnContainer">
                        <button onclick="step(${index}, '${divID}','back', event)"><</button>
                        <button onclick="window.open('${project.link}', '_blank')" class="detailsBtn respBtn">zum Projekt </button>
                        <button onclick="step(${index}, '${divID}','forward', event)">></button>
                        </div>
                        </div>
                        
                       `

}

function renderStack(index, divID) {
    const projectArray = projects[divID];
    const project = projectArray[index];
    const stack = project.stack

    let stackHTML = '';
    for (let stackIndex = 0; stackIndex < stack.length; stackIndex++) {
        const stackImage = stack[stackIndex];
        console.log(stackImage);
        stackHTML += `<img class="stacks" src="${stackImage}" alt="">`
    }
    return stackHTML
}

function step(index, divID, step, event) {
    let stepIndex = step === 'back' ? index - 1 : index + 1;
    const projectArray = projects[divID];
    console.log(stepIndex);
    if (stepIndex < 0) {
        stepIndex = projectArray.length - 1
    }
    if (stepIndex >= projectArray.length) {
        stepIndex = 0;
    }
    const overlay = document.getElementById('projectsOverlay');
    renderOverlayView(stepIndex, divID, overlay);
    event.stopPropagation();
}


function closeOverlay() {
    const overlay = document.getElementById('projectsOverlay');
    overlay.classList.add('dnone');
    document.getElementById('body').style.overflowY = "unset";
}