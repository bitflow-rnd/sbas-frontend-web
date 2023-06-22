import axios from "axios";
//import store from ""
import router from "@/router/router";

export default {
    state: {
        setFireman: null,
        userInfo: localStorage.getItem("userInfo")
    },
    mutations: {
        setFireman(state, payload) {
            state.setFireman = payload
            console.log(payload, "payload")
        },
    },
    actions: {
        regFirestatn({commit}, formData) {
            const request = {
                instId: localStorage.getItem("id"),
                crewID: formData?.crewID,
                crewNm: formData?.crewNm,
                telno: formData?.telno,
                rmk: formData?.rmk,
                pstn: formData?.pstn
            }
            console.log(request, "request 구급대원 등록")
            const url = 'http://sbas-test.bitflow.ai/api/v1/admin/organ/reg-fireman'
            axios({
                method: "post",
                url: url,
                data: request
            }).then(response => {
                console.log(response, "구급대원 등록")

                commit('setFireman', response.data)
            }).catch(e => {
                console.log(e)
                return router.push('admin/organ/firestatn/list')
            })
        },
        loadCodeGroupsData() {
            try {
                return axios
                    .get('http://sbas-test.bitflow.ai/api/v1/admin/common/codegrps', {
                        headers: {
                            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NiYXMtdGVzdC5iaXRmbG93LmFpIiwidXBuIjoiYWRtaW5pc3RyYXRvciIsInN1YiI6Iuq0gOumrOyekCIsInVzZXJObSI6Iuq0gOumrOyekCIsImdyb3VwcyI6WyJVU0VSIl0sImlhdCI6MTY4NjI4NTE5NywiZXhwIjoxNjg4ODc3MTk3LCJqdGkiOiJlZGE3MGZlNy01MjQ2LTQ4MGItOWI5NS01Y2I4MWI5Njg1MzIifQ.bCqHt_PB-dRwrlOqcdtOOJqNrO-sYnPkOfkKiNz_CrPN6VmZTE-1ZbFjleRAhDW8JLh5HIABrdN4BHDLBDNbWmRizH6qGqnUBkCQptXZtwixJzhBTNoOZn8VyDvXpW76mY2gxYjguxAGkJ7UIIROigSsGJnl-Q8ws_iFMCnEtogj8txxZRnDcR0st03QBKx14bNsQfhXZushxOPnXM47ewjasf5hTpidHQgtd_zZ8jYfm2RNnbUsurMXyVHCFsfcVNWIoLSUTGoxUmOAMqX3YwxsfwS1AtQ347zkCLgfWGsgENyB1YKIotSY4fl50GXr0y3QWWUL-PkCfZJTQtwgqQ'
                        }
                    })
            } catch (error) {
                console.log(error);
            }
        },
        loadCodesData(_, selectedRow) {
            try {
                return axios
                    .get(`http://sbas-test.bitflow.ai/api/v1/public/common/codes/${selectedRow}`)
            } catch (error) {
                console.log(error);
            }
        },
        deleteCode(_, code) {
            try {
                return axios
                    .post(`http://sbas-test.bitflow.ai/api/v1/admin/common/delcode`,
                        {...code}).then()
            } catch (error) {
                console.log(error);
            }
        },
        deleteCodeGroup(_, codeGroupId) {
            try {
                return axios
                    .post(`http://sbas-test.bitflow.ai/api/v1/admin/common/delcodegrps/${codeGroupId}`)
                    .then()
            } catch (error) {
                console.log(error);
            }
        },
        addCode(_, newCode) {
            try {
                return axios
                    .post(`http://sbas-test.bitflow.ai/api/v1/admin/common/regcode`,{...newCode})
                    .then()
            } catch (error) {
                console.log(error);
            }
        },
        addCodeGroup(_, newCodeGroup) {
            try {
                return axios
                    .post(`http://sbas-test.bitflow.ai/api/v1/admin/common/regcodegrps`,{...newCodeGroup})
                    .then()
            } catch (error) {
                console.log(error);
            }
        },
        modifyCode(_, newCode) {
            try {
                return axios
                    .post(`http://sbas-test.bitflow.ai/api/v1/admin/common/modcode`,{...newCode})
                    .then()
            } catch (error) {
                console.log(error);
            }
        },
        modifyCodeGroup(_, newCodeGroup) {
            try {
                return axios
                    .post(`http://sbas-test.bitflow.ai/api/v1/admin/common/modcodegrps`,{...newCodeGroup})
                    .then()
            } catch (error) {
                console.log(error);
            }
        }
    },
};