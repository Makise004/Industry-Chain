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
          text: '计算机、通信和其他电子设备制造业',
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
                { value: 2, name: '水利机械' },
                { value: 4, name: '金属网带' },
                { value: 5, name: '电镀' },
                { value: 7, name: '管件' },
                { value: 8, name: '消防水带' },
                
                { value: 8, name: '金属结构' },
                { value: 11, name: '铝合金' },
                { value: 16, name: '五金' },
                { value: 18, name: '钢结构' },
                { value: 25, name: '汽车配件' },
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