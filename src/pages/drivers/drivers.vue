<template>
    <div class="w-full pl-10 lg:pl-0">

        <div class="w-full">
            <!-- Search Bar -->
            <div class="py-10 border-b border-input-grey lg:flex justify-end items-center w-full gap-8 pr-16 hidden">
                <div class="w-full flex justify-end relative">
                    <input type="text" placeholder="Search" class="rounded-[28px] pl-12 w-1/2 text-lg outline-none h-[50px]  relative search-input bg-input-grey">
                    <!-- <img src="/public/assets/search.svg" class="lg:right-[360px] right-[230px] top-[12px] absolute" alt=""> -->
                </div>
                <span class="bg-input-grey p-3 rounded-full">
                    <img src="/public/assets/bell.svg" class="w-[40px]" alt="">
                </span>
                <img src="/public/assets/avatar.png" class="w-[50px]" alt="">

            </div>
            <div class="sm:flex sm:justify-between items-center mt-3 font-bold">                    
                <div class=" text-[24px]">
                    Registered Drivers                    
                </div>   
            </div>
            </div>
           <div class="lg:gap-4 lg:justify-center sm:mt-14 mt-8 font-bold">
                <Table 
                    :body="drivers"
                />      
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
            key1:0

            }
        },
        methods: {
            autUser(){
                Auth.authUser().then(res => {
                    let data = res.data.data
                    this.drivers =  data.drivers                    
                    this.key1++
                        
                }).catch(err => {
                    localStorage.clear()                    
                })
            }
        },
        created() {
            this.autUser()
        },

    }
</script>

<style>
.search-input{
    background: #F6F6F6 url("/public/assets/search.svg") no-repeat 13px center;

}
</style>