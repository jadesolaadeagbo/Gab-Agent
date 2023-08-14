import axios from 'axios'

let local = "http://127.0.0.1:8000/api/v1"
let sandbox = "https://gateway.sandbox.nigerialocate.com/api/v1"
let live = "https://gateway.live.nigerialocate.com/api/v1"

let Api = axios.create({    
    baseURL: live,  
    // baseURL: sandbox,  
    headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
    },
})

Api.defaults.withCredentials = false

export default Api
