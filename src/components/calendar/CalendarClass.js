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
    };

    dataPickerDefaultOptions = {
        minDate: new Date(),
        toggleSelected: false,
        keyboardNav: false,
        navTitles: {
            days: "<h3 class='title title_middle datepicker__title'>MM yyyy<h3/>"
        },
        nextHtml: "<span class='material-icons calendar__calendar-arrow'>arrow_forward</span>",
        prevHtml: "<span class='material-icons calendar__calendar-arrow calendar__calendar-arrow_prev'>arrow_forward</span>",
        offset: 5,
        onShow: function(inst) {
            inst.$el.siblings(".calendar-field__arrow").addClass("calendar-field__arrow_active");

            let $positionElem = null;

            if(inst.$el.data('width-elem')){
                //console.log(inst.$el.data('width-elem'));
                $positionElem = inst.$el.closest('.'+inst.$el.data('width-elem'));
            } else {
                $positionElem = inst.$el;
            }
            inst.$datepicker.css({'left': `${$positionElem.offset().left}px`});
        },
        onHide: function(inst) {
            inst.$el.siblings(".calendar-field__arrow").removeClass("calendar-field__arrow_active");
        },
        onSelect: function(formattedDate, date, inst){
            //console.log(inst.$el);
            inst.$el.change();
        },
        onChangeMonth: function(inst){
            //console.log($(this).$el);
            // $(this)[0].onSelect();
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
        this.$calendar.$datepicker.css({'left': `${this.widthElem.offset().left}px`});


        //console.log(this);
        // console.log(this.$calendar.$datepicker.offset().left);
    }

    getOptions(){
        return this.modificator ? this.modificator : this.dataPickerDefaultOptions;
    }


    creaeteCalendar(){
        this.input.attr('data-multiple-dates-separator', " - ");
        this.input.attr('autocomplete', "off");


        this.$calendar.$datepicker.append(buttons);
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
            this.input.focus();
        });


        


        if(this.input.data('width-elem')){

            this.setWidthElem(this.input.data('width-elem'));

            
        } else{
            this.setWidthElem();
        }

        this.updateWidthAndPosition();



        const updateWidthAndPositionFunc = () => {
            //console.log(this);
            this.updateWidthAndPosition();
        }

        this.$calendar.$datepicker.bind("DOMSubtreeModified",function(){
            //console.log(updateWidthAndPosition());
            updateWidthAndPositionFunc();
        });




        $(window).resize(()=>{
            this.updateWidthAndPosition();
            //console.log(this.input.val());
        });


        //console.log(this.input.val());




    }
};