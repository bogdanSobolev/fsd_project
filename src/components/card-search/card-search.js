import $ from 'jquery'

const $cardSearchList = $('.card-search');

function setWrap($card){
    let fieldsBlock = $card.find('.card-search__date-dropdown-fields-block');
    let withFieldsBlock = fieldsBlock.width();

    if(withFieldsBlock < 280){
        if(fieldsBlock.css('flex-wrap') == 'nowrap'){
            fieldsBlock.css('flex-wrap', 'wrap')
            fieldsBlock.find('.card-search__date-dropdown-wrp').css('margin-right', 0);
        };
    } else{
        if(fieldsBlock.css('flex-wrap') == 'wrap'){
            fieldsBlock.css('flex-wrap', 'nowrap')
            fieldsBlock.find('.card-search__date-dropdown-wrp:first').css('margin-right', '20px');
        }
    }
};

$cardSearchList.each(function(){
    setWrap($(this));
});

jQuery(window).resize(function() {
    $cardSearchList.each(function(){
        setWrap($(this));
    });
});