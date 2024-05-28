<template>
  <article class="popup popup-exist">
    <div class="popup-wrapper">
      <div class="popup-contents">
        <div class="popup-head-box py-5 px-10">
          <div class="head-tit-box">환자정보 존재</div>

          <div class="head-option-box">
            <div @click="emits('closePopup')" class="popup-close-btn" role='button'>
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
            </div>
          </div>
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
                주민등록번호 : {{ props.existPt.rrno1 }}-{{ props.existPt.rrno2 }}******
              </div>
            </div>

            <div class="exist-box d-flex align-items-center mt-3">
              <div
                class="d-inline-flex align-items-center justify-content-center w-auto h-30px w-50px text-white rounded-4 px-0"
                :class="cmpExist(2)[1]"
              >
                {{ cmpExist(2)[0] }}
              </div>
              <div class="d-inline-flex w-auto ms-3">주소 : {{ props.existPt.dstr1CdNm }} {{ props.existPt.dstr2CdNm }}</div>
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
              <a @click="registerNewPt" v-show='props.existPt === null' class="modal-menu-btn menu-primary-outline">신규등록</a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </article>
</template>

<script setup>
import { defineProps, onMounted } from 'vue'
import { getAge, getTelno } from '@/util/ui'
import { useStore } from 'vuex'

const store = useStore()
const emits = defineEmits(['closePopup', 'closeExistPt'])
const props = defineProps({
  existPt: {
    type: Object,
  },
  newPt: {
    type: Object,
  },
})

onMounted(() => {
})

function cmpExist(idx) {
  const conditions = {
    0: () => props.existPt.ptNm === props.newPt.ptNm,
    1: () => props.existPt.rrno1 === props.newPt.rrno1 && props.existPt.rrno2 === props.newPt.rrno2,
    2: () => props.existPt.dstr1Cd === props.newPt.dstr1Cd && props.existPt.dstr2Cd === props.newPt.dstr2Cd,
    3: () => props.existPt.mpno === props.newPt.mpno,
  };

  const [message, colorClass] = conditions[idx]() ? ['일치', 'bg-primary'] : ['불일치', 'bg-gray-400'];

  return [message, colorClass];
}

function updateExistPt() {
  const data = {ptId: props.existPt.ptId, newPt: props.newPt}
  store.dispatch('patnt/modiPtInfo', data)
  emits('closePopup')
  emits('closeExistPt')
}

function registerNewPt() {
  console.log(this.newPt)
  store.dispatch('patnt/regBasicInfo',this.newPt)
  emits('closePopup')
  emits('closeExistPt')
}

</script>

<style scoped>

.popup {
  display: block;
}

</style>
