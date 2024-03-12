<template>
  <div ref="chart" style="width:100%;height:95%"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data(){
    return{

    }
  },
  mounted(){
    this.initChart();
  },
  methods: {
    initChart(){
      var myChart = echarts.init(this.$refs.chart);
      var option;
      option = {
        title: {
          text: '化学原料和化学制品制造业',
          left: 'right',
          textStyle: {
            color: '#e2e0eb',
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: '#fff',
          }
        },
        series: [
          {
            type: 'pie',
            radius: '60%',
            top: 60,
            data: [
                { value: 16, name: '危险化学品' },
                { value: 1, name: '天然方解石' },
                { value: 2, name: '高沸点芳烃溶剂' },
                { value: 1, name: '茄尼醇' },
                { value: 1, name: '热稳定剂' },
                { value: 1, name: '六甲基二硅烷' },
                { value: 1, name: '乙醚' },
                { value: 2, name: '氨基葡萄糖盐酸盐' },
                { value: 1, name: '丙烯' },
                { value: 7, name: '农药' },
                { value: 3, name: '硫酸' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              color: '#fff',
              fontStyle: 'italic',
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style>
</style>