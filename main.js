import { createApp } from 'vue'
import './assets/css/index.css'        //全局css
import App from './App.vue'
import echarts from 'echarts'
import dataV from '@jiaminghi/data-view'  // 将DATAV所有组件导入
import VueNeo4j from 'vue-neo4j'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import router from './router'
import "amfe-flexible/index.js";

let app = createApp(App)

app.use(dataV)
    .use(VueNeo4j)
    .use(ElementPlus)
    .use(router)
    .mount('#app')