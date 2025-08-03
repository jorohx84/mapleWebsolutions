function renderSkillIcons() {
  let skillIcon = document.getElementById("skillIcons");
  skillIcon.innerHTML = "";
  for (let index = 0; index < icons.length; index++) {
    const ICON = icons[index];
    skillIcon.innerHTML += ` <div class="flipCard" id="skillIcon${index}">
        <div class="flipCardInner">
        <div class="flipCardFront">
          <img src="${ICON.path}" loading="lazy" alt="">
        </div>
         <div class="flipCardBack">
         <span>${ICON.name}</span>
         </div>
      </div>
    </div>`;
  }
}

function renderSkillIconsResp(){
  const skillIconsRef=document.getElementById('skillIconsResp');
skillIconsRef.innerHTML='';
for (let index = 0; index < icons.length; index++) {
  const icon = icons[index];
  skillIconsRef.innerHTML+=`<div class="flipCardInner cardRespSize">
                              <img src="${icon.path}">

                            </div>`;
}
}