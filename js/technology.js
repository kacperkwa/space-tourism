const menuButton = document.querySelector('.nav-container-mobile__menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');
const menuButtonImg = document.querySelector('.menu-button-img');

const showMenu = () => {
	navigationMobile.classList.toggle('active');
	menuButtonImg.classList.toggle('menu-button-img-change');
};

menuButton.addEventListener('click', showMenu);
