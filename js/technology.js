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
const buttonsArr = Array.from(technologyButtons);
console.log(buttonsArr);
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
			buttonsArr.forEach(function (button) {
				const index = buttonsArr.indexOf(e.target);
				technologyContent(index);
				button.classList.remove('selected-technology');
				e.target.classList.add('selected-technology');
			});
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
