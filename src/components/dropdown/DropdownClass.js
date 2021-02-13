import $ from 'jquery';
import inputItem from './__input-list-item/dropdown__input-list-item.pug'

export default class DropdownClass {
    constructor(dropdown, inputList){
        this.$dropdown = dropdown;
        this.values = null;
        this.inputList = inputList ? inputList : null;
        this.handlersInstalled = false;
    }

    getCase(_number, _cases){
        var base = _number - Math.floor(_number / 100) * 100;
        var result;

        if (base > 9 && base < 20) {
            result = _cases[2];

        } else {
            var remainder = _number - Math.floor(_number / 10) * 10;

            if (1 == remainder) result = _cases[0];
            else if (0 < remainder && 5 > remainder) result = _cases[1];
            else result = _cases[2];
        }

        return result;
    }

    setValues(){
        console.error('метод setValues() не определен');
    }

    setHandlersInstalled(){
        this.handlersInstalled = !this.handlersInstalled;
    }

    setInputValue(input, value){
        if(Number.isInteger(input.minValue) && Number.isInteger(input.maxValue)){
            if(input.minValue > value){
                input.value = +input.minValue;
            } else if (input.maxValue < value){
                input.value = +input.maxValue;
            } else {
                input.value = value;
            }
        } else if(Number.isInteger(input.minValue)){
            if(input.minValue > value){
                input.value = +input.minValue;
            } else {
                input.value = value;
            }
        } else if(Number.isInteger(input.maxValue)){
            if(input.maxValue < value){
                input.value = +input.maxValue;
            } else {
                input.value = value;
            }
        } else {
            input.value = value;
        }
    }

    setValuesFromDataValues(values){
        values.forEach(value => {
            let input = this.searchInputByName(value.name);
            this.setInputValue(input, value.value);
        });
    }

    setHandlers(){
        if(!this.handlersInstalled){
            $(document).on('click', e => {
                if (!this.$dropdown.is(e.target) && this.$dropdown.has(e.target).length === 0){
                    this.$dropdown.removeClass('dropdown_active');
                }
            });
    
            this.$dropdown.children('.dropdown__values-input').on('click', e => {
                this.$dropdown.toggleClass('dropdown_active');
            });
            this.setHandlersInstalled();
        }
        
    }

    setInputItemHandlers($inputItem, $inputField, $inputValue, input){


        $inputItem.find('.dropdown__set-value-plus').on('click', e => {
            this.updateInput($inputItem, $inputField, $inputValue, input, "+");
        });

        $inputItem.find('.dropdown__set-value-minus').on('click', e => {
            this.updateInput($inputItem, $inputField, $inputValue, input, "-");
        });
    }

    changeInputValue(input, operation){
        switch(operation){
            case "+":{
                if(!Number.isInteger(input.maxValue)){
                    this.setInputValue(input, input.value + 1);
                } else if(input.value + 1 <= input.maxValue){
                    this.setInputValue(input, input.value + 1);
                }
                break;}
            case "-":{
                if(!Number.isInteger(input.minValue) && input.value - 1 >= 0){
                    this.setInputValue(input, input.value - 1);
                } else if(input.value - 1 >= input.minValue){
                    this.setInputValue(input, input.value - 1);
                }
                break;}
            default:
                break;
        }
    }

    updateInput($inputItem, $inputField, $inputValue, input, operation){
        this.changeInputValue(input, operation);
        $inputField.val(input.value);
        $inputValue.text(input.value);
        this.printValues();
        this.whichBtnIsDisabled($inputItem, $inputValue, input);
    }

    printValues(){
        this.setValues();
        this.$dropdown.find('.dropdown__values-input-text').text(this.values);
    }

    whichBtnIsDisabled($inputItem, $inputValue, input){
        if (input.minValue){
            if(input.minValue >= $inputValue.text()){
                this.btnStateDisabled($inputItem.find('.dropdown__set-value-minus'), true);
            } else if (input.minValue < $inputValue.text()){
                this.btnStateDisabled($inputItem.find('.dropdown__set-value-minus'), false);
            }
        } else{
            if(0 == $inputValue.text()){
                this.btnStateDisabled($inputItem.find('.dropdown__set-value-minus'), true);
            } else if (0 < $inputValue.text()){
                this.btnStateDisabled($inputItem.find('.dropdown__set-value-minus'), false);
            }
        }
        if (input.maxValue){
            if(input.maxValue <= $inputValue.text()){
                this.btnStateDisabled($inputItem.find('.dropdown__set-value-plus'), true);
            } else if (input.maxValue > $inputValue.text()){
                this.btnStateDisabled($inputItem.find('.dropdown__set-value-plus'), false);
            }
        }
    }

    btnStateDisabled($btn, state){
        const disbledClass = 'dropdown__set-value-btn_disabled';
        if(this.renderMod){
            this.renderMod();
        }
        if(state){
            if($btn.hasClass(disbledClass)){
                return
            } else {
                $btn.addClass(disbledClass);
            }
        } else {
            $btn.removeClass(disbledClass);
        }
        
    }

    searchInputByName(name){
        let input = null;
        for(let i = 0; i< this.inputList.length; i++){
            if(this.inputList[i].name == name){
                input = this.inputList[i];
            }
        }
        return input;
    }

    renderInputList(){
        let $dropdownInputList = this.$dropdown.find('.dropdown__input-list');

        if(this.$dropdown.data('values')){
            this.setValuesFromDataValues(this.$dropdown.data('values'));
        }

        this.setHandlers();
        this.printValues();
        $dropdownInputList.empty ();
        this.inputList.forEach(input => {
            const $inputItem = jQuery(inputItem);
    
            let $inputField = $inputItem.find('.dropdown__input');
            $inputField.attr("name", input.name);
            $inputField.val(input.value);

            let $inputName = $inputItem.find('.dropdown__input-name');
            $inputName.text(input.name);

            let $inputValue = $inputItem.find('.dropdown__input-value');
            $inputValue.text(input.value);

            this.whichBtnIsDisabled($inputItem, $inputValue, input);

            $inputItem.find('.dropdown__set-value-plus').off();
            $inputItem.find('.dropdown__set-value-minus').off();

            this.setInputItemHandlers($inputItem, $inputField, $inputValue, input);

            $dropdownInputList.append($inputItem);

            if(this.renderMod){
                this.renderMod();
            }
        });
    }
}