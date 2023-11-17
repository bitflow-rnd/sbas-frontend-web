<template>
  <article class="table-list-layout1">
    <template>
      <h4>
        <i class="fa-solid fa-bed-pulse"></i> 중증환자 발생/예측 현황
      </h4>
      <router-link
          to="/user/patnt/list"
          @click="handler"
          class="menu-item me-0 me-lg-1"
      >
        <a
            href="#none"
            class="btn btn-flex bg-primary text-white rounded-pill"
        >전체</a>
      </router-link>

    </template>
    <div class="table-body-box">
      <div class="table-box with-scroll small">
        <table class="list-table-hoverable">
          <thead>
            <tr>
              <th>배정상태</th>
              <th>인적사항</th>
              <th>중증도</th>
              <th>중증<br/>Score</th>
              <th>분석일</th>
              <th>위험일</th>
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
                  {{ idx<5?'중증':idx<10?'준중증':'준등증' }}
                </td>
                <td>{{ idx<5?0.9:idx<10?0.8:0.7 }}</td>
                <td>
                  2023.09.08
                </td>
                <td v-html="idx<5?'<b style=\'color: red\'>오늘</b>':idx<10?'<b style=\'color: orange\'>D+1</b>':'D+2'"></td>
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
import store from '@/store/store'

const emit = defineEmits(['onPatientSelected'])
const uStore = useStore()
let model = reactive({
  list: []
})

onMounted(() => {
  uStore.dispatch('patnt/getSevrPatntListWidget').then((result) => {
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
    await uStore.dispatch('bedasgn/getTimeline', patient)
    await uStore.dispatch('bedasgn/getDSInfo', patient)
  } else {
    uStore.commit('bedasgn/setTimeline', null)
    uStore.commit('bedasgn/setDisesInfo', null)
  }
  await uStore.dispatch('patnt/getBasicInfo', patient)
  let ptDetail = uStore.getters['patnt/getPtDetail']
  emit('onPatientSelected', ptDetail)
}
function handler() {
  store.commit('user/setSelectedTabIdx', 2)
  store.dispatch('patnt/getPatntList', {sever: true})
  store.dispatch('admin/getSido')
}
/*
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
*/
</script>

<style scoped>
.red {
  color: red;
}

article > template {
  display: flex;
}

article > template > a {
  margin-left: auto;
  margin-right: 0;
  margin-bottom: 5px;
}

h4 { margin-left: 12px; }
h4 > i { margin-right: 9px; }
</style>
