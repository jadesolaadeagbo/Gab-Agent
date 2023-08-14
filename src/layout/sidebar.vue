<template>
    <div class="bg-black w-[372px] h-screen flex border">        
        <img 
            class="lg:block hidden absolute w-[186px] left-[53px] top-[51px]"
            src="/public/assets/gablogowhite.png"  
            alt=""
        >
        <div class="flex flex-col ml-[57px] lg:mt-[200px] mt-[50px] justify-start items-center gap-6 border lg:w-96 w-60">

            <div class="flex flex-row pb-12">
                <router-link :to="dashboard" :class="active_route === dashboard 
                    ? 'border-l-4 border-white border border-y-0 border-r-0 flex cursor-pointer flex-row items-center gap-1 p-6 absolute w-[170.25px] h-[37.25px] left-[10px] hover:p-6 text-white ml-4' 
                    : 'flex cursor-pointer flex-row items-center gap-1 py-8 px-6 absolute w-[170.25px] h-[37.25px] left-[10px] text-grey '" @click="updateActiveRoute(dashboard)"
                >
                <i class="fa-brands fa-windows fa-2xl"></i>
                <p class="ml-2 "> Dashboard </p>
            </router-link>
            </div>

            <div class="border flex flex-row pb-12">
                <router-link :to="drivers" 
                    :class="active_route === drivers 
                        ? 'border-l-4 border-white border border-y-0 border-r-0 flex cursor-pointer flex-row items-center gap-1 p-6 absolute w-[235px] h-[37.25px] left-[10px]  hover:p-6 text-white ml-4 my-4' 
                        :'flex cursor-pointer flex-row items-center gap-1 py-8 px-6 absolute w-[235px] h-[37.25px] left-[10px] hover:bg-black text-grey'" @click="updateActiveRoute(drivers)">
                    <i class="fa-solid fa-user fa-2xl"></i>
                    <p class="ml-2 "> Registered Drivers </p>
                </router-link>    
            </div>

            <div class="border flex flex-row pb-32">
                <router-link :to="profile" 
                    :class="active_route === profile 
                        ? 'border-l-4 border-white border border-y-0 border-r-0 flex cursor-pointer flex-row items-center gap-1 p-6 absolute w-[235px] h-[37.25px] left-[10px] hover:p-6 text-white ml-4'
                        : 'flex cursor-pointer flex-row text-grey items-center gap-1 py-8 px-6 absolute w-[235px] h-[37.25px] left-[10px]'" @click="updateActiveRoute(profile)">
                    <i class="fa-solid fa-user fa-2xl"></i>
                    <p class="ml-2" > Profile </p>
                </router-link>
            </div>

            <div class="border flex flex-row">
                <a 
                    href="#"
                    @click="logoutUser" 
                    class='flex cursor-pointer flex-row items-center gap-1 p-6 absolute w-[235px] h-[37.25px] left-[10px]'>
                    <i class="fa-solid fa-arrow-right-from-bracket text-grey fa-2xl"></i>
                        <p class="ml-2 text-grey"> Logout </p>
                   

                </a>
            </div>
            
        </div>       
    </div>
</template>
<script>
import path from '@/routes/path.ts'
import Auth from '@/helpers/auth/auth.ts'
    export default {
        props: {
            active_route: String,
        },
        data() {
            return {                
                dashboard: path.DASHBOARD,
                drivers: path.DRIVERS,
                logout: path.LOGOUT,
                profile: path.PROFILE,
                active_route:null,
            }
        },
        methods: {
            logoutUser(){
                Auth.logout().then(res => {
                    localStorage.clear()                    
                    this.$router.push(path.LOGIN)
                })
            },
            updateActiveRoute(route){
                this.active_route = route;
                console.log(this.active_route);
            },
        },
        
        created() {
            this.active_route = this.$route.path;
        },
        
        
    }
</script>