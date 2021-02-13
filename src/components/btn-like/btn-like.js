import BtnLikeClass from './BtnLikeClass';

const $btnLikeList = $(".btn-like");

$btnLikeList.each(function(){
    let btnLike = new BtnLikeClass($(this));
    btnLike.render();
});
