window.onload = function () {
    changeTimeStepRows();
    hideEmptyDiv();
    moveverticalBar();
    changeVerticalBarHeight();
}




window.onresize = function () {
    changeTimeStepRows();
    hideEmptyDiv();
    moveverticalBar();
    changeVerticalBarHeight();
}

function scrollVerticalBar() {
    const viewportHeight = window.innerHeight;
    const startPoint = viewportHeight * 0.5;
    let barParent = document.getElementById('bar-parent');
    let barParentRect = barParent.getBoundingClientRect();
    let bar = document.getElementById('vertical-bar-inner');
    let barRect = bar.getBoundingClientRect();
    let currentHeight = getCurrrentHeigth(barParentRect, barRect, startPoint);
    bar.style.height = `${currentHeight}%`;
    giveVerticalElementsColor(barRect);
}

function getCurrrentHeigth(barParentRect, barRect, startPoint) {
    let parentHeigth = barParentRect.bottom - barParentRect.top;
    let innerHeigth = startPoint - barRect.top;
    if (startPoint < barParentRect.top) {
        currentHeight = 0;

    } else if (startPoint > barParentRect.top && startPoint < barParentRect.bottom) {
        currentHeight = (innerHeigth / parentHeigth) * 100;

    } else if (startPoint > barParentRect.bottom) {
        currentHeight = 100;
    }
    return currentHeight;
}

function giveVerticalElementsColor(barRect) {
    let year = document.getElementsByClassName('year');
    let yearImage = document.getElementsByClassName('year-img');
    for (let index = 0; index < year.length; index++) {
        const YEAR = year[index];
        const IMG = yearImage[index];
        let yearRect = YEAR.getBoundingClientRect();

        if (barRect.bottom >= yearRect.top) {

            YEAR.classList.add('year-bg');
            IMG.classList.add('year-img-color');
        } else {
            YEAR.classList.remove('year-bg');
            IMG.classList.remove('year-img-color');
        }
    }
}



function changeTimeStepRows() {

    let timeBox = document.getElementsByClassName('timestep');
    for (let index = 0; index < timeBox.length; index++) {
        const BOX = timeBox[index];

        if (window.innerWidth > 1265) {
            if (index % 2 !== 0) {
                BOX.classList.add('timestep-row');
            }
        } else {
            if (BOX.classList.contains('timestep-row')) {
                BOX.classList.remove('timestep-row');
            }
        }
    }
    hideBorder();
}


function hideBorder(){
    let timeSteps =document.getElementsByClassName('timestep-content');
    for (let index = 0; index < timeSteps.length; index++) {
        const TIMESTEP = timeSteps[index];
        if (index % 2 == 0) {
            TIMESTEP.classList.add('hideBorder');
        }
       

    }
    
}


function hideEmptyDiv() {
    let contentDiv = document.getElementsByClassName('timestep-content');
    for (let index = 0; index < contentDiv.length; index++) {
        const DIV = contentDiv[index];
        if (window.innerWidth < 1265) {
            if (index % 2 === 0) {
                DIV.classList.add('d_none');
            }
        } else {
            if (index % 2 === 0) {
                DIV.classList.remove('d_none');
            }
        }
    }
}


function moveverticalBar() {
    let year = document.getElementsByClassName('year');
    let barParent = document.getElementById('bar-parent');
    let contentDiv = document.getElementById('curriculum-content');
    let divRect = contentDiv.getBoundingClientRect();
    if (window.innerWidth < 1265) {
        for (let index = 0; index < year.length; index++) {
            const YEAR = year[index];
            let yearRect = YEAR.getBoundingClientRect();
            let verticalCenter = yearRect.left + (yearRect.width / 2) - divRect.left;
            barParent.style.left = `${verticalCenter}px`;
        }
    } else {
        barParent.style.left = "50%";
    }
}

function changeVerticalBarHeight() {
    let year = document.getElementsByClassName('year');
    let verticalBar = document.getElementById('bar-parent');
    let contentDiv = document.getElementById('curriculum-content');
    for (let index = 0; index < year.length; index++) {
        const { firstYearRect, lastYearRect } = getYearRects(year);
        const { currentHeight, currentPosition } = calculateVeritacalBarPosition(firstYearRect, lastYearRect, contentDiv);
        verticalBar.style.height = `${currentHeight}px`;
        verticalBar.style.top = `${currentPosition}px`;
    }
}

function getYearRects(year) {
    let firstYear = year[0];
    let lastIndex = year.length - 1;
    let lastYear = year[lastIndex];
    let firstYearRect = firstYear.getBoundingClientRect();
    let lastYearRect = lastYear.getBoundingClientRect();
    return { firstYearRect, lastYearRect }

}

function calculateVeritacalBarPosition(firstYearRect, lastYearRect, contentDiv) {
    let divRect = contentDiv.getBoundingClientRect();
    let currentHeight = lastYearRect.bottom - firstYearRect.top;
    let currentPosition = firstYearRect.top - divRect.top;
    return { currentHeight, currentPosition }
}