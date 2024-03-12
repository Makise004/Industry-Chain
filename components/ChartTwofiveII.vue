<template>
  <div ref="chart" style="margin-top:10%;width:100%;height:85%"></div>
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
      var data = [
        {
            name: '文教办公用品',
            children: [
            {
                name: '文具制造',
                value: 1,
            },
            {
                name: '笔的制造',
                value: 1,
            },
            {
                name: '教学模型和教具制造',
                value: 1,
            },
            ]
        },
        {
            name: '乐器制造',
            children: [
            {
                name: '中乐器制造', 
                value: 2,
            },
            {
                name: '西乐器制造',
                value: 3
            },
            {
                name: '电子乐器制造',
                value: 5,
            },
            {
                name: '其他乐器及零件制造',
                value: 3,
            },
            ]
        },
        {
            name: '工艺美术品制造',
            children: [
            {
                name: '雕塑制造', 
                value: 2,
            },
            {
                name: '金属工艺品制造',
                value: 3
            },
            {
                name: '漆器制造',
                value: 5,
            },
            {
                name: '花画制造',
                value: 3,
            },
            {
                name: '天然植物工艺品制造',
                value: 3,
            },
            {
                name: '抽纱刺绣工艺品制造',
                value: 2,
            },
            {
                name: '地毯、挂毯制造',
                value: 1,
            },
            {
                name: '珠宝首饰及有关物品制造',
                value: 2,
            }
            ]
        },
        {
            name: '乐器制造',
            children: [
            {
                name: '中乐器制造', 
                value: 2,
            },
            {
                name: '西乐器制造',
                value: 3
            },
            {
                name: '电子乐器制造',
                value: 5,
            },
            {
                name: '其他乐器及零件制造',
                value: 3,
            },
            ]
        },
        {
            name: '体育用品制造',
            children: [
            {
                name: '球类制造', 
                value: 2,
            },
            {
                name: '专项运动器材制造',
                value: 3
            },
            {
                name: '健身器材制造',
                value: 5,
            },
            {
                name: '运动防护用具制造',
                value: 3,
            },
            ]
        },
        {
            name: '玩具制造',
            children: [
            {
                name: '电玩具制造', 
                value: 2,
            },
            {
                name: '塑料玩具制造',
                value: 3
            },
            {
                name: '金属玩具制造',
                value: 5,
            },
            {
                name: '弹射玩具制造',
                value: 3,
            },
            {
                name: '娃娃玩具制造',
                value: 1,
            },
            {
                name: '儿童乘骑玩耍的童车制造',
                value: 3,
            },
            ]
        },
        {
            name: '游艺器材及娱乐用品制造',
            children: [
            {
                name: '露天游乐场所游乐设备制造', 
                value: 2,
            },
            {
                name: '游艺用品及室内游艺器材制造',
                value: 4,
            },
            {
                name: '其他娱乐用品制造',
                value: 2,
            },
            ]
        },
        ];
        option = {
        series: {
            type: 'sunburst',
            // emphasis: {
            //     focus: 'ancestor'
            // },
            data: data,
            radius: [0, '90%'],
            label: {
            rotate: 'radial'
            }
        }
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