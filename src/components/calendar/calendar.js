import $ from 'jquery';
import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker';
import testPug from './__buttons/calendar__buttons.js';


const dataPickerOptions = {
    minDate: new Date(),
    // range: true,
    toggleSelected: false,
    keyboardNav: false,
    clearButton: true,
    navTitles: {
        // days: 'MM yyyy',
        days: "<h3 class='title title_middle'>MM yyyy<h3/>"
    },
    dateFormat: "d M",
    nextHtml: "<span class='material-icons calendar__calendar-arrow'>arrow_forward</span>",
    prevHtml: "<span class='material-icons calendar__calendar-arrow calendar__calendar-arrow_prev'>arrow_forward</span>",
    //inline: true,
}

function upgradeCalendarOptions(){

}

function creaeteCalendar() {
    let $calendarList = $('.calendar');
    // let $calendarRangeList = $('.calendar + .calendar_range');
    // $calendarRangeList.attr('data-multiple-dates-separator', " - ");
    $calendarList.attr('data-multiple-dates-separator', " - ");
    let $calendarPickers = $calendarList.datepicker(dataPickerOptions).data('datepicker');
    
    $('.datepicker--buttons').append(testPug);
    $('.calendar__btn').on('click', (e) => {
        e.preventDefault();
    });
    $('.calendar__btn_clear').on('click', (e) => {
        $calendarPickers.clear();
    });
    $('.calendar__btn_apply').on('click', (e) => {
        $calendarPickers.hide();
        //console.log(e.target);
    });

}

creaeteCalendar();