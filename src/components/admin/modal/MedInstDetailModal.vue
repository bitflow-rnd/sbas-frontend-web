<template>
  <div class='tabs-box' v-show='tabidx === 1' style=''>
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

              <col style='width: 168px' />
              <col style='width: auto' />
            </colgroup>
            <tbody>
            <tr>
              <th>응급실전화</th>
              <td>{{ medinstDetail.hospDetailInfo.dutytel3 ?? '-' }}</td>

              <th>당직의</th>
              <td>{{ medinstDetail.hospDetailInfo.hvdnm ?? '-' }}</td>

              <th>당직의 직통연락처</th>
              <td>{{ medinstDetail.hospDetailInfo.hv1 ?? '-' }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class='table-box'>
          <table>
            <colgroup>
              <col style='width: 168px' />
              <col style='width: auto' />
              <col style='width: 168px' />
              <col style='width: auto' />

              <col style='width: 168px' />
              <col style='width: auto' />
              <col style='width: 168px' />
              <col style='width: auto' />
            </colgroup>
            <tbody>
            <tr>
              <th>구급차</th>
              <td>
                <i v-if="medinstDetail.hospDetailInfo.hvamyn === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>CT</th>
              <td>
                <i v-if="medinstDetail.hospDetailInfo.hvctayn === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>MRI</th>
              <td>
                <i v-if="medinstDetail.hospDetailInfo.hvmriayn === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>조영촬영기</th>
              <td>
                <i v-if="medinstDetail.hospDetailInfo.hvangioayn === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>
            </tr>

            <tr>
              <th>인공호흡기가용</th>
              <td>
                <i v-if="medinstDetail.hospDetailInfo.hvventiayn === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>신경과입원실</th>
              <td>
                <i v-if="medinstDetail.hospDetailInfo.hv5 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>약물중환자</th>
              <td>
                <i v-if="medinstDetail.hospDetailInfo.hv7 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>VENTI(소아)</th>
              <td>
                <i v-if="medinstDetail.hospDetailInfo.hv10 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>
            </tr>

            <tr>
              <th>인큐베이터(보육기)</th>
              <td>
                <i v-if="medinstDetail.hospDetailInfo.hv11 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>

              <th>분만실</th>
              <td colspan='5'>
                <i v-if="medinstDetail.hospDetailInfo.hv42 === 'Y'"
                   class='fa-regular fa-circle-check'
                   style='color: #74afeb; font-size: 20px'
                ></i>
                <i v-else>-</i>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class='table-box'>
          <table>
            <colgroup>
              <col style='width: 168px' />
              <col style='width: auto' />
              <col style='width: 168px' />
              <col style='width: auto' />

              <col style='width: 168px' />
              <col style='width: auto' />
              <col style='width: 168px' />
              <col style='width: auto' />
            </colgroup>
            <tbody>
            <tr>
              <th>응급실</th>
              <td>{{ medinstDetail.hospDetailInfo.hvec ?? '-' }}</td>

              <th>수술실</th>
              <td>{{ medinstDetail.hospDetailInfo.hvoc ?? '-' }}</td>

              <th>신경중환자</th>
              <td>{{ medinstDetail.hospDetailInfo.hvcc ?? '-' }}</td>

              <th>신생중환자</th>
              <td>{{ medinstDetail.hospDetailInfo.hvncc ?? '-' }}</td>
            </tr>

            <tr>
              <th>흉부중환자</th>
              <td>{{ medinstDetail.hospDetailInfo.hvccc ?? '-' }}</td>

              <th>일반중환자</th>
              <td>{{ medinstDetail.hospDetailInfo.hvicc ?? '-' }}</td>

              <th>입원실</th>
              <td>{{ medinstDetail.hospDetailInfo.hvgc ?? '-' }}</td>

              <th>내과중환자실</th>
              <td>{{ medinstDetail.hospDetailInfo.hv2 ?? '-' }}</td>
            </tr>

            <tr>
              <th>외과중환자실</th>
              <td>{{ medinstDetail.hospDetailInfo.hv3 ?? '-' }}</td>

              <th>외과입원실</th>
              <td>{{ medinstDetail.hospDetailInfo.hv4 ?? '-' }}</td>

              <th>신경외과중환자실</th>
              <td>{{ medinstDetail.hospDetailInfo.hv6 ?? '-' }}</td>

              <th>화상중환자</th>
              <td>{{ medinstDetail.hospDetailInfo.hv8 ?? '-' }}</td>
            </tr>

            <tr>
              <th>외상중환자</th>
              <td colspan='5'>{{ medinstDetail.hospDetailInfo.hv9 ?? '-' }}</td>
            </tr>
            </tbody>
          </table>
        </div>

        <div class='table-box'>
          <table>
            <colgroup>
              <col style='width: 168px' />
              <col style='width: auto' />
              <col style='width: 168px' />
              <col style='width: auto' />

              <col style='width: 168px' />
              <col style='width: auto' />
            </colgroup>
            <tbody>
            <tr>
              <th>격리진료구역 음압격리 병상</th>
              <td>
                {{ medinstDetail.hospDetailInfo.hv13 ?? '-' }}
              </td>

              <th>격리진료구역 일반격리 병상</th>
              <td>
                {{ medinstDetail.hospDetailInfo.hv14 ?? '-' }}
              </td>

              <th>소아 음압격리병상</th>
              <td>
                {{ medinstDetail.hospDetailInfo.hv15 ?? '-' }}
              </td>
            </tr>

            <tr>
              <th>소아 일반격리병상</th>
              <td>
                {{ medinstDetail.hospDetailInfo.hv16 ?? '-' }}
              </td>

              <th>응급전용 중환자실 음압 격리병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv17 ?? '-' }}</td>

              <th>응급전용 중환자실 일반 격리병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv18 ?? '-' }}</td>
            </tr>

            <tr>
              <th>응급전용 입원실 음압 격리병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv19 ?? '-' }}</td>

              <th>응급전용 입원실 일반격리 병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv21 ?? '-' }}</td>

              <th>감염병 전담병상 중환자실</th>
              <td>{{ medinstDetail.hospDetailInfo.hv22 ?? '-' }}</td>
            </tr>

            <tr>
              <th>감염병 전담병상 중환자실 내 음압격리병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv23 ?? '-' }}</td>

              <th>감염병 전담병상 중증 일반병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv24 ?? '-' }}</td>

              <th>감염병 전담병상 준-중증 일반병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv25 ?? '-' }}</td>
            </tr>

            <tr>
              <th>감염병 전담병상 중등증 일반병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv26 ?? '-' }}</td>

              <th>코호트 격리구역 병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv27 ?? '-' }}</td>

              <th>응급실 소아 병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv28 ?? '-' }}</td>
            </tr>

            <tr>
              <th>응급실 음압 격리 병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv29 ?? '-' }}</td>

              <th>응급실 일반 격리 병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv30 ?? '-' }}</td>

              <th>응급전용 중환자실</th>
              <td>{{ medinstDetail.hospDetailInfo.hv31 ?? '-' }}</td>
            </tr>

            <tr>
              <th>소아 중환자실</th>
              <td>{{ medinstDetail.hospDetailInfo.hv32 ?? '-' }}</td>

              <th>소아응급전용 중환자실 병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv33 ?? '-' }}</td>

              <th>심장내과 중환자실</th>
              <td>{{ medinstDetail.hospDetailInfo.hv34 ?? '-' }}</td>
            </tr>

            <tr>
              <th>중환자실 내 음압 격리 병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv35 ?? '-' }}</td>

              <th>응급전용 입원실</th>
              <td>{{ medinstDetail.hospDetailInfo.hv36 ?? '-' }}</td>

              <th>소아응급전용 입원 병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv37 ?? '-' }}</td>
            </tr>

            <tr>
              <th>외상전용 입원실</th>
              <td>{{ medinstDetail.hospDetailInfo.hv38 ?? '-' }}</td>

              <th>외상전용 수술실</th>
              <td>{{ medinstDetail.hospDetailInfo.hv39 ?? '-' }}</td>

              <th>정신과 폐쇄 병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv40 ?? '-' }}</td>
            </tr>

            <tr>
              <th>음압 격리 병상</th>
              <td>{{ medinstDetail.hospDetailInfo.hv41 ?? '-' }}</td>

              <th>화상전용 처치실</th>
              <td colspan='3'>{{ medinstDetail.hospDetailInfo.hv43 ?? '-' }}</td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  medinstDetail: Object,
  tabidx: Number
})

</script>