<template>
  <article class='popup popup-assignment-request1' style=''>
    <div class='popup-wrapper'>
      <div class='popup-contents'>
        <div class='popup-head-box py-5 px-10'>
          <div class='head-tit-box'>병상요청 승인</div>
          <CloseButton @close='emits("closePopup")' />
        </div>

        <div class='popup-body-box py-5 px-10'>
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
             @confirm-alert='aprvBedAsgn' @alert-close='closeAlert' />

  <SbasAlert :is-alert='model.confirmAlert' :err-msg='model.errMsg'
             @confirm-alert='emits("closeModal")' />

</template>

<script setup>
import { defineEmits, reactive } from 'vue'
import SbasAlert from '@/components/common/SbasAlert.vue'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'
import CloseButton from '@/components/common/CloseButton.vue'

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

function aprvBedAsgn() {
  const url = `${API_PROD}/api/v1/private/bedasgn/reqconfirm`
  const request = model.data
  axios_cstm().post(url, request)
    .then((response) => {
      if (response.data?.code === '00') {
        model.confirmAlert = true
        model.isAlert = false
        model.errMsg = '승인 완료되었습니다.'
      }
    })
    .catch((e) => {
      console.error('병상요청 승인 실패', e)
    })
}

function openAlert() {
  model.isAlert = true
  model.cncBtn = true
  model.errMsg = '병상요청 승인하시겠습니까?'
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