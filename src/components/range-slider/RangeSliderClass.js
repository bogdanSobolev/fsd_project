import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';


export default class RangeSlider {
    constructor($rangeSlider){
        this.$rangeSlider = $rangeSlider;
        this.maxValue = $rangeSlider.data('max-value') ? $rangeSlider.data('max-value') : 100000;
        this.minValue = $rangeSlider.data('min-value') ? $rangeSlider.data('min-value') : 0;
        this.startValue = $rangeSlider.data('start-value') ? $rangeSlider.data('start-value') : this.minValue;
        this.endValue = $rangeSlider.data('end-value') ? $rangeSlider.data('end-value') : this.maxValue;
        this.postfix = '&#8381';
    }




    render(){
        const rangeSliderSlider = this.$rangeSlider.find('.range-slider__slider')[0];
        const rangeSliderValueElement = this.$rangeSlider.find('.range-slider__value')[0];
        const rangeSliderInput = this.$rangeSlider.find('.range-slider__input')[0];
        const postfix = this.postfix;

        noUiSlider.create(rangeSliderSlider, {
            start: [this.startValue, this.endValue],
            connect: true,
            range: {
                'min': this.minValue,
                'max': this.maxValue
            },
            step: 1,

            format: {
                // 'to' the formatted value. Receives a number.
                to: function (value) {
                    // return Math.floor(value) + '&#8381';
                    return Math.floor(value);
                },
                // 'from' the formatted value.
                // Receives a string, should return a number.
                from: function (value) {
                    // let numberValue = Number(value.replace('&#8381', ''))
                    // let floorValue = Math.floor(numberValue);
                    // return floorValue;

                    let numberValue = Number(value)
                    let floorValue = Math.floor(numberValue);
                    return floorValue;
                }
            }
        });

        rangeSliderSlider.noUiSlider.on('update', function (values, handle) {
            //console.log(values);

            let valuesWithPostfix = values.map(value => {
                let valueString = value.toLocaleString();

                //let valueWithPostfix = value + postfix;

                let valueWithPostfix = valueString + postfix;

                //console.log(this);
                //console.log(valueWithPostfix);
                return valueWithPostfix;
            });

            

            rangeSliderValueElement.innerHTML = valuesWithPostfix.join(' - ');
            // let floorValues = values.map(value => {
            //     let numberValue = Number(value.replace('&#8381', ''))
            //     let floorValue = Math.floor(numberValue);
            //     return floorValue;
            // });
            rangeSliderInput.value = values;
        });
    }
}