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
                <div class="flex justify-between items-center mt-5 sm:w-[96%] w-[92%] lg:pl-0">                    
                    <div>
                        <p class=" text-lg sm:text-2xl">{{$t('dashboard')}}</p>                    
                    </div>
                    <div class="hover:bg-grey bg-black text-sm rounded-xl border-grey-silver">
                        <button @click="goToRoute()" class="btn btn-info col-6 text-white bg-black py-2 px-6 text-[18px] rounded-lg" >
                            {{ $t('withdraw_commission') }}
                        </button>
                    </div>
                </div>                             
            <div class=" mt-10 gap-6">
                <div class="flex flex-col sm:flex-row gap-3 lg:gap-0 lg:w-full justify-center sm:justify-stretch sm:mx-auto sm:flex-wrap lg:flex-nowrap font-bold">
                    <div class="flex flex-col w-[330px]" title="Agent's commission">
                            <Card 
                                :width='"lg:w-[300px] w-full"'
                                :height='"h-[203px]"'
                                :amount="formatCommission(pay.commission)"
                                :label="$t('commission')"
                                :key="key1"
                                :progress = 50
                                :color="'bg-green'"
                                :img="'wallet.svg'"
                                :icon = "'fa-wallet'"
                                
                            />
                        </div>
                        <div class="flex flex-col w-[330px]" title="Percentage accrued to agent">
                            <Card 
                                :width='"lg:w-[300px] w-full"'
                                :height='"h-[203px]"'
                                :amount="pay.percentage"
                                :label="$t('percentage')"
                                :key="key1"
                                :progress = 6
                                :color="'bg-blue'" 
                                :img="'percentage.svg'"
                                :icon="'fa-percent'"
                            />

                        </div>
                        <div class="flex flex-col w-[330px]" title="Agent's salary">                         
                            <Card :class="{'hidden': !showClass}"
                                :width='"lg:w-[300px] w-full"'
                                :height='"h-[203px]"' 
                                :amount="pay.salary"
                                :label="$t('salary')"
                                :key="key1"
                                :color="'bg-red'"
                                :img="'suitcase.svg'"
                                :icon="'fa-suitcase'"
                            />
                        </div>
                </div>
                    <div class="">                        
                        <div class="flex flex-col">
                            <div class=" pb-2 flex flex-row pt-10 text-lg sm:text-2xl">
                                {{ $t('activities') }}
                            </div> 
                            <Dashboardtable/>
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
                key1:null,
                loading: false,
                pay:{
                  commission:'',
                  percentage:'',
                  salary:''
                }
            }
        },
        computed: {
          showClass() {
           return this.pay.salary !== 0;
          },
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
                    this.key1 ++;
                        
                }).catch(err => {
                    localStorage.clear()                    
                })
            },
            commission(){
                this.loading = true;
                Auth.commission().then(res => {
                    let data = res.data.data;
                    this.pay = data;
                    console.log(this.pay);
                    this.loading = false;
                        
                }).catch(err => {
                    this.loading = false;
                    console.error('Error fetching activities:', err);
                    localStorage.clear();                   
                })
            },
            formatCommission(value) {
                const commission = parseFloat(value);

                if (!isNaN(commission)) {
                    return commission.toFixed(1);
                } else {
                    return ''; 
                }
            },
        },
        mounted (){
            this.autUser(),
            this.commission()
        },

    }
</script>

<style>
.search-input{
    background: #F6F6F6 url("/public/assets/search.svg") no-repeat 13px center;

}
</style>