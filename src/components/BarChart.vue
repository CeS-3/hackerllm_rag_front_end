<template>
  <div ref="barChart" style="width: 600px; height: 400px;"></div>
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
        tooltip: {},
        xAxis: {
          data: this.categories
        },
        yAxis: {},
        series: [
          {
            name: '数据',
            type: 'bar',
            data: this.data
          }
        ]
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
