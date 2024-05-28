<template>
  <article v-show='props.isAlert' class='popup popup-confirm' style='z-index: 1600'>
    <div class='popup-wrapper'>
      <div class='popup-contents py-10 px-10' style='width: 300px'>
        <article class='modal-alert-layout pb-10'>
          <div class='alert-view-box pb-6'>
            <img src='/img/common/ic_alert.svg' alt='이미지' />
          </div>
          <div class='alert-msg-box'>{{ props.errMsg }}</div>
        </article>
        <article class='modal-menu-layout1'>
          <div class='modal-menu-list'>
            <router-link
              to=''
              @click='confirmAlert'
              class='modal-menu-btn menu-primary'
              data-type='success'
            >확인
            </router-link>
            <router-link
              v-show='cncBtn'
              to=''
              @click='alertClose'
              class='modal-menu-btn menu-cancel'
              data-type='cancel'
            >
              취소
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </article>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'

const emits = defineEmits(['alertClose', 'confirmAlert'])
const props = defineProps({
  errMsg: String,
  cncBtn: Boolean,
  isAlert: Boolean
})

function confirmAlert() {
  emits('confirmAlert')
}

function alertClose() {
  emits('alertClose')
}

</script>

<style scoped>

.popup {
  display: block;
}

.img-box > h2 {
  color: #595959;
  font-weight: normal;
  margin-top: 12px;
}

</style>
