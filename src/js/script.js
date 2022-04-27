const hamburgerButton = document.querySelector('.btn-hamburger');
const header = document.querySelector('.header');

hamburgerButton.addEventListener('click', (e) => {
    hamburgerButton.classList.toggle('open');
    header.classList.toggle('show');
})