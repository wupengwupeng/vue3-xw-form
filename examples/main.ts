import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import XmwForm from '../packages/index'; // 全局挂在form组件
// import XwForm from 'vue3-xw-form'
import XwFrom from 'vue3-xw-form'

createApp(App).use(router).use(ElementPlus).use(XwFrom).mount('#app')
