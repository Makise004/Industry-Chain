<template>
  <div ref="chart" style="margin-top:10%;width:100%;height:80%"></div>
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
          textStyle: {
            color: '#e2e0eb',
            fontWeight: 'normal',
            textShadowColor: '#171617',
            textShadowBlur: 5,
            textShadowOffsetX: 5,
            textShadowOffsetY: 5,
          },
          left: 220
        },
        color: ['#c87ff3'],
        tooltip: {},
        xAxis: {
          type: 'category',
          data: ['新型显示', '氢能', '节能环保', '电力装备', '工程机械'],
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
            data: [5, 3, 2, 1, 3],
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