<template>
  <article class='popup popup-card-remove'>
    <div class='popup-wrapper'>
      <div class='popup-contents py-10 px-10' style='width: 300px;'>
        <article class='modal-alert-layout pb-5'>
          <div class='alert-view-box pb-6'>
            <img src='/img/common/ic_alert.svg' alt='이미지'>
          </div>
          <div class='alert-msg-box text-black'>해당 현황카드 항목을<br />
            삭제 하시겠습니까?
          </div>
          <div class='alert-sub-box text-gray-600 pt-3 text-center fs-12px'>삭제 후 현황카드 관리 기능에서<br /> 추가 가능합니다.</div>
        </article>
        <article class='modal-menu-layout1'>
          <input type='hidden' name='cardIdx'>
          <div class='modal-menu-list'>
            <a @click='closePopup' class='modal-menu-btn menu-cancel' data-type='cancel'>취소</a>
            <a @click='confirm' class='modal-menu-btn menu-primary' data-type='success'>확인</a>
          </div>
        </article>
      </div>
    </div>
  </article>
</template>
<script setup>
import { defineEmits } from 'vue'

const emits = defineEmits(['closePopup'])
const props = defineProps({
  idx: 0,
  cardItemList: Array,
})

function confirm() {
  props.cardItemList.splice(props.idx, 1)
  closePopup()
}

function closePopup() {
  emits('closePopup')
}

</script>
<style scoped>

.rate-box > span:first-child {
  margin-right: 7px;
}
</style>