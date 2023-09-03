import axios from "axios";
import {API_PROD} from "@/util/constantURL";

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
    },
    mutations: {
        setSeverityData(state, payload) {
            state.severityData.ptId = null
            state.severityData.hospId = null
            state.severityData.anlyDt = null
            state.severityData.first = []
            state.severityData.second = []
            state.severityData.third = []
            let prevDt = ''
            let probs = []
            if (payload) {
                state.severityData.ptId = payload[0].ptId
                state.severityData.hospId = payload[0].hospId
                state.severityData.anlyDt = payload[0].anlyDt
                payload.sort((a, b) => {
                    return a.prdtDt.localeCompare(b.prdtDt)
                }).forEach(
                    prdtRow => {
                        if (prdtRow.prdtDt !== prevDt) {
                            if (probs.length) {
                                const mean = probs.reduce((a, b) => a + b) / probs.length
                                const std = Math.sqrt(probs.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / probs.length)
                                const date = new Date(`${prevDt.substring(0, 4)}-${prevDt.substring(4, 6)}-${prevDt.substring(6)}`).getTime()
                                state.severityData.first.push({
                                    prdtDt: date,
                                    svrtProb: (mean + std) > 1.0 ? 1.0 : mean + std
                                })
                                state.severityData.second.push({
                                    prdtDt: date,
                                    svrtProb: mean
                                })
                                state.severityData.third.push({
                                    prdtDt: date,
                                    svrtProb: (mean - std) < 0.0 ? 0.0 : mean - std
                                })
                            }
                            probs = [parseFloat(prdtRow.svrtProb?.replace(',', '.'))]
                            prevDt = prdtRow.prdtDt
                        } else {
                            probs.push(parseFloat(prdtRow.svrtProb?.replace(',', '.')))
                        }
                    }
                )
                const mean = probs.reduce((a, b) => a + b) / probs.length
                const std = Math.sqrt(probs.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / probs.length)
                const date = new Date(`${prevDt.substring(0, 4)}-${prevDt.substring(4, 6)}-${prevDt.substring(6)}`).getTime()
                state.severityData.first.push({
                    prdtDt: date,
                    svrtProb: mean + std
                })
                state.severityData.second.push({
                    prdtDt: date,
                    svrtProb: mean
                })
                state.severityData.third.push({
                    prdtDt: date,
                    svrtProb: mean - std
                })
            }


        }
    },
    actions: {
        getSeverityData(comment, ptId) {
            const url = `${API_PROD}/api/v1/private/severity/probs?ptId=${ptId}`
            // const url = `http://localhost:8080/api/v1/private/severity/probs?ptId=${ptId}`
            axios({
                method: "get",
                url: url
            }).then(response => {
                comment.commit('setSeverityData', response.data?.result)
            }).catch(e => {
                console.log(e)
            })
        },
    },
};
