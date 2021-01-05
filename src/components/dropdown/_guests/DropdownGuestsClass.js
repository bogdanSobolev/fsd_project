import $ from 'jquery';
import DropdownClass from '../DropdownClass';
import buttonsMod from '../__buttons-mod/dropdown__button-mod.pug';
import '../__buttons-mod/dropdown__button-mod.scss';

export default class DropdownGuestsClass extends DropdownClass {
    constructor(dropdown, inputList){
        super(dropdown, inputList);
    }


    setValues(){
        let guestsSum = 0;

        this.inputList.forEach((input) => {
            guestsSum += input.value;
        });

        let valuesString = null;

        if(guestsSum == 0){
            valuesString = "Сколько гостей";
        } else {
            valuesString = `${guestsSum} ${this.getCase(guestsSum, ["гость", "гостя", "гостей"])}`;
        }
        this.values = valuesString;
    }

    clearValues(){
        console.log(this.inputList.length);
        for(let i=0; i<this.inputList.length; i++){
            this.setInputValue(this.inputList[i], 0);
            console.log(this.inputList[i]);
        }
        this.renderInputList();
    }

    renderMod(){
        console.log('ya mod');
        const $buttonsMod = jQuery(buttonsMod);
        const $dropdownWrp = this.$dropdown.find(".dropdown__wrp");
        $dropdownWrp.find('.dropdown__button-mod').remove();
        $dropdownWrp.append($buttonsMod);
        this.$dropdown.find('.dropdown__btn_clear').on('click', e => {
            e.preventDefault();
            this.clearValues();
        });
        this.$dropdown.find('.dropdown__btn_apply').on('click', e => {
            e.preventDefault();
            this.$dropdown.removeClass('dropdown_active');
        })
    }
}