import $ from 'jquery';

export default class CardOrderClass{
    constructor($cardOrder){
        this.$cardOrder = $cardOrder;
        this.price = $cardOrder.find('.card-order__room-price-price').text();
        // this.arrivalInput = null;
        // this.departureInput = null;
        this.arrivalInput = $cardOrder.find('.card-order__date-dropdown-arrival');
        this.departureInput = $cardOrder.find('.card-order__date-dropdown-departure');
        this.sumGuests = null;
        this.discount = $cardOrder.find('.card-order__list-item-service-charge-discount');
        this.additionalServiceFee = $cardOrder.find('.card-order__list-item-additional-service-fee');
        this.sumDay = null;
        this.sumDayOutput = $cardOrder.find('.card-order__list-item-sum-day'); 
        this.priceForAllDaysOutput = $cardOrder.find('.card-order__list-item-price-for-all-days');
        this.totalPriceOutput = $cardOrder.find('.card-order__total-price');
    }




    // setArrivalInput(){
    //     this.arrivalInput = this.$cardOrder.find('.card-order__date-dropdown-arrival');
    // }

    // setDepartureInput(){
    //     this.departureInput = this.$cardOrder.find('.card-order__date-dropdown-departure');
    // }

    setSumGuests(){
        let dropdownTextValue = this.$cardOrder.find('.dropdown__values-input-text').text();
        //console.log(dropdownTextValue);
        let regular = /\d+/g;
        this.sumGuests = dropdownTextValue.match(regular)[0];
    }
    
    // setDiscount(){
    //     this.discount = this.$cardOrder.find('.card-order__list-item-service-charge-discount').text();
    // }

    setSumDay(){
        let startDate = this.arrivalInput.val();
        let endtDate = this.departureInput.val();


        function transformDate(date){
            let dateArr = date.split('.');
            for(let i = 0; i < dateArr.length; i++){
                // if(i == 1){
                //     --dateArr[i];
                // }
                dateArr[i] = +dateArr[i];
            }
            dateArr.reverse();
            let dateString = dateArr.join(', ');
            console.log(dateString + '  dataString');
            return dateString;
        }

        function treatAsUTC(date) {
            let result = new Date(transformDate(date));
            result.setMinutes(result.getMinutes() - result.getTimezoneOffset());
            return result;
        }
        
        function daysBetween(startDate, endDate) {
            let millisecondsPerDay = 24 * 60 * 60 * 1000;
            return (treatAsUTC(endDate) - treatAsUTC(startDate)) / millisecondsPerDay;
        }
        
        this.sumDay = daysBetween(startDate, endtDate);

        //console.log(this.sumDay + '  kolichestvo dney');
    }


    setHandlers(){
        this.arrivalInput.change(()=>{
            this.setSumDay();
            this.printSumDay();
            this.printPriceForAllDays();
            this.printTotalPrice()
        })
        this.departureInput.change(()=>{
            this.setSumDay();
            this.printSumDay();
            this.printPriceForAllDays();
            this.printTotalPrice()
        })
    }


    printSumDay(){
        this.sumDayOutput.text(this.sumDay);
    }

    printPriceForAllDays(){
        let priceForAllDays = this.sumDay * parseInt(this.price.replace(/\s+/g, ''),10);
        this.priceForAllDaysOutput.text(priceForAllDays.toLocaleString());
    }

    printTotalPrice(){
        let totalPrice = this.sumDay * parseInt(this.price.replace(/\s+/g, ''),10);
        if(this.discount.text()){
            totalPrice -= parseInt(this.discount.text().replace(/\s+/g, ''),10);
        }
        if(this.additionalServiceFee.text()){
            totalPrice += parseInt(this.additionalServiceFee.text().replace(/\s+/g, ''),10);
        }

        this.totalPriceOutput.text(totalPrice.toLocaleString());
    }




    render(){
        this.setSumGuests();
        this.setSumDay();

        this.printSumDay();
        this.printPriceForAllDays();
        this.printTotalPrice();



        this.setHandlers();


        console.log(this);
    }
}