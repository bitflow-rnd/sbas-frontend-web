<template>
  <div class="modal show" id="kt_modal_medinst_view" tabindex="-1" aria-hidden="false">
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <h2>감염환자 수용시설 정보 입력/수정</h2>

          <close-button @close="emits('closeEditMedi')" />

          <article class="floating-organ-box">
            <div class="img-box">
              <img src="/img/common/ic_lnb_organ.svg" alt="이미지" />
            </div>
            <div class="txt-box">{{ props.medinstDetail.hospBasicInfo.dutyName }}</div>
          </article>

        </div>

        <div class="modal-body scroll-y py-10 px-10">
          <article class="table-form-layout1">
            <div class="form-head-box"></div>
            <div class="tabs-box" style="">
              <article class="table-form-layout1">
                <div class="form-head-box"></div>
                <div class="form-body-box">
                  <div class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 100px" />
                        <col style="width: auto" />
                        <col style="width: auto" />
                      </colgroup>
                      <thead>
                      <tr>
                        <th class='text-center'>보유 여부</th>
                        <th class='text-center'>시설</th>
                        <th class='text-center'>수용 가능 인원</th>
                      </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td class='cbox d-flex justify-content-center'>
                          <label>
                            <input class='editMedi' type='checkbox' id='childBirthYn'
                                   :checked='model.modMedInst.childBirthYn'
                                   v-model='model.modMedInst.childBirthYn' /><i></i>
                          </label>
                        </td>
                        <td class='text-center'>
                          <label for='childBirthYn' class='fs-4' role='button'>감염병 전용 분만 시설</label>
                        </td>
                        <td><input class='fs-4 px-5' type='number' v-show='model.modMedInst.childBirthYn'
                                   v-model='model.modMedInst.childBirthMed'></td>
                      </tr>
                      <tr>
                        <td class='cbox d-flex justify-content-center'>
                          <label>
                            <input class='editMedi' type='checkbox' id='dialysisYn'
                                   :checked='model.modMedInst.dialysisYn'
                                   v-model='model.modMedInst.dialysisYn'><i></i>
                          </label>
                        </td>
                        <td class='text-center'>
                          <label for='dialysisYn' class='fs-4' role='button'>감염병 전용 투석 시설</label>
                        </td>
                        <td><input class='fs-4 px-5' type='number' v-show='model.modMedInst.dialysisYn'
                                   v-model='model.modMedInst.dialysisMed'></td>
                      </tr>
                      <tr>
                        <td class='cbox d-flex justify-content-center'>
                          <label>
                            <input class='editMedi' type='checkbox' id='childYn'
                                   :checked='model.modMedInst.childYn'
                                   v-model='model.modMedInst.childYn'><i></i>
                          </label>
                        </td>
                        <td class='text-center'>
                          <label for='childYn' class='fs-4' role='button'>감염병 전용 소아 시설</label>
                        </td>
                        <td><input class='fs-4 px-5' type='number' v-show='model.modMedInst.childYn'
                                   v-model='model.modMedInst.childMed'></td>
                      </tr>
                      <tr>
                        <td class='cbox d-flex justify-content-center'>
                          <label>
                            <input class='editMedi' type='checkbox' id='nursingHospitalYn'
                                   :checked='model.modMedInst.nursingHospitalYn'
                                   v-model='model.modMedInst.nursingHospitalYn'><i></i>
                          </label>
                        </td>
                        <td class='text-center'>
                          <label for='nursingHospitalYn' class='fs-4' role='button'>감염병 전용 요양병원 시설</label>
                        </td>
                        <td><input class='fs-4 px-5' type='number' v-show='model.modMedInst.nursingHospitalYn'
                                   v-model='model.modMedInst.nursingHospitalMed'></td>
                      </tr>
                      <tr>
                        <td class='cbox d-flex justify-content-center'>
                          <label>
                            <input class='editMedi' type='checkbox' id='mentalPatientYn'
                                   :checked='model.modMedInst.mentalPatientYn'
                                   v-model='model.modMedInst.mentalPatientYn'><i></i>
                          </label>
                        </td>
                        <td class='text-center'>
                          <label for='mentalPatientYn' class='fs-4' role='button'>감염병 전용 정신질환자 시설</label>
                        </td>
                        <td><input class='fs-4 px-5' type='number' v-show='model.modMedInst.mentalPatientYn'
                                   v-model='model.modMedInst.mentalPatientMed'></td>
                      </tr>
                      <tr>
                        <td class='cbox d-flex justify-content-center'>
                          <label>
                            <input class='editMedi' type='checkbox' id='negativePressureRoomYn'
                                   :checked='model.modMedInst.negativePressureRoomYn'
                                   v-model='model.modMedInst.negativePressureRoomYn'><i></i>
                          </label>
                        </td>
                        <td class='text-center'>
                          <label for='negativePressureRoomYn' class='fs-4' role='button'>감염병 전용 음압 수술실</label>
                        </td>

                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>
            </div>
          </article>

          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <a @click="emits('closeEditMedi')" class="modal-menu-btn menu-primary">취소</a>
              <a @click='alertOpen' class="modal-menu-btn menu-primary">수정</a>
            </div>
          </article>

          <SbasAlert :is-alert='model.isAlert' :err-msg='model.errMsg' :cnc-btn='false'
                     @confirm-alert='confirmAlert' />

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, reactive, onMounted } from 'vue'
import CloseButton from '@/components/common/CloseButton.vue'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'
import SbasAlert from '@/components/common/SbasAlert.vue'

onMounted(() => {
  getMedInstEtc()
})

const props = defineProps({
  medinstDetail: Object,
  hpId: null,
})

const emits = defineEmits(['closeEditMedi'])

const model = reactive({
  modMedInst: {
    hospId: null,
    childBirthYn: false,
    childBirthMed: 0,
    dialysisYn: false,
    dialysisMed: 0,
    nursingHospitalYn: false,
    nursingHospitalMed: 0,
    mentalPatientYn: false,
    mentalPatientMed: 0,
    childYn: false,
    childMed: 0,
    negativePressureRoomYn: false,
  },
  isAlert: false,
  errMsg: '',
})

function confirmAlert() {
  model.isAlert = false
  emits('closeEditMedi')
}

function alertOpen() {
  editMedInstEtc()
  model.isAlert = true
  model.errMsg = '수정되었습니다.'
}

function editMedInstEtc() {
  const request = model.modMedInst
  if (request.childBirthYn === false) {
    request.childBirthMed = 0
  }
  if (request.dialysisYn === false) {
    request.dialysisMed = 0
  }
  if (request.nursingHospitalYn === false) {
    request.nursingHospitalMed = 0
  }
  if (request.mentalPatientYn === false) {
    request.mentalPatientMed = 0
  }
  if (request.childYn === false) {
    request.childMed = 0
  }
  request.hospId = props.hpId
  const url = `${API_PROD}/api/v1/private/organ/mod-medinstinfo`
  axios_cstm().post(url, request)
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function getMedInstEtc() {
  const hospId = props.hpId
  const url = `${API_PROD}/api/v1/private/organ/medinstinfo/${hospId}`
  axios_cstm().get(url)
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
        if (data.result === null) {
          return
        }
        model.modMedInst = data.result
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

</script>

<style scoped>

.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.modal-dialog {
  margin-top: 50px;
  margin-bottom: 50px;
}

.editMedi {
  margin-right: 7px;
  padding-left: 3px;
}

</style>