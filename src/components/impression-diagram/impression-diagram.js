import $ from 'jquery';
// import 'chart.js';
import Chart from 'chart.js';


const $diagramList = $('.impression-diagram__diagram');

$diagramList.each(function(){
    // console.log($(this));
    let diagramChart = new Chart($(this), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [10, 20, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                ],
            }],
            labels: [
                'Red',
                'Yellow',
                'Blue',
                'test'
            ]
        },
        options: {
            cutoutPercentage: 90,
            responsive: true,
            // maintainAspectRatio: false,
            keepAspectRatio: false,
            legend: {
                position: 'right',
                align: 'end',
                labels: {
                    usePointStyle: true,
                    // boxWidth: '20',
                }
                
            },
        },
        
    });

});

function beforePrintHandler () {
    for (var id in Chart.instances) {
        Chart.instances[id].resize();
    }
};

$(window).resize(function() {
    beforePrintHandler();
    // console.log(Chart.instances);
    // console.log(Chart.instances[0]);
});

// window.addEventListener("beforeprint", function(event) {
//     console.log(Chart.instances[0]);
//     beforePrintHandler();
// });
    





// const diagram = $('#myChart');

// let diagramChart = new Chart(diagram, {
//     type: 'doughnut',
//     data: {
//         datasets: [{
//             data: [10, 20, 30],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//             ],
//         }],
//         labels: [
//             'Red',
//             'Yellow',
//             'Blue',
//             'test'
//         ]
//     },
//     options: {
//         cutoutPercentage: 90,
//         responsive: true,
//         legend: {
//             position: 'right',
//             align: 'end',
//             labels: {
//                 usePointStyle: true,
//                 // boxWidth: '20',
//             }
            
//         },
//     },
    
// });