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
          text: '家具制造业',
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
            { name: '办公家具', max: 4 },
            { name: '钢木家具', max: 4 },
            { name: '户外家具', max: 4 },
            { name: '智能厨房', max: 4 },
            { name: '乳胶制品', max: 4 },
            { name: '其他家具', max: 4 }
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
                value: [2, 1, 1, 1, 3, 3],
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