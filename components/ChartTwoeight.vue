<template>
  <div ref="chart" style="width:100%;height:80%"></div>
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
      var option = {
        title:{
          text: '印刷和记录媒介复制业',
          textStyle: {
            color: '#e2e0eb',
            fontWeight: 'normal',
            fontSize: 20,
            textShadowColor: '#171617',
            textShadowBlur: 5,
            textShadowOffsetX: 5,
            textShadowOffsetY: 5,
          },
          left: '41%'
        },
        color: ['#c4e553'],
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['包装装潢印刷品', '纸制品', '出版物印刷'],
          nameTextStyle: {
            width: 2,
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
            },
          },
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            interval: 0,
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#fff',
            },
          },
        },
        series: [
          {
            data: [15, 3, 2],
            type: 'bar'
          }
        ],
        emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style>
.container1 {
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>