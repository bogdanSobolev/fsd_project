 ('header-nav');
const activePage = document.querySelector('.header-nav__link_active-page');
const headerMenu = document.querySelector('.header-nav__navigation-n-profile');
const headerMenuButtons = document.querySelectorAll('.header-nav__btn-menu');
const headerLinkItems = document.querySelectorAll('.header-nav__drop-down-title');

activePage.addEventListener('click', event => {
    event.preventDefault();
})

headerMenuButtons.forEach((item) => item.addEventListener('click', (event) => {
    event.preventDefault();
    item.classList.toggle("header-nav__btn-menu_active");
    item.nextElementSibling.classList.toggle("header-nav__navigation-n-profile_active");
}))

headerLinkItems.forEach((item) => item.addEventListener(`click`, (event) => {
    event.preventDefault();
     ('click');
    item.classList.toggle("header-nav__drop-down-title_active");
    item.parentElement.classList.toggle("header-nav__drop-down_active");
    item.nextElementSibling.classList.toggle("header-nav__drop-down-list_active");
}));