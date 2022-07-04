import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import App from '../App.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: App
    }
]
//创建
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router