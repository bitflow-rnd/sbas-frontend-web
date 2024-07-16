import {API_PROD} from '@/util/constantURL'
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
    //퇴원 사유
    dischargeReason: [],
    //DNR 동의 여부
    dnrAgreeYn: [],
    //전산 기관
    organization: [],
    //출발지역 유형
    departureType: [],
    //세부 권한
    detailPermission: [],
    //파일 유형
    fileType: [],
    //입퇴원 상태
    inOutStatus: [],
    //공지사항 유형
    noticeType: [],
    //조직 유형
    organizationType: [],
    //권한 그룹
    permissionGroup: [],
    //환자 유형
    patientType: [],
    //요청 유형
    requestType: [],
    //기저질환
    underLyingDisease: [],
    //사용자 상태
    userStatus: [],
    //국적
    nationality: [],
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
    },
    setDischargeReason(state, payload) {
      state.dischargeReason = payload
    },
    setDnrAgreeYn(state, payload) {
      state.dnrAgreeYn = payload
    },
    setOrganization(state, payload) {
      state.organization = payload
    },
    setDepartureType(state, payload) {
      state.departureType = payload
    },
    setDetailPermission(state, payload) {
      state.detailPermission = payload
    },
    setFileType(state, payload) {
      state.fileType = payload
    },
    setInOutStatus(state, payload) {
      state.inOutStatus = payload
    },
    setNoticeType(state, payload) {
      state.noticeType = payload
    },
    setOrganizationType(state, payload) {
      state.organizationType = payload
    },
    setPermissionGroup(state, payload) {
      state.permissionGroup = payload
    },
    setPatientType(state, payload) {
      state.patientType = payload
    },
    setRequestType(state, payload) {
      state.requestType = payload
    },
    setUnderLyingDisease(state, payload) {
      state.underLyingDisease = payload
    },
    setUserStatus(state, payload) {
      state.userStatus = payload
    },
    setNationality(state, payload) {
      state.nationality = payload
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
    },
    getDischargeReason(state) {
      return state.dischargeReason
    },
    getDnrAgreeYn(state) {
      return state.dnrAgreeYn
    },
    getOrganization(state) {
      return state.organization
    },
    getDepartureType(state) {
      return state.departureType
    },
    getDetailPermission(state, payload) {
      return state.detailPermission
    },
    getFileType(state, payload) {
      return state.fileType
    },
    getInOutStatus(state, payload) {
      return state.inOutStatus
    },
    getNoticeType(state, payload) {
      return state.noticeType
    },
    getOrganizationType(state, payload) {
      return state.organizationType
    },
    getPermissionGroupType(state, payload) {
      return state.permissionGroup
    },
    getPatientType(state, payload) {
      return state.patientType
    },
    getRequestType(state, payload) {
      return state.requestType
    },
    getUnderLyingDisease(state, payload) {
      return state.underLyingDisease
    },
    getUserStatus(state, payload) {
      return state.userStatus
    },
    getNationality(state, payload) {
      return state.nationality
    },
  },
  actions: {
    getCommonCodes({ dispatch }) {
      dispatch('getBedAssignmentStatusCodes')
      dispatch('getBedTypeCodes')
      dispatch('getBedNoReasonCodes')
      dispatch('getSeverityTypeCodes')
      dispatch('getDischargeReasonCodes')
      dispatch('getDnrAgreeYnCodes')
      dispatch('getOrganizationCodes')
      dispatch('getDepartureTypeCodes')
      dispatch('getDetailPermissionCodes')
      dispatch('getFileTypeCodes')
      dispatch('getInOutStatusCodes')
      dispatch('getNoticeTypeCodes')
      dispatch('getOrganizationTypeCodes')
      dispatch('getPermissionGroupCodes')
      dispatch('getPatientTypeCodes')
      dispatch('getRequestTypeCodes')
      dispatch('getUnderLyingDiseaseCodes')
      dispatch('getUserStatusCodes')
      dispatch('getNationalityCodes')
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
    getDischargeReasonCodes({ commit }) {
      const url = `${commonCodesUrl}/DCRN`

      axios_cstm().get(url).then((response) => {
        commit('setDischargeReason', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getDnrAgreeYnCodes({ commit }) {
      const url = `${commonCodesUrl}/DNRA`

      axios_cstm().get(url).then((response) => {
        commit('setDnrAgreeYn', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getOrganizationCodes({ commit }) {
      const url = `${commonCodesUrl}/DPOG`

      axios_cstm().get(url).then((response) => {
        commit('setOrganization', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getDepartureTypeCodes({ commit }) {
      const url = `${commonCodesUrl}/DPTP`

      axios_cstm().get(url).then((response) => {
        commit('setDepartureType', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getDetailPermissionCodes({ commit }) {
      const url = `${commonCodesUrl}/DTPM`

      axios_cstm().get(url).then((response) => {
        commit('setDetailPermission', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getFileTypeCodes({ commit }) {
      const url = `${commonCodesUrl}/FLTP`

      axios_cstm().get(url).then((response) => {
        commit('setFileType', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getInOutStatusCodes({ commit }) {
      const url = `${commonCodesUrl}/IOST`

      axios_cstm().get(url).then((response) => {
        commit('setInOutStatus', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getNoticeTypeCodes({ commit }) {
      const url = `${commonCodesUrl}/NOTC`

      axios_cstm().get(url).then((response) => {
        commit('setNoticeType', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getOrganizationTypeCodes({ commit }) {
      const url = `${commonCodesUrl}/OGTP`

      axios_cstm().get(url).then((response) => {
        commit('setOrganizationType', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getPermissionGroupCodes({ commit }) {
      const url = `${commonCodesUrl}/PMGR`

      axios_cstm().get(url).then((response) => {
        commit('setPermissionGroup', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getPatientTypeCodes({ commit }) {
      const url = `${commonCodesUrl}/PTTP`

      axios_cstm().get(url).then((response) => {
        commit('setPatientType', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getRequestTypeCodes({ commit }) {
      const url = `${commonCodesUrl}/RQTP`

      axios_cstm().get(url).then((response) => {
        commit('setRequestType', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getUnderLyingDiseaseCodes({ commit }) {
      const url = `${commonCodesUrl}/UDDS`

      axios_cstm().get(url).then((response) => {
        commit('setUnderLyingDisease', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getUserStatusCodes({ commit }) {
      const url = `${commonCodesUrl}/URST`

      axios_cstm().get(url).then((response) => {
        commit('setUserStatus', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
    getNationalityCodes({ commit }) {
      const url = `${commonCodesUrl}/NATI`

      axios_cstm().get(url).then((response) => {
        commit('setNationality', response.data?.result)
      }).catch( e => {
        console.log(e)
      })
    },
  }
}