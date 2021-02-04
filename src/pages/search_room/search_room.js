require('!test-loader-two?extensions[]=js&extensions[]=scss&levels[]=src/components!test-loader!pug-html-loader!./search_room.pug');

import '../../layout/layout.scss';
import './search_room.scss';

import $ from 'jquery';

$('.search-room__filter-btn').on('click', (e) => {
    $(e.currentTarget).toggleClass('search-room__filter-btn_active');
    $(e.currentTarget).siblings('.search-room__aside-form').toggleClass('search-room__aside-form_active');
    console.log($(e.currentTarget).siblings('.search-room__aside-form'));
});