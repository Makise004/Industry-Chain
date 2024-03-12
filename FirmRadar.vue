<template>
  <div ref="chart" style="width:100%;height:100%"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data(){
    return{

    }
  },
  mounted(){
    this.initChart2();
  },
  methods: {
    initChart2(){
      var myChart = echarts.init(this.$refs.chart2);
      var option = {
        title: {
            text: '',
            top: 10,
            left: 10
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            textStyle:{
                color: '#fff',
            },
            type: 'scroll',
            bottom: 10,
            data: (function () {
            var list = [];
            for (var i = 1; i <= 28; i++) {
                list.push(i + 2000 + '');
            }
            return list;
            })()
        },
        visualMap: {
            top: 'middle',
            right: 10,
            color: ['red', 'yellow'],
            calculable: true
        },
        radar: {
            indicator: [
            { text: 'IE8-', max: 400 },
            { text: 'IE9+', max: 400 },
            { text: 'Safari', max: 400 },
            { text: 'Firefox', max: 400 },
            { text: 'Chrome', max: 400 }
            ]
        },
        series: (function () {
            var series = [];
            for (var i = 1; i <= 28; i++) {
            series.push({
                type: 'radar',
                symbol: 'none',
                lineStyle: {
                width: 1
                },
                emphasis: {
                areaStyle: {
                    color: 'rgba(0,250,0,0.3)'
                }
                },
                data: [
                {
                    value: [
                    (40 - i) * 10,
                    (38 - i) * 4 + 60,
                    i * 5 + 10,
                    i * 9,
                    (i * i) / 2
                    ],
                    name: i + 2000 + ''
                }
                ]
            });
            }
            return series;
        })()
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