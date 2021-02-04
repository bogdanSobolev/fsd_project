import $ from 'jquery';
import 'slick-carousel';
import 'slick-carousel/slick/slick.scss'; 
//import 'slick-carousel/slick/slick-theme.scss';



const cardRoomList = $('.card-room');


cardRoomList.each(function(){
    let $slider = $(this).find('.card-room__slider');
    $slider.slick({
        infinite: true,
        dots: true,
        prevArrow: '<button type = "button" class = "slick-prev"><span class="material-icons">navigate_before</span></button>',
        nextArrow: '<button type = "button" class = "slick-next"><span class="material-icons">navigate_next</span></button>',
        
    });
    
      $slider.find('.slick-dots button').empty();
});
