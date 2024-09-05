<template>
  <div class="modal show" tabindex="-1" style="">
    <div class="modal-dialog col-lg-3 modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <h2>환자 등록/수정</h2>
          <CloseButton @close="closeModal" />
        </div>

        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <div class="d-flex">
            <div class="table-view-box" style="width: 363px">
              <article class="table-form-layout1 h-100">
                <div class="form-head-box"></div>

                <div class="form-body-box h-100">
                  <div class="table-box h-100">
                    <table class="h-100">
                      <colgroup>
                        <col style="width: 363px"/>
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>역학조사서 업로드 (선택)</th>
                      </tr>
                      <tr>
                        <td>
                          <article class="modal-profile-layout1">
                            <div
                              class="profile-card-box flex-column mx-auto"
                              style="width: 264px"
                            >
                              <div class="profile-view-box" style="width: 100%; height: 264px">
                                <img v-if='!model.newPt.attcId' src='@/assets/img/img-no-img.webp' class='no-img' />
                                <img v-if='model.newPt.attcId'
                                     :src="model.epidReportImage?model.epidReportImage:'/img/img-no-img.webp'"
                                     class='has-img' @click='showImageLightBox'
                                     onerror="this.src='/img/img-no-img.webp'" />
                                <vue-easy-lightbox
                                  :visible="model.visibleRef"
                                  :imgs="model.imgsRef"
                                  :index="model.indexRef"
                                  @hide="onHide"
                                ></vue-easy-lightbox>
                              </div>

                              <div class="profile-upload-box">
                                <div class="upload-box">
                                  <label
                                    class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px certify-btn rounded-1 mt-2 btn-outline btn-outline-primary"
                                  >
                                    <input type="file" @change="uploadRpt" :value="model.reportFile"/>
                                    업로드
                                  </label>
                                </div>
                              </div>
                            </div>
                          </article>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            </div>
            <div class="table-info-box">
              <article class="table-form-layout1">
                <div class="form-head-box"></div>

                <div class="form-body-box">
                  <form class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px"/>
                        <col style="width: auto"/>
                        <col style="width: 168px"/>
                        <col style="width: auto"/>
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>환자이름 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">
                            <div class="tbox">
                              <input type="text" v-model="model.newPt.ptNm"/>
                            </div>
                          </div>
                          <div v-if='validateInputStep1(0)' class='item-cell-box pt-2 text-danger' >
                            * 환자 이름을 입력해 주세요.
                          </div>
                        </td>
                        <th>성별</th>
                        <td v-if="model.newPt.rrno2 !== undefined">{{ getGndr(model.newPt.rrno2) }}</td>
                      </tr>

                      <tr>
                        <th>주민등록번호 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-row-box">
                            <div class="item-cell-box">
                              <div class="tbox">
                                <input type='text' v-model='model.newPt.rrno1'
                                       @input='filterNumericInput(0)'
                                       maxlength='6' />
                              </div>
                              <div class="unit-box mx-2 text-gray-600">-</div>
                              <div class="tbox" style="min-width: 20px">
                                <input
                                  type="text"
                                  @input='filterNumericInput(0)'
                                  v-model="model.newPt.rrno2"
                                  maxlength="1"
                                />
                              </div>
                            </div>
                          </div>
                          <div v-if='validateInputStep1(1) && validateInputStep1(2)'
                               class='item-cell-box pt-2 text-danger'>
                            * 주민등록번호을 입력해 주세요.
                          </div>
                        </td>
                        <th>나이 (만)</th>
                        <td v-if="model.newPt.rrno1 !== undefined && model.newPt.rrno2 !== undefined">
                          {{ getAge(model.newPt.rrno1, model.newPt.rrno2) }}세
                        </td>
                      </tr>

                      <tr>
                        <th rowspan="3">주소 <span class="text-primary">*</span></th>
                        <td rowspan="3">
                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input type="text" v-model="model.newPt.zip" readonly/>
                              </div>
                              <a
                                @click="openAddressFinder(0)"
                                class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                                style="min-width: 80px"
                              >주소검색</a
                              >
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input type="text" v-model="model.newPt.bascAddr"/>
                              </div>
                            </div>
                          </div>

                          <div class="item-row-box">
                            <div class="item-cell-box full">
                              <div class="tbox full">
                                <input type="text" v-model="model.newPt.detlAddr"/>
                              </div>
                            </div>
                          </div>

                          <div v-if='validateInputStep1(3)' class='item-cell-box pt-2 text-danger'>
                            * 기본주소를 입력해 주세요.
                          </div>
                        </td>

                        <th>휴대전화번호</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" v-model="model.newPt.mpno"
                              @input='filterNumericInput(1)'
                              maxlength='11' />
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>보호자 이름</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" v-model="model.newPt.nokNm"/>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>전화번호</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" v-model="model.newPt.telno"
                              @input='filterNumericInput(1)'
                              maxlength='11'/>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>사망여부 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box full justify-content-between">
                            <article class="toggle-list-layout2">
                              <div class="toggle-list">
                                <label>
                                  <input
                                    type="radio"
                                    name="toggle1"
                                    value="N"
                                    v-model="model.newPt.dethYn"
                                  />
                                  <span class="txt">생존</span>
                                </label>

                                <label>
                                  <input
                                    type="radio"
                                    name="toggle1"
                                    value="Y"
                                    v-model="model.newPt.dethYn"
                                  />
                                  <span class="txt">사망</span>
                                </label>
                              </div>
                              <div v-if='validateInputStep1(4)' class='item-cell-box pt-2 text-danger'>
                                * 사망여부를 선택해 주세요.
                              </div>
                            </article>

                          </div>
                        </td>

                        <th>직업</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" v-model="model.newPt.job"/>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>국적 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-row-box">
                            <div class="item-cell-box full justify-content-between">
                              <article class="toggle-list-layout2">
                                <div class="toggle-list">
                                  <label>
                                    <input
                                      type="radio"
                                      name="nation"
                                      value="NATI0001"
                                      v-model="model.newPt.natiCd"
                                    />
                                    <span class="txt">대한민국</span>
                                  </label>

                                  <label>
                                    <input
                                      type="radio"
                                      name="nation"
                                      value="NATI0003"
                                      v-model="model.newPt.natiCd"
                                    />
                                    <span class="txt">알수없음</span>
                                  </label>

                                  <label>
                                    <input
                                      type="radio"
                                      name="nation"
                                      value="NATI0002"
                                      v-model="model.newPt.natiCd"
                                    />
                                    <span class="txt">직접입력</span>
                                  </label>
                                </div>
                              </article>
                            </div>
                            <div class='tbox' :class="{ 'pt-2': model.newPt.natiCd === 'NATI0002' }"
                                 style='width: 211px' v-show="model.newPt.natiCd === 'NATI0002'">
                              <input
                                type='text'
                                placeholder='국가명 입력'
                                v-model='model.newPt.natiNm'
                                :readonly="model.newPt.natiCd !== 'NATI0002'"
                                class='nation-input'
                              />
                            </div>
                            <div
                              v-if='validateInputStep1(5)'
                              class='item-cell-box pt-2 text-danger' >
                              * 국적을 입력해 주세요.
                            </div>
                          </div>


                        </td>
                      </tr>
                      <tr>
                        <th>기저질환 (다중선택)</th>
                        <td colspan="3">
                          <article class="cbox-list-layout">
                            <div class="cbox-row">
                              <div class="cbox" :class='{"mt-2": idx > 4}'
                                   v-for='(item, idx) in model.undrDsesCdList.filter((item) => item.cdId !== "UDDS0014")' :key='idx'>
                                <label>
                                  <input type="checkbox" name="disease" :value='item.cdId' v-model='model.newPt.undrDsesCd'/><i></i>
                                  <span class="txt">{{item.cdNm}}</span>
                                </label>
                              </div>
                            </div>

                            <div class="cbox-row">
                              <div class="d-inline-flex">
                                <div class="cbox w-auto">
                                  <label>
                                    <input type="checkbox" name="disease" value='UDDS0014' v-model='model.newPt.undrDsesCd'/><i></i>
                                    <span class="txt">기타</span>
                                  </label>
                                </div>

                                <div class="tbox d-inline-flex ms-4 w-300px">
                                  <input type="text" placeholder="직접 입력" v-model='model.newPt.undrDsesEtc' :disabled='!model.newPt.undrDsesCd.includes("UDDS0014")'/>
                                </div>
                              </div>
                            </div>
                          </article>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
              </article>
            </div>
          </div>

          <article class="modal-menu-layout1 pt-40">
            <div class="modal-menu-list pt-5">
              <a v-if='props.existPt' @click="openExistPtModal" class="modal-menu-btn menu-primary">다음</a>
              <a v-if='!props.existPt' @click="registerNewPt" class="modal-menu-btn menu-primary">신규 등록</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

  <SbasAlert :is-alert='model.isAlert' :err-msg='model.errMsg' :cnc-btn='model.cncBtn'
             @confirm-alert='confirmAlert(model.alertIdx)' />

  <!--환자정보 존재 -->
  <exist-patnt-modal v-if='model.openExistPtModal && props.existPt'
                     :exist-pt='props.existPt' :new-pt='model.newPt'
                     @closePopup='closePopup' @closeExistPt='closeExistPtModal' />

</template>

<script setup>
import { defineProps, reactive, defineEmits, onMounted } from 'vue'
import ExistPatntModal from '@/components/user/modal/ExistPatntModal.vue'
import { getAge, openAddressFinder, getGndr } from '@/util/ui'
import { useStore } from 'vuex'
import { API_PROD } from '@/util/constantURL'
import axios from 'axios'
import SbasAlert from '@/components/common/SbasAlert.vue'
import { axios_cstm } from '@/util/axios_cstm'
import CloseButton from '@/components/common/CloseButton.vue'

const props = defineProps({
  existPt: Object,
})
const emits = defineEmits(['closeModal'])
const store = useStore()

onMounted(() => {
  if (props.existPt) {
    model.newPt = props.existPt
  }
})

const model = reactive({
  openExistPtModal: false,
  newPt: {
    ptNm: null, gndr: null, rrno1: null, rrno2: null,
    dethYn: null, natiCd: null, natiNm: null,
    dstr1Cd: null, dstr2Cd: null, telno: null, picaVer: null,
    nokNm: null, mpno: null, job: null, attcId: null,
    bascAddr: null, detlAddr: null, zip: null,
    undrDsesCd: [], undrDsesEtc: null,
  },
  reportFile: null,
  epidReportImage: null,
  rptInfo: null,
  visibleRef: false,
  imgsRef: '',
  indexRef: 0,
  errMsg: '',
  isAlert: false,
  cncBtn: false,
  alertIdx: 0,
  undrDsesCdList: store.getters['common/getUnderLyingDisease'],
  showErrorMsg: false,
})

function uploadRpt(event) {
  const fileInput = event.target;
  const file = fileInput.files[0];

  const formData = new FormData();
  formData.append('param1', 'edidemreport');
  formData.append('param2', file);

  const token = sessionStorage.getItem('userToken')
  const url = `${API_PROD}/api/v1/private/patient/upldepidreport`
  return new Promise(() => {
    axios
      .post(url, formData, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((response) => {
        const data = response.data
        if (data.code === '00') {
          setPatientInfo(data.result)
          model.errMsg =
            '역학조사서 파일 기반으로\n환자정보를 자동입력 하였습니다.\n내용을 확인해주세요.'
          model.isAlert = true

          //역조서 이미지 미리보기 만들기
          showImage(data.result.attcId)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  })
}

function setPatientInfo(result) {
  model.newPt = { ...result,
    bascAddr: result.baseAddr,
    dethYn: result.dethYn === '생존' ? 'N' : 'Y',
  }
}

function registerNewPt() {
  const url = `${API_PROD}/api/v1/private/patient/regbasicinfo`
  const request = model.newPt
  return new Promise(() => {
    axios_cstm()
      .post(url, request)
      .then((response) => {
        const data = response.data
        if (data.code === '00') {
          model.alertIdx = 1
          model.errMsg = '환자 정보가\n등록되었습니다.'
          model.isAlert = true
        }
      })
      .catch((e) => {
        console.log(e)
      })
  })
}

function isExistPt() {
  const url = `${API_PROD}/api/v1/private/patient/exist`
  const request = model.newPt
  return new Promise(() => {
    axios_cstm().post(url, request)
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
        if (data.result.isExist) {
          model.openExistPtModal = true
        } else {
          model.openExistPtModal = false
        }
      }
    })
    .catch((e) => {
      console.log(e)
    })
  })
}

function showImage(attcId) {
  if (attcId === null || attcId === '') {
    model.epidReportImage = '';
  } else {
    store.dispatch('user/readPrivateImage', attcId)
      .then((result) => {
        const blob = new Blob([result], { type: 'image/jpeg' })
        model.epidReportImage = URL.createObjectURL(blob)
      })
      .catch((error) => {
        console.error("An error occurred while fetching the image:", error);
      })
  }
}

function filterNumericInput(idx) {
  if (idx === 0) {
    if (model.newPt.rrno1) {
      model.newPt.rrno1 = model.newPt.rrno1.replace(/[^0-9]/g, '')
    }
    if (model.newPt.rrno2) {
      model.newPt.rrno2 = model.newPt.rrno2.replace(/[^0-9]/g, '')
    }
  } else if (idx === 1) {
    if (model.newPt.mpno) {
      model.newPt.mpno = model.newPt.mpno.replace(/[^0-9]/g, '')
    }
    if (model.newPt.telno) {
      model.newPt.telno = model.newPt.telno.replace(/[^0-9]/g, '')
    }
  }
}

function validateInputStep1(idx) {
  if (idx === 0) {
    return model.newPt.ptNm === null && model.showErrorMsg
  } else if (idx === 1) {
    return model.newPt.rrno1 === null && model.showErrorMsg
  } else if (idx === 2) {
    return model.newPt.rrno2 === null && model.showErrorMsg
  } else if (idx === 3) {
    return model.newPt.bascAddr === null && model.showErrorMsg
  } else if (idx === 4) {
    return model.newPt.dethYn === null && model.showErrorMsg
  } else if (idx === 5) {
    return model.newPt.natiCd === null && model.showErrorMsg
  }
}

function confirmAlert(idx) {
  model.isAlert = false

  if (idx === 1) {
    closeModal()
  }
}

function closeModal() {
  emits('closeModal')
}

function openExistPtModal() {
  isExistPt()
}

function closePopup() {
  model.openExistPtModal = false
}

function closeExistPtModal() {
  model.openExistPtModal = false
  closeModal()
}

function showImageLightBox() {
  model.imgsRef = model.epidReportImage
  model.visibleRef = true
}

function onHide() {
  model.visibleRef = false
}

</script>

<style scoped>
.modal {
  --bs-modal-width: 98%;
  display: block;
}

.modal.show {
  background-color: rgba(0,0,0,0.4);
  display: block;
}

article.detail-layout1 .detail-wrap .detail-head-box .head-box .head-txt-box {
  line-height: 28px;
}

</style>
