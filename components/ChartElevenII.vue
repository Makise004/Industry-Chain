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
                { value: 17, name: '电子信息系统' },
                { value: 16, name: 'LED' },
                { value: 15, name: '电子产品' },
                { value: 14, name: '半导体' },
                { value: 12, name: '光电产品' },
                
                { value: 6, name: '有线电视' },
                { value: 5, name: '计算机软硬件' },
                { value: 4, name: '集成电路' },
                { value: 2, name: 'LCD' },
                { value: 1, name: '电脑配件' },
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