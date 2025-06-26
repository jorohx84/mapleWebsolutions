function animateAdvantages() {
    const { divRect, advantages, trigger } = getDivs();
    const inView = divRect.top < trigger;
    for (let index = 0; index < advantages.length; index++) {
        const advantage = advantages[index];
        if (inView) {
            advantage.classList.add('move');
        } else {
            if (window.innerWidth > 1000) {
                advantage.classList.remove('move');
            }

        }
    }

}
function moveTitle() {
    const { divRect, advantages, trigger } = getDivs();
    const title = document.getElementById('title');
    const inView = divRect.top < trigger;
    if (inView) {
        title.classList.add('movetitle');
    } else {
        if (window.innerWidth > 1000) {
            title.classList.remove('movetitle');
        }

    }

}

function stoppAnimation() {
    const title = document.getElementById('title');
    const advantages = document.getElementsByClassName('advantage');
    if (window.innerWidth <= 1000) {
        console.log('Start');
        for (let index = 0; index < advantages.length; index++) {
            const advantage = advantages[index];
            advantage.classList.add('move');
        }
        title.classList.add('movetitle');
    } 
}

function getDivs() {
    const advantageContainer = document.getElementById('advantages');
    const divRect = advantageContainer.getBoundingClientRect();
    const advantages = document.getElementsByClassName('advantage');

    const trigger = window.innerWidth > 550 ? window.innerHeight * 0.3 : window.innerHeight * 0.4;

    return { divRect, advantages, trigger }
}

function changeAdvntageContainerHeight() {
    const parentDiv = document.getElementById('advantageContainer');
    const { divRect, advantages, trigger } = getDivs();
    const inView = divRect.top < trigger && divRect.bottom > trigger;
    // if (!inView) {
    //     parentDiv.style.height = '';
    //     return
    // }
    changeHeight(parentDiv)

}

function changeHeight(div) {
    const parentDiv = div;
    const width = window.innerWidth;
    switch (true) {
        case width < 370:
            parentDiv.style.height = '3100px';
            break;
        case width < 450:
            parentDiv.style.height = '2700px';
            break;
        case width < 770:
            parentDiv.style.height = '2400px';
            break;
        case width < 1000:
            parentDiv.style.height = '2000px';
            break;
        default:
            parentDiv.style.height = '';
    }
}

window.addEventListener('scroll', () => {
    animateAdvantages();
    moveTitle();
    changeAdvntageContainerHeight();
})
window.addEventListener('resize', () => {
    animateAdvantages();
    moveTitle();
    changeAdvntageContainerHeight();
    stoppAnimation();
})