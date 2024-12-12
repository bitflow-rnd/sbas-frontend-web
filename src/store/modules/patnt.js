import axios from 'axios'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm, isLoading } from '@/util/axios_cstm'

export default {
  namespaced: true,
  state: {
    ptList: null,
    severPtList: null,
    hospList: null,
    existPt: null,
    ptDetail: null,
    attcRpt: null,
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
    setSeverPatntList(state, payload) {
      state.severPtList = payload
    },
    setHospList(state, payload) {
      state.hospList = payload['items'].filter(x => !!x)
    },
    setExPt(state, payload) {
      state.existPt = payload
    },
    setBasicInfo(state, payload) {
      if (payload !== null) {
        const undrDsesCd = payload.undrDsesCd ?? []
        const undrDsesCdNm = payload.undrDsesCdNm ?? []
        state.ptDetail = { ...payload, undrDsesCd: undrDsesCd, undrDsesCdNm: undrDsesCdNm }
      } else {
        state.ptDetail = payload
      }
    },
    setAttcRpt(state, payload) {
      state.attcRpt = payload
    },
  },
  actions: {
    /*환자 목록 조회*/
    async getPatntList(comment, data) {
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
    async getHospList(comment, data) {
      const url = `${API_PROD}/api/v1/private/patient/searchhosps`
      const params = data

      try {
        const response = await axios.get(url, { params })
        if (response.data?.code === '00') {
          await comment.commit('setHospList', response.data?.result)
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
    /*환자 기본 정보 조회*/
    async getBasicInfo(comment, data) {
      //const token = localStorage.getItem('userToken')
      const url = `${API_PROD}/api/v1/private/patient/basicinfo/${data.ptId}`
      console.log('환자 기본 정보 조회' + data.ptId)
      try {
        const response = await axios.get(url)
        if (response.data?.code === '00') {
          await comment.commit('setBasicInfo', response.data?.result)
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
    },
  }
}

export function registerNewPt(data, onSuccess, onError) {
  const url = `${API_PROD}/api/v1/private/patient/regbasicinfo`
  axios_cstm()
    .post(url, data)
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
        onSuccess(data)
      }
    }).catch((e) => {
      console.error(e)
    })
}

export function upldEpidRpt(data, onSuccess, onError) {
  const token = sessionStorage.getItem('userToken')
  const url = `${API_PROD}/api/v1/private/patient/upldepidreport`
  console.log('역학조사서 업로드')
  isLoading.value = true
  axios
    .post(url, data, {
      headers: { Authorization: `Bearer ${token}` }
    }).then((response) => {
    const data = response.data
    if (data.code === '00') {
      onSuccess(data)
    } else {
      onError(data)
    }
  }).catch((e) => {
    onError(e)
  }).finally(() => {
    isLoading.value = false
  })
}