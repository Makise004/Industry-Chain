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
                { name: '海洋工程', depth: 0 },
                { name: '海上钻进', depth: 1 },
                { name: '海上风电', depth: 1 },
                { name: '海上油气生产', depth: 1 },
                { name: '海底电缆与管道铺设', depth: 1 },
                { name: '海洋运输', depth: 0 },
                { name: '集装箱运输', depth: 1 },
                { name: '散货运输', depth: 1 },
                { name: '客运', depth: 1 },
                { name: '海洋科研', depth: 0 },
                { name: '海洋地质', depth: 1 },
                { name: '海洋生物', depth: 1 },
                { name: '海洋气象', depth: 1 },
                { name: '海洋工程项目总包', depth: 0 },
            ],
            links: [
                { source: '海洋工程', target: '海上钻井', value: 2 },
                { source: '海洋工程', target: '海上风电', value: 1 },
                { source: '海洋工程', target: '海上油气生产', value: 1 },
                { source: '海洋工程', target: '海底电缆与管道铺设', value: 2 },
                { source: '海洋运输', target: '集装箱运输', value: 1 },
                { source: '海洋运输', target: '散货运输', value: 2 },
                { source: '海洋运输', target: '客运', value: 2 },
                { source: '海洋科研', target: '海洋地质', value: 2 },
                { source: '海洋科研', target: '海洋生物', value: 1 },
                { source: '海洋科研', target: '海洋气象', value: 1 },
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