import RangeSliderClass from './RangeSliderClass'

const $rangeSliderList = $(".range-slider")

$rangeSliderList.each(function(){
    let rangeSlider = new RangeSliderClass($(this));
    rangeSlider.render();
});