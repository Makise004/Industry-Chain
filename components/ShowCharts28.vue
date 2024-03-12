<template>
  <html class='dark' style="position:absolute;left:1.5rem;width:85%;height:86%">
  <el-scrollbar height="4.1rem">
    <div class="flex justify-between items-center flex-wrap">
      <div
        class="inline-flex"
        h="30"
        w="30"
        m="2"
        style="boxShadow: --el-box-shadow-dark;"
      >
      </div>
      <!-- 第一行 -->
      <el-row :gutter="20">
        <div style="width:3.1rem;height:3.5rem;box-shadow: 10px 10px 15px #000101ce">
          <div style="position:absolute;left:0.15rem;font-Size:0.12rem;">行业榜单</div>
          <br/>
          <el-container>
            <el-main>
              <el-scrollbar style="width:2.8rem" height="3rem">
                <el-table :data="ForceFirmsList" >
                  <el-table-column prop="num" label="No." width="50px" style="font-size:0.08rem" />
                  <el-table-column prop="name" label="企业名称" width="250px" style="font-size:0.08rem" >
                    <template v-slot="scope">
                      <a :href="scope.row.url" target="_blank" style="color:#72d0fb;font-size:0.08rem"  > {{ scope.row.name }} </a>
                    </template>
                  </el-table-column>
                  <el-table-column prop="salary" align="center" label="所有者权益合计(万)" style="font-size:0.08rem" />
                </el-table>
              </el-scrollbar>
            </el-main>
          </el-container>
        </div>
        <div style="width:5.1rem;height:3.5rem;box-shadow: 10px 10px 15px #000101ce">
          <div style="margin-left:45%;font-Size:0.12rem;">产业全景</div>
          <br/>
          <div style="margin-left:10%;font-size:0.1rem;display:inline-block;">产业目前总产值（万）: &nbsp;</div>
          <div style="font-family:math;font-style:italic;font-size:0.3rem;display:inline-block;" v-html="totalOutput"></div>
          &nbsp;&nbsp;&nbsp;
          <div style="margin-left:10%;font-size:0.1rem;display:inline-block;">产业目前企业总数（个）: &nbsp;</div>
          <div style="font-family:math;font-style:italic;font-size:0.3rem;display:inline-block;" v-html="totalNum"></div>
          <div ref="chart5" style="width:100%;height:90%"></div>
        </div>
      </el-row>
      <!-- 第二行 -->
      <el-row :gutter="20">
        <div style="width:3.1rem;height:3rem;box-shadow: 10px 10px 15px #000101ce">
          <el-row>
            <div style="margin:5%;font-Size:0.12rem;">融资趋势</div>
            <div style="margin-top:8%;font-Size:0.08rem;">(单位：万)</div>
          </el-row>
          <div ref="chart1" style="position:absoulute;left:0.08rem;bottom:1rem;width:100%;height:100%"></div>
        </div>
        <div style="width:5.1rem;height:3rem;box-shadow: 10px 10px 15px #000101ce">
          <el-row>
            <div style="margin:3%;font-Size:0.12rem;">市场规模</div>
            <div style="margin-top:5%;font-Size:0.08rem;">(单位：万)</div>
          </el-row>
          <div ref="chart2" style="position:absoulute;left:0.08rem;bottom:1rem;width:100%;height:100%"></div>
        </div>
      </el-row>
      <el-row>
        <div style="width:4rem;height:3.3rem;box-shadow: 10px 10px 15px #000101ce">
          <div style="margin:2%;font-Size:0.12rem;">产业薄弱环节</div>
          <div ref="chart4" style="position:absoulute;left:0.08rem;top:-0.35rem;width:100%;height:100%"></div>
        </div>
        <div style="width:4rem;height:3.3rem;box-shadow: 10px 10px 15px #000101ce">
          <div style="margin:2%;font-Size:0.12rem;">竞争格局</div>
          <div ref="chart3" style="position:absoulute;left:0.08rem;top:-0.4rem;width:100%;height:100%"></div>
        </div>
      </el-row>
    </div>
  </el-scrollbar>
  </html>
</template>

<script>
import Chart from '@/components/ChartForth'
import Chart2 from '@/components/ChartForthII'
import * as echarts from 'echarts'
import { ref } from 'vue'
import { CountTo } from 'vue-count-to'
export default {
  components: {
    CountTo
  },
  mounted(){
    this.queryForceFirms()
    this.queryProfit()
    this.queryScale()
    this.queryCompete()
    this.queryWeak()
    this.getTotalIndustryData()
  },
  data() {
    return {
      ForceFirmsList: [],
      ProfitList: [],
      ScaleListValues: [],
      ScaleListNames: [],
      CompeteList: [],
      totalOutput: 0,   //产业总产值
      totalNum: 0,      //产业企业总数
      totalMap: new Map(),  //产业关键词数据
      totalPer: [],     //各行业占比
      protocol: 'bolt', 
      host: 'localhost',
      port: 7687,
      username: 'neo4j',
      password: '1781829541Wyx',
      config1: {
        number: [100],
        content: '{nt}个'
      }
    }
  },
  methods: {
    //行业榜单
    queryForceFirms() {
      this.connect();   //连接neo4j
      this.ForceFirmsList = [];
      let nodes = new Set()
      const session = this.$neo4j.getSession();
      let cypher = `match p=(n:\`产业\`{name:"印刷和记录媒介复制业"})-[*1..3]->() return p`; 
      session.run(cypher).then(res => {
        let records = res.records;
        for (let i = 0; i < records.length; i ++ ) {
          let des = records[i]._fields[0].end.labels[0]
          if(des == '单位'){
            nodes.add({
              url: "/#/SingleFirm/${" + records[i]._fields[0].end.properties.name + "}",
              name: records[i]._fields[0].end.properties.name,
              salary: records[i]._fields[0].end.properties.ownerRights,
            });
          }
        }
        let idx = 1
        nodes.forEach(e => {
          let cur = e
          cur.num = idx ++  
          this.ForceFirmsList.push(cur)
        });
        this.ForceFirmsList.sort(function(a, b){
          return a.salary > b.salary
        })
      }).then(() => {
        session.close()
      });
    },
    //在线连接数据库
    connect() {
      return this.$neo4j.connect(this.protocol, this.host, this.port, this.username, this.password);
    },
    driver() {
      // Get a driver instance
      return this.$neo4j.getDriver()
    },
    //融资趋势
    initChart1(){
      var myChart = echarts.init(this.$refs.chart1);
      var option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          textStyle: {
            color: '#fff',
          },
          left: 'left',
          bottom: "60%",
        },
        series: [
          {
            type: 'pie',
            radius: '60%',
            data: this.ProfitList,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              color: '#fff',
              fontStyle: 'italic',
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    //获取融资数据
    queryProfit(){
      this.connect();   //连接neo4j
      this.ProfitList = [];
      const session = this.$neo4j.getSession();
      let cypher = `match p=(n:\`产业\`{name:"印刷和记录媒介复制业"})-[*1..3]->() return p`; 
      session.run(cypher).then(res => {
        let records = res.records;
        let tot = 0
        for (let i = 0; i < records.length; i ++ ) {
          let des = records[i]._fields[0].end.labels[0]
          if(des == '单位'){
            if(!records[i]._fields[0].end.properties.totalProfit){
              continue
            }else{
              tot += Number(records[i]._fields[0].end.properties.totalProfit);
            }
          }
        }
        for(let i = 2019; i < 2023; i ++ ){
          this.ProfitList.push({value: 0, name: i.toString()})
        }
        this.ProfitList.push({value: tot, name: "2023"})
        this.initChart1()
      }).then(() => {
        session.close()
      });
    },
    //市场规模
    initChart2(){
      var myChart = echarts.init(this.$refs.chart2);
      var option = {
        color: ['#b085fd'],
        tooltip: {},
        xAxis: {
          type: 'category',
          data: this.ScaleListNames,
          nameTextStyle: {
            width: 2,
          },
          axisLine: {
            lineStyle: {
              color: '#fff',
            },
          },
          axisTick: {
            alignWithLabel: true,
          },
          axisLabel: {
            interval: 0,
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              color: '#fff',
            },
          },
        },
        series: [
          {
            data: this.ScaleListValues,
            type: 'bar'
          }
        ],
        emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        },
      };
      myChart.setOption(option);
    },
    //获取市场规模数据
    queryScale(){
      this.connect();   //连接neo4j
      this.ScaleListValues = [Math.ceil(Math.random() * 500000) + 10000,
      Math.ceil(Math.random() * 500000) + 100000, Math.ceil(Math.random() * 500000) + 10000, Math.ceil(Math.random() * 500000) + 100000];
      this.ScaleListNames = ["2019", "2020", "2021", "2022"];
      const session = this.$neo4j.getSession();
      let cypher = `match p=(n:\`产业\`{name:"印刷和记录媒介复制业"})-[*1..3]->() return p`; 
      session.run(cypher).then(res => {
        let records = res.records;
        let tot = 0
        for (let i = 0; i < records.length; i ++ ) {
          let des = records[i]._fields[0].end.labels[0]
          if(des == '单位'){
            if(!records[i]._fields[0].end.properties.Asset){
              continue
            }else{
              tot += Number(records[i]._fields[0].end.properties.Asset);
            }
          }
        }
        this.ScaleListValues.push(tot)
        this.ScaleListNames.push("2023")
        this.initChart2()
      }).then(() => {
        session.close()
      });
    },
    //竞争格局
    initChart3(){
      var myChart = echarts.init(this.$refs.chart3);
      var option = {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          textStyle: {
            color: '#fff',
          },
          top: "85%",
        },
        series: [
          {
            type: 'pie',
            radius: '60%',
            data: this.CompeteList,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            label: {
              color: '#fff',
              fontStyle: 'italic',
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    //获取竞争格局数据
    queryCompete(){
      this.connect();   //连接neo4j
      this.CompeteList = [];
      let tmp = [];
      const session = this.$neo4j.getSession();
      let cypher = `match p=(n:\`产业\`{name:"印刷和记录媒介复制业"})-[*1..3]->() return p`; 
      let st = new Set()
      session.run(cypher).then(res => {
        let records = res.records;
        for (let i = 0; i < records.length; i ++ ) {
          let des = records[i]._fields[0].end.labels[0];
          if(des == '单位'){
            let na = records[i]._fields[0].end.properties.name
            if(st.has(na)) continue
            st.add(na)
            if(!records[i]._fields[0].end.properties.Asset){
              tmp.push({value: 0, name: na});
            }else{
              tmp.push({value: Number(records[i]._fields[0].end.properties.Asset), name: na});
            }
          }
        }
        tmp.sort(function(a, b){
          return b.value - a.value
        })
        if(tmp.length > 5){
          let tot = 0;
          for(let i = 5; i < tmp.length; i ++ ){
            tot += tmp[i].value;
          }
          var ntmp = tmp.slice(0, 5);
          tmp = ntmp
          tmp.push({value: tot, name: "其他"});
        }
        this.CompeteList = tmp
        this.initChart3()
      }).then(() => {
        session.close()
      });
    },
    //产业薄弱环节
    initChart4(){
      var myChart = echarts.init(this.$refs.chart4);
      var option = {
        color: ['#ccf536'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          minInterval: 1,
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: this.WeakNameList,
        },
        series: [
          {
            type: 'bar',
            data: this.WeakCountList,
          },
        ]
      };
      myChart.setOption(option);
    },
    //获取产业薄弱项数据
    queryWeak(){
      this.connect();   //连接neo4j
      this.WeakNameList = [];
      this.WeakCountList = [];
      let tmp = [];
      const session = this.$neo4j.getSession();
      let cypher = `match p=(n:\`产业\`{name:"印刷和记录媒介复制业"})-[*1..3]->() return p`; 
      let st = new Set()
      let mp = new Map()
      session.run(cypher).then(res => {
        let records = res.records;
        for (let i = 0; i < records.length; i ++ ) {
          let des = records[i]._fields[0].end.labels[0];
          if(des == '单位'){
            let na = records[i]._fields[0].end.properties.name
            if(st.has(na)) continue
            st.add(na)
            let pro1 = records[i]._fields[0].end.properties.product1
            let pro2 = records[i]._fields[0].end.properties.product2
            let pro3 = records[i]._fields[0].end.properties.product3
            if(!mp.has(pro1)){
              mp.set(pro1, 1)
            }else{
              mp.set(pro1, mp.get(pro1) + 1)
            }
            if(!mp.has(pro2)){
              mp.set(pro2, 1)
            }else{
              mp.set(pro2, mp.get(pro2) + 1)
            }
            if(!mp.has(pro3)){
              mp.set(pro3, 1)
            }else{
              mp.set(pro3, mp.get(pro3) + 1)
            }
          }
        }
        mp.forEach((value, key, map) => {
          tmp.push({name: key, value: value})
        })
        tmp.sort(function(a, b){
          return a.value - b.value
        })
        if(tmp.length > 10){
          var ntmp = tmp.slice(0, 10);
          tmp = ntmp
        }
        for(let i = 0; i < tmp.length; i ++ ){
          this.WeakCountList.push(tmp[i].value)
          this.WeakNameList.push(tmp[i].name)
        }
        this.initChart4()
      }).then(() => {
        session.close()
      });
    },
    //产业全景
    initChart5(){
      var myChart = echarts.init(this.$refs.chart5);
      var option = {
        tooltip: {
          show: true,
        },
        series: [{
          type: 'treemap',
          data: this.totalPer,
          visualMin: 0.8,
          visualMax: 0.8,
          top: 'top',
          roam: false,
          nodeClick: false,
        }]
      };
      myChart.setOption(option);
    },
    //获取产业全景数据
    getTotalIndustryData(){
      this.connect();   //连接neo4j
      this.totalMap = new Map()
      this.totalNum = 0
      this.totalOutput = 0
      let nodes = new Set()
      const session = this.$neo4j.getSession();
      let cypher = `match p=(n:\`产业\`{name:"印刷和记录媒介复制业"})-[*1..3]->(m:\`单位\`) return p`; 
      session.run(cypher).then(res => {
        let records = res.records;
        this.totalNum = records.length
        for (let i = 0; i < records.length; i ++ ) {
          let des = records[i]._fields[0].end.properties.name
          if(nodes.has(des)) continue
          nodes.add(des)
          if(!records[i]._fields[0].end.properties.Asset){
            this.totalOutput += Number(0)
          }else{
            this.totalOutput += Number(records[i]._fields[0].end.properties.Asset)
          }
          let p1 = records[i]._fields[0].end.properties.product1
          let p2 = records[i]._fields[0].end.properties.product2
          let p3 = records[i]._fields[0].end.properties.product3
          if(this.totalMap.has(p1)){
            this.totalMap.set(p1, this.totalMap.get(p1) + Number(1))
          }else{
            this.totalMap.set(p1, 1)
          }
          if(this.totalMap.has(p2)){
            this.totalMap.set(p2, this.totalMap.get(p2) + Number(1))
          }else{
            this.totalMap.set(p2, 1)
          }
          if(this.totalMap.has(p3)){
            this.totalMap.set(p3, this.totalMap.get(p3) + Number(1))
          }else{
            this.totalMap.set(p3, 1)
          }
          /*
          let text = p1 + " " + p2 + " " + p3
          //分词
          let segments = Array.from(new Intl.Segmenter('cn', {granularity: 'word'}).segment(text))
          for(let j = 0; j < segments.length; j ++ ){
            if(!segments[j].isWordLike) continue
            if(this.totalMap.has(segments[j].segment)){
              this.totalMap.set(segments[j].segment, this.totalMap.get(segments[j].segment) + Number(1))
            }else{
              this.totalMap.set(segments[j].segment, 1)
            }
          }*/
        }
        console.log(this.totalMap)
        this.totalMap.forEach((value, key, map) => {
          this.totalPer.push({name: key + "  " + 
          ((100 * Number(value) / (Number(this.totalNum) * 3)).toFixed(2)).toString()
          + "%", value: (Number(value) / (Number(this.totalNum) * 3)).toFixed(4)})
        })
        this.totalPer.sort(function(a, b){
          return b.value - a.value
        })
        let tmp = this.totalPer.slice(0, 10)
        this.totalPer = tmp
        this.initChart5()
      }).then(() => {
        session.close()
      });
    },
  }
}
</script>

<style>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.radius {
  height: 40px;
  width: 70%;
  border: 1px solid var(--el-border-color);
  border-radius: 0;
  margin-top: 20px;
}
.el-row{
  margin-bottom: 100px;
}
</style>
