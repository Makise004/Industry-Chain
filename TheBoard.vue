<template>
    <!-- -->
      <el-row style="margin-left:17%;">
        <div style="width:96%;height:4rem;box-shadow: 10px 10px 15px #000101ce">
          <dv-decoration-7 style="width:100%;height:0.5rem;left:50%;display:flex;fontSize:0.1rem;color:#bcd8f5">各产业单位数量排行榜</dv-decoration-7>
          <MidRight />
        </div>
      </el-row>
</template>

<script>
import MidRight from './MidRight'
export default {
  components: {
    MidRight,
  },
}
</script>

<style scoped lang="less">
.back {
  position: absolute;
  top: 10px;
  left: 10px;
}
.el-row{
  margin-bottom: 0;
}
</style>