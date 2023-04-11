<template>
    <div class="absolute">
        <div class="flex flex-row bg-grey h-14 p-3 w-[470px]">
            <button @click="toggle" data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                <span class="sr-only">O2pen main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>        
            <div v-if="open" class="flex flex-row gap-2.5 w-[400px] pl-4">
                <a :href="dashboard" 
                   :class="active_route === dashboard 
                    ? 'flex justify-center flex-col p-2 rounded-lg bg-white mt-2 hover:bg-grey hover:text-white' 
                    : 'flex justify-center flex-col p-2 rounded-lg bg-white mt-2 hover:bg-grey hover:text-white'" >
                    Dashboard
                </a>
                <a :href="drivers" 
                   :class="active_route === drivers 
                    ? 'flex justify-center flex-col p-2 rounded-lg bg-white mt-2 hover:bg-grey hover:text-white' 
                    : 'flex justify-center flex-col p-2 rounded-lg bg-white mt-2 hover:bg-grey hover:text-white'" >
                    Registered Users
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import path from '@/routes/path.ts'
 export default {
    data() {
        return {
            dashboard: path.DASHBOARD,
            drivers: path.DRIVERS,
            open:false,
            active_route: null            
        }
    },
  methods: {
    toggle(){
        this.open = !this.open
    }
  },
  created() {
        this.active_route = this.$route.path
    }
 }
</script>