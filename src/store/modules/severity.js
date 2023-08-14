import axios from "axios";
import {API_PROD} from "@/util/constantURL";

export default {
    namespaced: true,
    state: {
        severityData: {
            ptId: null,
            hospId: null,
            anlyDt: null,
            probsData: []
        }
    },
    mutations: {
        setSeverityData(state, payload) {
            state.severityData.ptId = null
            state.severityData.hospId = null
            state.severityData.anlyDt = null
            state.severityData.probsData = []
            if (payload) {
                state.severityData.ptId = payload[0].ptId
                state.severityData.hospId = payload[0].hospId
                state.severityData.anlyDt = payload[0].anlyDt
                payload.sort((a, b) => {
                    return a.prdtDt.localeCompare(b.prdtDt)
                }).forEach(
                    dayRow => {
                        state.severityData.probsData.push({
                            prdtDt: dayRow.prdtDt,
                            svrtProb: dayRow.svrtProb
                        })
                    }
                )
            }
        }
    },
    actions: {
        getSeverityData(comment, ptId) {
            const url = `${API_PROD}/api/v1/private/severity/probs?ptId=${ptId}`
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