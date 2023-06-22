import axios from "axios";
import {API_PROD} from "@/util/constantURL";
import router from "@/router/router";
//import Vue from "core-js/internals/task";

export default {
    namespaced: true,
    state:{
        setFireman: null,
        usrDetail:null,
        userList: [],
    },
    mutations: {
        setFireman(state,payload){
            state.setFireman = payload
            console.log(payload,"payload")
        },
        setUserList(state,payload){
            state.userList = payload
            //console.log(payload,"payload")
        },
        setUserInfo(state,payload){
            state.userList[payload.num].userInfo = payload.res;
        },
        setUserDetail(state,payload){
            state.usrDetail = payload;
        },
    },
    actions: {
        regFirestatn({commit}, formData){
            const request = {
                instId: "id",
                crewID: formData?.crewID,
                crewNm: formData?.crewNm,
                telno: formData?.telno,
                rmk: formData?.rmk,
                pstn: formData?.pstn
            }
            console.log(request,"request 구급대원 등록")
            const url = `${API_PROD}/api/v1/admin/organ/reg-firemanpublic`
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
        },
        getUserInfo(comment,data){
            const token = localStorage.getItem('userToken')
            const url = `${API_PROD}/api/v1/private/user/user/${data.id}`
            //console.log(data.num,'숫자')
            return axios({
                method:"get",
                url: url,
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }).then(response =>{
                if(response.data?.code==='00'){
                    //console.log(response.data?.result)
                    const dataInfo={res:response.data?.result,num:data.num}
                    comment.commit('setUserInfo',dataInfo)
                }

            }).catch(e =>{
                console.log(e)
            });
        },
        getUserList(comment){
            const token = localStorage.getItem('userToken')
            //console.log(token)
            const url = `${API_PROD}/api/v1/admin/user/users`
            axios({
                method:"get",
                url: url,
                headers: {
                    Authorization: `Bearer ${token}`
                }

            }).then(async response =>{
                console.log(response,"사용자목록")
                if(response.data?.code==='00') {
                    comment.commit('setUserList', response.data?.result.items)
                    //console.log(response.data?.result.items, "확인좀합시다...")
                    await Promise.all(response.data?.result.items.map((item, i) => {
                        const data = {id: item.userId, num: i};
                        return comment.dispatch('getUserInfo', data);
                    }));
                    router.push('/admin/user/list')
                }
            }).catch(e =>{
                console.log(e)
            })
        },
        getDutyDstr(comment,data){
            const token = localStorage.getItem('userToken')
            const request = {
                code: data
            }
            const url = `${API_PROD}/api/v1/admin/organ/reg-firemanpublic`
            axios({
                method:"get",
                url:url,
                data: request,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response=>{
                console.log(response, "시도공통코드조회")

                return response
            }).catch(e =>{
                console.log(e)
            })
        }
    },
};