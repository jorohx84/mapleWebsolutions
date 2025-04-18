let choices = [];
let request = {};
let dublett = false;
let chooseKey = false;



function renderPackages() {

    renderHeadline('choose-product');
    let package = document.getElementById('packages');
    package.innerHTML = "";
    for (let packIndex = 0; packIndex < packages.length; packIndex++) {
        const PACK = packages[packIndex];
        package.innerHTML += getPackagesTemplate(packIndex, PACK);
        renderServices(packIndex, PACK);
        giveHighlights(packIndex);
    }
    renderOverlayButtons('packages');
}

function renderOverlayButtons(packKey) {
    let overlayButtons = document.getElementById('overlayButtons');
    overlayButtons.innerHTML = "";
    overlayButtons.style.display = "flex";
    if (packKey === 'packages') {
        overlayButtons.innerHTML += getOverlayButtonsTemplate();
    } else if (packKey === 'extra') {
        overlayButtons.innerHTML += getOverlayButtonsTemplateExtra();

    } else if (packKey === 'contact') {
        overlayButtons.style.display = "none"
    }
    else {
        overlayButtons.innerHTML += getOverlayButtonsChoiceTemplate();
    }

}



function renderHeadline(productKey) {
    let headline = document.getElementById('choose-product');
    headline.style.display = "flex";
    headline.innerHTML = "";
    if (productKey === 'choose-product') {
        headline.innerHTML += getProductHeadlineTemplate();

    } else if (productKey === 'cart') {
        headline.innerHTML = ` <h2>IHRE AUSWAHL</h2>`;
    } else if (productKey === 'contact') {
        headline.style.display = "none";
    }

    else {
        headline.innerHTML += getServiceHeadlineTemplate();
    }
}

function renderServices(packIndex, PACK) {
    let service = document.getElementById(`service${packIndex}`);
    service.innerHTML = "";
    for (let servicIndex = 0; servicIndex < PACK.service.length; servicIndex++) {
        const SERVICE = PACK.service[servicIndex];
        service.innerHTML += getServicelistTemplate(SERVICE);
    }
}

function renderExtras() {

    renderHeadline('choose-extra');
    let extra = document.getElementById('packages');
    extra.innerHTML = "";
    for (let extraIndex = 0; extraIndex < services.length; extraIndex++) {
        const EXTRA = services[extraIndex];
        extra.innerHTML += getExtrasTemplate(extraIndex, EXTRA);
        giveHighlights(extraIndex, 'extra');
    }

    renderOverlayButtons('extra');
}

function addToCart(packIndex, packKey) {
    if (packKey === 'extra') {
        addServicesToCart(packIndex, packKey);
    } else {
        addPackageToCart(packIndex);

    }

}

function renderContactFrom() {
    let contactRef = document.getElementById('packages');
    contactRef.innerHTML = "";
    contactRef.innerHTML += getContactFormTemplate();
    renderHeadline('contact')
    renderOverlayButtons('contact');
}

function addServicesToCart(packIndex, packKey) {
    let service = services[packIndex];
    dublett = checkDulpletteInCart(service);
    if (dublett === true) {
        dublett = false;
        removeAllHighlight(service, packKey);
        return
    }
    choices.push(service);
    giveHighlights(packIndex, packKey);

}


function addPackageToCart(packIndex) {
    clearCart();
    let package = packages[packIndex];
    choices.unshift(package);
    giveHighlights(packIndex);
    removeErrorFromProduct();
}

function removeErrorFromProduct() {
    let valid = document.getElementById('validChoose');
    valid.innerHTML = "";
}

function renderCart() {
    let cart = document.getElementById('cart');
    cart.innerHTML = "";
    for (let cartIndex = 0; cartIndex < choices.length; cartIndex++) {
        const CHOICE = choices[cartIndex];
        cart.innerHTML += getCartTemplate(cartIndex, CHOICE);
    }
}

function checkDulpletteInCart(service) {
    let dublette = choices.find(serv => serv.serviceID === service.serviceID);
    if (dublette) {
        let duplettIndex = choices.findIndex(duplett => duplett.serviceID === dublette.serviceID);
        choices.splice(duplettIndex, 1);
        dublett = true;
    } else {
        dublett = false;
    }
    return dublett
}

function removeError() {
    for (let packIndex = 0; packIndex < packages.length; packIndex++) {
        let packError = document.getElementById(`packages-error${packIndex}`);
        packError.innerHTML = "";
    }
}


function giveHighlights(packIndex, packKey) {
    let packRef;
    let currentPackage;
    let pack;
    if (packKey === 'extra') {
        packRef = document.getElementById(`services${packIndex}`);
        pack = giveExtrasHighlight(currentPackage, packIndex);
    } else {
        packRef = document.getElementById(`pack${packIndex}`);
        pack = givePackageHighlight(currentPackage, packIndex);
    }
    if (pack) {
        removeAllHighlight();
        packRef.classList.add('pack-highlight');
    }
}


function giveExtrasHighlight(currentPackage, packIndex) {
    currentPackage = services[packIndex];
    pack = choices.find(pack => pack.serviceID === currentPackage.serviceID);
    return pack
}

function givePackageHighlight(currentPackage, packIndex) {
    currentPackage = packages[packIndex];
    pack = choices.find(pack => pack.packID === currentPackage.packID);
    return pack
}


function removeAllHighlight(service, packKey) {
    if (packKey === 'extra') {
        removeExtraHighlights(service);
        return
    }
    removePackageHighlights();

}


function removeExtraHighlights(service) {
    let serviceIndex = services.findIndex(serv => serv.serviceID === service.serviceID);
    let serviceRef = document.getElementById(`services${serviceIndex}`);
    serviceRef.classList.remove('pack-highlight');
}

function removePackageHighlights() {
    let packRef = document.getElementsByClassName('pack');
    for (let index = 0; index < packRef.length; index++) {
        const PACKREF = packRef[index];
        PACKREF.classList.remove('pack-highlight');
    }
}

function clearCart() {
    for (let clearIndex = 0; clearIndex < choices.length; clearIndex++) {
        const CLEAR = choices[clearIndex];
        if (CLEAR.sort === 'package') {
            console.log('Ich muss raus!');
            choices.splice(clearIndex, 1)
        }
    }
}

function calcutePrice() {
    let sum = 0;
    for (let priceIndex = 0; priceIndex < choices.length; priceIndex++) {
        const PRICE = parseFloat(choices[priceIndex].price);
        sum += PRICE;
    }
    renderPrice(sum);
}


function deleteChoiseFromCart(cartIndex) {
    let deleteChoice = choices[cartIndex];
    let currentIndex;
    if (deleteChoice.sort === 'package') {
        currentIndex = packages.findIndex(object => object.packID === deleteChoice.packID);
        console.log(currentIndex);

    } else {
        currentIndex = services.findIndex(object => object.serviceID === deleteChoice.serviceID);

    }
    choices.splice(cartIndex, 1);
    renderCart();
}



function renderCartContainer() {

    renderHeadline('cart');
    let send = document.getElementById('packages');
    send.innerHTML = "";
    send.innerHTML += getCartContainerTemplate();
    renderCart();
    renderOverlayButtons();
}


function checkChoice(checkKey) {
    let count = 0;
    count = getCount(count);
    if (checkKey === 'request') {
        if (count > 0) {

            renderContactFrom();
        } else {
            renderPackages();
            showErrorMessage();
        }
    }
    if (checkKey === 'choice') {
        if (count > 0) {
            renderExtras();

        } else {
            showErrorMessage();
        }
    }

}


function getCount(count) {
    for (let checkIndex = 0; checkIndex < choices.length; checkIndex++) {
        const CHECK = choices[checkIndex];
        console.log(CHECK.sort);
        if (CHECK.sort === 'package') {
            count++
        }
    }
    return count
}


function startSendingRequest() {
    sendRequest();
    showConfirmation();
    setTimeout(function () {
        window.location.href = "index.html"
    }, 6000);
    console.log('Anfrage wurde versendet');
}

function showErrorMessage() {
    let valid = document.getElementById('validChoose');
    valid.innerHTML = "";
    valid.innerHTML += '<p>Bitte wählen Sie ein Produkt</p>'
}

function scrollToHeader() {
    let headerRef = document.getElementById('header');
    headerRef.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });

}





