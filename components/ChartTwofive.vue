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
          text: '文教、工美、体育和娱乐用品制造业',
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
                { value: 3, name: '油画笔' },
                { value: 2, name: '金属工艺品' },
                { value: 12, name: '工艺美术品' },
                { value: 12, name: '刺绣工艺品' },
                { value: 11, name: '玻璃工艺品' },
                { value: 3, name: '水晶工艺品' },
                { value: 9, name: '礼仪用品' },
                { value: 7, name: '健身器械' },
                { value: 10, name: '体育用品' },
                { value: 30, name: '玩具' },
                { value: 4, name: '游艺用品' },
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