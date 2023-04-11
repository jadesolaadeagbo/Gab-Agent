<template>
    <div class="absolute bg-black w-[372px] h-screen">
        
        <img 
            class="absolute w-[186px] left-[53px] top-[51px]"
            src="/public/assets/gablogowhite.png"  
            alt=""
        >

        <a 
            :href="dashboard" 
            :class="active_route === dashboard 
                ? 'border border-white flex cursor-pointer flex-row items-center gap-1 p-6 absolute w-[170.25px] rounded-[20px] h-[37.25px] left-[57px] top-[300px] hover:bg-grey' 
                : 'flex cursor-pointer flex-row items-center gap-1 p-3 absolute w-[170.25px] rounded-[20px] h-[37.25px] left-[57px] top-[300px] hover:bg-grey'">
            <img src="/public/assets/dashboard-icon.png" alt="">
            <p class="ml-2 text-white"> Dashboard </p>
        </a>
        <a 
            :href="drivers" 
            :class="active_route === drivers 
                ? 'border border-white flex cursor-pointer flex-row items-center gap-1 p-6 absolute w-[235px] rounded-[20px] h-[37.25px] left-[57px] top-[378px] hover:bg-grey' 
                :'flex cursor-pointer flex-row items-center gap-1 p-3 absolute w-[235px] rounded-[20px] h-[37.25px] left-[57px] top-[378px] hover:bg-grey'">
            <img src="/public/assets/usericon.png" alt="">
            <p class="ml-2 text-white"> Registered Drivers </p>
        </a>
        <button @click="logoutUser" class="relative cursor-pointer flex flex-row items-center gap-2.5 p-3  w-[127.36px] rounded-[20px] h-[37.36px] left-[60px] top-[514px] hover:bg-grey">
            <img src="/public/assets/logouticon.png" alt="">
            <p class="ml-2 text-white"> Logout </p>
        </button>
    </div>
</template>
<script>
import path from '@/routes/path.ts'
import Auth from '@/helpers/auth/Auth.ts'
    export default {
        data() {
            return {                
                dashboard: path.DASHBOARD,
                drivers: path.DRIVERS,
                logout: path.LOGOUT,
                active_route:null
            }
        },
        methods: {
            logoutUser(){
                Auth.logout().then(res => {
                    localStorage.clear()                    
                    this.$router.push(path.LOGIN)
                })
            }
        },
        created() {
            this.active_route = this.$route.path
        }
        
        
    }
</script>