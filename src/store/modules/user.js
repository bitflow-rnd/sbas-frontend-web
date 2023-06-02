import axios from "axios";
//import store from ""
import router from "@/router/router";

export default {
    state:{
        userInfo: null,
    },
    mutations: {
        loginSuccess(state,payload){
            state.userInfo = payload
            console.log(payload)
        }
    },
    actions: {
        login(comment, formData){
            const id = formData?.id
            const pw = formData?.pw

            const request = {
                id: id,
                pw: pw
            }

            const url = 'http://sbas-test.bitflow.ai/api/v1/public/user/login'
            axios({
                method:"post",
                url:url,
                data: request
            }).then(response=>{
                console.log(response, "로그인 응답값")

                comment.commit('loginSuccess',response.data)
                localStorage.setItem("userInfo", JSON.stringify(response.data))

                return router.push('/admin')
            }).catch(e =>{
                console.log(e)
                return router.push('/dashbd')
            })
        }
    },
};