import axios from 'axios'
import { API_PROD } from '@/util/constantURL'
import { isLoading } from '@/util/axios_cstm'

export default {
  namespaced: true,
  state: {
    bdListWeb : [],
    bdCnt: [],
    bdDetail: null,
    newPtInfo: null,
    timeline: null,
    ptDs: null,
    ptSv: null,
    ptBio: null,
    ptSp: null,
    rcmdModal: 1,
    transInfo: null,
    bdasHisInfo: null,
    bedStatCount: null,
  },
  getters: {
    getTimeline: (state) => {
      return state.timeline
    },
    getPtDs: (state) => {
      return state.ptDs
    }
  },
  mutations: {
    setRCMDModal(state, payload) {
      state.rcmdModal = payload
    },
    setbdDetail(state, payload) {
      state.bdDetail = payload
    },
    setTimeline(state, payload) {
      state.timeline = payload
    },
    setDisesInfo(state, payload) {
      state.ptDs = payload
    },
    setTransInfo(state, payload) {
      state.transInfo = payload
    },
    setBdasHisInfo(state, payload) {
      state.bdasHisInfo = payload
    },
    isTrsf(state, payload) {
      state.isTrsf = payload
    },
    isCfrmHosp(state, payload) {
      state.isCfrmHosp = payload
    },
    setBdListWeb(state,payload){
      state.bdListWeb = payload
    },
    setBedStatCount(state,payload){
      state.bedStatCount = payload
    }
  },
  actions: {
    /*병상배정목록*/
    async getBdListWeb(comment,data) {
      isLoading.value = true
      try {
        const token = sessionStorage.getItem('userToken')
        const url = `${API_PROD}/api/v1/private/bedasgn/list-web` // Todo 1
        console.log('병상배정목록 - web')
        const params = data
        const response = await axios.get(url,{ params,
          headers: {
            Authorization: `Bearer ${token}` // Add the token to the Authorization header
          }})

        if (response.data?.code === '00') {
          comment.commit('setBdListWeb', response.data?.result)
         // return router.push('/user/bedasgn/list')
        }
      } catch (e) {
        console.error(e)
        //return router.push('/user/bedasgn/list')
      } finally {
        isLoading.value = false
      }
    },

    async getBedStatCount(comment, data) {
      try {
        const token = sessionStorage.getItem('userToken')
        const url = `${API_PROD}/api/v1/private/bedasgn/bedstat-count`
        console.log('병상배정목록 - web')
        const params = data
        const response = await axios.get(url,{ params,
          headers: {
            Authorization: `Bearer ${token}`
          }})
        if (response.data?.code === '00') {
          comment.commit('setBedStatCount', response.data?.result)
        }
      } catch (e) {
        console.error(e)
      }
    },
    /*타임라인 조회*/
    async getTimeline(comment, data) {
      const token = sessionStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/patient/timeline/${data.ptId}/${data.bdasSeq}`
      console.log('병상배정 - 세부정보1 - 타임라인')
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}` // Add the token to the Authorization header
          }
        })
        if (response.data?.code === '00') {
          //console.log(response.data?.result)
          comment.commit('setTimeline', response.data?.result)
          //const userInfo = localStorage.getItem('userInfo')
          const res = response.data?.result
          if (res.items[0].title !== null && !res.items[0].title.includes('원내')) {
            comment.commit('setRCMDModal', 0)
          } else {
            comment.commit('setRCMDModal', 1)
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
    /*차수별 질병 정보 조회*/
    async getDSInfo(comment, data) {
      const token = sessionStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/patient/disease-info/${data.ptId}`
      // const url = `http://localhost:8080/api/v1/private/patient/disease-info/${data.ptId}`
      console.log('병상배정 - 세부정보 - 질병 정보')
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}` // Add the token to the Authorization header
          }
        })
        if (response.data?.code === '00') {
          //console.log(response.data?.result)
          comment.commit('setDisesInfo', response.data?.result)
        }
      } catch (e) {
        console.log(e)
      }
    },
    /*병상 이력 조회*/
    async getBdasHisInfo(comment, data) {
      //const token = localStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/patient/bdasHisinfos/${data.ptId}`
      // const url = `http://localhost:8080/api/v1/private/patient/disease-info/${data.ptId}`
      console.log('병상배정 - 병상 이력 조회')
      try {
        const response = await axios.get(url)
        if (response.data?.code === '00') {
          console.log(response.data?.result)
           comment.commit('setBdasHisInfo',response.data?.result);
        }
      } catch (e) {
        console.log(e)
      }
    },
    /*출도착정보조회*/
    async getTransInfo(comment, data) {
      const token = sessionStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/patient/transinfo/${data.ptId}/${data.bdasSeq}`
      // const url = `http://localhost:8080/api/v1/private/patient/disease-info/${data.ptId}`
      console.log('병상배정 - 출도착정보조회')
      try {
        const response = await axios.get(url,{
          headers: {
            Authorization: `Bearer ${token}` // Add the token to the Authorization header
          }
          })
        if (response.data?.code === '00') {
          console.log(response.data?.result)
          comment.commit('setTransInfo',response.data?.result);
        }
      } catch (e) {
        console.log(e)
      }
    },

    /* 병상 승인 - 병상배정반 */
    async aprvBedAsgn(comment, data) {
      const token = sessionStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/bedasgn/reqconfirm`
      const request = data
      console.log('병상승인')
      try {
        const response = await axios.post(url, request, {
          headers: {
            Authorization: `Bearer ${token}` // Add the token to the Authorization header
          }
        })
        if (response.data?.code === '00') {
          console.log(response.data?.result)
        }
      } catch (e) {
        console.error('병상승인 실패', e)
      }
    },
  }
}
