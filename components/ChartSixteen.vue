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
      var option = {
        title:{
          text: '木材加工和木、竹、藤、棕、草制品业',
          textStyle: {
            color: '#e2e0eb',
            fontWeight: 'normal',
            fontSize: 20,
            textShadowColor: '#171617',
            textShadowBlur: 5,
            textShadowOffsetX: 5,
            textShadowOffsetY: 5,
          },
          left: '25%'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            top: '5%',
            left: 'center',
            textStyle: {
                color: '#fff',
            }
        },
        series: [
            {
            name: '主营产品1',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            label: {
                show: false,
                position: 'center'
            },
            emphasis: {
                label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 3, name: '木材加工' },
                { value: 2, name: '人造板' },
                { value: 2, name: '木制品' },
                { value: 1, name: '木材' },
                { value: 1, name: '包装制品' }
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