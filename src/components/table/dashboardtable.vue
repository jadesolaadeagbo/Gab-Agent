<template>
    <div class="mb-10" >
        <form class="flex justify-between items-center py-10 " @submit.prevent="AgentActivities()">
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
        <div v-if="loading===true">
            <span class="flex justify-center items-center w-full pt-20 ">
                <span class="loader"></span>
            </span>
        </div>
        <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 mt-5" v-else>
                    <thead>
                        <tr>
                        <th scope="col" class=" py-3 text-xs text-center text-gray-500 uppercase">#</th>
                        <th scope="col" class="py-3  text-xs text-gray-500 uppercase text-center">{{ $t('driver') }}</th>
                        <th scope="col" class="py-3  text-xs text-gray-500 uppercase text-center">{{ $t('date') }}</th>
                        <th scope="col" class="py-3 text-xs text-gray-500 uppercase">{{ $t('trip_price') }}</th>
                        <th scope="col" class="py-3  text-xs text-gray-500 uppercase">{{ $t('percentage_per_price') }}</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 dark:divide-gray-700" v-for="(activity, index) in activities.data" :key="index">
                        <tr>
                        <td class="text-center py-4 whitespace-nowrap text-sm text-gray-600">{{ index + 1 }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-center">{{ activity.fullname }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-600  text-center">{{ activity.date }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-center">
                            {{ activity.gab_quota.toFixed(1) }}
                        </td>                        
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-center">
                            {{ activity.agent_quota.toFixed(1) }}
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
                loading:false,
                filteredData:[]
            }
        },
        methods: {
            AgentActivities() {
                this.loading=true;
                Auth.activities(this.form)
                .then((res) => {
                    let data = res.data.data;
                    this.activities = data;
                    console.log("clicked");
                    this.loading = false;
    })
                .catch((err) => {
                    console.error('Error fetching activities:', err);
                    localStorage.clear();
                });
            },
        },
        mounted(){
            this.AgentActivities()
        }    
        }
</script>

<style>
.no-wrap-text{
    white-space: nowrap;
}
.loader {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #000;
  box-shadow: 32px 0 #000, -32px 0 #000;
  position: relative;
  animation: flash 0.5s ease-out infinite alternate;
}

@keyframes flash {
  0% {
    background-color: #FFF2;
    box-shadow: 32px 0 #FFF2, -32px 0 #000;
  }
  50% {
    background-color: #000;
    box-shadow: 32px 0 #FFF2, -32px 0 #FFF2;
  }
  100% {
    background-color: #FFF2;
    box-shadow: 32px 0 #000, -32px 0 #FFF2;
  }
}
</style>