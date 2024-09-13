<template>
  <div class='modal show' id='kt_modal_dispatch' tabindex='-1' aria-hidden='true' style=''>
    <!--begin::Modal dialog-->
    <div class='modal-dialog mw-1500px modal-dialog-centered'>
      <!--begin::Modal content-->
      <div class='modal-content'>
        <!--begin::Modal header-->
        <div class='modal-header px-10 py-5 d-flex justify-content-between'>
          <h2>이송·배차 처리</h2>
          <CloseButton @close='closeModal' />

          <article class='floating-request-box'>
            <div class='img-box'>
              <img src='/img/common/ic_request_patient.svg' alt='이미지' />
            </div>
            <div class='txt-box'>
              {{ bdDetail.ptNm }}
              <span class='text-gray-600 fw-normal'
              >({{ bdDetail.gndr }} / {{ bdDetail.age }}세 /
                {{ ptDetail.dstr1CdNm + ' ' + ptDetail.dstr2CdNm }} /
                {{ getTelno(ptDetail.mpno) }})</span
              >
            </div>
            <div class='txt-box'>
              <span class='text-primary'>{{ getTag(bdDetail.tagList) }}</span>
            </div>
          </article>
        </div>
        <!--end::Modal header-->

        <!--begin::Modal body-->
        <div class='modal-body scroll-y py-10 px-10'>
          <article class='table-form-layout1'>
            <div class='form-head-box'></div>
            <div class='form-body-box'>
              <div v-if='model.fireStatnList' class='table-box'>
                <table v-if='model.fireStatnList.length!==0'>
                  <colgroup>
                    <col style='width: 168px' />
                    <col style='width: 46px' />
                    <col style='width: auto' />
                    <col style='width: 168px' />
                    <col style='width: auto' />
                  </colgroup>
                  <tbody>
                  <tr>
                    <th>출발지</th>
                    <td colspan='4'>
                      <div class='item-cell-box'>
                        <div class='sbox w-175px'>
                          <select>
                            <option>{{ model.cmSido.find(item => item.cdId === '27')['cdNm'] }}</option>
                          </select>
                        </div>

                        <div class='sbox w-175px ms-3'>
                          <select v-model='model.selectedInst' @change='getFiremen' >
                            <option value='null'>구급대 선택</option>
                            <option v-for='(item, i) in model.fireStatnList' :key='i' :value='item'>
                              {{ item.instNm }}
                            </option>
<!--                            <option value='직접입력'>직접입력</option>-->
                          </select>
                        </div>

<!--                        <div class='tbox w-175px ms-3'>-->
<!--                          <input-->
<!--                            v-if="model.selectedInst === '직접입력'"-->
<!--                            v-model='model.trsfInfo.ambsNm'-->
<!--                            placeholder='구급대명 직접 입력'-->
<!--                          />-->
<!--                          <input v-else placeholder='구급대명 직접 입력' readonly />-->
<!--                        </div>-->
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th rowspan='3'>탑승대원 및 의료진</th>
                    <td colspan='3'>
                      <div class='item-cell-box'>
                        <div v-if='model.firemenList' class='sbox' style='width: 128px'>
                          <select v-model='model.selectedFm1' @change='fillFiremen(model.selectedFm1, 1)' >
                            <option value='null'>구급대원 선택</option>
                            <option
                              v-for='(item, i) in model.firemenList'
                              :key='i' :value='item'
                            >
                              {{ item.crewNm }}
                            </option>
                            <option value='직접입력'>직접입력</option>
                          </select>
                        </div>

                        <div class='tbox w-125px ms-3'>
                          <input
                            v-if="model.selectedFm1 === '직접입력'"
                            v-model='model.trsfInfo.crew1Pstn'
                            placeholder='직급 입력'
                          />
                          <input v-else v-model='model.trsfInfo.crew1Pstn'
                                 placeholder='직급 입력' readonly />
                        </div>
                        <div class='tbox w-125px ms-3'>
                          <input
                            v-if="model.selectedFm1 === '직접입력'"
                            v-model='model.trsfInfo.crew1Nm'
                            placeholder=' 이름 입력'
                          />
                          <input v-else v-model='model.trsfInfo.crew1Nm'
                                 placeholder=' 이름 입력' readonly />
                        </div>
                        <div class='tbox w-175px ms-3'>
                          <input
                            v-if="model.selectedFm1 === '직접입력'"
                            v-model='model.trsfInfo.crew1Telno'
                            maxlength='11'
                            placeholder=' 전화번호 입력'
                          />
                          <input v-else v-model='model.trsfInfo.crew1Telno'
                                 placeholder=' 전화번호 입력' readonly />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td colspan='3'>
                      <div class='item-cell-box'>
                        <div v-if='model.firemenList' class='sbox' style='width: 128px'>
                          <select v-model='model.selectedFm2' @change='fillFiremen(model.selectedFm2, 2)' >
                            <option value='null'>구급대원 선택</option>
                            <option
                              v-for='(item, i) in model.firemenList'
                              :key='i' :value='item'
                            >
                              {{ item.crewNm }}
                            </option>
                            <option value='직접입력'>직접입력</option>
                          </select>
                        </div>

                        <div class='tbox w-125px ms-3'>
                          <input
                            v-if="model.selectedFm2 === '직접입력'"
                            v-model='model.trsfInfo.crew2Pstn'
                            placeholder='직급 입력'
                          />
                          <input v-else v-model='model.trsfInfo.crew2Pstn'
                                 placeholder='직급 입력' readonly />
                        </div>
                        <div class='tbox w-125px ms-3'>
                          <input
                            v-if="model.selectedFm2 === '직접입력'"
                            v-model='model.trsfInfo.crew2Nm'
                            placeholder=' 이름 입력'
                          />
                          <input v-else v-model='model.trsfInfo.crew2Nm'
                                 placeholder=' 이름 입력' readonly />
                        </div>
                        <div class='tbox w-175px ms-3'>
                          <input
                            v-if="model.selectedFm2 === '직접입력'"
                            v-model='model.trsfInfo.crew2Telno'
                            maxlength='11'
                            placeholder=' 전화번호 입력'
                          />
                          <input v-else v-model='model.trsfInfo.crew2Telno'
                                 placeholder=' 전화번호 입력' readonly />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td colspan='3'>
                      <div class='item-cell-box'>
                        <div v-if='model.firemenList' class='sbox' style='width: 128px'>
                          <select v-model='model.selectedFm3' @change='fillFiremen(model.selectedFm3, 3)' >
                            <option value='null'>구급대원 선택</option>
                            <option
                              v-for='(item, i) in model.firemenList'
                              :key='i' :value='item'
                            >
                              {{ item.crewNm }}
                            </option>
                            <option value='직접입력'>직접입력</option>
                          </select>
                        </div>

                        <div class='tbox w-125px ms-3'>
                          <input
                            v-if="model.selectedFm3 === '직접입력'"
                            v-model='model.trsfInfo.crew3Pstn'
                            placeholder='직급 입력'
                          />
                          <input v-else v-model='model.trsfInfo.crew3Pstn'
                                 placeholder='직급 입력' readonly />
                        </div>
                        <div class='tbox w-125px ms-3'>
                          <input
                            v-if="model.selectedFm3 === '직접입력'"
                            v-model='model.trsfInfo.crew3Nm'
                            placeholder=' 이름 입력'
                          />
                          <input v-else v-model='model.trsfInfo.crew3Nm'
                                 placeholder=' 이름 입력' readonly />
                        </div>
                        <div class='tbox w-175px ms-3'>
                          <input
                            v-if="model.selectedFm3 === '직접입력'"
                            v-model='model.trsfInfo.crew3Telno'
                            maxlength='11'
                            placeholder=' 전화번호 입력'
                          />
                          <input v-else v-model='model.trsfInfo.crew3Telno'
                                 placeholder=' 전화번호 입력' readonly />
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>대표 연락처</th>
                    <td colspan='2'>
                      <article class='toggle-list-layout2'>
                        <div class='toggle-list'>
                          <label>
                            <input
                              v-model='model.trsfInfo.chfTelno'
                              :value='model.crew1Telno'
                              type='radio'
                            />
                            <span class='txt'>대원#1</span>
                          </label>

                          <label v-show='model.trsfInfo.crew2Nm'>
                            <input
                              v-model='model.trsfInfo.chfTelno'
                              :value='model.crew2Telno'
                              type='radio'
                            />
                            <span class='txt'>대원#2</span>
                          </label>

                          <label v-show='model.trsfInfo.crew3Nm'>
                            <input
                              v-model='model.trsfInfo.chfTelno'
                              :value='model.crew3Telno'
                              type='radio'
                            />
                            <span class='txt'>대원#3</span>
                          </label>
                        </div>
                      </article>
                    </td>
                    <th>배차정보</th>
                    <td>
                      <div class='item-cell-box full'>
                        <div class='tbox'>
                          <input
                            v-model='model.trsfInfo.vecno'
                            type='text'
                            placeholder='차량번호 입력'
                          />
                        </div>

<!--                        <div class='ms-3 d-flex'>-->
<!--                          <div class='px-3 py-2 text-white bg-primary rounded-4' role='button'-->
<!--                               @click="model.trsfInfo.vecno='54노1234'">54노1234-->
<!--                          </div>-->
<!--                          <div class='px-3 py-2 text-white bg-primary rounded-4 ms-3' role='button'-->
<!--                               @click="model.trsfInfo.vecno='129하8864'">129하8864-->
<!--                          </div>-->
<!--                        </div>-->
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>전달 메시지</th>
                    <td colspan='4'>
                      <div class='item-cell-box full'>
                        <div class='textbox full'>
                            <textarea
                              maxlength='500'
                              placeholder='메시지 입력'
                              style='height: 120px'
                              v-model='model.trsfInfo.msg'
                            ></textarea>
                          <div class='limit-box'>
                              <span id='textarea1'>{{ model.trsfInfo.msg.length }}</span
                              >/500자
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class='modal-menu-layout1 pt-10'>
            <div class='modal-menu-list'>
              <a class='modal-menu-btn menu-cancel' @click='closeModal' >이전</a>
              <a class='modal-menu-btn menu-primary' @click='openAlert' >이송처리 완료</a>
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>

  <!-- 이송처리 확인 -->
  <SbasAlert :is-alert='model.isAlert' :err-msg='model.errMsg' :cnc-btn='model.cncBtn'
             @confirm-alert='cfmTrsf' @alert-close='closeAlert' />

  <!-- 이송처리 완료 -->
  <SbasAlert :is-alert='model.confirmAlert' :err-msg='model.errMsg'
             @confirm-alert='closeModal' />

</template>

<script setup>
import { defineProps, defineEmits, reactive, onMounted } from 'vue'
import CloseButton from '@/components/common/CloseButton.vue'
import { getTag, getTelno } from '@/util/ui'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'
import SbasAlert from '@/components/common/SbasAlert.vue'
import { useStore } from 'vuex'

const props = defineProps({
  bdDetail: Object,
  ptDetail: Object,
})
const emits = defineEmits(['closeModal'])
const store = useStore()

const model = reactive({
  cmSido: store.getters['admin/getCmSido'],
  fireStatnList: [],
  firemenList: [],
  selectedInst: null,
  trsfInfo: {
    ptId: props.bdDetail.ptId,
    bdasSeq: props.bdDetail.bdasSeq,
    instId: '',
    ambsNm: '',
    crew1Id: null,
    crew1Pstn: null,
    crew1Nm: null,
    crew1Telno: null,
    crew2Id: null,
    crew2Pstn: null,
    crew2Nm: null,
    crew2Telno: null,
    crew3Id: null,
    crew3Pstn: null,
    crew3Nm: null,
    crew3Telno: null,
    chfTelno: 1,
    vecno: null,
    msg: '',
  },
  selectedFm1: null,
  selectedFm2: null,
  selectedFm3: null,
  crew1Telno: 1,
  crew2Telno: 2,
  crew3Telno: 3,
  isAlert: false,
  errMsg: '',
  cncBtn: false,
  confirmAlert: false,
  showErrorMsg: false,
})

onMounted(() => {
  loadFireStatnList()
})

function loadFireStatnList() {
  const url = `${API_PROD}/api/v1/public/organ/codes`
  const data = { dstr1Cd: '27', instTypeCd: 'ORGN0002' }
  axios_cstm()
    .get(url, { params: data })
    .then((response) => {
      if (response.data.code === '00') {
        console.log(response.data.result)
        model.fireStatnList = response.data.result.items
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function getFiremen() {
  console.log(model.selectedInst)
  const url = `${API_PROD}/api/v1/private/organ/firemen`
  const data = { instId: model.selectedInst.instId }
  axios_cstm()
    .get(url, { params: data })
    .then((response) => {
      if (response.data.code === '00') {
        console.log(response.data.result)
        model.firemenList = response.data.result.items
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function cfmTrsf() {
  const url = `${API_PROD}/api/v1/private/bedasgn/confirmtransf`
  model.trsfInfo.instId = model.selectedInst.instId
  model.trsfInfo.ambsNm = model.selectedInst.instNm
  const data = model.trsfInfo
  axios_cstm().post(url, data)
    .then((response) => {
      if (response.data.code === '00') {
        model.confirmAlert = true
        model.isAlert = false
        model.errMsg = '이송처리가 완료되었습니다.'
        model.cncBtn = false
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function openAlert() {
  if (model.trsfInfo.chfTelno === 1) {
    model.trsfInfo.chfTelno = model.trsfInfo.crew1Telno
  } else if (model.trsfInfo.chfTelno === 2) {
    model.trsfInfo.chfTelno = model.trsfInfo.crew2Telno
  } else if (model.trsfInfo.chfTelno === 3) {
    model.trsfInfo.chfTelno = model.trsfInfo.crew3Telno
  }

  model.isAlert = true
  model.errMsg = '이송처리 하시겠습니까?'
  model.cncBtn = true
}

function closeAlert() {
  model.isAlert = false
}

function fillFiremen(data, idx) {
  model.trsfInfo[`crew${idx}Id`] = data.crewId
  model.trsfInfo[`crew${idx}Pstn`] = data.pstn
  model.trsfInfo[`crew${idx}Nm`] = data.crewNm
  model.trsfInfo[`crew${idx}Telno`] = data.telno
}

function closeModal() {
  emits("closeModal")
}

</script>

<style scoped>
.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.list-table-hoverable tr {
  cursor: pointer;
}

.list-table-hoverable tr:hover td {
  background-color: #74afeb22;
}

</style>