import $ from 'jquery';
import Chart from 'chart.js';

const $diagramList = $('.impression-diagram__diagram');

$diagramList.each(function(){
    let voteData = $(this).data('vote');
    let diagramChart = new Chart($(this), {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [voteData.disappointed, voteData.satisfactori, voteData.good, voteData.amazing ],
                backgroundColor: [
                    '#3D4975',
                    '#bc9cff',
                    '#6fcf97',
                    '#FFBA9C'
                ],
            }],
            labels: [
                'Разочарован',
                'Удовлетворительно',
                'Хорошо',
                'Великолепно',
            ]
        },
        
        options: {
            cutoutPercentage: 90,
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false,
            },
            tooltips: {
                enabled: false
            },
            legendCallback: function(chart) {
                var text = []; 
                text.push('<ul class="' + chart.id + '-legend impression-diagram__legend-list">'); 
                for (var i = chart.data.datasets[0].data.length - 1; i >= 0; i--) { 
                    text.push('<li class="impression-diagram__legend-item"><span class="impression-diagram__legend-marker" style="background-color:' + 
                               chart.data.datasets[0].backgroundColor[i] + 
                               '"></span>'); 
                    if (chart.data.labels[i]) { 
                        text.push(chart.data.labels[i]); 
                    } 
                    text.push('</li>'); 
                }  
                text.push('</ul>'); 
                return text.join(''); 
            }
        },
        
    });

    const $parentBlock = $(this).closest('.impression-diagram');
    const $legend = $parentBlock.find(".impression-diagram__legend");

    $legend.html(diagramChart.generateLegend());
});

function beforePrintHandler () {
    for (var id in Chart.instances) {
        Chart.instances[id].resize();
    }
};

$(window).resize(function() {
    beforePrintHandler();
});