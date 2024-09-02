<template>
  <article class='popup popup-card-select'>
    <div class='popup-wrapper'>
      <div class='popup-contents'>

        <div class='popup-head-box py-5 px-10'>
          <div class='head-tit-box'>현황카드 항목선택</div>
          <CloseButton @close='closePopup' />
        </div>

        <div class='popup-body-box py-5 px-10'>
          <div class='d-flex flex-column pb-6'>
            <div
              class='border border-bottom-1 border-top-0 border-left-0 border-right-0 border-gray-300 pb-3 all-check-box'>
              <div class='cbox'>
                <label>
                  <input type='checkbox'><i></i>
                  <span class='txt'>전체 선택</span>
                </label>
              </div>
            </div>

            <div class='pt-1 check-list'>

              <div class='row mt-3'>
                <div class='cbox'>
                  <label>
                    <input type='checkbox'><i></i>
                    <span class='txt'>코로나19 감염환자 현황</span>
                  </label>
                </div>
              </div>

              <div class='row mt-4'>
                <div class='cbox'>
                  <label>
                    <input type='checkbox'><i></i>
                    <span class='txt'>병상요청 현황</span>
                  </label>
                </div>
              </div>

              <div class='row mt-4'>
                <div class='cbox'>
                  <label>
                    <input type='checkbox'><i></i>
                    <span class='txt'>병상배정 현황</span>
                  </label>
                </div>
              </div>

              <div class='row mt-4'>
                <div class='cbox'>
                  <label>
                    <input type='checkbox'><i></i>
                    <span class='txt'>이송/배차 현황</span>
                  </label>
                </div>
              </div>

              <div class='row mt-4'>
                <div class='cbox'>
                  <label>
                    <input type='checkbox'><i></i>
                    <span class='txt'>입/퇴원처리 현황</span>
                  </label>
                </div>
              </div>

              <div class='row mt-4'>
                <div class='cbox'>
                  <label>
                    <input type='checkbox'><i></i>
                    <span class='txt'>완료 처리 현황</span>
                  </label>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  </article>
</template>

<script setup>
import CloseButton from '@/components/common/CloseButton.vue'
import { defineEmits } from 'vue'

const emits = defineEmits(['closePopup'])

function closePopup() {
  emits('closePopup')
}

</script>

<style scoped>

.rate-box > span:first-child {
  margin-right: 7px;
}

</style>