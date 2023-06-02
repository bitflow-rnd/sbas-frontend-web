import axios from "axios";
//import store from ""
import router from "@/router/router";

export default {
    state:{
        setFireman: null,
        userInfo: localStorage.getItem("userInfo")
    },
    mutations: {
        setFireman(state,payload){
            state.setFireman = payload
            console.log(payload,"payload")
        },
    },
    actions: {
        regFirestatn({commit}, formData){
            const request = {
                instId: localStorage.getItem("id"),
                crewID: formData?.crewID,
                crewNm: formData?.crewNm,
                telno: formData?.telno,
                rmk: formData?.rmk,
                pstn: formData?.pstn
            }
            console.log(request,"request 구급대원 등록")
            const url = 'http://sbas-test.bitflow.ai/api/v1/admin/organ/reg-fireman'
            axios({
                method:"post",
                url:url,
                data: request
            }).then(response=>{
                console.log(response, "구급대원 등록")

                commit('setFireman',response.data)
            }).catch(e =>{
                console.log(e)
                return router.push('admin/organ/firestatn/list')
            })
        }
    },
};