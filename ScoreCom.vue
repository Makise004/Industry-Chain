<template>
  <dv-water-level-pond :config="config" style="width:200px;height:300px;margin-left:27%;margin-top:20%" />
</template>

<script>

export default {
  data() {
    return {
      config: {
        data: [Math.ceil(Math.random()*50) + 50, Math.ceil(Math.random()*70) + 30],
        shape: 'roundRect'
      },
    }
  }
}
</script>