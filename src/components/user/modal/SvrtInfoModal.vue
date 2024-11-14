<template>
  <!--환자등록/수정 -->
  <div class="modal show" tabindex="-1" style="">
    <!--begin::Modal dialog-->
    <div class="modal-dialog col-lg-3 modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>중증 관찰 환자 정보</h2>
          <CloseButton @close="closeModal" />
          <article class="floating-request-box">
            <div class="img-box">
              <img src="/img/common/ic_request_patient.svg" alt="이미지" />
            </div>
            <div class="txt-box">
              {{ props.existPt.ptNm }}
              <span class="text-gray-600 fw-normal">
                ({{ props.existPt.gndr }} / {{ props.existPt.age }}세 / {{ props.existPt.dstr1CdNm }} {{ props.existPt.dstr2CdNm }})
              </span>
            </div>
            <div class="txt-box" v-if="props.existPt.undrDsesCdNm.length > 0">
              <span class="text-primary">{{ getTag(props.existPt.undrDsesCdNm) }}</span>
            </div>
          </article>
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="table-list-layout1">
            <div class="table-body-box">
              <div class="table-box with-scroll small">
                <table>
                  <colgroup>
                    <col style="width: 90px" />
                    <col style="width: 90px" />
                    <col style="width: 60px" />
                    <col style="width: 75px" />
                    <col style="width: 70px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 60px" />
                    <col style="width: 150px" />
                  </colgroup>
                  <thead>
                    <tr class="small">
                      <th>진료과</th>
                      <th>병동</th>
                      <th>병실</th>
                      <th>담당의</th>
                      <th>측정 날짜</th>
                      <th>BUN</th>
                      <th>CRE</th>
                      <th>HEM</th>
                      <th>LDH</th>
                      <th>LYM</th>
                      <th>NEU</th>
                      <th>PLA</th>
                      <th>POT</th>
                      <th>SOD</th>
                      <th>WBC</th>
                      <th>CRP</th>
                      <th>BDTP</th>
                      <th>RESP</th>
                      <th>HR</th>
                      <th>SBP</th>
                      <th>DBP</th>
                      <th>SPO2</th>
                      <th>Oxygen apply</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr v-for="(item, i) in model.svrtInfoList" :key="i">
                      <td><span class="text-black">{{ item['deptNm'] }}</span></td>
                      <td><span class="text-black">{{ item['wardNm'] }}</span></td>
                      <td><span class="text-black">{{ item['roomNm'] }}</span></td>
                      <td><span class="text-black">{{ item['spclNm'] }}</span></td>
                      <td><span class="text-black">{{ item.id.msreDt }}</span></td>
                      <td><span class="text-black number">{{ item['bun'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['cre'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['hem'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['ldh'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['lym'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['neu'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['pla'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['pot'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['sod'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['wbc'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['crp'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['bdtp'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['resp'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['hr'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['sbp'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['dbp'] ?? '-' }}</span></td>
                      <td><span class="text-black number">{{ item['spo2'] ?? '-' }}</span></td>
                      <td><span class="text-black">{{ item['oxygenApply'] ?? '-' }}</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <data-pagination
            @change="changePage"
            :display-rows-count="model.displayRowsCount"
            :data-length="model.svrtInfoList.length"
          ></data-pagination>

          <div class='severity-chart'>
            <svrt-chart-unit-no-title :pt-id="props.existPt.ptId" :rgst-seq='props.rgstSeq' />
          </div>

          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <router-link
                to=""
                @click="closeModal"
                class="modal-menu-btn menu-cancel"
              >이전
              </router-link>
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineEmits, defineProps, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'
import DataPagination from '@/components/user/unit/DataPagination.vue'
import { getTag } from '@/util/ui'
import { axios_cstm } from '@/util/axios_cstm'
import { API_PROD } from '@/util/constantURL'
import SvrtChartUnitNoTitle from '@/components/user/unit/SvrtChartUnitNoTitle.vue'
import CloseButton from '@/components/common/CloseButton.vue'

const props = defineProps({
  existPt: Object,
  rgstSeq: null,
})
const emits = defineEmits(['closeModal'])
const store = useStore()

onMounted(() => {
  getSvrtInfo()
})

const model = reactive({
  displayRowsCount: 15,
  svrtInfo: null,
  svrtInfoList: [],
})

function closeModal() {
  emits('closeModal')
}

function getSvrtInfo() {
  const url = `${API_PROD}/api/v1/private/severity/infos/${props.existPt.ptId}/${props.rgstSeq}`
  return new Promise(() => {
    axios_cstm().get(url)
      .then((response) => {
        const data = response.data
        if (data.code === '00') {
          model.svrtInfoList = data.result
        }
      })
      .catch((e) => {
        console.log(e)
      })
  })
}

function changePage(page) {
  // TODO
  console.log(page)
}

</script>

<style scoped>
.modal {
  --bs-modal-width: 98%;
  display: block;
}

.modal.show {
  background-color: rgba(0,0,0,0.4);
  display: block;
}

article.detail-layout1 .detail-wrap .detail-head-box .head-box .head-txt-box {
  line-height: 28px;
}

table {
  min-width: 1300px;
}

.severity-chart {
  width: 100%;
  height: 350px;
}

</style>
