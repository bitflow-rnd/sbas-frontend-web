import axios from "axios";
import router from "@/router/router";
import {API_PROD} from "@/util/constantURL";

export default {
    namespaced: true,
    state:{
        bdList:[],
        bdCnt:[],
    },
    mutations:{
        setBdList(state,payload){
            state.bdList.push(...payload.items)
            state.bdCnt.push(payload.count)
        }
    },
    actions:{
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
                    console.log(response.data?.result)
                    response.data?.result.forEach(item => {
                        comment.commit('setBdList', item);
                    });
                    return router.push('/user/bedasgn/list')
                }
            }).catch(e =>{
                console.log(e)
            });
        },
    }
}