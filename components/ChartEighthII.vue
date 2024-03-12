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
          textStyle: {
            color: '#e2e0eb',
            fontWeight: 'normal',
            textShadowColor: '#171617',
            textShadowBlur: 5,
            textShadowOffsetX: 5,
            textShadowOffsetY: 5,
          },
          left: 255,
          top: 60
        },
        legend: {
            top: 'top',
            textStyle: {
                color: '#fff'
            }
        },
        series: [
            {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 180],
            top: '25%',
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 8,
            },
            label: {
                show: true,
                color: "#fff",
                fontWeight: 'bold',
                fontFamily: 'Microsoft YaHei',
                fontSize: 15
            },
            data: [
                { value: 12, name: '工程机械' },
                { value: 15, name: '新型显示' },
                { value: 7, name: '电力设备' },
                { value: 10, name: '设计、研发' },
                { value: 8, name: '通用设备' },
                { value: 6, name: '专用设备' },
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