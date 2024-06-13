import axios from 'axios'
import {API_PROD} from '@/util/constantURL'
import router from '@/router/router'
import { axios_cstm } from '@/util/axios_cstm'

const commonCodesUrl = `${API_PROD}/api/v1/public/common/codes`

export default {
  namespaced: true,
  state: {
    bedAssignmentStatus: [],
    bedType: [],
    bedNoReason: [],
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
    }
  },
  actions: {
    getCommonCodes({ dispatch }) {
      dispatch('getBedAssignmentStatusCodes')
      dispatch('getBedTypeCodes')
      dispatch('getBedNoReason')
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
    getBedNoReason({ commit }) {
      const url = `${commonCodesUrl}/BNRN`

      axios_cstm().get(url).then((response) => {
        commit('setBedNoReason', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    }
  }
}