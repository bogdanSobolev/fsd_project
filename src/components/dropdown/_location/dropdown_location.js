import DropdownLocationClass from './DropdownLocationClass';



let $dropdownList = $('.dropdown_location');

$dropdownList.each(function(){
    const inputList = [
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
    let dropdown = new DropdownLocationClass($(this), inputList);
    dropdown.renderInputList();
});