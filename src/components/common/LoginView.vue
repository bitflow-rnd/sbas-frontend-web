<template>
  <div class="container" style="padding: 0; max-width: 100%">
    <section class="login">
      <div class="login-wrap">
        <div class="login-bg">
        </div>

        <div class="login-contents">
          <div class="con-head-box">
            <div class="main-box">로그인</div>
            <div class="sub-box">감염병 스마트 병상배정 시스템</div>
          </div>

          <div class="con-body-box">
            <form @submit.prevent="onSubmit" name="form" class="input-form-box">
              <div class="row-list">
                <div class="row">
                  <div class="input-box">
                    <input
                      name="id"
                      v-model="id"
                      type="text"
                      maxlength="20"
                      placeholder="아이디"
                      @input="validateInput(0)"
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="input-box">
                    <input
                      name="pw"
                      v-model="pw"
                      type="password"
                      maxlength="32"
                      placeholder="비밀번호"
                      @keydown.enter="onSubmit()"
                    />
                  </div>
                </div>
              </div>

              <div class="login-btn-box">
                <button type="submit" class="login-btn">로그인</button>
              </div>
            </form>

            <div class="login-option-box">
              <div class="option-list">
                <!--                 모달인지 새 페이지인지 확인 필요 -->
                <a @click="openFindId" class="option-btn hover-a">아이디찾기</a>&nbsp;/&nbsp;
                <a @click="openInitPw" class="option-btn hover-a">비밀번호 초기화</a>
              </div>
            </div>

            <div class="login-note-box">
              <div class="note-wrap">
                <div class="row">불법 사용시 법적 제재를 받을 수 있습니다.</div>
                <div class="row">시스템 관련 문의 : 칠곡경북대학교병원 감염내과 연구소</div>
                <div class="row">053-200-3767, 010-6517-3638</div>
              </div>
            </div>

            <div class="login-request-box">
              <router-link to="" @click="toggleUserEditModal" class="request-btn">
                <span class="txt">사용자 등록 요청</span>
                <i class="ic ic-link"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <div class="login-bottom"></div>
    </section>
  </div>

  <!--begin::Modals-->
  <!--begin::Modal - 내정보-->
  <div
    v-show="userEditModal"
    class="modal fade"
    id="kt_modal_edit_user"
    tabindex="-1"
    aria-hidden="true"
    style=""
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>사용자 정보 등록</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <CloseButton @close='toggleUserEditModal' />
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <form @submit.prevent="onEnter" class="modal-body scroll-y py-10 px-10">
          <article class="table-form-layout1">
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
                    <th>아이디 <span class="text-primary">*</span></th>
                    <td class="vertical-top">
                      <div class="item-cell-box full">
                        <div class="tbox full">
                          <input type="text" v-model="form.id" :maxlength='15' @focusout='checkDuplicateUserId()' />
                        </div>
                      </div>
                      <div v-if="validateInput(3)" class="item-cell-box full">
                        <div class="text-danger pt-2 fs-12px">※ 아이디를 입력해 주세요.</div>
                      </div>
                      <div v-if="isExistId" class="item-cell-box full">
                        <div class="text-danger pt-2 fs-12px">※ 사용중인 아이디입니다.</div>
                      </div>
                    </td>
                    <th>비밀번호 <span class="text-primary">*</span></th>
                    <td class="vertical-top">
                      <div class="item-cell-box full">
                        <div class="tbox full">
                          <input type="password" v-model="form.pw" />
                        </div>
                      </div>
                      <div v-if="validateInput(4)" class="item-cell-box full">
                        <div class="text-danger pt-2 fs-12px">※ 비밀번호를 입력해 주세요.</div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>휴대폰번호 <span class="text-primary">*</span></th>
                    <td class="vertical-top">
                      <div class="item-cell-box full">
                        <!--                          <div class="tbox full">-->
                        <!--                            <input type="text" v-model="form.telno" @input='removeHyphens'/>-->
                        <!--                          </div>-->
                        <button
                          v-if='isCertified===false'
                          @click="openCertify"
                          class="btn btn-flex w-100 btn-sm btn-secondary fs-7 justify-content-center"
                          :disabled='isCertified'
                        >
                          본인인증
                        </button>
                        <button
                          v-if='isCertified'
                          @click="openCertify"
                          class="btn btn-flex w-100 btn-sm btn-secondary fs-7 justify-content-center"
                          :disabled='isCertified'
                        >
                          본인인증 완료
                        </button>
                      </div>
                    </td>
                    <th>비밀번호 확인 <span class="text-primary">*</span></th>
                    <td class="vertical-top">
                      <div class="item-cell-box full">
                        <div class="tbox full">
                          <input type="password" v-model="valPw" />
                        </div>
                      </div>
                      <div v-if="validateInput(5)" class="item-cell-box full">
                        <div class="text-danger pt-2 fs-12px">
                          ※ 비밀번호가 일치하지 않습니다.
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>이름 <span class="text-primary">*</span></th>
                    <td class="vertical-top">
                      <div class="item-cell-box full">
                        <div class="tbox full">
                          <input type="text" v-model="form.userNm" />
                        </div>
                      </div>
                      <div v-if="validateInput(6)" class="item-cell-box full">
                        <div class="text-danger pt-2 fs-12px">※ 이름을 입력해 주세요.</div>
                      </div>
                    </td>
                    <th>생년월일 <span class="text-primary">*</span></th>
                    <td class="vertical-top">
                      <div class="item-cell-box full">
                        <div class="tbox full">
                          <input type="text" v-model="form.btDt" placeholder='19000101' :maxlength='8' />
                        </div>
                      </div>
                      <div v-if="validateInput(7)" class="item-cell-box full">
                        <div class="text-danger pt-2 fs-12px">※ 생년월일을 정확히 입력해 주세요.</div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class="table-form-layout1 mt-10">
            <div class="form-head-box">
              <div class="head-box">
                <div class="head-txt-box fs-16px fw-bold pb-5">업무 역할</div>
              </div>
            </div>
            <div class="form-body-box">
              <div class="table-box">
                <table>
                  <colgroup>
                    <col style="width: 168px" />
                    <col style="width: auto" />
                  </colgroup>
                  <tbody>
                  <!--                    <tr>
                                        <th>소속기관 유형 <span class="text-primary">*</span></th>
                                        <td>
                                          <div class="item-cell-box full">
                                            <div class='rbox' :class="{ 'ms-4': index > 0 }" v-for='(option, index) in instTypeOptions' :key='option.value'>
                                              <label>
                                                <input type='radio' v-model='form.instTypeCd' :value='option.value' />
                                                <i></i><span class='txt'>{{ option.label }}</span>
                                              </label>
                                            </div>
                                          </div>
                                          <div v-if="validateInput(8)" class="item-cell-box full">
                                            <div class="text-danger pt-2 fs-12px">※ 소속기관 유형을 선택해 주세요.</div>
                                          </div>
                                        </td>
                                      </tr>-->

                  <tr>
                    <th>소속 기관 유형 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-cell-box full">
                        <article class="permission-selector-layout">
                          <label class="selector-box">
                            <input type="radio" v-model="form.jobCd" :value="JobCode.Rqst" />
                            <div class="selector-wrap">
                              <div class="img-box">
                                <img
                                  src="/img/common/img_permission_item1.svg"
                                  alt="이미지"
                                  class="on"
                                />
                                <img
                                  src="/img/common/img_permission_item1_off.svg"
                                  alt="이미지"
                                  class="off"
                                />
                              </div>
                              <div class="info-box">
                                <div class="main-box">보건소</div>
                                <div class="sub-box">병상요청</div>
                              </div>
                            </div>
                          </label>

                          <label class="selector-box">
                            <input type="radio" v-model="form.jobCd" :value="JobCode.Aprv" />
                            <div class="selector-wrap">
                              <div class="img-box">
                                <img
                                  src="/img/common/img_permission_item2.svg"
                                  alt="이미지"
                                  class="on"
                                />
                                <img
                                  src="/img/common/img_permission_item2_off.svg"
                                  alt="이미지"
                                  class="off"
                                />
                              </div>
                              <div class="info-box">
                                <div class="main-box">병상배정반</div>
                                <div class="sub-box">병상요청, 병상승인, 이송처리</div>
                              </div>
                            </div>
                          </label>

                          <label class="selector-box">
                            <input type="radio" v-model="form.jobCd" :value="JobCode.Meds" />
                            <div class="selector-wrap">
                              <div class="img-box">
                                <img
                                  src="/img/common/img_permission_item3.svg"
                                  alt="이미지"
                                  class="on"
                                />
                                <img
                                  src="/img/common/img_permission_item3_off.svg"
                                  alt="이미지"
                                  class="off"
                                />
                              </div>
                              <div class="info-box">
                                <div class="main-box">의료진</div>
                                <div class="sub-box">병상요청, 병상배정, 입원처리</div>
                              </div>
                            </div>
                          </label>

                          <label class="selector-box">
                            <input type="radio" v-model="form.jobCd" :value="JobCode.Sysa" />
                            <div class="selector-wrap">
                              <div class="img-box">
                                <img
                                  src="/img/common/img_permission_item4.svg"
                                  alt="이미지"
                                  class="on"
                                />
                                <img
                                  src="/img/common/img_permission_item4_off.svg"
                                  alt="이미지"
                                  class="off"
                                />
                              </div>
                              <div class="info-box">
                                <div class="main-box">시스템 관리자</div>
                                <div class="sub-box">모니터링, 테스트</div>
                              </div>
                            </div>
                          </label>
                        </article>
                      </div>
                      <div v-if="validateInput(9)" class="item-cell-box full">
                        <div class="text-danger pt-2 fs-12px">※ 권한그룹을 선택해 주세요.</div>
                      </div>
                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class="table-form-layout1 mt-10">
            <div class="form-head-box">
              <div class="head-box">
                <div class="head-txt-box fs-16px fw-bold pb-5">소속기관</div>
              </div>
            </div>
            <div class="form-body-box">
              <div class="table-box">
                <table>
                  <colgroup>
                    <col style="width: 140px" />
                    <col style="width: auto" />
                    <col style="width: 140px" />
                    <col style="width: auto" />
                  </colgroup>
                  <tbody>
                  <tr>
                    <th>담당/근무지역 <span class="text-primary">*</span></th>
                    <td class="vertical-top">
                      <div class="item-cell-box full">
                        <div class="sbox w-175px">
                          <select v-model="form.dutyDstr1Cd" @change="getGugun(form.dutyDstr1Cd)">
                            <option :value=null>시/도 전체</option>
                            <option v-for="(item, i) in cmSido" :key="i" :value="item.cdId">
                              {{ item.cdNm }}
                            </option>
                          </select>
                        </div>
                        <div class="sbox w-175px ms-2">
                          <select v-model="form.dutyDstr2Cd">
                            <option :value=null>시/군/구 전체</option>
                            <option v-for="(item, i) in cmGugun" :key="i" :value="item.cdId">
                              {{ item.cdNm }}
                            </option>
                          </select>
                        </div>
                      </div>
                      <div v-if="validateInput(11)" class="item-cell-box full">
                        <div class="text-danger pt-2 fs-12px">
                          ※ 담당/근무지역(시/도)를 선택해 주세요.
                        </div>
                      </div>
                    </td>

                    <th>소속기관 <span class="text-primary">*</span></th>
                    <td class="vertical-top">
                      <div class="item-cell-box full">
                        <div class="sbox w-175px">
                          <select v-model="form.instId" @change='handleInstIdChange' @click='getMedInst'>
                            <option value=null>소속기관 선택</option>
                            <option value='INST000000'>직접입력</option>
                            <option v-for='(item, i) in organMedi' :key='i' :value='item.instId'>
                              {{ item.instNm }}
                            </option>
                          </select>
                        </div>
                        <div class="tbox full ms-2">
                          <input
                            type="text"
                            v-model="form.instNm"
                            placeholder="소속기관명 직접 입력"
                            :disabled="form.instId !== 'INST000000'"
                          />
                        </div>
                      </div>
                      <div v-if="validateInput(12)" class="item-cell-box full">
                        <div class="text-danger pt-2 fs-12px">
                          ※ 소속기관을 입력해 주세요.
                        </div>
                      </div>
                    </td>

                  </tr>

                  <tr>

                    <th>담당환자 유형</th>
                    <td>
                      <div class="item-cell-box">
                        <div class="cbox">
                          <label>
                            <input
                              type="checkbox"
                              v-model="form.ptTypeCd"
                              value="PTTP0001"
                            /><i></i>
                            <span class="txt">일반</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input
                              type="checkbox"
                              v-model="form.ptTypeCd"
                              value="PTTP0002"
                            /><i></i>
                            <span class="txt">소아</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input
                              type="checkbox"
                              v-model="form.ptTypeCd"
                              value="PTTP0003"
                            /><i></i>
                            <span class="txt">투석</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input
                              type="checkbox"
                              v-model="form.ptTypeCd"
                              value="PTTP0004"
                            /><i></i>
                            <span class="txt">산모</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input
                              type="checkbox"
                              v-model="form.ptTypeCd"
                              value="PTTP0005"
                            /><i></i>
                            <span class="txt">수술</span>
                          </label>
                        </div>

                        <div class="cbox ms-4">
                          <label>
                            <input
                              type="checkbox"
                              v-model="form.ptTypeCd"
                              value="PTTP0006"
                            /><i></i>
                            <span class="txt">인공호흡기 사용</span>
                          </label>
                        </div>
                      </div>
                    </td>

                    <th>직급</th>
                    <td class="vertical-top">
                      <div class="item-cell-box full">
                        <div class="tbox full">
                          <input type="text" v-model="form.ocpCd" placeholder="직급, 직무 또는 직위 입력" />
                        </div>
                      </div>
                    </td>

                  </tr>

                  <tr>
                    <th>소속 증명 정보</th>
                    <td class="vertical-top" colspan="3">
                      <div class="item-cell-box full">
                        <article class="img-upload-layout">
                          <div class="upload-box">
                            <label>
                              <input type="file" @change="onFileChange" />
                              <span class="upload-btn-box">
                                  <img v-if='this.selectedFile === null || this.selectedFile === undefined'
                                       src="@/assets/img/img-no-img.webp" alt="이미지" />
                                  <img v-else :src='this.imgUrl'>
                                </span>
                            </label>
                          </div>

                          <div class="result-list">
                            <div class="result-box"></div>
                          </div>
                        </article>
                      </div>
                      <div class="item-cell-box full">
                        <div class="text-danger pt-2 fs-12px">
                          ※ 해당기관 소속임을 증명할 수 있는 명함, 신분증 사진 등을 업로드 하면, 보다 빠른 승인처리가 가능합니다.
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class="modal-menu-layout1 pt-9">
            <div class="modal-menu-list">
              <router-link to="" @click="reqUserReg" class="modal-menu-btn menu-primary"
              >등록 요청 완료
              </router-link>
            </div>
          </article>
        </form>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - 내정보-->

  <article v-show="showCertify" class="popup popup-certify" style="">
    <cert-modal :form="form" :crtfNo="crtfNo" @openCertify="openCertify"
                @phone-certify="phoneCertify" @remove-hyphens="removeHyphens" @certify-no="certifyNo"
                :time="timeText" @update:crtfNo="value => crtfNo = value" />
  </article>
  <article v-show="findingId" class="popup">
    <find-id @openFindId="openFindId"/>
  </article>
  <article v-show="initPw" class="popup">
    <init-pw @openInitPw="openInitPw"/>
  </article>

  <article v-show="isAlert" class="popup popup-alert">
    <div class="popup-wrapper">
      <div class="popup-contents py-10 px-10" style="width: 300px">
        <article class="modal-alert-layout pb-10">
          <div class="alert-view-box pb-6">
            <img src="/img/common/ic_alert.svg" alt="이미지" />
          </div>
          <div class="alert-msg-box" v-html='formatErrMsg()'></div>
        </article>
        <article class="modal-menu-layout1">
          <div class="modal-menu-list">
            <router-link to="" @click="alertClose" class="modal-menu-btn menu-primary"
            >확인
            </router-link
            >
          </div>
        </article>
      </div>
    </div>
  </article>

  <!--end::Modals-->
</template>

<script>
import { mapState } from 'vuex'
import * as yup from 'yup'
import { ref } from 'vue'
import { getGugun, getSido } from '@/util/ui'
import { JobCode } from '@/util/sbas_cnst'
import CertModal from '@/components/common/modal/CertModal.vue'
import FindId from '@/components/common/FindId.vue'
import InitPw from '@/components/common/InitPw.vue'
import CloseButton from '@/components/common/CloseButton.vue'

export default {
  name: 'LoginView',
  components: { CloseButton, InitPw, FindId, CertModal },
  computed: {
    ...mapState('admin', ['smsCrtfSuccess', 'cmSido', 'cmGugun', 'organMedi'])
  },
  props: {},
  data() {
    const schema = yup.object({
      id: yup.string().required('유효성검사'),
      pw: yup.string().required('유효성검사'),
    })
    return {
      schema,
      id: '',
      pw: '',
      crtfNo: '',
      /*todo 본인확인코드 선언하고 3step - 기존/발송버튼누른후/Y로 나누기*/
      isCertified: false,
      selectedFile: null,
      imgUrl: null,
      valPw: null,
      JobCode,
      form: {
        id: null,
        pw: null,
        userNm: null,
        telno: '',
        jobCd: null,
        ocpCd: null,
        ptTypeCd: [],
        instTypeCd: null,
        instId: null,
        instNm: null,
        dutyDstr1Cd: null,
        dutyDstr2Cd: null,
        attcId: null,
        btDt: null,
        authCd: 'DTPM0001'
      },
      initialForm: {
        id: null,
        pw: null,
        userNm: null,
        telno: '',
        jobCd: null,
        ocpCd: null,
        ptTypeCd: [],
        instTypeCd: null,
        instId: null,
        instNm: null,
        dutyDstr1Cd: null,
        dutyDstr2Cd: null,
        attcId: null,
        btDt: null,
        authCd: null
      },
      instTypeOptions: [
        { value: 'ORGN0001', label: '병상배정반' },
        { value: 'ORGN0002', label: '구급대' },
        { value: 'ORGN0003', label: '보건소' },
        { value: 'ORGN0004', label: '의료진' },
        { value: 'ORGN0005', label: '전산담당' },
      ],
      showErrorMessage: false,
      isExistId: false,
    }
  },
  setup() {
    const userEditModal = ref(false)
    const showCertify = ref(false)
    const isAlert = ref(false)
    const findingId = ref(false)
    const initPw = ref(false)
    let timeText = ref('03:00')
    const errMsg = ''
    let timer = null
    const toggleUserEditModal = function () {
      //console.log(userEditModal)
      userEditModal.value = !userEditModal.value
      //document.getElementById("kt_modal_edit_user").modal('show');
    }
    const openCertify = function () {
      showCertify.value = !showCertify.value
    }
    const alertOpen = function (msg) {
      this.errMsg = msg
      this.isAlert = true
    }
    const alertClose = function () {
      console.log('실행')
      isAlert.value = !isAlert.value
    }
    return {
      userEditModal,
      showCertify,
      isAlert,
      errMsg,
      toggleUserEditModal,
      alertOpen,
      alertClose,
      findingId,
      initPw,
      openCertify,
      timeText,
    }
  },
  methods: {
    getGugun,
    getSido,
    timerStart() {
      let time = 179 // 기준시간 작성
      let min = '' // 분
      let sec = '' // 초

      if (this.timer) {
        clearInterval(this.timer)
      }

      this.timer = setInterval(() => {
        min = parseInt(time / 60) // 몫을 계산
        sec = time % 60 // 나머지를 계산

        if (min.toString().length === 1) {
          min = '0' + min.toString()
        }

        if (sec.toString().length === 1) {
          sec = '0' + sec.toString()
        }

        // document.querySelector('.timer').textContent = min + ':' + sec
        this.timeText = min + ':' + sec
        console.log(this.timeText, 'time')

        time--

        if (time < 0 || !this.showCertify) {
          clearInterval(this.timer) // setInterval() 실행을 끝냄
        }
      }, 1000)
    },
    validateInput(idx) {
      if (idx === 0) {
        this.id = this.id.replace(/[^A-Za-z0-9@.\-_]/g, '')
      } else if (idx === 3) {
        return this.form.id === null && this.showErrorMessage
      } else if (idx === 4) {
        return this.form.pw === null && this.showErrorMessage
      } else if (idx === 5) {
        return this.form.pw !== this.valPw && this.showErrorMessage
      } else if (idx === 6) {
        return this.form.userNm === null && this.showErrorMessage
      } else if (idx === 7) {
        return (this.form.btDt === null || this.form.btDt.length !== 8 ||
          !/^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/.test(this.form.btDt)) && this.showErrorMessage;
      } else if (idx === 8) {
        return this.form.instTypeCd === null && this.showErrorMessage
      } else if (idx === 9) {
        if(this.form.jobCd===JobCode.Rqst){
          this.form.instTypeCd = 'ORGN0003'
        } else if(this.form.jobCd===JobCode.Aprv){
          this.form.instTypeCd = 'ORGN0001'
        } else if(this.form.jobCd===JobCode.Meds){
          this.form.instTypeCd = 'ORGN0004'
        } else {
          this.form.instTypeCd = 'ORGN0005'
        }
        return this.form.jobCd === null && this.showErrorMessage
      } else if (idx === 10) {
        return this.form.authCd === null && this.showErrorMessage
      } else if (idx === 11) {
        return this.form.dutyDstr1Cd === null && this.showErrorMessage
      } else if (idx === 12) {
        return this.form.instNm === null && this.showErrorMessage
      }
      return false
    },
    onSubmit() {
      //let newData ={}
      //const recaptchaToken = this.$refs.recaptcha.getResponse();
      const recaptchaToken = true
      if (recaptchaToken) {
        if (this.id === '') {
          this.alertOpen('아이디를 입력해 주세요.')
        } else if (this.pw === '') {
          this.alertOpen('비밀번호를 입력해 주세요.')
        } else {
          const values = {
            id: this.id,
            pw: this.pw
          }
          console.log('제출' + values)
          this.getSido()
          this.$store.dispatch('user/login', values)
            .then(message => {
              if (message) {
                this.alertOpen(message)
                console.log('응답 메시지:', message)
              }
            })
        }
      } else {
        console.log('reCAPTCHA 안함')
      }
    },
    onFileChange(event) {
      console.log('업로드 이벤트')
      this.selectedFile = event.target.files[0]
      if (this.selectedFile) {
        // 이미지 미리보기
        const blob = new Blob([this.selectedFile], { type: 'image/jpeg' })
        this.imgUrl = URL.createObjectURL(blob)
      }
    },
    imgRemove() {
      this.$store.commit('setAttcId', null)
      this.imgUrl = ''
    },
    onEnter(value) {
      console.log('가입')
      const value2 = value
      this.$store.dispatch('user/signup', value2)
    },
    openFindId() {
      this.findingId = !this.findingId
      console.log('아이디 찾기', this.findingId)
    },
    openInitPw() {
      this.initPw = !this.initPw
      console.log('비번 초기화', this.initPw)
    },
    phoneCertify() {
      const certifyRows = document.querySelectorAll('.certify-row')
      const certifyBtns = document.querySelectorAll('.certify-btn')

      certifyRows.forEach((row) => {
        row.style.display = 'table-row'
      })

      certifyBtns.forEach((btn) => {
        btn.textContent = '재발송'
      })
      const num = this.form.telno
      this.$store.dispatch('user/sendSms', num)
      this.timerStart()
    },
    certifyNo(num) {
      console.log(num)
      if (num === '') {
        this.alertOpen('인증번호를 입력해 주세요.')
      } else if (num.length !== 6) {
        this.alertOpen('인증번호를 6자리로\n' + '입력해 주세요.')
      } else {
        this.$store.dispatch('user/confirmSms', { phoneNo: this.form.telno, certNo: num }).then((result) => {
          console.log(this.$store.state.smsCrtfSuccess)
          if (result) {
            this.alertOpen('인증이 완료되었습니다.')
            /* todo 본인확인Flag Y로저장 */
            this.isCertified = true
            this.crtfNo = ''
            this.openCertify()
          } else {
            this.alertOpen('인증번호가 일치하지 않습니다.\n' + '다시 입력해 주세요.')
          }
        })
      }
    },
    reqUserReg() {
      if (this.validateForm()) {
        this.saveImage().then((result) => {
          const ptTypeCd = this.form['ptTypeCd']
          const requestData = {
            ...this.form,
            ptTypeCd: ptTypeCd.length > 0 ? ptTypeCd.join(';') : null,
            attcId: result
          }
          this.$store.dispatch('user/reqUserReg', requestData)
            .then(code => {
              if (code === '00') {
                this.alertOpen('사용자 등록 요청이 완료되었습니다.\n 관리자 승인후 로그인이 가능합니다.')
                this.toggleUserEditModal()
                this.resetFormData()
              } else {
                this.alertOpen('사용자 등록 요청시 오류가 발생했습니다.\n' + '관리자에게 문의해주세요.')
              }
              console.log('응답 코드:', code)
            })
        })
      }
    },
    saveImage() {
      if (this.selectedFile === null) {
        return Promise.resolve(null)
      }
      const formData = new FormData()
      formData.append('param1', 'user image')
      formData.append('param2', this.selectedFile)

      return this.$store.dispatch('user/uploadPrivateImage', formData, false)
        .then((result) => {
          return result.attcId[0]
        })
        .catch((error) => {
          console.error('이미지 업로드 에러', error)
          throw error
        })
    },
    validateForm() {
      if (this.isExistId) {
        this.alertOpen('이미 등록된 아이디입니다.')
        return false
      }
      if (!this.isCertified) {
        this.alertOpen('본인인증을 진행해 주세요.')
        return false
      }

      const form = this.form
      const requiredFields = {
        id: { idx: 3 },
        pw: { idx: 4 },
        userNm: { idx: 6 },
        btDt: { idx: 7 },
        instTypeCd: { idx: 8 },
        jobCd: { idx: 9 },
        authCd: { idx: 10 },
        dutyDstr1Cd: { idx: 11 },
        instId: { idx: 12 }
      }

      for (const field in requiredFields) {
        let showErrorMessage = false
        if (!form[field]) {
          showErrorMessage = true
          this.showErrorMessage = showErrorMessage
          return false
        }
      }
      return true
    },
    removeHyphens() {
      this.form.telno = this.form.telno.replace(/-/g, '')
    },
    resetFormData() {
      this.form = { ...this.initialForm }
      this.isCertified = false
    },
    getMedInst() {
      let data = {
        dstr1Cd: this.form.dutyDstr1Cd !== null ? this.form.dutyDstr1Cd : undefined,
        dstr2Cd: this.form.dutyDstr2Cd !== null ? this.form.dutyDstr2Cd : undefined,
        instTypeCd: this.form.instTypeCd
      }
      this.$store.dispatch('admin/getOrganMedi', data)
    },
    handleInstIdChange() {
      const selectedInst = this.organMedi?.find(inst => inst.instId === this.form.instId)
      if (selectedInst) {
        this.form.instNm = selectedInst.instNm
      } else {
        this.form.instNm = null
      }
    },
    checkDuplicateUserId() {
      this.$store.dispatch('user/existId', this.form.id).then((result) => {
        if (result) {
          this.isExistId = true
        } else {
          this.isExistId = false
        }
      })
    },
    formatErrMsg() {
      return this.errMsg.replace(/\n/g, '<br>')
    }
  },
  mounted() {
    this.emitter.on('toggleUserEditModal', this.toggleUserEditModal)

    const storedImg = localStorage.getItem('imgData')
    if (storedImg) {
      this.imgUrl = storedImg
    }

    this.$store.dispatch('admin/getSido')
  }
}
</script>

<style scoped>
.login-wrap {
  position: absolute !important;
  width: 100% !important;
  height: 600px;
  margin: 0 !important;
  padding: 0 2rem !important;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  max-width: calc(100% - 4rem);
}

.login-bottom {
  display: none;
}

.login-bg {
  position: absolute;
  background-image: url(/src/assets/img/bg-login.png);
  background-size: contain;
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  left: 0;
  width: 100%;
  height: 100%;
}

.login-contents {
  position: absolute !important;
  right: 5% !important;
  top: 0;
  left: initial;
  width: 600px !important;
  height: 600px;
  max-width: calc(100% - 2rem) !important;
  padding: 2rem 4rem !important;
}

.fade {
  opacity: 100;
}

.section.login .login-bottom {
  background-color: transparent;
}

.modal,
.popup {
  display: inline-block;
  --bs-modal-width: 1000px;
}

.modal-dialog {
  height: calc(100% - 150px);
}

@media (max-width: 767.98px) {
  .login-wrap {
    width: 100% !important;
    max-width: 100%;
  }

  .login-contents {
    margin: 0;
    width: 100% !important;
    top: 50%;
    left: 50% !important;
    right: initial !important;
    transform: translate(-50%, -50%);
    padding: 1rem !important;
  }
}

.hover-a:hover {
  color: #74AFEB !important;
  cursor: pointer;
}
</style>
