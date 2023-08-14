<template>
   <div class="lg:flex justify-between px-5 pt-10 lg:pt-0 sm:pt-20 items-center">
        <!-- left -->
        <div class="flex flex-col lg:w-1/2  sm:pl-20 ">

        <div class=" w-[100px]">
            <img src="../../../public/assets/gablogo.png" alt="">
        </div>   
        <div class="">
                <p class=" font-bold flex items-center text-base sm:text-xl">
                    Welcome!
                </p>
                <!-- small text -->
                <p class="text-sm sm:text-md flex items-center text-grey">
                    Sign in to your account
                </p>            
            </div>
            <form @submit.prevent="login">
                <div class="flex flex-col space-y-3">
                    <div class="flex sm:justify-center flex-col space-y-3">
                        <label class="pt-10">Phone Number</label>
                        <input 
                            required
                            type="text" 
                            class=" flex flex-row items-center h-12 py-[17px] pl-[15px] sm:w-3/4 lg:w-full  border border-dark-grey rounded-[13px]"
                            placeholder="Enter Phone Number"
                            v-model="form.phone"  
                            autocomplete="off"          
                        >  
                    </div>
            
                    <div class="relative flex flex-col space-y-3">
                        <label>Enter Password</label>
                        <input 
                            required
                            :type="showPassword ? 'text': 'password'"
                            class="border flex flex-row items-center h-12 py-[17px]  pl-[15px] lg:w-full sm:w-3/4 border-dark-grey rounded-[13px] relative"
                            placeholder="Enter Password"
                            v-model="form.password" 
                            autocomplete="off"           
                        >  
                        <button type="button" @click="togglePasswordVisibility" class="absolute right-[15px] top-[35px] lg:right-[20px] sm:right-[180px]">
                            <i :class="{'fa-solid fa-eye': showPassword, 'fa-solid fa-eye-slash': !showPassword}" class="passwordIcon"></i>
                        </button>
                    </div>
                    <div class="flex justify-between  mb-8 text-grey sm:w-3/4 lg:w-full">
                        <span class="flex gap-2 items-center">
                            <i class="fa-solid fa-square-check absolute" style="color: #000000;" v-if="isChecked"></i>
                            <input type="checkbox">                                


                            <p>Remember Me</p>                            
                        </span>

                        <span>Forgot Password?</span>

                    </div>
                    <div class="mb-6">
                        <button 
                            class="flex justify-center bg-black text-white items-center h-12 mt-4 pt-[17px] pr-[16px] pb-[17px] pl-[25px] lg:w-full sm:w-3/4 w-full border border-dark-grey rounded-[13px] ">
                            Login <Loader v-if="isLoading" />
                        </button>
                    </div>
                </div>
            </form>
        </div>
        <!-- right -->
        <div class="hidden lg:flex items-center pt-4 sm:pl-32">
            <img src="/public/assets/loginimg.png" className="h-[95vh] w-[700px]" alt="">
            
        </div>        
    </div>
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
                isChecked:false,
                showPassword:false,
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
                        window.location.href = path.MAIN 
                    }
                }).catch(err => {           
                    this.isLoading = false         
                    return notify.error(err)                    
                })                

            },
            togglePasswordVisibility() {
                this.showPassword = !this.showPassword;
                console.log(this.showPassword);
            }

            

    }
}
</script>

<style>
.passwordIcon{
    color: grey;
}

</style>