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
          text: '酒、饮料和精制茶制造业',
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
                { value: 5, name: '宾馆用品' },
                { value: 4, name: '食品生产' },
                { value: 4, name: '啤酒' },               
                { value: 3, name: '白酒加工' },
                { value: 2, name: '预包装产品' },
                { value: 2, name: '饮料' },
                { value: 1, name: '农业技术' },
                { value: 1, name: '中药饮片' },
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