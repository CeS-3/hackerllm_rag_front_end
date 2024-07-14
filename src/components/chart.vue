<template>
    <div id="chart1" style="width: 600px;height:400px;"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'MyChart',
    mounted() {
      // 初始化图表
      var myChart = echarts.init(document.getElementById('chart1'));
  
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };
  
      // 使用配置项和数据显示图表
      myChart.setOption(option);
    }
  };
  </script>
  
  <style scoped>
  /* 添加一些样式以确保图表显示 */
  #chart1 {
    width: 600px;
    height: 400px;
  }
  </style>
  