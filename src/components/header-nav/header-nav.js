console.log('header-nav');
const activePage = document.querySelector('.header-nav__link_active-page');
//const headerMenuButton = document.querySelector('.header-nav__btn-menu');
const headerMenu = document.querySelector('.header-nav__navigation-n-profile');


const headerMenuButtons = document.querySelectorAll('.header-nav__btn-menu');
const headerLinkItems = document.querySelectorAll('.header-nav__drop-down-title');





activePage.addEventListener('click', event => {
    event.preventDefault();
})

// headerMenuButton.addEventListener('click', event => {
//     event.preventDefault();
//     headerMenuButton.classList.toggle("header-nav__btn-menu_active");
//     headerMenu.classList.toggle("header-nav__navigation-n-profile_active");
// })

headerMenuButtons.forEach((item) => item.addEventListener('click', (event) => {
    event.preventDefault();
    item.classList.toggle("header-nav__btn-menu_active");
    item.nextElementSibling.classList.toggle("header-nav__navigation-n-profile_active");
}))

headerLinkItems.forEach((item) => item.addEventListener(`click`, (event) => {
    event.preventDefault();
    console.log('click');
    item.classList.toggle("header-nav__drop-down-title_active");
    item.parentElement.classList.toggle("header-nav__drop-down_active");
    item.nextElementSibling.classList.toggle("header-nav__drop-down-list_active");
    //console.log(item.nextElementSibling)
}));