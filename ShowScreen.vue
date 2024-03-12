<template>
  <!-- 知识图谱可视化 -->
  <div style="width:62%;height:4.2rem;position:absolute;top:0.58rem;left:1.3rem">
    <dv-border-box-10 style="width:100%;height:100%">
      <div class="neo4jMain">
        <div class="echarts" ref="echarts" style="width:100%;height:100%">
        </div>
      </div>
    </dv-border-box-10>
  </div>

  <div style="width:22%;position:absolute;top:0.58rem;left:7.5rem">
    <dv-border-box-9 style="width:100%;height:1.2rem">
      <div class='container1'>
        <dv-decoration-7 style="width:100%;height:10%;left:50%;display:flex;font-family:幼圆;color:#f0e1fb">扬州市各行政区内单位数量</dv-decoration-7>
      </div>
      <TopRight />
    </dv-border-box-9>
  </div>
  
  <div style="width:22%;position:absolute;top:1.76rem;left:7.5rem">
    <dv-border-box-13 style="width:100%;height:1.4rem">
      <BottomRight />
    </dv-border-box-13>
  </div>

  <div style="width:22%;position:absolute;top:3.15rem;left:7.5rem">
    <dv-border-box-6 style="width:100%;height:1.65rem">
       <div class='container1'>
        <dv-decoration-7 style="width:80%;height:10%;left:50%;display:flex;font-family:幼圆;color:#bcd8f5">各产业单位数量排行榜</dv-decoration-7>
       </div>
       <MidRight />
    </dv-border-box-6>
  </div>

</template>

<script>
import TopLeft from './TopLeft'
import MidLeft from './MidLeft'
import TopRight from './TopRight'
import MidRight from './MidRight'
import BottomRight from './BottomRight'
import * as echarts from 'echarts'
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
export default {
  name: "Main.vue",
  components: {
    TopLeft,
    MidLeft,
    TopRight,
    MidRight,
    BottomRight,
  },
  mounted() {
    this.query();
  },
  data() {
    return {
      select1: '',
      input2: '',
      select2: '',
      activeIndex: '/1',
      formInline: {
        startNode: '',
      },
      rules: {
        startNode: [{required: true, trigger: 'blur'}],
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
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
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
          text: '扬州市产业分析 知识图谱',
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
      });
      myChart.on("click", function(params) {
        console.log(params);
        window.location.href = params.data.url;
      });
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
      let cypher = `match (n:\`产业\`) return n`;  //指定初始查询语句
      session.run(cypher).then(res => {
        let records = res.records;
        let nodes = new Set();
        this.nodesRelation = [];
        for (let i = 0; i < records.length; i ++ ) {
          let na = records[i]._fields[0].properties.name;
          nodes.add(na);
        }
        this.echartsData = [];
        let getIndId = {
          "电力、热力生产和供应业" : "4",
          "电气机械和器材制造业" : "5",
          "纺织业" : "2",
          "纺织服装、服饰业" : "3",
          "非金属矿物制品业" : "6",
          "废弃资源综合利用业" : "7",
          "黑色金属冶炼和压延加工业" : "8",
          "化学纤维制造业" : "9",
          "化学原料和化学制品制造业" : "10",
          "计算机、通信和其他电子设备制造业" : "11",
          "家具制造业" : "12",
          "金属制品、机械和设备修理业" : "13",
          "金属制品业" : "14",
          "酒、饮料和精制茶制造业" : "15",
          "木材加工和木、竹、藤、棕、草制品业" : "16",
          "农副产品加工业" : "1",
          "皮革、毛皮、羽毛及其制品和制鞋业" : "17",
          "其他制造业" : "18",
          "汽车制造业" : "19",
          "燃气生产和供应业" : "20",
          "石油、煤炭及其他燃料加工业" : "21",
          "食品制造业" : "22",
          "铁路、船舶、航空航天和其他运输设备制造业" : "23",
          "通用设备制造业" : "24",
          "文教、工美、体育和娱乐用品制造业" : "25",
          "橡胶和塑料制品业" : "26",
          "医药制造业" : "27",
          "印刷和记录媒介复制业" : "28",
          "有色金属冶炼和压延加工业" : "29",
          "造纸和纸制品业" : "30",
          "专用设备制造业" : "31",
        }
        nodes.forEach((e) => {
          let color = () => {            
              return '#62aa5c'
          }
          let nodesize = () => {
              return 70
          }
          let fontSize = () => {
              return 18
          }
          let getname = () => {
            return e
          }
          let getsymbol = () => {
              return 'circle'
          }
          let getcat = () => {
              return 0
          }
          this.echartsData.push({
            name: getname(),
            url: "/#/charts" + getIndId[e],
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
          let flag = 0 //此查询语句需要flag关系的类别
          if (des == '部类') flag = 0
          else if (des == '子类') flag = 1
          else if (des == '单位') flag = 2
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
              return 25
            }
            return 25;
          }
          let fontSize = () => {
            if (words[1] == '产业') {
              return 18
            } else if (words[1] == '部类') {
              return 15
            } else if (words[1] == '子类') {
              return 12
            } else if (words[1] == '单位') {
              return 10
            }
            return 8;
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
            return 3;
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
          let cypher = `match p=(n:\`产业\`{name:"${this.formInline.startNode}"})-[*1..]-() return p`;
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
</style>