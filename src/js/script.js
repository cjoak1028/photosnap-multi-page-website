const hamburgerButton = document.querySelector('.btn-hamburger');
const header = document.querySelector('.header');

// Check whether browser is Safari or not
var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
const mediaQueryList = window.matchMedia("screen and (min-width: 47.8em)");

if (isSafari) {
    mediaQueryList.addListener((e) => {
        e.matches && header.classList.contains("show-menu") && toggleMenu();
    });
} else {
    mediaQueryList.addEventListener("change", (e) => {
        console.log('hello!');
        e.matches && header.classList.contains("show-menu") && toggleMenu();
    });
};

const toggleMenu = () => {
    hamburgerButton.classList.toggle('open');
    header.classList.toggle('show-menu');
}

hamburgerButton.addEventListener('click', () => {
    hamburgerButton.classList.toggle('open');
    header.classList.toggle('show-menu');
})