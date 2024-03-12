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
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        label: {
            color: '#fff'
        },
        animation: true,
        series: [
            {
            type: 'sankey',
            bottom: '10%',
            emphasis: {
                focus: 'adjacency'
            },
            data: [
                { name: '食品加工业备供应商', depth: 0 },
                { name: '加工', depth: 1 },
                { name: '食品加工厂', depth: 2 },
                { name: '食品原料供应商', depth: 0 },
                { name: '生产', depth: 1 },
                { name: '食品生产企业', depth: 2 },
                { name: '调味品', depth: 0 },
                { name: '乳制品', depth: 0 },
                { name: '肉制品', depth: 0 },
                { name: '制造', depth: 1 },
                { name: '饮料类', depth: 2 },
                { name: '果蔬类', depth: 2 },
                { name: '其他', depth: 2 },
                { name: '玻璃包装', depth: 0 },
                { name: '金属包装', depth: 0 },
                { name: '包装', depth: 1 },
                { name: '纸制品包装', depth: 2 },
                { name: '塑料包装', depth: 2 },
            ],
            links: [
                { source: '食品加工业备供应商', target: '加工', value: 2 },
                { source: '加工', target: '食品加工厂', value: 1 },
                { source: '食品原料供应商', target: '生产', value: 1 },
                { source: '生产', target: '食品生产企业', value: 2 },
                { source: '调味品', target: '制造', value: 1 },
                { source: '乳制品', target: '制造', value: 2 },
                { source: '肉制品', target: '制造', value: 2 },
                { source: '制造', target: '饮料类', value: 2 },
                { source: '制造', target: '果蔬类', value: 1 },
                { source: '制造', target: '其他', value: 1 },
                { source: '玻璃包装', target: '包装', value: 1 },
                { source: '金属包装', target: '包装', value: 1 },
                { source: '包装', target: '纸制品包装', value: 1 },
                { source: '包装', target: '塑料包装', value: 2 },
            ],
            lineStyle: {
                color: 'gradient',
                curveness: 0.5,
                opacity: 0.5
            },
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