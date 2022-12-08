const menuButton = document.querySelector('.nav-container-mobile__menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');
const menuButtonImg = document.querySelector('.menu-button-img');
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
			const technologyContent = id => {
				const techImg = data.technology[id].images.landscape;
				const techImgDesktop = data.technology[id].images.portrait;
				const techName = data.technology[id].name;
				const techDescription = data.technology[id].description;
				dataChange(techImg, techName, techDescription, techImgDesktop);
			};

			technologyButtons.forEach(function (button, index) {
				button.addEventListener('click', function () {
					technologyContent(index);
				});
				button.classList.remove('selected-technology');
				e.target.classList.add('selected-technology');
			});
		})
		.catch(err => console.log(err));
};
technologyButtons.forEach(button =>
	button.addEventListener('click', changeContent)
);

const showMenu = () => {
	navigationMobile.classList.toggle('active');
	menuButtonImg.classList.toggle('menu-button-img-change');
};
menuButton.addEventListener('click', showMenu);
