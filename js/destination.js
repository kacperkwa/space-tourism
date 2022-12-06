const menuButton = document.querySelector('.nav-container-mobile__menu-button');
const navigationMobile = document.querySelector('.navigation-mobile');
const menuButtonImg = document.querySelector('.menu-button-img');
const destinationContent = document.querySelector('.destination');
const destinationButtons = document.querySelectorAll('.destination-btn');
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

const dataChange = (name, descaription, img, distance, travel) => {
	destinationImg.setAttribute('src', img);
	destinationName.textContent = `${name}`;
	destinationDescription.textContent = `${descaription}`;
	destinationDistance.textContent = `${distance}`;
	destinationTravel.textContent = `${travel}`;
};

const changeContent = e => {
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			const planetContent = id => {
				const planetName = data.destinations[id].name;
				const planetDescription = data.destinations[id].description;
				const planetImg = data.destinations[id].images.png;
				const planetDistance = data.destinations[id].distance;
				const planetTravel = data.destinations[id].travel;
				dataChange(
					planetName,
					planetDescription,
					planetImg,
					planetDistance,
					planetTravel
				);
			};
			if (e.target === moonBtn) {
				planetContent(0);
			} else if (e.target === marsBtn) {
				planetContent(1);
			} else if (e.target === europaBtn) {
				planetContent(2);
			} else if (e.target === titanBtn) {
				planetContent(3);
			}
		})
		.catch(err => console.log(err));
};
const showMenu = () => {
	navigationMobile.classList.toggle('active');
	menuButtonImg.classList.toggle('menu-button-img-change');
};

menuButton.addEventListener('click', showMenu);
destinationButtons.forEach(button => {
	button.addEventListener('click', changeContent);
});
