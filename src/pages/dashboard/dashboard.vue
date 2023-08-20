<template>
    <div class="w-11/12 sm:mx-auto overflow-hidden">     
        <div class="w-full">
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
                <div class="flex justify-between items-center mt-5 font-bold sm:w-[96%] w-[92%] lg:pl-0">                    
                    <div>
                        <p class=" text-lg sm:text-2xl">{{$t('dashboard')}}</p>                    
                    </div>
                    <div class="hover:bg-grey bg-black text-sm rounded-xl border-grey-silver">
                        <button @click="goToRoute()" class="text-white px-8 py-2 text-[10px] sm:text-lg">
                            {{ $t('withdraw_commission') }}
                        </button>
                    </div>
                </div>                             
            <div class=" mt-10 gap-6 font-bold">
                <div class="flex flex-col sm:flex-row gap-3 lg:gap-0 lg:w-full justify-center sm:justify-stretch sm:mx-auto sm:flex-wrap lg:flex-nowrap">
                    <div class="flex flex-col w-[330px]">
                            <Card 
                                :color="'bg-light-blue'"
                                :width='"lg:w-[300px] w-full"'
                                :height='"h-[203px]"'
                                :img="'wallet.svg'"
                                :amount="user.wallet"
                                :label="$t('commission')"
                                :key="key1"
                                :progress = 50
                                :bgcolor="'black'"
                            />
                        </div>
                        <div class="flex flex-col w-[330px]">
                            <Card 
                                :color="'bg-cream'"
                                :width='"lg:w-[300px] w-full"'
                                :height='"h-[203px]"'
                                :img="'percentage.svg'"
                                :amount="user.percentage"
                                :label="$t('percentage')"
                                :key="key1"
                                :progress = 6
                                :bgcolor="'gray'"
                            />
                        </div>
                        <div class="flex flex-col w-[330px]">
                            <Card 
                                :color="'bg-olive-green'"
                                :width='"lg:w-[300px] w-full"'
                                :height='"h-[203px]"'
                                :img="'suitcase.svg'"
                                :amount="user.amount"
                                :label="$t('salary')"
                                :key="key1"
                            />
                        </div>
                </div>
                <!-- <div class="flex sm:flex-col lg:space-y-4 flex-col-reverse justify-center">
                    <div class=" flex flex-col sm:flex-row sm:flex-wrap lg:gap-5 gap-5 sm:w-11/12 sm:m-auto lg:w-auto">
                        <div class="flex flex-col w-full">
                            <Card 
                                :color="'bg-light-blue'"
                                :width='"lg:w-[300px] sm:w-1/3 w-[90%]"'
                                :height='"h-[203px]"'
                                :img="'wallet.svg'"
                                :amount="user.wallet"
                                :label="'Commission'"
                                :key="key1"
                                :progress = 50
                                :bgcolor="'black'"
                            />
                        </div>
                        <div class="flex flex-col w-full">
                            <Card 
                                :color="'bg-cream'"
                                :width='"lg:w-[300px] sm:w-1/3 w-[90%]"'
                                :height='"h-[203px]"'
                                :img="'percentage.svg'"
                                :amount="user.percentage"
                                :label="'Percentage'"
                                :key="key1"
                                :progress = 6
                                :bgcolor="'gray'"
                            />
                        </div>
                        <div class="flex flex-col w-full">
                            <Card 
                                :color="'bg-olive-green'"
                                :width='"lg:w-[300px] sm:w-1/3 w-[90%]"'
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
                </div> -->

                    <div class="relative mt-8 justify-stretch flex flex-row">                        
                        <div class="flex flex-col">
                            <div class=" pb-2 flex flex-row">
                                {{ $t('activities') }}
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

<style>
.search-input{
    background: #F6F6F6 url("/public/assets/search.svg") no-repeat 13px center;

}
</style>