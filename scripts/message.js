function sendMessage() {
    // Hole die Werte aus den Eingabefeldern
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Erstelle ein FormData-Objekt mit den Eingabewerten
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('message', message);

    // Sende die Daten mit fetch an das PHP-Skript
    fetch('/php/db.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())  // Warte auf die Antwort des Servers
        .then(data => {
            // Zeige die Antwort an (z. B. eine Bestätigung)
            console.log(data);
            showConfirmation();
        })
        .catch(error => {
            // Fehlerbehandlung, falls etwas schiefgeht
            console.error('Fehler:', error);
            
        });
        deleteInputs();
        changePrivacy();
}


function deleteInputs() {
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    name.value = "";
    email.value = "";
    phone.value = "";
    message.value = "";

}




function showConfirmation() {
    let confirm = document.getElementById('confirm');
    let center= document.getElementById('center')
    confirm.classList.remove('hide-confirm');
    confirm.classList.add('show-confirm');
    center.classList.add('hide-center');
    setTimeout(function() {
        confirm.classList.add('hide-confirm');
        confirm.classList.remove('show-confirm');
        center.classList.remove('hide-center');
    }, 6000);  

    console.log('Vielen Dank für Ihre Nachricht. Ich werde mich schnellstmöglich um Ihr Anliegen kümmern');
}