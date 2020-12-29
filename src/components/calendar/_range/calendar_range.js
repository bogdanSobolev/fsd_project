const calendar_range = {
    minDate: new Date(),
    range: true,
    toggleSelected: false,
    keyboardNav: false,
    //clearButton: true,
    navTitles: {
        // days: 'MM yyyy',
        days: "<h3 class='title title_middle'>MM yyyy<h3/>"
    },
    dateFormat: "d M",
    nextHtml: "<span class='material-icons calendar__calendar-arrow'>arrow_forward</span>",
    prevHtml: "<span class='material-icons calendar__calendar-arrow calendar__calendar-arrow_prev'>arrow_forward</span>",
    offset: 5,
    //inline: true,
    onShow: function(inst) {
        inst.$el.siblings(".calendar-field__arrow").addClass("calendar-field__arrow_active");
    },
    onHide: function(inst) {
        inst.$el.siblings(".calendar-field__arrow").removeClass("calendar-field__arrow_active");
    },
}

export default calendar_range;