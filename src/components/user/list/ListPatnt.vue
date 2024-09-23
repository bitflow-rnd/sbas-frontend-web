<template>
  <!--begin::Main-->
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <!--begin::Content wrapper-->
    <div class="d-flex flex-column flex-column-fluid">
      <!--begin::Toolbar-->
      <div id="kt_app_toolbar" class="app-toolbar">
        <!--begin::Toolbar wrapper-->
        <div class="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
          <!--begin::Page title-->
          <div class="page-title d-flex flex-column justify-content-center gap-1 me-3">
            <!--begin::Breadcrumb-->
            <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-base">
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                <router-link to="/dashbd" class="text-hover-primary">
                  <i class="fa-solid fa-house"></i>
                </router-link>
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                <span class="svg-icon svg-icon-4 mx-n1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">환자관리</li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                <span class="svg-icon svg-icon-4 mx-n1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-500 mx-n1">
                <h1
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0"
                >
                  환자정보 관리
                </h1>
              </li>
              <li class="breadcrumb-item ml-2 ms-5">
                <span>&nbsp;병상배정 이력이 있거나, 배정 예정 중인 환자 목록입니다.</span>
              </li>
            </ul>
          </div>
          <!--begin::Actions-->
          <div class="d-flex align-items-center gap-2 gap-lg-3">
            <a
              href="#"
              class="btn btn-flex btn-sm btn-secondary fs-7"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_view_users"
            ><i class="fa-solid fa-download"></i> 엑셀다운로드</a
            >
            <a
              @click="openRgstModal()"
              class="btn btn-sm btn-flex btn-primary align-self-center px-3"
            >
              <i class="fa-solid fa-plus"></i> 환자등록
            </a>
          </div>
          <!--end::Actions-->
        </div>
        <!--end::Toolbar wrapper-->
      </div>
      <!--end::Toolbar-->
      <!--begin::Content-->
      <div v-if="ptList !== null" id="kt_app_content" class="app-content flex-column-fluid">
        <div class="card">
          <!--begin::Card header-->
          <div class="card-header border-0 p-8">
            <!--begin::Card toolbar-->
            <article class="table-form-layout1">
              <div class="form-head-box"></div>

              <div class="form-body-box">
                <div class="table-box">
                  <table>
                    <colgroup>
                      <col style="width: 168px" />
                      <col style="width: auto" />
                      <col style="width: 168px" />
                      <col style="width: auto" />
                    </colgroup>
                    <tbody>
                    <tr>
                      <th>지역</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select v-model="filterPatient['address']['first']"
                                    @change="changeDstrCd1()">
                              <option value="" id="null">시/도 전체</option>
                              <option v-for="(item,idx) in cmSido" :key="idx"
                                      :value="item['cdId']">{{ item['cdNm'] }}
                              </option>
                            </select>
                          </div>

                          <div class="sbox w-175px ms-2">
                            <select :disabled="enableSecondAddressPicker" v-model="filterPatient['address']['second']"
                                    @change="changeDstrCd2()">
                              <option value="" id="null">시/군/구 전체</option>
                              <option v-for="(item,idx) in cmGugun" :key="idx"
                                      :value="item['cdId']">{{ item['cdNm'] }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </td>
                      <th>배정병원</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select :disabled="disableHospitalPicker" v-model="filterPatient['hospitalName']"
                                    @change="search()">
                              <option :value="null" id="null">병원 전체</option>
                              <option v-for="(item,idx) in model.hospList" :key="idx"
                                      :value="item">{{ item }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>배정상태</th>
                      <td>
                        <div
                          class="item-cell-box select-box"
                          v-for="(status, idx) in Object.entries(assignmentStatuses)"
                          :key="idx"
                        >
                          <div class="cbox me-4">
                            <label>
                              <input
                                type="checkbox"
                                v-model="filterPatient['assignmentStatus']"
                                name="state"
                                :value="status[1]"
                                @change="search"
                              /><i></i>
                              <span class="txt">{{ status[0] }}</span>
                            </label>
                          </div>
                        </div>
                      </td>
                      <th>검색어</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="tbox w-400px with-btn">
                            <input
                              type="text"
                              v-model="filterPatient['searchText']"
                              placeholder="환자 이름, 생년월일 6자리 또는 휴대폰번호 입력"
                              @keyup.enter="search"
                            />

                            <a @click="search" class="input-btn" role="button">
                              <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body p-8">
            <!--begin::Table-->
            <h5 class="d-flex">
              <div class="flex-grow-1 d-flex fs-16px">
                <div>검색결과</div>
                <div class="badge ms-2 rounded-pill bg-primary fs-14px px-2">
                  {{ ptList.count }}
                </div>
              </div>
            </h5>

            <article class="table-list-layout1">
              <div class="table-body-box">
                <div class="table-box with-scroll small">
                  <table class="list-table-hoverable">
                    <colgroup>
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 70px" />
                      <col style="width: 50px" />
                      <col style="width: 140px" />
                      <col style="width: 120px" />
                      <col style="width: 100px" />
                      <col style="width: auto" />
                      <col style="width: 110px" />
                      <col style="width: 100px" />
                      <col style="width: 50px" />
                      <col style="width: 70px" />
                      <col v-if='isSysAdm()' style="width: 70px" />
                    </colgroup>
                    <thead>
                    <tr class="small" style='cursor:default !important'>
                      <th>배정상태</th>
                      <th>이름</th>
                      <th>생년월일</th>
                      <th>성별</th>
                      <th>배정병원</th>
                      <th>거주지</th>
                      <th>중증도</th>
                      <th>질병명</th>
                      <th>연락처</th>
                      <th>국적</th>
                      <th>업데이트<br/>일시</th>
                      <th>작업</th>
                      <th v-if='isSysAdm()'>삭제</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="(pt, idx) in ptList['items']"
                      :key="idx" @click="selectPatient(pt)"
                    >
                      <td>{{ pt['bedStatCdNm'] ? pt['bedStatCdNm'] : '환자정보등록' }}</td>
                      <td>
                        <div class='text-center'>
                          <div class='pt-nm'>{{
                              pt['ptNm'].length > 1 ? (pt['ptNm'].substring(0, 1) + '*' + pt['ptNm'].substring(2, pt['ptNm'].length)) : pt['ptNm']
                            }}
                          </div>
                        </div>
                      </td>
                      <td>
                        {{ pt['rrno1'] ? pt['rrno1'].slice(0, 2) + '.' + pt['rrno1'].slice(2, 4) + '.' + pt['rrno1'].slice(4) : '-' }}
                      </td>
                      <td>{{ pt['gndr'] }}자</td>
                      <td class="text-start">{{ pt['hospNm'] ? pt['hospNm'] : '-' }}</td>
                      <td>{{ `${pt['dstr1CdNm']} ${pt['dstr2CdNm'] || ''}` }}</td>
                      <td v-if="pt['svrtTypeCdNm']">{{ pt['svrtTypeCdNm'] }}<br>({{ pt['svrtIptTypeCdNm'] }})</td>
                      <td v-if="!pt['svrtTypeCdNm']">-</td>
                      <td class="text-start">{{ pt['tagList'].length > 0 ? pt['tagList'].join(', ') : '-' }}</td>
                      <td>{{ pt['mpno'] ? pt['mpno'] : '-' }}</td>
                      <td>{{ pt['natiCdNm'] ? pt['natiCdNm'] : '-' }}</td>
                      <td>{{ TimestampToDateWithDot(pt['updtDttm']) }}</td>
                      <td
                        @click='toggleCheckbox()'
                      ><a @click.stop='showPatntModal(pt,2)'
                          class='btn btn-flex btn-xs btn-outline btn-outline-primary'
                      >수정</a>
                      </td>
                      <td v-if='isSysAdm()'
                      ><a @click.stop='openDeletePopup(pt)'
                          class='btn btn-flex btn-xs btn-outline btn-outline-primary'
                          style='color: #FF666EFF'
                      >삭제</a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            <data-pagination
              @change="changePage"
              :next-page-buttons-count="nextPageButtonsCount"
              :previous-page-buttons-count="previousPageButtonsCount"
              :display-change-page-buttons-count="displayChangePageButtonsCount"
              :display-rows-count="displayRowsCount"
              :data-length="ptList['count']"
            ></data-pagination>

            <!--end::Table-->
          </div>
          <!--end::Card body-->
        </div>
      </div>
      <!--end::Content-->
    </div>
    <!--end::Content wrapper-->
  </div>
  <!--end:::Main-->

  <!--  환자 상세 정보  -->
  <PatntDetlModalV2 v-if='showModal===1' :pt-detail='ptDetail' :pt-ds='ptDs'
                    :bdas-his-info='bdasHisInfo' :timeline='timeline'
                    @closeModal='closeModal(0)'
                    @openBdasModal='this.showPatntModal(ptDetail,1)' />

  <!--  신규병상요청   -->
  <BedRequestModal v-if='showPatnt' @close-patnt-request='closePatntRequest'
                   :pt-id='newPt.ptId' />

  <patnt-reg-modal v-if='this.showModal === 2' :exist-pt='this.ptDetail' @closeModal='closeModal(0)' />

  <SbasAlert :is-alert='this.confirmAlert' :err-msg='this.errMsg' :cnc-btn='true'
             @confirmAlert='deletePatient(deletePt)' @alertClose='closeDeletePopup' />

</template>

<script>
import DataPagination from '@/components/user/cpnt/DataPagination.vue'
import { mapState } from 'vuex'
import { TimestampToDateWithDot, toggleCheckbox } from '@/util/ui'
import { reactive } from 'vue'
import PatntRegModal from '@/components/user/modal/PatntRegModal.vue'
import PatntDetlModalV2 from '@/components/user/modal/PatntDetlModalV2.vue'
import BedRequestModal from '@/components/user/bdas/BdasReqModal.vue'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'
import SbasAlert from '@/components/common/SbasAlert.vue'

export default {
  components: {
    SbasAlert,
    BedRequestModal,
    PatntDetlModalV2,
    PatntRegModal,
    DataPagination
  },
  name: 'ListPatnt',
  props: {
    msg: String
  },
  async mounted() {
    this.setDefaultDstr1Cd()
    this.getHospitalList()
  },
  setup() {
    let model = reactive({
      hospList: [],
    })

    return {
      model
    }
  },
  data() {
    return {
      showModal: 0,
      rptYn: false /* 역조서 유무 */,
      preRpt: null /*역조서 이미지 링크*/,
      reportFile: null,
      newPt: {
        ptNm: '', gndr: null, rrno1: null, rrno2: null,
        dethYn: '', natiCd: '', natiNm: '대한민국',
        dstr1Cd: '', dstr2Cd: '', telno: '', picaVer: null,
        nokNm: '', mpno: '', job: '', attcId: null,
        bascAddr: '', detlAddr: '', zip: '',
        undrDsesCd: [], undrDsesEtc: null
      },
      epidReportImage: '',
      dsInfo: {
        ptId: '',
        occrDt: '',
        diagDt: '',
        rptDt: '',
        instZip: '',
        instBascAddr: '',
        instDetlAddr: '',
        esvyAttcId: null,
        rptType: null,
        diagAttcId: null,
        diagDrNm: '',
        instId: '',
        rcptPhc: 0
      },
      bioAnlys: {},
      assignmentStatuses: {
        '병상요청': 'BAST0003',
        '병상배정': 'BAST0004',
        '이송·배차': 'BAST0005',
        '입·퇴원처리': 'BAST0006',
        '완료': 'BAST0007,BAST0008',
        '환자등록': 'BAST0001'
      },
      genders: ['남', '여'],
      dateRanges: ['1개월', '3개월', '6개월', '1년', '전체', '직접지정'],
      patientData: [],
      displayRowsCount: 15,
      displayChangePageButtonsCount: 10,
      previousPageButtonsCount: 4,
      nextPageButtonsCount: 4,
      page: 1,
      checkedPatients: [],
      allPatientsSelected: false,
      filterPatient: {
        address: {
          first: '',
          second: ''
        },
        hospitalName: null,
        assignmentStatus: [],
        searchText: ''
      },
      medinstInfo: {
        dstr1Cd: '',
        dstr2Cd: '',
      },
      showPatnt: false,
      showSvrtInfoModal: false,
      deletePt: null,
      confirmAlert: false,
      errMsg: '',
    }
  },
  computed: {
    ...mapState('user', ['userInfo']),
    ...mapState('admin', ['cmSido', 'cmGugun', 'organMedi']),
    ...mapState('bedasgn', ['timeline', 'ptDs', 'bdasHisInfo']),
    ...mapState('patnt', ['ptDetail', 'ptBI', 'ptList', 'hospList', 'rptInfo', 'attcRpt']),
    filterData() {
      let params = {}
      if (this.filterPatient['searchText']) params = { ...params, ptNm: this.filterPatient['searchText'] }
      if (this.filterPatient['searchText']) params = { ...params, rrno1: this.filterPatient['searchText'] }
      if (this.filterPatient['searchText']) params = { ...params, mpno: this.filterPatient['searchText'] }
      if (this.filterPatient['address']['first']) params = {
        ...params,
        dstr1Cd: this.filterPatient['address']['first']
      }
      if (this.filterPatient['address']['second']) params = {
        ...params,
        dstr2Cd: this.filterPatient['address']['second']
      }
      if (this.filterPatient['hospitalName']) params = { ...params, hospNm: this.filterPatient['hospitalName'] }
      if (this.filterPatient['assignmentStatus']) params = {
        ...params,
        bedStatCd: this.filterPatient['assignmentStatus'].length ? this.filterPatient['assignmentStatus'].toString() : null
      }

      return params
    },
    disableHospitalPicker() {
      // return this.filterPatient['address']['second'] === ''
      return this.filterPatient['address']['first'] === ''
    },
    enableSecondAddressPicker() {
      return this.filterPatient['address']['first'] === ''
    },
  },
  watch: {
    checkedPatients() {
      this.allPatientsSelected = this.checkedPatients.length === this.patientData.length
      if (!this.patientData.length) {
        this.allPatientsSelected = false
      }
    },
  },
  methods: {
    TimestampToDateWithDot,
    toggleCheckbox,
    getSecondAddress(address) {
      if (address) {
        this.$store.dispatch('admin/getGuGun', address)
      }
    },
    getMedInst() {
      let data = this.medinstInfo
      data['instTypeCd'] = 'ORGN0003'
      this.$store.dispatch('admin/getOrganMedi', data)
    },
    changeDstrCd1() {
      this.getSecondAddress(this.filterPatient['address']['first'])
      this.filterPatient['address']['second'] = ''
      this.filterPatient['hospitalName'] = null
      this.search()
    },
    changeDstrCd2() {
      this.getHospList()
      this.filterPatient['hospitalName'] = null
      this.search()
    },
    getHospList() {
      this.$store.dispatch('patnt/getHospList', this.filterData)
      console.log(this.hospList)
    },
    closeModal(idx) {
      if (idx === 0) {
        /*세부내용 모달*/
        this.showModal = 0
        this.$store.commit('bedasgn/setDisesInfo', null)
        this.$store.commit('bedasgn/setTimeline', null)
        this.$store.commit('patnt/setBasicInfo', null)
        this.$store.commit('patnt/setRpt', null)
        this.reportFile = null
      }
    },
    async uploadRpt(event) {
      const fileInput = event.target
      const file = fileInput.files[0]

      console.log(file)
      const formData = new FormData()
      formData.append('param1', 'edidemreport')
      formData.append('param2', file)

      await this.$store.dispatch('patnt/uploadRpt', formData)
      if (this.rptInfo !== null) {
        // console.log('실행')
        // this.alertOpen(4)
      }
      //역조서 이미지 미리보기 만들기
      await this.showImage(this.rptInfo.attcId)
    },
    removeRpt() {
      /*역조서 삭제*/
      this.$store.dispatch('patnt/removeRpt', this.rptInfo.attcId)
      this.preRpt = null
    },
    async selectPatient(patient) {
      if (patient['bdasSeq']) {
        await this.$store.dispatch('bedasgn/getTimeline', patient)
        await this.$store.dispatch('bedasgn/getDSInfo', patient)
      } else {
        this.$store.commit('bedasgn/setTimeline', null)
        this.$store.commit('bedasgn/setDisesInfo', null)
      }
      await this.$store.dispatch('patnt/getBasicInfo', patient)
      await this.$store.dispatch('bedasgn/getBdasHisInfo', patient)

      if (this.ptDetail !== null) {
        this.newPt = this.ptDetail
      }
      if (this.ptDs !== null) {
        this.dsInfo = this.ptDs
      }
      this.preRpt = this.attcRpt

      this.showModal = 1
    },
    changePage(newPage) {
      this.$store.dispatch('patnt/getPatntList', {
        ...this.filterData,
        page: newPage
      })
      this.page = newPage
    },
    allCodesChangeState() {
      if (this.allPatientsSelected) {
        this.checkedPatients = []
        this.patientData.forEach((patient) => this.checkedPatients.push(patient))
      } else {
        this.checkedPatients = []
      }
    },
    search() {
      console.log(this.filterPatient['assignmentStatus'])
      this.$store.dispatch('patnt/getPatntList', this.filterData)
      this.page = 1
      this.getHospitalList()
    },
    async showPatntModal(patient, idx) {
      await this.$store.dispatch('patnt/getBasicInfo', patient)
      if (this.ptDetail !== null) {
        this.newPt = this.ptDetail
        console.log('showPatntModal', this.newPt)
      }
      await this.showImage(this.newPt.attcId)
      if (idx === 2) {
        this.showModal = idx
      } else {
        this.showPatnt = true
      }
    },
    async showImage(attcId) {
      // if (attcId === null || attcId === '') {
      //   this.epidReportImage = ''
      // } else {
      //   await this.$store.dispatch('user/readPrivateImage', attcId)
      //     .then((result) => {
      //       const blob = new Blob([result], { type: 'image/jpeg' })
      //       this.epidReportImage = URL.createObjectURL(blob)
      //     })
      //     .catch((error) => {
      //       console.error('An error occurred while fetching the image:', error)
      //     })
      // }
    },
    closePatntRequest() {
      this.showPatnt = false
    },
    openRgstModal() {
      this.newPt = {
        ptNm: '', gndr: null, rrno1: null, rrno2: null,
        dethYn: '', natiCd: '', natiNm: '대한민국',
        dstr1Cd: '', dstr2Cd: '', telno: '', picaVer: null,
        nokNm: '', mpno: '', job: '', attcId: null,
        bascAddr: '', detlAddr: '', zip: '',
        undrDsesCd: [], undrDsesEtc: null
      }
      this.preRpt = null
      this.epidReportImage = ''
      this.showModal = 2
    },
    setDefaultDstr1Cd() {
      // 대구로 설정
      this.filterPatient.address.first = '27'
      this.getSecondAddress('27')
      console.log(this.userInfo)
      // this.filterPatient.address.first = this.userInfo.dutyDstr1Cd
      // if (this.userInfo.dutyDstr1Cd) {
        // this.getSecondAddress(this.userInfo.dutyDstr1Cd)
      // }
    },
    getHospitalList() {
      const url = `${API_PROD}/api/v1/private/patient/searchhosps`
      axios_cstm()
        .get(url, { params: this.filterData })
        .then(response => {
          if (response.data?.code === '00') {
            this.model.hospList = response.data?.result.items
          }
        })
    },
    isSysAdm() {
      return this.userInfo.jobCd === 'PMGR0004';
    },
    openDeletePopup(patient) {
      this.deletePt = patient
      this.confirmAlert = true
      this.errMsg = '해당 환자를 삭제하시겠습니까?'
    },
    closeDeletePopup() {
      this.confirmAlert = false
      this.errMsg = ''
    },
    deletePatient(patient) {
      const url = `${API_PROD}/api/v1/private/bedasgn/remove/${patient.ptId}/6`
      axios_cstm()
        .get(url)
        .then(response => {
          if (response.data?.code === '00') {
            this.changePage(this.page)
            this.confirmAlert = false
            this.errMsg = ''
          }
        })
    },
  }
}
</script>

<style scoped>
.pt-nm {
  line-height: 24px;
}

.img-box > h2 {
  color: #595959;
  font-weight: normal;
  margin-top: 12px;
}

.btn.btn-xs {
  padding: 8px 10px;
}

.select-box {
  margin-bottom: 0.5rem;
}
</style>
