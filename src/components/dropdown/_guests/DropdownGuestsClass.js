import $ from 'jquery';
import DropdownClass from '../DropdownClass';
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
        //console.log(this.inputList.length);
        for(let i=0; i<this.inputList.length; i++){
            this.setInputValue(this.inputList[i], 0);
            //console.log(this.inputList[i]);
        }
        //this.$dropdown.removeClass('dropdown_active');

        this.$dropdown.find('.dropdown__btn_clear').off();
        this.$dropdown.find('.dropdown__btn_apply').off();
        this.renderInputList();
        //this.renderMod();
    }

    areTheValuesMinimal(){
        //console.log(this.inputList);

        let areTheValuesMinimal = false;

        let i = 0;
        while(i < this.inputList.length){
            if(this.inputList[i].minValue){
                if(this.inputList[i].value > this.inputList[i].minValue){
                    areTheValuesMinimal = false;
                    break;
                } else{
                    areTheValuesMinimal = true;
                    //i++;
                }
                //onsole.log(this.inputList[i]);
                //console.log('minValue');
            }else{
                if(this.inputList[i].value > 0){
                    areTheValuesMinimal = false;
                    break;
                } else {
                    areTheValuesMinimal = true;
                    //i++;
                }
            }
            i++;
        }

        return areTheValuesMinimal;

        // this.inputList.some(input => {
        //     if(input.minValue){
        //         if(input.value > input.minValue){
        //             areTheValuesMinimal = false
        //         }
        //         console.log(input);
        //         console.log('minValue');
        //     }
        // })


        // if(Number.isInteger(input.minValue) && Number.isInteger(input.maxValue)){
        //     if(input.minValue > value){
        //         input.value = +input.minValue;
        //     } else if (input.maxValue < value){
        //         input.value = +input.maxValue;
        //     } else {
        //         input.value = value;
        //     }
        // } else if(Number.isInteger(input.minValue)){
        //     if(input.minValue > value){
        //         input.value = +input.minValue;
        //     } else {
        //         input.value = value;
        //     }
        // } else if(Number.isInteger(input.maxValue)){
        //     if(input.maxValue < value){
        //         input.value = +input.maxValue;
        //     } else {
        //         input.value = value;
        //     }
        // } else {
        //     input.value = value;
        // }
    }

    renderMod(){
        //console.log('ya mod');
        const $buttonMod = jQuery(buttonMod);

        //console.log(this.areTheValuesMinimal());


        const $dropdownWrp = this.$dropdown.find(".dropdown__wrp");

        if(this.areTheValuesMinimal()){
            //console.log('minimum');
            let $clearBtn = $buttonMod.find('.dropdown__btn_clear');
            $clearBtn.remove();
        }

        $dropdownWrp.find('.dropdown__button-mod').remove();
        //console.log($buttonMod);
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