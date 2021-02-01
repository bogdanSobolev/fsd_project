


import PaginationClass from './PaginationClass';


let $paginationList = $('.pagination');

$paginationList.each(function(){
    let paginationComponent = new PaginationClass($(this));
    paginationComponent.render();
});