<template>
   <section class="flex flex-row md:gap-6">
        <!-- left -->
        <div class="flex md:flex-rows md:flex-col justify-center md:pl-32 md:justify-between w-[650px] h-screen ">

        
        <div class="absolute w-[122.47px] h-[84px] pt-10">
            <img src="../../../public/assets/gablogo.png" alt="">
        </div>   
        
            <!-- LOGIN SECTION -->
        <div class="absolute w-52 h-16 top-44 md:top-56">
                <p class="not-italic font-extrabold flex items-center text-base md:text-xl">
                    Welcome!
                </p>
                <!-- small text -->
                <p class="not-italic font-normal text-sm md:text-md flex items-center text-grey">
                    Sign in to your account
                </p>            
            </div>
            <form @submit.prevent="login">
                <div class="gap-3 relative top-[300px]  md:top-[447px]">
                    <div class="flex justify-center md:flex-col md:flex-start gap-2 mb-6">
                        <input 
                            required
                            type="text" 
                            class="box-border flex flex-row items-center h-12 pt-[17px] pr-[16px] pb-[17px] pl-[25px] gap-2.5 md:w-[476px] border border-dark-grey rounded-[13px] focus:border-blue"
                            placeholder="Enter Phone Number"
                            v-model="form.phone"            
                        >  
                    </div>
            
                    <div class="flex justify-center md:flex-col md:flex-start gap-2 mb-6">
                        <input 
                            required
                            type="password" 
                            class="box-border flex flex-row items-center h-12 pt-[17px] pr-[16px] pb-[17px] pl-[25px] gap-2.5 md:w-[476px] border border-dark-grey rounded-[13px] focus:border-blue-500"
                            placeholder="Enter Password"
                            v-model="form.password"            
                        >                         
                    </div>
                    <div class="flex justify-center md:flex-col md:flex-start gap-2 mb-6">
                        <button 
                            class="box-border flex flex-row justify-center w-52 bg-black text-white items-center h-12 pt-[17px] pr-[16px] pb-[17px] pl-[25px] gap-2.5 md:w-[476px] border border-dark-grey rounded-[13px]">
                            Login <Loader v-if="isLoading" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <!-- right -->
        <div class="hidden lg:flex flex-col  p-0 justify-center md:pl-32 md:justify-between mt-5 w-screen h-[800px] ">
            <img src="/public/assets/loginimg.png" style="height:800px; width:fit-content" alt="">
            
        </div>        
   </section>
</template>

<script>
    import Form from '@/components/forms/Form.vue'
    import Auth from '@/helpers/auth/auth.ts'
    import path from '@/routes/path.ts'  
    import notify from '@/helpers/notifications/notification.ts'
    import Loader from '@/components/Loader.vue'
    export default {
        components: {
            Form,
            Loader
        },
        data() {
            return {
                isLoading: false,
                form: {
                    phone: "",
                    password: "",
                    user_type: "agent",
                }
            }
        },

        methods: {            
            login(){
                this.isLoading = true
                Auth.login(this.form).then(res => {                                                    
                    localStorage.setItem('token', res.data.auth_token)                                                                                
                    this.isLoading = false
                    if (localStorage.getItem('token') != null) {                        
                        window.location.href = path.DASHBOARD
                    }
                }).catch(err => {           
                    this.isLoading = false         
                    return notify.error(err)                    
                })                

            }
            
        },

        created() {
            
        },

        watch: {
            
        }
    }
</script>