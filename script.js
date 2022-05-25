const burgerButton = document.querySelector('.burger-button');
const burgerMenu = document.querySelector('.burger-menu');
const BODY = document.querySelector('body');
const burgerLink = document.querySelectorAll('.header-item');

burgerButton.addEventListener('click', openBurgerMenu);
burgerMenu.addEventListener('click', closeBurgerMenu);
burgerLink.forEach(link => link.addEventListener('click', closeBurgerMenu));
BODY.addEventListener('click', (el) => {
    if (!el.target.closest('.burger-menu') && !el.target.closest('.burger-button') ) 
    closeBurgerMenu();
})


function openBurgerMenu() {
    burgerButton.classList.toggle('open');
    burgerMenu.classList.toggle('open');
    burgerMenu.classList.toggle('shadow');
    BODY.classList.toggle('scroll-inactive');
}

function closeBurgerMenu() {
    burgerButton.classList.remove('open');
    burgerMenu.classList.remove('open');
    burgerMenu.classList.remove('shadow');
    BODY.classList.remove('scroll-inactive');
}