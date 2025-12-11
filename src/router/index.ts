import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const routes = [
    { path: '/', component: Home, meta: { showNavbar: true } },
    { path: '/login', component: Login, meta: { showNavbar: false } },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router