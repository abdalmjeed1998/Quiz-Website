const loginForm = document.getElementById('form');
const loginUsername = document.getElementById('username');
const loginPassword = document.getElementById('password');
const loginSubmit = document.getElementById('submit');

const handleValidation = (element, message, isValid) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    if (isValid) {
        errorDisplay.innerText = '';
        inputControl.classList.add('success');
        inputControl.classList.remove('error');
        // Set a 'isLoggedIn' value in localStorage to true
        localStorage.setItem('isLoggedIn', 'true');
    } else {
        errorDisplay.innerText = message;
        inputControl.classList.add('error');
        inputControl.classList.remove('success');
        // Set a 'isLoggedIn' value in localStorage to false
        localStorage.setItem('isLoggedIn', 'false');
    }
};

loginForm.addEventListener('submit', e => {
    e.preventDefault();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    const enteredUsername = loginUsername.value;
    const enteredPassword = loginPassword.value;

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
        handleValidation(loginUsername, '', true);
        handleValidation(loginPassword, '', true);
        // alert('Login successful!');
        window.location.href = '/exploreCourses/brefcard-b.html';
    } else {
        handleValidation(loginUsername, 'Invalid username or password', false);
        handleValidation(loginPassword, 'Invalid username or password', false);
    }
});

let loginAtag = document.getElementById('loginAtag');
loginAtag.addEventListener('click', () => {
    window.location.href = '/signup/jason.html';
});
