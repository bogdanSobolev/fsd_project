import BtnRateClass from './BtnRateClass';

const $btnRateList = $(".btn-rate");

$btnRateList.each(function(){
    let btnRate = new BtnRateClass($(this));
    btnRate.render();
});