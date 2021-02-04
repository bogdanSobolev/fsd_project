import './_active/expandable-checkbox-list_active.scss';

let $expandableCheckboxListList = $('.expandable-checkbox-list');

$expandableCheckboxListList.on('click', e => {
    $(e.currentTarget).toggleClass('expandable-checkbox-list_active');
    console.log($(e.currentTarget));
});