import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss'; 

const $roomSliderList = $('.room-slider');

$roomSliderList.each(function(){
    let $roomSlider = $(this)
    $roomSlider.slick({
        infinite: true,
        autoplay: true,
        autoplay: 3000,
        arrows: false,
        zIndex: 2
    })
    
});