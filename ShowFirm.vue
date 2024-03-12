<template>
  <div style="position:absolute;left:1.3rem;top:0.2rem">
  <html class="dark">
    <div class="back">
      <el-button dark="true" size="large" @click="jump">
        返 回
      </el-button>
    </div>
  </html>
  </div>
  <div style="width:84.5%;height:85%;position:absolute;top:0.58rem;left:1.3rem">
  <dv-border-box-10 style="width:100%;height:100%">
  <html class='dark'>
    <el-scrollbar height="100%">
      <div class="flex justify-between items-center flex-wrap">
        <div
          class="inline-flex"
          h="30"
          w="30"
          m="2"
          style="boxShadow: --el-box-shadow-dark;"
        >
        </div>
        <el-row :gutter="20">
          <div style="margin-top:0.2rem;margin-left:0.3rem;width:60%;height:3rem;box-shadow: 10px 10px 15px #000101ce">
            <div style="font-weight:bold;font-size:0.16rem" v-html="path"></div> <br/>
            <div style="font-size:0.08rem;display:inline-block;">所属一级产业: &nbsp;</div>
            <div style="font-size:0.08rem;display:inline-block;" v-html="fromIndus"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div style="font-size:0.08rem;display:inline-block;">所属二级行业: &nbsp;</div>
            <div style="font-size:0.08rem;display:inline-block;" v-html="fromPart"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div style="font-size:0.08rem;display:inline-block;">所属行业子类: &nbsp;</div>
            <div style="font-size:0.08rem;display:inline-block;" v-html="fromSubPart"></div>
            <br/>

            <div style="font-size:0.08rem;display:inline-block;">主营产品一: &nbsp;</div>
            <div style="font-size:0.08rem;display:inline-block;" v-html="product1"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div style="font-size:0.08rem;display:inline-block;">产品一用于行业: &nbsp;</div>
            <div style="font-size:0.08rem;display:inline-block;" v-html="product1_use"></div>
            <br/>
            
            <div style="font-size:0.08rem;display:inline-block;">主营产品二: &nbsp;</div>
            <div style="font-size:0.08rem;display:inline-block;" v-html="product2"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div style="font-size:0.08rem;display:inline-block;">产品二用于行业: &nbsp;</div>
            <div style="font-size:0.08rem;display:inline-block;" v-html="product2_use"></div>
            <br/>
            
            <div style="font-size:0.08rem;display:inline-block;">主营产品三: &nbsp;</div>
            <div style="font-size:0.08rem;display:inline-block;" v-html="product3"></div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div style="font-size:0.08rem;display:inline-block;">产品三用于行业: &nbsp;</div>
            <div style="font-size:0.08rem;display:inline-block;" v-html="product3_use"></div>
            <br/>

            <div v-if="!(this.flowAsset==='')" style="font-size:0.08rem;display:inline-block;">
              <div style="font-size:0.08rem;display:inline-block;">流动资产合计: &nbsp;</div>
              <div style="font-size:0.08rem;display:inline-block;" v-html="flowAsset"></div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div v-if="!(this.flowAsset==='')" style="font-size:0.08rem;display:inline-block;">
              <div style="font-size:0.08rem;display:inline-block;">资产合计: &nbsp;</div>
              <div style="font-size:0.08rem;display:inline-block;" v-html="Asset"></div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div v-if="!(this.flowAsset==='')" style="font-size:0.08rem;display:inline-block;">
              <div style="font-size:0.08rem;display:inline-block;">流动负债合计: &nbsp;</div>
              <div style="font-size:0.08rem;display:inline-block;" v-html="flowDebt"></div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div v-if="!(this.flowAsset==='')" style="font-size:0.08rem;display:inline-block;">
              <div style="font-size:0.08rem;display:inline-block;">负债合计: &nbsp;</div>
              <div style="font-size:0.08rem;display:inline-block;" v-html="Debt"></div>
            </div>
            <br/>
            <div v-if="!(this.flowAsset==='')" style="font-size:0.08rem;display:inline-block;">
              <div style="font-size:0.08rem;display:inline-block;">制造成本: &nbsp;</div>
              <div style="font-size:0.08rem;display:inline-block;" v-html="manuCost"></div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div v-if="!(this.flowAsset==='')" style="font-size:0.08rem;display:inline-block;">
              <div style="font-size:0.08rem;display:inline-block;">营业成本: &nbsp;</div>
              <div style="font-size:0.08rem;display:inline-block;" v-html="busiCost"></div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div v-if="!(this.flowAsset==='')" style="font-size:0.08rem;display:inline-block;">
              <div style="font-size:0.08rem;display:inline-block;">营业收入: &nbsp;</div>
              <div style="font-size:0.08rem;display:inline-block;" v-html="totalProfit"></div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <div v-if="!(this.flowAsset==='')" style="font-size:0.08rem;display:inline-block;">
              <div style="font-size:0.08rem;display:inline-block;">主营业务收入: &nbsp;</div>
              <div style="font-size:0.08rem;display:inline-block;" v-html="mainProfit"></div>
            </div>
            <br/><br/>
            <div style="font-size:0.08rem;font-weight:bold;display:inline-block;">企业简介: &nbsp;</div>
            <div style="font-size:0.08rem;display:inline-block;" v-html="introduction"></div>

          </div>
          <div style="margin-top:3%;margin-left:5%;width:30%;height:2.5rem;box-shadow: 10px 10px 15px #000101ce">
            <div style="position:absolute;top:0.2rem;font-Size:0.12rem;">企业综合评分</div>
            <TopLeft />
          </div>
        </el-row>

        <el-row :gutter="20">
          <div style="margin-top:3%;margin-left:3%;width:30%;height:2rem;box-shadow: 10px 10px 15px #000101ce">
            <div ref="chart2" style="width:100%;height:100%"></div>
          </div>
          <div style="margin-top:3%;margin-left:3%;width:60%;height:2.5rem;">
            <div ref="chart3" style="width:100%;height:80%"></div>  
          </div>
        </el-row>

        <el-row :gutter="20">
          <el-container>
            <el-header style="margin-left:5%;text-align:left;font-size:0.16rem;height:0.12rem;width:80%;">
              <div class="toolbar">
                <span>企业推荐列表</span>
              </div>
            </el-header>
            <br/><br/>
            <el-row style="margin-left:7%">
              <div style="font-size:0.1rem">选择推荐机制: &nbsp;&nbsp;&nbsp;&nbsp;</div>
              <el-button-group>
                <el-button label="1" @click="change(0)">主营产品相似度</el-button>
                <el-button label="2" @click="change(1)">企业关联度</el-button>
              </el-button-group>
            </el-row>
            <el-main style="margin-left:5%">
              <el-scrollbar style="width:7.55rem" height="3rem">
                <div v-if="flag==0">
                  <el-table :data="tableData">
                    <el-table-column prop="num" label="No." width="100px" />
                    <el-table-column prop="name" label="企业名称" width="300px" >
                      <template v-slot="scope">
                        <a :href="scope.row.url" target="_blank" style="color:#72d0fb;font-size:14px" > {{ scope.row.name }} </a>
                      </template>
                    </el-table-column>
                    <el-table-column prop="pro1" label="主营产品一" width="300px" />
                    <el-table-column prop="pro2" label="主营产品二" width="300px" />
                    <el-table-column prop="pro3" label="主营产品三" />
                  </el-table>
                </div>
                <div v-if="flag==1">
                  <el-table :data="tableData2" >
                    <el-table-column prop="num" label="No." width="100px" />
                    <el-table-column prop="name" label="企业名称" width="300px" >
                      <template v-slot="scope">
                        <a :href="scope.row.url" target="_blank" style="color:#72d0fb;font-size:14px" > {{ scope.row.name }} </a>
                      </template>
                    </el-table-column>
                    <el-table-column prop="asset" label="资产总计(万)" width="300px" />
                    <el-table-column prop="mainpro" label="主营业务收入(万)" width="300px" />
                    <el-table-column prop="owner" label="所有者权益(万)" />
                  </el-table>
                </div>
              </el-scrollbar>
            </el-main>
          </el-container>
        </el-row>
      </div>
    </el-scrollbar>
  </html>
  </dv-border-box-10>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { toRaw } from '@vue/reactivity'
import TopLeft from './ScoreCom'   
import {ArrowLeft} from '@element-plus/icons-vue'
import { ref } from 'vue'
const radio1 = ref(1)
export default {
  components: {
    ArrowLeft,
    TopLeft,
  },
  mounted(){ 
    this.path = this.getName(this.$route.params.id);  //获取路由
    this.queryNode(); //获取节点各属性
    this.cursegments = this.getCurSegments(this.product1, this.product2, this.product3); 
    this.queryRelNodes(); //获取相关同类型企业(推荐机制)
    this.getFromIndustry()
    //this.queryRelNodes2();
  },
  watch:{
      $route(to,from){
        this.path = to.path
      }
  },
  data() {
    return {
      fromIndus: '',
      fromPart: '',
      fromSubPart: '',
      flag: 0,
      path: '',        //当前公司名称
      name: '',
      product1: '',
      product2: '',
      product3: '',
      product1_use: '',
      product2_use: '',
      product3_use: '',
      introduction: '',
      flowAsset: '',
      Asset: '',
      flowDebt: '',
      Debt: '',
      ownerRights: '',
      manuCost: '',
      busiCost: '',
      totalProfit: '',
      mainProfit: '',
      tableData: [],   //推荐列表数据
      tableData2: [],
      trendData: [],   //趋势数据
      relatedNodes: [], //企业相关节点数据
      cursegments: [],
      nodes:  new Set(),
      protocol: 'bolt',
      host: 'localhost',
      port: 7687,
      username: 'neo4j',
      password: '1781829541Wyx',
    }
  },
  methods: {
    change: function (idx) {
      this.flag = idx
    },
    getName (path){
      let str = path.toString();
      let pos = str.indexOf('}')
      return str.substr(2, pos - 2)
    },
    jump () {
      this.$router.push('/qfirm')  //跳转回初始界面
    },
    //企业指标雷达
    initChart2(){
      var myChart = echarts.init(this.$refs.chart2);
      var option = {
        title: {
          text: '企业数据指标',
          textStyle: {
            color: '#fff'
          }
        },
        radar: {
          indicator: [
            { name: 'Asset', max: Number(this.Asset) + 20000 },
            { name: 'flowAsset', max: Number(this.flowAsset) + 20000 },
            { name: 'Debt', max: Number(this.Debt) + 20000 },
            { name: 'flowDebt', max: Number(this.flowDebt) + 20000 },
            { name: 'manufactCost', max: Number(this.manuCost) + 10000 },
            { name: 'businessCost', max: Number(this.busiCost) + 10000 },
            { name: 'totalProfit', max: Number(this.totalProfit) + 20000 },
            { name: 'mainProfit', max: Number(this.mainProfit) + 20000 },
          ]
        },
        series: [
          {
            type: 'radar',
            label: {
              show: true,
              color: '#fff'
            },
            data: [
              {
                value: [Number(this.Asset), Number(this.flowAsset), Number(this.Debt),
                        Number(this.flowDebt), Number(this.manuCost), Number(this.busiCost),
                        Number(this.totalProfit), Number(this.mainProfit)],
              },
            ]
          }
        ],
        color: '#91cc75',
      };
      myChart.setOption(option);
    },
    //企业趋势分析
    initChart3(){
      var myChart = echarts.init(this.$refs.chart3);
      var option = {
        title: {
            text: '企业趋势分析',
            textStyle: {
              color: '#fff',
            },
            left: "top",
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
            }
        },
        legend: {
            data: ['资产总计', '负债合计', '所有者权益合计', '营业收入', '主营业务收入', '制造成本', '营业成本'],
            textStyle:{
                color: '#fff'
            },
            left: "140px",
        },
        toolbox: {
            feature: {
            saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
            type: 'category',
            boundaryGap: false,
            data: ['2018', '2019', '2020', '2021', '2022', '2023'],
            axisLine:{
                lineStyle:{
                    color: "#fff",
                }
            }
            },
        ],
        yAxis: [
            {
            type: 'value',
            axisLine:{
                lineStyle:{
                    color: "#fff",
                }
            }
            }
        ],
        series: [
            {
            name: '资产总计',
            type: 'line',
            data: [Math.ceil(Math.random() * 5000) + 5000, Math.ceil(Math.random() * 5000) + 5000, Math.ceil(Math.random() * 5000) + 5000,
                   Math.ceil(Math.random() * 5000) + 5000, Math.ceil(Math.random() * 5000) + 5000, Number(this.Asset)]
            },
            {
            name: '负债合计',
            type: 'line',
            data: [Math.ceil(Math.random() * 7000) + 3000, Math.ceil(Math.random() * 7000) + 3000, Math.ceil(Math.random() * 7000) + 3000, 
                   Math.ceil(Math.random() * 7000) + 3000, Math.ceil(Math.random() * 7000) + 3000, Number(this.Debt)]
            },
            {
            name: '所有者权益合计',
            type: 'line',
            data: [Math.ceil(Math.random() * 3000), Math.ceil(Math.random() * 3000), Math.ceil(Math.random() * 3000),
                   Math.ceil(Math.random() * 3000), Math.ceil(Math.random() * 3000), Number(this.ownerRights)]
            },
            {
            name: '营业收入',
            type: 'line',
            data: [Math.ceil(Math.random() * 20000) + 10000, Math.ceil(Math.random() * 20000) + 10000, Math.ceil(Math.random() * 20000) + 10000,
                   Math.ceil(Math.random() * 20000) + 10000, Math.ceil(Math.random() * 20000) + 10000, Number(this.totalProfit)]
            },
            {
            name: '主营业务收入',
            type: 'line',
            data: [Math.ceil(Math.random() * 20000) + 10000, Math.ceil(Math.random() * 20000) + 10000, Math.ceil(Math.random() * 20000) + 10000,
                   Math.ceil(Math.random() * 20000) + 10000, Math.ceil(Math.random() * 20000) + 10000, Number(this.mainProfit)]
            },
            {
            name: '制造成本',
            type: 'line',
            data: [Math.ceil(Math.random() * 30000) + 10000, Math.ceil(Math.random() * 30000) + 10000, Math.ceil(Math.random() * 30000) + 10000,
                   Math.ceil(Math.random() * 30000) + 10000, Math.ceil(Math.random() * 30000) + 10000, Number(this.manuCost)]
            },
            {
            name: '营业成本',
            type: 'line',
            data: [Math.ceil(Math.random() * 24000) + 6000, Math.ceil(Math.random() * 24000) + 6000, Math.ceil(Math.random() * 24000) + 6000,
                   Math.ceil(Math.random() * 24000) + 6000, Math.ceil(Math.random() * 24000) + 6000, Number(this.busiCost)]
            },
        ]
        };
      myChart.setOption(option);
    },
    //获取企业属性数据
    queryNode() {
      this.connect();   //连接neo4j
      const session = this.$neo4j.getSession();
      let cypher = `match p=()-[]->(n:\`单位\`) where n.name contains "${this.path}" return p`;  //指定初始查询语句
      session.run(cypher).then(res => {
        let that = this;
        let records = res.records;
        let properties = records[0]._fields[0].end.properties
        let siz = Object.keys(properties).length
        that.name = properties.name
        that.product1 = properties.product1
        that.product2 = properties.product2
        that.product3 = properties.product3
        that.product1_use = properties.product1_use
        that.product2_use = properties.product2_use
        that.product3_use = properties.product3_use
        that.introduction = properties.introduction
        if(siz > 8){
          that.flowAsset = properties.flowAsset
          that.Asset = properties.Asset
          that.flowDebt = properties.ownerRights
          that.Debt = properties.Debt
          that.ownerRights = properties.ownerRights
          that.manuCost = properties.manuCost
          that.busiCost = properties.busiCost
          that.totalProfit = properties.totalProfit
          that.mainProfit = properties.mainProfit
        }
        this.initChart2()
        this.initChart3()
      }).then(() => {
        session.close()
      });
    },
    getCurSegments(p1, p2, p3) {
      let text = p1 + " " + p2 + " " + p3
      let tmp = Array.from(new Intl.Segmenter('cn', {granularity: 'word'}).segment(text))
      return tmp
    },
    //获取企业相关同类型企业(推荐机制1)
    queryRelNodes() {
      this.connect();   //连接neo4j
      this.tableData = [];
      const session = this.$neo4j.getSession();
      let cypher = `match (n:\`单位\`{name:"${this.path}"}), (m:\`单位\`) 
                        where n.product1 = m.product1 or
                        n.product1 = m.product2 or
                        n.product1 = m.product3 or
                        n.product2 = m.product1 or 
                        n.product2 = m.product2 or
                        n.product2 = m.product3 or
                        n.product3 = m.product1 or 
                        n.product3 = m.product2 or
                        n.product3 = m.product3 
                        return m`; 
      session.run(cypher).then(res => {
        let records = res.records;
        let p1 = ""
        let p2 = ""
        let p3 = ""
        for(let i = 0; i < records.length; i ++ ){
          if(records[i]._fields[0].properties.name == this.path){
            p1 = records[i]._fields[0].properties.product1
            p2 = records[i]._fields[0].properties.product2
            p3 = records[i]._fields[0].properties.product3
            continue;
          }
          this.tableData.push({
            num: i + 1,
            url: "/#/SingleFirm/${" + records[i]._fields[0].properties.name + "}",
            name: records[i]._fields[0].properties.name,
            pro1: records[i]._fields[0].properties.product1,
            pro2: records[i]._fields[0].properties.product2,
            pro3: records[i]._fields[0].properties.product3,
            simularity: 0,
          })
        }
        this.cursegments = this.getCurSegments(p1, p2, p3)
        for(let i = 0; i < this.tableData.length; i ++ ){
          let text = this.tableData[i].pro1 + " " + this.tableData[i].pro2 + " " + this.tableData[i].pro3;
          // console.log(Array.from(new Intl.Segmenter('cn', {granularity: 'word'}).segment(text)))
          //所有单词映射
          let segments = Array.from(new Intl.Segmenter('cn', {granularity: 'word'}).segment(text))
          let mp = new Map()
          let idx = 0
          for(let j = 0; j < segments.length; j ++ ){
            if(!segments[j].isWordLike) continue
            if(mp.has(segments[j].segment)) continue
            mp.set(segments[j].segment, idx)
            idx += Number(1)
          }
          for(let j = 0; j < this.cursegments.length; j ++ ){
            if(!this.cursegments[j].isWordLike) continue
            if(mp.has(this.cursegments[j].segment)) continue
            mp.set(this.cursegments[j].segment, idx)
            idx += Number(1)
          }
          //向量化 统计词频
          let a = new Array(idx).fill(0)
          let b = new Array(idx).fill(0)
          for(let j = 0; j < segments.length; j ++ ){
            if(!segments[j].isWordLike) continue
            a[mp.get(segments[j].segment)] += Number(1)
          }
          for(let j = 0; j < this.cursegments.length; j ++ ){
            if(!this.cursegments[j].isWordLike) continue
            b[mp.get(this.cursegments[j].segment)] += Number(1)
          }
          let aplusb = 0
          let aplusa = 0
          let bplusb = 0
          for(let i = 0; i < idx; i ++ ){
            aplusb += Number(a[i]) * Number(b[i])
            aplusa += Number(a[i]) * Number(a[i])
            bplusb += Number(b[i]) * Number(b[i])
          }
          this.tableData[i].simularity = aplusb / (Math.sqrt(aplusa) * Math.sqrt(bplusb))
        }
        //按照余弦相似度进行降序排序
        this.tableData.sort(function(a, b){
          return b.simularity - a.simularity
        })
        //重新赋值编号
        for(let i = 0; i < this.tableData.length; i ++ ){
          this.tableData[i].num = i + 1
        }
        //console.log(this.tableData)
      }).then(() => {
        session.close()
      });
    },
    //获取企业相关同类型企业(推荐机制2)
    queryRelNodes2() {
      this.tableData2 = [];
      this.nodes = new Set()
      this.nodes.add(this.path)
      this.connect();   //连接neo4j
      let session = this.$neo4j.getSession();
      let cypher = `match p=(n:\`子类\`{name: "${this.fromSubPart}"})-[*1..1]->(m:\`单位\`) return p`;
      session.run(cypher).then(res =>{
        let records = res.records
        for(let i = 0; i < records.length; i ++ ){
          let firm = records[i]._fields[0].end.properties.name
          if(this.nodes.has(firm)) continue
          this.nodes.add(firm)
          this.tableData2.push({
            num: i + 1,
            url: "/#/SingleFirm/${" + firm + "}",
            name: firm,
            asset: records[i]._fields[0].end.properties.Asset,
            owner: records[i]._fields[0].end.properties.ownerRights,
            mainpro: records[i]._fields[0].end.properties.mainProfit,
            dist: 1,
          })
        }
      }).then(() => {
        session.close()
      })
      
      this.connect();   //连接neo4j
      let session2 = this.$neo4j.getSession();
      cypher = `match p=(n:\`部类\`{name:"${this.fromPart}"})-[*1..2]->(m:\`单位\`) return p`;
      session2.run(cypher).then(res =>{
        let records = res.records
        for(let i = 0; i < records.length; i ++ ){
          let firm = records[i]._fields[0].end.properties.name
          if(this.nodes.has(firm)) continue
          this.nodes.add(firm)
          this.tableData2.push({
            num: i + 1,
            url: "/#/SingleFirm/${" + firm + "}",
            name: firm,
            asset: records[i]._fields[0].end.properties.Asset,
            owner: records[i]._fields[0].end.properties.ownerRights,
            mainpro: records[i]._fields[0].end.properties.mainProfit,
            dist: 2,
          })
        }
      }).then(() => {
        session2.close()
      })

      this.connect();   //连接neo4j
      let session3 = this.$neo4j.getSession();
      cypher = `match p=(n:\`产业\`{name:"${this.fromIndus}"})-[*1..3]->(m:\`单位\`) return p`;
      session3.run(cypher).then(res =>{
        let records = res.records
        for(let i = 0; i < records.length; i ++ ){
          let firm = records[i]._fields[0].end.properties.name
          if(this.nodes.has(firm)) continue
          this.nodes.add(firm)
          this.tableData2.push({
            num: i + 1,
            url: "/#/SingleFirm/${" + firm + "}",
            name: firm,
            asset: records[i]._fields[0].end.properties.Asset,
            owner: records[i]._fields[0].end.properties.ownerRights,
            mainpro: records[i]._fields[0].end.properties.mainProfit,
            dist: 3,
          })
        }
        this.tableData2.sort(function(a, b){
          return a.dist - b.dist
        })
        for(let i = 0; i < this.tableData2.length; i ++ ){
          this.tableData2[i].num = i + 1
        }
      }).then(() => {
        session3.close()
      })
    },
    getFromIndustry() {
      this.connect();
      const session = this.$neo4j.getSession();
      //查询所属产业
      let cypher = `match p=(n)-[*1..3]->(m:\`单位\`{name:"${this.path}"}) return p`; 
      session.run(cypher).then(res => {
        let records = res.records;
        this.fromIndus = records[2]._fields[0].start.properties.name
        this.fromPart = records[1]._fields[0].start.properties.name
        this.fromSubPart = records[0]._fields[0].start.properties.name
        this.queryRelNodes2()
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
  margin-bottom: 24px;
}
</style>