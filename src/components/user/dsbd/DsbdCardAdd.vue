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
              <div v-for='(item, idx) in model.bedStat' :key='idx' class='row mt-3' :class="{'mt-4': idx > 0}">
                <div class='cbox'>
                  <label>
                    <input type='checkbox' v-model='model.selectedItems' :value='item'><i></i>
                    <span class='txt'>{{item.name}}</span>
                  </label>
                </div>
              </div>
            </div>

          </div>

          <article class='modal-menu-layout1'>
            <input type='hidden' name='cardIdx'>
            <div class='modal-menu-list'>
              <a @click='closePopup' class='modal-menu-btn menu-cancel' data-type='cancel'>취소</a>
              <a @click='addItem' class='modal-menu-btn menu-primary' data-type='success'>추가</a>
            </div>
          </article>
        </div>

      </div>

    </div>

  </article>
</template>

<script setup>
import CloseButton from '@/components/common/CloseButton.vue'
import { defineEmits, reactive } from 'vue'
import { axios_cstm } from '@/util/axios_cstm'
import { API_PROD } from '@/util/constantURL'

const emits = defineEmits(['closePopup'])

const model = reactive({
  bedStat: [
    { name: '코로나19 감염환자 현황', value: 'cov19' },
    { name: '병상요청 현황', value: 'BAST' },
    { name: '병상배정 현황', value: 'BAST' },
    { name: '이송/배차 현황', value: 'BAST' },
    { name: '입/퇴원처리 현황', value: 'BAST' },
    { name: '완료 처리 현황', value: 'BAST' },
  ],
  selectedItems: [],
})

function addItem() {
  const url = `${API_PROD}/api/v1/public/dsbd`
  const request = model.selectedItems
  axios_cstm().post(url, request)
    .then((response) => {
      if (response.data?.code === '00') {
      }
    })
    .catch((e) => {
      console.error('추가 실패', e)
    })
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