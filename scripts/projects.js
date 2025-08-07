// const projects = {
//   apps: apps,
//   websites: websites,
// };

function renderProjects() {
  const projects = buildProjectsList()
  const projectsRef = document.getElementById('projectListContainer');
  projectsRef.innerHTML = '';
  for (let index = 0; index < projects.length; index++) {
    const project = projects[index];
    projectsRef.innerHTML += `  <div class="projectRow">
                                    <div class="dot" id="dot">
                                    <div class="dotInner" id="dotInner"></div>
                                    </div>
                                    <div class="projectCard">

                                      <div class="projectInfoContainer">
                                         <h3 class="projectRespTitle">${project.title}</h3>
                                          <img class="mockup" src="${project.imagePath}">
                                          <div class="projectInfos">
                                              <h3 class="projectTitle">${project.title}</h3>
                                              <p>${project.description}</p>
                                              <div class="duration">
                                              <span>Bearbeitungszeit:</span>
                                              <span> ${project.duration}</span>
                                           </div>
                                          
                                      </div>
                                  
                                    
                                    </div>
                                       <div class="stack" id="stack${index}"></div>
                                       <div class="projectCardBtn">
                                        <button onclick="window.location.href='${project.link}'">zum Projekt</button>
                                       </div>
                                        
                                    </div>
                                    
                                  </div>`

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


function getScrollbarPosition() {
  if (window.innerWidth<500) return
  const dots = document.getElementsByClassName('dot');
  const scrollbar = document.getElementById('verticalBar');
  const scrollbarRect = scrollbar.getBoundingClientRect();
  const divRef = document.getElementById('projects');
  const divRect = divRef.getBoundingClientRect();
  const lastIndex = dots.length - 1;
  const startDot = dots[0];
  const finalDot = dots[lastIndex];
  const startDotRect = startDot.getBoundingClientRect();
  const finalDotRect = finalDot.getBoundingClientRect();
  const currentHeight = finalDotRect.bottom - startDotRect.top;
  scrollbar.style.top = `${startDotRect.top - divRect.top}px`;
  const scrollbarPosition = startDotRect.left + (startDotRect.width / 2) - divRect.left - (scrollbarRect.width / 2);
  scrollbar.style.left = `${scrollbarPosition}px`
  scrollbar.style.height = `${currentHeight}px`;
}

function scrollVerticalBar() {
   if (window.innerWidth<500) return
  const startpoint = window.innerHeight * 0.5;
  const barInner = document.getElementById('verticalBarInner');
  const bar = document.getElementById('verticalBar');
  const barInnerRect = barInner.getBoundingClientRect();
  const barRect = bar.getBoundingClientRect();
  let currentHeight = getCurrentHeight(startpoint, barRect, barInnerRect);
  barInner.style.height = `${currentHeight}%`;
  giveDotsHighlight(barInnerRect);
}

function getCurrentHeight(startpoint, barRect, barInnerRect) {
  let currentHeight;
  const barHeight = barRect.bottom - barRect.top;
  const innerHeight = startpoint - barInnerRect.top
  if (startpoint < barRect.top) {
    currentHeight = 0;
  } else if (startpoint > barRect.top && startpoint < barRect.bottom) {
    currentHeight = (innerHeight / barHeight) * 100;
  } else if (startpoint > barRect.bottom) {
    currentHeight = 100;
  }
  return currentHeight
}

function giveDotsHighlight(barInnerRect) {
    const dots = document.getElementsByClassName('dot');
    const dotsInner= document.getElementsByClassName('dotInner');
    
    for (let index = 0; index < dots.length; index++) {
        const dot = dots[index];
        const innerDot=dotsInner[index]
        const dotRect = dot.getBoundingClientRect().top;
        if (dotRect < barInnerRect.bottom) {
            // dot.classList.add('changeColor');
            // dot.classList.add('animateImage');
            // changeLine(index, 'add');
            innerDot.classList.add('animateDot');
        } else {
            // dot.classList.remove('changeColor');
            // dot.classList.remove('animateImage');
            // changeLine(index, 'remove');
            innerDot.classList.remove('animateDot');
        }

    }
}

window.addEventListener('load', ()=>{scrollVerticalBar()});
window.addEventListener('scroll', ()=>{scrollVerticalBar(); getScrollbarPosition();})
window.addEventListener('resize', getScrollbarPosition);



// function renderprojects() {
//   renderProjectList("apps");
//   renderProjectList("websites");
// }

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

// function openOverlay(index, divID) {
//   const overlay = document.getElementById("projectsOverlay");
//   overlay.classList.remove("dnone");
//   renderOverlayView(index, divID, overlay);
//   document.getElementById("body").style.overflowY = "hidden";
// }

// function renderOverlayView(index, divID, overlay) {
//   const projectArray = projects[divID];
//   console.log(projectArray);
//   overlay.innerHTML = "";
//   const project = projectArray[index];
//   console.log(project);
//   overlay.innerHTML += getProjectsTemplate(project, index, divID);
// }

// function renderStack(index, divID) {
//   const projectArray = projects[divID];
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

// function step(index, divID, step, event) {
//   let stepIndex = step === "back" ? index - 1 : index + 1;
//   const projectArray = projects[divID];
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
