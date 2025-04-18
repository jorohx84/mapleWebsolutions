window.onbeforeunload = function () {

    window.scrollTo(0, 0);
}



function reloadWebsite() {
    if (performance.getEntriesByType('navigation')[0].type === 'reload') {

        window.location.reload(true);
    }
}


function toogleHideMenu() {
    let respMenu = document.getElementById('menu-resp');
    let body = document.getElementById('body');
    if (respMenu.classList.contains('hide-menu')) {
        respMenu.classList.add('show-menu');
        respMenu.classList.remove('hide-menu');
        body.classList.add('noscroll');
        hideLandingpageHeadline();
    } else {
        hideLandingpageHeadline();
        respMenu.classList.remove('show-menu');
        respMenu.classList.add('hide-menu');
        body.classList.remove('noscroll');
    }
}


function hideLandingpageHeadline() {
    let headline = document.getElementById('landingpage-headline');
    if (headline) {
        if (window.innerWidth < 1300) {
            if (headline.classList.contains('hideheadline')) {
                headline.classList.add('showheadline');
                headline.classList.remove('hideheadline');
            } else {
                headline.classList.add('hideheadline');
                headline.classList.remove('showheadline');
            }


        }
    }
}


function burgerAnimation() {
    let burger = document.getElementById('burger');
    let burgerScroll = document.getElementById('burger-scroll');
    burger.classList.toggle('open');
    if (burgerScroll !== null) {
        burgerScroll.classList.toggle('open');
    }
}


function fixHeader() {
    //changeHeaderColor('burger-line', 'burger-color');
    //changeHeaderColor('nav', 'navcolor');
    const header = document.getElementById('header');
    const headerScroll = document.getElementById('header-scroll');
    if (window.scrollY > 100) {
        headerScroll.classList.add('show-header');
        headerScroll.classList.remove('hide-header');
        header.classList.remove('header-opacity');
    } else if (window.scrollY < 150) {
        headerScroll.classList.remove('show-header');
        headerScroll.classList.add('hide-header');
        header.classList.add('header-opacity');
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
            cont.classList.add('right');
        } else {
            cont.classList.add('left');
        }
    }
}


function handleScroll(idKey) {
    const childBoxes = document.querySelectorAll(`${idKey}`);
    const parent = document.getElementById('advantages');
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
            if (!box.classList.contains('hover')) {
                setTimeout(() => {
                    box.classList.remove('nohover');
                    box.classList.add('hover');
                }, 100);
            }
        } else if (box.classList.contains('hover')) {
            box.classList.remove('hover');
            box.classList.add('nohover');
        }
    });
}


function slideInOffer() {
    let offer = document.getElementById('offer');
    offer.classList.remove('offerslideout')
    offer.classList.add('offerslide');

}


function changeBodySize() {
    landingpageHeight();
    window.addEventListener('resize', landingpageHeight);
}


function landingpageHeight() {
    let body = document.getElementById('body');
    let bodyCover = document.getElementById('body-cover');
    let footer = document.getElementById('footer');
    let footerRect = footer.getBoundingClientRect();
    let footerHeight = footerRect.height
    body.style.height = `calc(100vh + ${footerHeight}px )`;
    bodyCover.style.height = `calc(100vh + ${footerHeight}px )`;

}


function hideWelcome() {
    let sliderRef = document.getElementById('slider');
    let bodyRef = document.getElementById('body');
    setTimeout(() => {
        sliderRef.classList.add('hideWelcome');

    }, 5000);
    setTimeout(() => {
        sliderRef.style.display = "none";
        bodyRef.classList.remove('bodyHeight');
    }, 7000);
}


function renderAdvantages() {
    let advanceRef = document.getElementById('advantages');
    for (let advanceIndex = 0; advanceIndex < advantages.length; advanceIndex++) {
        const ADVANCE = advantages[advanceIndex];
        const Image = images[advanceIndex];
        console.log(Image);
        advanceRef.innerHTML += getAdvantagesTemplate(advanceIndex, ADVANCE, Image);
    }
}

function renderSkillIcons() {
    let skillIcon = document.getElementById('skillIcons');
    skillIcon.innerHTML = '';
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
    </div>`
    }


}

function renderSkills() {
    let skillRef = document.getElementById('skills');
    skillRef.innerHTML = '';
    for (let index = 0; index < skills.length; index++) {
        const SKILL = skills[index];
        skillRef.innerHTML += `<div class="row">
                    <img class="icon${index}" src="${skillIcons[index]}" loading="lazy" alt="">
                    <div class="row-text">
                        <h4 class="space">${SKILL.title}</h4>
                        <p>${SKILL.text}</p>
                    </div>`

    }

}

function renderServices() {
    const serviceRef = document.getElementById('services');
    serviceRef.innerHTML = '';
    for (let index = 0; index < serviceList.length; index++) {
        const SERVICE = serviceList[index];
        console.log(SERVICE.title);
        serviceRef.innerHTML += `<div class="serviceCard">
        <img src="${SERVICE.path}" alt="">
        <h3>${SERVICE.title}</h3>
        <span>${SERVICE.text}</span>
        
                                </div>`;
    }
}


function serviceAnimation() {
    const divider = document.getElementById('divider');
    const dividerTrigger = window.innerHeight * 0.25;
    const buttonTrigger = window.innerHeight * 0.85;
    console.log(buttonTrigger);

    const dividerRect = divider.getBoundingClientRect().top;
    const button = document.getElementById('btnContainer');
    const footerDivider = document.getElementById('footerDivider')
    const footerDividerRect = footerDivider.getBoundingClientRect().top;
    console.log(footerDividerRect);

    if (dividerRect < dividerTrigger) {
        divider.style.backgroundColor = 'var(--secondary-color)';
        divider.style.height = '6px';
        divider.style.width = '25%'



    } else {
        divider.style.backgroundColor = 'var(--main-color)';
        divider.style.height = '2px';
        divider.style.width = '90%';

    }

    if (footerDividerRect < buttonTrigger) {
        button.classList.add('btnHighlight');
        footerDivider.style.backgroundColor = 'var(--secondary-color)';
        if (window.innerWidth < 800) {
            footerDivider.style.height = '6px';
            footerDivider.style.width = '100%'
        } else {
            footerDivider.style.height = '100%';
            footerDivider.style.width = '6px'

        }

    } else {
        button.classList.remove('btnHighlight');
        footerDivider.style.backgroundColor = 'var(--main-color)';
        if (window.innerWidth < 800) {
            footerDivider.style.height = '2px';
            footerDivider.style.width = '0%';
        }else{

  
        footerDivider.style.height = '0%';
        footerDivider.style.width = '2px'
    }
    }
}


