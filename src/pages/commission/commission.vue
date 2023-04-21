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
                <div class="md:w-[268px] ml-5 mt-24 md:top-12 md:h-[39px] md:left-[428px] font-bold">
                    <h1>REQUEST WITHDRAWAL</h1>
                </div>    
            </div>
            <div class="relative ml-12 gap-4 justify-center mt-14 md:mt-14 items-center font-bold">
                <small class="text-grey mb-4"> you cannot withdraw below the {{user?.threshhold}}</small>
                <form @submit.prevent="request()">
                    <input 
                            required 
                            type="number" 
                            step="any" 
                            placeholder="0" 
                            class="w-full mt-2 h-12 pl-2 rounded-2xl border"
                            v-model="amount"
                    />

                    <button class="bg-olive-green mt-4 p-3 rounded-xl hover:bg-tahiti ">
                        Request Withdrawal
                    </button>
                </form>         

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
import Request from '@/helpers/request/request.ts'

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
                key1:0,
                user:null,
                amount:0


            }
        },
        methods: {
            autUser(){
                Auth.authUser().then(res => {
                    let data = res.data.data
                    this.user =  data                    
                    this.key1++
                        
                }).catch(err => {
                    localStorage.clear()                    
                })
            },
            request(){
                const post = {
                    user_id: this.user.agent_id,
                    request_amt: this.amount
                }
                Request.request(post).then(res => {
                    alert(res.data.message)
                }).catch(err => {                    
                    alert(err.response.data.message)
                })             
            }

        },        
        created() {
            this.autUser()
        },


    }
</script>