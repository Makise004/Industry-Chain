<template>
  <div ref="chart" style="margin-top:3%;width:100%;height:80%"></div>
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
        textStyle: {
          color: '#fff',
          fontSize: 15
        },
        title: {
          text: '橡胶和塑料制品业',
          textStyle: {
            color: '#fff',
          },
          left: '5%',
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle:{
                color: '#fff'
            },
            // doesn't perfectly work with our tricks, disable it
            selectedMode: false
        },
        series: [
            {
            type: 'pie',
            radius: ['40%', '70%'],
            center: ['50%', '70%'],
            // adjust the start angle
            startAngle: 180,
            label: {
                show: true,
                formatter(param) {
                // correct the percentage
                return param.name + ' (' + param.percent * 2 + '%)';
                }
            },
            data: [
                { value: 6, name: '橡塑' },
                { value: 12, name: '橡胶' },
                { value: 15, name: '塑料' },
                { value: 12, name: '塑胶' },
                { value: 9, name: '水泥' },
                { value: 11, name: '混凝土' },
                {
                // make an record to fill the bottom 50%
                value: 6 + 12 + 15 + 12 + 9 + 11,
                itemStyle: {
                    // stop the chart from rendering this piece
                    color: 'none',
                    decal: {
                    symbol: 'none'
                    }
                },
                label: {
                    show: true,
                    color: '#fff',
                }
                }
            ]
            }
        ]
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