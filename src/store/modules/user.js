import axios from 'axios'
import router from '@/router/router'
import { encodingPassword } from '@/util/encodingPasswd'
import { API_PROD } from '@/util/constantURL'

export default {
  namespaced: true,
  state: {
    cmSido: null,
    cmGugun: [],
    userInfo: null,
    smsCrtf: null,
    phoneNo: '01082072505',
    smsCrtfSuccess: null,
    attcId: null,
    usersList: null,
    selectedTabIdx: 0
  },
  getters: {
    getUserInfo: () => {
      console.log('getters.getUserInfo')
      return localStorage.getItem('userInfo')
    },
    getSelectedTabIdx: (state) => {
      console.log('getSelectedTabIdx')
      return state.selectedTabIdx
    },
    getUserList: (state) => {
      return state.usersList
    }
  },
  mutations: {
    setSido(state, payload) {
      state.cmSido = payload
    },
    setGugun(state, payload) {
      state.cmGugun = payload
    },
    loginSuccess(state, payload) {
      state.userInfo = payload
      console.log(payload)
    },
    smsCrtfNo(state, payload) {
      state.smsCrtf = payload
      console.log(payload)
    },
    isCrtfSuccess(state, payload) {
      state.smsCrtfSuccess = payload
      console.log(payload)
    },
    setAttcId(state, payload) {
      state.attcId = payload
      console.log(payload)
    },
    setUserInfo(state, payload) {
      state.userInfo = payload
      localStorage.setItem('userInfo', payload)
    },
    setUsersList(state, payload) {
      state.usersList = payload
    },
    setSelectedTabIdx: (state, payload) => {
      console.log('setSelectedTabIdx', payload)
      state.selectedTabIdx = payload
    }
  },
  actions: {
    /****************commoncode*****************/
    getSido(comment) {
      const url = `${API_PROD}/api/v1/public/common/sidos`

      axios({
        method: 'get',
        url: url
      })
        .then((response) => {
          comment.commit('setSido', response.data?.result)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getGuGun(comment, code) {
      const url = `${API_PROD}/api/v1/public/common/guguns/SIDO${code}`

      axios({
        method: 'get',
        url: url
      })
        .then((response) => {
          if (response.data?.code === '00') {
            comment.commit('setGugun', response.data?.result)
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    login(comment, formData) {
      console.log(JSON.stringify(formData?.id))
      const id = formData?.id
      const pw = formData?.pw
      const encodindPw = encodingPassword(pw)

      const request = {
        id: id,
        pw: encodindPw
      }

      const url = `${API_PROD}/api/v1/public/user/login`
      axios({
        method: 'post',
        url: url,
        data: request
      })
        .then((response) => {
          console.log(response, '로그인 응답값')

          comment.commit('loginSuccess', response.data)
          localStorage.setItem('userToken', response.data?.result)
          comment.dispatch('getUserInfo', id)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getUserInfo(comment, id) {
      const token = localStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/user/user/${id}`
      console.log('사용자정보')
      return axios({
        method: 'get',
        url: url,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
          if (response.data?.code === '00') {
            console.log(response.data?.result)
            comment.commit('setUserInfo', response.data?.result)
            return router.push('/dashbd')
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    signup(comment, formData) {
      console.log(JSON.stringify(formData))
    },

    sendSms(comment, num) {
      const request = {
        to: num
      }
      const url = `${API_PROD}/api/v1/public/user/smssend`
      axios({
        method: 'post',
        url: url,
        data: request
      })
        .then((response) => {
          console.log(response, '인증번호 발송')
          comment.commit('smsCrtfNo', response.data?.result)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    confirmSms(comment, certNo) {
      return new Promise((resolve) => {
        const request = {
          phoneNo: comment.state.phoneNo,
          certNo: certNo
        }
        console.log(request)
        const url = `${API_PROD}/api/v1/public/user/confirmsms`
        axios({
          method: 'post',
          url: url,
          data: request
        })
          .then((response) => {
            console.log(response, '인증번호 비교')
            if (response.data?.code === '00') {
              comment.commit('isCrtfSuccess', '00')
              resolve(true)
            } else {
              comment.commit('isCrtfSuccess', false)
              resolve(false)
            }
          })
          .catch((e) => {
            console.log(e)
            comment.commit('isCrtfSuccess', false)
            resolve(false)
          })
      })
    },
    getUsersList(comment) {
      const url = `${API_PROD}/api/v1/private/user/all-users`

      axios({
        method: 'get',
        url: url
      })
        .then((response) => {
          comment.commit('setUsersList', response.data?.result)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getUsersListSync() {
      const url = `${API_PROD}/api/v1/private/user/all-users`
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: url
        })
          .then((response) => {
            resolve(response.data?.result)
          })
          .catch((e) => {
            console.log(e)
            reject(e)
          })
      })
    },
    getMessageRoomListSync() {
      const url = `${API_PROD}/api/v1/private/talk/all-chats`
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: url
        })
          .then((response) => {
            resolve(response.data?.result)
          })
          .catch((e) => {
            console.log(e)
            reject(e)
          })
      })
    },
    getChatMessageListSync(roomno) {
      const url = `${API_PROD}/api/v1/private/talk/my-chat/${roomno}`
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: url
        })
          .then((response) => {
            resolve(response.data?.result)
          })
          .catch((e) => {
            console.log(e)
            reject(e)
          })
      })
    },
    loadPatientData() {
      try {
        return axios.get(`${API_PROD}/api/v1/private/patient/search`)
      } catch (error) {
        console.log(error)
      }
    },
    loadPatientBasicInfo(_, id) {
      try {
        return axios.get(`${API_PROD}/api/v1/private/patient/basicinfo?ptId=${id}`)
      } catch (error) {
        console.log(error)
      }
    },
    loadPatientDiseaseInfo(_, id) {
      try {
        return axios.get(`${API_PROD}/api/v1/private/patient/disease-info/${id}`)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
