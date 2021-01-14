
let $expandableCheckboxListList = $('.expandable-checkbox-list');

$expandableCheckboxListList.on('click', e => {
    $(e.currentTarget).toggleClass('expandable-checkbox-list_active');
});