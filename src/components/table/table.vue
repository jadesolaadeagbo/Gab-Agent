<template>
    <div class="relative overflow-x-auto scrollbar-hide w-full">
        <table>
            <thead class="border border-b-grey border-t-0 border-r-0 border-l-0">
                <tr> 
                    <th class="p-3 text-sm font-semibold text-grey tracking-wide text-left">#</th>   
                    <th class="p-3 text-sm font-semibold text-grey tracking-wide text-left">
                        Driver
                    </th>                
                    <th class="p-3 text-sm font-semibold text-grey tracking-wide text-left">
                        Registration Date
                    </th>
                    <th class="p-3 text-sm font-semibold text-grey tracking-wide text-left">
                        Verification Status
                    </th>
                    <th class="p-3 text-sm font-semibold text-grey tracking-wide text-left">
                        Trips Completed
                    </th>
                                             
                </tr>
            </thead>
            <tbody class="divide-y divide-grey-silver">
                <tr v-for="(item, index) in body" :key="index" class="border border-b-grey border-t-0 border-r-0 border-l-0">
                    <td class="p-3 font-normal text-sm text-black whitespace-nowrap bg-silver h-[30px] w-[31px]">{index+1}</td>                                        
                    <td class="p-3 font-normal text-sm text-black whitespace-nowrap">{item}</td>                                        
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
                header: this.$props.header,
                body: this.$props.body,
                rowKey:0
            }
        },

    }
</script>