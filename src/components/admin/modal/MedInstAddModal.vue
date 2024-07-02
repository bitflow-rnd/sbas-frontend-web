<template>
  <div class='tabs-box' style=''>
    <article class='table-form-layout1'>
      <div class='form-head-box'></div>
      <div class='form-body-box'>
        <div class='table-box'>
          <table>
            <colgroup>
              <col style='width: 168px' />
              <col style='width: auto' />
              <col style='width: 168px' />
              <col style='width: auto' />
            </colgroup>
            <tbody>

              <tr>
                <th>감염병 전용<br>분만 시설</th>
                <td>
                  <i v-if='model.data.childBirthYn === true'
                     class='fa-regular fa-circle-check checked'
                  ></i>
                  <i class='un-checked' v-else>-</i>
                </td>

                <th>수용 가능 인원</th>
                <td class='number' v-if='model.data.childBirthYn === true'>
                  {{ model.data.childBirthMed ?? 0 }}
                </td>
                <td class='number' v-else-if='model.data.childBirthYn === false'>0</td>
              </tr>

              <tr>
                <th>감염병 전용<br>투석 시설</th>
                <td>
                  <i v-if='model.data.dialysisYn === true'
                     class='fa-regular fa-circle-check'
                  ></i>
                  <i class='un-checked' v-else>-</i>
                </td>
                <th>수용 가능 인원</th>
                <td class='number' v-if='model.data.dialysisYn === true'>
                  {{ model.data.dialysisMed ?? 0 }}
                </td>
                <td class='number' v-else-if='model.data.dialysisYn === false'>0</td>
              </tr>

              <tr>
                <th>감염병 전용<br>소아 시설</th>
                <td>
                  <i v-if='model.data.childYn === true'
                     class='fa-regular fa-circle-check'
                  ></i>
                  <i class='un-checked' v-else>-</i>
                </td>
                <th>수용 가능 인원</th>
                <td class='number' v-if='model.data.childYn === true'>
                  {{ model.data.childMed ?? 0 }}
                </td>
                <td class='number' v-else-if='model.data.childYn === false'>0</td>
              </tr>

              <tr>
                <th>감염병 전용<br>요양병원 시설</th>
                <td>
                  <i v-if='model.data.nursingHospitalYn === true'
                     class='fa-regular fa-circle-check'
                  ></i>
                  <i class='un-checked' v-else>-</i>
                </td>
                <th>수용 가능 인원</th>
                <td class='number' v-if='model.data.nursingHospitalYn === true'>
                  {{ model.data.nursingHospitalMed ?? 0 }}
                </td>
                <td class='number' v-else-if='model.data.nursingHospitalYn === false'>0</td>
              </tr>

              <tr>
                <th>감염병 전용<br>정신질환자 시설</th>
                <td>
                  <i v-if='model.data.mentalPatientYn === true'
                     class='fa-regular fa-circle-check checked'
                  ></i>
                  <i class='un-checked' v-else>-</i>
                </td>
                <th>수용 가능 인원</th>
                <td class='number' v-if='model.data.mentalPatientYn === true'>
                  {{ model.data.mentalPatientMed ?? 0 }}
                </td>
                <td class='number' v-else-if='model.data.mentalPatientYn === false'>0</td>
              </tr>

              <tr>
                <th>감염병 전용<br>음압 수술실</th>
                <td>
                  <i v-if='model.data.negativePressureRoomYn === true'
                     class='fa-regular fa-circle-check checked'
                  ></i>
                  <i v-else>-</i>
                </td>
              </tr>

            </tbody>
          </table>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { defineProps, onMounted, reactive } from 'vue'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'

onMounted(() => {
  getData()
})

const props = defineProps({
  hpId: String
})

const model = reactive({
  data: Object
})

function getData() {
  const hpId = props.hpId
  const url = `${API_PROD}/api/v1/private/organ/medinstinfo/${hpId}`
  axios_cstm().get(url)
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
        model.data = data.result
      }
    })
    .catch((e) => {
      console.log(e)
    })
}

</script>

<style scoped>

.checked {
  color: #74afeb;
  font-size: 22px;
}

.un-checked {
  font-size: 22px;
}

.number {
  font-size: 18px;
}

</style>