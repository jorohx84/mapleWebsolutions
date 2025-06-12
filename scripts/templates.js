



function getServiceCardsTemplate(card, index) {
  return `    <div class="serviceCard">
       <img class="cardImage" src="${card.path}" alt="">
       <h3>${card.title}</h3>
       <p class="serviceText">${card.text}</p>
    </div>`;
}

function getProjectsTemplate(project, index, divID){
    return`
                        <div class="viewContainer">
                        <button class="closeBtn">X</button>
                        <h1>Projektdetails</h1>
                        <div class="viewContent">
                        <img class="projectImage" src="${
                          project.imagePath
                        }" alt="">
                        
                           <div class="projectDetails">
                           <div class="detailsHeadline">
                             <h2>${project.title}</h2>
                             <div class="underline"></div>
                           </div>
                           
                            <span>${project.description}</span>
                            <span>Dauer: ${project.duration}</span>
                         
                             <div class="stack">${renderStack(
                               index,
                               divID
                             )}</div>
                         </div>
                        
                     
                        
                        </div>
       
      
                         <div class="btnContainer">
                        <button onclick="step(${index}, '${divID}','back', event)"><</button>
                        <button onclick="window.open('${
                          project.link
                        }', '_blank')" class="detailsBtn respBtn">zum Projekt </button>
                        <button onclick="step(${index}, '${divID}','forward', event)">></button>
                        </div>
                        </div>
                        
                       `
}