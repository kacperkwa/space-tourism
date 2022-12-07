const menuButton = document.querySelector('.nav-container-mobile__menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');
const menuButtonImg = document.querySelector('.menu-button-img');
const destinationContent = document.querySelector('.destination');
const firstButton = document.querySelector('.crew__nav-item--first');
const secondButton = document.querySelector('.crew__nav-item--second');
const thirdButton = document.querySelector('.crew__nav-item--third');
const fourthButton = document.querySelector('.crew__nav-item--fourth');
const memberSpecialization = document.querySelector('.crew__member-spec');
const memberName = document.querySelector('.crew__member-name');
const memberDesc = document.querySelector('.crew__member-desc');
const memberImg = document.querySelector('.crew__img');
const memberButtons = document.querySelectorAll('.crew__button ');
const URL = '../data.json';

const dataChange = (name, desc, img, spec) => {
	memberName.textContent = `${name}`;
	memberDesc.textContent = `${desc}`;
	memberImg.setAttribute('src', img);
	memberSpecialization.textContent = `${spec}`;
};
const changeContent = e => {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			const memberContent = id => {
				const dataName = data.crew[id].name;
				const dataDescription = data.crew[id].bio;
				const dataImg = data.crew[id].images.png;
				const dataSpecialization = data.crew[id].role;
				dataChange(dataName, dataDescription, dataImg, dataSpecialization);
			};
			if (e.target === firstButton) {
				memberContent(0);
				memberButtons.forEach(button => {
					button.classList.remove('selected-member');
				});
				firstButton.classList.add('selected-member');
			} else if (e.target === secondButton) {
				memberContent(1);
				memberButtons.forEach(button => {
					button.classList.remove('selected-member');
				});
				secondButton.classList.add('selected-member');
			} else if (e.target === thirdButton) {
				memberContent(2);
				memberButtons.forEach(button => {
					button.classList.remove('selected-member');
				});
				thirdButton.classList.add('selected-member');
			} else if (e.target === fourthButton) {
				memberContent(3);
				memberButtons.forEach(button => {
					button.classList.remove('selected-member');
				});
				fourthButton.classList.add('selected-member');
			}
		})
		.catch(err => console.log(err));
};
const showMenu = () => {
	navigationMobile.classList.toggle('active');
	menuButtonImg.classList.toggle('menu-button-img-change');
};
menuButton.addEventListener('click', showMenu);
memberButtons.forEach(button =>
	button.addEventListener('click', changeContent)
);
