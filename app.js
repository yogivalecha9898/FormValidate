const form = document.querySelector('.form');


function showError(input) {
    const parent = input.parentElement;
    parent.className = 'formdiv error_1';
    const image = input.nextElementSibling;
    image.className = 'img show'
    const error = image.nextElementSibling;
    error.className = 'error show';
}

function showSuccess(input) {
    const parent = input.parentElement;
    parent.className = 'formdiv success';
    const image = input.nextElementSibling;
    if(image.className === 'img show') {
        image.className = 'img';
    }
    const error = image.nextElementSibling;
    if(error.className === 'error show') {
        error.className = 'error';
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}







form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const firstname = document.querySelector('.firstname');
    if(firstname.value === '') {
        showError(firstname);
    } else {
        if(firstname.value.length < 3 || firstname.value.length > 15) {
            
            showError(firstname);
        } else {
            showSuccess(firstname);
        }
    }

    const lastname = document.querySelector('.lastname');
    if(lastname.value === '') {
        showError(lastname);
    } else {
        if(lastname.value.length < 3 || lastname.value.length > 15) {
            showError(lastname);
        } else {
            showSuccess(lastname);
        }
    }

    const email = document.querySelector('.email');
    if(email.value === '') {
        showError(email);
    } else {
        if(!validateEmail(email.value)) {
            showError(email);
        } else {
            showSuccess(email);
        }
    }

    const password = document.querySelector('.password');
    if(password.value === '') {
        showError(password);
    } else {
        if(password.value.length < 5 || password.value.length > 15) {
            showError(password);
        } else {
            showSuccess(password);
        }
    }

});