<template>
  <div ref="chart" style="width:100%;height:85%"></div>
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
            name: '元器件',
            children: [
            {
                name: '结构件',
                value: 1,
            },
            {
                name: '集成电路',
                value: 1,
            },
            {
                name: '光学组件',
                value: 1,
            },
            {
                name: '显示器件',
                value: 1,
            },
            {
                name: '射频组件',
                value: 1,
            },
            {
                name: 'PCB',
                value: 1,
            },
            {
                name: '盖板玻璃',
                value: 1,
            },
            {
                name: '分立器件',
                value: 1,
            },

            {
                name: '连接器',
                value: 1,
            },
            {
                name: '被动元器件',
                value: 1,
            },
            {
                name: '电池模块',
                value: 1,
            },
            {
                name: '声学器件',
                value: 1,
            },
            {
                name: '传感器',
                value: 1,
            },
            ]
        },
        {
            name: '组件加工',
            children: [
                {
                    name: 'ODM/ODE',
                    value: 4,
                }
            ]
        },
        {
            name: '终端产品',
            children: [
            {
                name: '传统智能终端',
                children: [
                    {
                        name: '智能手机',
                        value: 1,
                    },
                    {
                        name: '平板电脑',
                        value: 1,
                    },
                    {
                        name: '笔记本电脑',
                        value: 1,
                    }
                ]
            },
            {
                name: '新型智能终端',
                children: [
                    {
                        name: '智能电视',
                        value: 1,
                    },
                    {
                        name: '可穿戴设备',
                        value: 1,
                    },
                    {
                        name: '智能医疗健康设备',
                        value: 1,
                    },
                    {
                        name: '智能音箱',
                        value: 1,
                    },
                    {
                        name: '智能家居',
                        value: 1,
                    },
                    {
                        name: '无人机',
                        value: 1,
                    },
                ]
            },
            {
                name: '汽车电子',
                value: 5,
            },
            {
                name: '医疗电子',
                value: 3,
            },
            {
                name: '工业控制系统',
                value: 4,
            },
            {
                name: 'LED',
                value: 2,
            },
            {
                name: '军工电子',
                value: 2,
            }
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