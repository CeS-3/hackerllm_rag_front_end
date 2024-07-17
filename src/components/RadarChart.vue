<template>
    <div ref="chart" style="width: 100%; height: 400px;"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'RadarChart',
    props: {
      indicator: {
        type: Array,
        required: true
      },
      data: {
        type: Array,
        required: true
      }
    },
    mounted() {
      this.drawChart();
    },
    methods: {
      drawChart() {
        var chart = echarts.init(this.$refs.chart);
  
        var option = {
          tooltip: {},
          radar: {
            indicator: this.indicator,
            center: ['50%', '50%'],
            radius: '70%',
            splitNumber: 5,
            shape: 'circle',
            axisName: {
              formatter: function(value) {
                return value;
              },
              color: '#666'
            },
            splitLine: {
              lineStyle: {
                color: [
                  'rgba(0, 0, 0, 0.1)',
                  'rgba(0, 0, 0, 0.2)',
                  'rgba(0, 0, 0, 0.3)',
                  'rgba(0, 0, 0, 0.4)',
                  'rgba(0, 0, 0, 0.5)'
                ].reverse()
              }
            },
            splitArea: {
              areaStyle: {
                color: ['rgba(0, 0, 0, 0.05)', 'rgba(0, 0, 0, 0.02)'].reverse()
              }
            },
            axisLine: {
              lineStyle: {
                color: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          series: [{
            name: 'Radar Data',
            type: 'radar',
            data: [{
              value: this.data,
              name: 'Data',
              areaStyle: {
                color: 'rgba(0, 255, 0, 0.5)'
              },
              lineStyle: {
                color: 'rgba(0, 255, 0, 1)'
              }
            }]
          }]
        };
  
        chart.setOption(option);
      }
    }
  };
  </script>
  
  <style scoped>
  </style>
  