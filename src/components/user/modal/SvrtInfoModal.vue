<template>
  <!--환자등록/수정 -->
  <div class="modal show" tabindex="-1" aria-hidden="true" style="">
    <!--begin::Modal dialog-->
    <div class="modal-dialog col-lg-3 modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>중증 관찰 환자 정보</h2>
          <div class="btn btn-sm btn-icon btn-active-color-primary" @click="closeModal()" >
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  opacity="0.5"
                  x="6"
                  y="17.3137"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(-45 6 17.3137)"
                  fill="currentColor"
                ></rect>
                <rect
                  x="7.41422"
                  y="6"
                  width="16"
                  height="2"
                  rx="1"
                  transform="rotate(45 7.41422 6)"
                  fill="currentColor"
                ></rect>
              </svg>
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
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
                    <col style="width: 50px" />
                    <col style="width: 75px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 50px" />
                    <col style="width: 70px" />
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
                      <td><span class="text-black">감염내과</span></td>
                      <td><span class="text-black">106서병동</span></td>
                      <td><span class="text-black">10602</span></td>
                      <td><span class="text-black">담당의</span></td>
                      <td><span class="text-black">'20.04.30</span></td>
                      <td><span class="text-black number">{{ item['bun'] }}</span></td>
                      <td><span class="text-black number">{{ item['cre'] }}</span></td>
                      <td><span class="text-black number">{{ item['hem'] }}</span></td>
                      <td><span class="text-black number">{{ item['ldh'] }}</span></td>
                      <td><span class="text-black number">{{ item['lym'] }}</span></td>
                      <td><span class="text-black number">{{ item['neu'] }}</span></td>
                      <td><span class="text-black number">{{ item['pla'] }}</span></td>
                      <td><span class="text-black number">{{ item['pot'] }}</span></td>
                      <td><span class="text-black number">{{ item['sod'] }}</span></td>
                      <td><span class="text-black number">{{ item['wbc'] }}</span></td>
                      <td><span class="text-black number">{{ item['crp'] }}</span></td>
                      <td><span class="text-black number">{{ item['bdtp'] }}</span></td>
                      <td><span class="text-black number">{{ item['resp'] }}</span></td>
                      <td><span class="text-black number">{{ item['hr'] }}</span></td>
                      <td><span class="text-black number">{{ item['sbp'] }}</span></td>
                      <td><span class="text-black number">{{ item['dbp'] }}</span></td>
                      <td><span class="text-black number">{{ item['spo2'] }}</span></td>
                      <td><span class="text-black">{{ item['oxygenApply'] }}</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <data-pagination
            @change="changePage"
            :display-rows-count="model.displayRowsCount"
            :data-length="20"
          ></data-pagination>

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
import DataPagination from '@/components/user/cpnt/DataPagination.vue'
import { getTag } from '@/util/ui'
import { axios_cstm } from '@/util/axios_cstm'
import { API_PROD } from '@/util/constantURL'

const props = defineProps({
  existPt: Object,
})
const emits = defineEmits(['closeModal'])
const store = useStore()

onMounted(() => {
  console.log(props.existPt)
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
  const url = `${API_PROD}/api/v1/private/severity/infos/${props.existPt.ptId}`
  return new Promise(() => {
    axios_cstm().get(url)
      .then((response) => {
        const data = response.data
        if (data.code === '00') {
          console.log(data)
          model.svrtInfoList = data.result
        }
      })
      .catch((e) => {
        console.log(e)
      })
  })
}

function changePage(page) {
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

.table-box td {
  max-width: 65px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>
