const hamburgerButton = document.querySelector('.hamburger-btn');
const header = document.querySelector('.header');

// Check whether browser is Safari or not
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

const mediaQueryList = window.matchMedia("screen and (min-width: 47.8em)");

// Close mobile menu when it's open during transition from mobile to tablet screen
if (isSafari) {
    mediaQueryList.addListener((e) => {
        e.matches && header.classList.contains("menu-drop") && toggleMenu();
    });
} else {
    mediaQueryList.addEventListener("change", (e) => {
        console.log('hello!');
        e.matches && header.classList.contains("menu-drop") && toggleMenu();
    });
};

const toggleMenu = () => {
    hamburgerButton.classList.toggle('open');
    header.classList.toggle('menu-drop');
};

hamburgerButton.addEventListener('click', () => {
    toggleMenu();
});