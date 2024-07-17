<template>
    <div ref="chart" style="width: 100%; height: 400px;"></div>
  </template>
  
  <script>
  import * as echarts from 'echarts';
  
  export default {
    name: 'ConfusionMatrix',
    props: {
      data: {
        type: Array,
        required: true
      },
      categories: {
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
          tooltip: {
            position: 'top',
            formatter: function (params) {
              return '真实类别: ' + params.value[1] + '<br>预测类别: ' + params.value[0] + '<br>数量: ' + params.value[2];
            }
          },
          xAxis: {
            type: 'category',
            data: this.categories,
            splitArea: {
              show: true
            }
          },
          yAxis: {
            type: 'category',
            data: this.categories,
            splitArea: {
              show: true
            }
          },
          visualMap: {
            min: 0,
            max: Math.max(...this.data.flat()),
            calculable: true,
            orient: 'horizontal',
            left: 'center',
            bottom: '15%'
          },
          series: [{
            name: 'Confusion Matrix',
            type: 'heatmap',
            data: this.data.map((item, i) => item.map((value, j) => [j, i, value])).flat(),
            label: {
              show: true
            },
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
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
  