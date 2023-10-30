// @ts-ignore
import Api from "../Api";

export default  {
    login(form: object){
        return Api.post('/login', form)
    },
    logout() {
        return Api.post('/logout')
    },
    authUser(){
        return Api.get('/auth-agent')
    },
    registeredDrivers(){
        return Api.get('/agent/registered-drivers')
    },
    driverById(id: number){
        return Api.get(`/agent/driver/${id}`)
    },
    activities(form:object){
        return Api.post('/agent/drivers-activities', form )
    }
}


