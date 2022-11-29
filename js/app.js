const menuButton = document.querySelector('.nav-container-mobile__menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');
const menuButtonImg = document.querySelector('.menu-button-img');
const destinationContent = document.querySelector('.destination');
const moonBtn = document.querySelector('.moon-btn');
const marsBtn = document.querySelector('.mars-btn');
const europaBtn = document.querySelector('.europa-btn');
const titanBtn = document.querySelector('.titan-btn');
const destinationImg = document.querySelector('.destination__img');
const destinationName = document.querySelector('.destination__planet-name');
const destinationDescription = document.querySelector(
	'.destination__planet-description'
);
const destinationDistance = document.querySelector('.destination__distance');
const destinationTravel = document.querySelector('.destination__travel-time');
const URL = '../data.json';

const showMenu = () => {
	navigationMobile.classList.toggle('active');
	menuButtonImg.classList.toggle('menu-button-img-change');
};

const changeContent = e => {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			//moon
			const moonName = data.destinations[0].name;
			const moonDescription = data.destinations[0].description;
			const moonImg = data.destinations[0].images.png;
			const moonDistance = data.destinations[0].distance;
			const moonTravel = data.destinations[0].travel;
			//mars
			const marsName = data.destinations[1].name;
			const marsDescription = data.destinations[1].description;
			const marsImg = data.destinations[1].images.png;
			const marsDistance = data.destinations[1].distance;
			const marsTravel = data.destinations[1].travel;
			//europa
			const europaName = data.destinations[2].name;
			const europaDescription = data.destinations[2].description;
			const europaImg = data.destinations[2].images.png;
			const europaDistance = data.destinations[2].distance;
			const europaTravel = data.destinations[2].travel;
			//titan
			const titanName = data.destinations[3].name;
			const titanDescription = data.destinations[3].description;
			const titanImg = data.destinations[3].images.png;
			const titanDistance = data.destinations[3].distance;
			const titanTravel = data.destinations[3].travel;

			if (e.target === moonBtn) {
				destinationImg.setAttribute('src', moonImg);
				destinationName.textContent = `${moonName}`;
				destinationDescription.textContent = `${moonDescription}`;
				destinationDistance.textContent = `${moonDistance}`;
				destinationTravel.textContent = `${moonTravel}`;
			} else if (e.target === marsBtn) {
				destinationImg.setAttribute('src', marsImg);
				destinationName.textContent = `${marsName}`;
				destinationDescription.textContent = `${marsDescription}`;
				destinationDistance.textContent = `${marsDistance}`;
				destinationTravel.textContent = `${marsTravel}`;
			} else if (e.target === europaBtn) {
				destinationImg.setAttribute('src', europaImg);
				destinationName.textContent = `${europaName}`;
				destinationDescription.textContent = `${europaDescription}`;
				destinationDistance.textContent = `${europaDistance}`;
				destinationTravel.textContent = `${europaTravel}`;
			} else if (e.target === titanBtn) {
				destinationImg.setAttribute('src', titanImg);
				destinationName.textContent = `${titanName}`;
				destinationDescription.textContent = `${titanDescription}`;
				destinationDistance.textContent = `${titanDistance}`;
				destinationTravel.textContent = `${titanTravel}`;
			}
		})
		.catch(err => console.log(err));
};

menuButton.addEventListener('click', showMenu);
moonBtn.addEventListener('click', changeContent);
marsBtn.addEventListener('click', changeContent);
europaBtn.addEventListener('click', changeContent);
titanBtn.addEventListener('click', changeContent);
