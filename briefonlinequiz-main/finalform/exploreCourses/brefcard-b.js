const navToggle = document.querySelector(".navbar_toggle");
const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function () {
links.classList.toggle("show_nav");
});

let HTMLCheck = document.getElementById('HTMLCheck');
let CSSCheck = document.getElementById('CSSCheck');
let JSCheck = document.getElementById('JSCheck');
let CPPCheck = document.getElementById('CPPCheck');
let PCheck = document.getElementById('PCheck');

let cppCard = document.getElementById('cppCard');
let pCard = document.getElementById('pCard');
let jsCard = document.getElementById('jsCard');
let cssCard = document.getElementById('cssCard');
let htmlCard = document.getElementById('htmlCard');

// Function to hide a card
function hideCard(cardElement) {
cardElement.style.display = 'none';
}

// Function to show a card
function showCard(cardElement) {
cardElement.style.display = 'flex';
}

function updateCardVisibility() {
let anyCheckboxChecked = false;

if (HTMLCheck.checked) {
showCard(htmlCard);
anyCheckboxChecked = true;
} else {
hideCard(htmlCard);
}
if (CSSCheck.checked) {
showCard(cssCard);
anyCheckboxChecked = true;
} else {
hideCard(cssCard);
}
if (JSCheck.checked) {
showCard(jsCard);
anyCheckboxChecked = true;
} else {
hideCard(jsCard);
}
if (CPPCheck.checked) {
showCard(cppCard);
anyCheckboxChecked = true;
} else {
hideCard(cppCard);
}
if (PCheck.checked) {
showCard(pCard);
anyCheckboxChecked = true;
} else {
hideCard(pCard);
}
if (!anyCheckboxChecked) {
showCard(cppCard);
showCard(pCard);
showCard(jsCard);
showCard(cssCard);
showCard(htmlCard);
}
}

// Add event listeners to all checkboxes to update card visibility
HTMLCheck.addEventListener('change', updateCardVisibility);
CSSCheck.addEventListener('change', updateCardVisibility);
JSCheck.addEventListener('change', updateCardVisibility);
CPPCheck.addEventListener('change', updateCardVisibility);
PCheck.addEventListener('change', updateCardVisibility);

// Initially, show all cards
showCard(cppCard);
showCard(pCard);
showCard(jsCard);
showCard(cssCard);
showCard(htmlCard);
let homeButton = document.getElementById('homeButton')
let logoutButton = document.getElementById('logoutButton');
let htmlButton = document.getElementById('htmlButton');
let pButton = document.getElementById('pButton');
let cppButton = document.getElementById('cppButton');
let jsButton = document.getElementById('jsButton');
let cssButton = document.getElementById('cssButton');
let loginAtag = document.getElementById('loginAtag');
pButton.addEventListener('click', () => {

window.location.href = '/study/studyJS.html';
});
htmlButton.addEventListener('click', () => {
window.location.href = '/study/studyHTML.html';
});

cppButton.addEventListener('click', () => {
window.location.href = '/study/studyCSS.html';
});
jsButton.addEventListener('click', () => {
window.location.href = '/study/studyJS.html';
});
cssButton.addEventListener('click', () => {
window.location.href = '/study/studyCSS.html';
});
logoutButton.addEventListener('click', () => {
window.location.href = '/home.html';
localStorage.setItem('isLoggedIn', 'false');
});

homeButton.addEventListener('click', () => {
    window.location.href = '/home.html';
});
let jsTest = document.getElementById('jsTest')
let cssTest = document.getElementById('cssTest');
let htmlTest = document.getElementById('htmlTest');
let pTest = document.getElementById('pTest');
let cppTest = document.getElementById('cppTest');

pTest.addEventListener('click', () => {
window.location.href = '/testcomponent/p.html';
});
htmlTest.addEventListener('click', () => {
window.location.href = '/testcomponent/html.html';
});

cppTest.addEventListener('click', () => {
window.location.href = '/testcomponent/cpp.html';
});
jsTest.addEventListener('click', () => {
window.location.href = '/testcomponent/js.html';
});
cssTest.addEventListener('click', () => {
window.location.href = '/testcomponent/css.html';
});


let profileButton = document.getElementById('profileButton')
profileButton.addEventListener('click' , ()=>{
    window.location.href='/profile/profile.html'
})
