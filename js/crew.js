const menuButton = document.querySelector('.nav-container-mobile__menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');
const menuButtonImg = document.querySelector('.menu-button-img');
const destinationContent = document.querySelector('.destination');
const memberSpecialization = document.querySelector('.crew__member-spec');
const memberName = document.querySelector('.crew__member-name');
const memberDesc = document.querySelector('.crew__member-desc');
const memberImg = document.querySelector('.crew__img');
const memberButtons = document.querySelectorAll('.crew__button ');
const buttonsArr = Array.from(memberButtons);
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
			buttonsArr.forEach(function (button) {
				const index = buttonsArr.indexOf(e.target);
				memberContent(index);
				button.classList.remove('selected-member');
				e.target.classList.add('selected-member');
			});
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
