import $ from 'jquery';
import DropdownClass from '../DropdownClass';
import './dropdown_guests.scss'; 
import buttonMod from '../__button-mod/dropdown__button-mod.pug';
import '../__button-mod/dropdown__button-mod.scss';

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
        for(let i=0; i<this.inputList.length; i++){
            this.setInputValue(this.inputList[i], 0);
            
            // this.setValuesFromDataValues();
            
        }
        // console.log("this.values");
        // console.log(this);
        this.printValues();
        // this.$dropdown.find('.dropdown__btn_clear').off();
        // this.$dropdown.find('.dropdown__btn_apply').off();
        // this.renderInputList();
    }

    areTheValuesMinimal(){
        let areTheValuesMinimal = false;

        let i = 0;
        while(i < this.inputList.length){
            if(this.inputList[i].minValue){
                if(this.inputList[i].value > this.inputList[i].minValue){
                    areTheValuesMinimal = false;
                    break;
                } else{
                    areTheValuesMinimal = true;
                }
            }else{
                if(this.inputList[i].value > 0){
                    areTheValuesMinimal = false;
                    break;
                } else {
                    areTheValuesMinimal = true;
                }
            }
            i++;
        }

        return areTheValuesMinimal;
    }

    renderMod(){
        const $buttonMod = jQuery(buttonMod);
        const $dropdownWrp = this.$dropdown.find(".dropdown__wrp");

        if(this.areTheValuesMinimal()){
            let $clearBtn = $buttonMod.find('.dropdown__btn_clear');
            $clearBtn.remove();
        }

        $dropdownWrp.find('.dropdown__button-mod').remove();
        $dropdownWrp.append($buttonMod);
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