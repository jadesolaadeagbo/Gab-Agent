<template>
    <div class="absolute bg-black w-[372px] h-screen flex border">        
        <img 
            class="absolute w-[186px] left-[53px] top-[51px]"
            src="/public/assets/gablogowhite.png"  
            alt=""
        >
        <div class="flex flex-col ml-[57px] mt-[300px] justify-start items-center gap-6 border w-96 ">

            <div class="flex flex-row pb-12">
                <a 
                :href="dashboard" 
                :class="active_route === dashboard 
                    ? 'border border-white flex cursor-pointer flex-row items-center gap-1 p-6 absolute w-[170.25px] rounded-[20px] h-[37.25px] left-[57px] hover:bg-grey hover:p-6' 
                    : 'flex cursor-pointer flex-row items-center gap-1 p-3 absolute w-[170.25px] rounded-[20px] h-[37.25px] left-[57px] hover:bg-grey hover:p-6'">
                <img src="/public/assets/dashboard-icon.png" alt="">
                <p class="ml-2 text-white"> Dashboard </p>
            </a>
            </div>
            <!-- <div class="border flex flex-row pb-12">
                <a 
                    :href="drivers" 
                    :class="active_route === drivers 
                        ? 'border border-white flex cursor-pointer flex-row items-center gap-1 p-6 absolute w-[235px] rounded-[20px] h-[37.25px] left-[57px] hover:bg-grey hover:p-6' 
                        :'flex cursor-pointer flex-row items-center gap-1 p-3 absolute w-[235px] rounded-[20px] h-[37.25px] left-[57px] hover:bg-grey hover:p-6'">
                    <img src="/public/assets/usericon.png" alt="">
                    <p class="ml-2 text-white"> Registered Drivers </p>
                </a>    
            </div> -->
            <div class="border flex flex-row pb-16">
                <a 
                    :href="profile" 
                    :class="active_route === profile 
                        ? 'border border-white flex cursor-pointer flex-row items-center gap-1 p-6 absolute w-[235px] rounded-[20px] h-[37.25px] left-[57px] hover:bg-grey hover:p-6' 
                        :'flex cursor-pointer flex-row items-center gap-1 p-3 absolute w-[235px] rounded-[20px] h-[37.25px] left-[57px] hover:bg-grey hover:p-6'">
                    <img src="/public/assets/usericon.png" alt="">
                    <p class="ml-2 text-white"> Profile </p>
                </a>
            </div>
            <div class="border flex flex-row">
                <a 
                    href="#"
                    @click="logoutUser" 
                    class='flex cursor-pointer flex-row items-center gap-1 p-3 absolute w-[235px] rounded-[20px] h-[37.25px] left-[57px] hover:bg-grey hover:p-6'>
                    <img src="/public/assets/logouticon.png" alt="">
                        <p class="ml-2 text-white"> Logout </p>
                </a>
            </div>
            
        </div>       
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
                profile: path.PROFILE,
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