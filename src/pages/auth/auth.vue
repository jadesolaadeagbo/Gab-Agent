<template>
   <div class="lg:flex justify-between px-5 pt-10 lg:pt-0 sm:pt-20 items-center">
        <!-- left -->
        <div class="flex flex-col lg:w-1/2  sm:pl-20 ">

        <div class="flex justify-between items-center">
            <img src="../../../public/assets/gablogo.png" className="w-[100px]" alt="">

        <!-- Language Translation dropdown -->
        <div>
            <button class="flex items-center gap-2 " @click="toggleDropdown" exact-active-class="text-blue-600" :class="textColor">
              <img  :src="getLanguageImage(selectedLanguage)" class="rounded-3xl w-[20px]" alt="">
              {{ getLanguageCode(selectedLanguage) }} 
              <img src="/public/assets/caret-down.svg" v-if="dropdownOpen"  alt="">
              <img src="/public/assets/caret.svg" v-else alt=""></button>

            <div v-if="dropdownOpen" class="">
                <ul class=" bg-white absolute w-[200px] rounded-lg top-28 lg:left-[500px] sm:right-64 right-0 lg:pt-0 pt-3 boxShadow border border-input-grey z-[50]">
                
                  <li class="py-2 mt-2 px-2 mx-2 gap-2 cursor-pointer hover:bg-input-grey  rounded-lg flex items-center" @click="selectLanguage('en')"><img src="/public/assets/english.svg" class="w-[20px] h-[20px] rounded-full" alt="">English</li>
                  <li class="py-2 mt-2 px-2 mx-2 gap-2 cursor-pointer hover:bg-input-grey rounded-lg flex items-center" @click="selectLanguage('portuguese')"><img src="/public/assets/portuguese.svg" class="w-[20px] h-[20px] rounded-full" alt=""> Portuguese</li>
                  <li class="py-2 my-2 px-2 mx-2 gap-2 cursor-pointer hover:bg-input-grey rounded-lg flex items-center" @click="selectLanguage('fr')"><img src="/public/assets/french.svg" class="w-[20px] h-[20px] rounded-full" alt=""> French</li>
                  

                </ul>
            </div>
        </div> 
            
        </div>   
        <div class="">
                <p class=" font-bold flex items-center text-base sm:text-xl">
                    {{$t('welcome')}}
                </p>
                <!-- small text -->
                <p class="text-sm sm:text-md flex items-center text-grey">
                    {{$t('sign_in')}}
                </p>            
            </div>
            <form @submit.prevent="login">
                <div class="flex flex-col space-y-3">
                    <div class="flex sm:justify-center flex-col space-y-3">
                        <label class="pt-10">{{$t('phone_number')}}</label>
                        <input 
                            required
                            type="text" 
                            class=" flex flex-row items-center h-12 py-[17px] pl-[15px] sm:w-3/4 lg:w-full  border border-dark-grey rounded-[13px]"
                            :placeholder= "$t('placeholder.phone')"
                            v-model="form.phone"  
                            autocomplete="off"          
                        >  
                    </div>
            
                    <div class="relative flex flex-col space-y-3">
                        <label>{{$t('enter_password')}}</label>
                        <input 
                            required
                            :type="showPassword ? 'text': 'password'"
                            class="border flex flex-row items-center h-12 py-[17px]  pl-[15px] lg:w-full sm:w-3/4 border-dark-grey rounded-[13px] relative"
                            :placeholder= "$t('placeholder.password')"
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


                            <p>{{$t('remember_me')}}</p>                            
                        </span>

                        <span>{{ $t('forgot_password') }}</span>

                    </div>
                    <div class="mb-6">
                        <button 
                            class="flex justify-center bg-black text-white items-center h-12 mt-4 pt-[17px] pr-[16px] pb-[17px] pl-[25px] lg:w-full sm:w-3/4 w-full border border-dark-grey rounded-[13px] gap-2">
                        {{ $t('login') }} <Loader v-if="isLoading" />
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
    import englishImage from "/public/assets/english.svg";
    import portugueseImage from "/public/assets/portuguese.svg";
    import frenchImage from "/public/assets/french.svg";
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
                },
                isOpen: false,
                dropdownOpen: false,
                selectedLanguage: this.$i18n.locale,
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
            },

            toggleDropdown(){
            this.dropdownOpen = !this.dropdownOpen
          },

          selectLanguage(language) {
            this.selectedLanguage = language;
            this.$i18n.locale = this.selectedLanguage;
            this.dropdownOpen = false;
          },

          getLanguageCode(language) {
            if (language === 'en') {
              return 'EN';
            } else if (language === 'portuguese') {
              return 'PT';
            } else if (language === 'fr') {
              return 'FR';
            }
            return '';
          },
          getLanguageImage(language) {
            if (language === 'en') {
              return englishImage;
            } else if (language === 'portuguese') {
              return portugueseImage;
            } else if (language === 'fr') {
              return frenchImage;
            }
            return '';
          },
    }
}
</script>

<style>
.passwordIcon{
    color: grey;
}

</style>