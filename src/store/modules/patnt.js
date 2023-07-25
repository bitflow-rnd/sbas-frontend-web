import axios from "axios";
import {API_PROD} from "@/util/constantURL";

export default {
    namespaced: true,
    state:{
        ptBI:null,
        existPt:null,
    },
    mutations:{
        setBasicInfo(state,payload){
          state.ptBI = payload
        },
        setExPt(state,payload){
            state.existPt = payload
        }
    },
    actions:{
        /*환자 기본 정보 등록 - 1단계*/
        async regBasicInfo(comment,data){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/regbasicinfo`
            const request = data
            console.log('환자 등록 - 기본 정보')
            try{
                const response = await axios.post(url,request, {
                    headers:{
                        Authorization: `Bearer ${token}` // Add the token to the Authorization header
                    }
                });
                if(response.data?.code === '00'){
                    console.log(response.data?.result)
                    comment.commit('setBasicInfo',response.data?.result);
                }
            } catch (e){
                console.log(e)
            }
        },

        /*환자 중복 유효성*/
        async isExistPt(comment,data){
            //const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/exist`
            const request = {
                ptNm:data.ptNm,
                rrno1:data.rrno1,
                rrno2:data.rrno2
            }
            console.log('중복 유효성')
            try{
                const response = await axios.post(url,request);
                if(response.data?.code === '00'){
                    console.log(response.data?.code)
                    if(response.data?.result.isExist){
                        comment.commit('setExPt',response.data?.result.items);
                    } else {
                        comment.commit('setExPt',null)
                    }
                }
            } catch (e){
                console.log(e)
            }
        },
        /*생체정보 입력 분석 - 중증도 분류 AI 분석*/
        async regBioAnlys(comment,data){
            //const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/bioinfoanlys`
            const request = data
            console.log('생체정보 분석')
            try{
                const response = await axios.post(url,request);
                if(response.data?.code === '00'){
                    console.log(response.data?.code)
                    /*if(response.data?.result.isExist){
                        comment.commit('setExPt',response.data?.result.items);
                    } else {
                        comment.commit('setExPt',null)
                    }*/
                }
            } catch (e){
                console.log(e)
            }
        },

    }
}