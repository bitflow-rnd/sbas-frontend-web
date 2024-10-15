<template>
  <article class="popup popup-exist">
    <div class="popup-wrapper">
      <div class="popup-contents">
        <div class="popup-head-box py-5 px-10">
          <div class="head-tit-box">환자정보 존재</div>
          <CloseButton @close='emits("closePopup")' />
        </div>

        <div class="popup-body-box py-5 px-10">
          <div class="patient-exist-box">
            <div class="exist-box d-flex align-items-center">
              <div
                class="d-inline-flex align-items-center justify-content-center w-auto h-30px w-50px text-white rounded-4 px-0"
                :class="cmpExist(0)[1]"
              >
                {{ cmpExist(0)[0] }}
              </div>
              <div class="d-inline-flex w-auto ms-3">
                이름 : {{ props.existPt.ptNm }} ({{ props.existPt.gndr }}/{{
                  getAge(props.existPt.rrno1, props.existPt.rrno2)
                }}세)
              </div>
            </div>

            <div class="exist-box d-flex align-items-center mt-3">
              <div
                class="d-inline-flex align-items-center justify-content-center w-auto h-30px w-50px text-white rounded-4 px-0"
                :class="cmpExist(1)[1]"
              >
                {{ cmpExist(1)[0] }}
              </div>
              <div class="d-inline-flex w-auto ms-3">
                주민등록번호 : {{ props.existPt.rrno1 }}-{{ props.existPt.rrno2.charAt(0) }}******
              </div>
            </div>

            <div class="exist-box d-flex align-items-center mt-3">
              <div
                class="d-inline-flex align-items-center justify-content-center w-auto h-30px w-50px text-white rounded-4 px-0"
                :class="cmpExist(2)[1]"
              >
                {{ cmpExist(2)[0] }}
              </div>
              <div class="d-inline-flex w-auto ms-3">주소 : {{ props.existPt.bascAddr }} {{ props.existPt.detlAddr ?? '' }}</div>
            </div>

            <div class="exist-box d-flex align-items-center mt-3">
              <div
                class="d-inline-flex align-items-center justify-content-center w-auto h-30px w-50px text-white rounded-4 px-0"
                :class="cmpExist(3)[1]"
              >
                {{ cmpExist(3)[0] }}
              </div>
              <div class="d-inline-flex w-auto ms-3">연락처 : {{ getTelno(props.existPt.mpno) }}</div>
            </div>

            <div class="exist-box d-flex align-items-center mt-6">
              <div class="text-gray-800">※ 동명이인 여부를 확인해주세요.</div>
            </div>
          </div>
        </div>

        <div class="popup-foot-box py-5 px-10">
          <article class="modal-menu-layout1">
            <div class="modal-menu-list">
              <a @click="updateExistPt" class="modal-menu-btn menu-primary">기존정보 업데이트</a>
              <a @click="register" v-show='props.existPt === null' class="modal-menu-btn menu-primary-outline">신규등록</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </article>

  <SbasAlert :is-alert='model.confirmAlert' :err-msg='model.errMsg'
             @confirm-alert='closeAlert' />

</template>

<script setup>
import { defineEmits, defineProps, onMounted, reactive } from 'vue'
import { getAge, getTelno } from '@/util/ui'
import CloseButton from '@/components/common/CloseButton.vue'
import SbasAlert from '@/components/common/SbasAlert.vue'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'
import { registerNewPt } from '@/store/modules/patnt'

const emits = defineEmits(['closePopup', 'closeExistPt'])
const props = defineProps({
  existPt: {
    type: Object,
  },
  newPt: {
    type: Object,
  },
})

const model = reactive({
  errMsg: '',
  confirmAlert: false,
})

onMounted(() => {
})

function cmpExist(idx) {
  const conditions = {
    0: () => props.existPt.ptNm === props.newPt.ptNm,
    1: () => props.existPt.rrno1 === props.newPt.rrno1 && props.existPt.rrno2 === props.newPt.rrno2,
    2: () => props.existPt.bascAddr === props.newPt.bascAddr,
    3: () => props.existPt.mpno === props.newPt.mpno,
  };

  const [message, colorClass] = conditions[idx]() ? ['일치', 'bg-primary'] : ['불일치', 'bg-gray-400'];

  return [message, colorClass];
}

function updateExistPt() {
  const data = {ptId: props.existPt.ptId, newPt: props.newPt}
  const url = `${API_PROD}/api/v1/private/patient/modinfo/${data.ptId}`
  const request = data.newPt
  axios_cstm()
    .post(url, request)
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
        model.errMsg = '환자 정보가\n수정되었습니다.'
        model.confirmAlert = true
      }
    }).catch((error) => {
      console.error(error)
    })
}

function register() {
  registerNewPt(props.newPt, () => {
    model.errMsg = '환자 정보가\n등록되었습니다.'
    model.confirmAlert = true
  })
}

function closeAlert() {
  model.confirmAlert = false
  emits('closePopup')
  emits('closeExistPt')
}

</script>

<style scoped>

.popup {
  display: block;
}

</style>
