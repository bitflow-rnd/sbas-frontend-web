<template>
  <div class='modal show' id='kt_modal_hospitalization' tabindex='-1' aria-hidden='true' style=''>
    <!--begin::Modal dialog-->
    <div class='modal-dialog mw-1500px modal-dialog-centered'>
      <!--begin::Modal content-->
      <div class='modal-content'>
        <!--begin::Modal header-->
        <div class='modal-header px-10 py-5 d-flex justify-content-between'>
          <!--begin::Modal title-->
          <h2>입·퇴원 처리</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <CloseButton @close='closeModal' />
          <!--end::Close-->

          <article class='floating-request-box'>
            <div class='img-box'>
              <img src='/img/common/ic_request_patient.svg' alt='이미지' />
            </div>
            <div class='txt-box'>
              {{ bdDetail.ptNm }}
              <span class='text-gray-600 fw-normal'
              >({{ bdDetail.gndr }} / {{ bdDetail.age }}세 /
                {{ ptDetail.dstr1CdNm + ' ' + ptDetail.dstr2CdNm }} /
                {{ getTelno(ptDetail.mpno) }})</span
              >
            </div>
            <div class='txt-box'>
              <span class='text-primary'>{{ getTag(bdDetail.tagList) }}</span>
            </div>
          </article>
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class='modal-body scroll-y py-10 px-10'>
          <article class='table-form-layout1'>
            <div class='form-head-box'></div>

            <div class='form-body-box'>
              <div class='table-box'>
                <table>
                  <colgroup>
                    <col style='width: 168px' />
                    <col style='width: auto' />
                    <col style='width: 168px' />
                    <col style='width: auto' />
                  </colgroup>
                  <tbody>
                  <tr>
                    <th>병원명</th>
                    <td colspan='3'>{{ transInfo.destinationInfo.hospNm ?? '-' }}</td>
                  </tr>

                  <tr>
                    <th>처리 유형</th>
                    <td>
                      <div class='item-cell-box full justify-content-between'>
                        <article class='toggle-list-layout2'>
                          <div class='toggle-list'>
                            <label>
                              <input
                                type='radio'
                                value='IOST0001'
                                v-model='model.hosptlzdiscg.admsStatCd'
                              />
                              <span class='txt'>입원</span>
                            </label>

                            <label >
                              <input
                                type='radio'
                                value='IOST0002'
                                v-model='model.hosptlzdiscg.admsStatCd'
                              />
                              <span class='txt'>퇴원</span>
                            </label>

                            <label>
                              <input
                                type='radio'
                                value='IOST0003'
                                v-model='model.hosptlzdiscg.admsStatCd'
                              />
                              <span class='txt'>재택회송</span>
                            </label>
                          </div>
                        </article>
                      </div>
                    </td>
                    <th>병원 등록번호</th>
                    <td>
                      <div class='tbox full'>
                        <input type='text' v-model='model.hosptlzdiscg.pid' @blur='checkPid' placeholder='병원 등록번호 입력' />
                      </div>
                      <div v-if='validateInput(0) || validateInput(1)' class='item-cell-box full'>
                        <div class='text-danger pt-2 fs-12px'>※ 병원 등록번호를 확인해 주세요.</div>
                      </div>
                    </td>
                  </tr>
                  <tr v-if="model.hosptlzdiscg.admsStatCd === 'IOST0002'">
                    <th>퇴원 사유</th>
                    <td>
                      <div class='item-cell-box full justify-content-between'>
                        <article class='toggle-list-layout2'>
                          <div class='toggle-list'>
                            <label>
                              <input
                                type='radio'
                                value='DCRN0001'
                                v-model='model.hosptlzdiscg.dschRsnCd'
                              />
                              <span class='txt'>입원 불필요</span>
                            </label>

                            <label>
                              <input
                                type='radio'
                                value='DCRN0002'
                                v-model='model.hosptlzdiscg.dschRsnCd'
                              />
                              <span class='txt'>입원 거부</span>
                            </label>

                            <label>
                              <input
                                type='radio'
                                value='DCRN0003'
                                v-model='model.hosptlzdiscg.dschRsnCd'
                              />
                              <span class='txt'>재택 승인</span>
                            </label>
                          </div>
                        </article>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>진료과</th>
                    <td>
                      <div class='tbox full'>
                        <input type='text' v-model='model.hosptlzdiscg.deptNm' placeholder='진료과 입력' />
                      </div>
                    </td>
                    <th>병실</th>
                    <td>
                      <div class='tbox full'>
                        <input type='text' v-model='model.hosptlzdiscg.roomNm' placeholder='병실번호 입력' />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>담당의</th>
                    <td>
                      <div class='tbox full'>
                        <input type='text' v-model='model.hosptlzdiscg.spclNm' placeholder='담당의 이름 입력' />
                      </div>
                    </td>
                    <th>연락처</th>
                    <td>
                      <div class='tbox full'>
                        <input
                          type='text'
                          v-model='model.hosptlzdiscg.chrgTelno'
                          placeholder='의료진 연락처 입력'
                          maxlength='14'
                        />
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>전달사항</th>
                    <td colspan='3'>
                      <div class='item-cell-box full'>
                        <div class='textbox full'>
                            <textarea
                              maxlength='500'
                              placeholder='입원 / 퇴원 / 회송 사유 등 전달 메시지 입력'
                              style='height: 120px'
                              v-model='model.hosptlzdiscg.msg'
                            ></textarea>
                          <div class='limit-box'>
                              <span id='textarea1'>{{ model.hosptlzdiscg.msg.length }}</span
                              >/500자
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class='modal-menu-layout1 pt-10'>
            <div class='modal-menu-list'>
              <a class='modal-menu-btn menu-cancel'
                 @click='closeModal' >
                이전
              </a>
              <a class='modal-menu-btn menu-primary'
                 @click='confirm' >
                입·퇴원 처리 완료
              </a>
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>

  <SbasAlert :is-alert='model.isAlert' :err-msg='model.errMsg' :cnc-btn='model.cncBtn'
             @confirm-alert='closeModal' />

</template>

<script setup>
import { defineProps, defineEmits, reactive } from 'vue'
import CloseButton from '@/components/common/CloseButton.vue'
import { getTag, getTelno } from '@/util/ui'
import { getHisSampleData } from '@/util/his_sample_data'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'
import SbasAlert from '@/components/common/SbasAlert.vue'

const props = defineProps({
  bdDetail: Object,
  ptDetail: Object,
  transInfo: Object,
})
const emits = defineEmits(['closeModal'])

const model = reactive({
  hosptlzdiscg: {
    ptId: props.bdDetail.ptId,
    bdasSeq: props.bdDetail.bdasSeq,
    hospId: props.transInfo.destinationInfo.hospId,
    msg: '',
    admsStatCd: 'IOST0001',
    dschRsnCd: null,
    deptNm: null,
    pid: '',
  },
  isAlert: false,
  errMsg: '',
  cncBtn: false,
  showErrorMsg: false,
})

function confirm() {
  if (validateForm() && checkPid()) {
    // 샘플데이터
    const sampleData = getHisSampleData(model.hosptlzdiscg.pid)
    model.hosptlzdiscg.admsDt = sampleData.admsDt
    model.hosptlzdiscg.monStrtDt = sampleData.monStrtDt
    model.hosptlzdiscg.monStrtTm = sampleData.monStrtTm
    cfmHosp()
  }
}

function cfmHosp() {
  const url = `${API_PROD}/api/v1/private/bedasgn/confirmhosptlzdiscg`
  const request = model.hosptlzdiscg
  axios_cstm().post(url, request)
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
        model.isAlert = true
        model.errMsg = '입·퇴원 처리가 완료되었습니다.'
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function validateInput(idx) {
  if (idx === 0) {
    return model.hosptlzdiscg.pid === '' && model.showErrorMsg
  } else if (idx === 1) {
    return model.showErrorMsg
  }
}

function checkPid() {
  const data = getHisSampleData(model.hosptlzdiscg.pid)
  if (data === null) {
    model.showErrorMsg = true
    return false
  } else {
    model.showErrorMsg = false
    model.hosptlzdiscg.deptNm = data.deptNm
    model.hosptlzdiscg.roomNm = data.roomNm
    model.hosptlzdiscg.spclNm = data.spclNm
    return true
  }
}

function validateForm() {
  const data = model.hosptlzdiscg
  const requiredFields = {
    pid: { idx: 0 },
  }

  for (const field in requiredFields) {
    let showErrorMsg = false
    if (!data[field]) {
      showErrorMsg = true
      model.showErrorMsg = showErrorMsg
      return false
    }
  }
  return true
}

function closeModal() {
  emits("closeModal")
}

</script>

<style scoped>
.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.list-table-hoverable tr {
  cursor: pointer;
}

.list-table-hoverable tr:hover td {
  background-color: #74afeb22;
}

</style>