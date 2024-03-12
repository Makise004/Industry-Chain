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
            max: 17,
            startAngle: 75,
            axisLine: {
              lineStyle:{
                color: '#f3f0f7',
              },
            },
        },
        radiusAxis: {
            type: 'category',
            data: ['船舶建造', '海洋装备', '船舶配件', '交通设施', '机械配件'],
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
	              value: 15,
              	itemStyle:{
		              color: '#c95763',
	              }
              },
              {
	              value: 9,
              	itemStyle:{
		              color: '#ce6873',
	              }
              },
              {
	              value: 7,
              	itemStyle:{
		              color: '#d47982',
	              }
              },
              {
	              value: 5,
              	itemStyle:{
		              color: '#d98992',
	              }
              },
              {
	              value: 3,
              	itemStyle:{
		              color: '#df9aa1',
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