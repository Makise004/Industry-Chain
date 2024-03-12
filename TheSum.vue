<template>
    <!-- -->
      <el-row style="margin-left:17%;">
        <div style="width:95%;height:4rem;box-shadow: 10px 10px 15px #000101ce">
          <div style="width:100%;height:0.5rem;left:50%;display:flex;fontSize:0.1rem;color:#bcd8f5">扬州市各行政区内单位数量</div>
          <TopRight />
        </div>
      </el-row>
</template>

<script>
import TopRight from './TopRight'
export default {
  components: {
    TopRight,
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