
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/auth/auth.vue'
import Drivers from '@/pages/drivers/drivers.vue'
import Dashboard from '@/pages/dashboard/dashboard.vue'
import path from './path'
import Auth from '@/helpers/auth/Auth'

const loggedIn = localStorage.getItem('token')


let dashboard = {
    path: path.DASHBOARD,
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {        
        // console.log(loggedIn)
        // next()
        if (loggedIn) {            
            Auth.authUser().then(result => {
                if (result) {
                    next()
                } else {
                    return next(path.LOGIN)
                }
            }).catch(() => {
                return next(path.LOGIN)
            })        
        }
    },
}
let login = {
    path: path.LOGIN,
    name: 'Login',
    component: Login
}

let drivers = {
    path: path.DRIVERS,
    name: 'Drivers',
    component: Drivers
}
const router = createRouter({
    history: createWebHistory(),
    routes: [      
        dashboard, login, drivers
    ]
  })
  
export default router