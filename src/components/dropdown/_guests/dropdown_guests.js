import DropdownGuestsClass from './DropdownGuestsClass';



let $dropdownList = $('.dropdown_guests');

$dropdownList.each(function(){
    const inputList = [
        {
            name: 'взрослые',
            value: 0,
            minValue: 0,
            maxValue: null,
        },
        {
            name: 'дети',
            value: 0,
            minValue: null,
            maxValue: null,
        },
        {
            name: 'младенцы',
            value: 0,
            minValue: null,
            maxValue: null,
        },
    ]
    let dropdown = new DropdownGuestsClass($(this), inputList);
    dropdown.renderInputList();
});