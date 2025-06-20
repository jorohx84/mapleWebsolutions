function animateAdvantages() {
    const { divRect, advantages, trigger } = getDivs();
    const inView = divRect.top < trigger && divRect.bottom > trigger;
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
    const inView = divRect.top < trigger && divRect.bottom > trigger;
    if (inView) {
        title.classList.add('movetitle');
    } else {
        if (window.innerWidth > 1000) {
            title.classList.remove('movetitle');
        }

    }

}

function getDivs() {
    const advantageContainer = document.getElementById('advantages');
    const divRect = advantageContainer.getBoundingClientRect();
    const advantages = document.getElementsByClassName('advantage');

    const trigger = window.innerWidth > 550 ? window.innerHeight * 0.4 : window.innerHeight * 0.4;

    return { divRect, advantages, trigger }
}

function changeAdvntageContainerHeight() {
    const parentDiv = document.getElementById('advantageContainer');
    const { divRect, advantages, trigger } = getDivs();
    const inView = divRect.top < trigger && divRect.bottom > trigger;
    const isSmaller = window.innerWidth < 1000;
    if (inView && isSmaller) {
        parentDiv.style.height = '2700px';
    }else if(!isSmaller){
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
})