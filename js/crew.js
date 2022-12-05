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

const changeContent = e => {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			//first member
			const firstMemberImg = data.crew[0].images.png;
			const firstMemberName = data.crew[0].name;
			const firstMemberSpecialization = data.crew[0].role;
			const firstMemberDescription = data.crew[0].bio;
			//second
			const secondMemberImg = data.crew[1].images.png;
			const secondMemberName = data.crew[1].name;
			const secondMemberSpecialization = data.crew[1].role;
			const secondMemberDescription = data.crew[1].bio;
			//third
			const thirdMemberImg = data.crew[2].images.png;
			const thirdMemberName = data.crew[2].name;
			const thirdMemberSpecialization = data.crew[2].role;
			const thirdMemberDescription = data.crew[2].bio;
			//forth
			const fourthMemberImg = data.crew[3].images.png;
			const fourthMemberName = data.crew[3].name;
			const fourthMemberSpecialization = data.crew[3].role;
			const fourthMemberDescription = data.crew[3].bio;
			if (e.target === firstButton) {
				memberImg.setAttribute('src', firstMemberImg);
				memberSpecialization.textContent = `${firstMemberSpecialization}`;
				memberName.textContent = `${firstMemberName}`;
				memberDesc.textContent = `${firstMemberDescription}`;
				memberButtons.forEach(button => {
					button.classList.remove('selected-member');
				});
				firstButton.classList.add('selected-member');
			} else if (e.target === secondButton) {
				memberImg.setAttribute('src', secondMemberImg);
				memberSpecialization.textContent = `${secondMemberSpecialization}`;
				memberName.textContent = `${secondMemberName}`;
				memberDesc.textContent = `${secondMemberDescription}`;
				memberButtons.forEach(button => {
					button.classList.remove('selected-member');
				});
				secondButton.classList.add('selected-member');
			} else if (e.target === thirdButton) {
				memberImg.setAttribute('src', thirdMemberImg);
				memberSpecialization.textContent = `${thirdMemberSpecialization}`;
				memberName.textContent = `${thirdMemberName}`;
				memberDesc.textContent = `${thirdMemberDescription}`;
				memberButtons.forEach(button => {
					button.classList.remove('selected-member');
				});
				thirdButton.classList.add('selected-member');
			} else if (e.target === fourthButton) {
				memberImg.setAttribute('src', fourthMemberImg);
				memberSpecialization.textContent = `${fourthMemberSpecialization}`;
				memberName.textContent = `${fourthMemberName}`;
				memberDesc.textContent = `${fourthMemberDescription}`;
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
firstButton.addEventListener('click', changeContent);
secondButton.addEventListener('click', changeContent);
thirdButton.addEventListener('click', changeContent);
fourthButton.addEventListener('click', changeContent);
