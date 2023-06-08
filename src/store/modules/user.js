import axios from "axios";
//import store from ""
import router from "@/router/router";
import {encodingPassword} from "@/util/encodingPasswd";
import {API_PROD} from "@/util/constantURL";

export default {
    state:{
        userInfo: null,
        smsCrtf: null,
        phoneNo: "01082072505",
        smsCrtfSuccess: null,
    },
    mutations: {
        loginSuccess(state,payload){
            state.userInfo = payload
            console.log(payload)
        },
        smsCrtfNo(state, payload) {
            state.smsCrtf = payload
            console.log(payload)
        },
        isCrtfSuccess(state,payload){
            state.smsCrtfSuccess=payload
            console.log(payload)
        }
    },
    actions: {
        login(comment, formData){

            console.log(JSON.stringify(formData?.id))
            const id = formData?.id
            const pw = formData?.pw
            const encodindPw = encodingPassword(pw)

            const request = {
                id: id,
                pw: encodindPw
            }

            console.log(request)
            console.log('newData ' + JSON.stringify(formData))

            const url = `${API_PROD}/api/v1/public/user/login`
            axios({
                method:"post",
                url:url,
                data: request
            }).then(response=>{
                console.log(response, "로그인 응답값")

                comment.commit('loginSuccess',response.data)
                localStorage.setItem("userInfo", JSON.stringify(response.data))

                return router.push('/dashbd')
            }).catch(e =>{
                console.log(e)
                return '2'
            })
        },

        signup(comment, formData){
            console.log(JSON.stringify(formData))
        },

        sendSms(comment, num) {
            const request = {
                to: num
            }
            const url = `${API_PROD}/api/v1/public/user/smssend`
            axios({
                method:"post",
                url:url,
                data:request
            }).then(response=>{
                console.log(response, "인증번호 발송")
                comment.commit('smsCrtfNo',response.data?.result)

            }).catch(e =>{
                console.log(e)
            })
        },
        confirmSms(comment, certNo){
            const request = {
                phoneNo: comment.state.phoneNo,
                certNo: certNo
            }
            console.log(request)
            const url = `${API_PROD}/api/v1/public/user/confirmsms`
            axios({
                method:"post",
                url:url,
                data:request
            }).then(response=>{
                console.log(response,"인증번호 비교")
                if(this.certNo === this.smsCrtf){
                    comment.commit('isCrtfSuccess',true)
                }else{
                    comment.commit('isCrtfSuccess',false)
                }
            })
        }
    },
};