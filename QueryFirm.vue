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
  <div style="width:42%;height:0.68rem;position:absolute;top:4.1rem;left:13%">
    <dv-border-box-8 dur=12 style="width:100%;height:100%">
      <html class="dark">
        <el-form :inline='true' :model="formInline" :rules="rules" ref="neo4jform" label-width="1.2rem">
          <!-- 输入框1 -->
          <el-form-item prop="startNode">
            <div style="position:absolute;width:2.7rem;left:0.1rem;top:0.12rem">
              <el-form-item 
                label="查询具体产业所有企业单位:"
                label-width=1.2rem
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
          <div style="position:absolute;width:1rem;left:3rem;top:0.13rem">
            <el-button @click="onSubmit" style="height:0.2rem">查询</el-button>
          </div>
          </el-form-item>
        </el-form>
      </html>
    </dv-border-box-8>
  </div>

  <div style="width:42%;height:0.68rem;position:absolute;top:4.1rem;left:55%">
    <dv-border-box-8 :reverse="true" dur=12 style="width:100%;height:100%">
      <html class="dark">
        <el-form :inline='true' :model="formInline2" :rules="rules2" ref="neo4jform" label-width="1.2rem">
          <!-- 输入框2 -->
          <el-form-item prop="theNode">
            <div style="position:absolute;width:2.7rem;left:0.1rem;top:0.12rem">
              <el-form-item 
                label="查询具体企业单位:"
                label-width=1.2rem
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
          <div style="position:absolute;width:1rem;left:3rem;top:0.13rem">
            <el-button @click="onSubmit2" style="height:0.2rem">查询</el-button>
          </div>
          </el-form-item>
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
      formInline2: {
        theNode: '',
      },
      rules: {
        startNode: [{required: false, trigger: 'blur'}],  
      },
      rules2: {
        theNode: [{required: false, trigger: 'blur'}],  
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
          text: '当前企业知识图谱',
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
          data: ['单位'],
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
                name: '行业',
                itemStyle: {
                  color: '#5ca1eb'
                }
            }, 
            {
                name: '单位',
                itemStyle: {
                  color: '#e6ba33'
                }
            }],
          }
        ]
      });
      myChart.on("click", function(params) {
        console.log(params);
        window.location.href = params.data.url;
      });
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
      let cypher = `MATCH p=()-->() RETURN p LIMIT 300`;  //指定初始查询语句
      session.run(cypher).then(res => {
        let records = res.records;
        let nodes = new Set();
        this.nodesRelation = [];
        for (let i = 0; i < records.length; i ++ ) {
          let srctype = records[i]._fields[0].segments[0].start.labels[0];
          if (srctype == '单位'){
            nodes.add(records[i]._fields[0].segments[0].start.properties.name + "+"
                      + srctype + "+" + 
                      "主营产品一: " + records[i]._fields[0].segments[0].start.properties.product1 + " " + 
                      "主营产品一用于行业: " + records[i]._fields[0].segments[0].start.properties.product1_use + " " +
                      "主营产品二: " + records[i]._fields[0].segments[0].start.properties.product2 + " " + 
                      "主营产品二用于行业: " + records[i]._fields[0].segments[0].start.properties.product2_use + " " +
                      "主营产品三: " + records[i]._fields[0].segments[0].start.properties.product3 + " " + 
                      "主营产品三用于行业: " + records[i]._fields[0].segments[0].start.properties.product3_use
                      );
          } 
          let destype = records[i]._fields[0].segments[0].end.labels[0];
          if (destype == '单位'){
            nodes.add(records[i]._fields[0].segments[0].end.properties.name + "+"
                      + destype + "+" + 
                      "主营产品一: " + records[i]._fields[0].segments[0].end.properties.product1 + " " + 
                      "主营产品一用于行业: " + records[i]._fields[0].segments[0].end.properties.product1_use + " " +
                      "主营产品二: " + records[i]._fields[0].segments[0].end.properties.product2 + " " + 
                      "主营产品二用于行业: " + records[i]._fields[0].segments[0].end.properties.product2_use + " " +
                      "主营产品三: " + records[i]._fields[0].segments[0].end.properties.product3 + " " + 
                      "主营产品三用于行业: " + records[i]._fields[0].segments[0].end.properties.product3_use
                      );
          } 
        }
        
        this.echartsData = [];
        nodes.forEach((e) => {
          let words = e.split('+')
          let color = () => {            
            if (words[1] == '单位') {
              return '#e6ba33'
            }
            return '#abcc30';
          }
          let nodesize = () => {
            if (words[1] == '单位') {
              return 60
            }
            return 0;
          }
          let fontSize = () => {
            if (words[1] == '单位') {
              return 18
            }
            return 8;
          }
          let getname = () => {
            return words[0]
          }
          let getsymbol = () => {
            if (words[1] == '单位') {
              return 'circle'
            }
            return 'roundRect';
          }
          let getcat = () => {
            if (words[1] == '单位') {
              return 3
            }
            return 3;
          }
          this.echartsData.push({
            name: getname(),
            url: "/#/SingleFirm" + "/${" + words[0] + "}",
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
            tooltip: {
                trigger: 'item',
                borderWidth: 0,
                extraCssText:'background:#00000099;color:#e6e3f3;'
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
        for (let i = 0; i < records.length; i ++ ) {
          let des = records[i]._fields[0].end.labels[0]
          let flag = 0 //此查询语句需要flag关系的类别
          if (des == '部类') flag = 0
          else if (des == '行业') flag = 1
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
                      "主营产品三用于行业: " + records[i]._fields[0].segments[flag].start.properties.product3_use + " " + 
                      "企业简介: " + records[i]._fields[0].segments[flag].start.properties.introduction
                      );
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
                      "主营产品三用于行业: " + records[i]._fields[0].segments[flag].end.properties.product3_use + " " + 
                      "企业简介: " + records[i]._fields[0].segments[flag].end.properties.introduction
                      );
          } 
        }
        
        this.echartsData = [];
        nodes.forEach((e) => {
          let words = e.split('+')
          let color = () => {            
            if (words[1] == '单位') {
              return '#e6ba33'
            }
            return '#abcc30';
          }
          let nodesize = () => {
            if (words[1] == '单位') {
              return 60
            }
            return 0;
          }
          let fontSize = () => {
            if (words[1] == '单位') {
              return 18
            }
            return 0;
          }
          let getname = () => {
            return words[0] + " " + words[2]
          }
          let getsymbol = () => {
            if (words[1] == '单位') {
              return 'circle'
            }
            return 'roundRect';
          }
          let getcat = () => {
            if (words[1] == '单位') {
              return 3
            }
            return 3;
          }
          this.echartsData.push({
            name: getname(),
            url: "/#/SingleFirm" + "/${" + words[0] + "}",
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
                let text = e.name.split(' ')
                let na = text[0]
                if (na.length > 7){
                  return na.substr(0, 7) + '...'
                }else{
                  return na
                }
              }
            },
            emphasis: { //鼠标悬浮高亮图形的样式
              label: {
                show: true,
                scale: true,
                formatter: (e) => {
                  let text = e.name.split(' ')
                  let na = text[0]
                  return na
                }
              }
            },
            tooltip: {
                trigger: 'item',
                formatter: (e) => {
                  let text = e.name.split(' ')
                  let na = `<div style="font-weight:bold;font-size:25px">${text[0]}</div> <br/>`
                  na += `<div style="font-size:16px">${text[1] + " " + " " + text[2]}          ${text[3] + " " + " " + text[4]}</div>`
                  na += `<div style="font-size:16px">${text[5] + " " + " " + text[6]}          ${text[7] + " " + " " + text[8]}</div>`
                  na += `<div style="font-size:16px">${text[9] + " " + " " + text[10]}          ${text[11] + " " + " " + text[12]}</div>`
                  na += `<div style="font-size:16px">${text[13] + " " + " " + text[14]}</div>`
                  return na
                },
                borderWidth: 0,
                extraCssText:'max-width:600px; white-space:pre-wrap;background:#00000099;color:#e6e3f3;'
            },
          });
        })
        this.initEcharts();
      }).then(() => {
        session.close()
      });
    },
    query3(cypher) {
      this.connect();   //连接neo4j
      const session = this.$neo4j.getSession();
     // let cypher = ``;  //指定初始查询语句
      session.run(cypher).then(res => {
        let records = res.records;
        let nodes = new Set();
        for (let i = 0; i < records.length; i ++ ) {
          let type = records[i]._fields[0].labels[0];
          if (type == '单位'){
            nodes.add(records[i]._fields[0].properties.name + "+"
                      + type + "+" + 
                      "主营产品一: " + records[i]._fields[0].properties.product1 + " " + 
                      "主营产品一用于行业: " + records[i]._fields[0].properties.product1_use + " " +
                      "主营产品二: " + records[i]._fields[0].properties.product2 + " " + 
                      "主营产品二用于行业: " + records[i]._fields[0].properties.product2_use + " " +
                      "主营产品三: " + records[i]._fields[0].properties.product3 + " " + 
                      "主营产品三用于行业: " + records[i]._fields[0].properties.product3_use + " " + 
                      "企业简介: " + records[i]._fields[0].properties.introduction
                      );
          } 
        }
        this.echartsData = [];
        nodes.forEach((e) => {
          let words = e.split('+')
          let color = () => {            
            if (words[1] == '单位') {
              return '#e6ba33'
            }
            return '#abcc30';
          }
          let nodesize = () => {
            if (words[1] == '单位') {
              return 60
            }
            return 0;
          }
          let fontSize = () => {
            if (words[1] == '单位') {
              return 18
            }
            return 0;
          }
          let getname = () => {
            return words[0] + " " + words[2]
          }
          let getsymbol = () => {
            if (words[1] == '单位') {
              return 'circle'
            }
            return 'roundRect';
          }
          let getcat = () => {
            if (words[1] == '单位') {
              return 3
            }
            return 3;
          }
          this.echartsData.push({
            name: getname(),
            url: "/#/SingleFirm" + "/${" + words[0] + "}",
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
                let text = e.name.split(' ')
                let na = text[0]
                if (na.length > 7){
                  return na.substr(0, 7) + '...'
                }else{
                  return na
                }
              }
            },
            emphasis: { //鼠标悬浮高亮图形的样式
              label: {
                show: true,
                scale: true,
                formatter: (e) => {
                  let text = e.name.split(' ')
                  let na = text[0]
                  return na
                }
              }
            },
            tooltip: {
                trigger: 'item',
                formatter: (e) => {
                  let text = e.name.split(' ')
                  let na = `<div style="font-weight:bold;font-size:25px">${text[0]}</div> <br/>`
                  na += `<div style="font-size:16px">${text[1] + " " + " " + text[2]}          ${text[3] + " " + " " + text[4]}</div>`
                  na += `<div style="font-size:16px">${text[5] + " " + " " + text[6]}          ${text[7] + " " + " " + text[8]}</div>`
                  na += `<div style="font-size:16px">${text[9] + " " + " " + text[10]}          ${text[11] + " " + " " + text[12]}</div>`
                  na += `<div style="font-size:16px">${text[13] + " " + " " + text[14]}</div>`
                  return na
                },
                borderWidth: 0,
                extraCssText:'max-width:600px; white-space:pre-wrap;background:#00000099;color:#e6e3f3;'
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
          let cypher = `match (n:\`单位\`) where n.name contains "${this.formInline2.theNode}" return n`;
          session.run(cypher).then(() => {
            this.formInline = {
              theNode: '',
            };
            this.query3(cypher);
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