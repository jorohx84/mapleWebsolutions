function getPackagesTemplate(packIndex, PACK) {
    return `<div>
                                    <div onclick="addToCart(${packIndex})" class="pack" id="pack${packIndex}">
                                        <div class="pack-description">
                                        <h2>${PACK.category}</h2>
                                        <p>${PACK.description}</p>
                                        <div class="servicelist" id="service${packIndex}"></div>
                                    </div>
                    
                                </div>
                                    <div>
                                         <p id="packages-error${packIndex}"></p>
                                    </div>
                                </div>
                        `
}

function getProductHeadlineTemplate() {
    return `<div><h2>WÄHLEN SIE IHR GEWÜNSCHTES PRODUKT AUS</h2>
                <div class="validation" id="validChoose"></div>
            </div>`
}

function getServiceHeadlineTemplate() {
    return `<h2>WÄHLEN SIE IHR GEWÜNSCHTES ZUSATZPRODUKT AUS (OPTIONAL)</h2>`
}

function getOverlayButtonsTemplate() {

    return ` <button class="forwardButton" onclick="checkChoice('choice'); scrollToHeader()">Weiter</button>`
}

function getOverlayButtonsTemplateExtra() {
    return ` <button onclick="renderPackages(); scrollToHeader()">Zurück</button>
             <button onclick="renderCartContainer(); scrollToHeader()">Weiter</button>`      
}

function getOverlayButtonsChoiceTemplate(){
    return ` <button onclick="renderExtras(); scrollToHeader()">Zurück</button>
    <button onclick="checkChoice('request'); scrollToHeader()">Weiter</button>`      

}


function getExtrasTemplate(extraIndex, EXTRA) {
    return `
                    <div onclick="addToCart(${extraIndex}, 'extra')" class="services" id="services${extraIndex}"> 
                            <h3>${EXTRA.category}</h3>
                            <p>${EXTRA.description}</p>          
                    </div>
                            `
}

function getCartTemplate(cartIndex, CHOICE) {
    return `                <div class="choice-content">
                                
                                    <div class="choice-content-text">
                                        <h4>${CHOICE.category}</h4>
                                        <p>${CHOICE.description}</p>
                                    </div>
                                    <div class="deletebuttonContainer">
                                    <button onclick="deleteChoiseFromCart(${cartIndex})" class="deletebutton"><img src="/icons/delete.svg" alt=""></button>
                                 </div>
                            </div>`
}

function getCartContainerTemplate() {
    return `      <div class="cart-content">
                         <div class="cart-choice">
                         
                          <div class="choice" id="cart">
                          </div>
                         </div>

                      </div>
                    
                      `
}

function getServicelistTemplate(SERVICE) {
    return `<div>
                <div class="servicelist-row">
                <img src="/icons/arrow-list.svg" alt="">
                <p>${SERVICE}</p>
                </div>
            </div>`

}

function getContactFormTemplate(){
return `  <div class="section-headline">
                        <h2>BITTE GEBEN SIE IHRE KONTAKTDATEN EIN</h2>
                    </div>
                    <div class="lead-information-container">
                        <div class="lead-information">
                            <div>
                                <p>Name</p>
                                <input class="required" type="text" name="Name" placeholder="Name" id="name">
                                <div class="validation" id="Name"></div>
                            </div>
                            <div>
                                <p>E-Mail</p>
                                <input class="required" type="email" name="E-Mail" placeholder="E-Mail" id="email">
                                <div class="validation" id="E-Mail"></div>
                            </div>
                            <div>
                                <p>Telefon (optional)</p>
                                <input type="text" name="Telefon" placeholder="Telefon" id="phone">
                            </div>
                            <div>
                                <p>Nachricht (optional)</p>
                                <textarea name="Nachricht" id="message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="privacyContainer">
                        <div class="privacy-policy">
                            <div onclick="changePrivacy()" class="checkbox" id="checkbox"><svg class="d_none" id="check"
                                    xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"
                                    width="24px" fill="#5f6368">
                                    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
                                </svg>
                            </div>
                            <p>Ich habe die <a href="datenschutz.html">Datenschutzerklärung</a> gelesen und stimme
                                dieser zu
                            </p>
                        </div>
                        <div class="validation" id="privacy-error"></div>
                          <button onclick="validateInputfields('offer')">Anfrage senden</button>
                    </div>
                   
                   `
}


function getAdvantagesTemplate(advanceIndex, ADVANCE, Image){
    return `<div onclick="renderDescription(${advanceIndex})" class="advance">
             <img src="${Image}" alt="">
                <div class="advance-content" id="advance-content${advanceIndex}">
                    <h4 class="space">${ADVANCE.title}</h4>
                </div>
                   <div class="advantagesDescription" id="advantagesDescription${advanceIndex}">
                    <p>${ADVANCE.description}</p>
                    </div>
                 
            </div>`
}