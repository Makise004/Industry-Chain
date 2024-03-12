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
                { name: '钢铁', depth: 0 },
                { name: '发动机系统零部件', depth: 1 },
                { name: '乘用车', depth: 2 },
                { name: '有色金属', depth: 0 },
                { name: '木材', depth: 0 },
                { name: '塑料', depth: 0 },
                { name: '橡胶', depth: 0 },
                { name: '油漆', depth: 0 },
                { name: '玻璃', depth: 0 },
                { name: '电子元器件', depth: 0 },
                { name: '传统系统零部件', depth: 1 },
                { name: '制动系统零部件', depth: 1 },
                { name: '转向系统零部件', depth: 1 },
                { name: '电子系统零部件', depth: 1 },
                { name: '底盘零部件', depth: 1 },
                { name: '车身零部件', depth: 1 },
                { name: '电驱动系统零部件', depth: 1 },
                { name: '电池零部件', depth: 1 },
                { name: '轮胎', depth: 1 },
                { name: '客车', depth: 2 },
                { name: '专用车', depth: 2 },
                { name: '轻型货车', depth: 2 },
                { name: '新能源汽车', depth: 2 },
            ],
            links: [
                { source: '钢铁', target: '发动机系统零部件', value: 2 },
                { source: '钢铁', target: '传统系统零部件', value: 2 },
                { source: '钢铁', target: '制动系统零部件', value: 2 },
                { source: '钢铁', target: '转向系统零部件', value: 2 },
                { source: '钢铁', target: '电子系统零部件', value: 2 },
                { source: '钢铁', target: '底盘零部件', value: 2 },
                { source: '钢铁', target: '车身零部件', value: 2 },
                { source: '钢铁', target: '电驱动系统零部件', value: 2 },
                { source: '钢铁', target: '电池零部件', value: 2 },
                { source: '钢铁', target: '轮胎', value:2 },
                { source: '有色金属', target: '发动机系统零部件', value: 2 },
                { source: '有色金属', target: '传统系统零部件', value: 2 },
                { source: '有色金属', target: '制动系统零部件', value: 2 },
                { source: '有色金属', target: '转向系统零部件', value: 2 },
                { source: '有色金属', target: '电子系统零部件', value: 2 },
                { source: '有色金属', target: '底盘零部件', value: 2 },
                { source: '有色金属', target: '车身零部件', value: 2 },
                { source: '有色金属', target: '电驱动系统零部件', value: 2 },
                { source: '有色金属', target: '电池零部件', value: 2 },
                { source: '有色金属', target: '轮胎', value: 2 },
                { source: '木材', target: '发动机系统零部件', value: 2 },
                { source: '木材', target: '传统系统零部件', value: 2 },
                { source: '木材', target: '制动系统零部件', value: 2 },
                { source: '木材', target: '转向系统零部件', value: 2 },
                { source: '木材', target: '电子系统零部件', value: 2 },
                { source: '木材', target: '底盘零部件', value: 2 },
                { source: '木材', target: '车身零部件', value: 2 },
                { source: '木材', target: '电驱动系统零部件', value: 2 },
                { source: '木材', target: '电池零部件', value: 2 },
                { source: '木材', target: '轮胎', value: 2 },
                { source: '塑料', target: '发动机系统零部件', value: 2 },
                { source: '塑料', target: '传统系统零部件', value: 2 },
                { source: '塑料', target: '制动系统零部件', value: 2 },
                { source: '塑料', target: '转向系统零部件', value: 2 },
                { source: '塑料', target: '电子系统零部件', value: 2 },
                { source: '塑料', target: '底盘零部件', value: 2 },
                { source: '塑料', target: '车身零部件', value: 2 },
                { source: '塑料', target: '电驱动系统零部件', value: 2 },
                { source: '塑料', target: '电池零部件', value: 2 },
                { source: '塑料', target: '轮胎', value: 2 },
                { source: '橡胶', target: '发动机系统零部件', value: 2 },
                { source: '橡胶', target: '传统系统零部件', value: 2 },
                { source: '橡胶', target: '制动系统零部件', value: 2 },
                { source: '橡胶', target: '转向系统零部件', value: 2 },
                { source: '橡胶', target: '电子系统零部件', value: 2 },
                { source: '橡胶', target: '底盘零部件', value: 2 },
                { source: '橡胶', target: '车身零部件', value: 2 },
                { source: '橡胶', target: '电驱动系统零部件', value: 2 },
                { source: '橡胶', target: '电池零部件', value: 2 },
                { source: '橡胶', target: '轮胎', value: 2 },
                { source: '油漆', target: '发动机系统零部件', value: 2 },
                { source: '油漆', target: '传统系统零部件', value: 2 },
                { source: '油漆', target: '制动系统零部件', value: 2 },
                { source: '油漆', target: '转向系统零部件', value: 2 },
                { source: '油漆', target: '电子系统零部件', value: 2 },
                { source: '油漆', target: '底盘零部件', value: 2 },
                { source: '油漆', target: '车身零部件', value: 2 },
                { source: '油漆', target: '电驱动系统零部件', value: 2 },
                { source: '油漆', target: '电池零部件', value: 2 },
                { source: '油漆', target: '轮胎', value: 2 },
                { source: '玻璃', target: '发动机系统零部件', value: 2 },
                { source: '玻璃', target: '传统系统零部件', value: 2 },
                { source: '玻璃', target: '制动系统零部件', value: 2 },
                { source: '玻璃', target: '转向系统零部件', value: 2 },
                { source: '玻璃', target: '电子系统零部件', value: 2 },
                { source: '玻璃', target: '底盘零部件', value: 2 },
                { source: '玻璃', target: '车身零部件', value: 2 },
                { source: '玻璃', target: '电驱动系统零部件', value: 2 },
                { source: '玻璃', target: '电池零部件', value: 2 },
                { source: '玻璃', target: '轮胎', value: 2 },
                { source: '电子元器件', target: '发动机系统零部件', value: 2 },
                { source: '电子元器件', target: '传统系统零部件', value: 2 },
                { source: '电子元器件', target: '制动系统零部件', value: 2 },
                { source: '电子元器件', target: '转向系统零部件', value: 2 },
                { source: '电子元器件', target: '电子系统零部件', value: 2 },
                { source: '电子元器件', target: '底盘零部件', value: 2 },
                { source: '电子元器件', target: '车身零部件', value: 2 },
                { source: '电子元器件', target: '电驱动系统零部件', value: 2 },
                { source: '电子元器件', target: '电池零部件', value: 2 },
                { source: '电子元器件', target: '轮胎', value: 2 },
                { source: '发动机系统零部件', target: '乘用车', value: 2 },
                { source: '发动机系统零部件', target: '客车', value: 2 },
                { source: '发动机系统零部件', target: '专用车', value: 2 },
                { source: '发动机系统零部件', target: '轻型货车', value: 2 },
                { source: '发动机系统零部件', target: '新能源汽车', value: 2 },
                { source: '传统系统零部件', target: '乘用车', value: 2 },
                { source: '传统系统零部件', target: '客车', value: 2 },
                { source: '传统系统零部件', target: '专用车', value: 2 },
                { source: '传统系统零部件', target: '轻型货车', value: 2 },
                { source: '传统系统零部件', target: '新能源汽车', value: 2 },
                { source: '制动系统零部件', target: '乘用车', value: 2 },
                { source: '制动系统零部件', target: '客车', value: 2 },
                { source: '制动系统零部件', target: '专用车', value: 2 },
                { source: '制动系统零部件', target: '轻型货车', value: 2 },
                { source: '制动系统零部件', target: '新能源汽车', value: 2 },
                { source: '转向系统零部件', target: '乘用车', value: 2 },
                { source: '转向系统零部件', target: '客车', value: 2 },
                { source: '转向系统零部件', target: '专用车', value:2 },
                { source: '转向系统零部件', target: '轻型货车', value: 2 },
                { source: '转向系统零部件', target: '新能源汽车', value: 2 },
                { source: '电子系统零部件', target: '乘用车', value: 2 },
                { source: '电子系统零部件', target: '客车', value: 2 },
                { source: '电子系统零部件', target: '专用车', value: 4 },
                { source: '电子系统零部件', target: '轻型货车', value: 2 },
                { source: '电子系统零部件', target: '新能源汽车', value: 2 },
                { source: '底盘零部件', target: '乘用车', value: 2 },
                { source: '底盘零部件', target: '客车', value: 2 },
                { source: '底盘零部件', target: '专用车', value: 2 },
                { source: '底盘零部件', target: '轻型货车', value: 2 },
                { source: '底盘零部件', target: '新能源汽车', value: 2 },
                { source: '车身零部件', target: '乘用车', value: 4 },
                { source: '车身零部件', target: '客车', value: 2 },
                { source: '车身零部件', target: '专用车', value: 2 },
                { source: '车身零部件', target: '轻型货车', value: 2 },
                { source: '车身零部件', target: '新能源汽车', value: 2 },
                { source: '电驱动系统零部件', target: '乘用车', value: 2 },
                { source: '电驱动系统零部件', target: '客车', value: 2},
                { source: '电驱动系统零部件', target: '专用车', value: 4 },
                { source: '电驱动系统零部件', target: '轻型货车', value: 2 },
                { source: '电驱动系统零部件', target: '新能源汽车', value: 2 },
                { source: '电池零部件', target: '乘用车', value: 2 },
                { source: '电池零部件', target: '客车', value: 2 },
                { source: '电池零部件', target: '专用车', value: 4 },
                { source: '电池零部件', target: '轻型货车', value: 2},
                { source: '电池零部件', target: '新能源汽车', value: 2},
                { source: '轮胎', target: '乘用车', value: 2 },
                { source: '轮胎', target: '客车', value: 2 },
                { source: '轮胎', target: '专用车', value: 4 },
                { source: '轮胎', target: '轻型货车', value: 2 },
                { source: '轮胎', target: '新能源汽车', value:2 },
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