const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const submit = document.getElementById('submit'); // Fixed a typo in the variable name

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs(e); // Pass 'e' as an argument to the validateInputs function
    // After validating, you can clear the form inputs and success/error classes
    username.value = '';
    email.value = '';
    password.value = '';
    password2.value = '';

    // Clear success and error classes

});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = e => { // Pass 'e' as an argument to the function
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;

    if (usernameValue === '') {
        setError(username, 'Username is required');
        e.preventDefault();
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is required');
        e.preventDefault();
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
        e.preventDefault();
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, 'Password is required');
        e.preventDefault();
    } else if (passwordValue.length < 8) {
        setError(password, 'Password must be at least 8 characters.');
        e.preventDefault();
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, 'Please confirm your password');
        e.preventDefault();
    } else if (password2Value !== passwordValue) {
        setError(password2, "Passwords don't match");
        e.preventDefault();
    } else {
        setSuccess(password2);
    }

    if (usernameValue !== '' && emailValue !== '' && isValidEmail(emailValue) && passwordValue !== '' && passwordValue.length >= 8 && password2Value !== '' && password2Value === passwordValue) {
        // All fields are valid, save data to localStorage
        localStorage.setItem('username', usernameValue);
        localStorage.setItem('email', emailValue);
        localStorage.setItem('password', passwordValue);
        localStorage.setItem('password2', password2Value);
    }
};

let loginAtag = document.getElementById('loginAtag');
loginAtag.addEventListener('click', () => {
    window.location.href = '/loginpage/login.html';
});
