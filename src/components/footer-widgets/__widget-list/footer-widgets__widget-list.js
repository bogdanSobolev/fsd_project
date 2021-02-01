const footerWidgetTitles = document.querySelectorAll('.footer-widgets__widget-list-title');

footerWidgetTitles.forEach((item) => item.addEventListener(`click`, (event) => {
    console.log('click');
    item.classList.toggle("footer-widgets__widget-title_active");
    item.nextElementSibling.classList.toggle("footer-widgets__widget-list-items_active");
}));