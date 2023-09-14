import axios from 'axios'
import { API_PROD } from '@/util/constantURL'

export default {
  namespaced: true,
  state: {
    ptList: null,
    ptBI: null,
    existPt: null,
    ptDetail: null,
    rptInfo: null,
    attcRpt: null,
    startLoc: null,
    isSpinner:0
  },
  getters: {
    getPtDetail: (state) => {
      return state.ptDetail
    }
  },
  mutations: {
    setPatntList(state, payload) {
      state.ptList = payload
    },
    regBasicInfo(state, payload) {
      state.ptBI = payload
    },
    setExPt(state, payload) {
      state.existPt = payload
    },
    setBasicInfo(state, payload) {
      if (payload[0] === 0) {
        state.ptDetail = payload[1]
      } else {
        state.ptDetail = { ...state.ptDetail, zip: payload[1] }
      }
    },
    setStartLoc(state, payload) {
      state.startLoc = payload
    },
    setZip(state, payload) {
      state.rptInfo = {
        ...state.rptInfo,
        zip: payload,
        bascAddr: state.rptInfo.baseAddr,
        detlAddr: state.rptInfo.dtlAddr
      }
    },
    setInstZip(state, payload) {
      state.rptInfo = { ...state.rptInfo, instZip: payload, instBascAddr: state.rptInfo.instAddr }
    },
    uploadRpt(state, payload) {
      if (payload.dethYn === '생존') {
        payload.dethYn = 'N'
      } else {
        payload.dethYn = 'Y'
      }
      state.rptInfo = payload
    },
    setAttcRpt(state, payload) {
      state.attcRpt = payload
    },
    setRpt(state, payload) {
      state.rptInfo = payload
    },
    startSpinner(state,payload){
      state.isSpinner = payload
    }
  },
  actions: {
    /*환자 목록 조회*/
    async getPatntList(comment, data) {
      //const token = localStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/patient/search`

      const params = data

      console.log('환자 목록 조회' + data)
      try {
        const response = await axios.get(url, { params })
        if (response.data?.code === '00') {
          await comment.commit('setPatntList', response.data?.result)
        }
      } catch (e) {
        console.log(e)
      }
    },
    getSevrPatntListWidget(comment, data) {
      const url = `${API_PROD}/api/v1/private/patient/search`
      const params = data
      return new Promise((resolve, reject) => {
        axios
          .get(url, { params })
          .then((response) => {
            if (response.data?.code === '00') {
              resolve(response.data?.result)
            } else {
              reject()
            }
          })
          .catch((e) => {
            console.log(e)
            reject(e)
          })
      })
    },
    /*환자 정보 수정*/
    async modiPtInfo(comment, data) {
      //const token = localStorage.getItem('userToken')
      console.log(data)
      const url = `${API_PROD}/api/v1/private/patient/modinfo/${data.ptId}`
      const request = data.newPt
      console.log('기존 환자 정보 업데이트')
      try {
        const response = await axios.post(url, request)
        if (response.data?.code === '00') {
          //console.log(response.data?.result)
          await comment.commit('setRpt', null)
        }
      } catch (e) {
        console.log(e)
      }
    },
    /*환자 기본 정보 등록 - 1단계*/
    async regBasicInfo(comment, data) {
      const token = localStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/patient/regbasicinfo`
      // const url = `http://localhost:8080/api/v1/private/patient/regbasicinfo`
      const request = data
      // console.log('환자 등록 - 기본 정보')
      try {
        const response = await axios.post(url, request, {
          headers: {
            Authorization: `Bearer ${token}` // Add the token to the Authorization header
          }
        })
        if (response.data?.code === '00') {
          // console.log(response.data?.result)
          comment.commit('regBasicInfo', response.data?.result)
        }
      } catch (e) {
        console.log(e)
      }
    },
    /*역조서 업로드*/
    async uploadRpt(comment, data) {
      comment.commit('startSpinner',1)
      const token = localStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/patient/upldepidreport`
      console.log(data)
      const request = data
      console.log('역학조사서 업로드')
      try {
        const response = await axios.post(url, request, {
          headers: {
            Authorization: `Bearer ${token}` // Add the token to the Authorization header
          }
        })
        if (response.data?.code === '00') {
          //console.log(response.data?.result)
          await comment.commit('uploadRpt', response.data?.result)
          comment.commit('startSpinner',0)
          comment.dispatch('geoCoding', [0, response.data?.result.baseAddr])
        }
      } catch (e) {
        console.log(e)
      }
    },
    /*역조서 삭제*/
    async removeRpt(comment, data) {
      const url = `${API_PROD}/api/v1/private/patient/delepidreport/${data}`
      console.log(data)
      console.log('역학조사서 삭제')
      try {
        const response = await axios.post(url)
        if (response.data?.code === '00') {
          await comment.commit('setRpt', null)
        }
      } catch (e) {
        console.log(e)
      }
    },
    /*attcId로 역조서 읽기*/
    async readEpidRpt(comment, data) {
      if (!data || !data.attcId) {
        return
      }
      const url = `${API_PROD}/api/v1/private/patient/read-epidreport/${data.attcId}`

      try {
        const response = await axios.get(url)
        if (response.data?.code === '00') {
          await comment.commit('setAttcRpt', response.data?.result)
        } else {
          comment.commit('setAttcRpt', null)
        }
      } catch (e) {
        console.log(e)
      }
    },
    /*네이버 주소 찾기*/
    async geoCoding(comment, data) {
      const token = localStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/test/geocoding-test`
      const request = { query: data[1] }
      try {
        const response = await axios.post(url, request, {
          headers: {
            Authorization: `Bearer ${token}` // Add the token to the Authorization header
          }
        })
        if (response.data?.status === 'OK') {
          if (data[0] === 0) {
            console.log('역학조사서 파싱 후 주소')
            comment.commit('setZip', response.data?.addresses[0]?.addressElements[8]?.longName)
          } else if (data[0] === 1) {
            await comment.commit('setInstZip', response.data?.addresses[0]?.addressElements[8]?.longName)
          } else {
            console.log('환자정보 조회 후 우편번호')
            comment.commit('setStartLoc', {
              x: response.data?.addresses[0]?.x,
              y: response.data?.addresses[0]?.y
            })
            comment.commit('setBasicInfo', [
              1,
              response.data?.addresses[0]?.addressElements[8]?.longName
            ])
          }
        }
      } catch (e) {
        console.log(e)
      }
    },

    /*환자 기본 정보 조회*/
    async getBasicInfo(comment, data) {
      //const token = localStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/patient/basicinfo/${data.ptId}`
      console.log('환자 기본 정보 조회' + data.ptId)
      try {
        const response = await axios.get(url)
        if (response.data?.code === '00') {
          await comment.commit('setBasicInfo', [0, response.data?.result])
          await comment.dispatch('geoCoding', [2, response.data?.result.bascAddr])
        }
      } catch (e) {
        console.log(e)
      }
    },
    getBasicInfo2(comment, data) {
      const url = `${API_PROD}/api/v1/private/patient/basicinfo/${data.ptId}`
      return new Promise((resolve, reject) => {
        axios
          .get(url)
          .then((response) => {
            if (response.data?.code === '00') {
              resolve(response.data?.result)
            } else {
              reject()
            }
          })
          .catch((e) => {
            console.log(e)
            reject(e)
          })
      })
    },

    /*환자 중복 유효성*/
    async isExistPt(comment, data) {
      const url = `${API_PROD}/api/v1/private/patient/exist`
      const request = data
      try {
        const response = await axios.post(url, request)
        if (response.data?.code === '00') {
          if (response.data?.result.isExist) {
            comment.commit('setExPt', response.data?.result.items)
          } else {
            comment.commit('setExPt', null)
          }
        }
      } catch (e) {
        console.log(e)
      }
    },
    /*생체정보 입력 분석 - 중증도 분류 AI 분석*/
    async regBioAnlys(comment, data) {
      //const token = localStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/patient/bioinfoanlys`
      const request = data
      // console.log('생체정보 분석')
      try {
        const response = await axios.post(url, request)
        if (response.data?.code === '00') {
          // console.log(response.data?.code)
          /*if(response.data?.result.isExist){
                        comment.commit('setExPt',response.data?.result.items);
                    } else {
                        comment.commit('setExPt',null)
                    }*/
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
}
