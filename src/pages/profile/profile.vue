<template>
    <div class="flex flex-row absolute">
        <div class="hidden md:flex flex-col w-[372px] h-screen">
            <Sidebar />
        </div>       
        <div class="md:hidden fixed  h-10 mt-2  left-[20px]">
            <MobileMenu />
        </div>  
        <div class=" flex flex-col h-screen">
            <div class="flex flex-row justify-start mt-10 md:ml-10">
                <div class="flex flex-row top-12 md:h-[39px] md:left-[428px] font-bold">                    
                    <div class="hidden md:block">
                        Profile                    
                    </div>                    
                </div>    
            </div>
            <div class="flex flex-row  mt-11 w-[800px] ml-5 h-80 p-1 border rounded-xl">
                <div class="flex flex-col w-screen h-full ml-2">
                    <div class="flex flex-row w-full mb-2 ">
                        <p class="font-bold"> Personal Information </p>
                    </div>
                    <div class="flex flex-row w-full mb-2 justify-end">
                        <!-- hesoyam -->
                    </div>
                    <div class="flex flex-row gap-52 w-full mb-2 pb-6">
                        <div class="flex flex-col w-44">
                            <div class="flex flex-row text-grey">Fullname</div>
                            <div class="flex flex-row">{{data.fullname}}</div>
                        </div>
                        <div class="flex flex-col w-44">
                            <div class="flex flex-row text-grey">Referral Code</div>
                            <div class="flex flex-row" v-if="data.referral == null">
                                Null
                            </div>
                            <div class="flex flex-row" v-else>
                                {{data.referral}}
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row gap-52 w-full mb-2 pb-6">
                        <div class="flex flex-col w-44">
                            <div class="flex flex-row text-grey">Email Address</div>
                            <div class="flex flex-row">{{data.email}}</div>
                        </div>
                        <div class="flex flex-col w-44">
                            <div class="flex flex-row text-grey">Phone</div>
                            <div class="flex flex-row">{{data.phone}}</div>
                        </div>
                    </div>
                    <!-- <div class="flex flex-row w-full mb-2">
                        <div class="flex flex-col w-44">
                            <div class="flex flex-row text-grey">Bio</div>
                            <div class="flex flex-row">{{Bio}}</div>
                        </div>
                        
                    </div> -->
                    
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
                data:null,
                key1:0

            }
        },
        methods: {
            autUser(){
                Auth.authUser().then(res => {
                    let data = res.data.data
                    this.data =  data
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