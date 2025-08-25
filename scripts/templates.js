



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


// function getProjectCardTemplate(project, index) {
//   return ` <img onclick="showProjectInfos(${index})" class="mockup" src="${project.imagePath}">`;
// }



function getProjectsTemplate(project, index) {
  return `  <div class="projectRow">
                                   <!-- <div class="dot" id="dot">
                                    <div class="dotInner" id="dotInner"></div>
                                    </div>-->
                                    <div class="projectCard">

                                      <div class="projectInfoContainer">
                                         <h3 class="projectRespTitle">${project.title}</h3>
                                          <img class="mockup" src="${project.imagePath}">
                                          <div class="projectInfos">
                                              <h3 class="projectTitle">${project.title}</h3>
                                              <p class="text">${project.description}</p>
                                              <div class="duration">
                                              <span>Bearbeitungszeit:</span>
                                              <span> ${project.duration}</span>
                                           </div>
                                          <div class="stack" id="stack${index}"></div>
                                      </div>
                                  
                                    
                                    </div>
                                       
                                       <div class="projectCardBtn">
                                                                  <a href="${project.link}" target="_blank" rel="noopener noreferrer" class="liveBtn">zum Projekt</a>
                                       </div>
                                        
                                    </div>
                                    
                                  </div>`
}