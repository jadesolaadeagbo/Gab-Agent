<template>
  <div>
    <div v-if="loading===true">
            <span class="flex ml-96 mt-[300px]">
                <span class="loader"></span>
            </span>
      </div>
      <div class="flex flex-wrap pl-20 pt-20" v-else>
        <div class="w-1/2 h-[400px]">
          <!-- <img :src="driver.picture" alt="" width="180px" height="150px"> -->
          <h1 class="text-2xl py-4"><b>Personal driver</b></h1>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col ">Name</p>
            <p class="flex flex-row text-grey">{{driver.fullname}}</p>
          </div>
          <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col">Gender</p>
            <p class="flex flex-row capitalize text-grey">{{ driver.gender}}</p>
          </div>
          <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col ">Date of Birth</p>
            <p class="flex flex-row text-grey">{{ formatDate(driver.dob) }}</p>
          </div>
          <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col">Active Status</p>
            <p v-if="driver.is_active == 0" class="flex flex-row text-grey">Active</p>
            <p v-if="driver.is_active == 1" class="flex flex-row text-grey">In-Active</p>
          </div>
          </div>


        </div>
        <div class="w-1/2 h-[400px]">
          <h1 class="text-2xl py-4"><b>Vehicle driver</b></h1>
          <div class="flex flex-col gap-4">
            <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col ">Vehicle Manufacturer</p>
            <p class="flex flex-row text-grey">{{ driver.vehicle.vehicle_manufacturer.name }}</p>
          </div>
          <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col ">Vehicle Model</p>
            <p class="flex flex-row text-grey">{{ driver.vehicle.vehicle_model.name }}</p>
          </div>
          <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col ">Vehicle Color</p>
            <p class="flex flex-row capitalize text-grey">{{ driver.vehicle.color }}</p>
          </div>
          <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col ">License Plate Number</p>
            <p class="flex flex-row capitalize text-grey">{{ driver.vehicle.plate_number }}</p>
          </div>
          <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col ">Driver License Number</p>
            <p class="flex flex-row text-grey">{{ driver.driver_license_number }}</p>
          </div>
          </div>


        </div>
        <div class="w-1/2">
          <h1 class="text-2xl py-4"><b>Guarantor Details</b></h1>

          <div class="flex flex-col gap-4">
            <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col">Guarantor Name</p>
            <p class="flex flex-row text-grey">{{ driver.guarantor.name }}</p>
          </div>
          <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col">Address</p>
            <p class="flex flex-row text-grey">{{driver.guarantor.address}}</p>
          </div>
          <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col">Guarantor Phone Number</p>
            <p class="flex flex-row text-grey">{{ driver.guarantor.phone }}</p>
          </div>
          <div class="flex flex-col">
            <p class="flex sm:flex-row flex-col ">Relationship</p>
            <p class="flex flex-row capitalize text-grey">{{ driver.guarantor.relationship }}</p>
          </div>
          </div>

        </div>
        <div class="w-1/2 ">
          <h1 class="text-2xl py-4"><b>Performance Metric</b></h1>

              <span>
                <p class="flex sm:flex-row flex-col text-grey">Rating</p>
                <p v-if="driver.average_rating > 3" class="flex flex-row text-grey"><span class=" badge badge-success">{{driver.average_rating}}</span></p>
                <p v-if="driver.average_rating == 0" class="flex flex-row"><span class=" badge badge-info text-grey">{{driver.average_rating}}</span></p>
                <p v-if="driver.average_rating < 0" class="flex flex-row"><span class=" badge badge-danger text-grey">{{driver.average_rating}}</span></p>
              </span>
              

            
          </div>
      </div>
  </div>
  </template>
  
<script>
import Auth from '@/helpers/auth/auth.ts'
    export default{
      data(){
          return {
            
            info:'',
            driver:{
              fullname:'',
              email:'',
              phone:'',
              picture:'',
              dob:'',
              gender:'',
              state:'',
              id:'',
              vehicle: {
                  plate_number: '',
                  color: '',
                  vehicle_manufacturer: {
                    name: '',
                  },
                  vehicle_model: {
                    name: '',
                  }
                },
              guarantor: {
                  name: '',
                  phone: '',
                  email: '',
                  address: '',
                  relationship: '',
              },
              driver_license_number: '',
              driver_license_expiration: '',
              driver_license_document: '',
              is_active: '',
              is_banned: '',
              is_vip: '',
              average_rating: '',
            },
            loading:false
          }
      },
      methods:{
        driverById(){
          this.loading = true;
          Auth.driverById(this.$route.params.id).then(res => {
              let data = res.data.data
              console.log(res);
              this.info = data
              this.driver= {
                fullname: this.info.fullname,
                email: this.info.email,
                phone: this.info.phone,
                picture: this.info.picture,
                dob: this.info.dob,
                gender: this.info.gender,
          
                vehicle: {
                  plate_number: this.info.vehicle.plate_number,
                  color: this.info.vehicle.color,
                  vehicle_manufacturer: {
                    name: this.info.vehicle.vehicle_manufacturer.name,
                  },
                  vehicle_model: {
                    name: this.info.vehicle.vehicle_model.name,
                  }
                },
                guarantor: {
                  name: this.info.guarantor.name,
                  phone: this.info.guarantor.phone,
                  email: this.info.guarantor.email,
                  address: this.info.guarantor.address,
                  relationship: this.info.guarantor.relationship,
                },
                driver_license_number: this.info.driver_license_number,
                driver_license_expiration: this.info.driver_license_expiration,
                driver_license_document: this.info.driver_license_document,
                is_active: this.info.is_active,
                is_banned: this.info.is_banned,
                is_vip: this.info.is_vip,
                average_rating: this.info.average_rating,

              }
              console.log(this.driver);
              this.loading = false;   
                }).catch(err => {
                    this.loading = false;
                      console.error('Error fetching activities:', err);
                      localStorage.clear();                    
                })
        },
      formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return date.toLocaleDateString('en-US', options);
      },
        },

      mounted(){
        const id = this.$route.params.id;
        console.log(id)
        this.driverById()
      },
    }
</script>

<style>
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