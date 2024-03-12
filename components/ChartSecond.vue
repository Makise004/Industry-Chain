<template>
  <div ref="chart" style="width:100%;height:85%"></div>
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
        title:{
          text: '铁路、船舶、航空航天和其他运输设备制造业',
          textStyle: {
            color: '#e2e0eb',
            fontWeight: 'normal',
            textShadowColor: '#171617',
            textShadowBlur: 5,
            textShadowOffsetX: 5,
            textShadowOffsetY: 5,
          },
          left: 280
        },
        color: ['#aea0f1'],
        polar: {
          radius: [30, '75%'],
          center: ['50%', '56%'],
        },
        angleAxis: {
            max: 20,
            startAngle: 75,
            axisLine: {
              lineStyle:{
                color: '#f3f0f7',
              },
            },
        },
        radiusAxis: {
            type: 'category',
            data: ['纺织品', '印染', '针织品', '化纤', '无纺布'],
            axisLine: {
              lineStyle:{
                color: '#f3f0f7',
              }
            },
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              interval: 0,
            },
        },
        tooltip: {},
        emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
        series: {
            type: 'bar',
            data: [
              {
	              value: 12,
              	itemStyle:{
		              color: '#d9bff6',
	              }
              },
              {
	              value: 5,
              	itemStyle:{
		              color: '#cfb0f4',
	              }
              },
              {
	              value: 2,
              	itemStyle:{
		              color: '#c5a0f2',
	              }
              },
              {
	              value: 15,
              	itemStyle:{
		              color: '#bc90f0',
	              }
              },
              {
	              value: 13,
              	itemStyle:{
		              color: '#b280ed',
	              }
              },
            ],
            coordinateSystem: 'polar',
        }
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