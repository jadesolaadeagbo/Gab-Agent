<template>
    <div class="" >
        <form class="flex justify-between items-center" @submit.prevent="AgentActivities()">
            <div class="flex gap-7">
                <div class="flex gap-4">
                <label>From</label>
                <input type="date" class="border" v-model="start_date">
                </div>
                <div class="form-group flex gap-4">
                <label>To</label>
                <input class="form-control border"  type="date" v-model="end_date">
            </div>
            </div>

            <button class="btn btn-info col-6 text-white bg-black py-3 px-6  mr-10 rounded-lg" type="submit">Generate</button>
        </form>

        <table class="lg:gap-4 lg:justify-center sm:mt-0 mt-8 font-bold">
            <thead class="border border-b-grey border-t-0 border-r-0 border-l-0">
                <tr class=""> 
                    <th class=" text-sm font-semibold text-grey text-left px-16 py-4">#</th>   
                    <th class=" text-sm font-semibold text-grey px-16 py-4">
                        {{ $t('driver') }}
                    </th>                
                    <th class=" text-sm font-semibold text-grey px-16 py-4">
                        {{ $t('date') }}
                    </th>
                    <th class=" text-sm font-semibold text-grey px-16 py-4">
                        {{ $t('trip_price') }}
                    </th>           
                    <th class=" text-sm font-semibold text-grey px-16 py-4">
                        {{ $t('percentage_per_price') }}
                    </th>                                                        
                </tr>
            </thead>
 
            <tbody class="" v-for="activity in activities.data" :key="activity.id">
                <tr>
                    <td class=" text-sm font-medium text-gray-800 dark:text-gray-200 text-center py-4">{{ activity.driver_id }}</td>
                    <td class=" text-sm text-gray-800 dark:text-gray-200 text-center py-4">{{ activity.fullname }}</td>
                    <td class="text-sm text-gray-800 dark:text-gray-200 text-center py-4">{{ activity.date }}</td>
                    <td class=" text-sm font-medium text-center py-4">
                        {{ activity.gab_quota }}
                    </td>     
                    <td class=" text-sm font-medium text-center py-4">
                        {{activity.agent_quota}}
                    </td>
                </tr>   

                    </tbody>
        </table>        
    </div>
</template>
<script>
import Auth from '@/helpers/auth/auth.ts'
// import { all } from 'axios';

    export default {
        props: {            
            body: Array
        },
        data() {
            return {
                activities: [],
                form:{
                    start_date:'',
                    end_date:''
                },
                activitiesData:[],
                // activities_date: '',
                filteredData:[]
            }
        },
        methods: {
            AgentActivities() {
                Auth.activities(this.form)
                .then((res) => {
                    let data = res.data.data;
                    this.activities = data;
                    this.activitiesData = this.activities.data;

                    const filteredData = this.activitiesData.filter((activity) => {
                        const activityDate = new Date(activity.date);
                        const startDate = new Date(this.form.start_date);
                        const endDate = new Date(this.form.end_date);

                        return activityDate >= startDate && activityDate <= endDate;
                    });

                    this.filteredData = filteredData;
                    console.log("clicked");
    })
                .catch((err) => {
                    console.error('Error fetching activities:', err);
                    localStorage.clear();
                });
            },
        },
    }
</script>

<style>
.no-wrap-text{
    white-space: nowrap;
}
</style>