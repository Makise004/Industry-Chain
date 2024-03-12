<template>
      <div class='dark'>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo scroll"
          @open="handleOpen"
          @close="handleClose"
          background-color="#02040621"
          text-color="#ebeceb"
          active-text-color="#6ba8c8"
          style="position:absolute;top:20px;bottom:20px;left:10px;right:10px"
        >
          <!-- 产业1 -->
          <el-sub-menu index="1">
            <template #title>
              <span>电力、热力生产和供应业</span>
            </template>
            <el-sub-menu index="1-1">
              <template #title><div style="color:#d6befa">电力供应</div></template>
              <el-menu-item index="1-1-1" style="color:#c5caf8">电力供应</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="1-2">
              <template #title><div style="color:#d6befa">电力生产</div></template>
              <el-menu-item index="1-2-1" style="color:#c5caf8">风力发电</el-menu-item>
              <el-menu-item index="1-2-2" style="color:#c5caf8">火力发电</el-menu-item>
              <el-menu-item index="1-2-3" style="color:#c5caf8">热电联产</el-menu-item>
              <el-menu-item index="1-2-4" style="color:#c5caf8">生物质能发电</el-menu-item>
              <el-menu-item index="1-2-5" style="color:#c5caf8">太阳能发电</el-menu-item>
            </el-sub-menu>
            <el-sub-menu index="1-3">
              <template #title><div style="color:#d6befa">热力生产和供应</div></template>
              <el-menu-item index="1-3-1" style="color:#c5caf8">热力生产和供应</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>

        </el-menu>
      </div>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .scroll {
    overflow-y: auto;
    width:94%;
    height:680px;
    overflow-x: hidden;
  }
  .scroll::-webkit-scrollbar {
  	display: none;
  }
</style>