<template>
    <div ref="chart" style="width: 100%; height: 400px;"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'ScatterChart',
    props: {
      data: {
        type: Array,
        required: true
      },
      xAxisLabel: {
        type: String,
        default: 'X Axis'
      },
      yAxisLabel: {
        type: String,
        default: 'Y Axis'
      }
    },
    mounted() {
      this.drawChart();
    },
    methods: {
      drawChart() {
        var chart = echarts.init(this.$refs.chart);
  
        var option = {
          title: {
            text: 'Scatter Chart Example'
          },
          tooltip: {
            trigger: 'item',
            formatter: function (params) {
              return 'X: ' + params.value[0] + '<br>Y: ' + params.value[1];
            }
          },
          xAxis: {
            name: this.xAxisLabel,
            type: 'value'
          },
          yAxis: {
            name: this.yAxisLabel,
            type: 'value'
          },
          series: [{
            name: 'Scatter Data',
            type: 'scatter',
            data: this.data,
            itemStyle: {
              color: '#1f78b4'
            }
          }]
        };
  
        chart.setOption(option);
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  