const menuButton = document.querySelector('.nav-container-mobile__menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');
const menuButtonImg = document.querySelector('.menu-button-img');
const firstButton = document.querySelector('.technology__btn--first');
const secondButton = document.querySelector('.technology__btn--second');
const thirdButton = document.querySelector('.technology__btn--third');
const technologyButtons = document.querySelectorAll('.technology__btn');
const technologyImg = document.querySelector('.technology__img');
const technologyImgDesktop = document.querySelector('.technology__img-desktop');
const technologyName = document.querySelector('.technology__name');
const technologyDescription = document.querySelector(
	'.technology__description'
);
const selectedTechnology = document.querySelector('.selected-technology');
const URL = '../data.json';

const addSelectedClass = e => {
	technologyButtons.forEach(button => {
		button.classList.remove('selected-technology');
	});
	e.target.classList.add('selected-technology');
};
const dataChange = (img, name, technology, imgDesktop) => {
	technologyImg.setAttribute('src', img);
	technologyImgDesktop.setAttribute('src', imgDesktop);
	technologyName.textContent = `${name}`;
	technologyDescription.textContent = `${technology}`;
};
const changeContent = e => {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			console.log(data);
			const technologyContent = id => {
				const techImg = data.technology[id].images.landscape;
				const techImgDesktop = data.technology[id].images.portrait;
				const techName = data.technology[id].name;
				const techDescription = data.technology[id].description;
				dataChange(techImg, techName, techDescription, techImgDesktop);
			};

			if (e.target === firstButton) {
				technologyContent(0);
				addSelectedClass(e);
			} else if (e.target === secondButton) {
				technologyContent(1);
				addSelectedClass(e);
			} else if (e.target === thirdButton) {
				technologyContent(2);
				addSelectedClass(e);
			}
		})
		.catch(err => console.log(err));
};

const showMenu = () => {
	navigationMobile.classList.toggle('active');
	menuButtonImg.classList.toggle('menu-button-img-change');
};

menuButton.addEventListener('click', showMenu);
technologyButtons.forEach(button =>
	button.addEventListener('click', changeContent)
);
