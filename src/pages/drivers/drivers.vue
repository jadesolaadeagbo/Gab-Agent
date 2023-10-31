<template>
    <div>
        <!-- Search Bar -->
        <div class="py-10 border-b border-input-grey lg:flex justify-end items-center w-full gap-8 pr-16 hidden">
            <div class="w-full flex justify-end">
                <input type="text" :placeholder="$t('search')" class="rounded-[28px] pl-12 w-1/2 text-lg outline-none h-[50px] bg-input-grey relative search-input">
            </div>
            <span class="bg-input-grey p-3 rounded-full">
                <img src="/public/assets/bell.svg" class="w-[40px]" alt="">
            </span>
            <img src="/public/assets/avatar.png" class="w-[50px]" alt="">
        </div>
        <h1 class="text-2xl py-5">Drivers</h1>
        <div v-if="loading===true">
            <span class="flex justify-center items-center w-full pt-20 pl-80">
                <span class="loader"></span>
            </span>
        </div>
        <div class="flex flex-col overflow-hidden" v-else>
            <div class="-m-1.5">
                <div class="p-1.5 min-w-full inline-block align-middle">
                <div class="overflow-hidden">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                    <thead>
                        <tr>
                        <th scope="col" class=" py-3 text-xs text-center font-medium text-gray-500 uppercase">user id</th>
                        <th scope="col" class="py-3  text-xs font-medium text-gray-500 uppercase text-center">fullname</th>
                        <th scope="col" class="py-3  text-xs font-medium text-gray-500 uppercase text-center">telephone</th>
                        <th scope="col" class="py-3 text-xs font-medium text-gray-500 uppercase">email address</th>
                        <th scope="col" class="py-3  text-xs font-medium text-gray-500 uppercase">ban status</th>
                        <th scope="col" class="py-3 text-xs font-medium text-gray-500 uppercase text-center">gender</th>
                        <th scope="col" class="py-3  text-xs font-medium text-gray-500 uppercase text-center">activation status</th>
                        <th scope="col" class=" py-3 text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700" v-for="driver in drivers" :key="driver.id">
                        <tr>
                        <td class="text-center py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{{ driver.driver_id }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">{{ driver.driver.fullname }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">{{ driver.driver.phone }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                            <span class="text-blue-500 hover:text-blue-700">{{ driver.driver.email }}</span>
                        </td>                        
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                            <span class="text-blue-500 hover:text-blue-700" v-if="driver.driver.is_banned===0">Not banned</span>
                            <span class="text-blue-500 hover:text-blue-700" v-else>Banned</span>
                        </td>                        
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-center ">
                            <span class="text-blue-500 hover:text-blue-700 capitalize text-center">{{ driver.driver.gender }}</span>
                        </td>

                        <td class="px-16 py-4 whitespace-nowrap text-sm font-medium">
                            <span class="text-blue-500 text-center hover:text-blue-700" v-if="driver.driver.is_active===0">Not Active</span>
                            <span class="text-blue-500 text-center hover:text-blue-700" v-else>Active</span>
                        </td>
                        <td>
                            <button >
                                <router-link :to="{name: 'driverById', params:{ id: driver.driver_id }}">
                                    <i class="fa-solid fa-circle-info text-center cursor-pointer pl-4" title="Details">                                    
                                    </i>                                    
                                </router-link>
                            </button>
                        </td>
                        
                        </tr>

                    </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Sidebar from '@/layout/sidebar.vue'
import NameCard from '@/components/Contactcard.vue'
import Card from '@/components/Card.vue'
import Table from '@/components/table/table.vue'
import MobileMenu from '@/layout/mobilemenu/menu.vue'
import Auth from '@/helpers/auth/auth.ts'

    export default {
        components: {
            Card,
            MobileMenu,
            NameCard,
            Sidebar,
            Table
        },
        data() {
            return {
                drivers:[],
                driver:'',
                loading:false

            }
        },
        methods: {
            RegisteredDrivers(){
                this.loading = true;
                Auth.registeredDrivers().then(res => {
                    let data = res.data.data;
                    this.drivers = data;
                    console.log(this.driver);
                    this.loading = false;
                        
                }).catch(err => {
                    this.loading = false;
                    console.error('Error fetching activities:', err);
                    localStorage.clear();                   
                })
            },
            goToRoute(){
               this.$router.push('/drivers/driver-by-id/')
            }
        },
        mounted(){
            this.RegisteredDrivers()
        }

    }
</script>

<style>
.search-input{
    background: #F6F6F6 url("/public/assets/search.svg") no-repeat 13px center;
}
.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #000;
  box-shadow: 32px 0 #000, -32px 0 #000;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: #FFF2;
    box-shadow: 32px 0 #FFF2, -32px 0 #000;
  }
  50% {
    background-color: #000;
    box-shadow: 32px 0 #FFF2, -32px 0 #FFF2;
  }
  100% {
    background-color: #FFF2;
    box-shadow: 32px 0 #000, -32px 0 #FFF2;
  }
}
      
</style>