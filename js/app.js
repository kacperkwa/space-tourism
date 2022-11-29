const menuButton = document.querySelector('.nav-container-mobile__menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');
const menuButtonImg = document.querySelector('.menu-button-img');
const destinationContent = document.querySelector('.destination');
const moonBtn = document.querySelector('.moon-btn');
const marsBtn = document.querySelector('.mars-btn');
const europaBtn = document.querySelector('.europa-btn');
const titanBtn = document.querySelector('.titan-btn');

const showMenu = () => {
	navigationMobile.classList.toggle('active');
	menuButtonImg.classList.toggle('menu-button-img-change');
};

menuButton.addEventListener('click', showMenu);
