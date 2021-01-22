import $ from 'jquery';

import CardOrderClass from './CardOrderClass';



const $cardOrderList = $('.card-order');



$cardOrderList.each(function(){
    let $cardOrder = new CardOrderClass($(this));
    $cardOrder.render();
});