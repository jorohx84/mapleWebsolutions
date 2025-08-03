



const projects = {
  apps: apps,
  websites: websites,
};

function renderProjects(headlineText){
  renderHeadline(headlineText);

  const projetctID=headlineText==='Websites'? 'websites' : headlineText==='Webshops'? console.log('webshops'):'apps';

renderProjectList(projetctID);

}

function renderHeadline(headlineText){
  const headlineRef=document.getElementById('listHeadline');
  const text=headlineText.toUpperCase();
  headlineRef.innerHTML='';
  headlineRef.innerHTML+=`${text}`;

}

function giveCardsHighlight(cardIndex){
  const cards=document.getElementsByClassName('selectionCard');
for (let index = 0; index < cards.length; index++) {
  const card = cards[index];
  if (cardIndex===index) {
    card.classList.add('cardhighlight');
  }else{
     card.classList.remove('cardhighlight');
  }
  
}
}

function renderProjectList(projetctID){
  const projectListRef=document.getElementById('projectsList');
  projectListRef.innerHTML='';
const projectArray=projects[projetctID];
if (projectArray===undefined) {
    projectListRef.innerHTML='<p class="space progress">- IN ARBEIT -</p>';
  return 
}
for (let index = 0; index < projectArray.length; index++) {
  const project = projectArray[index];
  console.log(project);
  projectListRef.innerHTML+= getProjectCardTemplate(project, index);
  renderStack(projectArray, index)
}

}

function renderStack(projectArray, index){
console.log(index);
const stackRef=document.getElementById(`projectStack${index}`);
stackRef.innerHTML='';
const stack=projectArray[index].stack;
console.log(stack);
for (let index = 0; index < stack.length; index++) {
  const stackImage = stack[index];
  
  stackRef.innerHTML+=`<img class="stackImage" src="${stackImage}">`;
}

}


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


