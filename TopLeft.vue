<template>
  <dv-capsule-chart :config="config" style="width:100%;height:300px;" />
</template>

<script>

export default {
  props: {
    dataChart:{
      type:Array,
      default:()=>[
        {
          name: '南阳',
          value: 167
        },
        {
          name: '周口',
          value: 123
        },
        {
          name: '漯河',
          value: 98
        },
        {
          name: '郑州',
          value: 77
        },
        {
          name: '西峡',
          value: 56
        }
      ]
    }
  },

  data() {
    return {
      config: {
        data: this.dataChart,
        showValue: true
      },
    }
  }
}

</script>