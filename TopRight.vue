<template>
  <dv-conical-column-chart :config="config3" style="width:100%;height:80%;margin:auto" />
</template>

<script>
export default {
  props: {
    dataCharts: {
      type:Array,
      default:()=>[
        {
          name: '邗江',
          value: 516
        },
        {
          name: '江都',
          value: 828
        },
        {
          name: '广陵',
          value: 294
        },
        {
          name: '宝应',
          value: 624
        },
        {
          name: '高邮',
          value: 744
        },
        {
          name: '仪征',
          value: 590
        },
        {
          name: '经开区',
          value: 190
        }
      ]
    },
    dataImg: {
      type:Array,
      default:()=>[
      ]
    }
  },
  data() {
    return {
      config3: {
        data: this.dataCharts,
        showValue: true
      }, 
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