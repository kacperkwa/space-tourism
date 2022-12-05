const menuButton = document.querySelector('.nav-container-mobile__menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');
const menuButtonImg = document.querySelector('.menu-button-img');
const firstButton = document.querySelector('.technology__btn--first');
const secondButton = document.querySelector('.technology__btn--second');
const thirdButton = document.querySelector('.technology__btn--third');
const technologyImg = document.querySelector('.technology__img');
const technologyName = document.querySelector('.technology__name');
const technologyDescription = document.querySelector(
	'.technology__description'
);
const URL = '../data.json';
const changeContent = e => {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			//first technology
			const firstTechImg = data.technology[0].images.landscape;
			const firstTechName = data.technology[0].name;
			const firstTechDescription = data.technology[0].description;
			//second technology
			const secondTechImg = data.technology[1].images.landscape;
			const secondTechName = data.technology[1].name;
			const secondTechDescription = data.technology[1].description;
			//third technology
			const thirdTechImg = data.technology[2].images.landscape;
			const thirdTechName = data.technology[2].name;
			const thirdTechDescription = data.technology[2].description;

			if (e.target === firstButton) {
				technologyImg.setAttribute('src', firstTechImg);
				technologyName.textContent = `${firstTechName}`;
				technologyDescription.textContent = `${firstTechDescription}`;
			} else if (e.target === secondButton) {
				technologyImg.setAttribute('src', secondTechImg);
				technologyName.textContent = `${secondTechName}`;
				technologyDescription.textContent = `${secondTechDescription}`;
			} else if (e.target === thirdButton) {
				technologyImg.setAttribute('src', thirdTechImg);
				technologyName.textContent = `${thirdTechName}`;
				technologyDescription.textContent = `${thirdTechDescription}`;
			}
		})
		.catch(err => console.log(err));
};

const showMenu = () => {
	navigationMobile.classList.toggle('active');
	menuButtonImg.classList.toggle('menu-button-img-change');
};

menuButton.addEventListener('click', showMenu);
firstButton.addEventListener('click', changeContent);
secondButton.addEventListener('click', changeContent);
thirdButton.addEventListener('click', changeContent);
