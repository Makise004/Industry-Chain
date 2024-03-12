<template>
  <el-container>
    <dv-border-box-12 v-show="!(path==='/login')" style="overflow-x: hidden;overflow-y:hidden;width:13%;height:4.24rem;position:absolute;top:0.56rem;">
      <el-aside style="height:4.24rem;">
        <div style="width:99%;height:4rem;">
        <!-- 左 -->
            <html class='dark'>
              <el-menu
                class="el-menu-vertical-demo sliderHeight scroll"
                @open="handleOpen"
                @close="handleClose"
                background-color="#02040621"
                text-color="#ebeceb"
                active-text-color="#6ba8c8"
                style="position:absolute;top:0.1rem;bottom:0.1rem;left:0.05rem;right:0.1rem"
                :router="true"
                :unique-opened="true"
              >
                <el-menu-item index="/screen" style="font-size:0.09rem">
                  数据大屏
                </el-menu-item>
                <el-menu-item index="/kg" style="font-size:0.09rem">
                  知识图谱展示
                </el-menu-item>
                <el-menu-item index="/kg-search" style="font-size:0.09rem">
                  产业、产品产业链查询
                </el-menu-item>
                <el-menu-item index="/firmChain" style="font-size:0.09rem">
                  企业单位产业链查询
                </el-menu-item>
                <el-menu-item index='/qRelation' style="font-size:0.09rem">
                  指定关系查询
                </el-menu-item>
                <el-menu-item index='/qfirm' style="font-size:0.09rem">
                  单位信息和数据分析
                </el-menu-item>

                <!-- 子菜单 -->
                <el-sub-menu :index="1">
                  <template #title>
                    <span style="font-size:0.09rem">产业数据分析</span>
                  </template>

                  <el-menu-item-group title="D">
                    <el-menu-item index='/charts4' style="font-size:0.08rem">
                      电力、热力生产和供...
                    </el-menu-item>
                    <el-menu-item index='/charts5' style="font-size:0.08rem">
                      电气机械和器材制造...
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="F">
                    <el-menu-item index='/charts2' style="font-size:0.08rem">
                      纺织业
                    </el-menu-item>
                    <el-menu-item index='/charts3' style="font-size:0.08rem">
                      纺织服装、服饰业
                    </el-menu-item>
                    <el-menu-item index='/charts6' style="font-size:0.08rem">
                      非金属矿物制品业
                    </el-menu-item>
                    <el-menu-item index='/charts7' style="font-size:0.08rem">
                      废弃资源综合利用业
                    </el-menu-item>
                  </el-menu-item-group>
                  
                  <el-menu-item-group title="H">
                    <el-menu-item index='/charts8' style="font-size:0.08rem">
                      黑色金属冶炼和压延...
                    </el-menu-item>
                    <el-menu-item index='/charts9' style="font-size:0.08rem">
                      化学纤维制造业
                    </el-menu-item>
                    <el-menu-item index='/charts10' style="font-size:0.08rem">
                      化学原料和化学制品...
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="J">
                    <el-menu-item index='/charts11' style="font-size:0.08rem">
                      计算机、通信和其他...
                    </el-menu-item>
                    <el-menu-item index='/charts12' style="font-size:0.08rem">
                      家具制造业
                    </el-menu-item>
                    <el-menu-item index='/charts13' style="font-size:0.08rem">
                      金属制品、机械和设...
                    </el-menu-item>
                    <el-menu-item index='/charts14' style="font-size:0.08rem">
                      金属制品业
                    </el-menu-item>
                    <el-menu-item index='/charts15' style="font-size:0.08rem">
                      酒、饮料和精制茶制...
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="M">
                    <el-menu-item index='/charts16' style="font-size:0.08rem">
                      木材加工和木、竹、...
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="N">
                    <el-menu-item index='/charts1' style="font-size:0.08rem">
                      农副产品加工业
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="P">
                    <el-menu-item index='/charts17' style="font-size:0.08rem">
                      皮革、毛皮、羽毛及...
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="Q">
                    <el-menu-item index='/charts18' style="font-size:0.08rem">
                      其他制造业
                    </el-menu-item>
                    <el-menu-item index='/charts19' style="font-size:0.08rem">
                      汽车制造业
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="R">
                    <el-menu-item index='/charts20' style="font-size:0.08rem">
                      燃气生产和供应业
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="S">
                    <el-menu-item index='/charts21' style="font-size:0.08rem">
                      石油、煤炭及其他燃...
                    </el-menu-item>
                    <el-menu-item index='/charts22' style="font-size:0.08rem">
                      食品制造业
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="T">
                    <el-menu-item index='/charts23' style="font-size:0.08rem">
                      铁路、船舶、航空航...
                    </el-menu-item>
                    <el-menu-item index='/charts24' style="font-size:0.08rem">
                      通用设备制造业
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="W">
                    <el-menu-item index='/charts25' style="font-size:0.08rem">
                      文教、工美、体育和...
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="X">
                    <el-menu-item index='/charts26' style="font-size:0.08rem">
                      橡胶和塑料制品业
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="Y">
                    <el-menu-item index='/charts27' style="font-size:0.08rem">
                      医药制造业
                    </el-menu-item>
                    <el-menu-item index='/charts28' style="font-size:0.08rem">
                      印刷和记录媒介复制...
                    </el-menu-item>
                    <el-menu-item index='/charts29' style="font-size:0.08rem">
                      有色金属冶炼和压延...
                    </el-menu-item>
                  </el-menu-item-group>

                  <el-menu-item-group title="Z">
                    <el-menu-item index='/charts30' style="font-size:0.08rem">
                      造纸和纸制品业
                    </el-menu-item>
                    <el-menu-item index='/charts31' style="font-size:0.08rem">
                      专用设备制造业
                    </el-menu-item>
                  </el-menu-item-group>
                </el-sub-menu>

                <el-menu-item index='/Board' style="font-size:0.09rem">
                  各产业单位数量排行
                </el-menu-item>

                <el-menu-item index='/sum' style="font-size:0.09rem">
                  各行政区单位数量排行
                </el-menu-item>
                
                <el-sub-menu :index="2">
                  <template #title>
                    <span style="font-size:0.09rem">知识图谱数据管理</span>
                  </template>
                  <el-menu-item index='/nodeManage' style="font-size:0.08rem">
                    图谱节点管理
                  </el-menu-item>
                  <el-menu-item index='/edgeManage' style="font-size:0.08rem">
                    图谱关系管理
                  </el-menu-item>
                </el-sub-menu>
              </el-menu>
            </html>
        </div>
      </el-aside> 
    </dv-border-box-12>

    <el-main>
      <router-view></router-view>
    </el-main> 

  </el-container>
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  // 判断路由
  mounted() {
    this.path = this.$route.path;
    console.log(this.$route.path)
  },
  watch:{
      $route(to,from){
          this.path = to.path
      }
  }
}
</script>

<style>
  .scroll {
    overflow-y: auto;
    width:94%;
    overflow-x: hidden;
  }
  .scroll::-webkit-scrollbar {
  	display: none;
  }
  .aside {
    overflow: hidden;
 }
.el-aside {
    height: 100%;
    overflow-x: hidden;
 }

</style>