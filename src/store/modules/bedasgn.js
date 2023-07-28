import axios from "axios";
import router from "@/router/router";
import {API_PROD} from "@/util/constantURL";

export default {
    namespaced: true,
    state:{
        bdList:[],
        bdCnt:[],
        bdDetail:null,
        newPtInfo: null,
        timeline:null,
        ptDs:null,
        ptSv:null,
        ptBio:null,
        ptSp:null,
        rcmdModal:1,
    },
    mutations:{
        test(state){
          state.newPtInfo= 1
        },
        setRCMDModal(state,payload){
            state.rcmdModal=payload
        },
        setBdList(state,payload){
            state.bdList.push(...payload.items)
            state.bdCnt.push(payload.count)
        },
        resetBdList(state){
            state.bdList=[]
            state.bdCnt=[]
        },
        setbdDetail(state,payload){
            state.bdDetail = payload
        },
        setTimeline(state,payload){
            state.timeline = payload
        },
        setDisesInfo(state,payload){
            state.ptDs = payload
        },
        setSevrInfo(state,payload){
            state.ptSv = payload
        },
        setBioInfo(state,payload){
            state.ptBio = payload
        },
        setSPInfo(state,payload){
            state.ptSp = payload
        }
    },
    actions:{
        /*병상배정목록*/
        getBdList(comment){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/bedasgn/list`
            console.log('병상배정목록')
            return axios({
                method:"get",
                url: url,
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }).then(response =>{
                if(response.data?.code==='00'){
                    //console.log(response.data?.result)
                    comment.commit('resetBdList')
                    comment.commit('setbdDetail',response.data?.result[0].items[0])
                    response.data?.result.forEach(item => {
                        comment.commit('setBdList', item);
                    });
                    return router.push('/user/bedasgn/list')
                }
            }).catch(e =>{
                console.log(e)
                return router.push('/user/bedasgn/list')
            });
        },

        /*감염병 정보 등록 */
        async regDsInfo(comment,data){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/regdisesinfo`
            const request = data
            console.log('병상배정 - 감염병 정보 등록')
            try{
                const response = await axios.post(url,request, {
                    headers:{
                        Authorization: `Bearer ${token}` // Add the token to the Authorization header
                    }
                });
                if(response.data?.code === '00'){
                    console.log(response.data?.result)
                    //comment.commit('setDisesInfo',response.data?.result);
                }
            } catch (e){
                console.log(e)
            }
        },
        /*중증 정보 등록 */
        async regSvInfo(comment,data){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/regsevrinfo`
            const request = data
            console.log('병상배정 - 중증 정보 등록')
            try{
                const response = await axios.post(url,request, {
                    headers:{
                        Authorization: `Bearer ${token}` // Add the token to the Authorization header
                    }
                });
                if(response.data?.code === '00'){
                    console.log(response.data?.result)
                    comment.commit('setSevrInfo',response.data?.result);
                }
            } catch (e){
                console.log(e)
            }
        },
        /*도착지 정보 등록 */
        async regStrtPoint(comment,data){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/regstrtpoint`
            const request = data
            console.log('병상배정 - 출발지 정보 등록')
            try{
                const response = await axios.post(url,request, {
                    headers:{
                        Authorization: `Bearer ${token}` // Add the token to the Authorization header
                    }
                });
                if(response.data?.code === '00'){
                    console.log(response.data?.result)
                    comment.commit('setSPInfo',response.data?.result);
                }
            } catch (e){
                console.log(e)
            }
        },
        /*도착지 정보 등록 */
        async regBedassign(comment,data){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/bedassignreq`
            const request = data
            console.log('병상배정 - 출발지 정보 등록')
            try{
                const response = await axios.post(url,request, {
                    headers:{
                        Authorization: `Bearer ${token}` // Add the token to the Authorization header
                    }
                });
                if(response.data?.code === '00'){
                    console.log(response.data?.result)
                    comment.commit('setSPInfo',response.data?.result);
                }
            } catch (e){
                console.log(e)
            }
        },
        /*타임라인 조회*/
        async getTimeline(comment,data){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/timeline/${data.ptId}/${data.bdasSeq}`
            console.log('병상배정 - 세부정보 - 타임라인')
            try{
                const response = await axios.get(url, {
                    headers:{
                        Authorization: `Bearer ${token}` // Add the token to the Authorization header
                    }
                });
                if(response.data?.code === '00'){
                    //console.log(response.data?.result)
                    comment.commit('setTimeline',response.data?.result);
                    const jobCd = comment.rootState.user.userInfo.jobCd
                    const res = response.data?.result
                    if(res.items[0].title!==null && jobCd==='PMGR0002' && !res.items[0].title.includes('원내')){
                        comment.commit('setRCMDModal',0)
                    } else {
                        comment.commit('setRCMDModal',1)
                    }
                }
            } catch (e){
                console.log(e)
            }
        },
        /*차수별 질병 정보 조회*/
        async getDSInfo(comment,data){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/patient/disease-info/${data.ptId}`
            console.log('병상배정 - 세부정보 - 질병 정보')
            try{
                const response = await axios.get(url, {
                    headers:{
                        Authorization: `Bearer ${token}` // Add the token to the Authorization header
                    }
                });
                if(response.data?.code === '00'){
                    //console.log(response.data?.result)
                    comment.commit('setDisesInfo',response.data?.result);
                }
            } catch (e){
                console.log(e)
            }
        },
        /* 병상 승인 - 병상배정반 */
        async aprvBedAsgn(comment,data){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/bedasgn/reqconfirm`
            const request = data
            console.log('병상승인')
            try{
                const response = await axios.post(url,request, {
                    headers:{
                        Authorization: `Bearer ${token}` // Add the token to the Authorization header
                    }
                });
                if(response.data?.code === '00'){
                    console.log(response.data?.result)
                   // comment.commit('setSPInfo',response.data?.result);
                }
            } catch (e){
                console.log(e)
            }
        },



    }
}