<template>
  <article class='popup popup-assignment-request2' style=''>
    <div class='popup-wrapper'>
      <div class='popup-contents'>
        <div class='popup-head-box py-5 px-10'>
          <div class='head-tit-box'>병상배정 승인</div>
          <CloseButton @close='emits("closePopup")' />
        </div>

        <div class='popup-body-box py-5 px-10'>
          <div class='d-flex flex-column pb-6'>
            <div class='fw-medium fs-16px text-black pb-4'>배정정보 입력</div>

            <div class=''>
              <article class='table-form-layout1'>
                <div class='form-head-box'></div>

                <div class='form-body-box'>
                  <div class='table-box'>
                    <table>
                      <colgroup>
                        <col style='width: 127px' />
                        <col style='width: auto' />
                      </colgroup>
                      <tbody>
                      <tr>
                        <th>병실 (선택)</th>
                        <td>
                          <div class='tbox full'>
                            <input v-model='model.data.roomNm' placeholder='병실번호 입력' />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>진료과 (선택)</th>
                        <td>
                          <div class='tbox full'>
                            <input v-model='model.data.deptNm' placeholder='진료과 입력' />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>담당의 (선택)</th>
                        <td>
                          <div class='tbox full'>
                            <input v-model='model.data.spclNm' placeholder='담당의 입력' />
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>연락처 (선택)</th>
                        <td>
                          <div class='tbox full'>
                            <input v-model='model.data.chrgTelno' placeholder='연락처 입력' />
                          </div>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <div>
            <div class='fw-medium fs-16px text-black pb-4'>승인관련 메시지 입력</div>

            <div>
              <div class='textbox'>
                <textarea
                  maxlength='500'
                  placeholder='메시지 입력'
                  style='height: 120px'
                  v-model='model.data.msg'
                ></textarea>
                <div class='limit-box'>
                  <span id='textarea1'>{{ model.data.msg.length }}</span
                  >/500자
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='popup-foot-box py-5 px-10'>
          <article class='modal-menu-layout1'>
            <div class='modal-menu-list'>
              <router-link to='' @click='openAlert' class='modal-menu-btn menu-primary'
              >승인완료
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </article>

  <SbasAlert :is-alert='model.isAlert' :err-msg='model.errMsg' :cnc-btn='model.cncBtn'
             @confirm-alert='aprvMed' @alert-close='closeAlert' />

  <SbasAlert :is-alert='model.confirmAlert' :err-msg='model.errMsg'
             @confirm-alert='emits("closeModal")' />

</template>

<script setup>
import { defineEmits, defineProps, reactive } from 'vue'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'
import CloseButton from '@/components/common/CloseButton.vue'
import SbasAlert from '@/components/common/SbasAlert.vue'

const props = defineProps({
  bdDetail: Object,
  userInfo: Object,
  timeline: Object
})
const emits = defineEmits(['closePopup', 'closeModal'])

const model = reactive({
  data: {
    ptId: props.bdDetail.ptId,
    bdasSeq: props.bdDetail.bdasSeq,
    aprvYn: 'Y',
    msg: ''
  },
  isAlert: false,
  confirmAlert: false,
  cncBtn: false,
  errMsg: ''
})

function aprvMed() {
  const url = `${API_PROD}/api/v1/private/bedasgn/asgnconfirm`
  const request = model.data
  let find = props.timeline.items.find((item) => item.title === '배정대기' && item.chrgInstId === props.userInfo.instId)
  request.asgnReqSeq = find.asgnReqSeq ?? 1
  request.hospId = find.chrgInstId ?? 'INST000000'
  axios_cstm().post(url, request)
    .then((response) => {
      if (response.data?.code === '00') {
        model.confirmAlert = true
        model.isAlert = false
        model.errMsg = '승인 완료되었습니다.'
      }
    })
    .catch((e) => {
      console.error('승인 실패', e)
    })
}

function openAlert() {
  model.isAlert = true
  model.cncBtn = true
  model.errMsg = '배정 승인하시겠습니까?'
}

function closeAlert() {
  model.isAlert = false
}

</script>

<style scoped>

.popup {
  display: block;
}

.list-table-hoverable tr {
  cursor: pointer;
}

.list-table-hoverable tr:hover td {
  background-color: #74afeb22;
}

</style>