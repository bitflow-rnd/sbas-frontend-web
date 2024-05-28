<template>
  <!--환자등록/수정 -->
  <div class="modal show" tabindex="-1" aria-hidden="true" style="">
    <!--begin::Modal dialog-->
    <div class="modal-dialog col-lg-3 modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>환자 등록/수정</h2>
          <div
            class="btn btn-sm btn-icon btn-active-color-primary"
            @click="closeModal()"
            data-bs-dismiss="modal"
          >
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.5"
                  x="6"
                  y="17.3137"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                ></rect>
                <rect
                  x="7.41422"
                  y="6"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                ></rect>
              </svg>
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
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
                        <th>역학조사서 업로드</th>
                      </tr>
                      <tr>
                        <td>
                          <article class="modal-profile-layout1">
                            <div
                              class="profile-card-box flex-column mx-auto"
                              style="width: 264px"
                            >
                              <div class="profile-view-box" style="width: 100%; height: 264px">
                                <img v-if="!model.newPt.attcId" src='@/assets/img/img-no-img.webp'/>
                                <img v-if='model.newPt.attcId' :src='model.epidReportImage' @click='showImageLightBox' />
<!--                                <a v-if="model.newPt.attcId !== null || model.newPt.attcId === ''" class="remove-btn">-->
<!--                                  <img src="/img/common/ic_profile_remove.svg" alt="이미지" />-->
<!--                                </a>-->
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
                                <input type="text" v-model="model.newPt.rrno1"/>
                              </div>
                              <div class="unit-box mx-2 text-gray-600">-</div>
                              <div class="tbox w-30px" style="min-width: 30px">
                                <input
                                  type="password"
                                  v-model="model.newPt.rrno2"
                                  class="p-0 text-center fs-3x"
                                  maxlength="1"
                                />
                              </div>
                              <div class="unit-box ms-2" style="line-height: 30px">●●●●●●</div>
                            </div>
                          </div>
                          <div class="item-row-box">
                            <div class="item-note-box">* 주민등록번호 입력</div>
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

                          <div class="item-row-box">
                            <div class="item-cell-box">
                              <div class="item-note-box">* 상세주소 입력</div>
                            </div>
                          </div>
                        </td>

                        <th>휴대전화번호</th>
                        <td>
                          <div class="item-cell-box full">
                            <div class="tbox full">
                              <input type="text" v-model="model.newPt.mpno"/>
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
                              <input type="text" v-model="model.newPt.telno"/>
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
                            </article>

                            <div class="item-note-box">* 사망여부 선택</div>
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
                          </div>

                          <div class="item-row-box">
                            <div class="tbox" style="width: 211px">
                              <input
                                type="text"
                                placeholder="국가명 입력"
                                v-model="model.newPt.natiNm"
                                :readonly="model.newPt.natiCd !== 'NATI0002'"
                                class="nation-input"
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>기저질환 (다중선택)</th>
                        <td colspan="3">
                          <article class="cbox-list-layout">
                            <div class="cbox-row">
                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">고혈압</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">당뇨</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">고지혈증</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">심혈관</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">뇌혈관</span>
                                </label>
                              </div>
                            </div>

                            <div class="cbox-row">
                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">암</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">만성폐질환</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">신장질환</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">정신질환</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">결핵</span>
                                </label>
                              </div>
                            </div>

                            <div class="cbox-row">
                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">천식 등 알레르기</span>
                                </label>
                              </div>

                              <div class="cbox">
                                <label>
                                  <input type="checkbox" name="disease"/><i></i>
                                  <span class="txt">면역력저하자</span>
                                </label>
                              </div>
                            </div>

                            <div class="cbox-row">
                              <div class="d-inline-flex">
                                <div class="cbox w-auto">
                                  <label>
                                    <input type="checkbox" name="disease"/><i></i>
                                    <span class="txt">기타</span>
                                  </label>
                                </div>

                                <div class="tbox d-inline-flex ms-4 w-300px">
                                  <input type="text" placeholder="직접 입력"/>
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

<!--  <article v-show="model.isAlert" class="popup popup-confirm" style="z-index: 1600">-->
<!--    <div class="popup-wrapper">-->
<!--      <div class="popup-contents py-10 px-10" style="width: 300px">-->
<!--        <article class="modal-alert-layout pb-10">-->
<!--          <div class="alert-view-box pb-6">-->
<!--            <img src="/img/common/ic_alert.svg" alt="이미지"/>-->
<!--          </div>-->
<!--          <div class="alert-msg-box">{{ model.errMsg }}</div>-->
<!--        </article>-->
<!--        <article class="modal-menu-layout1">-->
<!--          <div class="modal-menu-list">-->
<!--            <router-link-->
<!--              to=""-->
<!--              @click="confirmAlert"-->
<!--              class="modal-menu-btn menu-primary"-->
<!--              data-type="success"-->
<!--            >확인-->
<!--            </router-link>-->
<!--            <router-link-->
<!--              v-show="model.cncBtn"-->
<!--              to=""-->
<!--              class="modal-menu-btn menu-cancel"-->
<!--              data-type="cancel"-->
<!--            >-->
<!--              취소-->
<!--            </router-link>-->
<!--          </div>-->
<!--        </article>-->
<!--      </div>-->
<!--    </div>-->
<!--  </article>-->

  <SbasAlert :is-alert='model.isAlert' :err-msg='model.errMsg' :cnc-btn='model.cncBtn'
             @confirm-alert='confirmAlert(model.alertIdx)' />

  <!--환자정보 존재 -->
  <exist-patnt-modal v-if='model.openExistPtModal && props.existPt'
                     :exist-pt='props.existPt' :new-pt='model.newPt'
                     @closeExistPt='closeExistPtModal()' />

</template>

<script setup>
import { defineProps, reactive, defineEmits, onMounted } from 'vue'
import ExistPatntModal from '@/components/user/patnt/ExistPatntModal.vue'
import { getAge, openAddressFinder } from '@/util/ui'
import { useStore } from 'vuex'
import { API_PROD } from '@/util/constantURL'
import axios from 'axios'
import SbasAlert from '@/components/common/SbasAlert.vue'

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
  newPt: Object,
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
  const token = sessionStorage.getItem('userToken')
  const request = model.newPt
  return new Promise(() => {
    axios
      .post(url, request, {
        headers: { Authorization: `Bearer ${token}` }
      })
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
  const token = sessionStorage.getItem('userToken')
  const request = model.newPt
  return new Promise(() => {
    axios.post(url, request, {
      headers: { Authorization: `Bearer ${token}` }
    })
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

function getGndr(no2){
  if(no2 !== '' && no2 !== null){
    if(no2.length > 1) {
      no2 = no2.slice(0,1)
    }
    if (no2 === '1' || no2 === '3') {
      return '남성'
    } else {
      return '여성'
    }
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
