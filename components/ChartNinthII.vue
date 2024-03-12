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
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },
        animation: true,
        series: [
            {
            type: 'sankey',
            top: '30%',
            left: '15%',
            emphasis: {
                focus: 'adjacency'
            },
            label: {
                color: '#fff',
                position: 'inside',
            },
            data: [
                { name: '棉', depth: 0 },
                { name: '天然纤维', depth: 1 },
                { name: '体育服装', depth: 2 },
                { name: '麻', depth: 0 },
                { name: '毛', depth: 0 },
                { name: '丝', depth: 0 },
                { name: '人造纤维', depth: 0 },
                { name: '合成纤维', depth: 0 },
                { name: '无机纤维', depth: 0 },
                { name: '化学纤维', depth: 1 },
               // { name: '燃料', depth: 1 },
                { name: '', depth: 1 },
                { name: '功能服装', depth: 2 },
                { name: '男女服装', depth: 2 },
                { name: '母婴及童装', depth: 2 },
            ],
            links: [
                { source: '棉', target: '天然纤维', value: 1 },
                { source: '麻', target: '天然纤维', value: 2 },
                { source: '毛', target: '天然纤维', value: 1 },
                { source: '丝', target: '天然纤维', value: 4 },
                { source: '人造纤维', target: '化学纤维', value: 2 },
                { source: '合成纤维', target: '化学纤维', value: 4 },
                { source: '无机纤维', target: '化学纤维', value: 2 },
                { source: '天然纤维', target: '体育服装', value: 2 },
                { source: '天然纤维', target: '功能服装', value: 2 },
                { source: '天然纤维', target: '男女服装', value: 2 },
                { source: '化学纤维', target: '母婴及童装', value: 2 },
                { source: '化学纤维', target: '体育服装', value: 2 },
                { source: '化学纤维', target: '功能服装', value: 2 },
                { source: '化学纤维', target: '男女服装', value: 2 },
                { source: '天然纤维', target: '母婴及童装', value: 2 },
            ],
            orient: 'vertical',
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