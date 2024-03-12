<template>
  <div v-show="!(path==='/login')" class='header'>
    <dv-decoration-8 style="width:30%;height:50%;" />
    <dv-decoration-5 class="header-center" dur=3 style="width:40%;height:50%;"/>
    <dv-decoration-8 :reverse="true" style="width:30%;height:50%;" />
    <div class='title' style="width:30%;">扬州市产业链大数据分析与管理平台</div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      path: '',
    }
  },
  // 判断路由
  mounted() {
    this.path = this.$route.path;
    console.log(this.$route.path);
  },
  watch:{
      $route(to,from){
          this.path = to.path
      }
  }
}
</script>
