// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);



// };
let toggleKey=false;
let sidebarBtnIndex;

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


function toggleSidebarContent(index){
sidebarBtnIndex=index;
const sidebar=document.getElementById('sidebar');
 toggleKey=!toggleKey;
 if(toggleKey){
sidebar.classList.add('slidein');
 }else{
  sidebar.classList.remove('slidein');
 }


hideBtns(index)
renderSidebarContent(index);
}

function hideBtns(index){
 const currentIndex=index;
  const buttons = document.getElementsByClassName('sidebarBtn');
  for (let index = 0; index < buttons.length; index++) {
    const btn = buttons[index];
    if (currentIndex !== index) {
              btn.classList.add('showBtns');
    } else{
     
              btn.classList.remove('showBtns');
      
 
    }


  }
}

function closeSidebar(){
 const buttons = document.getElementsByClassName('sidebarBtn');
 const sidebar=document.getElementById('sidebar');

 toggleKey=false;
  sidebar.classList.remove('slidein');
  
     for (let index = 0; index < buttons.length; index++) {
    const btn = buttons[index];
     btn.classList.remove('showBtns');
}

}

function renderSidebarContent(index){
console.log(index);
const content=document.getElementById('sidebarContent');
content.innerHTML='';
if (index===0){
 content.innerHTML+=`<div>
 <p>Rückruf-Service</p>
 <span>Geben Sie Ihre Telefonnummer ein, dann rufe ich Sie schnellstmöglich zurück d</span>
 <input class="required" type="tel" placeholder="Telefonnummer" name="phone">
 <button>Senden</button>
                      </div>`
}
if (index===1){
 content.innerHTML+=`<div>
 <p>Nachricht</p>
                      </div>`
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
