



function getServiceCardsTemplate(card, cardColor, index) {
  return `    <div class="serviceCard">
                <div class="cardIcon ${cardColor}"">
                  <img class="cardImage" src="${card.path}" alt="">
                </div>
                <h4>${card.title}</h4>
                <div class="cardLine ${cardColor}"></div>
                <p class="serviceText">${card.text}</p>
    </div>`;
}


function getProjectCardTemplate(project, index){
  return ` <img onclick="showProjectInfos(${index})" class="mockup" src="${project.imagePath}">`;
}



function getProjectsTemplate(project, index, divID){
    return`
                        <div class="viewContainer">
                        <button class="closeBtn"><img src="icons/global/close_blue.svg"></button>
                        <h1 class="space">PROJEKTDETAILS</h1>
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
                            <div class="navigation">
                              <button class="navibtn" onclick="step(${index}, '${divID}','back', event)"><img class="navileft" src="icons/global/arrow_left_blue.svg"></button>
                              <button class="navibtn" onclick="step(${index}, '${divID}','forward', event)"><img class="naviright" src="icons/global/arrow_right_blue.svg"</button>
                            </div>
                        
                            <button onclick="window.open('${project.link}', '_blank')" class="liveBtn">zum Projekt </button>
                       
                        </div>
                        </div>
                        
                       `
}