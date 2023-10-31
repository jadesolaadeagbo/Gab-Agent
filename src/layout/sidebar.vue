<template>
    <div class="bg-black h-screen border fixed">        
        <div class="flex justify-between items-center pt-5 px-5">
         <img 
            class="lg:block hidden w-[50px]"
            src="/public/assets/gablogowhite.png" 
            alt=""
        >     
        <div class=" ">
        <button type="button" @click="toggleShow"> 
            <i class ="fa-solid" style="color: white" :class="{'fa-xmark':showBar,'fa-bars':!showBar}"></i>
        </button>        
      </div>      
        </div>

        <div class="flex flex-col px-5 mt-24 gap-6 border whitespace-nowrap">

            <div class="flex flex-row pb-6">
                <router-link :to="dashboard" :class="active_route === dashboard 
                    ? 'flex cursor-pointer flex-row items-center gap-1  text-white'
                    : 'flex cursor-pointer flex-row items-center gap-1  left-[25px] text-grey'" @click="updateActiveRoute(dashboard)"
                >

                <i class="fa-brands fa-windows fa-2xl"></i>
                <p class="ml-2 ">{{ $t('dashboard') }}</p>
            </router-link>
            </div>

            <div class="border flex flex-row pb-6">
                <router-link :to="drivers" 
                    :class="active_route === drivers 
                        ? 'flex cursor-pointer flex-row items-center gap-1  left-[25px] text-white' 
                        :'flex cursor-pointer flex-row items-center gap-1 left-[25px] hover:bg-black text-grey'" @click="updateActiveRoute(drivers)">
                    <i class="fa-solid fa-user fa-2xl"></i>
                    <p class="ml-2 "> {{$t('registered_drivers')}} </p>
                </router-link>    
            </div>

            <div class="border flex flex-row pb-6">
                <router-link :to="profile" 
                    :class="active_route === profile 
                        ? 'flex cursor-pointer flex-row items-center gap-1  left-[25px] text-white '
                        : 'flex cursor-pointer flex-row text-grey items-center gap-1 left-[25px]'" @click="updateActiveRoute(profile)">
                    <i class="fa-solid fa-user fa-2xl" ></i>
                    <p class="ml-2" >{{ $t('profile') }} </p>
                </router-link>
            </div>

            <div class="border flex flex-row ">
                <a 
                    href="#"
                    @click="logoutUser" 
                    class='flex cursor-pointer flex-row items-center gap-1 left-[25px]'>
                    <i class="fa-solid fa-arrow-right-from-bracket text-grey fa-2xl"></i>
                        <p class="ml-2 text-grey"> {{ $t('logout') }} </p>
                   

                </a>
            </div>
            

        <!-- Language Translation dropdown -->
       <div class="pt-6 pl-5 lg:bottom-0 lg:pt-20 bottom-32 absolute left-[10px]">
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
                showBar: false,
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
    }        
    }
</script>