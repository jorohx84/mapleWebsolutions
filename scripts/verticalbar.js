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
      dot.style.borderColor = "var(--secondary-color)";
      overlay.style.transform = "scaleX(0)";
    } else {
      overlay.style.transform = "scaleX(1)";
      dot.style.borderColor = "var(--main-color)";
    }
  }
}

window.addEventListener("scroll", () => {
  getVerticalBarPosition();
  giveDotsHighlights();
});