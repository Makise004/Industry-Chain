<template>
  <div ref="chart" style="width:100%;height:90%"></div>
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
            top: '20%',
            left: '10%',
            emphasis: {
                focus: 'adjacency'
            },
            data: [
                { name: '钢材', depth: 0 },
                { name: '发电设备', depth: 1 },
                { name: '火力发电', depth: 2 },
                { name: '仪器仪表', depth: 0 },
                { name: '发电机', depth: 1 },
                { name: '风力发电', depth: 2 },
                { name: '电子元器件', depth: 0 },
                { name: '绝缘体', depth: 0 },
                { name: '有色金属', depth: 0 },
                { name: '电动机', depth: 1 },
                { name: '水力发电', depth: 2 },
                { name: '生物智能发电', depth: 2 },
                { name: '其他', depth: 2 },
                { name: '橡胶塑料', depth: 0 },
                { name: '变压器', depth: 1 },
                { name: '逆压器', depth: 1 },
                { name: '供电设备', depth: 1 },
                { name: '电线电缆', depth: 1 },
                { name: '互感器', depth: 1 },
                { name: '接触器', depth: 1 },
                { name: '核能发电', depth: 2 },
            ],
            links: [
                { source: '钢材', target: '发电设备', value: 2 },
                { source: '钢材', target: '发电机', value: 1 },
                { source: '钢材', target: '电动机', value: 1 },
                { source: '钢材', target: '变压器', value: 2 },
                { source: '钢材', target: '逆变器', value: 1 },
                { source: '钢材', target: '供电设备', value: 1 },
                { source: '钢材', target: '电线电缆', value: 1 },
                { source: '钢材', target: '互感器', value: 2 },
                { source: '钢材', target: '接触器', value: 1 },
                { source: '仪器仪表', target: '发电设备', value: 1 },
                { source: '仪器仪表', target: '发电机', value: 2 },
                { source: '仪器仪表', target: '电动机', value: 1 },
                { source: '仪器仪表', target: '变压器', value: 1 },
                { source: '仪器仪表', target: '逆变器', value: 2 },
                { source: '仪器仪表', target: '供电设备', value: 1 },
                { source: '仪器仪表', target: '电线电缆', value: 1 },
                { source: '仪器仪表', target: '互感器', value: 1 },
                { source: '仪器仪表', target: '接触器', value: 2 },
                { source: '电子元器件', target: '发电设备', value: 2 },
                { source: '电子元器件', target: '发电机', value: 1 },
                { source: '电子元器件', target: '电动机', value: 1 },
                { source: '电子元器件', target: '变压器', value: 1 },
                { source: '电子元器件', target: '逆变器', value: 2 },
                { source: '电子元器件', target: '供电设备', value: 1 },
                { source: '电子元器件', target: '电线电缆', value: 2 },
                { source: '电子元器件', target: '互感器', value: 1 },
                { source: '电子元器件', target: '接触器', value: 1 },
                { source: '绝缘件', target: '发电设备', value: 1 },
                { source: '绝缘件', target: '发电机', value: 2 },
                { source: '绝缘件', target: '电动机', value: 2 },
                { source: '绝缘件', target: '变压器', value: 1 },
                { source: '绝缘件', target: '逆变器', value: 1 },
                { source: '绝缘件', target: '供电设备', value: 1 },
                { source: '绝缘件', target: '电线电缆', value: 1 },
                { source: '绝缘件', target: '互感器', value: 2 },
                { source: '绝缘件', target: '接触器', value: 1 },
                { source: '有色金属', target: '发电设备', value: 1 },
                { source: '有色金属', target: '发电机', value: 2 },
                { source: '有色金属', target: '电动机', value: 1 },
                { source: '有色金属', target: '变压器', value: 1 },
                { source: '有色金属', target: '逆变器', value: 2 },
                { source: '有色金属', target: '供电设备', value: 1 },
                { source: '有色金属', target: '电线电缆', value: 2 },
                { source: '有色金属', target: '互感器', value: 1 },
                { source: '有色金属', target: '接触器', value: 1 },
                { source: '橡胶塑料', target: '发电设备', value: 1 },
                { source: '橡胶塑料', target: '发电机', value: 1 },
                { source: '橡胶塑料', target: '电动机', value: 1 },
                { source: '橡胶塑料', target: '变压器', value: 1 },
                { source: '橡胶塑料', target: '逆变器', value: 1 },
                { source: '橡胶塑料', target: '供电设备', value: 1 },
                { source: '橡胶塑料', target: '电线电缆', value: 2 },
                { source: '橡胶塑料', target: '互感器', value: 2 },
                { source: '橡胶塑料', target: '接触器', value: 1 },
                { source: '发电设备', target: '火力发电', value: 2 },
                { source: '发电机', target: '火力发电', value: 1 },
                { source: '电动机', target: '火力发电', value: 1 },
                { source: '变压器', target: '火力发电', value: 1 },
                { source: '逆变器', target: '火力发电', value: 1 },
                { source: '供电设备', target: '火力发电', value: 1 },
                { source: '电线电缆', target: '火力发电', value: 1 },
                { source: '互感器', target: '火力发电', value: 1 },
                { source: '接触器', target: '火力发电', value: 1 },
                { source: '发电设备', target: '风力发电', value: 1 },
                { source: '发电机', target: '风力发电', value: 1 },
                { source: '电动机', target: '风力发电', value: 1 },
                { source: '变压器', target: '风力发电', value: 1 },
                { source: '逆变器', target: '风力发电', value: 1 },
                { source: '供电设备', target: '风力发电', value: 1 },
                { source: '电线电缆', target: '风力发电', value: 1 },
                { source: '互感器', target: '风力发电', value: 1 },
                { source: '接触器', target: '风力发电', value: 1 },
                { source: '发电设备', target: '水力发电', value: 1 },
                { source: '发电机', target: '水力发电', value: 1 },
                { source: '电动机', target: '水力发电', value: 2 },
                { source: '变压器', target: '水力发电', value: 1 },
                { source: '逆变器', target: '水力发电', value: 1 },
                { source: '供电设备', target: '水力发电', value: 1 },
                { source: '电线电缆', target: '水力发电', value: 2 },
                { source: '互感器', target: '水力发电', value: 1 },
                { source: '接触器', target: '水力发电', value: 1 },
                { source: '发电设备', target: '生物智能发电', value: 1 },
                { source: '发电机', target: '生物智能发电', value: 1 },
                { source: '电动机', target: '生物智能发电', value: 2 },
                { source: '变压器', target: '生物智能发电', value: 1 },
                { source: '逆变器', target: '生物智能发电', value: 1 },
                { source: '供电设备', target: '生物智能发电', value: 2 },
                { source: '电线电缆', target: '生物智能发电', value: 1 },
                { source: '互感器', target: '生物智能发电', value: 1 },
                { source: '接触器', target: '生物智能发电', value: 1 },
                { source: '发电设备', target: '核能发电', value: 1 },
                { source: '发电机', target: '核能发电', value: 2 },
                { source: '电动机', target: '核能发电', value: 1 },
                { source: '变压器', target: '核能发电', value: 2 },
                { source: '逆变器', target: '核能发电', value: 1 },
                { source: '供电设备', target: '核能发电', value: 1 },
                { source: '电线电缆', target: '核能发电', value: 1 },
                { source: '互感器', target: '核能发电', value: 2 },
                { source: '接触器', target: '核能发电', value: 1 },
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