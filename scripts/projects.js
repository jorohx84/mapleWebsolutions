const apps = [
    {
        title: 'Join',
        imagePath: 'img/join.png',
        stack: ['icons/html.svg', 'icons/css.svg', 'icons/javascript.svg', 'icons/firebase.svg',],
        description: '',
        link: '',
        show: true,
    },
    {
        title: 'DABubble',
        imagePath: '/img/dabubble.png',
        stack: [],
        description: '',
        link: '',
        show: true,
    },
];

const websites = [
    {
        title: 'RaysGarden',
        imagePath: 'img/raysgarden.png',
        stack: [],
        description: '',
        link: '',
        show: true,
    },
    {
        title: 'Natalie Schlindwein',
        imagePath: 'img/natalie.png',
        stack: [],
        description: '',
        link: '',
        show: true,
    },
    {
        title: 'Johannes Roth',
        imagePath: 'img/johannes.png',
        stack: [],
        description: '',
        link: '',
        show: true,
    },
];

const projects = {
    apps: apps,
    websites: websites,
}

function renderprojects() {
    renderApps('apps');
    renderApps('websites');
}

function renderApps(divID) {

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
    console.log(index);
    console.log(divID);
    const overlay = document.getElementById('projectsOverlay');
    overlay.classList.remove('dnone');
    renderOverlayView(index, divID, overlay);


}


function renderOverlayView(index, divID, overlay) {
    const projectArray = projects[divID];
    console.log(projectArray);
    overlay.innerHTML = '';
    const project = projectArray[index];
    console.log(project);
    overlay.innerHTML += `<button class="closeButton">X</button>
                        <div class="viewContainer">
                        <div class="viewContent">
                        <img class="projectImage" src="${project.imagePath}" alt="">
                        
                           <div class="projectDetails">
                             <span>${project.title}</span>
                            <span>${project.description}</span>
                             <div class="stack">${renderStack(index, divID)}</div>
                         </div>
                        
                        
                        
                        </div>
       
    
                         <div class="btnContainer">
                        <button onclick="step(${index}, '${divID}','back', event)"><</button>
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
}