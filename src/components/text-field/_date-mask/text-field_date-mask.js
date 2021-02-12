import Cleave from 'cleave.js'


const dateMasks = document.querySelectorAll('.text-field_date-mask');


// function getNowDate(){
//     var now = new Date();
//     return `${now.getFullYear()}-${now.getMonth()}-${now.getDate()}`;
// }

dateMasks.forEach((item) => {
    item.setAttribute('placeholder', 'ДД.ММ.ГГГГ');
    new Cleave(item, {
        date: true,
        delimiter: '.',
    });
});