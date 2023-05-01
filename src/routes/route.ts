
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/auth/auth.vue'
import Drivers from '@/pages/drivers/drivers.vue'
import Dashboard from '@/pages/dashboard/dashboard.vue'
import path from './path'
import Auth from '@/helpers/auth/Auth.ts'
import Profile from '@/pages/profile/profile.vue'
import Commission from '../pages/commission/commission.vue'

const loggedIn = localStorage.getItem('token')


let dashboard = {
    path: path.DASHBOARD,
    name: 'Dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {        
        
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
    component: Drivers,
    beforeEnter: (to, from, next) => {        
        
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
let profile = {
    path: path.PROFILE,
    name: 'profile',
    component: Profile,
    beforeEnter: (to, from, next) => {        
        
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

let commission = {
    path: path.COMMISSION,
    name: 'commission',
    component: Commission,
    beforeEnter: (to, from, next) => {        
        
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


const router = createRouter({
    history: createWebHistory(),
    routes: [      
        dashboard, login, drivers, profile, commission
    ]
  })
  
export default router
