import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss'; 

const $grandSliderList = $('.grand-slider');

$grandSliderList.each(function(){
    let $grandSlider = $(this)
    $grandSlider.slick({
        infinite: true,
        autoplay: true,
        autoplay: 3000,
        arrows: false,
        zIndex: 2
    })
});