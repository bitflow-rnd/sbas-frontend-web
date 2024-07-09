import axios from 'axios'
import { API_PROD } from '@/util/constantURL'
import router from '@/router/router'
import { encodingPassword } from '@/util/encodingPasswd'
import { axios_cstm } from '@/util/axios_cstm'

export default {
  namespaced: true,
  state: {
    cmSido: null,
    cmGugun: [],
    setFireman: null,
    usrDetail: null,
    userList: [],
    isRegUsr: null,
    firestatnList: [],
    medinstList: [],
    firemenList: [],
    fsDetail: null,
    fmDetail: null,
    organMedi: [],
    hpId: '',
  },
  mutations: {
    setSido(state, payload) {
      state.cmSido = payload
    },
    setGugun(state, payload) {
      state.cmGugun = payload
    },
    setUserList(state, payload) {
      state.userList = payload
      //console.log(payload,"payload")
    },
    setUserDetail(state, payload) {
      state.usrDetail = payload
    },
    isRegUsr(state, payload) {
      state.isRegUsr = payload
    },
    setFirestatn(state, payload) {
      state.firestatnList = payload
    },
    setFiremen(state, payload) {
      state.firemenList = payload
    },
    setMedinst(state, payload) {
      state.medinstList = payload
    },
    setMedinstDetail(state, payload) {
      state.medinstDetail = payload
    },
    setFSDetail(state, payload) {
      state.fsDetail = payload
      //this.dispatch('admin/getGuGun',state.fsDetail.dstr1Cd);
    },
    setFMDetail(state, payload) {
      state.fmDetail = payload
    },
    setOrganMedi(state, payload) {
      state.organMedi = payload
    },
    setHpId(state, payload) {
      state.hpId = payload
    },
  },
  getters: {
    getCmSido: (state) => {
      return state.cmSido
    },
    getGuGun: (state) => {
      return state.cmGugun
    },
  },
  actions: {
    /****************commoncode*****************/
    getSido(comment) {
      const url = `${API_PROD}/api/v1/public/common/sidos`

      axios({
        method: 'get',
        url: url
      }).then(response => {
        comment.commit('setSido', response.data?.result)
      }).catch((e => {
        console.log(e)
      }))
    },
    getGuGun(comment, code) {
      const url = `${API_PROD}/api/v1/public/common/guguns/SIDO${code}`

      axios({
        method: 'get',
        url: url
      }).then(response => {
        if (response.data?.code === '00') {
          comment.commit('setGugun', response.data?.result)
        }

      }).catch((e => {
        console.log(e)
      }))
    },
    getOrganMedi(comment, data) {
      //const token = localStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/public/organ/codes`
      axios({
        method: 'get',
        url: url,
        params: data
      }).then(response => {
        if (response.data?.code === '00') {
          comment.commit('setOrganMedi', response.data?.result.items)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    /****************user*****************/
    getUserInfo(comment, data) {
      const url = `${API_PROD}/api/v1/private/user/user/${data}`
      //console.log(data.num,'숫자')
      return axios_cstm().get(url).then(response => {
        if (response.data?.code === '00') {
          //console.log(response.data?.result)
          comment.commit('setUserDetail', response.data?.result)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    getUserList(comment, data) {
      const url = `${API_PROD}/api/v1/admin/user/users`
      return axios_cstm()
        .get(url, { params: data })
        .then((res) => {
          console.log(res, '사용자목록')
          if (res.data?.code === '00') {
            comment.commit('setUserList', res.data?.result)
          }
        }).catch((e) => {
          console.log(e)
        })
    },
    regUsr(comment, data) {
      const token = sessionStorage.getItem('userToken')
      const request = { ...data, pw: encodingPassword(data['pw']) }
      const url = `${API_PROD}/api/v1/admin/user/reg`
      // const url = `http://localhost:8080/api/v1/admin/user/reg`
      return axios({
        method: 'post',
        url: url,
        data: request,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        console.log(response, '사용자 등록(Admin)')
        comment.commit('isRegUsr', true)
        return response.data.code
      }).catch(e => {
        comment.commit('isRegUsr', false)
        console.log(e)
        return e.response.data.code
      })
    },
    delUsr(comment, data) {
      const token = sessionStorage.getItem('userToken')
      const request = {
        id: data
      }
      const url = `${API_PROD}/api/v1/admin/user/del`
      axios({
        method: 'post',
        url: url,
        data: request,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        console.log(response, '사용자탈퇴')
        return response
      }).catch(e => {
        console.log(e)
      })
    },
    aprvUsr(comment, data) {
      const token = sessionStorage.getItem('userToken')
      const request = {
        id: data,
        isApproved: true
      }
      const url = `${API_PROD}/api/v1/admin/user/aprv`
      axios({
        method: 'post',
        url: url,
        data: request,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        console.log(response, '사용자 승인/반려')
      }).catch(e => {
        console.log(e)
      })
    },
    /****************organ*****************/
    getFiremen(comment, data) {
      //const token = localStorage.getItem('userToken')
      console.log(data.instId)
      const url = `${API_PROD}/api/v1/private/organ/firemen`
      return axios({
        method: 'get',
        url: url,
        params: data
      }).then(response => {
        if (response.data?.code === '00') {
          if (response.data?.result.count !== 0) {
            comment.commit('setFiremen', response.data?.result)
            //comment.commit('setFMDetail',response.data?.result.items[0])
          } else {
            console.log('소방대원0명')
            comment.commit('setFiremen', response.data?.result)
            //comment.commit('setFMDetail',null)
          }
        }
      }).catch(e => {
        console.log(e)
      })
    },
    /*구급대 목록 조회*/
    async getFireStatn(comment, request) {
      // const token = localStorage.getItem('userToken')
      // console.log(data.cd1, data.cd2)
      const url = `${API_PROD}/api/v1/public/organ/firestatns`
      const params = request
      try {
        const response = await axios.get(url, { params })
        console.log('구급대목록')
        if (response.data.code === '00') {
          if (response.data?.result.count !== 0) {
            comment.commit('setFirestatn', response.data?.result)
            comment.dispatch('getFSDetail', { id: response.data?.result.items[0].instId })
            const data = { instId: response.data?.result.items[0].instId, crewId: null, crewNm: null, telno: null }
            console.log(data)
            comment.dispatch('getFiremen', data)

            //return router.push('/admin/organ/firestatn/list');
          } else {
            comment.commit('setFirestatn', [])
            comment.commit('setFSDetail', null)
            comment.commit('setFiremen', [])
            //return router.push('/admin/organ/firestatn/list');
          }
        }

      } catch (e) {
        console.log(e)
      }

    },
    /*구급대 상세 조회*/
    getFSDetail(comment, request) {
      const url = `${API_PROD}/api/v1/private/organ/firestatn/${request.id}`
      axios({
        method: 'get',
        url: url
      }).then(response => {
        console.log('구급대 상세')
        if (response.data.code === '00') {
          comment.commit('setFSDetail', response.data?.result)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    /*구급대원 상세 조회*/
    getFMDetail(comment, request) {
      const url = `${API_PROD}/api/v1/admin/organ/fireman/${request.id}/${request.crewId}`
      axios({
        method: 'get',
        url: url
      }).then(response => {
        console.log('구급대원 상세')
        if (response.data.code === '00') {
          comment.commit('setFMDetail', response.data?.result)
        }
      }).catch(e => {
        console.log(e)
      })
    },
    /*구급대 등록*/
    regFS(comment, data) {
      const token = sessionStorage.getItem('userToken')
      const request = {
        instNm: data.instNm,
        dstr1Cd: data.dstr1Cd,
        dstr2Cd: data.dstr2Cd,
        chrgId: data.chrgId,
        chrgNm: data.chrgNm,
        chrgTelno: data.chrgTelno,
        rmk: data.rmk,
        detlAddr: data.detlAddr,
        lat: data.lat,
        lon: data.lon
      }
      console.log(request, 'request 구급대 등록')
      const url = `${API_PROD}/api/v1/admin/organ/regfirestatn`
      axios({
        method: 'post',
        url: url,
        data: request,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        console.log(response, '구급대 등록')

        //comment.commit('setFiremen', response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    /*구급대 수정*/
    editFS(comment, data) {
      const token = sessionStorage.getItem('userToken')
      console.log(data, ' 수정')
      const request = {
        instId: data.instId,
        instNm: data.instNm,
        dstr1Cd: data.dstr1Cd,
        dstr2Cd: data.dstr2Cd,
        chrgId: data.chrgId,
        chrgNm: data.chrgNm,
        chrgTelno: data.chrgTelno,
        rmk: data.rmk
      }
      const url = `${API_PROD}/api/v1/admin/organ/modfirestatn`
      axios({
        method: 'post',
        url: url,
        data: request,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        console.log(response, '구급대 수정')
        //comment.commit('setFiremen', response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    /*구급대원 등록*/
    regFM(comment, data) {
      const token = sessionStorage.getItem('userToken')
      const request = {
        instId: data.instId,
        crewNm: data.crewNm,
        telno: data.telno,
        rmk: data.rmk,
        pstn: data.pstn
      }
      //const id = data.instId
      console.log(request, 'request 구급대원 등록')
      const url = `${API_PROD}/api/v1/admin/organ/reg-fireman`
      axios({
        method: 'post',
        url: url,
        data: request,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        console.log(response, '구급대원 등록')
        //comment.dispatch('getFiremen',{id:id,})

        //comment.commit('setFiremen', response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    /*구급대원 수정*/
    editFM(comment, data) {
      const token = sessionStorage.getItem('userToken')
      console.log(data, ' 수정')
      const request = {
        instId: data.instId,
        crewNm: data.crewNm,
        crewId: data.crewId,
        telno: data.telno,
        rmk: data.rmk,
        pstn: data.pstn
      }
      const url = `${API_PROD}/api/v1/admin/organ/mod-fireman`
      axios({
        method: 'post',
        url: url,
        data: request,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        console.log(response, '구급대원 수정')
        comment.dispatch('getFiremen', { instId: data.instId })

        //comment.commit('setFiremen', response.data)
      }).catch(e => {
        console.log(e)
      })
    },
    /*구급대원 삭제*/
    delFM(comment, data) {
      const token = sessionStorage.getItem('userToken')
      console.log(data, ' 삭제')
      const request = {
        instId: data.instId,
        crewId: data.crewId
      }
      const url = `${API_PROD}/api/v1/admin/organ/del-fireman`
      axios({
        method: 'post',
        url: url,
        data: request,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(response => {
        console.log(response, '구급대원 삭제')
        //comment.commit('setFiremen', response.data)
      }).catch(e => {
        console.log(e)
      })
    },

    async getMedinst(comment, request) {
      // const token = localStorage.getItem('userToken')
      // console.log(data.cd1, data.cd2)
      const url = `${API_PROD}/api/v1/public/organ/medinsts`
      const params = request
      try {
        const response = await axios.get(url, { params })
        console.log('의료기관 목록')
        if (response.data.code === '00') {
          comment.commit('setMedinst', response.data?.result)
          console.log(response.data)
        }
      } catch (e) {
        console.log(e)
      }
    },
    /*의료기관 상세*/
    async getMedinstDetail(comment, request) {
      // const token = localStorage.getItem('userToken')
      // console.log(data.cd1, data.cd2)
      const url = `${API_PROD}/api/v1/public/organ/medinst/${request.hpId}`

      comment.commit('setHpId', request.hospId)
      try {
        const response = await axios.get(url)
        console.log('의료기관 상세')
        if (response.data.code === '00') {
          comment.commit('setMedinstDetail', response.data?.result)
          console.log(response.data)
        }
      } catch (e) {
        console.log(e)
      }
    },
    /*의료기관 이미지 삭제*/
    removeMedinstImg(comment, request) {
      const token = sessionStorage.getItem('userToken')
      // console.log(data.cd1, data.cd2)
      const url = `${API_PROD}/api/v1/public/organ/delete-medinstimg/${request.hpId}`

      return axios.get(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }).then(response => {
        console.log('의료기관  이미지 삭제')
        if (response.data.code === '00') {
          // comment.commit('setMedinstDetail', response.data?.result);
          console.log(response.data)
        }
      })
        .catch(error => {
          console.log(error)
        })
    },

    loadCodeGroupsData() {
      const token = sessionStorage.getItem('userToken')
      try {
        return axios
          .get(`${API_PROD}/api/v1/admin/common/codegrps`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          })
      } catch (error) {
        console.log(error)
      }
    },
    loadCodesData(_, selectedRow) {
      try {
        return axios
          .get(`${API_PROD}/api/v1/public/common/codes/${selectedRow}`)
      } catch (error) {
        console.log(error)
      }
    },
    deleteCode(_, code) {
      try {
        return axios
          .post(`${API_PROD}/api/v1/admin/common/delcode`,
            { ...code }).then()
      } catch (error) {
        console.log(error)
      }
    },
    deleteCodeGroup(_, codeGroupId) {
      try {
        return axios
          .post(`${API_PROD}/api/v1/admin/common/delcodegrps/${codeGroupId}`)
          .then()
      } catch (error) {
        console.log(error)
      }
    },
    addCode(_, newCode) {
      try {
        return axios
          .post(`${API_PROD}/api/v1/admin/common/regcode`, { ...newCode })
          .then()
      } catch (error) {
        console.log(error)
      }
    },
    addCodeGroup(_, newCodeGroup) {
      try {
        return axios
          .post(`${API_PROD}/api/v1/admin/common/regcodegrps`, { ...newCodeGroup })
          .then()
      } catch (error) {
        console.log(error)
      }
    },
    modifyCode(_, newCode) {
      try {
        return axios
          .post(`${API_PROD}/api/v1/admin/common/modcode`, { ...newCode })
          .then()
      } catch (error) {
        console.log(error)
      }
    },
    modifyCodeGroup(_, newCodeGroup) {
      try {
        return axios
          .post(`${API_PROD}/api/v1/admin/common/modcodegrps`, { ...newCodeGroup })
          .then()
      } catch (error) {
        console.log(error)
      }

    }
  }
}
