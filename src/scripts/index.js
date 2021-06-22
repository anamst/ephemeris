const menuButton = document.querySelector('.js-menu-button');
const overlay = document.querySelector('.js-overlay');
const yearElement = document.querySelector('.js-year');
mybutton = document.getElementById("myBtn");

// Initialize AOS
AOS.init();

// Set year
yearElement.innerHTML = new Date().getFullYear();

// Open and close menu
const toggleOverlay = () => {
	menuButton.classList.toggle('is-active');
	overlay.classList.toggle('overlay--active');
	document.body.classList.toggle('no-scroll');
}

menuButton.addEventListener('click', toggleOverlay);

document.querySelectorAll('a.overlay-navigation__link').forEach(e => {
	e.addEventListener('click', toggleOverlay)
});

$(window).resize(() => {
	let body = document.body;
	if (body.clientWidth > 992 && overlay.classList.contains("overlay--active")) {
		toggleOverlay();
	}
});

// Scrollup
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}