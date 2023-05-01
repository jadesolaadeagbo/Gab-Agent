import Api from "../Api";

export default {
    login(form: object){
        return Api.post('/login', form)
    },
    logout() {
        return Api.post('/logout')
    },
    authUser(){
        return Api.post('/auth-agent')
    }
    
}


