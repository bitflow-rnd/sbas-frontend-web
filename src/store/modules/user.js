import axios from 'axios'
import router from '@/router/router'
import { encodingPassword } from '@/util/encodingPasswd'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm, isLoading } from '@/util/axios_cstm'

export default {
  namespaced: true,
  state: {
    userInfo: null,
    smsCrtf: null,
    smsCrtfSuccess: null,
    attcId: null,
    usersList: null,
    favUsersList: null,
    selectedTabIdx: 0,
    chrgInfo: null,
  },
  getters: {
    getUserInfo: (state) => {
      return state.userInfo
    },
    getSelectedTabIdx: (state) => {
      console.log('getSelectedTabIdx')
      return state.selectedTabIdx
    },
    getUserList: (state) => {
      return state.usersList
    },
    getChrgUserInfo(state){
      return state.chrgInfo
    },
  },
  mutations: {
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
    setChrgUserInfo(state,payload){
      state.chrgInfo = payload
    },
    setUsersList(state, payload) {
      state.usersList = payload
    },
    setFavUsersList(state, payload) {
      state.favUsersList = payload
    },
    regFavUser(state,payload){
      state.resultRegFAv = payload
    },
    setSelectedTabIdx: (state, payload) => {
      console.log('setSelectedTabIdx', payload)
      state.selectedTabIdx = payload
    }
  },
  actions: {
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
      return axios({
        method: 'post',
        url: url,
        data: request
      })
        .then((response) => {
          console.log(response, '로그인 응답값')

          comment.commit('loginSuccess', response.data)
          sessionStorage.setItem('userToken', response.data?.result)
          comment.dispatch('getUserInfo', id)
        })
        .catch((e) => {
          console.log(e)
          return e.response.data.message
        })
    },
    getUserInfo(comment, id) {
      const token = sessionStorage.getItem('userToken')
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
            comment.commit('setUserInfo', response.data?.result)
            return router.push('/dashbd')
          }
        })
        .catch((e) => {
          console.log(e)
        })
    },
    getChrgUserInfo(comment, id) {
      return new Promise((resolve, reject)=> {
        const token = sessionStorage.getItem('userToken')
        const url = `${API_PROD}/api/v1/private/user/user/${id}`
        console.log('담당자정보')
        axios({
          method:'get',
          url:url,
          headers:{
            Authorization: `Bearer ${token}`
          }
        }).then(response => {
          if (response.data?.code === '00') {
            console.log(response.data?.result)
            comment.commit('setChrgUserInfo', response.data?.result)
            resolve(response.data?.result)
          } else {
            reject('에러')
          }
        }).catch((e) => {
          reject(e)
        })
      })
    },
    signup(comment, formData) {
      console.log(JSON.stringify(formData))
    },
    reqUserReg(comment, data) {
      const request = { ...data, pw: encodingPassword(data['pw']) }
      const url = `${API_PROD}/api/v1/public/user/requserreg`

      return axios({
        method: 'post',
        url: url,
        data: request
      }).then(response => {
        console.log(response, '사용자 등록 요청')
        return response.data.code
      }).catch(e => {
        console.log('error >>> ', e)
        return e.response.data.code
      })
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
    confirmSms(comment, data) {
      return new Promise((resolve) => {
        const url = `${API_PROD}/api/v1/public/user/confirmsms`
        axios({
          method: 'post',
          url: url,
          data: data
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
    getFavUsersList() {
      const url = `${API_PROD}/api/v1/private/user/contact-users`
      const token= sessionStorage.getItem('userToken')

      return new Promise((resolve,reject)=>{
          axios({
            method: 'get',
            url: url,
            headers: {
              Authorization: `Bearer ${token}`
            }
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
    regFavUser(comment, request) {

      const url = `${API_PROD}/api/v1/private/user/reg-favorite`
      const token = sessionStorage.getItem('userToken')

      axios({
        method: 'post',
        url: url,
        data: request,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
          console.log(response, '즐겨찾기 등록')
          comment.commit('regFavUser', response.data?.result)
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
    getSearchUser(comment,data) {
      const url = `${API_PROD}/api/v1/private/user/users`
      const token = sessionStorage.getItem('userToken')

      //const decodedParams = decodeURIComponent(data);
      //const parsedParams = JSON.parse(decodedParams);

      console.log('axios 요청 URL:', url);
      console.log('전달된 params:', data);

      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: url,
          params: data,
          headers: {
            Authorization: `Bearer ${token}`
          }
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
    getMessageMyRoomListSync() {
      const url = `${API_PROD}/api/v1/private/talk/my-chats`
      return new Promise((resolve, reject) => {
        axios_cstm().get(url)
          .then((response) => {
            resolve(response.data?.result)
          })
          .catch((e) => {
            console.log(e)
            reject(e)
          })
      })
    },
    getChatMessageListSync(comment, roomId) {
      const url = `${API_PROD}/api/v1/private/talk/my-chat/${roomId}`
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
    uploadPrivateImage(comment, data, hasToken) {
      const url = `${API_PROD}/api/v1/private/common/upload`
      const headers = {}

      if (hasToken) {
        const token = sessionStorage.getItem('userToken')
        headers.Authorization = `Bearer ${token}`
      }

      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: url,
          data: data,
          headers: headers,
        }).then((response) => {
          console.log(response.data)
          resolve(response.data?.result)
        }).catch((e) => {
          console.log(e)
          reject(e)
        })
      })
    },
    readPrivateImage(comment, attcId) {
      isLoading.value = true
      if(attcId == null) return
      const url = `${API_PROD}/api/v1/private/common/image/${attcId}`
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: url,
          responseType: 'arraybuffer',
        }).then(response => {
          resolve(response.data)
        }).catch((e) => {
          console.log(e)
          reject(e)
        }).finally(() => {
          isLoading.value = false
        })
      })
    },
    existId(comment, userId) {
      const url = `${API_PROD}/api/v1/public/user/existid`
      const requestData = {
        'userId': userId
      };

      return new Promise((resolve, reject) => {
        axios({
          method: 'post',
          url: url,
          data: requestData,
        }).then(response => {
          resolve(response.data?.result)
        }).catch((e) => {
          console.log(e)
          reject(e)
        })
      })
    },
    getActivityHistory(comment, userId) {
      const url = `${API_PROD}/api/v1/private/user/activity-history/${userId}`
      const headers = {}

      const token = sessionStorage.getItem('userToken')
      headers.Authorization = `Bearer ${token}`
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: url,
          headers: headers,
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
  }
}
