function sendRequest() {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');


    // Erstelle ein FormData-Objekt
    let formData = new FormData();

    // Füge die Werte aus request zu formData hinzu
    formData.append('name', name.value);
    formData.append('email', email.value);
    formData.append('phone', phone.value);
    formData.append('message', message.value);

    // Füge die 'choices' zum FormData-Objekt hinzu
    for (let index = 0; index < choices.length; index++) {
        const CHOICE = choices[index];
        formData.append('choice' + index, CHOICE.category);  // Append die 'choice' mit dem richtigen Index
    }

    // Logge das FormData-Objekt zur Überprüfung
    console.log(formData);

    // Sende die Daten mit fetch an das PHP-Skript
    fetch('/php/offer.php', {
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

}
