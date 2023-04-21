import Api from "../Api";

export default {
    request(form: object){
        return Api.post('/agent/create-request', form)
    },
    
}


