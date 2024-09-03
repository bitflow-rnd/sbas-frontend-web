<template>
  <article class='popup popup-assignment-cancel' tabindex='-3' style=''>
    <div class='popup-wrapper'>
      <div class='popup-contents'>
        <div class='popup-head-box py-5 px-10'>
          <div class='head-tit-box'>배정 불가</div>
          <CloseButton @close='emits("closePopup")' />
        </div>

        <div class='popup-body-box py-5 px-10'>
          <div class='d-flex flex-column pb-6'>
            <div class='fw-medium fs-16px text-black pb-4'>미수용 사유를 선택해주세요.</div>
            <div class=''>
              <article class='toggle-list-layout3'>
                <div class='toggle-list'>
                  <label v-for='(item, idx) in model.bnrnCodeList' :key='idx'>
                    <input type='radio' name='toggle1'
                           :value='item.cdId' v-model='model.data.negCd' />
                    <span class='txt'>{{ item.cdNm }}</span>
                  </label>
                </div>
              </article>
            </div>
          </div>

          <div>
            <div class='fw-medium fs-16px text-black pb-4'>상세 사유 입력</div>
            <div>
              <div class='textbox'>
                <textarea id='deniedAsgn'
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
              >미수용 처리
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </article>

  <SbasAlert :is-alert='model.isAlert' :err-msg='model.errMsg' :cnc-btn='model.cncBtn'
             @confirm-alert='confirm' @alert-close='closeAlert' />

  <SbasAlert :is-alert='model.confirmAlert' :err-msg='model.errMsg'
             @confirm-alert='emits("closeModal")' />

</template>

<script setup>
import SbasAlert from '@/components/common/SbasAlert.vue'
import { defineProps, defineEmits, reactive } from 'vue'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'
import { useStore } from 'vuex'
import CloseButton from '@/components/common/CloseButton.vue'
import { JobCode } from '@/util/sbas_cnst'

const props = defineProps({
  bdDetail: Object,
  userInfo: Object,
  timeline: Object,
})
const emits = defineEmits(['closePopup', 'closeModal'])
const store = useStore()

const model = reactive({
  bnrnCodeList: store.getters['common/getBedNoReason'],
  data: {
    ptId: props.bdDetail.ptId,
    bdasSeq: props.bdDetail.bdasSeq,
    aprvYn: 'N',
    negCd: '',
    msg: '',
  },
  isAlert: false,
  confirmAlert: false,
  cncBtn: false,
  errMsg: '',
})

function openAlert() {
  model.isAlert = true
  model.cncBtn = true
  model.errMsg = '배정 불가 처리하시겠습니까?'
}

function confirm() {
  if (props.bdDetail.bedStatCd === 'BAST0003' &&
    (props.userInfo.jobCd === JobCode.Aprv || props.userInfo.jobCd === JobCode.Sysa)) {
    refuseBdasReq()
  } else if (props.bdDetail.bedStatCd === 'BAST0004' &&
    (props.userInfo.jobCd === JobCode.Meds || props.userInfo.jobCd === JobCode.Sysa)) {
    refuseMedBdas()
  }
}

function refuseBdasReq() {
  const url = `${API_PROD}/api/v1/private/bedasgn/reqconfirm`
  const request = model.data
  axios_cstm().post(url, request)
    .then((response) => {
      if (response.data?.code === '00') {
        model.confirmAlert = true
        model.isAlert = false
        model.errMsg = '배정 불가 처리되었습니다.'
      }
    })
    .catch((e) => {
      console.error('병상승인 실패', e)
    })
}

function refuseMedBdas() {
  const url = `${API_PROD}/api/v1/private/bedasgn/asgnconfirm`
  const request = model.data
  let find = props.timeline.items.find((item) => item.chrgUserId === props.userInfo.id)
  request.asgnReqSeq = find.asgnReqSeq ?? 1
  request.hospId = find.chrgInstId ?? 'INST000000'
  axios_cstm().post(url, request)
    .then((response) => {
      if (response.data?.code === '00') {
        model.confirmAlert = true
        model.isAlert = false
        model.errMsg = '배정 불가 처리되었습니다.'
      }
    })
    .catch((e) => {
      console.error('병상승인 실패', e)
    })
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