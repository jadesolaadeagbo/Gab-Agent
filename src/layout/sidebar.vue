<template>
    <div class="bg-black w-[372px] h-screen flex border">        
        <img 
            class="lg:block hidden absolute w-[100px] left-[53px] top-[40px]"
            src="/public/assets/gablogowhite.png"  
            alt=""
        >
        <div class="flex flex-col ml-[57px] lg:mt-[150px] mt-[50px] justify-start items-center gap-6 border lg:w-96 w-60">

            <div class="flex flex-row pb-12 ">
                <router-link :to="dashboard" :class="active_route === dashboard 
                    ? 'border-l-4 border-white border border-y-0 border-r-0 flex cursor-pointer flex-row items-center gap-1 p-6 absolute  left-[10px] hover:p-6 text-white ml-4' 
                    : 'flex cursor-pointer flex-row items-center gap-1 py-8 px-6 absolute left-[10px] text-grey '" @click="updateActiveRoute(dashboard)"
                >
                <i class="fa-brands fa-windows fa-2xl"></i>
                <p class="ml-2 ">{{ $t('dashboard') }}</p>
            </router-link>
            </div>

            <div class="border flex flex-row pb-12">
                <router-link :to="drivers" 
                    :class="active_route === drivers 
                        ? 'border-l-4 border-white border border-y-0 border-r-0 flex cursor-pointer flex-row items-center gap-1 p-6 absolute h-[37.25px] left-[10px]  hover:p-6 text-white ml-4 my-4' 
                        :'flex cursor-pointer flex-row items-center gap-1 py-8 px-6 absolute h-[37.25px] left-[10px] hover:bg-black text-grey'" @click="updateActiveRoute(drivers)">
                    <i class="fa-solid fa-user fa-2xl"></i>
                    <p class="ml-2 "> {{$t('registered_drivers')}} </p>
                </router-link>    
            </div>

            <div class="border flex flex-row pb-12">
                <router-link :to="profile" 
                    :class="active_route === profile 
                        ? 'border-l-4 border-white border border-y-0 border-r-0 flex cursor-pointer flex-row items-center gap-1 p-6 absolute w-[235px] h-[37.25px] left-[10px] hover:p-6 text-white ml-4'
                        : 'flex cursor-pointer flex-row text-grey items-center gap-1 py-8 px-6 absolute w-[235px] h-[37.25px] left-[10px]'" @click="updateActiveRoute(profile)">
                    <i class="fa-solid fa-user fa-2xl"></i>
                    <p class="ml-2" >{{ $t('profile') }} </p>
                </router-link>
            </div>

            <div class="border flex flex-row pb-32">
                <a 
                    href="#"
                    @click="logoutUser" 
                    class='flex cursor-pointer flex-row items-center gap-1 p-6 absolute w-[235px] h-[37.25px] left-[10px]'>
                    <i class="fa-solid fa-arrow-right-from-bracket text-grey fa-2xl"></i>
                        <p class="ml-2 text-grey"> {{ $t('logout') }} </p>
                   

                </a>
            </div>
            

        <!-- Language Translation dropdown -->
       <div class="p-6 lg:bottom-0 lg:pt-20 bottom-32 absolute left-[10px]">
            <div>
                <button class="flex items-center text-white gap-2 border border-grey p-2 rounded-sm" @click="toggleDropdown" >
                <img  :src="getLanguageImage(selectedLanguage)" class="rounded-3xl w-[20px] text-input-grey" alt="">
                {{ getLanguageCode(selectedLanguage) }} 
                <img src="/public/assets/caret-down.svg" v-if="dropdownOpen"  alt="">
                <img src="/public/assets/caret.svg" v-else alt=""></button>

                <div v-if="dropdownOpen" class="">
                    <ul class="  absolute w-[200px] lg:bottom-16 border bg-black border-input-grey bottom-[70px] lg:pt-0 pl-2 boxShadow z-[50] text-white">
                    
                    <li class="mt-2 gap-2 cursor-pointer rounded-lg flex items-center" @click="selectLanguage('en')"><img src="/public/assets/english.svg" class="w-[20px] h-[20px] rounded-full" alt="">English</li>
                    <li class="mt-2 gap-2 cursor-pointer rounded-lg flex items-center" @click="selectLanguage('portuguese')"><img src="/public/assets/portuguese.svg" class="w-[20px] h-[20px] rounded-full" alt=""> Portuguese</li>
                    <li class="my-2 gap-2 cursor-pointer rounded-lg flex items-center" @click="selectLanguage('fr')"><img src="/public/assets/french.svg" class="w-[20px] h-[20px] rounded-full" alt=""> French</li>
                    

                    </ul>
                </div>
            </div> 
       </div>

            
            
        </div>       
    </div>
</template>
<script>
import path from '@/routes/path.ts'
import Auth from '@/helpers/auth/auth.ts'
import englishImage from "/public/assets/english.svg";
import portugueseImage from "/public/assets/portuguese.svg";
import frenchImage from "/public/assets/french.svg";
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
                isOpen: false,
                dropdownOpen: false,
                selectedLanguage: this.$i18n.locale,
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

            

    },
    
        
        created() {
            this.active_route = this.$route.path;
        },
        
        
    }
</script>