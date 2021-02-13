const calendar_range = {
    minDate: new Date(),
    range: true,
    toggleSelected: false,
    keyboardNav: false,
    navTitles: {
        days: "<h3 class='title title_middle datepicker__title'>MM yyyy<h3/>"
    },
    dateFormat: "d M",
    nextHtml: "<span class='material-icons calendar__calendar-arrow'>arrow_forward</span>",
    prevHtml: "<span class='material-icons calendar__calendar-arrow calendar__calendar-arrow_prev'>arrow_forward</span>",
    offset: 5,
    onShow: function(inst) {
        inst.$el.siblings(".calendar-field__arrow").addClass("calendar-field__arrow_active");

        let $positionElem = null;

        if(inst.$el.data('width-elem')){
             (inst.$el.data('width-elem'));
            $positionElem = inst.$el.closest('.'+inst.$el.data('width-elem'));
        } else {
            $positionElem = inst.$el;
        }
        inst.$datepicker.css({'left': `${$positionElem.offset().left}px`});
    },
    onHide: function(inst) {
        inst.$el.siblings(".calendar-field__arrow").removeClass("calendar-field__arrow_active");
    },
}

export default calendar_range;