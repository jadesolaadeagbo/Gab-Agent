<template>
  <!-- Responsiveness on larger screens -->
    <div class=" lg:items-start gap-60 hidden ">
      <sidebar :active_route="active_route" class=""/>
      <router-view class="pl-60"></router-view>        
    </div>

      <!-- NavBar -->
      <div class="w-full bg-black py-7 px-7 flex justify-between lg:hidden">
        <img src="/public/assets/gablogowhite.png" class="w-[50px]" alt="">
        <button type="button" @click="toggleShow"> 
            <i class ="fa-solid" style="color: white" :class="{'fa-xmark':showBar,'fa-bars':!showBar}"></i>
        </button>        
      </div>

      <!-- Responsiveness on smaller screens -->
      <div class="flex flex-row-reverse lg:hidden">
        <div v-if="showBar" class="absolute z-[50]">
            <sidebar></sidebar>
          </div> 
          <router-view/>  
      </div>

  </template>

<script>

import sidebar from './sidebar.vue';

export default {
  components: {
    sidebar,
  },
  data() {
    return {
      active_route: null,
      showBar: false,
    };
  },
  methods:{
    toggleShow(){
      this.showBar = !this.showBar;
      console.log(this.showBar);
    }
  },
  created() {
    this.active_route = this.$route.path;
  },
};
</script>