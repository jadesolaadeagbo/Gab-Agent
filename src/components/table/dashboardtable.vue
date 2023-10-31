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

        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 mt-16">
                    <thead>
                        <tr>
                        <th scope="col" class=" py-3 text-xs text-center font-medium text-gray-500 uppercase">#</th>
                        <th scope="col" class="py-3  text-xs font-medium text-gray-500 uppercase text-center">{{ $t('driver') }}</th>
                        <th scope="col" class="py-3  text-xs font-medium text-gray-500 uppercase text-center">{{ $t('date') }}</th>
                        <th scope="col" class="py-3 text-xs font-medium text-gray-500 uppercase">{{ $t('trip_price') }}</th>
                        <th scope="col" class="py-3  text-xs font-medium text-gray-500 uppercase">{{ $t('percentage_per_price') }}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700" v-for="activity in activities.data" :key="activity.index">
                        <tr>
                        <td class="text-center py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">{{ activity.driver_id}}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">{{ activity.fullname }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200 text-center">{{ activity.date }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                            {{ activity.gab_quota }}
                        </td>                        
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-center">
                            {{ activity.agent_quota }}
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