




function renderServiceCards() {
    const serviceRef = document.getElementById("serviceCardsRow");
    const serviceRef2 = document.getElementById("serviceCardsRow2");
    for (let index = 0; index < services.length; index++) {
        const card = services[index];
        const cardColor = colorClasses[index]
        console.log(cardColor);

        // const indexRef = services.length / 2;
        // if (index < indexRef) {
            serviceRef.innerHTML += getServiceCardsTemplate(card, cardColor, index);
        // } else {
            // serviceRef2.innerHTML += getServiceCardsTemplate(card, cardColor, index);
        // }


    }
}

function transformServiceCards() {
    if (window.innerWidth>768) {
        return
    }
    const cards = document.getElementsByClassName('serviceCard');
    const icons = document.getElementsByClassName('cardIcon');
    const trigger = window.innerHeight * 0.5;
    for (let index = 0; index < cards.length; index++) {
        const card = cards[index];
        const icon = icons[index];
        const cardRect = card.getBoundingClientRect();
        if (cardRect.top < trigger) {
            icon.classList.add('changeCardIcon');

        } else {
            icon.classList.remove('changeCardIcon');
        }

    }

}


// function animateService() {
//     const images = document.getElementsByClassName('animationContainer');
//     const overlays = document.getElementsByClassName('arrowOverlay');

//     const rect = document.getElementById('serviceAnimation').getBoundingClientRect();
//     const trigger = window.innerHeight * 0.9;
//     if (rect.top < trigger || window.innerWidth > 800) {
//         //   document.body.style.overflow = 'hidden';

//         for (let index = 0; index < images.length; index++) {
//             const img = images[index];
//             setTimeout(() => {
//                 img.classList.add('serviceOpacity');
//                 if (index === 1) {
//                     overlays[0].classList.add('showArrow');
//                 }
//                 if (index === 3) {
//                     overlays[1].classList.add('showArrow');
//                 }
//                 // if (window.innerWidth < 800) {
//                 //     img.scrollIntoView({ behavior: 'smooth', block: 'center' });
//                 // }

//             }, index * 600);
//             setTimeout(() => {
//                 // document.body.style.overflow = '';
//             }, (images.length) * 500);


//         }
//     }
// }

window.addEventListener('scroll', () => {
    // animateService();
    transformServiceCards();
});

// window.addEventListener('load', animateService);