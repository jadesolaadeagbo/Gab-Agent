<template>
     <div>
    <div class="row">
      <div class="col-4">
        <img :src="driver.picture" alt="" width="180px" height="150px">
        <h1 class="text-2xl py-4"><b>Personal driver</b></h1>
        <table class="table">
          <thead>
            <tr>
              <td><b>Name:</b></td>
              <td>{{ driver.fullname }}</td>
            </tr>
            <tr>
              <td><b>Gender:</b></td>
              <td>{{ driver.gender}}</td>
            </tr>
            <tr>
              <td><b>Date of Birth:</b></td>
              <td>{{ driver.dob }}</td>
            </tr>
             <tr>
              <td><b>Active Status:</b></td>
              <td v-if="driver.is_active == 0">Active</td>
              <td v-if="driver.is_active == 1">In-Active</td>
            </tr>
          </thead>
        </table>
      </div>
      <div class="col-4">
        <h1 class="text-2xl pt-10"><b>Vehicle driver</b></h1>
        <table class="table">
          <thead>
            <tr>
              <td><b>Vehicle Manufacturer:</b></td>
              <td>{{ driver.vehicle.vehicle_manufacturer.name }}</td>
            </tr>
            <tr>
              <td><b>Vehicle Model:</b></td>
              <td>{{ driver.vehicle.vehicle_model.name }} </td>
            </tr>
            <tr>
              <td><b>Vehicle Color:</b></td>
              <td>{{ driver.vehicle.color }}</td>
            </tr>
             <tr>
              <td><b>Licence Plate Number:</b></td>
              <td>{{ driver.vehicle.plate_number }}</td>
            </tr>
            <tr>
              <td><b>Driver Licence Number:</b></td>
              <td>{{ driver.driver_license_number }}</td>
            </tr>
          </thead>
        </table>
      </div>
      <!-- <div class="col-4">
      <div  style="height:150px; width:180px; "></div>
        <h4  v-if="driver.bank.length > 0"><b>Bank driver</b></h4>
        <table class="table" v-if="driver.bank.length > 0">
          <thead>
            <tr>
              <td><b>Account Name:</b></td>
              <td>{{ driver.bank[0].account_name }}</td>
            </tr>
            <tr>
              <td><b>Bank Name:</b></td>
              <td>{{ driver.bank[0].bank }}</td>
            </tr>
            <tr>
              <td><b>Account Number:</b></td>
              <td>{{ driver.bank[0].account_number }}</td>
            </tr>
          </thead>
        </table>
      </div> -->
      <div class="col-4">
        <h4><b>Guarantor driver</b></h4>
        <table class="table">
          <thead>
            <tr>
              <td><b>Guarantor Name:</b></td>
              <td>{{ driver.guarantor.name }}</td>
            </tr>
            <tr>
              <td><b>Address:</b></td>
              <td>{{ driver.guarantor.address }}</td>
            </tr>
            <tr>
              <td><b>Guarantor Phone Number:</b></td>
              <td>{{ driver.guarantor.phone }}</td>
            </tr>
            <tr>
              <td><b>Relationship:</b></td>
              <td>{{ driver.guarantor.relationship }}</td>
            </tr>
          </thead>
        </table>
      </div>
      <div class="col-4">
        <h4><b>Performace Metric</b></h4>
        <table class="table">
          <thead>
            <tr>
              <td><b>Rating:</b></td>
              <td v-if="driver.average_rating > 3"><span class=" badge badge-success">{{driver.average_rating}}</span></td>
              <td v-if="driver.average_rating == 0"><span class=" badge badge-info">{{driver.average_rating}}</span></td>
              <td v-if="driver.average_rating < 0"><span class=" badge badge-danger">{{driver.average_rating}}</span></td>
            </tr>

          </thead>
        </table>
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-4">
        <div class="card text-center">
          <div class="card-body">
            <h4 class="card-title">Total Trips Completed</h4>
            <h2 class="card-text">{{completedTrips()}}</h2>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card text-center">
          <div class="card-body">
            <h4 class="card-title">Total Trips Cancelled</h4>
            <h2 class="card-text">{{cancelledTrips()}}</h2>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card text-center">
          <div class="card-body">
            <h4 class="card-title">Total Earnings</h4>
            <h2 class="card-text">{{ driverdata.earnings.toLocaleString() }}</h2>
          </div>
        </div>
      </div>
    </div> -->
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
            }
          }
      },
      methods:{
        driverById(){
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
                        
                }).catch(err => {
                    localStorage.clear()                    
                })
        },
      },

      mounted(){
        const id = this.$route.params.id;
        console.log(id)
        this.driverById()
      },
    }
</script>