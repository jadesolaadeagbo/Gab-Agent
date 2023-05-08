<template>
    <div class="flex flex-row absolute">  
        <div class="flex flex-col">
            <div class="hidden md:flex flex-col w-[372px] h-screen">
                <Sidebar />
            </div>     
            <div class="md:hidden  absolute h-10 mt-2  left-[20px]">
                <MobileMenu />
            </div>  
        </div>      

        <div class="flex flex-col h-screen">
            <div class="flex flex-row justify-start mt-10 md:ml-10">
                <div class="flex flex-row top-12 md:h-[39px] md:left-[428px] font-bold">                    
                    <div class="hidden md:block">
                        Dashboard                    
                    </div>
                    <div class="hidden ml-[500px] w-[200px] hover:bg-grey bg-black text-sm md:flex md:flex-row border rounded-xl border-grey-silver">
                        <button @click="goToRoute()" class="flex flex-row  text-white justify-center items-center ml-4">
                            Withdraw Commission
                        </button>
                    </div>
                </div>    
            </div>                                   
            <div class=" ml-8  mt-60 md:mt-10 gap-6 items-center h-[39px] md:left-[390px] font-bold">
                <!-- <div class="flex flex-row justify-center "> -->
                    <div class="grid md:grid-cols-3">
                        <div class="flex flex-col mr-5">
                            <Card 
                                :color="'bg-light-blue'"
                                :width='"w-[220px]"'
                                :height='"h-[203px]"'
                                :img="'walletbalicon.png'"
                                :amount="user.wallet"
                                :label="'wallet balance'"
                                :key="key1"
                            />
                        </div>
                        <div class="flex flex-col mr-5">
                            <Card 
                                :color="'bg-cream'"
                                :width='"w-[220px]"'
                                :height='"h-[203px]"'
                                :img="'percentageicon.png'"
                                :amount="user.percentage"
                                :label="'percentage'"
                                :key="key1"
                            />
                        </div>
                        <div class="flex flex-col mr-5">
                            <Card 
                                :color="'bg-olive-green'"
                                :width='"w-[220px]"'
                                :height='"h-[203px]"'
                                :img="'briefcase.png'"
                                :amount="user.amount"
                                :label="'salary'"
                                :key="key1"
                            />
                        </div>
                    </div>
                    <div class="relative mt-16 justify-stretch flex flex-row">                        
                        <div class="flex flex-col">
                            <div class="ml-5 pb-2 flex flex-row">
                                Activities
                            </div> 
                            <div class="ml-5 pb-2 flex flex-row">
                                <Table 
                                    :body="user.drivers"
                                    :key="key1"
                                />
                                <!-- <Table :key="key1" />  -->
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
import Table from '@/components/table/table.vue'

    export default {
        components: {
            MobileMenu,
            Card,
            NameCard,
            Sidebar,
            Table
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
                key1:0
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