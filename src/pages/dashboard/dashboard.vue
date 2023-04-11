<template>
    <div class="flex flex-row absolute">        
        <div class="hidden md:flex flex-col w-[372px] h-screen">
            <Sidebar />
        </div>     
        <div class="md:hidden  absolute h-10 mt-2  left-[20px]">
            <MobileMenu />
        </div>  

        <div class=" flex flex-col h-screen">
            <div class="flex flex-row justify-center mt-10 md:ml-10">
                <div class="md:w-[168px] top-12 md:h-[39px] md:left-[428px] font-bold">
                    
                    <div class="hidden md:block">
                        Dashboard                    
                    </div>
                </div>    
            </div>
            <div class="grid md:grid-cols-3 gap-4 justify-center ml:3 md:ml-10 mt-14 md:mt-24 items-center h-[39px] left-[390px] font-bold">
                <div class="flex flex-col">
                    <NameCard 
                        :img="'user-nameicon.png'"
                        :name="user.fullname"
                        :label="'Agent Name'"
                        :key="key1"
                    />
                </div>    
                <div class="flex flex-col">
                    <NameCard 
                        :img="'emailicon.png'"
                        :name="user.email"
                        :label="'Agent Email'"
                        :key="key1"
                    />
                </div>    
                <div class="flex flex-col">
                    <NameCard 
                        :img="'contacticon.png'"
                        :name="user.phone"
                        :label="'Agent Number'"
                        :key="key1"
                    />
                </div>                     
            </div>
            <div class="w-[780px] ml-10 border border-grey mt-16 hidden md:flex flex-row items-center justify-center">
            </div>
            <div class="grid md:grid-cols-2 ml-4 mt-60 md:mt-10 gap-12 items-center h-[39px] md:left-[390px] font-bold">
                <!-- <div class="flex flex-row justify-center "> -->
                    <div class="flex flex-col mr-5">
                        <Card 
                            :color="'bg-light-blue'"
                            :width='"w-[364px]"'
                            :height='"h-[244px]"'
                            :img="'walletbalicon.png'"
                            :amount="user.wallet"
                            :label="'wallet balance'"
                            :key="key1"
                        />
                    </div>
                    <div class="flex flex-col mr-5">
                        <Card 
                            :color="'bg-cream'"
                            :width='"w-[364px]"'
                            :height='"h-[244px]"'
                            :img="'percentageicon.png'"
                            :amount="user.percentage"
                            :label="'percentage'"
                            :key="key1"
                        />
                    </div>
                <!-- </div> -->

            </div>
            
        </div>
        
        
    </div>
</template>

<script>
import Sidebar from '@/layout/sidebar.vue'
import NameCard from '@/components/Contactcard.vue'
import Card from '@/components/Card.vue'
import Auth from '@/helpers/auth/Auth.ts'
import MobileMenu from '@/layout/mobilemenu/menu.vue'

    export default {
        components: {
            MobileMenu,
            Card,
            NameCard,
            Sidebar
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
                    drivers: null
                },
                key1:0

            }
        },
        methods: {
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
                        drivers: data.drivers
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