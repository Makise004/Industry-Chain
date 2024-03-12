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
          text: '通用设备制造业',
          textStyle: {
            color: '#e2e0eb',
            fontWeight: 'normal',
            textShadowColor: '#171617',
            textShadowBlur: 5,
            textShadowOffsetX: 5,
            textShadowOffsetY: 5,
          },
          left: 280,
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
                { value: 16, name: '机床' },               
                { value: 13, name: '液压机械' },
                { value: 5, name: '金属加工' },
                { value: 4, name: '滑线' },
                { value: 8, name: '弹簧' },
                { value: 7, name: '锅炉' },
                { value: 4, name: '阀门' },
                { value: 3, name: '柴油机' },
                { value: 3, name: '工业机器人' },
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