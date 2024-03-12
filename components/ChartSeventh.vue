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
            name: '节能环保',
            children: [
            {
                name: '资源回收',
                value: 15,
                children: [
                {
                    name: '城市生活垃圾',
                    value: 2
                },
                {
                    name: '工业废物',
                    value: 5,
                },
                {
                    name: '再生资源',
                    value: 4
                }
                ]
            },
            {
                name: '节能设备',
                value: 10,
                children: [
                {
                    name: '环保节能设备',
                    value: 5
                },
                {
                    name: '环保型弹性体',
                    value: 1
                }
                ]
            }
            ]
        },
        {
            name: '化学纤维',
            children: [
            {
                name: '合成纤维',
                value: 3
            },
            {
                name: '涤纶短纤维',
                value: 6
            }
            ]
        },
        {
            name: '设计、研发',
            children: [
            {
                name: '新能源技术',
                value: 8,
                children: [
                {
                    name: '新能源技术研发',
                    value: 2
                },
                {
                    name: '特种设备设计',
                    value: 3
                },
                {
                    name: '工业固体废弃物利用',
                    value: 2,
                }
                ]
            }
            ]
        }
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