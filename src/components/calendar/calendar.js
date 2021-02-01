import $ from 'jquery';

import CalendarClass from './CalendarClass'
import calendar_range from '../calendar/_range/calendar_range';

const modificatorList = [
    {
        name: 'calendar_range',
        options: calendar_range,
    }
]

function searchModificator(item){
    let modificator = null;
    modificatorList.forEach(el => {

        if (item.hasClass(el.name)){
            modificator = el.options;
        }
    });
    return modificator;
}

let $calendarList = $('.calendar');

$calendarList.each(function(){
    let calendarInput = new CalendarClass($(this), searchModificator($(this)));
    calendarInput.creaeteCalendar();
});