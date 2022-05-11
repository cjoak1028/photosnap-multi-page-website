const hamburgerButton = document.querySelector('.hamburger-btn');
const header = document.querySelector('.header');

const homeLink = document.querySelector('.home-link');
const storiesLinks = document.querySelectorAll('.stories-link');
const featuresLinks = document.querySelectorAll('.features-link');
const pricingLinks = document.querySelectorAll('.pricing-link');

const planSwitch = document.querySelector('.plan-switch input');
const switchLabels = document.querySelectorAll('.plan-switch__label');

const basicPrice = document.querySelector('.basic-price');
const proPrice = document.querySelector('.pro-price');
const businessPrice = document.querySelector('.business-price');

// Check whether browser is Safari or not
// var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

// const mediaQueryList = window.matchMedia("screen and (min-width: 47.8em)");

// Close mobile menu when it's open during transition from mobile to tablet screen
// if (isSafari) {
//     mediaQueryList.addListener((e) => {
//         e.matches && header.classList.contains("menu-drop") && toggleMenu();
//     });
// } else {
//     mediaQueryList.addEventListener("change", (e) => {
//         e.matches && header.classList.contains("menu-drop") && toggleMenu();
//     });
// };

const toggleMenu = () => {
    hamburgerButton.classList.toggle('open');
    header.classList.toggle('menu-drop');
};

hamburgerButton.addEventListener('click', () => {
    toggleMenu();
});

const init = () => {
    const currentURL = window.location.href;

    if (currentURL.includes('pricing')) {
        planSwitch.addEventListener('change', () => {
            switchLabels.forEach(label => {
                label.classList.toggle('selected');
            });

            if (planSwitch.checked) {
                basicPrice.innerHTML = '$190.00';
                proPrice.innerHTML = '$390.00';
                businessPrice.innerHTML = '$990.00';
            } else {
                basicPrice.innerHTML = '$19.00';
                proPrice.innerHTML = '$39.00';
                businessPrice.innerHTML = '$99.00';
            }
        });

        // Select header link
        pricingLinks.forEach(link => {
            link.classList.add('selected');
        });
    } else if (currentURL.includes('stories')) {
        storiesLinks.forEach(link => {
            link.classList.add('selected');
        });
    } else if (currentURL.includes('features')) {
        featuresLinks.forEach(link => {
            link.classList.add('selected');
        });
    } else {
        homeLink.classList.add('selected');
    }
}

init();