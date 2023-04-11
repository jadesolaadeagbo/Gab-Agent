<template>
    <div class="flex flex-row absolute">
        <div class="hidden md:flex flex-col w-[372px] h-screen">
            <Sidebar />
        </div>       
        <div class="md:hidden fixed  h-10 mt-2  left-[20px]">
            <MobileMenu />
        </div>  
        <div class=" flex flex-col h-screen">
            <div class="flex flex-row justify-center mt-10 md:ml-10">
                <div class="md:w-[168px] mt-24 md:top-12 md:h-[39px] md:left-[428px] font-bold">
                    Registered Drivers
                </div>    
            </div>
            <div class="relative ml-2 gap-4 justify-center mt-14 md:mt-14 items-center font-bold">
                <Table 
                    :body="drivers"
                />      
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
import Auth from '@/helpers/auth/Auth.ts'

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