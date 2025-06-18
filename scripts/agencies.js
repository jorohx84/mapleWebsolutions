function renderServiceCards() {
  const serviceRef = document.getElementById("serviceCards");

  for (let index = 0; index < services.length; index++) {
    const card = services[index];
    const indexRef = services.length / 2;

    serviceRef.innerHTML += getServiceCardsTemplate(card, index);
  }
}