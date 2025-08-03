



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
  return `
                              <div class="projectCard">
                                  <div class="projectCardContent">
                                      <img class="mockup" src="${project.imagePath}">
                                      <div class="projectInfoContainer">
                                      <div class="projectTitle">
                                           <h2>${project.title}</h2>
                                          <div class=divider></div>
                                      </div>
                                          <p>${project.description}</p>
                                          <div>
                                              <span>Bearbeitungszeit:</span>
                                              <span>${project.duration}</span>
                                          </div>
                                          
                                      </div>
                                  </div>
                                  <div class="projectBtn">
                                  <div class="projectStack" id="projectStack${index}"></div>
                                    <a href="${project.link}" target_blank>zum Projekt</a>
                                  </div>
                              </div>
  `
}