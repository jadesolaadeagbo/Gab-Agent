<template>
    <div class="w-full">
        <div class="w-full">
            <!-- Search Bar -->
            <div class="py-10 border-b border-input-grey lg:flex justify-end items-center w-full gap-8 pr-16 hidden">
                <div class="w-full flex justify-end relative">
                    <input type="text" :placeholder="$t('search')" class="rounded-[28px] pl-12 w-1/2 text-lg outline-none h-[50px] bg-input-grey relative search-input">
                </div>
                <span class="bg-input-grey p-3 rounded-full">
                    <img src="/public/assets/bell.svg" class="w-[40px]" alt="">
                </span>
                <img src="/public/assets/avatar.png" class="w-[50px]" alt="">

            </div>
            <div class="pl-5">                    
                <div class="lg:block text-[24px] font-bold py-10">
                        {{ $t('profile') }}                  
                </div>  
                
                <div class="border border-border-grey px-10 py-4 rounded-[8px] mr-16 mb-5 flex">
                    <div class="flex items-center gap-10 relative">
                        <img src="/public/assets/bigavatar.png" class="w-[150px]" alt="">
                        <div>
                            <div class="flex flex-row">{{user.fullname}}</div>
                            <p class="pt-4 lg:pt-0">{{ $t('gab_agent') }}</p>
                            <!-- <div class="flex flex-row">{{data.country}}</div> -->
                        </div>
                        </div> 
                        
                        <button class="absolute lg:right-40 mt-4 border border-border-grey px-3 py-2 items-center rounded-3xl flex gap-2 right-24"><p>{{ $t('edit') }}</p>
                            <img src="/public/assets/edit.svg" alt="">
                        
                        </button>
                    </div>

            
                <div class="border border-border-grey px-4 pb-4 pt-8 my-10 rounded-[8px] mr-16 relative">
                        <p class="font-bold text-[20px] pb-4"> {{ $t('personal_information') }} </p>
                        
                    <div class="flex sm:flex-row flex-col sm:gap-52 w-full mb-2 pb-6">
                        <div class="flex flex-col">
                            <div class="flex sm:flex-row flex-col text-grey">{{ $t('first_name') }}</div>
                            <div class="flex flex-row">{{firstname}}</div>
                        </div>
                        <div class="flex flex-col">
                            <div class="flex sm:flex-row flex-col text-grey">{{ $t('last_name') }}</div>
                            <div class="flex flex-row">{{lastname}}</div>

                            <!-- <div class="flex flex-row" v-if="data.referral == null">
                                Null
                            </div>
                            <div class="flex flex-row" v-else>
                                {{data.referral}}
                            </div> -->
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:gap-[185px] w-full mb-2 pb-6">
                        <div class="flex flex-col">
                            <div class="flex sm:flex-row flex-col text-grey">{{ $t('email_address') }}</div>
                            <!-- <div class="flex flex-row">{{data.email}}</div> -->
                        </div>
                        <div class="flex flex-col">
                            <div class="flex sm:flex-row flex-col text-grey">{{ $t('phone') }}</div>
                            <!-- <div class="flex flex-row">{{data.phone}}</div> -->
                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row w-full mb-2">
                        <div class="flex flex-col">
                            <div class="flex sm:flex-row flex-col text-grey">{{ $t('bio') }}</div>
                            <!-- <div class="flex flex-row">{{Bio}}</div> -->
                        </div>
                        
                    </div>
                    <button class="absolute lg:right-24 top-8 border border-border-grey px-3 py-2 items-center rounded-3xl flex gap-2 right-8"><p>{{ $t('edit') }}</p>
                            <img src="/public/assets/edit.svg" alt="">
                        
                        </button>
                </div>

                <div class="border border-border-grey px-4 pb-4 pt-8 my-10 rounded-[8px] mr-16 relative">
                        <p class="font-bold text-[20px] pb-4"> {{ $t('address') }} </p>
                        
                    <div class="flex sm:flex-row flex-col sm:gap-56 w-full mb-2 pb-6">
                        <div class="flex flex-col">
                            <div class="flex sm:flex-row flex-col text-grey">{{ $t('country') }}</div>
                            <!-- <div class="flex flex-row">{{data.fullname}}</div> -->
                        </div>
                        <div class="flex flex-col">
                            <div class="flex sm:flex-row flex-col text-grey">{{ $t('city') }}</div>
                            <!-- <div class="flex flex-row">{{data.city}}</div> -->

                        </div>
                    </div>
                    <div class="flex flex-col sm:flex-row sm:gap-[265px] w-full mb-2 pb-6">
                        <div class="flex flex-col">
                            <div class="flex sm:flex-row flex-col text-grey">{{ $t('id') }}</div>
                            <!-- <div class="flex flex-row">{{data.id}}</div> -->
                        </div>
                        <div class="flex flex-col">
                            <div class="flex sm:flex-row flex-col text-grey">{{ $t('postal_code') }}</div>
                            <!-- <div class="flex flex-row">{{data.postal_code}}</div> -->
                        </div>
                    </div>
                
                    <button class="absolute lg:right-24 right-8 top-8 border border-border-grey px-3 py-2 items-center rounded-3xl flex gap-2"><p>{{ $t('edit') }}</p>
                            <img src="/public/assets/edit.svg" alt="">
                        
                        </button>
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
                key1:0,
                user: {
                        id:null,    
                        fullname:null,
                        email:null,
                        phone:null
                    },
                    firstname: '',
                    lastname:''

            }
        },
        mounted(){
            this.autUser(),
            this.splitFullName(this.user.fullname)

        },
        methods: {
            autUser(){
                Auth.authUser().then(res => {
                    let data = res.data.data
                    this.user = {
                        id:data.id,    
                        fullname:data.fullname,
                        email:data.email,
                        phone:data.phone
                    },
                    this.key1++
                        
                }).catch(err => {
                    localStorage.clear()                    
                })
            },
            splitFullName(fullname) {
                const parts = fullname.split(" ");
                this.firstName = parts[0] || "";
                this.lastName = parts.slice(1).join(" ") || "";
            },
        },

    }
</script>

<style>
.search-input{
    background: #F6F6F6 url("/public/assets/search.svg") no-repeat 13px center;

}
</style>