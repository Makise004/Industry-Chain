<template>
  <html class="dark" style="position:absolute;left:1.5rem;width:85%;height:86%">
    <el-scrollbar height="700px">
      <div style="width:1400px;height:300px;">
        <dv-border-box-8 dur=0 style="width:100%;height:100%">
          <div style="position:absolute;top:30px;left:30px;font-Size:22px;">删除节点</div>
          <el-form v-if="flag1==0" :inline='true' :model="formInline1" :rules="rules1" ref="form1" label-width="120px">
            <el-form-item prop="Type">
              <div style="position:absolute;width:1000px;left:80px;top:80px">
                <el-form-item 
                  label="选择节点类型:"
                  label-width=120px
                  size='medium'>
                  <el-autocomplete
                  :popper-append-to-body="false"
                  popper-class="is-dark"
                  v-model="formInline1.Type"
                  :fetch-suggestions="querySearch"
                  clearable
                  class="inline-input w-50"
                  style="width:200px;"
                  @select="handleSelect"
                  ></el-autocomplete>
                </el-form-item>
              </div>
            </el-form-item>
            <br/>
            <el-form-item prop="Node">
              <div style="position:absolute;width:1000px;left:80px;top:120px">
                <el-form-item 
                  label="删除节点名称:"
                  label-width=120px
                  size='large'>
                  <el-input
                  v-model="formInline1.Node"
                  clearable
                  class="inline-input w-50"
                  style="width:1000px;"
                  placeholder="Please Input"
                  ></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <!-- 按钮 -->
            <el-form-item>
            <div style="position:absolute;width:300px;left:168px;top:200px">
              <el-button @click="onSubmit1" style="height:32px" type="primary">删除</el-button>
            </div>
            <div style="position:absolute;width:300px;left:268px;top:200px">
              <el-button @click="resetForm('form1')" style="height:32px">重置</el-button>
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
          title="Node Not Exsits"
          sub-title="click to back"
          >
            <template #extra>
              <el-button type="primary" @click="backto">Back</el-button>
            </template>
          </el-result>
        </dv-border-box-8>
      </div>
      <div style="width:1400px;height:700px;">
        <dv-border-box-8 dur=0 style="width:100%;height:100%">
          <div style="position:absolute;top:30px;left:30px;font-Size:22px;">添加节点</div>
          <el-form v-if="flag2==0" :inline='true' :model="formInline2" :rules="rules2" ref="form2" label-width="120px">
            <el-form-item prop="Type">
              <div style="position:absolute;width:1000px;left:80px;top:80px">
                <el-form-item 
                  label="选择节点类型:"
                  label-width=120px
                  size='medium'>
                  <el-autocomplete
                  :popper-append-to-body="false"
                  popper-class="is-dark"
                  v-model="formInline2.Type"
                  :fetch-suggestions="querySearch"
                  clearable
                  class="inline-input w-50"
                  style="width:200px;"
                  @select="handleSelect"
                  ></el-autocomplete>
                </el-form-item>
              </div>
            </el-form-item>
            <br/>
            <el-form-item prop="Node">
              <div style="position:absolute;width:1000px;left:80px;top:120px">
                <el-form-item 
                  label="添加节点名称:"
                  label-width=120px
                  size='large'>
                  <el-input
                  v-model="formInline2.Node"
                  clearable
                  class="inline-input w-50"
                  style="width:1000px;"
                  placeholder="Please Input"
                  ></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <br/>
            <div v-if="formInline2.Type==='单位'">
              <el-form-item prop="product1">
                <div style="position:absolute;width:200px;left:80px;top:160px">
                  <el-form-item 
                    label="主营产品一:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.product1"
                    clearable
                    class="inline-input w-50"
                    style="width:220px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="product2">
                <div style="position:absolute;width:200px;left:400px;top:160px">
                  <el-form-item 
                    label="主营产品二:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.product2"
                    clearable
                    class="inline-input w-50"
                    style="width:220px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="product3">
                <div style="position:absolute;width:200px;left:720px;top:160px">
                  <el-form-item 
                    label="主营产品三:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.product3"
                    clearable
                    class="inline-input w-50"
                    style="width:220px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <el-form-item prop="product1use">
                <div style="position:absolute;width:200px;left:80px;top:200px">
                  <el-form-item 
                    label="主营产品一用于行业:"
                    label-width=176px
                    size='large'>
                    <el-input
                    v-model="formInline2.product1use"
                    clearable
                    class="inline-input w-50"
                    style="width:163px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="product2use">
                <div style="position:absolute;width:200px;left:400px;top:200px">
                  <el-form-item 
                    label="主营产品二用于行业:"
                    label-width=176px
                    size='large'>
                    <el-input
                    v-model="formInline2.product2use"
                    clearable
                    class="inline-input w-50"
                    style="width:163px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="product3use">
                <div style="position:absolute;width:200px;left:720px;top:200px">
                  <el-form-item 
                    label="主营产品三用于行业:"
                    label-width=176px
                    size='large'>
                    <el-input
                    v-model="formInline2.product3use"
                    clearable
                    class="inline-input w-50"
                    style="width:163px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <el-form-item prop="intro">
                <div style="position:absolute;width:1000px;left:80px;top:240px">
                  <el-form-item 
                    label="企业简介:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.intro"
                    class="inline-input w-50"
                    :autosize="{ minRows: 3, maxRows: 5 }"
                    style="width:1000px;"
                    type="textarea"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <el-form-item prop="flowAsset">
                <div style="position:absolute;width:200px;left:80px;top:340px">
                  <el-form-item 
                    label="流动资产合计:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.flowAsset"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="Asset">
                <div style="position:absolute;width:200px;left:330px;top:340px">
                  <el-form-item 
                    label="资产总计:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.Asset"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="flowDebt">
                <div style="position:absolute;width:200px;left:580px;top:340px">
                  <el-form-item 
                    label="流动负债合计:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.flowDebt"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="Debt">
                <div style="position:absolute;width:200px;left:830px;top:340px">
                  <el-form-item 
                    label="负债合计:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.Debt"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <el-form-item prop="ownerRights">
                <div style="position:absolute;width:200px;left:80px;top:380px">
                  <el-form-item 
                    label="所有者权益合计:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.ownerRights"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="manuCost">
                <div style="position:absolute;width:200px;left:330px;top:380px">
                  <el-form-item 
                    label="制造成本:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.manuCost"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="busiCost">
                <div style="position:absolute;width:200px;left:580px;top:380px">
                  <el-form-item 
                    label="营业成本:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.busiCostt"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="totalProfit">
                <div style="position:absolute;width:200px;left:830px;top:380px">
                  <el-form-item 
                    label="营业收入:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.totalProfit"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <el-form-item prop="mainProfit">
                <div style="position:absolute;width:200px;left:80px;top:420px">
                  <el-form-item 
                    label="主营业务收入:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline2.mainProfit"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <!-- 按钮 -->
              <el-form-item>
              <div style="position:absolute;width:300px;left:200px;top:480px">
                <el-button @click="onSubmit2" style="height:32px" type="primary">添加</el-button>
              </div>
              <div style="position:absolute;width:300px;left:300px;top:480px">
                <el-button @click="resetForm('form2')" style="height:32px">重置</el-button>
              </div>
              </el-form-item>
            </div>

            <div v-if="!(formInline2.Type==='单位')">
              <!-- 按钮 -->
              <el-form-item>
              <div style="position:absolute;width:300px;left:200px;top:200px">
                <el-button @click="onSubmit2" style="height:32px" type="primary">添加</el-button>
              </div>
              <div style="position:absolute;width:300px;left:300px;top:200px">
                <el-button @click="resetForm('form2')" style="height:32px">重置</el-button>
              </div>
              </el-form-item>
            </div>
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
      <div style="width:1400px;height:700px;">
        <dv-border-box-8 dur=0 style="width:100%;height:100%">
          <div style="position:absolute;top:30px;left:30px;font-Size:22px;">修改节点属性</div>
          <el-form v-if="flag3==0" :inline='true' :model="formInline3" :rules="rules3" ref="form3" label-width="120px">
            <el-form-item prop="Type">
              <div style="position:absolute;width:1000px;left:80px;top:80px">
                <el-form-item 
                  label="选择节点类型:"
                  label-width=120px
                  size='medium'>
                  <el-autocomplete
                  :popper-append-to-body="false"
                  popper-class="is-dark"
                  v-model="formInline3.Type"
                  :fetch-suggestions="querySearch"
                  clearable
                  class="inline-input w-50"
                  style="width:200px;"
                  @select="handleSelect"
                  ></el-autocomplete>
                </el-form-item>
              </div>
            </el-form-item>
            <br/>
            <el-form-item prop="Node">
              <div style="position:absolute;width:1000px;left:80px;top:120px">
                <el-form-item 
                  label="添加节点名称:"
                  label-width=120px
                  size='large'>
                  <el-input
                  v-model="formInline3.Node"
                  clearable
                  class="inline-input w-50"
                  style="width:1000px;"
                  placeholder="Please Input"
                  ></el-input>
                </el-form-item>
              </div>
            </el-form-item>
            <br/>
            <div v-if="formInline3.Type==='单位'">
              <el-form-item prop="product1">
                <div style="position:absolute;width:200px;left:80px;top:160px">
                  <el-form-item 
                    label="主营产品一:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.product1"
                    clearable
                    class="inline-input w-50"
                    style="width:220px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="product2">
                <div style="position:absolute;width:200px;left:400px;top:160px">
                  <el-form-item 
                    label="主营产品二:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.product2"
                    clearable
                    class="inline-input w-50"
                    style="width:220px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="product3">
                <div style="position:absolute;width:200px;left:720px;top:160px">
                  <el-form-item 
                    label="主营产品三:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.product3"
                    clearable
                    class="inline-input w-50"
                    style="width:220px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <el-form-item prop="product1use">
                <div style="position:absolute;width:200px;left:80px;top:200px">
                  <el-form-item 
                    label="主营产品一用于行业:"
                    label-width=176px
                    size='large'>
                    <el-input
                    v-model="formInline3.product1use"
                    clearable
                    class="inline-input w-50"
                    style="width:163px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="product2use">
                <div style="position:absolute;width:200px;left:400px;top:200px">
                  <el-form-item 
                    label="主营产品二用于行业:"
                    label-width=176px
                    size='large'>
                    <el-input
                    v-model="formInline3.product2use"
                    clearable
                    class="inline-input w-50"
                    style="width:163px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="product3use">
                <div style="position:absolute;width:200px;left:720px;top:200px">
                  <el-form-item 
                    label="主营产品三用于行业:"
                    label-width=176px
                    size='large'>
                    <el-input
                    v-model="formInline3.product3use"
                    clearable
                    class="inline-input w-50"
                    style="width:163px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <el-form-item prop="intro">
                <div style="position:absolute;width:1000px;left:80px;top:240px">
                  <el-form-item 
                    label="企业简介:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.intro"
                    class="inline-input w-50"
                    :autosize="{ minRows: 3, maxRows: 5 }"
                    style="width:1000px;"
                    type="textarea"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <el-form-item prop="flowAsset">
                <div style="position:absolute;width:200px;left:80px;top:340px">
                  <el-form-item 
                    label="流动资产合计:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.flowAsset"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="Asset">
                <div style="position:absolute;width:200px;left:330px;top:340px">
                  <el-form-item 
                    label="资产总计:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.Asset"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="flowDebt">
                <div style="position:absolute;width:200px;left:580px;top:340px">
                  <el-form-item 
                    label="流动负债合计:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.flowDebt"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="Debt">
                <div style="position:absolute;width:200px;left:830px;top:340px">
                  <el-form-item 
                    label="负债合计:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.Debt"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <el-form-item prop="ownerRights">
                <div style="position:absolute;width:200px;left:80px;top:380px">
                  <el-form-item 
                    label="所有者权益合计:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.ownerRights"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="manuCost">
                <div style="position:absolute;width:200px;left:330px;top:380px">
                  <el-form-item 
                    label="制造成本:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.manuCost"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="busiCost">
                <div style="position:absolute;width:200px;left:580px;top:380px">
                  <el-form-item 
                    label="营业成本:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.busiCostt"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <el-form-item prop="totalProfit">
                <div style="position:absolute;width:200px;left:830px;top:380px">
                  <el-form-item 
                    label="营业收入:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.totalProfit"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <el-form-item prop="mainProfit">
                <div style="position:absolute;width:200px;left:80px;top:420px">
                  <el-form-item 
                    label="主营业务收入:"
                    label-width=120px
                    size='large'>
                    <el-input
                    v-model="formInline3.mainProfit"
                    clearable
                    class="inline-input w-50"
                    style="width:150px;"
                    placeholder="Please Input"
                    ></el-input>
                  </el-form-item>
                </div>
              </el-form-item>
              <br/>
              <!-- 按钮 -->
              <el-form-item>
              <div style="position:absolute;width:300px;left:200px;top:480px">
                <el-button @click="onSubmit3" style="height:32px" type="primary">添加</el-button>
              </div>
              <div style="position:absolute;width:300px;left:300px;top:480px">
                <el-button @click="resetForm('form2')" style="height:32px">重置</el-button>
              </div>
              </el-form-item>
            </div>

            <div v-if="!(formInline3.Type==='单位')">
              <!-- 按钮 -->
              <el-form-item>
              <div style="position:absolute;width:300px;left:200px;top:200px">
                <el-button @click="onSubmit3" style="height:32px" type="primary">添加</el-button>
              </div>
              <div style="position:absolute;width:300px;left:300px;top:200px">
                <el-button @click="resetForm('form2')" style="height:32px">重置</el-button>
              </div>
              </el-form-item>
            </div>
          </el-form>

          <el-result 
          v-if="flag3==1"
          icon="success"
          title="Successful Edit"
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
  },
  data() {
    return {
      flag1: 0,
      flag2: 0,
      flag3: 0,
      types: [],
      formInline1: {
        Type: '',
        Node: '',
      },
      rules1: {
        Type: [{required: true, trigger: 'blur'}],  
        Node: [{required: true, trigger: 'blur'}],  
      },
      formInline2: {
        Type: '',
        Node: '',
        product1: '',
        product2: '',
        product3: '',
        product1use: '',
        product2use: '',
        product3use: '',
        flowAsset: '', //流动资产合计
        Asset: '',     //资产总计
        flowDebt: '',  //流动负债合计
        Debt: '',      //负债合计
        ownerRights: '',  //所有者权益合计
        manuCost: '',     //制造成本
        busiCost: '',     //营业成本
        totalProfit: '',  //营业收入
        mainProfit: '',   //主营业务收入
      },
      rules2: {
        Type: [{required: true, trigger: 'blur'}],  
        Node: [{required: true, trigger: 'blur'}],  
        product1: [{required: false, trigger: 'blur'}],  
        product2: [{required: false, trigger: 'blur'}],  
        product3: [{required: false, trigger: 'blur'}],  
        product1use: [{required: false, trigger: 'blur'}],  
        product2use: [{required: false, trigger: 'blur'}],  
        product3use: [{required: false, trigger: 'blur'}],  
        flowAsset: [{required: false, trigger: 'blur'}], //流动资产合计
        Asset: [{required: false, trigger: 'blur'}],     //资产总计
        flowDebt: [{required: false, trigger: 'blur'}],  //流动负债合计
        Debt: [{required: false, trigger: 'blur'}],      //负债合计
        ownerRights: [{required: false, trigger: 'blur'}],  //所有者权益合计
        manuCost: [{required: false, trigger: 'blur'}],     //制造成本
        busiCost: [{required: false, trigger: 'blur'}],     //营业成本
        totalProfit: [{required: false, trigger: 'blur'}],  //营业收入
        mainProfit: [{required: false, trigger: 'blur'}],   //主营业务收入
      },
      formInline3: {
        Type: '',
        Node: '',
        product1: '',
        product2: '',
        product3: '',
        product1use: '',
        product2use: '',
        product3use: '',
        flowAsset: '', //流动资产合计
        Asset: '',     //资产总计
        flowDebt: '',  //流动负债合计
        Debt: '',      //负债合计
        ownerRights: '',  //所有者权益合计
        manuCost: '',     //制造成本
        busiCost: '',     //营业成本
        totalProfit: '',  //营业收入
        mainProfit: '',   //主营业务收入
      },
      rules3: {
        Type: [{required: true, trigger: 'blur'}],  
        Node: [{required: true, trigger: 'blur'}],  
        product1: [{required: false, trigger: 'blur'}],  
        product2: [{required: false, trigger: 'blur'}],  
        product3: [{required: false, trigger: 'blur'}],  
        product1use: [{required: false, trigger: 'blur'}],  
        product2use: [{required: false, trigger: 'blur'}],  
        product3use: [{required: false, trigger: 'blur'}],  
        flowAsset: [{required: false, trigger: 'blur'}], //流动资产合计
        Asset: [{required: false, trigger: 'blur'}],     //资产总计
        flowDebt: [{required: false, trigger: 'blur'}],  //流动负债合计
        Debt: [{required: false, trigger: 'blur'}],      //负债合计
        ownerRights: [{required: false, trigger: 'blur'}],  //所有者权益合计
        manuCost: [{required: false, trigger: 'blur'}],     //制造成本
        busiCost: [{required: false, trigger: 'blur'}],     //营业成本
        totalProfit: [{required: false, trigger: 'blur'}],  //营业收入
        mainProfit: [{required: false, trigger: 'blur'}],   //主营业务收入
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
      this.flag3 = 0
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
        { "value": "子类"},
        { "value": "单位"},
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    //删除节点表单提交
    onSubmit1() {
      this.$refs.form1.validate((valid) => {
        if (valid) {
          this.connect();
          const session = this.$neo4j.getSession();
          let cypher = `match(n:\`${this.formInline1.Type}\`{name:"${this.formInline1.Node}"}) delete n`;
          session.run(cypher).then(res => {
            this.formInline1 = {
              Type: '',
              Node: '',
            };
            this.flag1 = 1
            session.close()
          }).then(() => {
            return
          });
        }
      })
    },
    //增加节点表单提交
    onSubmit2() {
      this.$refs.form2.validate((valid) => {
        if (valid) {
          this.connect();
          const session = this.$neo4j.getSession();
          let cypher = `create(n:\`${this.formInline2.Type}\`{
            name: "${this.formInline2.Node}",
            product1: "${this.formInline2.product1}",
            product2: "${this.formInline2.product2}",
            product3: "${this.formInline2.product3}",
            product1_use: "${this.formInline2.product1use}",
            product2_use: "${this.formInline2.product2use}",
            product3_use: "${this.formInline2.product3use}",
            flowAsset: "${this.formInline2.flowAsset}", 
            Asset: "${this.formInline2.Asset}",     
            flowDebt: "${this.formInline2.flowDebt}",  
            Debt: "${this.formInline2.Debt}",      
            ownerRights: "${this.formInline2.ownerRights}",  
            manuCost: "${this.formInline2.manuCost}",     
            busiCost: "${this.formInline2.busiCost}",     
            totalProfit: "${this.formInline2.totalProfit}",  
            mainProfit: "${this.formInline2.mainProfit}" 
          })`;
          session.run(cypher).then(() => {
            this.formInline2 = {
              Type: '',
              Node: '',
              product1: '',
              product2: '',
              product3: '',
              product1use: '',
              product2use: '',
              product3use: '',
              flowAsset: '', //流动资产合计
              Asset: '',     //资产总计
              flowDebt: '',  //流动负债合计
              Debt: '',      //负债合计
              ownerRights: '',  //所有者权益合计
              manuCost: '',     //制造成本
              busiCost: '',     //营业成本
              totalProfit: '',  //营业收入
              mainProfit: '',   //主营业务收入
            };
            this.flag2 = 1
            session.close()
          }).then(() => {
            return
          });
        }
      })
    },
    //修改节点表单提交
    onSubmit3() {
      this.$refs.form3.validate((valid) => {
        if (valid) {
          this.connect();
          const session = this.$neo4j.getSession();
          let cypher = `match (n:\`${this.formInline3.Type}\`{
            name: "${this.formInline3.Node}"}) 
            set 
            n.product1 = "${this.formInline3.product1}",
            n.product2 = "${this.formInline3.product2}",
            n.product3 = "${this.formInline3.product3}",
            n.product1_use = "${this.formInline3.product1use}",
            n.product2_use = "${this.formInline3.product2use}",
            n.product3_use = "${this.formInline3.product3use}",
            n.flowAsset = "${this.formInline3.flowAsset}", 
            n.Asset = "${this.formInline3.Asset}",     
            n.flowDebt = "${this.formInline3.flowDebt}",  
            n.Debt = "${this.formInline3.Debt}",      
            n.ownerRights = "${this.formInline3.ownerRights}",  
            n.manuCost = "${this.formInline3.manuCost}",     
            n.busiCost = "${this.formInline3.busiCost}",     
            n.totalProfit = "${this.formInline3.totalProfit}",  
            n.mainProfit = "${this.formInline3.mainProfit}" 
          `;
          session.run(cypher).then(() => {
            this.formInline3 = {
              Type: '',
              Node: '',
              product1: '',
              product2: '',
              product3: '',
              product1use: '',
              product2use: '',
              product3use: '',
              flowAsset: '', //流动资产合计
              Asset: '',     //资产总计
              flowDebt: '',  //流动负债合计
              Debt: '',      //负债合计
              ownerRights: '',  //所有者权益合计
              manuCost: '',     //制造成本
              busiCost: '',     //营业成本
              totalProfit: '',  //营业收入
              mainProfit: '',   //主营业务收入
            };
            this.flag3 = 1
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