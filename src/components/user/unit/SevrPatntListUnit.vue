<template>
  <article class="table-list-layout1">
    <h3>중증환자 발생 목록</h3>
    <div class="table-body-box">
      <div class="table-box with-scroll small">
        <table class="list-table-hoverable">
          <thead>
            <tr>
              <th>배정상태</th>
              <th>인적사항</th>
              <th>중증도</th>
              <th>최근업데이트</th>
            </tr>
          </thead>
          <tbody v-if="model.list">
            <template v-for="(pt, idx) in model.list" :key="idx">
              <tr v-if="pt.bedStatCdNm" @click="selectPatient(pt)">
                <td>
                  {{ pt.bedStatCdNm ? pt.bedStatCdNm : '-' }}
                </td>
                <td>{{ pt.ptNm }} ({{ pt.age }}세,{{ pt.gndr }})</td>
                <td class="red">
                  {{ pt.hospNm ? pt.hospNm : '중증' }}
                </td>
                <td>
                  {{ getDate(pt.updtDttm) }}
                </td>
              </tr>
            </template>
          </tbody>
          <tbody v-if="!model.list">
            <tr>
              <td>조회된 중증환자가 없습니다</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </article>
</template>

<script setup>
import { onMounted, reactive, defineEmits } from 'vue'
import { useStore } from 'vuex'

const emit = defineEmits(['onPatientSelected'])
const store = useStore()
let model = reactive({
  list: []
})

onMounted(() => {
  store.dispatch('patnt/getSevrPatntListWidget').then((result) => {
    let list = []
    for (let i = 0; i < result.items.length; i++) {
      if (result.items[i].bedStatCdNm) {
        list.push(result.items[i])
      }
    }
    list.length = list.length > 15 ? 15 : list.length
    model.list = list
  })
})

async function selectPatient(patient) {
  if (patient['bdasSeq']) {
    await store.dispatch('bedasgn/getTimeline', patient)
    await store.dispatch('bedasgn/getDSInfo', patient)
  } else {
    store.commit('bedasgn/setTimeline', null)
    store.commit('bedasgn/setDisesInfo', null)
  }
  await store.dispatch('patnt/getBasicInfo', patient)
  emit('onPatientSelected', patient)
}

function getDate(data) {
  const dData = new Date(data)
  const dYear = dData.getFullYear()
  let dMonth = dData.getMonth() + 1
  let dDate = dData.getDate()
  if (dMonth < 10) {
    dMonth = '0' + dMonth
  }
  if (dDate < 10) {
    dDate = '0' + dDate
  }
  return dYear + '.' + dMonth + '.' + dDate
}
</script>

<style scoped>
.red {
  color: red;
}
</style>
