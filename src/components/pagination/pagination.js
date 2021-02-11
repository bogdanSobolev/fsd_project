import $ from 'jquery';
import pagination from 'simple-pagination.js';

let $paginationList = $('.pagination__pages-block');

$paginationList.each(function(){
    let items = $(this).data('items');
    let itemsOnPage = $(this).data('itemsOnPage');
    let activePage = $(this).data('activePage');
    let hrefTextPrefix = $(this).data('pagePath');

    console.log(items);
    console.log(itemsOnPage);
    console.log(activePage);
    console.log(hrefTextPrefix);


    $(this).pagination({
        items: items, //pug
        itemsOnPage: itemsOnPage, //pug
        currentPage: activePage,
        displayedPages: 3,
        edges: 1,
        hrefTextPrefix: hrefTextPrefix,
        prevText: "<span class='material-icons pagination-nav-arrow pagination-nav-arrow_prev'>arrow_forward</span>",
        nextText: "<span class='material-icons pagination-nav-arrow pagination-nav-arrow_next'>arrow_forward</span>"
    });
});