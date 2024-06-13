import axios from 'axios'
import {API_PROD} from '@/util/constantURL'
import router from '@/router/router'
import { axios_cstm } from '@/util/axios_cstm'

const commonCodesUrl = `${API_PROD}/api/v1/public/common/codes`

export default {
  namespaced: true,
  state: {
    //병상 배정 상태
    bedAssignmentStatus: [],
    //병상 유형
    bedType: [],
    //병상 배정 불가 사유
    bedNoReason: [],
    //중증 유형 타입
    severityType: [],
  },
  mutations: {
    setBedAssignmentStatus(state, payload) {
      state.bedAssignmentStatus = payload
    },
    setBedType(state, payload) {
      state.bedType = payload
    },
    setBedNoReason(state, payload) {
      state.bedNoReason = payload
    },
    setSeverityType(state, payload) {
      state.severityType = payload
    }
  },
  getters: {
    getBedAssignmentStatusCodes(state) {
      return state.bedAssignmentStatus
    },
    getBedType(state) {
      return state.bedType
    },
    getBedNoReason(state) {
      return state.bedNoReason
    },
    getSeverityType(state) {
      return state.severityType
    }
  },
  actions: {
    getCommonCodes({ dispatch }) {
      dispatch('getBedAssignmentStatusCodes')
      dispatch('getBedTypeCodes')
      dispatch('getBedNoReasonCodes')
      dispatch('getSeverityTypeCodes')
    },
    getBedAssignmentStatusCodes({ commit }) {
      const url = `${commonCodesUrl}/BAST`

      axios_cstm().get(url).then((response) => {
        commit('setBedAssignmentStatus', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getBedTypeCodes({ commit }) {
      const url = `${commonCodesUrl}/BDTP`

      axios_cstm().get(url).then((response) => {
        commit('setBedType', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getBedNoReasonCodes({ commit }) {
      const url = `${commonCodesUrl}/BNRN`

      axios_cstm().get(url).then((response) => {
        commit('setBedNoReason', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getSeverityTypeCodes({ commit }) {
      const url = `${commonCodesUrl}/SVTP`

      axios_cstm().get(url).then((response) => {
        commit('setSeverityType', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
  }
}