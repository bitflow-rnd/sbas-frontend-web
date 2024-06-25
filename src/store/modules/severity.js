import axios from 'axios'
import { API_PROD } from '@/util/constantURL'

export default {
  namespaced: true,
  state: {
    severityData: {
      ptId: null,
      hospId: null,
      anlyDt: null,
      first: [],
      second: [],
      third: []
    }
  },
  getters: {
    getSeverityData: (state) => {
      return state.severityData
    }
  },
  mutations: {
    setSeverityData(state, payload) {
      state.severityData.ptId = null
      state.severityData.hospId = null
      state.severityData.anlyDt = null
      state.severityData.first = []
      if (payload) {
        state.severityData.ptId = payload[0].ptId
        state.severityData.hospId = payload[0].hospId
        state.severityData.anlyDt = payload[0].anlyDt
        payload
          .forEach((item) => {
            let date = null
            if (item.prdtDt) {
              date = new Date(
                `${item.prdtDt.substring(0, 4)}-${item.prdtDt.substring(4, 6)}-${item.prdtDt.substring(6)}`
              ).getTime()
            } else if (item.msreDt) {
              date = new Date(
                `${item.msreDt.substring(0, 4)}-${item.msreDt.substring(4, 6)}-${item.msreDt.substring(6)}`
              ).getTime()
            }
            state.severityData.first.push({
              prdtDt: date,
              CovSF: parseFloat(item.covSf?.replace(',', '.')),
              oxygenApply: item.oxygenApply,
            })
        })
      }
    }
  },
  actions: {
    getSeverityData(comment, ptId) {
      const url = `${API_PROD}/api/v1/private/severity/probs?ptId=${ptId}`
      axios({
        method: 'get',
        url: url
      })
        .then((response) => {
          comment.commit('setSeverityData', response.data?.result)
        })
        .catch((e) => {
          console.log(e)
          return []
        })
    },
    getSeverityData2(ctx, ptId) {
      const url = `${API_PROD}/api/v1/private/severity/probs?ptId=${ptId}`
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: url
        })
          .then((response) => {
            ctx.commit('setSeverityData', response.data?.result)
            resolve(ctx.state.severityData)
          })
          .catch((e) => {
            console.log(e)
            reject(e)
          })
      })
    }
  }
}
