// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/pages/auth/auth.vue'
import Drivers from '@/pages/drivers/drivers.vue'
import Dashboard from '@/pages/dashboard/dashboard.vue'
import path from './path'
import Auth from '../helpers/auth/auth'
import Profile from '@/pages/profile/profile.vue'
import Commission from '../pages/commission/commission.vue'
import Main from '../layout/main.vue'

const loggedIn = localStorage.getItem('token')

let main = {
    path: path.MAIN,
    name: 'Main',
    component: Main,
    beforeEnter: (to:any, from:any, next:any) => {        
        
        if (loggedIn) {            
            Auth.authUser().then((result: any) => {
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

    children: [
        {
            path:'',
            redirect: 'dashboard'
        },
        {            
            path: path.DASHBOARD,
            name: 'Dashboard',
            component: Dashboard,
            beforeEnter: (to:any, from:any, next:any) => {        
                
                if (loggedIn) {            
                    Auth.authUser().then((result: any) => {
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
        
        },
        {
                path: path.DRIVERS,
                name: 'Drivers',
                component: Drivers,
                beforeEnter: (to: any, from: any, next:any) => {        
                    
                    if (loggedIn) {            
                        Auth.authUser().then((result: any) => {
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
        },
        {
          
                path: path.PROFILE,
                name: 'profile',
                component: Profile,
                beforeEnter: (to: any, from: any, next: any) => {        
                    
                    if (loggedIn) {            
                        Auth.authUser().then((result: any) => {
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
            },
            {
               
                path: path.COMMISSION,
                name: 'commission',
                component: Commission,
                beforeEnter: (to: any, from: any, next: any) => {        
                    
                    if (loggedIn) {            
                        Auth.authUser().then((result: any) => {
                            if (result) {
                                next()
                            } else {
                                return next(path.LOGIN)
                            }
                        }).catch(() => {
                            return next(path.LOGIN)
                        })        
                    }
                
                }
            
            }
    ]
}

    let login = {
        path: path.LOGIN,
        name: 'Login',
        component: Login
    }


const router = createRouter({
    history: createWebHistory(),
    routes: [      
         login, main
    ]
  })
  
export default router
