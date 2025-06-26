




function renderServiceCards() {
    const serviceRef = document.getElementById("serviceCards");

    for (let index = 0; index < services.length; index++) {
        const card = services[index];
        const indexRef = services.length / 2;

        serviceRef.innerHTML += getServiceCardsTemplate(card, index);
    }
}

// function transformServiceCards() {
//     const rect = document.getElementById('serviceCards').getBoundingClientRect();
//     const trigger = window.innerHeight * 0.5;
//     const serviceCards = document.getElementsByClassName('serviceCard');


//     if (rect.top < trigger) {
//         for (let index = 0; index < serviceCards.length; index++) {
//             const card = serviceCards[index];
//             card.classList.add('transformCards');
//         }

//     }
// }


function animateService() {


    const images = document.getElementsByClassName('animationContainer');
    const overlays = document.getElementsByClassName('arrowOverlay');

    const rect = document.getElementById('serviceAnimation').getBoundingClientRect();
    const trigger = window.innerHeight * 0.9;
    if (rect.top < trigger || window.innerWidth > 800) {
        //   document.body.style.overflow = 'hidden';

        for (let index = 0; index < images.length; index++) {
            const img = images[index];
            setTimeout(() => {
                img.classList.add('serviceOpacity');
                if (index === 1) {
                    overlays[0].classList.add('showArrow');
                }
                if (index === 3) {
                    overlays[1].classList.add('showArrow');
                }
                // if (window.innerWidth < 800) {
                //     img.scrollIntoView({ behavior: 'smooth', block: 'center' });
                // }

            }, index * 600);
            setTimeout(() => {
                // document.body.style.overflow = '';
            }, (images.length) * 500);


        }
    }
}

window.addEventListener('scroll', () => {
    animateService();
    // transformServiceCards();
});

window.addEventListener('load', animateService);