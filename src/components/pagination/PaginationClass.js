import $ from 'jquery';
// import 'paginationjs';

export default class PaginationClass{
    constructor($paginationBlock){
        this.$paginationBlock = $paginationBlock;
        this.$paginationContainer = $paginationBlock.find('.pagination__container');
        this.$dataContainer = $paginationBlock.find('.pagination__data-container');
    }

    render(){
        //console.log(pagination);


        // this.$paginationContainer.pagination({
        //     dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
        //     callback: function(data, pagination) {
        //         // template method of yourself
        //         var html = template(data);
        //         this.$dataContainer.html(html);
        //     }
        // })
    }
}