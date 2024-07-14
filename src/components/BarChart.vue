<template>
  <div id="barChart" style="width: 600px; height: 400px;"></div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'BarChart',
  mounted() {
    var myChart = echarts.init(document.getElementById('barChart'));

    var option = {
      title: {
        text: '柱状图示例'
      },
      tooltip: {},
      xAxis: {
        data: ['类别1', '类别2', '类别3', '类别4', '类别5']
      },
      yAxis: {},
      series: [
        {
          name: '数据',
          type: 'bar',
          data: [5, 20, 36, 10, 10]
        }
      ]
    };

    myChart.setOption(option);
  }
};
</script>
