import $ from 'jquery';

export default class BtnLikeClass {
    constructor($btnBlock){
        this.$btnBlock = $btnBlock;
        this.value = +$btnBlock.find('.btn-like__text').text();
    }

    likeHandler(operation){
        let $btnValueBlock = this.$btnBlock.find('.btn-like__text');
        if(operation == '+'){
            $btnValueBlock.text(++this.value);
        } else if (operation == '-'){
            $btnValueBlock.text(--this.value);
        }
    }

    render(){
        const $btnInput = this.$btnBlock.find('.btn-like__input');

        if(this.$btnBlock.hasClass('btn-like_active')){
            $btnInput.prop('checked', true);
        }

        this.$btnBlock.on('click', e => {
            if($(e.target).hasClass('btn-like__input')){
                this.$btnBlock.toggleClass('btn-like_active');
                if(this.$btnBlock.hasClass('btn-like_active')){
                    this.likeHandler('+');
                } else {
                    this.likeHandler('-');
                }
                
            }
        });
    }
}