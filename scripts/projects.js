// const projects = {
//   apps: apps,
//   websites: websites,
// };
const textList = [];

function renderProjects() {
  const projects = buildProjectsList()
  const projectsRef = document.getElementById('projectListContainer');
  projectsRef.innerHTML = '';
  for (let index = 0; index < projects.length; index++) {
    const project = projects[index];
    projectsRef.innerHTML += getProjectsTemplate(project, index);

    renderStack(projects, index);
  }


}

function renderStack(projects, index) {
  const stack = projects[index].stack;
  const stackRef = document.getElementById(`stack${index}`);
  stackRef.innerHTML = '';
  for (let index = 0; index < stack.length; index++) {
    const stackImage = stack[index];
    stackRef.innerHTML += `<img class="stackImage" src="${stackImage}">`
  }

}

function buildProjectsList() {
  const projectsList = []
  pushToArray(projectsList, apps);
  pushToArray(projectsList, websites);
  return projectsList
}

function pushToArray(list, projectArray) {

  for (let index = 0; index < projectArray.length; index++) {
    const project = projectArray[index]
    list.push(project);
  }
}


// function getCardHeight() {
//   const textRefs = document.getElementsByClassName('text');
//   const textList = [];
//   for (let index = 0; index < textRefs.length; index++) {
//     const text = textRefs[index];
//     text.style.minHeight = `100px`;
//     const textRect = text.getBoundingClientRect();
//     textList.push(textRect);
//   }
//   const sortedList = sortByHeight(textList);

//   setHeight(sortedList, textRefs)

// }

// function setHeight(sortedList, textRefs) {
//   const heightRef = sortedList[0].height;
//   for (let index = 0; index < textRefs.length; index++) {
//     const text = textRefs[index];
//     text.style.minHeight = `${heightRef}px`;
//   }
// }

// function sortByHeight(textList) {
//   const sortedList = [...textList].sort((a, b) => b.height - a.height);
//   return sortedList;
// }


// window.addEventListener('load',()=>{

// renderProjects();


// } );
// window.addEventListener('resize', getCardHeight);


// function getScrollbarPosition() {
//   if (window.innerWidth < 500) return
//   const dots = document.getElementsByClassName('dot');
//   const scrollbar = document.getElementById('verticalBar');
//   const scrollbarRect = scrollbar.getBoundingClientRect();
//   const divRef = document.getElementById('projects');
//   const divRect = divRef.getBoundingClientRect();
//   const lastIndex = dots.length - 1;
//   const startDot = dots[0];
//   const finalDot = dots[lastIndex];
//   const startDotRect = startDot.getBoundingClientRect();
//   const finalDotRect = finalDot.getBoundingClientRect();
//   const currentHeight = finalDotRect.bottom - startDotRect.top;
//   scrollbar.style.top = `${startDotRect.top - divRect.top}px`;
//   const scrollbarPosition = startDotRect.left + (startDotRect.width / 2) - divRect.left - (scrollbarRect.width / 2);
//   scrollbar.style.left = `${scrollbarPosition}px`
//   scrollbar.style.height = `${currentHeight}px`;
// }

// function scrollVerticalBar() {
//   if (window.innerWidth < 500) return
//   const startpoint = window.innerHeight * 0.5;
//   const barInner = document.getElementById('verticalBarInner');
//   const bar = document.getElementById('verticalBar');
//   const barInnerRect = barInner.getBoundingClientRect();
//   const barRect = bar.getBoundingClientRect();
//   let currentHeight = getCurrentHeight(startpoint, barRect, barInnerRect);
//   barInner.style.height = `${currentHeight}%`;
//   giveDotsHighlight(barInnerRect);
// }

// function getCurrentHeight(startpoint, barRect, barInnerRect) {
//   let currentHeight;
//   const barHeight = barRect.bottom - barRect.top;
//   const innerHeight = startpoint - barInnerRect.top
//   if (startpoint < barRect.top) {
//     currentHeight = 0;
//   } else if (startpoint > barRect.top && startpoint < barRect.bottom) {
//     currentHeight = (innerHeight / barHeight) * 100;
//   } else if (startpoint > barRect.bottom) {
//     currentHeight = 100;
//   }
//   return currentHeight
// }

// function giveDotsHighlight(barInnerRect) {
//   const dots = document.getElementsByClassName('dot');
//   const dotsInner = document.getElementsByClassName('dotInner');

//   for (let index = 0; index < dots.length; index++) {
//     const dot = dots[index];
//     const innerDot = dotsInner[index]
//     const dotRect = dot.getBoundingClientRect().top;
//     if (dotRect < barInnerRect.bottom) {
//       innerDot.classList.add('animateDot');
//     } else {
//       innerDot.classList.remove('animateDot');
//     }

//   }
// }

// window.addEventListener('load', ()=>{scrollVerticalBar()});
// window.addEventListener('scroll', ()=>{scrollVerticalBar(); getScrollbarPosition();})
// window.addEventListener('resize', getScrollbarPosition);



// function renderprojects() {
//   renderProjectList("apps");
//   renderProjectList("websites");
//   const projects = buildProjectsList();
//   const div = document.getElementById('projectList');
//    div.innerHTML = "";
//   console.log(projects);
//   for (let index = 0; index < projects.length; index++) {
//     const project = projects[index];
//       div.innerHTML += `<div onclick="openOverlay(${index})" class="projectCard">
//             <img src="${project.imagePath}" alt="">

//                             </div>`;
//     }
//   }


// function renderProjectList(divID) {
//   const projectArray = projects[divID];
//   console.log(projectArray);

//   const div = document.getElementById(divID);
//   div.innerHTML = "";
//   for (let index = 0; index < projectArray.length; index++) {
//     const project = projectArray[index];

//     if (project.show === true) {
//       div.innerHTML += `<div onclick="openOverlay(${index}, '${divID}')" class="projectCard">
//             <img src="${project.imagePath}" alt="">

//                             </div>`;
//     }
//   }
// }

// function openOverlay(index) {
//   const overlay = document.getElementById("projectsOverlay");
//   overlay.classList.remove("dnone");
//   renderOverlayView(index, overlay);
//   document.getElementById("body").style.overflowY = "hidden";
// }

// function renderOverlayView(index, overlay) {
//   const projectArray = buildProjectsList();
//   console.log(projectArray);
//   overlay.innerHTML = "";
//   const project = projectArray[index];
//   console.log(project);
//   overlay.innerHTML += getProjectsTemplate(project, index);
// }

// function renderStack(index) {
//   const projectArray = buildProjectsList();
//   const project = projectArray[index];
//   const stack = project.stack;

//   let stackHTML = "";
//   for (let stackIndex = 0; stackIndex < stack.length; stackIndex++) {
//     const stackImage = stack[stackIndex];
//     console.log(stackImage);
//     stackHTML += `<img class="stacks" src="${stackImage}" alt="">`;
//   }
//   return stackHTML;
// }

// function step(index, step, event) {
//   let stepIndex = step === "back" ? index - 1 : index + 1;
//   const projectArray = buildProjectsList();
//   console.log(stepIndex);
//   if (stepIndex < 0) {
//     stepIndex = projectArray.length - 1;
//   }
//   if (stepIndex >= projectArray.length) {
//     stepIndex = 0;
//   }
//   const overlay = document.getElementById("projectsOverlay");
//   renderOverlayView(stepIndex, divID, overlay);
//   event.stopPropagation();
// }

// function closeOverlay() {
//   const overlay = document.getElementById("projectsOverlay");
//   overlay.classList.add("dnone");
//   document.getElementById("body").style.overflowY = "unset";
// }
