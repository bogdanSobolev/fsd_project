import Cleave from 'cleave.js'

const dateMasks = document.querySelectorAll('.text-field_date-mask');

dateMasks.forEach((item) => {
    item.setAttribute('placeholder', 'ДД.ММ.ГГГГ');
    new Cleave(item, {
        date: true,
        delimiter: '.',
    });
});