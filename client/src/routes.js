import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Admin from './components/Admin.vue'
import {createRouter, createWebHistory} from 'vue-router'

const routes=[
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
    {
        name: 'Admin',
        component: Admin,
        path: '/admin'
    },
    
]

const router=createRouter({
    history:createWebHistory(),
    routes
})

export default router