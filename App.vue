<!-- HTML -->
<template>
  <div class="bg">
  <div id="aaa" style="transform-origin: top;">
    <div class='content'>
      <!-- 网页大标题 -->
      <ScreenTitle />
      <!-- box容器布局 第一行 -->
      <ScreenFirst />
    </div>
  </div>
  </div>
</template>
<!-- JS -->
<script>
import ScreenTitle from './ScreenTitle'
import ScreenFirst from './ScreenFirst'
export default {
  name: 'index',
  components: {
    ScreenTitle,
    ScreenFirst,
  },
  data() {
    return {
      path: '',
      scale: 1.0,
    }
  },
  // 判断路由
  mounted() {
    this.path = this.$route.path;
    document.getElementById("aaa").onkeydown = (event) => {
      if (event.ctrlKey == true && event.keyCode == 43) {
        this.zoomin();
      } else if(event.ctrlKey == true && event.keyCode == 45) {
        this.zoomout();
      }
    };
  },
  methods: {
    zoomout() {
      console.log("out");
      document.getElementById("aaa").style.transform = "scale("+ this.scale +")";
      this.scale += 0.05;
    },
    zoomin() {
      console.log("min");
      document.getElementById("aaa").style.transform = "scale("+ this.scale +")";
      this.scale -= 0.05;
      if(this.scale < 0.5){
        this.scale = 0.5
      }
    },
  },
  watch:{
      $route(to,from){
        this.path = to.path
      }
  }
}
</script>
<!-- CSS -->
<style>
  body {
    margin: 0;
    background: rgb(0, 0, 0);
    transform-origin: top left;
  }
  p {
    margin: 0;
    padding: 0;
  }
  
</style>
