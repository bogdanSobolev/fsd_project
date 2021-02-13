import $ from 'jquery';
import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker';

import buttons from './__buttons/calendar__buttons.js';


export default class CalendarClass {
    constructor(input, modificator){
        this.input = input;
        
        this.modificator = modificator ? modificator : null;
        this.$calendar = this.input.datepicker(this.getOptions()).data('datepicker');
        this.widthElem = null;
        this.arrowActive = false;
    };

    dataPickerDefaultOptions = {
        minDate: new Date(),
        toggleSelected: false,
        keyboardNav: false,
        navTitles: {
            days: "<h3 class='title title_middle datepicker__title'>MM yyyy<h3/>"
        },
        nextHtml: "<span class='material-icons calendar__calendar-arrow calendar__calendar-arrow_next'>arrow_forward</span>",
        prevHtml: "<span class='material-icons calendar__calendar-arrow calendar__calendar-arrow_prev'>arrow_forward</span>",
        offset: 5,
        onShow: function(inst, animationCompleted) {
             (inst);
            let arrowInput = inst.$el.siblings(".calendar-field__arrow");
            if(animationCompleted){
                arrowInput.css({'z-index': '1'});
            }
            arrowInput.addClass("calendar-field__arrow_active");
            
            let $positionElem = null;

            if(inst.$el.data('width-elem')){
                $positionElem = inst.$el.closest('.'+inst.$el.data('width-elem'));
            } else {
                $positionElem = inst.$el;
            }
            inst.$datepicker.css({'left': `${$positionElem.offset().left}px`});
        },
        onHide: function(inst, animationCompleted) {
            let arrowInput = inst.$el.siblings(".calendar-field__arrow");
            if(animationCompleted){
                arrowInput.css({'z-index': '0'});
                inst.$datepicker.css({'left': `-10000px`});
            }
            
            arrowInput.removeClass("calendar-field__arrow_active");
        },
        onSelect: function(formattedDate, date, inst){
            inst.$el.change();
        }
    }

    setWidthElem(widhClass){
        if(widhClass){
            this.widthElem = this.input.closest('.'+widhClass);
        } else{
            this.widthElem = this.input;
        }
    }

    updateWidthAndPosition(){
        this.$calendar.$datepicker.css({'width': `${this.widthElem.css('width')}`});
        if(this.$calendar.$datepicker.hasClass('active')){
            this.$calendar.$datepicker.css({'left': `${this.widthElem.offset().left}px`});
        }
    }

    getOptions(){
        return this.modificator ? this.modificator : this.dataPickerDefaultOptions;
    }

    selectDate(){
        if(this.input.val()){
             (this.input.val());
            let pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
            let date = new Date(this.input.val().replace(pattern,'$3-$2-$1'));
            this.$calendar.selectDate(date);
        }
    }


    creaeteCalendar(){
        this.input.attr('data-multiple-dates-separator', " - ");
        this.input.attr('autocomplete', "off");


        this.$calendar.$datepicker.append(buttons);

        this.selectDate();

        $('.calendar__btn').on('click', (e) => {
            e.preventDefault();
        });
        this.$calendar.$datepicker.find('.calendar__btn_clear').on('click', (e) => {
            this.$calendar.clear();
        });
        this.$calendar.$datepicker.find('.calendar__btn_apply').on('click', (e) => {
            this.$calendar.hide();
        });

        this.input.siblings(".calendar-field__arrow").on('click', e => {
        });
        
        if(this.input.data('width-elem')){
            this.setWidthElem(this.input.data('width-elem'));
        } else{
            this.setWidthElem();
        }

        this.updateWidthAndPosition();

        const updateWidthAndPositionFunc = () => {
            this.updateWidthAndPosition();
        }

        const handlerAttr = () => {
            const datapicker = this.$calendar.$datepicker[0];

            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                  updateWidthAndPositionFunc();
                  observer.disconnect();
                });    
            });
               
            const config = { attributes: true, childList: false, characterData: false };
            
            observer.observe(datapicker, config);
        }

        this.$calendar.$datepicker.find("nav").bind("DOMSubtreeModified",function(){
            handlerAttr();
        });

        this.$calendar.$datepicker.bind("DOMSubtreeModified",function(){
            updateWidthAndPositionFunc();
        });

        $(window).resize(()=>{
            this.updateWidthAndPosition();
        });
    }
};