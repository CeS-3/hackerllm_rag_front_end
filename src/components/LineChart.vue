<template>
    <div id="lineChart" style="width: 600px; height: 400px;"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'LineChart',
    mounted() {
      var myChart = echarts.init(document.getElementById('lineChart'));
  
      var option = {
        title: {
          text: '折线图示例'
        },
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['一月', '二月', '三月', '四月', '五月']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '数据',
            type: 'line',
            data: [150, 230, 224, 218, 135]
          }
        ]
      };
  
      myChart.setOption(option);
    }
  };
  </script>