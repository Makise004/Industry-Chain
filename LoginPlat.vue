<template>
<div class="flex">
  <el-row>
    <div class="logintext">扬州市产业链<br/>大数据平台<br/>Yangzhou industrial chain<br/>mega data platform</div>
    <div style="width:3.5rem;height:3rem;margin-left:15%;margin-top:10%;box-shadow: 20px 20px 25px #000101ce">
      <html class="dark">
        <div style="font-Size:0.18rem;font-family:Georgia">Sign&nbsp;&nbsp;In</div>
        <br/><br/><br/>
        <br/><br/><br/>
        <el-form ref="formRef" :rules="rules" :model="form">
            <el-form-item 
            label="用户名" 
            prop="userName" 
            label-width=0.6rem
            size='large'>
                <el-input 
                v-model="form.userName"
                clearable
                class="inline-input w-50"
                style="width:2.4rem;margin-left:0.1rem"
                placeholder="Please Input"
                ></el-input>
            </el-form-item>
            <br/>
            <el-form-item 
            label="密码" 
            prop="password"
            label-width=0.6rem
            size='large'>
                <el-input 
                type="password" 
                v-model="form.password"
                clearable
                class="inline-input w-50"
                style="width:2.4rem;margin-left:0.1rem"
                placeholder="Please Input"
                ></el-input>
            </el-form-item>
        </el-form>
        <br/>
        <br/>
        <el-row>
          <div style="margin-left:37%;">
              <el-button size="large" type="primary" @click="submit" round>登 录</el-button>
          </div>
          <div style="margin-left:10%;">
              <el-button size="large" disabled round>注 册</el-button>
          </div>
        </el-row>
      </html>
    </div>
  </el-row>
</div>
</template>

<script>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex"
export default {
  name: 'Login',
  setup() {
    const formRef = ref(null);
    const router = useRouter();
    const store = useStore();
    const form = reactive({
      userName: '',
      password: '',
    });
    const rules = reactive({
      userName: [{ required: true, message: '请填写用户名', trigger: ['blur', 'change'] }],
      password: [{ required: true, message: '请填写密码', trigger: ['blur', 'change'] }]
    })
    const submit = () => {
      formRef.value.validate(async valid => {
          if (!valid) return;
          if (form.userName != "admin" || form.password != "admin"){
            alert('账号密码错误')
            return false;
          }
          router.replace('/screen');
      });
    };
    return {
      form,
      rules,
      formRef,
      submit,
    };
  }
};
</script>

<style>
.logintext{
  font-Size:0.25rem;
  line-height:2;
  font-family:Georgia;
  font-weight:normal;
  font-style: italic;
  margin-left:10%;
  margin-top:10%;
  text-align:center;
  text-shadow: 10px 6px 18px #ffffffe6;
}
</style>