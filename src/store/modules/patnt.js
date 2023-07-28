import axios from "axios";
import {API_PROD} from "@/util/constantURL";

export default {
    namespaced: true,
    state:{
        ptBI:null,
        existPt:null,
        ptDetail:null,
        rptInfo:null,
    },
    mutations:{
        regBasicInfo(state,payload){
          state.ptBI = payload
        },
        setExPt(state,payload){
            state.existPt = payload
        },
        setBasicInfo(state,payload){
            state.ptDetail = payload
        },
        setZip(state,payload){
            state.rptInfo={...state.rptInfo,
                        zip:payload,
                        bascAddr:state.rptInfo.baseAddr,
                        detlAddr:state.rptInfo.dtlAddr}
        },
        setInstZip(state,payload){
          state.rptInfo={...state.rptInfo,
                        instZip:payload,
                        instBascAddr:state.rptInfo.instAddr}
        },
        uploadRpt(state,payload){
            if(payload.dethYn==='생존'){
                payload.dethYn='N'
            }else{
                payload.dethYn='Y'
            }
            state.rptInfo = payload
        },
        setRpt(state,payload){
            state.rptInfo = payload
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
                    comment.commit('regBasicInfo',response.data?.result);
                }
            } catch (e){
                console.log(e)
            }
        },
        /*역조서 업로드*/
        async uploadRpt(comment,data){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/upldepidreport`
            console.log(data)
            const request = data
            console.log('역학조사서 업로드')
            try{
                const response = await axios.post(url,request, {
                    headers:{
                        Authorization: `Bearer ${token}` // Add the token to the Authorization header
                    }
                });
                if(response.data?.code === '00'){
                    //console.log(response.data?.result)
                    await comment.commit('uploadRpt',response.data?.result);
                    comment.dispatch('geoCoding',[0,response.data?.result.baseAddr])
                }
            } catch (e){
                console.log(e)
            }
        },
        /*역조서 삭제*/
        async removeRpt(comment,data){
            //const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/delepidreport/${data}`
            console.log(data)
            //const request = data
            console.log('역학조사서 삭제')
            try{
                const response = await axios.post(url);
                if(response.data?.code === '00'){
                    //console.log(response.data?.result)
                    await comment.commit('setRpt',null);
                }
            } catch (e){
                console.log(e)
            }
        },
        /*네이버 주소 찾기*/
        async geoCoding(comment,data){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/test/geocoding-test`
            const request = {  query:data[1]}
            console.log('역학조사서 파싱 후 주소')
            try{
                const response = await axios.post(url,request, {
                    headers:{
                        Authorization: `Bearer ${token}` // Add the token to the Authorization header
                    }
                });
                if(response.data?.status === 'OK'){
                    //console.log(response.data?.result)
                    if(data[0]===0){
                        comment.commit('setZip',response.data?.addresses[0]?.addressElements[8]?.longName);
                    } else {
                        comment.commit('setInstZip',response.data?.addresses[0]?.addressElements[8]?.longName)
                    }

                }
            } catch (e){
                console.log(e)
            }
        },

        /*환자 기본 정보 조회*/
        async getBasicInfo(comment,data){
            //const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/basicinfo`

            const params = {ptId:data.ptId}

            console.log('환자 기본 정보 조회'+data.ptId)
            try{
                const response = await axios.get(url, {params});
                if(response.data?.code === '00'){
                    //console.log(response.data?.result)
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