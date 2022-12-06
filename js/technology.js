const menuButton = document.querySelector('.nav-container-mobile__menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');
const menuButtonImg = document.querySelector('.menu-button-img');
const firstButton = document.querySelector('.technology__btn--first');
const secondButton = document.querySelector('.technology__btn--second');
const thirdButton = document.querySelector('.technology__btn--third');
const technologyButtons = document.querySelectorAll('.technology__btn');
const technologyImg = document.querySelector('.technology__img');
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
const dataChange = (img, name, technology) => {
	technologyImg.setAttribute('src', img);
	technologyName.textContent = `${name}`;
	technologyDescription.textContent = `${technology}`;
};
const changeContent = e => {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			const technologyContent = id => {
				const TechImg = data.technology[id].images.landscape;
				const TechName = data.technology[id].name;
				const TechDescription = data.technology[id].description;
				dataChange(TechImg, TechName, TechDescription);
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
