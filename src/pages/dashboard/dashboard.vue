<template>
    <div class="w-full pl-10 lg:pl-0">     
        <div class="w-full">
            <!-- Search Bar -->
            <div class="py-10 border-b border-input-grey lg:flex justify-end items-center w-full gap-8 pr-16 hidden">
                <div class="w-full flex justify-end relative">
                    <input type="text" placeholder="Search" class="rounded-[28px] pl-12 w-1/2 text-lg outline-none h-[50px] bg-input-grey relative ">
                    <img src="/public/assets/search.svg" class="lg:right-[300px] right-[230px] top-[12px] absolute" alt="">
                </div>
                <span class="bg-input-grey p-3 rounded-full">
                    <img src="/public/assets/bell.svg" class="w-[40px]" alt="">
                </span>
                <img src="/public/assets/avatar.png" class="w-[50px]" alt="">

            </div>
                <div class="flex justify-between items-center mt-5 font-bold sm:w-[96%] w-[92%]">                    
                    <div>
                        <p class=" text-lg sm:text-2xl">Dashboard</p>                    
                    </div>
                    <div class="hover:bg-grey bg-black text-sm rounded-xl border-grey-silver">
                        <button @click="goToRoute()" class="text-white px-8 py-2 text-sm sm:text-lg">
                            Withdraw Commission
                        </button>
                    </div>
                </div>                             
            <div class=" mt-10 gap-6 font-bold">
                <div class="flex sm:flex-col lg:space-y-4 flex-col-reverse justify-center">
                    <div class="sm:grid sm:grid-cols-3 flex flex-col gap-5">
                        <div class="flex flex-col">
                            <Card 
                                :color="'bg-light-blue'"
                                :width='"lg:w-[270px] sm:w-[200px] w-[90%]"'
                                :height='"h-[203px]"'
                                :img="'wallet.svg'"
                                :amount="user.wallet"
                                :label="'Commission'"
                                :key="key1"
                                :progress = 50
                                :bgcolor="'black'"
                            />
                        </div>
                        <div class="flex flex-col">
                            <Card 
                                :color="'bg-cream'"
                                :width='"lg:w-[270px] sm:w-[200px] w-[90%]"'
                                :height='"h-[203px]"'
                                :img="'percentage.svg'"
                                :amount="user.percentage"
                                :label="'Percentage'"
                                :key="key1"
                                :progress = 6
                                :bgcolor="'gray'"
                            />
                        </div>
                        <div class="flex flex-col">
                            <Card 
                                :color="'bg-olive-green'"
                                :width='"lg:w-[270px] sm:w-[200px] w-[90%]"'
                                :height='"h-[203px]"'
                                :img="'suitcase.svg'"
                                :amount="user.amount"
                                :label="'Salary'"
                                :key="key1"
                                
                                
                            />
                        </div>
                    </div>
                    <span class="flex items-center gap-2 py-6 lg:py-0">
                        <i class="fa-solid fa-circle-info" style="color:grey"></i>
                        <p class="font-normal text-grey w-1/2 lg:w-1/4 text-[12px]">Commission can be withdrawn when money is above #5000</p>
                    </span>                    
                </div>

                    <div class="relative mt-8 justify-stretch flex flex-row">                        
                        <div class="flex flex-col">
                            <div class=" pb-2 flex flex-row">
                                Activities
                            </div> 
                            <div class="lg:gap-4 lg:justify-center sm:mt-0 mt-8 font-bold">
                                <Dashboardtable :body="user.drivers"
                                    :key="key1"/>
                            </div>
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
import Auth from '@/helpers/auth/auth.ts'
import MobileMenu from '@/layout/mobilemenu/menu.vue'
import Dashboardtable from '../../components/table/dashboardtable.vue'

    export default {
        components: {
            MobileMenu,
            Card,
            NameCard,
            Sidebar,
            Dashboardtable,
        },
        data() {
            return {
                user:{
                    id:null,    
                    fullname:null,
                    email:null,
                    phone:null,
                    is_active:null,
                    wallet:null,
                    percentage:null,
                    amount: 0,
                    drivers: null,
                    referral:null
                },
                key1:0,
                currentProgress: 50,
            }
        },
        methods: {
            goToRoute(){
                this.$router.push('/commission')
            },
            autUser(){
                Auth.authUser().then(res => {
                    let data = res.data.data
                    this.user = {
                        id:data.id,    
                        fullname:data.fullname,
                        email:data.email,
                        phone:data.phone,
                        is_active:data.is_active,
                        wallet:data.wallet,
                        percentage:data.percentage,
                        drivers: data.drivers,
                        amount:data.salary,
                        referral:data.referral
                    }
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