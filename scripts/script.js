window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

function reloadWebsite() {
  if (performance.getEntriesByType("navigation")[0].type === "reload") {
    window.location.reload(true);
  }
}

function toogleHideMenu() {
  let respMenu = document.getElementById("menu-resp");
  let body = document.getElementById("body");
  if (respMenu.classList.contains("hide-menu")) {
    respMenu.classList.add("show-menu");
    respMenu.classList.remove("hide-menu");
    body.classList.add("noscroll");
    hideLandingpageHeadline();
  } else {
    hideLandingpageHeadline();
    respMenu.classList.remove("show-menu");
    respMenu.classList.add("hide-menu");
    body.classList.remove("noscroll");
  }
}

function hideLandingpageHeadline() {
  let headline = document.getElementById("landingpage-headline");
  if (headline) {
    if (window.innerWidth < 1300) {
      if (headline.classList.contains("hideheadline")) {
        headline.classList.add("showheadline");
        headline.classList.remove("hideheadline");
      } else {
        headline.classList.add("hideheadline");
        headline.classList.remove("showheadline");
      }
    }
  }
}

function burgerAnimation() {
  let burger = document.getElementById("burger");
  let burgerScroll = document.getElementById("burger-scroll");
  burger.classList.toggle("open");
  if (burgerScroll !== null) {
    burgerScroll.classList.toggle("open");
  }
}

function fixHeader() {
  //changeHeaderColor('burger-line', 'burger-color');
  //changeHeaderColor('nav', 'navcolor');
  const header = document.getElementById("header");
  const headerScroll = document.getElementById("header-scroll");
  if (window.scrollY > 100) {
    headerScroll.classList.add("show-header");
    headerScroll.classList.remove("hide-header");
    header.classList.remove("header-opacity");
  } else if (window.scrollY < 150) {
    headerScroll.classList.remove("show-header");
    headerScroll.classList.add("hide-header");
    header.classList.add("header-opacity");
  }
}

function changeHeaderColor(idKey, classKey) {
  const container = document.getElementsByClassName(idKey);
  for (let index = 0; index < container.length; index++) {
    const CONT = container[index];
    if (window.scrollY > 100) {
      CONT.classList.add(classKey);
    } else if (window.scrollY < 100) {
      CONT.classList.remove(classKey);
    }
  }
}

function slideOutBoxes(idKey) {
  let container = document.getElementsByClassName(`${idKey}`);
  for (let index = 0; index < container.length; index++) {
    const cont = container[index];
    if (index % 2 === 0) {
      cont.classList.add("right");
    } else {
      cont.classList.add("left");
    }
  }
}

function handleScroll(idKey) {
  const childBoxes = document.querySelectorAll(`${idKey}`);
  const parent = document.getElementById("advantages");
  const windowHeight = window.innerHeight;
  const triggerPoint = windowHeight * 0.4;
  let boxTop;
  childBoxes.forEach((box) => {
    if (window.innerWidth < 1062) {
      boxTop = box.getBoundingClientRect().top;
    } else {
      boxTop = parent.getBoundingClientRect().top;
    }
    if (boxTop <= triggerPoint) {
      if (!box.classList.contains("hover")) {
        setTimeout(() => {
          box.classList.remove("nohover");
          box.classList.add("hover");
        }, 100);
      }
    } else if (box.classList.contains("hover")) {
      box.classList.remove("hover");
      box.classList.add("nohover");
    }
  });
}

function slideInOffer() {
  let offer = document.getElementById("offer");
  offer.classList.remove("offerslideout");
  offer.classList.add("offerslide");
}

function changeBodySize() {
  landingpageHeight();
  window.addEventListener("resize", landingpageHeight);
}

function landingpageHeight() {
  let body = document.getElementById("body");
  let bodyCover = document.getElementById("body-cover");
  let footer = document.getElementById("footer");
  let footerRect = footer.getBoundingClientRect();
  let footerHeight = footerRect.height;
  body.style.height = `calc(100vh + ${footerHeight}px )`;
  bodyCover.style.height = `calc(100vh + ${footerHeight}px )`;
}

function hideWelcome() {
  let sliderRef = document.getElementById("slider");
  let bodyRef = document.getElementById("body");
  setTimeout(() => {
    sliderRef.classList.add("hideWelcome");
  }, 5000);
  setTimeout(() => {
    sliderRef.style.display = "none";
    bodyRef.classList.remove("bodyHeight");
  }, 7000);
}

// function renderAdvantages() {
//     let advanceRef = document.getElementById('advantages');
//     for (let advanceIndex = 0; advanceIndex < advantages.length; advanceIndex++) {
//         const ADVANCE = advantages[advanceIndex];
//         const Image = images[advanceIndex];
//         console.log(Image);
//         advanceRef.innerHTML += getAdvantagesTemplate(advanceIndex, ADVANCE, Image);
//     }
// }

function renderSkillIcons() {
  let skillIcon = document.getElementById("skillIcons");
  skillIcon.innerHTML = "";
  for (let index = 0; index < icons.length; index++) {
    const ICON = icons[index];
    skillIcon.innerHTML += ` <div class="flipCard" id="skillIcon${index}">
        <div class="flipCardInner">
        <div class="flipCardFront">
          <img src="${ICON.path}" alt="">
        </div>
         <div class="flipCardBack">
         <span>${ICON.name}</span>
         </div>
      </div>
    </div>`;
  }
}

function renderSkills() {
  let skillRef = document.getElementById("skills");
  skillRef.innerHTML = "";
  for (let index = 0; index < skills.length; index++) {
    const SKILL = skills[index];
    skillRef.innerHTML += `<div class="row">
                    <img class="icon${index}" src="${skillIcons[index]}" loading="lazy" alt="">
                    <div class="row-text">
                        <h4 class="space">${SKILL.title}</h4>
                        <p>${SKILL.text}</p>
                    </div>`;
  }
}

function renderServiceCards() {
  const serviceRef = document.getElementById("serviceCards");

  for (let index = 0; index < services.length; index++) {
    const card = services[index];
    const indexRef = services.length / 2;

    serviceRef.innerHTML += getServiceCardsTemplate(card, index);
  }
}

function renderServices() {
  const serviceRef = document.getElementById("services");
  serviceRef.innerHTML = "";
  for (let index = 0; index < serviceList.length; index++) {
    const SERVICE = serviceList[index];
    serviceRef.innerHTML += `   <div class="serviceListRow">
                                <div class="blueCheckbox" id="blueCheckbox">
                               
                                    <img class="checkImg" src="icons/arrow_blue.svg" alt="">
                                </div>
                                <span>${SERVICE.text}</span>
                            </div>`;
  }
}

function checkBoxCheck() {
  const images = document.getElementsByClassName("checkImg");
  const trigger = window.innerHeight * 0.5;

  for (let index = 0; index < images.length; index++) {
    const IMAGE = images[index];
    const imageRect = IMAGE.getBoundingClientRect();

    if (imageRect.top < trigger) {
      // IMAGE.style.opacity="1";
      IMAGE.style.transform = "scale(1.3)";
    } else {
      // IMAGE.style.opacity="0";
      IMAGE.style.transform = "scale(1)";
    }
  }
}

function renderAdvantages() {
  const advantagesRef = document.getElementById("advantages");
  advantagesRef.innerHTML = "";
  for (let index = 0; index < advantages.length; index++) {
    const ADVANCE = advantages[index];
    advantagesRef.innerHTML += ` <div class="advantagesListRow">

                            <img class="advantagesListImage" id="advantagesListImage" src="logos/mapleIcon-bg.png"
                                alt="">
                            <span>${ADVANCE.text}</span>
                        </div>`;
  }
}

function renderProcess() {
  const processRef = document.getElementById("process");
  processRef.innerHTML = "";
  for (let index = 0; index < process.length; index++) {
    const step = process[index];
    processRef.innerHTML += ` <div class="processRow">
                             <div class="dot" id="dot">
                                <div class="dotOverlay" id="dotOverlay"></div>
                                <img src="icons/check_blue.svg" alt="">
                             </div>
                             <div class="stepCard">
                              <span>${step.text}</span>
                              </div>
                           
                        </div>`;
  }
}

function renderContent() {
  renderServiceCards();
  renderServices();
  renderAdvantages();
  renderProcess();
}

function rotateLogos() {
  const logos = document.getElementsByClassName("advantagesListImage");
  const trigger = window.innerHeight * 0.5;
  for (let index = 0; index < logos.length; index++) {
    const LOGO = logos[index];
    const logoRect = LOGO.getBoundingClientRect();
    if (logoRect.top < trigger) {
      LOGO.classList.add("logoanimation");
    } else {
      LOGO.classList.remove("logoanimation");
    }
  }
}

function getVerticalBarPosition() {
  const { barParent, barParentRect, cardRect, firstDotRect, lastDotRect } =
    getRects();
  const top = firstDotRect.top - cardRect.top;
  const bottom = lastDotRect.bottom - cardRect.top;
  const currentParentHeight = getParentBarHeight(firstDotRect, lastDotRect);
  const left =
    firstDotRect.left +
    firstDotRect.width / 2 -
    cardRect.left -
    barParentRect.width / 2;
  barParent.style.top = `${top}px`;
  barParent.style.bottom = `${bottom}px`;
  barParent.style.left = `${left}px`;
  barParent.style.height = `${currentParentHeight}px`;
  getVerticalHeight(currentParentHeight, barParentRect);
}

function getRects() {
  const dots = document.getElementsByClassName("dot");
  const firstDot = dots[0];
  const lastDot = dots[dots.length - 1];
  const card = document.getElementById("serviceContainer");
  const barParent = document.getElementById("verticalBar");
  const barParentRect = barParent.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const firstDotRect = firstDot.getBoundingClientRect();
  const lastDotRect = lastDot.getBoundingClientRect();
  return { barParent, barParentRect, cardRect, firstDotRect, lastDotRect };
}

function getParentBarHeight(firstDotRect, lastDotRect) {
  const height = lastDotRect.bottom - firstDotRect.top;
  return height;
}

function getVerticalHeight(currentParentHeight, barParentRect) {
  const barChild = document.getElementById("barInner");
  const barChildRect = barChild.getBoundingClientRect();
  const trigger = window.innerHeight * 0.5;
  if (barParentRect.top > trigger) {
    barChild.style.height = `0%`;
  }
  if (barParentRect.top < trigger && barParentRect.bottom >= trigger) {
    const innerhHeight = trigger - barParentRect.top;
    const dynamicHeight = (innerhHeight / currentParentHeight) * 100;
    barChild.style.height = `${dynamicHeight}%`;
  }
  if (barParentRect.bottom < trigger) {
    barChild.style.height = `100%`;
  }
}

function giveDotsHighlights() {
  const barChild = document.getElementById("barInner");
  const barChildRect = barChild.getBoundingClientRect();
  const dots = document.getElementsByClassName("dot");
  const overlays = document.getElementsByClassName("dotOverlay");
  for (let index = 0; index < dots.length; index++) {
    const dot = dots[index];
    const overlay = overlays[index];
    const dotRect = dot.getBoundingClientRect();
    if (dotRect.top < barChildRect.bottom) {
      console.log(index);
      dot.style.borderColor = "var(--secondary-color)";
      overlay.style.transform = "scaleX(0)";
    } else {
      overlay.style.transform = "scaleX(1)";
      dot.style.borderColor = "var(--main-color)";
    }
  }
}

window.addEventListener("resize", getVerticalBarPosition);
window.addEventListener("scroll", () => {
  getVerticalBarPosition();
  giveDotsHighlights();
});

// function renderServiceText(index){
// const ref=document.getElementById(`text${index}`);

// const text=serviceList[index].text;
// const card=document.getElementById(`serviceCard${index}`);
// card.style.height="400px"
// setTimeout(() => {
//               ref.innerHTML='';
// ref.innerHTML+=` <span>${text}</span>`;
// ref.style.opacity="1";
// }, 300);
// setTimeout(() => {
//    hideText(index);
// }, 300);

// }

// function hideText(currentIndex){
//     for (let index = 0; index < serviceList.length; index++) {
//         if (index !== currentIndex) {
//                     const ref=document.getElementById(`text${index}`);

//         ref.innerHTML='';
//         ref.style.opacity="0";
//         const card=document.getElementById(`serviceCard${index}`);
// card.style.height="300px"
//         }

//     }
// }

// function serviceAnimation() {

//     const divider = document.getElementById('divider');
//     const dividerTrigger = window.innerHeight * 0.25;
//     const buttonTrigger = window.innerHeight * 0.85;
//     console.log(buttonTrigger);

//     const dividerRect = divider.getBoundingClientRect().top;
//     const button = document.getElementById('btnContainer');
//     const footerDivider = document.getElementById('footerDivider')
//     const footerDividerRect = footerDivider.getBoundingClientRect().top;
//     console.log(footerDividerRect);

//     if (dividerRect < dividerTrigger) {
//         divider.style.backgroundColor = 'var(--secondary-color)';
//         divider.style.height = '6px';
//         divider.style.width = '25%'

//     } else {
//         divider.style.backgroundColor = 'var(--main-color)';
//         divider.style.height = '2px';
//         divider.style.width = '90%';

//     }

//     if (footerDivider < buttonTrigger) {
//         button.classList.add('btnHighlight');
//         footerDivider.style.backgroundColor = 'var(--secondary-color)';
//         if (window.innerWidth < 800) {
//             footerDivider.style.height = '6px';
//             footerDivider.style.width = '100%'
//         } else {
//             footerDivider.style.height = '100%';
//             footerDivider.style.width = '6px'

//         }

//     } else {
//         button.classList.remove('btnHighlight');
//         footerDivider.style.backgroundColor = 'var(--main-color)';
//         if (window.innerWidth < 800) {
//             footerDivider.style.height = '6px';
//             footerDivider.style.width = '0%';
//         }else{

//         footerDivider.style.height = '0%';
//         footerDivider.style.width = '6px'
//     }
//     }
// }
