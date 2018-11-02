
function burnDownChart() {
  $('#container').highcharts({
    title: {
      text: 'Burndown Chart',
      x: -20 //center
    },
    colors: ['blue', 'red'],
    plotOptions: {
      line: {
        lineWidth: 3
      },
      tooltip: {
        hideDelay: 200
      }
    },
    subtitle: {
      text: 'Sprint 1',
      x: -20
    },
    xAxis: {
      categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6',
                   'Day 7', 'Day 8', 'Day 9', 'Day 10']
    },
    yAxis: {
      title: {
        text: 'Hours'
      },
      plotLines: [{
        value: 0,
        width: 1
      }]
    },
    tooltip: {
      valueSuffix: ' hrs',
      crosshairs: true,
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Ideal Burn',
      color: 'rgba(255,0,0,0.25)',
      lineWidth: 2,
      data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
    }, {
      name: 'Actual Burn',
      color: 'rgba(0,120,200,0.75)',
      marker: {
        radius: 6
      },
      data: [100, 110, 85, 60, 60, 30, 32, 23]
    }]
  });
}

burnDownChart();

// $(function () {
//     $('#container').highcharts({
//       title: {
//         text: 'Burndown Chart',
//         x: -20 //center
//       },
//       colors: ['blue', 'red'],
//       plotOptions: {
//         line: {
//           lineWidth: 3
//         },
//         tooltip: {
//           hideDelay: 200
//         }
//       },
//       subtitle: {
//         text: 'Sprint 1',
//         x: -20
//       },
//       xAxis: {
//         categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6',
//                      'Day 7', 'Day 8', 'Day 9', 'Day 10']
//       },
//       yAxis: {
//         title: {
//           text: 'Hours'
//         },
//         plotLines: [{
//           value: 0,
//           width: 1
//         }]
//       },
//       tooltip: {
//         valueSuffix: ' hrs',
//         crosshairs: true,
//         shared: true
//       },
//       legend: {
//         layout: 'vertical',
//         align: 'right',
//         verticalAlign: 'middle',
//         borderWidth: 0
//       },
//       series: [{
//         name: 'Ideal Burn',
//         color: 'rgba(255,0,0,0.25)',
//         lineWidth: 2,
//         data: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]
//       }, {
//         name: 'Actual Burn',
//         color: 'rgba(0,120,200,0.75)',
//         marker: {
//           radius: 6
//         },
//         data: [100, 110, 85, 60, 60, 30, 32, 23]
//       }]
//     });
//   });