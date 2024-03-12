<template>
  <html class="dark" style="position:absolute;left:1.5rem;width:85%;height:86%">
    <el-scrollbar height="4rem">
      <!-- 删除关系 -->
      <div style="width:95%;height:2rem;">
        <dv-border-box-8 dur=0 style="width:100%;height:100%">
          <div style="position:absolute;top:0.1rem;left:0.1rem;font-Size:0.13rem;">删除关系</div>
          <el-form v-if="flag1==0" :inline='true' :model="formInline1" :rules="rules1" ref="form1" label-width="1.2rem">
            <el-form-item prop="TypeSrc">
              <div style="position:absolute;width:1.1rem;left:0.4rem;top:0.45rem">
                <el-form-item 
                  label="选择起始节点类型:"
                  label-width=1.1rem
                  size='medium'>
                  <el-autocomplete
                  :popper-append-to-body="false"
                  popper-class="is-dark"
                  v-model="formInline1.TypeSrc"
                  :fetch-suggestions="querySearch"
                  clearable
                  class="inline-input w-50"
                  style="width:0.8rem;"
                  @select="handleSelect"
                  ></el-autocomplete>
                </el-form-item>
              </div>
            </el-form-item>
            <el-form-item prop="NodeSrc">
              <div style="position:absolute;width:2rem;left:2.5rem;top:0.45rem">
                <el-form-item 
                  label="起始节点名称:"
                  label-width=1.1rem
                  size='large'>
                  <el-input
                  v-model="formInline1.NodeSrc"
                  clearable
                  class="inline-input w-50"
                  style="width:3.5rem;"
                  placeholder="Please Input"
                  ></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <br/>
            <el-form-item prop="TypeDes">
              <div style="position:absolute;width:1.1rem;left:0.4rem;top:0.7rem">
                <el-form-item 
                  label="选择终止节点类型:"
                  label-width=1.1rem
                  size='medium'>
                  <el-autocomplete
                  :popper-append-to-body="false"
                  popper-class="is-dark"
                  v-model="formInline1.TypeDes"
                  :fetch-suggestions="querySearch"
                  clearable
                  class="inline-input w-50"
                  style="width:0.8rem;"
                  @select="handleSelect"
                  ></el-autocomplete>
                </el-form-item>
              </div>
            </el-form-item>
            <el-form-item prop="NodeDes">
              <div style="position:absolute;width:2rem;left:2.5rem;top:0.7rem">
                <el-form-item 
                  label="终止节点名称:"
                  label-width=1.1rem
                  size='large'>
                  <el-input
                  v-model="formInline1.NodeDes"
                  clearable
                  class="inline-input w-50"
                  style="width:3.5rem;"
                  placeholder="Please Input"
                  ></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <br/>
            <el-form-item prop="TypeRel">
              <div style="position:absolute;width:1.1rem;left:0.4rem;top:0.95rem">
                <el-form-item 
                  label="选择关系类型:"
                  label-width=1.1rem
                  size='medium'>
                  <el-autocomplete
                  :popper-append-to-body="false"
                  popper-class="is-dark"
                  v-model="formInline1.TypeRel"
                  :fetch-suggestions="querySearch2"
                  clearable
                  class="inline-input w-50"
                  style="width:0.8rem;"
                  @select="handleSelect"
                  ></el-autocomplete>
                </el-form-item>
              </div>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item>
            <div style="position:absolute;width:1rem;left:1.3rem;top:1.3rem">
              <el-button @click="onSubmit1" style="height:0.2rem" type="primary">删除</el-button>
            </div>
            <div style="position:absolute;width:1rem;left:1.85rem;top:1.3rem">
              <el-button @click="resetForm('form1')" style="height:0.2rem">重置</el-button>
            </div>
            </el-form-item>
          </el-form>
          <el-result 
          v-if="flag1==1"
          icon="success"
          title="Successful Delete"
          sub-title="click to back"
          >
            <template #extra>
              <el-button type="primary" @click="backto">Back</el-button>
            </template>
          </el-result>
          <el-result 
          v-if="flag1==2"
          icon="error"
          title="Relation Not Exsits"
          sub-title="click to back"
          >
            <template #extra>
              <el-button type="primary" @click="backto">Back</el-button>
            </template>
          </el-result>
        </dv-border-box-8>
      </div>
      <!-- 添加关系 -->
      <div style="width:95%;height:2rem;">
        <dv-border-box-8 dur=0 style="width:100%;height:100%">
          <div style="position:absolute;top:0.1rem;left:0.1rem;font-Size:0.13rem;">添加关系</div>
          <el-form v-if="flag2==0" :inline='true' :model="formInline2" :rules="rules2" ref="form2" label-width="120px">
            <el-form-item prop="TypeSrc">
              <div style="position:absolute;width:1.1rem;left:0.4rem;top:0.45rem">
                <el-form-item 
                  label="选择起始节点类型:"
                  label-width=1.1rem
                  size='medium'>
                  <el-autocomplete
                  :popper-append-to-body="false"
                  popper-class="is-dark"
                  v-model="formInline2.TypeSrc"
                  :fetch-suggestions="querySearch"
                  clearable
                  class="inline-input w-50"
                  style="width:0.8rem;"
                  @select="handleSelect"
                  ></el-autocomplete>
                </el-form-item>
              </div>
            </el-form-item>
            <el-form-item prop="NodeSrc">
              <div style="position:absolute;width:2rem;left:2.5rem;top:0.45rem">
                <el-form-item 
                  label="起始节点名称:"
                  label-width=1.1rem
                  size='large'>
                  <el-input
                  v-model="formInline2.NodeSrc"
                  clearable
                  class="inline-input w-50"
                  style="width:3.5rem;"
                  placeholder="Please Input"
                  ></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <br/>
            <el-form-item prop="TypeDes">
              <div style="position:absolute;width:1.1rem;left:0.4rem;top:0.7rem">
                <el-form-item 
                  label="选择终止节点类型:"
                  label-width=1.1rem
                  size='medium'>
                  <el-autocomplete
                  :popper-append-to-body="false"
                  popper-class="is-dark"
                  v-model="formInline2.TypeDes"
                  :fetch-suggestions="querySearch"
                  clearable
                  class="inline-input w-50"
                  style="width:0.8rem;"
                  @select="handleSelect"
                  ></el-autocomplete>
                </el-form-item>
              </div>
            </el-form-item>
            <el-form-item prop="NodeDes">
              <div style="position:absolute;width:2rem;left:2.5rem;top:0.7rem">
                <el-form-item 
                  label="终止节点名称:"
                  label-width=1.1rem
                  size='large'>
                  <el-input
                  v-model="formInline2.NodeDes"
                  clearable
                  class="inline-input w-50"
                  style="width:3.5rem;"
                  placeholder="Please Input"
                  ></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <br/>
            <el-form-item prop="TypeRel">
              <div style="position:absolute;width:1.1rem;left:0.4rem;top:0.95rem">
                <el-form-item 
                  label="选择关系类型:"
                  label-width=1.1rem
                  size='medium'>
                  <el-autocomplete
                  :popper-append-to-body="false"
                  popper-class="is-dark"
                  v-model="formInline2.TypeRel"
                  :fetch-suggestions="querySearch2"
                  clearable
                  class="inline-input w-50"
                  style="width:0.8rem;"
                  @select="handleSelect"
                  ></el-autocomplete>
                </el-form-item>
              </div>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item>
            <div style="position:absolute;width:1rem;left:1.3rem;top:1.3rem">
              <el-button @click="onSubmit2" style="height:0.2rem" type="primary">添加</el-button>
            </div>
            <div style="position:absolute;width:1rem;left:1.85rem;top:1.3rem">
              <el-button @click="resetForm('form2')" style="height:0.2rem">重置</el-button>
            </div>
            </el-form-item>
          </el-form>
          <el-result 
          v-if="flag2==1"
          icon="success"
          title="Successful Add"
          sub-title="click to back"
          >
            <template #extra>
              <el-button type="primary" @click="backto">Back</el-button>
            </template>
          </el-result>
        </dv-border-box-8>
      </div>
    </el-scrollbar>
  </html>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: "Main.vue",
  mounted() {
    this.types = this.loadAll();
    this.reltypes = this.loadAllRel();
  },
  data() {
    return {
      flag1: 0,
      flag2: 0,
      types: [],
      reltypes: [],
      formInline1: {
        TypeSrc: '',
        NodeSrc: '',
        TypeDes: '',
        NodeDes: '',
        TypeRel: '',
      },
      rules1: {
        TypeSrc: [{required: true, trigger: 'blur'}],  
        NodeSrc: [{required: true, trigger: 'blur'}],  
        TypeDes: [{required: true, trigger: 'blur'}],  
        NodeDes: [{required: true, trigger: 'blur'}],  
        TypeRel: [{required: true, trigger: 'blur'}],  
      },
      formInline2: {
        TypeSrc: '',
        NodeSrc: '',
        TypeDes: '',
        NodeDes: '',
        TypeRel: '',
      },
      rules2: {
        TypeSrc: [{required: true, trigger: 'blur'}],  
        NodeSrc: [{required: true, trigger: 'blur'}],  
        TypeDes: [{required: true, trigger: 'blur'}],  
        NodeDes: [{required: true, trigger: 'blur'}],  
        TypeRel: [{required: true, trigger: 'blur'}],  
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
    backto(){
      this.flag1 = 0
      this.flag2 = 0
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    querySearch(queryString, cb) {
      var types = this.types;
      var results = queryString ? types.filter(this.createFilter(queryString)) : types;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (type) => {
        return (type.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    loadAll() {
      return [
        { "value": "主营产品"},
        { "value": "产业"},
        { "value": "部类"},
        { "value": "行业"},
        { "value": "单位"},
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    querySearch2(queryString, cb) {
      var types = this.reltypes;
      var results = queryString ? types.filter(this.createFilter(queryString)) : types;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    loadAllRel() {
      return [
        { "value": "主营产品单位"},
        { "value": "包含部类"},
        { "value": "包含具体行业"},
        { "value": "包含具体单位"},
      ];
    },
    onSubmit1() {
      this.$refs.form1.validate((valid) => {
        if (valid) {
          this.connect();
          const session = this.$neo4j.getSession();
          let cypher = `match (n:\`${this.formInline1.TypeSrc}\`{name: '${this.formInline1.NodeSrc}'})
                        match (m:\`${this.formInline1.TypeDes}\`{name: '${this.formInline1.NodeDes}'})
                        create (n)-[r:\`${this.formInline1.TypeRel}\`]->(m)
                        return n, r, m`;
          session.run(cypher).then(res => {
            this.formInline1 = {
              TypeSrc: '',
              NodeSrc: '',
              TypeDes: '',
              NodeDes: '',
              TypeRel: '',
            };
            let records = res.records
            let siz = records.length
            if(siz != 0) this.flag1 = 1
            else this.flag1 = 2;
            session.close()
          }).then(() => {
            return
          });
        }
      })
    },
    onSubmit2() {
      this.$refs.form2.validate((valid) => {
        if (valid) {
          this.connect();
          const session = this.$neo4j.getSession();
          let cypher = `match (n:\`${this.formInline2.TypeSrc}\`{name: '${this.formInline2.NodeSrc}'})-
                        [r:\`${this.formInline2.TypeRel}\`]-
                        (m:\`${this.formInline2.TypeDes}\`{name: '${this.formInline2.NodeDes}'}) 
                        delete r`;
          session.run(cypher).then(() => {
            this.formInline2 = {
              TypeSrc: '',
              NodeSrc: '',
              TypeDes: '',
              NodeDes: '',
              TypeRel: '',
            };
            this.flag2 = 1
            session.close()
          }).then(() => {
            return
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