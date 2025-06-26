
let privacy = false;

function validateInputfields(validKey) {
    let field = document.getElementsByClassName('required');
    let validate;
    removeAllErrorMessages(field);
    for (let index = 0; index < field.length; index++) {
        const inputField = field[index];
        validate = checkFieldInput(inputField, validate);
        if (validate === false) {
            return
        }
    }
    checkPrivacy(validKey);

}

function checkFieldInput(inputField, validate) {
    let errorMessage = document.getElementById(`${inputField.name}`)
    if (inputField.value.trim() === "") {
        inputField.classList.add('error');
        errorMessage.innerHTML = `Bitte ${inputField.name} eingeben`;
        validate = false;
        scrollToDiv(errorMessage);
    } else {
        inputField.classList.remove('error');
        errorMessage.innerHTML = "";
        validate = checkFieldType(inputField, errorMessage, validate);
    }
    return validate
}


function checkFieldType(inputField, errorMessage, validate) {
    if (inputField.type === 'email') {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(inputField.value)) {
            validate = showErrorTextEmail(inputField, errorMessage, validate);
            return validate

        } else {
            validate = hideErrorTextEmail(inputField, errorMessage);

        }
    }
    validate = true;
    return validate
}

function scrollToDiv(errorMessage) {
    errorMessage.scrollIntoView({
        behavior: 'smooth',
        block: 'center'


    });

}


function showErrorTextEmail(inputField, errorMessage, validate) {
    inputField.classList.add('error');
    errorMessage.innerHTML = "";
    errorMessage.innerHTML = `Bitte E-Mail prüfen`;
    validate = false;
    scrollToDiv(errorMessage);
    return validate

}

function hideErrorTextEmail(inputField, errorMessage) {
    inputField.classList.remove('error');
    errorMessage.innerHTML = "";
}


function removeAllErrorMessages(field) {
    for (let index = 0; index < field.length; index++) {
        const error = field[index];
        let errorMessage = document.getElementById(`${error.name}`);
        errorMessage.innerHTML = "";
        error.classList.remove('error')
    }
}

function changePrivacy() {
    let privacyerror = document.getElementById('privacy-error');
    privacy = !privacy;
    changeCheckBox();
    if (privacy === true) {
        privacyerror.innerHTML = "";
    }
}

function checkPrivacy(validKey) {
    let privacyerror = document.getElementById('privacy-error');
    if (privacy === false) {
        privacyerror.innerHTML = 'Bitte stimmen Sie der Datenschutzerklärung zu'
        return

    } else {
        privacyerror.innerHTML = "";
        console.log('Validation war erfolgreich');
        if (validKey === 'offer') {
            startSendingRequest();
        } else {
            sendMessage();
        }
    }

}

function changeCheckBox() {
    let checked = document.getElementById('check');
    let checkbox = document.getElementById('checkbox');
    if (privacy === false) {
        checked.classList.add('d_none');
        checkbox.classList.remove('bg');

    } else {
        checked.classList.remove('d_none');
        checkbox.classList.add('bg');

    }
}
