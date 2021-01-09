export default class BtnRateClass {
    constructor($rateBlock){
        this.$rateBlock = $rateBlock;
        this.value = $rateBlock.find('.btn-rate__input').val() ? $rateBlock.find('.btn-rate__input').val() : 0;
        this.$activeBtnIcon = null;
    }

    setActiveBtnIcon($btnBlockIcon){
        this.$activeBtnIcon = $btnBlockIcon;
    }

    selectHoverBtnList($btnBlock){
        let $iconsActive = $btnBlock.prevUntil('', '.btn-rate__btn-block').find('.btn-rate__icon-active');
        $iconsActive.addClass('btn-rate__icon-active_hover');
    }

    selectActiveBtnIcon(){
        if(this.$activeBtnIcon){
            this.$activeBtnIcon.addClass('btn-rate__icon-active_active');
            let $iconsActive = this.$activeBtnIcon.parent().prevUntil('', '.btn-rate__btn-block').find('.btn-rate__icon-active');
            $iconsActive.addClass('btn-rate__icon-active_active');
        }
    }

    setValue(value){
        this.value = value;
    }

    updateInputValue(){

        let $pageInput = this.$rateBlock.find('.btn-rate__input');
        $pageInput.val(this.value);
    }

    updateValuNInput(){
        console.log(this.$activeBtnIcon.parent().index('.btn-rate__btn-block'));
        let indexBtn = this.$activeBtnIcon.parent().index('.btn-rate__btn-block');
        this.setValue(++indexBtn);
        console.log(this.value);

        this.updateInputValue();
    }

    render(){

        let $btnBlock = this.$rateBlock.find('.btn-rate__btn-block');

        if(this.value){
            let value = this.value
            let $activBtn = $($btnBlock[--value]);
            this.setActiveBtnIcon($activBtn.find('.btn-rate__icon-active'));
            this.selectActiveBtnIcon();

        }

        $btnBlock.on('mouseenter', e => {
            let $iconActive = $(e.currentTarget).find('.btn-rate__icon-active');
            $btnBlock.find('.btn-rate__icon-active').removeClass('btn-rate__icon-active_active');
            if(!$iconActive.hasClass('btn-rate__icon-active_hover')){
                $iconActive.addClass('btn-rate__icon-active_hover');
            }
            this.selectHoverBtnList($(e.currentTarget));
        });

        $btnBlock.on('mouseleave', e => {
            $btnBlock.find('.btn-rate__icon-active').removeClass('btn-rate__icon-active_hover');
            this.selectActiveBtnIcon();
        });

        $btnBlock.on('click', e => {
            $btnBlock.find('.btn-rate__icon-active').removeClass('btn-rate__icon-active_active');
            let $iconActive = $(e.currentTarget).find('.btn-rate__icon-active');

            this.setActiveBtnIcon($iconActive);
            this.selectActiveBtnIcon();
            this.updateValuNInput();
        })
    }
}