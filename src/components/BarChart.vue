<template>
  <div ref="barChart" style="width: 100%; height: 600px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'BarChart',
  props: {
    categories: {
      type: Array,
      required: true
    },
    data: {
      type: Array,
      required: true
    },
    title: {
      type: String,
    },
    xAxisLabel: {
      type: String,
    },
    yAxisLabel: {
      type: String,
    }
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      var myChart = echarts.init(this.$refs.barChart);

      var option = {
        title: {
          text: this.title
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: this.categories,
          axisLabel: {
            interval: 0,
            rotate: 45, // 增加旋转角度
            margin: 10, // 增加标签与轴线的间距
            textStyle: {
              fontSize: 10, // 调整字体大小
            }
          }
        },
        yAxis: {
          type: 'value',
          name: this.yAxisLabel
        },
        series: [{
          name: 'Value',
          type: 'bar',
          data: this.data,
          itemStyle: {
            color: 'white'
          },
          label: {
            show: true,
            position: 'top',
            color: '#7CFC00'
          }
        }]
      };

      myChart.setOption(option);
    }
  },
  watch: {
    categories: 'drawChart',
    data: 'drawChart'
  }
};
</script>

<style scoped>
</style>
