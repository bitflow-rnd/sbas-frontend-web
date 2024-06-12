<template>
  <div class='modal show' id="kt_modal_recommend" tabindex='-1' aria-hidden='true' >
    <!--begin::Modal dialog-->
    <div class='modal-dialog mw-1500px modal-dialog-centered'>
      <!--begin::Modal content-->
      <div class='modal-content'>
        <!--begin::Modal header-->
        <div class='modal-header px-10 py-5 d-flex justify-content-between'>
          <!--begin::Modal title-->
          <h2>추천병원 선택</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class='btn btn-sm btn-icon btn-active-color-primary' @click='closeModal'>
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class='svg-icon svg-icon-1'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect
                  opacity='0.5'
                  x='6'
                  y='17.3137'
                  width='16'
                  height='2'
                  rx='1'
                  transform='rotate(-45 6 17.3137)'
                  fill='currentColor'
                ></rect>
                <rect
                  x='7.41422'
                  y='6'
                  width='16'
                  height='2'
                  rx='1'
                  transform='rotate(45 7.41422 6)'
                  fill='currentColor'
                ></rect>
              </svg>
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->

          <article class='floating-request-box'>
            <div class='img-box'>
              <img src='/img/common/ic_request_patient.svg' alt='이미지' />
            </div>
            <div class='txt-box'>
<!--              {{ model.bdDetail.ptNm }}-->
<!--              <span class='text-gray-600 fw-normal'-->
<!--              >({{ props.bdDetail.gndr }} / {{ props.bdDetail.age }}세 / {{ getAddr }} {{ props.ptDetail.mpno ? ('/ ' + getTelno) : '' }})</span-->
<!--              >-->
            </div>
<!--            <div class='txt-box' v-if='props.bdDetail.tagList && props.bdDetail.tagList.length>0'>-->
<!--              <span class='text-primary'>{{ getTag }}</span>-->
<!--            </div>-->
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
<!--                          <label @click='onClickDeparture'>-->
<!--                            <input type='radio' name='permission' v-model='this.departureSelect.model'-->
<!--                                   value='location' /><i></i>-->
<!--                            <span style='width: 100px' class='txt'>위치지정</span>-->
<!--                          </label>-->
<!--                          <div class='tbox full'>-->
<!--                            <input-->
<!--                              style='margin-left: 1px'-->
<!--                              type='text'-->
<!--                              v-model='newPt.bascAddr'-->
<!--                              readonly-->
<!--                            />-->
<!--                          </div>-->
<!--                          <button :disabled='!this.departureSelect.isLocation'-->
<!--                                  @click='openAddressFinder'-->
<!--                                  class='btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1'-->
<!--                                  style='min-width: 80px'-->
<!--                          >주소검색-->
<!--                          </button-->
<!--                          >-->
                        </div>
                      </div>
                      <div class='item-cell-box rcmd'>
<!--                        <div class='rbox'>-->
<!--                          <label @click='onClickDeparture'>-->
<!--                            <input type='radio' name='permission' v-model='this.departureSelect.model'-->
<!--                                   value='sido' /><i></i>-->
<!--                            <span style='width: 100px' class='txt'>시/도지정</span>-->
<!--                            <div class='sbox w-175px'>-->
<!--                              <select :disabled='!this.departureSelect.isSido'>-->
<!--                                <option value='' id='null'>시/도 전체</option>-->
<!--                                <option v-for='(item,idx) in cmSido' :key='idx'-->
<!--                                        :value="item['cdId']">{{ item['cdNm'] }}-->
<!--                                </option>-->
<!--                              </select>-->
<!--                            </div>-->
<!--                          </label>-->
<!--                        </div>-->
                      </div>
                    </td>
                    <th>병상유형</th>
                    <td>
                      <div class='item-cell-box'>
                        <div class='cbox'>
                          <label>
                            <input type='checkbox' name='permission' /><i></i>
                            <span class='txt'>음압격리</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='permission' /><i></i>
                            <span class='txt'>중증일반격리</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='permission' /><i></i>
                            <span class='txt'>소아음압격리</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='permission' /><i></i>
                            <span class='txt'>소아일반격리</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='permission' /><i></i>
                            <span class='txt'>소아</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='permission' /><i></i>
                            <span class='txt'>일반</span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th>중등도</th>
                    <td>
                      <div class='item-cell-box'>
                        <div class='cbox'>
                          <label>
                            <input type='checkbox' name='permission' /><i></i>
                            <span class='txt'>중환자</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='permission' /><i></i>
                            <span class='txt'>중증</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='permission' /><i></i>
                            <span class='txt'>준증증</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='permission' /><i></i>
                            <span class='txt'>중등증</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='permission' /><i></i>
                            <span class='txt'>일반</span>
                          </label>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>환자유형</th>
                    <td colspan='3'>
                      <div class='d-flex'>
                        <div class='item-cell-box ptnt-type full d-flex flex-grow-1'>
                          <div class='cbox'>
                            <label>
                              <input type='checkbox' name='permission' /><i></i>
                              <span class='txt'>임산부</span>
                            </label>
                          </div>

                          <div class='cbox ms-4'>
                            <label>
                              <input type='checkbox' name='permission' /><i></i>
                              <span class='txt'>투석</span>
                            </label>
                          </div>

                          <div class='cbox ms-4'>
                            <label>
                              <input type='checkbox' name='permission' /><i></i>
                              <span class='txt'>수술</span>
                            </label>
                          </div>

                          <div class='cbox ms-4'>
                            <label>
                              <input type='checkbox' name='permission' /><i></i>
                              <span class='txt'>신생아</span>
                            </label>
                          </div>

                          <div class='cbox ms-4'>
                            <label>
                              <input type='checkbox' name='permission' /><i></i>
                              <span class='txt'>소아</span>
                            </label>
                          </div>

                          <div class='cbox ms-4'>
                            <label>
                              <input type='checkbox' name='permission' /><i></i>
                              <span class='txt'>인공호흡기</span>
                            </label>
                          </div>

                          <div class='cbox ms-4'>
                            <label>
                              <input type='checkbox' name='permission' /><i></i>
                              <span class='txt'>적극적치료요청</span>
                            </label>
                          </div>

                        </div>
                        <div class='tbox w-400px with-btn ms-5'>
                          <input type='text' placeholder='의료기관명 검색' />

                          <a href='javascript:void(0)' class='input-btn'>
                            <i class='fa-solid fa-magnifying-glass'></i>
                          </a>
                        </div>
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <th>장비정보</th>
                    <td colspan='3'>
                      <div class='item-cell-box'>
                        <div class='cbox'>
                          <label>
                            <input type='checkbox' name='type3' /><i></i>
                            <span class='txt'>인공호흡기 일반</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='type3' /><i></i>
                            <span class='txt'>인공호흡기 조산아</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='type3' /><i></i>
                            <span class='txt'>인큐베이터</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='type3' /><i></i>
                            <span class='txt'>ECMO</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='type3' /><i></i>
                            <span class='txt'>중심체온조절유도기</span>
                          </label>
                        </div>
                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='type3' /><i></i>
                            <span class='txt'>고압산소치료기</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='type3' /><i></i>
                            <span class='txt'>CT</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='type3' /><i></i>
                            <span class='txt'>MRI</span>
                          </label>
                        </div>

                        <div class='cbox ms-4'>
                          <label>
                            <input type='checkbox' name='type3' /><i></i>
                            <span class='txt'>혈관촬영기</span>
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

              <div class='option-box'>

                <!--
                <div class="option-item-box d-flex align-items-center">
                  <div class="option-label-box pe-4">목록표시</div>

                  <article class="toggle-list-layout2">
                    <div class="toggle-list">
                      <label>
                        <input type="radio" name="toggle1" checked="" />
                        <span class="txt">10행</span>
                      </label>

                      <label>
                        <input type="radio" name="toggle1" />
                        <span class="txt">25행</span>
                      </label>

                      <label>
                        <input type="radio" name="toggle1" />
                        <span class="txt">50행</span>
                      </label>
                    </div>
                  </article>
                </div>
                -->

                <div class='option-item-box d-flex align-items-center ms-8'>
                  <div class='option-label-box pe-4'>목록표시</div>

                  <article class='toggle-list-layout2'>
                    <div class='toggle-list'>
                      <label>
                        <input type='radio' name='toggle' checked='' />
                        <span class='txt'>거리순</span>
                      </label>

                      <label>
                        <input type='radio' name='toggle' />
                        <span class='txt'>추천순</span>
                      </label>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            <div v-if='model.rcmdHp.count !== 0' class='table-body-box'>
              <div class='table-box with-scroll small'>
                <table>
                  <colgroup>
                    <col style='width: 50px' />
                    <col style='width: 70px' />
                    <col style='width: 200px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 60px' />
                    <col style='width: 90px' />
                  </colgroup>
                  <thead>
                  <tr class='small'>
                    <th>
                      <div class='cbox'>
                        <label> <input type='checkbox' class='all-chk' /><i></i> </label>
                      </div>
                    </th>
                    <th>이미지</th>
                    <th>병원명</th>
                    <th>[감염] 중환자</th>
                    <th>[감염] 중증</th>
                    <th>[감염] 준중증</th>
                    <th>[감염] 중등증</th>
                    <th>일반</th>
                    <th>분만</th>
                    <th>투석</th>
                    <th>소아</th>
                    <th>인공 호흡</th>
                    <th>인공호흡 (조산아)</th>
                    <th>인큐 베이터</th>
                    <th>ECMO</th>
                    <th>중심체온 조절유도기</th>
                    <th>고압 산소</th>
                    <th>CT</th>
                    <th>MRI</th>
                    <th>혈관 촬영기</th>
                    <th>거리</th>
                  </tr>
                  </thead>

                  <tbody>
                    <tr v-for='(item, i) in model.rcmdHp.items' :key='i'>
                      <td>
                        <div class='cbox d-flex justify-content-center'>
                          <label>
<!--                            <input-->
<!--                              v-model='aprv.reqHospIdList'-->
<!--                              type='checkbox'-->
<!--                              :value='item.hospId'-->
<!--                            /><i></i>-->
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
                      <td><span class='text-black'>{{ item.gnbdIcu + item.npidIcu }}</span></td>
                      <td><span class='text-black'>{{ item.gnbdSvrt }}</span></td>
                      <td><span class='text-black'>{{ item.gnbdSmsv }}</span></td>
                      <td><span class='text-black'>{{ item.gnbdModr }}</span></td>
                      <td><span class='text-black'>13</span></td>
                      <td><span class='text-black'>13</span></td>
                      <td><span class='text-black'>13</span></td>
                      <td><span class='text-black'>0</span></td>

                      <td><span :class="{'text-danger': item.ventilator === 'N'}" class='text-primary'>{{ item.ventilator
                        }}</span></td>
                      <td><span :class="{'text-danger': item.ventilatorPreemie === 'N'}"
                                class='text-primary'>{{ item.ventilatorPreemie }}</span></td>
                      <td><span :class="{'text-danger': item.incubator === 'N'}" class='text-primary'>{{ item.incubator
                        }}</span></td>
                      <td><span :class="{'text-danger': item.ecmo === 'N'}" class='text-primary'>{{ item.ecmo }}</span>
                      </td>
                      <td><span :class="{'text-danger': item.bodyTemperatureControl === 'N'}"
                                class='text-primary'>{{ item.bodyTemperatureControl }}</span></td>
                      <td><span :class="{'text-danger': item.highPressureOxygen === 'N'}"
                                class='text-primary'>{{ item.highPressureOxygen }}</span></td>
                      <td><span :class="{'text-danger': item.ct === 'N'}" class='text-primary'>{{ item.ct }}</span></td>
                      <td><span :class="{'text-danger': item.mri === 'N'}" class='text-primary'>{{ item.mri }}</span></td>
                      <td><span :class="{'text-danger': item.bloodVesselImaging === 'N'}" class='text-primary'>{{ item.bloodVesselImaging }}</span>
                      </td>
                      <td>{{ item.distance }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <div class='row mt-10'>
            <div
              class='col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start'
            ></div>
            <div class='col-12 d-flex align-items-center justify-content-center'>
              <div class='dataTables_paginate paging_simple_numbers'>
                <ul class='pagination'>
                  <li class='paginate_button page-item previous disabled'>
                    <a
                      href='#'
                      aria-controls='kt_table_users'
                      data-dt-idx='0'
                      tabindex='0'
                      class='page-link'
                    ><i class='previous'></i
                    ></a>
                  </li>
                  <li class='paginate_button page-item active'>
                    <a
                      href='#'
                      aria-controls='kt_table_users'
                      data-dt-idx='1'
                      tabindex='0'
                      class='page-link'
                    >1</a
                    >
                  </li>
                  <li class='paginate_button page-item'>
                    <a
                      href='#'
                      aria-controls='kt_table_users'
                      data-dt-idx='2'
                      tabindex='0'
                      class='page-link'
                    >2</a
                    >
                  </li>
                  <li class='paginate_button page-item'>
                    <a
                      href='#'
                      aria-controls='kt_table_users'
                      data-dt-idx='3'
                      tabindex='0'
                      class='page-link'
                    >3</a
                    >
                  </li>
                  <li class='paginate_button page-item next'>
                    <a
                      href='#'
                      aria-controls='kt_table_users'
                      data-dt-idx='4'
                      tabindex='0'
                      class='page-link'
                    ><i class='next'></i
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <article class='modal-menu-layout1 pt-10'>
            <div class='modal-menu-list'>
              <!--								<a href="javascript:requestTabMove(2)" class="modal-menu-btn menu-primary">다음</a>-->
              <router-link
                to=''
                @click='closeModal'
                class='modal-menu-btn menu-cancel'
              >이전
              </router-link>
              <router-link to='' @click='openPopup' class='modal-menu-btn menu-primary'
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
</template>
<script setup>
import { defineProps, defineEmits, reactive, onMounted } from 'vue'
import { getTelno } from '@/util/ui'
import { API_PROD } from '@/util/constantURL'
import axios from 'axios'
import { axios_cstm } from '@/util/axios_cstm'

const props = defineProps({
  bdDetail: {
    type: Object,
    required: true
  },
})
const emits = defineEmits(['closeModal'])

const model = reactive({
  bdDetail: props.bdDetail,
  rcmdHp: null,
  // departureSelect: {
  //   model: 'location',
  //   isLocation: true,
  //   isSido: false
  // },
  // newPt: {
  //   bascAddr: ''
  // },
  // cmSido: [],
  // aprv: {
  //   reqHospIdList: []
  // }
})

onMounted(() => {
  console.log(props.bdDetail)
  getRcmdHpList()
})

function closeModal() {
  emits('closeModal')
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
  border: 1px solid gray;
  filter: grayscale(1);
  border-radius: 6px;
}

.ptnt-type {
  padding-top: 8px;
}

.address {
  margin-top: 0px !important;
}

</style>