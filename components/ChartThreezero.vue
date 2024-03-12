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
          text: '造纸和纸制品业',
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
              { value: 3, name: '纸制品' },
              { value: 2, name: '包装箱' },
              { value: 2, name: '纸板' },
              { value: 3, name: '高档纸' },
              { value: 4, name: '印刷品' }
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