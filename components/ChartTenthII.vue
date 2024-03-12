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
                { value: 15, name: '新型显示' },
                { value: 13, name: '节能环保' },
                { value: 12, name: '工程机械' },               
                { value: 10, name: '设计、研发' },
                { value: 7, name: '化学原料和化学制品制造业' },
                { value: 5, name: '橡胶和塑料制品业' },
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