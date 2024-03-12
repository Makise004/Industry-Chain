<template>
  <!-- 知识图谱可视化 -->
  <div style="width:84%;height:3.53rem;position:absolute;top:0.58rem;left:1.3rem">
    <dv-border-box-10 style="width:100%;height:100%">
      <div class="neo4jMain">
        <div class="echarts" ref="echarts" style="width:100%;height:100%">
        </div>
      </div>
    </dv-border-box-10>
  </div>
  <!-- 查询搜索框 -->
  <div style="width:28%;height:0.68rem;position:absolute;top:4.1rem;left:13%">
    <dv-border-box-8 dur=0 style="width:100%;height:100%">
      <html class="dark">
        <el-form :inline='true' :model="formInline" :rules="rules" ref="neo4jform" label-width="0.5rem">
          <!-- 输入框1 -->
          <el-form-item prop="startNode">
            <div style="position:absolute;width:2rem;left:0.1rem;top:0.12rem">
              <el-form-item 
                label="查询产业:"
                label-width=0.5rem
                size='medium'>
                <el-autocomplete
                :popper-append-to-body="false"
                popper-class="is-dark"
                v-model="formInline.startNode"
                :fetch-suggestions="querySearch"
                clearable
                class="inline-input w-50"
                placeholder="Please Input"
                @select="handleSelect"
                ></el-autocomplete>
              </el-form-item>
            </div>
          </el-form-item>
          <!-- 查询按钮 -->
          <el-form-item>
          <div style="position:absolute;width:1rem;left:2rem;top:0.12rem">
            <el-button @click="onSubmit" style="height:0.2rem">查询</el-button>
          </div>
          </el-form-item>
        </el-form>
      </html>
    </dv-border-box-8>
  </div>
  <!-- 搜索框2 -->
  <div style="width:27%;height:0.68rem;position:absolute;top:4.1rem;left:40.8%">
    <dv-border-box-8 :reverse="true" dur=0 style="width:100%;height:100%">
      <html class="dark">
        <el-form :inline='true' :model="formInline2" :rules="rules2" ref="neo4jform" label-width="0.5rem">
          <!-- 输入框2 -->
          <el-form-item prop="theNode">
            <div style="position:absolute;width:2rem;left:0.1rem;top:0.12rem">
              <el-form-item 
                label="查询主营产品:"
                label-width=0.7rem
                size='medium'>
                <el-input
                v-model="formInline2.theNode"
                clearable
                class="inline-input w-50"
                placeholder="Please Input"
                @select="handleSelect"
                ></el-input>
              </el-form-item>
            </div>
          </el-form-item>
          <!-- 查询按钮 -->
          <el-form-item>
          <div style="position:absolute;width:1rem;left:2rem;top:0.12rem">
            <el-button @click="onSubmit2" style="height:0.2rem">查询</el-button>
          </div>
          </el-form-item>
        </el-form>
      </html>
    </dv-border-box-8>
  </div>
  <!-- 搜索框3 -->
  <div style="width:29.5%;height:0.68rem;position:absolute;top:4.1rem;left:67.6%">
    <dv-border-box-8 dur=0 style="width:100%;height:100%">
      <html class="dark">
        <el-form :inline='true' :model="formInline3" :rules="rules3" ref="neo4jform" label-width="0.5rem">
          <div>
            <!-- 输入框 -->
            <el-form-item prop="Node1">
              <div style="position:absolute;width:2rem;left:0.1rem;top:0.12rem">
                <el-form-item 
                  label="产业:"
                  label-width=0.5rem
                  size='medium'>
                  <el-autocomplete
                  :popper-append-to-body="false"
                  popper-class="is-dark"
                  v-model="formInline3.Node1"
                  :fetch-suggestions="querySearch"
                  clearable
                  class="inline-input w-50"
                  placeholder="Please Input"
                  @select="handleSelect"
                  ></el-autocomplete>
                </el-form-item>
              </div>
            </el-form-item>
            <!-- 查询按钮 -->
            <el-form-item>
              <div style="position:absolute;width:1rem;left:2rem;top:0.12rem">
                <el-button @click="onSubmit3" style="height:0.2rem">查询</el-button>
              </div>
            </el-form-item>
          </div>
          <div>
            <!-- 输入框2 -->
            <el-form-item prop="Node2">
              <div style="position:absolute;width:2rem;left:0.1rem;top:0.25rem">
                <el-form-item 
                  label="主营产品:"
                  label-width=0.5rem
                  size='medium'>
                  <el-input
                  v-model="formInline3.Node2"
                  clearable
                  class="inline-input w-50"
                  placeholder="Please Input"
                  @select="handleSelect"
                  ></el-input>
                </el-form-item>
              </div>
            </el-form-item>
          </div>
        </el-form>
      </html>
    </dv-border-box-8>
  </div>
</template>

<script>
import * as echarts from 'echarts'
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
export default {
  name: "Main.vue",
  mounted() {
    this.query();
    this.firms = this.loadAll();
  },
  data() {
    return {
      firms: [],
      formInline: {
        startNode: '',
      },
      rules: {
        startNode: [{required: false, trigger: 'blur'}],  
      },
      formInline2: {
        theNode: '',
      },
      rules2: {
        theNode: [{required: false, trigger: 'blur'}],  
      },
      formInline3: {
        Node1: '',
        Node2: '',
      },
      rule3: {
        Node1: [{required: false, trigger: 'blur'}],  
        Node2: [{required: false, trigger: 'blur'}], 
      },
      protocol: 'bolt',
      host: 'localhost',
      port: 7687,
      username: 'neo4j',
      password: '1781829541Wyx',
      echartsData: [],
      nodesRelation: []
    }
  },
  methods: {
      querySearch(queryString, cb) {
        var firms = this.firms;
        var results = queryString ? firms.filter(this.createFilter(queryString)) : firms;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (firm) => {
          return (firm.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      loadAll() {
        return [
          { "value": "专用设备制造业" },
          { "value": "其他制造业"},
          { "value": "农副产品加工业"},
          { "value": "化学原料和化学制品制造业"},
          { "value": "化学纤维制造业"},
          { "value": "医药制造业"},
          { "value": "印刷和记录媒介复制业"},
          { "value": "家具制造业"},
          { "value": "废弃资源综合利用业"},
          { "value": "文教、工美、体育和娱乐用品制造业"},
          { "value": "有色金属冶炼和压延加工业"},
          { "value": "木材加工和木、竹、藤、棕、草制品业"},
          { "value": "橡胶和塑料制品业"},
          { "value": "汽车制造业"},
          { "value": "燃气生产和供应业"},
          { "value": "电力、热力生产和供应业"},
          { "value": "电气机械和器材制造业"},
          { "value": "皮革、毛皮、羽毛及其制品和制鞋业"},
          { "value": "石油、煤炭及其他燃料加工业"},
          { "value": "纺织业"},
          { "value": "纺织服装、服饰业"},
          { "value": "计算机、通信和其他电子设备制造业"},
          { "value": "通用设备制造业"},
          { "value": "造纸和纸制品业"},
          { "value": "酒、饮料和精制茶制造业"},
          { "value": "金属制品、机械和设备修理业"},
          { "value": "金属制品业"},
          { "value": "铁路、船舶、航空航天和其他运输设备制造业"},
          { "value": "非金属矿物制品业"},
          { "value": "食品制造业"},
          { "value": "黑色金属冶炼和压延加工业"},
        ];
      },
      handleSelect(item) {
        console.log(item);
      },

    onDelete() {
      this.connect();
      const session = this.$neo4j.getSession();
      let cypher = `MATCH p=()-->() delete p`;
      session.run(cypher);
      cypher = `MATCH n delete n`;
      session.run(cypher).then(() => {
        session.close()
      });
      this.query();
    },
    initEcharts() {
      let myChart = echarts.init(this.$refs.echarts)
      myChart.setOption({
        title: {
          text: '产业链知识图谱',
          textStyle: {
            color: '#fff',
            fontStyle: 'oblique',
            fontSize: 15,
            textBorderColor: '#e5c50f'
          }
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        legend: {
          data: ['产业', '部类', '子类', '单位', '主营产品'],
          textStyle: {
            color: '#e0dfdf',
            fontStyle: 'italic'
          }
        },
        series: [
          {
            type: 'graph',
            layout: 'force',
            force: {
              edgeLength: [60, 40, 30, 15],
              repulsion: [100, 100, 100, 80],
              gravity: 0.1,
              layoutAnimation: true,
            },
            symbolSize: (value, params) => {
              console.log(value);
              console.log(params);
              return value;
            },
            roam: true,
            draggable: true,
            selectedMode: true,
            focusNodeAdjacency: true,
            label: {
              show: true,
              fontSize: 10,
              color: '#fff',
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 7,
              color: '#d2d1d2'
            },
            data: this.echartsData,
            links: this.nodesRelation,
            lineStyle: {
              color: '#c0c0bc',
              opacity: 0.9,
              width: 1,
              curveness: 0
            },
            categories: [{
                name: '产业',  
                itemStyle: {
                  color: '#62aa5c'
                }
            }, 
            {
                name: '部类',   
                itemStyle: {
                  color: '#c95a63'
                }          
            }, 
            {
                name: '子类',
                itemStyle: {
                  color: '#5ca1eb'
                }
            }, 
            {
                name: '单位',
                itemStyle: {
                  color: '#e6ba33'
                }
            },
            {
                name: '主营产品',
                itemStyle: {
                  color: '#abcc30'
                }
            },],
          }
        ]
      })
      this.bindChartClickEvent(myChart)
    },
    bindChartClickEvent(chart) {
    //要重新绑定this
      var that = this
      chart.on('click', function (params) {
          var category = params.data.category,
          nodeType = params.data.nodeType
          that.toggleShowNodes(chart, params)
      })
    },
    /**
     * 展开或关闭节点
     * @param chart
     * @param params
     */
    toggleShowNodes(chart, params) {
      // console.log("toggle")
      var open = !!params.data.open,
        options = chart.getOption(),
        seriesIndex = params.seriesIndex,
        srcLinkName = params.name, //节点名字
        serieLinks = options.series[seriesIndex].links, //option 的links
        serieData = options.series[seriesIndex].data, //option 的data
        serieDataMap = new Map(),
        serieLinkArr = [] //

      if (open) {
        this.findLinks(serieLinkArr, srcLinkName, serieLinks, true)
        if (serieLinkArr.length) {
          serieData.forEach((sd) => serieDataMap.set(sd.name, sd))
          for (var i = 0; i < serieLinkArr.length; i++) {
            if (serieDataMap.has(serieLinkArr[i])) {
              var currentData = serieDataMap.get(serieLinkArr[i])
              currentData.category = -Math.abs(currentData.category)
              if (currentData.nodeType === 1) {
                currentData.open = false
              }
            }
          }
          serieDataMap.get(srcLinkName).open = false
          chart.setOption(options)
        }
      } else {
        this.findLinks(serieLinkArr, srcLinkName, serieLinks, false)
        if (serieLinkArr.length) {
          serieData.forEach((sd) => serieDataMap.set(sd.name, sd))
          serieDataMap.has(serieDataMap[1])
          var s = serieDataMap.has(serieLinkArr[1])
          for (var j = 0; j < serieLinkArr.length; j++) {
            if (serieDataMap.has(serieLinkArr[j])) {
              var currentData = serieDataMap.get(serieLinkArr[j])
              currentData.category = Math.abs(currentData.category)
            }
          }
          serieDataMap.get(srcLinkName).open = true
          chart.setOption(options)
        }
      }
    },
    findLinks(links, srcLinkName, serieLinks, deep) {
      var targetLinks = []
      serieLinks
        .filter((link) => link.source === srcLinkName)
        .forEach((link) => {
          targetLinks.push(link.target)
          links.push(link.target)
        })
      if (deep) {
        for (var i = 0; i < targetLinks.length; i++) {
          this.findLinks(links, targetLinks[i], serieLinks, deep)
        }
      }
    },
    query() {
      this.connect();   //连接neo4j
      const session = this.$neo4j.getSession();
      let cypher = `match p=(n:\`产业\`)-[*1..3]-() return p limit 100 union match p=(n:\`主营产品\`)-[*1..1]-() return p limit 100`;  //指定初始查询语句
      session.run(cypher).then(res => {
        let records = res.records;
        let nodes = new Set();
        this.nodesRelation = [];
        for (let i = 0; i < records.length; i ++ ) {
          let des = records[i]._fields[0].end.labels[0]
          let src = records[i]._fields[0].start.labels[0]
          let flag = 0 //此查询语句需要flag关系的类别
          if (des == '部类') flag = 0
          else if (des == '子类') flag = 1
          else if (des == '单位' && src != "主营产品") flag = 2
          let srctype = records[i]._fields[0].segments[flag].start.labels[0];
          if (srctype == '单位'){
            nodes.add(records[i]._fields[0].segments[flag].start.properties.name + "+"
                      + srctype + "+" + 
                      "主营产品一: " + records[i]._fields[0].segments[flag].start.properties.product1 + " " + 
                      "主营产品一用于行业: " + records[i]._fields[0].segments[flag].start.properties.product1_use + " " +
                      "主营产品二: " + records[i]._fields[0].segments[flag].start.properties.product2 + " " + 
                      "主营产品二用于行业: " + records[i]._fields[0].segments[flag].start.properties.product2_use + " " +
                      "主营产品三: " + records[i]._fields[0].segments[flag].start.properties.product3 + " " + 
                      "主营产品三用于行业: " + records[i]._fields[0].segments[flag].start.properties.product3_use
                      );
          } else {
            nodes.add(records[i]._fields[0].segments[flag].start.properties.name + "+" + srctype);
          }
          let destype = records[i]._fields[0].segments[flag].end.labels[0];
          if (destype == '单位'){
            nodes.add(records[i]._fields[0].segments[flag].end.properties.name + "+"
                      + destype + "+" + 
                      "主营产品一: " + records[i]._fields[0].segments[flag].end.properties.product1 + " " + 
                      "主营产品一用于行业: " + records[i]._fields[0].segments[flag].end.properties.product1_use + " " +
                      "主营产品二: " + records[i]._fields[0].segments[flag].end.properties.product2 + " " + 
                      "主营产品二用于行业: " + records[i]._fields[0].segments[flag].end.properties.product2_use + " " +
                      "主营产品三: " + records[i]._fields[0].segments[flag].end.properties.product3 + " " + 
                      "主营产品三用于行业: " + records[i]._fields[0].segments[flag].end.properties.product3_use
                      );
          } else {
            nodes.add(records[i]._fields[0].segments[flag].end.properties.name + "+" + destype);
          }
          this.nodesRelation.push({
            source: records[i]._fields[0].segments[flag].start.properties.name,
            target: records[i]._fields[0].segments[flag].end.properties.name,
            lineStyle: {
              curveness: 0
            },
            label: {
              show: true,
              formatter: function() {
                return records[i]._fields[0].segments[flag].relationship.type
              }
            }
          });
        }
        let curveness = [0, 0.4, -0.4, 0.3, -0.3, 0.2, -0.2, 0.1, -0.1];
        for (let j = 0; j < this.nodesRelation.length; j++) {
          let repeatNumber = 0;
          for (let s = j+1; s < this.nodesRelation.length; s++) {
            let r1 = this.nodesRelation[j];
            let r2 = this.nodesRelation[s];
            if (r1.source === r2.source &&
                r1.target === r2.target) {
              repeatNumber =  repeatNumber + 1;
            }
            else if (r1.target === r2.source &&
                r1.source === r2.target) {
              repeatNumber =  repeatNumber + 1;
            }
          }
          this.nodesRelation[j].repeatNumber = repeatNumber;
        }
        for (let j = 0; j < this.nodesRelation.length; j++) {
          console.log(this.nodesRelation[j].repeatNumber);
          this.nodesRelation[j].lineStyle.curveness = curveness[this.nodesRelation[j].repeatNumber];
        }
        this.echartsData = [];
        nodes.forEach((e) => {
          let words = e.split('+')
          let color = () => {            
            if (words[1] == '产业') {
              return '#62aa5c'
            } else if (words[1] == '部类') {
              return '#c95a63'
            } else if (words[1] == '子类') {
              return '#5ca1eb'
            } else if (words[1] == '单位') {
              return '#e6ba33'
            }
            return '#abcc30';
          }
          let nodesize = () => {
            if (words[1] == '产业') {
              return 70
            } else if (words[1] == '部类') {
              return 55
            } else if (words[1] == '子类') {
              return 40
            } else if (words[1] == '单位') {
              return 30
            }
            return 55;
          }
          let fontSize = () => {
            if (words[1] == '产业') {
              return 18
            } else if (words[1] == '部类') {
              return 15
            } else if (words[1] == '子类') {
              return 12
            } else if (words[1] == '单位') {
              return 12
            }
            return 15;
          }
          let getname = () => {
            return words[0]
          }
          let getsymbol = () => {
            if (words[1] == '产业') {
              return 'circle'
            } else if (words[1] == '部类') {
              return 'roundRect'
            } else if (words[1] == '子类') {
              return 'roundRect'
            } else if (words[1] == '单位') {
              return 'circle'
            }
            return 'roundRect';
          }
          let getcat = () => {
            if (words[1] == '产业') {
              return 0
            } else if (words[1] == '部类') {
              return 1
            } else if (words[1] == '子类') {
              return 2
            } else if (words[1] == '单位') {
              return 3
            }
            return 4;
          }
          this.echartsData.push({
            name: getname(),
            category: getcat(),
            symbolSize: nodesize(),
            symbol: getsymbol(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            itemStyle: {
              color: color()
            },
            label: {
              show: true,
              fontSize: fontSize(),
              formatter: (e) => {
                let na = e.name
                if (na.length > 7){
                  return na.substr(0, 7) + '...'
                }else{
                  return na
                }
              }
            },
            emphasis: { //  鼠标悬浮高亮图形的样式
              label: {
                show: true,
                scale: true,
                formatter: (e) => {
                  return e.name
                }
              }
            },
          });
        })
        this.initEcharts();
      }).then(() => {
        session.close()
      });
    },
    query2(cypher) {
      this.connect();   //连接neo4j
      const session = this.$neo4j.getSession();
     // let cypher = ``;  //指定初始查询语句
      session.run(cypher).then(res => {
        let records = res.records;
        let nodes = new Set();
        this.nodesRelation = [];
        for (let i = 0; i < records.length; i ++ ) {
          let des = records[i]._fields[0].end.labels[0]
          let src = records[i]._fields[0].start.labels[0]
          let flag = 0 //此查询语句需要flag关系的类别
          if (des == '部类') flag = 0
          else if (des == '子类') flag = 1
          else if (des == '单位' && src != "主营产品") flag = 2
          let srctype = records[i]._fields[0].segments[flag].start.labels[0];
          if (srctype == '单位'){
            nodes.add(records[i]._fields[0].segments[flag].start.properties.name + "+"
                      + srctype + "+" + 
                      "主营产品一: " + records[i]._fields[0].segments[flag].start.properties.product1 + " " + 
                      "主营产品一用于行业: " + records[i]._fields[0].segments[flag].start.properties.product1_use + " " +
                      "主营产品二: " + records[i]._fields[0].segments[flag].start.properties.product2 + " " + 
                      "主营产品二用于行业: " + records[i]._fields[0].segments[flag].start.properties.product2_use + " " +
                      "主营产品三: " + records[i]._fields[0].segments[flag].start.properties.product3 + " " + 
                      "主营产品三用于行业: " + records[i]._fields[0].segments[flag].start.properties.product3_use
                      );
          } else {
            nodes.add(records[i]._fields[0].segments[flag].start.properties.name + "+" + srctype);
          }
          let destype = records[i]._fields[0].segments[flag].end.labels[0];
          if (destype == '单位'){
            nodes.add(records[i]._fields[0].segments[flag].end.properties.name + "+"
                      + destype + "+" + 
                      "主营产品一: " + records[i]._fields[0].segments[flag].end.properties.product1 + " " + 
                      "主营产品一用于行业: " + records[i]._fields[0].segments[flag].end.properties.product1_use + " " +
                      "主营产品二: " + records[i]._fields[0].segments[flag].end.properties.product2 + " " + 
                      "主营产品二用于行业: " + records[i]._fields[0].segments[flag].end.properties.product2_use + " " +
                      "主营产品三: " + records[i]._fields[0].segments[flag].end.properties.product3 + " " + 
                      "主营产品三用于行业: " + records[i]._fields[0].segments[flag].end.properties.product3_use
                      );
          } else {
            nodes.add(records[i]._fields[0].segments[flag].end.properties.name + "+" + destype);
          }
          this.nodesRelation.push({
            source: records[i]._fields[0].segments[flag].start.properties.name,
            target: records[i]._fields[0].segments[flag].end.properties.name,
            lineStyle: {
              curveness: 0
            },
            label: {
              show: true,
              formatter: function() {
                return records[i]._fields[0].segments[flag].relationship.type
              }
            }
          });
        }
        let curveness = [0, 0.4, -0.4, 0.3, -0.3, 0.2, -0.2, 0.1, -0.1];
        for (let j = 0; j < this.nodesRelation.length; j++) {
          let repeatNumber = 0;
          for (let s = j+1; s < this.nodesRelation.length; s++) {
            let r1 = this.nodesRelation[j];
            let r2 = this.nodesRelation[s];
            if (r1.source === r2.source &&
                r1.target === r2.target) {
              repeatNumber =  repeatNumber + 1;
            }
            else if (r1.target === r2.source &&
                r1.source === r2.target) {
              repeatNumber =  repeatNumber + 1;
            }
          }
          this.nodesRelation[j].repeatNumber = repeatNumber;
        }
        for (let j = 0; j < this.nodesRelation.length; j++) {
          console.log(this.nodesRelation[j].repeatNumber);
          this.nodesRelation[j].lineStyle.curveness = curveness[this.nodesRelation[j].repeatNumber];
        }
        this.echartsData = [];
        nodes.forEach((e) => {
          let words = e.split('+')
          let color = () => {            
            if (words[1] == '产业') {
              return '#62aa5c'
            } else if (words[1] == '部类') {
              return '#c95a63'
            } else if (words[1] == '子类') {
              return '#5ca1eb'
            } else if (words[1] == '单位') {
              return '#e6ba33'
            }
            return '#abcc30';
          }
          let nodesize = () => {
            if (words[1] == '产业') {
              return 70
            } else if (words[1] == '部类') {
              return 55
            } else if (words[1] == '子类') {
              return 40
            } else if (words[1] == '单位') {
              return 30
            }
            return 55;
          }
          let fontSize = () => {
            if (words[1] == '产业') {
              return 18
            } else if (words[1] == '部类') {
              return 15
            } else if (words[1] == '子类') {
              return 12
            } else if (words[1] == '单位') {
              return 12
            }
            return 15;
          }
          let getname = () => {
            return words[0]
          }
          let getsymbol = () => {
            if (words[1] == '产业') {
              return 'circle'
            } else if (words[1] == '部类') {
              return 'roundRect'
            } else if (words[1] == '子类') {
              return 'roundRect'
            } else if (words[1] == '单位') {
              return 'circle'
            }
            return 'roundRect';
          }
          let getcat = () => {
            if (words[1] == '产业') {
              return 0
            } else if (words[1] == '部类') {
              return 1
            } else if (words[1] == '子类') {
              return 2
            } else if (words[1] == '单位') {
              return 3
            }
            return 4;
          }
          this.echartsData.push({
            name: getname(),
            category: getcat(),
            symbolSize: nodesize(),
            symbol: getsymbol(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            itemStyle: {
              color: color()
            },
            label: {
              show: true,
              fontSize: fontSize(),
              formatter: (e) => {
                let na = e.name
                if (na.length > 7){
                  return na.substr(0, 7) + '...'
                }else{
                  return na
                }
              }
            },
            emphasis: { //  鼠标悬浮高亮图形的样式
              label: {
                show: true,
                scale: true,
                formatter: (e) => {
                  return e.name
                }
              }
            },
          });
        })
        this.initEcharts();
      }).then(() => {
        session.close()
      });
    },
    onSubmit() {
      this.$refs.neo4jform.validate((valid) => {
        if (valid) {
          this.connect();
          const session = this.$neo4j.getSession();
          let cypher = `match p=(n:\`产业\`{name:"${this.formInline.startNode}"})-[*1..3]-() return p`;
          session.run(cypher).then(() => {
            this.formInline = {
              startNode: '',
            };
            this.query2(cypher);
          }).then(() => {
            session.close()
          });
        }
      })
    },
    onSubmit2() {
      this.$refs.neo4jform.validate((valid) => {
        if (valid) {
          this.connect();
          const session = this.$neo4j.getSession();
          let cypher = `match p=(n:\`主营产品\`)-[]-() where n.name =~ ".*${this.formInline2.theNode}.*" return p`;
          if(this.formInline2.theNode == "") {
            session.close()
            return;
          }
          session.run(cypher).then(() => {
            this.formInline2 = {
              theNode: '',
            };
            this.query2(cypher);
          }).then(() => {
            session.close()
          });
        }
      })
    },
    onSubmit3() {
      this.$refs.neo4jform.validate((valid) => {
        if (valid) {
          this.connect();
          const session = this.$neo4j.getSession();
          let cypher = `match p=(n:\`产业\`{name:"${this.formInline3.Node1}"})-[*1..3]-() return p union match p=(m:\`主营产品\`)-[]-() where m.name =~ ".*${this.formInline3.Node2}.*" return p`;
          if(this.formInline3.Node2 == "") {
            session.close()
            return;
          }
          session.run(cypher).then(() => {
            this.formInline3 = {
              Node1: '',
              Node2: '',
            };
            this.query2(cypher);
          }).then(() => {
            session.close()
          });
        }
      })
    },
    //在线连接数据库
    connect() {
      return this.$neo4j.connect(this.protocol, this.host, this.port, this.username, this.password);
    },
    driver() {
      // Get a driver instance
      return this.$neo4j.getDriver()
    },
    testQuery() {
      // Get a session from the driver
      const session = this.$neo4j.getSession()
      // Or you can just call this.$neo4j.run(cypher, params)
      session.run('MATCH (n) RETURN n')
          .then(res => {
            console.log(res)
            // console.log(res.records[0].get('count'))
          })
          .then(() => {
            session.close()
          })
    }
  }
}
</script>

<style scoped lang="less">
.neo4jMain {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  .addContent {
    padding: 15px;
    box-shadow: -10px 0 10px #D3D3D3, /*左边阴影*/ 10px 0 10px #D3D3D3, /*右边阴影*/
      0 -10px 10px #D3D3D3, /*顶部阴影*/ 0 10px 10px #D3D3D3;
  }
  .echarts {
    flex: 1;
    flex-grow: 1;
  }
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
/deep/.el-form-item__error {
    position: absolute;
    top: 55px;
    left: 220px;
    width: 150px;
}
/deep/.is-dark {
  background: #2b2c2c !important;
  border: 1px solid #2b2c2c !important;
}
</style>
