import $ from 'jquery';
import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker';

import buttons from './__buttons/calendar__buttons.js';


export default class CalendarClass {
    constructor(input, modificator){
        this.input = input;
        this.modificator = modificator ? modificator : null;
    };

    dataPickerDefaultOptions = {
        minDate: new Date(),
        // range: true,
        toggleSelected: false,
        keyboardNav: false,
        //clearButton: true,
        navTitles: {
            // days: 'MM yyyy',
            days: "<h3 class='title title_middle'>MM yyyy<h3/>"
        },
        //dateFormat: "d M",
        nextHtml: "<span class='material-icons calendar__calendar-arrow'>arrow_forward</span>",
        prevHtml: "<span class='material-icons calendar__calendar-arrow calendar__calendar-arrow_prev'>arrow_forward</span>",
        //inline: true,
    }

    getOptions(){
        return this.modificator ? this.modificator : this.dataPickerDefaultOptions;
    }


    creaeteCalendar(){
        this.input.attr('data-multiple-dates-separator', " - ");
        let $calendar = this.input.datepicker(this.getOptions()).data('datepicker');
        $calendar.$datepicker.append(buttons);
        $('.calendar__btn').on('click', (e) => {
            e.preventDefault();
        });
        $calendar.$datepicker.find('.calendar__btn_clear').on('click', (e) => {
            $calendar.clear();
        });
        $calendar.$datepicker.find('.calendar__btn_apply').on('click', (e) => {
            $calendar.hide();
        });
    }
};