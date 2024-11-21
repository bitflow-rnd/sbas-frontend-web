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
                    <input type='checkbox' v-model='model.selectedItems' :value='item.value'><i></i>
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
import { defineEmits, defineProps, reactive } from 'vue'
import { axios_cstm } from '@/util/axios_cstm'
import { API_PROD } from '@/util/constantURL'

const emits = defineEmits(['closePopup'])
const props = defineProps({
  cardItemList: Array,
})

const model = reactive({
  bedStat: [
    { name: '병상요청 현황', value: 'BAST0003' },
    { name: '병상배정 현황', value: 'BAST0005' },
    { name: '이송/배차 현황', value: 'BAST0006' },
    { name: '입/퇴원처리 현황', value: 'BAST0007' },
    // { name: '불가 처리 현황', value: 'BAST0008' },
  ],
  selectedItems: [],
})

function addItem() {
  const period = '180'
  const url = `${API_PROD}/api/v1/public/dsbd/bedStat/${period}`
  const selectedItems = model.selectedItems

  console.log(selectedItems.includes('BAST0003'))

  axios_cstm().get(url)
    .then((response) => {
      if (response.data?.code === '00') {
        const filteredData = response.data.result.filter(item =>
          selectedItems.includes(item.title)
        )
        // filteredData의 title을 model.bedStat의 value에 맞는 name으로 변경
        const updatedData = filteredData.map(item => {
          const matchingBedStat = model.bedStat.find(stat => stat.value === item.title)
          if (matchingBedStat) {
            return {
              ...item,
              title: matchingBedStat.name
            }
          }
          return item // 일치하는 값이 없으면 원래 항목 그대로 반환
        })

        // 변경된 데이터를 cardItemList에 추가
        props.cardItemList.push(...updatedData)
        closePopup()
        console.log('성공', updatedData)
      }
    })
    .catch((e) => {
      console.error('실패', e)
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