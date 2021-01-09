import BtnLikeClass from './BtnLikeClass';

const $btnLikeList = $(".btn-like");


$btnLikeList.each(function(){
    let btnLike = new BtnLikeClass($(this));
    //console.log($(this));
    btnLike.render();
});
