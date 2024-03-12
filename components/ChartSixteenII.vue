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
            name: '主营产品2',
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
                { value: 2, name: '木材加工' },
                { value: 2, name: '人造板' },
                { value: 2, name: '木制品' },
                { value: 1, name: '木材' },
                { value: 1, name: '细木工板、芯板' },
                { value: 1, name: '纸制品制造' },
                { value: 2, name: '建筑材料' },
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