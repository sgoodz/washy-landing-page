import {createRouter, createWebHistory}  from 'vue-router'
import Home from './components/Home.vue';
import Register from './components/Register.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home
    },
    {
        name: 'Register',
        path: '/register',
        component: Register
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router