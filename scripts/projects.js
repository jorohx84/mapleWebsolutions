const apps = [
    {
        title: 'Join',
        imagePath: 'img/join.png',
        stack: [],
        description: '',
        link: '',
        show:true,
    },
    {
        title: 'DABubble',
        imagePath: '/img/dabubble.png',
        stack: [],
        description: '',
        link: '',
        show:true,
    },
];

const websites = [
    {
        title: 'RaysGarden',
        imagePath: 'img/raysgarden.png',
        stack: [],
        description: '',
        link: '',
        show:true,
    },
    {
        title: 'Natalie Schlindwein',
        imagePath: 'img/natalie.png',
        stack: [],
        description: '',
        link: '',
        show:true,
    },
    {
        title: 'Johannes Roth',
        imagePath: 'img/johannes.png',
        stack: [],
        description: '',
        link: '',
        show:true,
    },
];

function renderprojects() {
    renderApps('apps');
    renderApps('websites');
}

function renderApps(divID) {
    const projects = {
        apps: apps,
        websites: websites,
    }
    const projectArray = projects[divID];
    console.log(projectArray);


    const div = document.getElementById(divID);
    div.innerHTML = '';
    for (let index = 0; index < projectArray.length; index++) {
        const project = projectArray[index];
        if (project.show===true) {
            div.innerHTML += `<div class="projectCard">
            <img src="${project.imagePath}" alt="">
           
                            </div>`
        }
      
    }

}
