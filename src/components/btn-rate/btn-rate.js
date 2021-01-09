//import raty-js/lib/jquery.raty.js
//import 'raty-js';

import BtnRateClass from './BtnRateClass';

const $btnRateList = $(".btn-rate");


$btnRateList.each(function(){
    let btnRate = new BtnRateClass($(this));
    //console.log($(this));
    btnRate.render();
});