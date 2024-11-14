<template>
  <div class='modal show' id="kt_modal_recommend" tabindex='-1' >
    <!--begin::Modal dialog-->
    <div class='modal-dialog mw-1500px modal-dialog-centered'>
      <!--begin::Modal content-->
      <div class='modal-content'>
        <!--begin::Modal header-->
        <div class='modal-header px-10 py-5 d-flex justify-content-between'>
          <!--begin::Modal title-->
          <h2>추천병원 선택</h2>
          <!--end::Modal title-->

          <CloseButton @close='closeModal'/>

          <article class='floating-request-box'>
            <div class='img-box'>
              <img src='/img/common/ic_request_patient.svg' alt='이미지' />
            </div>
            <div class='txt-box'>
              {{ props.bdDetail.ptNm }}
              <span class='text-gray-600 fw-normal'
              >({{ props.bdDetail.gndr }} / {{ props.bdDetail.age }}세 {{ props.bdDetail.mpno ? ('/ ' + getTelno(props.bdDetail.mpno)) : '' }})</span
              >
            </div>
            <div class='txt-box' v-if='props.bdDetail.tagList && props.bdDetail.tagList.length>0'>
              <span class='text-primary'>{{ getTag(props.bdDetail.tagList) }}</span>
            </div>
          </article>
        </div>
        <!--begin::Modal header-->

        <!--begin::Modal body-->
        <div v-if='model.rcmdHp !== null' class='modal-body scroll-y py-10 px-10'>
          <article class='table-form-layout1 pb-4'>
            <div class='form-head-box'></div>

            <div class='form-body-box'>
              <div class='table-box'>
                <table>
                  <colgroup>
                    <col style='width: 90px' />
                    <col style='width: 400px' />
                    <col style='width: 90px' />
                    <col style='width: auto' />
                  </colgroup>
                  <tbody>
                  <tr>
                    <th rowspan='2'>출발지</th>
                    <td rowspan='2'>
                      <div class='item-cell-box rcmd address'>
                        <div class='rbox'>
                          <label @click="onClickDeparture('location')">
                            <input type='radio' name='permission' v-model='model.departureSelect.model'
                                   value='location' /><i></i>
                            <span style='width: 100px' class='txt'>위치지정</span>
                          </label>
                          <div class='tbox full'>
                            <input style='margin-left: 1px' type='text' readonly />
                          </div>
                          <button :disabled='!model.departureSelect.isLocation'
                                  @click='openAddressFinder'
                                  class='btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1'
                                  style='min-width: 80px'
                          >주소검색
                          </button>
                        </div>
                      </div>
                      <div class='item-cell-box rcmd pt-2'>
                        <div class='rbox'>
                          <label @click="onClickDeparture('sido')">
                            <input type='radio' name='permission' v-model='model.departureSelect.model'
                                   value='sido' checked /><i></i>
                            <span style='width: 100px' class='txt'>시/도지정</span>
                            <div class='sbox w-175px'>
                              <select v-model='model.searchParams.dstr1Cd'
                                      :disabled='!model.departureSelect.isSido'>
                                <option value='' id='null'>시/도 전체</option>
                                <option v-for='(item,idx) in model.cmSido' :key='idx'
                                        :value="item['cdId']">{{ item['cdNm'] }}
                                </option>
                              </select>
                            </div>
                          </label>
                        </div>
                      </div>
                    </td>
                    <th>병상유형</th>
                    <td>
                      <div class='item-cell-box'>
                        <div class="cbox" :class="{ 'ms-4': idx > 0 }" v-for="(item, idx) in model.bedTypeList" :key="idx" >
                          <label>
                            <input type='checkbox' name='permission' :value='item.value' v-model='model.searchParams.reqBedTypeCd'
                                   @change='searchList' /><i></i>
                            <span class='txt'>{{ item.name }}</span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>중등도</th>
                    <td>
                      <div class='item-cell-box'>

                        <div class='cbox' :class="{'ms-4': idx > 0}" v-for='(item, idx) in model.severityTypeList' :key='idx'>
                          <label>
                            <input type='checkbox' name='permission' :value='item.value' v-model='model.searchParams.svrtTypeCd'
                                   @change='searchList' /><i></i>
                            <span class='txt'>{{ item.name }}</span>
                          </label>
                        </div>

                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>환자유형</th>
                    <td colspan='3'>
                      <div class='d-flex'>
                        <div class='item-cell-box ptnt-type me-10'>
                          <div class='cbox' :class="{'ms-4': idx > 0}" v-for='(item, idx) in model.ptTypeList' :key='idx'>
                            <label>
                              <input type='checkbox' name='permission' :value='item.value' v-model='model.searchParams.ptTypeCd'
                                     @change='searchList' /><i></i>
                              <span class='txt'>{{ item.name }}</span>
                            </label>
                          </div>
                        </div>
                        <div class='tbox w-300px with-btn ms-10'>
                          <input
                            type='text' placeholder='의료기관명 검색'
                            v-model='model.searchParams.dutyName'
                            @keyup.enter='searchList'
                            @blur='searchList'
                          />

                          <a @click='searchList' class='input-btn'>
                            <i class='fa-solid fa-magnifying-glass'></i>
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>장비정보</th>
                    <td colspan='3'>
                      <div class="item-cell-box">
                        <div class="cbox" :class='{"ms-4": idx > 0}' v-for='(item, idx) in model.equipmentList' :key='idx'>
                          <label>
                            <input type="checkbox" :value='item.value' v-model='model.searchParams.equipment'
                                   @change='searchList' /><i></i>
                            <span class="txt">{{ item.name }}</span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class='table-list-layout1'>
            <div class='table-head-box pb-4'>
              <div class='head-box'>
                <div class='head-txt-box'>
                  검색결과
                  <span class='rounded-pill bg-primary text-white px-2 ms-2'>{{
                      model.rcmdHp.count
                    }}</span>
                </div>
              </div>

<!--              <div class='option-box'>-->
<!--                <div class='option-item-box d-flex align-items-center ms-8'>-->
<!--                  <div class='option-label-box pe-4'>목록표시</div>-->

<!--                  <article class='toggle-list-layout2'>-->
<!--                    <div class='toggle-list'>-->
<!--                      <label>-->
<!--                        <input type='radio' name='toggle' checked='' />-->
<!--                        <span class='txt'>거리순</span>-->
<!--                      </label>-->

<!--                      <label>-->
<!--                        <input type='radio' name='toggle' />-->
<!--                        <span class='txt'>추천순</span>-->
<!--                      </label>-->
<!--                    </div>-->
<!--                  </article>-->
<!--                </div>-->
<!--              </div>-->
            </div>

            <div v-if='model.rcmdHp.count !== 0' class='table-body-box'>
              <div class='table-box with-scroll small hosp-list'>
                <table>
                  <colgroup>
                    <col style='width: 50px' />
                    <col style='width: 70px' />
                    <col style='width: 200px' /> <!-- 병원명 -->

                    <col style='width: 70px' />
                    <col style='width: 70px' />
                    <col style='width: 70px' />
                    <col style='width: 75px' />
                    <col style='width: 105px' />
                    <col style='width: 70px' />

                    <col style='width: 60px' />
                    <col style='width: 80px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />

                    <col style='width: 60px' />
                    <col style='width: 80px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 95px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 70px' />
                    <col style='width: 90px' />
                  </colgroup>
                  <thead>
                  <tr class='small'>
                    <th rowspan='2'>
                      <div class='cbox'>
                        <label> <input type='checkbox' class='all-chk' /><i></i> </label>
                      </div>
                    </th>
                    <th rowspan='2'>이미지</th>
                    <th rowspan='2'>병원명</th>
                    <th colspan='6'>감염병 전용 수용시설</th>
                    <th rowspan='2'>[감염]<br>중환자</th>
                    <th rowspan='2'>[감염]<br>중환자실내<br>음압격리</th>
                    <th rowspan='2'>[감염]<br>중증</th>
                    <th rowspan='2'>[감염]<br>준중증</th>
                    <th rowspan='2'>[감염]<br>중등증</th>
                    <th rowspan='2'>인공<br>호흡</th>
                    <th rowspan='2'>인공호흡<br>(조산아)</th>
                    <th rowspan='2'>인큐<br>베이터</th>
                    <th rowspan='2'>ECMO</th>
                    <th rowspan='2'>중심체온<br>조절유도기</th>
                    <th rowspan='2'>고압<br>산소</th>
                    <th rowspan='2'>CT</th>
                    <th rowspan='2'>MRI</th>
                    <th rowspan='2'>혈관<br>촬영기</th>
                    <th rowspan='2'>거리</th>
                  </tr>
                  <tr class='small'>
                    <th>분만<br>(수용가능인원)</th>
                    <th>투석<br>(수용가능인원)</th>
                    <th>소아<br>(수용가능인원)</th>
                    <th>요양병원<br>시설<br>(수용가능인원)</th>
                    <th>정신질환자<br>시설<br>(수용가능인원)</th>
                    <th>음압<br>수술실</th>
                  </tr>
                  </thead>

                  <tbody>
                    <tr v-for='(item, i) in model.rcmdHp.items' :key='i'>
                      <td>
                        <div class='cbox d-flex justify-content-center'>
                          <label>
                            <input
                              v-model='model.aprv.reqHospIdList'
                              type='checkbox'
                              :value='item.hospId'
                            /><i></i>
                          </label>
                        </div>
                      </td>
                      <td>
                        <div class='img-box w-50px h-50px m-auto'>
                          <img
                            src='/img/common/img_profile_dummy.png'
                            alt='이미지'
                            class='w-100 h-100 thum-hspt'
                          />
                        </div>
                      </td>
                      <td class='text-start'>
                        <div class='d-flex align-items-center'>
                          <div class='text-start text-black' style=''>
                            {{ item.hospNm }}<br><span class='text-secondary fs-12px'>{{ item.dutyDivNam }}</span>
                          </div>
                        </div>
                        <!--                      <div class="text-gray-600 fs-12px pt-2">-->
                        <!--                        {{ getTag(item.tagList) }}-->
                        <!--                      </div>-->
                      </td>
                      <td>
                        <span class='text-primary' :class="{ 'text-danger' : item['facilityStatus']['childBirthYn'] === false }">
                        {{ item['facilityStatus']['childBirthYn'] ? '있음' : '없음' }}</span><br>
                        <span class='text-black'>({{ item['medicalTeamCount']['childBirthMed'] ?? 0 }})</span>
                      </td>
                      <td><span class='text-primary' :class="{ 'text-danger' : item['facilityStatus']['dialysisYn'] === false }">
                        {{ item['facilityStatus']['dialysisYn'] ? '있음' : '없음' }}</span><br>
                        <span class='text-black'>({{ item['medicalTeamCount']['dialysisMed'] ?? 0 }})</span>
                      </td>
                      <td><span class='text-primary' :class="{ 'text-danger' : item['facilityStatus']['childYn'] === false }">
                        {{ item['facilityStatus']['childYn'] ? '있음' : '없음' }}</span><br>
                        <span class='text-black'>({{ item['medicalTeamCount']['childMed'] ?? 0 }})</span>
                      </td>
                      <td><span class='text-primary' :class="{ 'text-danger' : item['facilityStatus']['mentalPatientYn'] === false }">
                        {{ item['facilityStatus']['mentalPatientYn'] ? '있음' : '없음' }}</span><br>
                        <span class='text-black'>({{ item['medicalTeamCount']['mentalPatientMed'] ?? 0 }})</span>
                      </td>
                      <td><span class='text-primary' :class="{ 'text-danger' : item['facilityStatus']['nursingHospitalYn'] === false }">
                        {{ item['facilityStatus']['nursingHospitalYn'] ? '있음' : '없음' }}</span><br>
                        <span class='text-black'>({{ item['medicalTeamCount']['nursingHospitalMed'] ?? 0 }})</span>
                      </td>
                      <td><span class='text-primary' :class="{ 'text-danger' : item['facilityStatus']['negativePressureRoomYn'] === false }">
                        {{ item['facilityStatus']['negativePressureRoomYn'] ? '있음' : '없음' }}</span>
                      </td>

                      <td><span class='text-black'>{{ item['gnbdIcu'] }}</span></td>
                      <td><span class='text-black'>{{ item['npidIcu'] }}</span></td>
                      <td><span class='text-black'>{{ item['gnbdSvrt'] }}</span></td>
                      <td><span class='text-black'>{{ item['gnbdSmsv'] }}</span></td>
                      <td><span class='text-black'>{{ item['gnbdModr'] }}</span></td>

                      <td><span :class="{'text-danger': item['ventilator'] === 'N'}" class='text-primary'>
                        {{ item['ventilator'] }}</span></td>
                      <td><span :class="{'text-danger': item['ventilatorPreemie'] === 'N'}" class='text-primary'>
                        {{ item['ventilatorPreemie'] }}</span></td>
                      <td><span :class="{'text-danger': item['incubator'] === 'N'}" class='text-primary'>
                        {{ item['incubator'] }}</span></td>
                      <td><span :class="{'text-danger': item['ecmo'] === 'N'}" class='text-primary'>{{ item['ecmo'] }}</span>
                      </td>
                      <td><span :class="{'text-danger': item['bodyTemperatureControl'] === 'N'}"
                                class='text-primary'>{{ item['bodyTemperatureControl'] }}</span></td>
                      <td><span :class="{'text-danger': item['highPressureOxygen'] === 'N'}"
                                class='text-primary'>{{ item['highPressureOxygen'] }}</span></td>
                      <td><span :class="{'text-danger': item['ct'] === 'N'}" class='text-primary'>{{ item['ct'] }}</span></td>
                      <td><span :class="{'text-danger': item['mri'] === 'N'}" class='text-primary'>{{ item['mri'] }}</span></td>
                      <td><span :class="{'text-danger': item['bloodVesselImaging'] === 'N'}" class='text-primary'>{{ item['bloodVesselImaging'] }}</span>
                      </td>
                      <td>{{ item.distance }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <div class='row mt-10'>
            <data-pagination :data-length='model.rcmdHp.count' :data-page-size='model.searchParams.pageSize'
                             :data-page-no='model.searchParams.pageNo' @pageChange='' />
          </div>

          <article class='modal-menu-layout1 pt-10'>
            <div class='modal-menu-list'>
              <router-link
                to=''
                @click='closeModal'
                class='modal-menu-btn menu-cancel'
              >이전
              </router-link>
              <router-link to='' @click='openAprvPopup' class='modal-menu-btn menu-primary'
              >배정요청
              </router-link
              >
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>

  <article v-show="model.showAprv" class="popup popup-assignment-request1" style="">
    <div class="popup-wrapper">
      <div class="popup-contents">
        <div class="popup-head-box py-5 px-10">
          <div class="head-tit-box">병상요청 승인</div>
          <closeButton @close='closeAprvPopup'/>
        </div>

        <div class="popup-body-box py-5 px-10">
          <div>
            <div>
              <div class="textbox">
                <textarea
                  @input="updateCharacterCount"
                  maxlength="500"
                  placeholder="메시지 입력"
                  style="height: 120px"
                  v-model="model.aprv.msg"
                ></textarea>
                <div class="limit-box">
                  <span id="textarea1">{{ model.characterCount }}</span
                  >/500자
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="popup-foot-box py-5 px-10">
          <article class="modal-menu-layout1">
            <div class="modal-menu-list">
              <router-link to="" @click="aprvBedAsgn" class="modal-menu-btn menu-primary"
              >승인완료
              </router-link>
            </div>
          </article>
        </div>
      </div>
    </div>
  </article>

  <SbasAlert :is-alert='model.isAlert' :err-msg='model.errMsg' :cnc-btn='false'
             @confirm-alert='confirmAlert' />

</template>

<script setup>
import { defineEmits, defineProps, onMounted, reactive } from 'vue'
import { getTag, getTelno, openAddressFinder } from '@/util/ui'
import { API_PROD } from '@/util/constantURL'
import { axios_cstm } from '@/util/axios_cstm'
import { useStore } from 'vuex'
import DataPagination from '@/components/user/unit/DataPagination.vue'
import CloseButton from '@/components/common/CloseButton.vue'
import SbasAlert from '@/components/common/SbasAlert.vue'

const props = defineProps({
  bdDetail: {
    type: Object,
    required: true
  },
})
const emits = defineEmits(['closeModal', 'returnToList'])
const store = useStore()


const model = reactive({
  bdDetail: props.bdDetail,
  rcmdHp: null,
  departureSelect: {
    model: '',
    isLocation: false,
    isSido: false,
  },
  cmSido: null,
  bedTypeList: [
    { name: '코호트격리', value: 'cohtBed' },
    { name: '음압격리', value: 'emrgncyNgtvIsltnBed' },
    { name: '일반격리', value: 'emrgncyNrmlIsltnBed' },
    { name: '소아음압격리', value: 'ngtvIsltnChild' },
    { name: '소아일반격리', value: 'nrmlIsltnChild' },
  ],
  severityTypeList: [
    { name: '중환자실', value: 'gnbdIcu' },
    { name: '중환자실내음압격리', value: 'npidIcu' },
    { name: '중증', value: 'gnbdSvrt' },
    { name: '준중증', value: 'gnbdSmsv' },
    { name: '중등증', value: 'gnbdModr' },
  ],
  ptTypeList: [
    { name: '분만', value: 'childBirthMed' },
    { name: '투석', value: 'dialysisMed' },
    { name: '소아', value: 'childMed' },
    { name: '요양병원', value: 'nursingHospitalMed' },
    { name: '정신질환자', value: 'mentalPatientMed' },
    { name: '음압수술', value: 'negativePressureRoomYn' },
  ],
  showAprv: false,
  aprv: {
    msg: null,
    reqHospIdList: [],
  },
  equipmentList: [
    { name: '인공호흡기', value: 'ventilator' },
    { name: '인공호흡기(조산아)', value: 'ventilatorPreemie' },
    { name: '인큐베이터', value: 'incubator' },
    { name: 'ECMO', value: 'ecmo' },
    { name: '고압산소', value: 'highPressureOxygen' },
    { name: 'CT', value: 'ct' },
    { name: 'MRI', value: 'mri' },
    { name: '혈관촬영기', value: 'bloodVesselImaging' },
    { name: '중심체온조절유도기', value: 'bodyTemperatureControl' },
  ],
  characterCount: 0,
  isAlert: false,
  searchParams: {
    pageNo: 1,
    // sort: 'distance',
    dstr1Cd: '27',
    reqBedTypeCd: [],
    svrtTypeCd: [],
    ptTypeCd: [],
    dutyName: null,
    equipment: [],
  },
})

onMounted(() => {
  console.log(props.bdDetail)
  init()
  getRcmdHpList()
})

function init() {
  store.dispatch('admin/getSido')
  model.cmSido = store.getters['admin/getCmSido']
  model.departureSelect.model = props.bdDetail.bascAddr
  model.departureSelect.isSido = true
}

function getRcmdHpList() {
  const url = `${API_PROD}/api/v1/private/bedasgn/hosp-list/${props.bdDetail.ptId}/${props.bdDetail.bdasSeq}`
  axios_cstm().get(url, {params : {}})
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
        console.log(data.result)
        model.rcmdHp = data.result
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function searchList() {
  console.log(model.searchParams)
  const params = {
    ...model.searchParams,
    reqBedTypeCd: model.searchParams.reqBedTypeCd.length > 0 ? model.searchParams.reqBedTypeCd.join(',') : null,
    svrtTypeCd: model.searchParams.svrtTypeCd.length > 0 ? model.searchParams.svrtTypeCd.join(',') : null,
    ptTypeCd: model.searchParams.ptTypeCd.length > 0 ? model.searchParams.ptTypeCd.join(',') : null,
    equipment: model.searchParams.equipment.length > 0 ? model.searchParams.equipment.join(',') : null,
  }
  const url = `${API_PROD}/api/v1/private/bedasgn/hosp-list/${props.bdDetail.ptId}/${props.bdDetail.bdasSeq}`
  axios_cstm().get(url, {params : params})
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
        console.log(data.result)
        model.rcmdHp = data.result
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function onClickDeparture(type) {
  if (type === 'location') {
    model.departureSelect.isLocation = true;
    model.departureSelect.isSido = false;
  } else if (type === 'sido') {
    model.departureSelect.isLocation = false;
    model.departureSelect.isSido = true;
    model.cmSido = store.getters['admin/getCmSido']
  }
}

function aprvBedAsgn() {
  const url = `${API_PROD}/api/v1/private/bedasgn/reqconfirm`
  const data = {
    ptId: props.bdDetail.ptId,
    bdasSeq: props.bdDetail.bdasSeq,
    aprvYn: 'Y',
    msg: model.aprv.msg,
    reqHospIdList: model.aprv.reqHospIdList,
  }
  console.log('병상승인', data)
  axios_cstm().post(url, data)
    .then((response) => {
      const data = response.data
      if (data.code === '00') {
        emits('returnToList')
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

function updateCharacterCount() {
  const currentMessage = model.aprv.msg
  if (currentMessage === null || currentMessage === '' || currentMessage === undefined) {
    model.characterCount = 0
  } else {
    model.characterCount = currentMessage.length
  }
}

function closeModal() {
  emits('closeModal')
}

function openAprvPopup() {
  if (model.aprv.reqHospIdList.length === 0) {
    model.errMsg = '병원을 선택해주세요.'
    model.isAlert = true
    return
  }
  model.showAprv = true
}

function closeAprvPopup() {
  model.showAprv = false
}

function confirmAlert() {
  model.isAlert = false
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

.thum-hspt {
  border: 1px solid rgb(128, 128, 128);
  filter: grayscale(1);
  border-radius: 6px;
}

.ptnt-type {
  padding-top: 8px;
}

.address {
  margin-top: 0px !important;
}

.hosp-list {
  overflow-x: auto;
}

table {
  min-width: 1600px;
}

</style>