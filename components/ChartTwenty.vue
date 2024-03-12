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
      var option;
      option = {
        title: {
          text: '燃气生产和供应业',
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
            { name: '天然气', max: 7 },
            { name: '管道燃气', max: 4 },
            { name: '燃气设备', max: 4 },
            { name: '发电业务', max: 4 },
            { name: '城市天然气管网', max: 4 },
          ],
          center: ['50%', '50%']
        },
        series: [
          {
            type: 'radar',
            itemStyle: {
              color: '#f7db00',
              borderCap: 'butt',
            },
            lineStyle: {
              color: '#f7db00',
              width: 4
            },
            data: [
              {
                value: [6, 4, 2, 1, 1],
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