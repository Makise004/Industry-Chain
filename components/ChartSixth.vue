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
      var option;
      option = {
        title: {
          text: '非金属矿物制品业',
          textStyle: {
            color: '#fff',
          },
          left: '5%',
        },
        textStyle: {
          color: '#fff',
          fontSize: 15
        },
        radar: {
          indicator: [
            { name: '水泥', max: 50 },
            { name: '混凝土', max: 50 },
            { name: '砂浆', max: 15 },
            { name: '石墨', max: 10 },
            { name: '玻璃', max: 50 },
            { name: '陶瓷', max: 50 }
          ],
          center: ['50%', '50%']
        },
        series: [
          {
            type: 'radar',
            itemStyle: {
              color: '#b98ef2',
              borderCap: 'butt',
            },
            lineStyle: {
              color: '#cbaaf5',
              width: 4
            },
            data: [
              {
                value: [21, 36, 7, 2, 44, 23],
              },
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