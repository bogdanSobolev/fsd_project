import $ from 'jquery';
import DropdownClass from '../DropdownClass';

export default class DropdownLocationClass extends DropdownClass {
    constructor(dropdown, inputList){
        super(dropdown, inputList);
    }

    setValues(){
        let valuesString = "";

        this.inputList.forEach((input, index) => {
            let inputString
            if(index == 0){
                inputString = `${input.value} ${this.getCase(input.value, input.cases)}`;
            } else{
                inputString = `, ${input.value} ${this.getCase(input.value, input.cases)}`;
            }
            valuesString += inputString;
        });

        this.values = valuesString;
    }
}