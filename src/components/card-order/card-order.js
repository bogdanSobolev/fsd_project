import $ from 'jquery';

import CardOrderClass from './CardOrderClass';



const $cardOrderList = $('.card-order');

function setWrap($card){
    let fieldsBlock = $card.find('.card-order__date-dropdown-fields-block');
    let withFieldsBlock = fieldsBlock.width();

    if(withFieldsBlock < 280){
        if(fieldsBlock.css('flex-wrap') == 'nowrap'){
            fieldsBlock.css('flex-wrap', 'wrap')
            fieldsBlock.find('.card-order__date-dropdown-wrp').css('margin-right', 0);
        };
    } else{
        if(fieldsBlock.css('flex-wrap') == 'wrap'){
            fieldsBlock.css('flex-wrap', 'nowrap')
            //console.log(fieldsBlock.find('.card-order__date-dropdown-wrp'));
            // fieldsBlock.find('.card-search__date-dropdown-wrp')[0].css('margin-right', '20px');
            fieldsBlock.find('.card-order__date-dropdown-wrp:first').css('margin-right', '20px');
        }
    }
};

$cardOrderList.each(function(){
    let $cardOrder = new CardOrderClass($(this));
    $cardOrder.render();
    setWrap($(this));
});

jQuery(window).resize(function() {
    $cardOrderList.each(function(){
        setWrap($(this));
    });
});