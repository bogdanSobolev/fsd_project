import $ from 'jquery';
import 'air-datepicker/dist/css/datepicker.min.css';
import 'air-datepicker';
// console.log(datepicker);


function addDataPicker ($items){
    $items.datepicker({
        minDate: new Date(),
        range: true,
        toggleSelected: false,
        keyboardNav: false,
        clearButton: true,
        navTitles: {
            // days: 'MM yyyy',
            days: "<h3 class='title title_middle'>MM yyyy<h3/>"
        },
        nextHtml: "<span class='material-icons calendar__calendar-arrow'>arrow_forward</span>",
        prevHtml: "<span class='material-icons calendar__calendar-arrow calendar__calendar-arrow_prev'>arrow_forward</span>",
        inline: true,
    });
}

function creaeteCalendar() {
    let $calendarList = $('.calendar');
    $calendarList.attr('data-multiple-dates-separator', " - ");
    addDataPicker($calendarList);
}

// $('.calendar').datepicker({
//     minDate: new Date(),
//     range: true,
//     toggleSelected: false,
//     keyboardNav: false,
//     clearButton: true,
//     navTitles: {
//         // days: 'MM yyyy',
//         days: "<h3 class='title title_middle'>MM yyyy<h3/>"
//     },
//     nextHtml: "<span class='material-icons calendar__calendar-arrow'>arrow_forward</span>",
//     prevHtml: "<span class='material-icons calendar__calendar-arrow calendar__calendar-arrow_prev'>arrow_forward</span>",
//     inline: true,
// });

creaeteCalendar();