import $ from 'jquery';
import inputItem from './__input-list-item/dropdown__input-list-item.pug'

export default class DropdownClass {
    constructor(dropdown){
        this.$dropdown = dropdown;
        // this.$inputItem = jQuery(inputItem);
        this.inputList = [
            {
                name: 'спальни',
                value: 0
            },
            {
                name: 'кровати',
                value: 0
            }
        ]
    }

    setDropdown(dropdown){
        this.$dropdown = dropdown;
    }

    setInputValue(index, value){
        this.inputList[index].value = value;
    }

    searchInput(input){
        let foundInput = null;
        this.inputList.forEach((item, index)=> {
            if(item.name == input){
                foundInput = [item, index];
            }
        });
        return foundInput;
    }

    changeInputValue(input, operation){
        switch(operation){
            case "+":{
                let foundInput = this.searchInput(input);
                let newValue = ++foundInput[0].value;
                let inputIndex = foundInput[1];
                this.setInputValue(inputIndex, newValue);
                break;}
            case "-":{
                let foundInput = this.searchInput(input);
                let newValue = --foundInput[0].value;
                let inputIndex = foundInput[1];
                this.setInputValue(inputIndex, newValue);
                break;}
            default:
                break;
        }
    }

    renderInputList(){
        let $dropdownInputList = this.$dropdown.find('.dropdown__input-list');
        //console.log($dropdownInputList);
        this.inputList.forEach(input => {
            const $inputItem = jQuery(inputItem);
            console.log(input);
            $inputItem.find('.dropdown__input-name').text(input.name);
            $inputItem.find('.dropdown__input-value').text(input.value);
            $dropdownInputList.append($inputItem);
        });
    }
    
    consoleLog(){
        let view = jQuery(inputItem);
        view.append('hi');
        $(".dropdown__input-list").append(view);
        console.log(this.inputList);
        this.changeInputValue('кровати', '+');
        console.log(this.inputList);
        console.log(this.dropdown);
    }
}