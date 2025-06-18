// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// };

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

// function slideOutBoxes(idKey) {
//   let container = document.getElementsByClassName(`${idKey}`);
//   for (let index = 0; index < container.length; index++) {
//     const cont = container[index];
//     if (index % 2 === 0) {
//       cont.classList.add("right");
//     } else {
//       cont.classList.add("left");
//     }
//   }
// }

// function handleScroll(idKey) {
//   const childBoxes = document.querySelectorAll(`${idKey}`);
//   const parent = document.getElementById("advantages");
//   const windowHeight = window.innerHeight;
//   const triggerPoint = windowHeight * 0.4;
//   let boxTop;
//   childBoxes.forEach((box) => {
//     if (window.innerWidth < 1062) {
//       boxTop = box.getBoundingClientRect().top;
//     } else {
//       boxTop = parent.getBoundingClientRect().top;
//     }
//     if (boxTop <= triggerPoint) {
//       if (!box.classList.contains("hover")) {
//         setTimeout(() => {
//           box.classList.remove("nohover");
//           box.classList.add("hover");
//         }, 100);
//       }
//     } else if (box.classList.contains("hover")) {
//       box.classList.remove("hover");
//       box.classList.add("nohover");
//     }
//   });
// }

// function slideInOffer() {
//   let offer = document.getElementById("offer");
//   offer.classList.remove("offerslideout");
//   offer.classList.add("offerslide");
// }

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







// function renderServices() {
//   const serviceRef = document.getElementById("services");
//   serviceRef.innerHTML = "";
//   for (let index = 0; index < advantages.length; index++) {
//     const SERVICE = advantages[index];
//     serviceRef.innerHTML += getServicesTemplate(SERVICE);
//   }
// }

// function checkBoxCheck() {
//   const images = document.getElementsByClassName("checkImg");
//   const trigger = window.innerHeight * 0.5;

//   for (let index = 0; index < images.length; index++) {
//     const IMAGE = images[index];
//     const imageRect = IMAGE.getBoundingClientRect();

//     if (imageRect.top < trigger) {
//       IMAGE.classList.add("stretchImage");
//     } else {
//       IMAGE.classList.remove("stretchImage");
//     }
//   }
// }

// function renderAdvantages() {
//   const advantagesRef = document.getElementById("advantages");
//   advantagesRef.innerHTML = "";
//   for (let index = 0; index < advantages.length; index++) {
//     const ADVANCE = advantages[index];
//     advantagesRef.innerHTML += ` <div class="advantagesListCard">

//                             <img class="advantagesListImage" id="advantagesListImage" src="logos/mapleIcon-bg.png"
//                                 alt="">
//                                 <h4>${ADVANCE.title}</h4>
//                             <span>${ADVANCE.description}</span>
//                         </div>`;
//   }
// }

// function renderProcess() {
//   const processRef = document.getElementById("process");
//   processRef.innerHTML = "";
//   for (let index = 0; index < process.length; index++) {
//     const step = process[index];
//     processRef.innerHTML += ` <div class="processRow">
//                              <div class="dot" id="dot">
//                                 <div class="dotOverlay" id="dotOverlay"></div>
//                                 <img src="icons/check_blue.svg" alt="">
//                              </div>
//                              <div class="stepCard">
//                              <h4>${step.title}</h4>
//                               <span>${step.description}</span>
//                               </div>
                           
//                         </div>`;
//   }
// }



// function rotateLogos() {
//   const logos = document.getElementsByClassName("advantagesListImage");
//   const trigger = window.innerHeight * 0.5;
//   for (let index = 0; index < logos.length; index++) {
//     const LOGO = logos[index];
//     const logoRect = LOGO.getBoundingClientRect();
//     if (logoRect.top < trigger) {
//       LOGO.classList.add("logoanimation");
//     } else {
//       LOGO.classList.remove("logoanimation");
//     }
//   }
// }



// window.addEventListener("scroll", () => {
//   checkBoxCheck();
// });
