<template>
  <div ref="chart" style="width:100%;height:95%"></div>
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
          text: '汽车制造业',
          left: 'right',
          textStyle: {
            color: '#e2e0eb',
          }
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          textStyle: {
            color: '#fff',
          }
        },
        series: [
          {
            type: 'pie',
            radius: '60%',
            top: 60,
            data: [
              { value: 47, name: '汽车零部件' },
              { value: 41, name: '汽车配件' },
              { value: 5, name: '汽车内饰' },
              { value: 2, name: '汽车发动机' },
              { value: 3, name: '汽车驾驶室配件' },
              { value: 4, name: '紧固件' },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              color: '#fff',
              fontStyle: 'italic',
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style>
</style>