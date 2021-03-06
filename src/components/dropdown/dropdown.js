import './__input-list-item/dropdown__input-list-item.scss';
import './_active/dropdown_active.scss';

import DropdownGuestsClass from './_guests/DropdownGuestsClass';
import DropdownLocationClass from './_location/DropdownLocationClass';

const modificatorList = [
    {
        name: 'dropdown_guests',
        classDropdown: DropdownGuestsClass,
        inputList: [
            {
                name: 'взрослые',
                value: 0,
                minValue: 1,
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
    },
    {
        name: 'dropdown_location',
        classDropdown: DropdownLocationClass,
        inputList: [
            {
                name: 'спальни',
                value: 1,
                minValue: 1,
                maxValue: null,
                cases: ["спальня", "спальни", "спален"]
            },
            {
                name: 'кровати',
                value: 1,
                minValue: 1,
                maxValue: 10,
                cases: ["кровать", "кровати", "кроватей"]
            },
            {
                name: 'ванные комнаты',
                value: 0,
                minValue: 0,
                maxValue: 10,
                cases: ["ванная комната", "ванные комнаты", "ванных комнат"]
            }
        ]
    }
]

function searchModificator(item){
    let modificator = null;
    modificatorList.forEach((el) => {
        if (item.hasClass(el.name)){
            modificator = el;
        }
    });
    return modificator;
}


let $dropdownList = $('.dropdown');

$dropdownList.each(function(){

    let modificator = searchModificator($(this));
    let inputList = modificator.inputList.map(a => ({...a}));

    if(modificator){
        const dropdown = new modificator.classDropdown($(this), inputList);
        dropdown.renderInputList();
    }
});