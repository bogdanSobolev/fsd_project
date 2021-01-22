import Cleave from 'cleave.js'


const dateMasks = document.querySelectorAll('.text-field_date-of-birth');


function getNowDate(){
    const now = new Date();

    function getDay(){
        let numberDay = now.getDate();
        if(numberDay.toString().length == 1){
            return '0' + numberDay.toString();
        }
        return numberDay;
    }

    function getMonth(){
        let numberMounth = now.getMonth();
        numberMounth++;
        if(numberMounth.toString().length == 1){
            return '0' + numberMounth.toString();
        }
        return numberMounth;
    }


    return `${now.getFullYear()}-${getMonth()}-${getDay()}`;
}

console.log(getNowDate());

dateMasks.forEach((item) => {
    item.setAttribute('placeholder', 'ДД.ММ.ГГГГ');
    new Cleave(item, {
        date: true,
        delimiter: '.',
        dateMax: getNowDate(),
        datePattern: ['d', 'm', 'Y']
    });
});