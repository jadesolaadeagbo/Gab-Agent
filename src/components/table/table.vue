<template>
    <div class=" overflow-x-auto lg:overflow-hidden scrollbar-hide" >
        <table>
            <thead class="border border-b-grey border-t-0 border-r-0 border-l-0">
                <tr class="flex justify-between lg:gap-20 gap-8 "> 
                    <th class="p-3 text-sm font-semibold text-grey text-left">#</th>   
                    <th class="p-3 text-sm font-semibold text-grey text-left">
                        {{ $t('driver') }}
                    </th>                
                    <th class="p-3 text-sm font-semibold text-grey text-left no-wrap-text">
                        {{ $t('registration_date') }}
                    </th>
                    <th class="p-3 text-sm font-semibold text-grey text-left no-wrap-text">
                        {{ $t('verification_status') }}
                    </th> 
                    <th class="p-3 text-sm font-semibold text-grey text-left no-wrap-text">
                        {{ $t('trips_completed') }}
                    </th>                                                       
                </tr>
            </thead>
            <tbody class="divide-y divide-grey-silver">
                <tr v-for="(item, index) in body" :key="index" class="border border-b-grey border-t-0 border-r-0 border-l-0">
                    <td class="p-3 font-normal text-sm text-black whitespace-nowrap bg-silver h-[30px] w-[31px]">{{index+1}}</td>
                    <td class="p-3 font-normal text-sm border text-black whitespace-nowrap">{{item.driver.fullname}}</td>
                    <td class="p-3 font-normal text-sm border text-black whitespace-nowrap">{{ dateFormat(item.driver.created_at) }}</td>
                    <td class="p-3 font-normal text-sm border bg-olive-green text-black whitespace-nowrap" v-if="item.driver.is_active == 1">
                        Active
                    </td>                    
                    <td class="p-3 font-normal text-sm border text-black whitespace-nowrap" v-else>
                        Not Active
                    </td>                    
                </tr>                               
            </tbody>
        </table>        
    </div>
</template>
<script>
    export default {
        props: {            
            body: Array
        },
        data() {
            return {
                body: this.$props.body,
                rowKey:0
            }
        },
        methods: {
            dateFormat(e){
                var date = new Date(e)
                return date.toDateString()
            }
        },

    }
</script>

<style>
.no-wrap-text{
    white-space: nowrap;
}
</style>