import axios from 'axios'

let local = "http://192.168.88.63:8000/api/v1"
let sandbox = "https://gateway.sandbox.nigerialocate.com/api/v1"
let live = "https://gateway.live.nigerialocate.com/api/v1"

let Api = axios.create({    
    // baseURL: live,  
    baseURL: local,  
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
    },
})

Api.defaults.withCredentials = false

export default Api
