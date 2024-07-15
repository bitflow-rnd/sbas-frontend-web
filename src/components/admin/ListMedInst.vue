<template>
  <!--begin::Main-->
  <div class="app-main flex-column flex-row-fluid" id="kt_app_main">
    <!--begin::Content wrapper-->
    <div class="d-flex flex-column flex-column-fluid">
      <!--begin::Toolbar-->
      <div id="kt_app_toolbar" class="app-toolbar">
        <!--begin::Toolbar wrapper-->
        <div class="app-toolbar-wrapper d-flex flex-stack flex-wrap gap-4 w-100">
          <!--begin::Page title-->
          <div class="page-title d-flex flex-column justify-content-center gap-1 me-3">
            <!--begin::Breadcrumb-->
            <ul class="breadcrumb breadcrumb-separatorless fw-semibold fs-base">
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-700 fw-bold lh-1 mx-n1">
                <router-link to="/dashbd" class="text-hover-primary">
                  <i class="fa-solid fa-house"></i>
                </router-link>
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                <span class="svg-icon svg-icon-4 mx-n1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">
                기관정보 관리
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                <span class="svg-icon svg-icon-4 mx-n1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <!--end::Svg Icon-->
              </li>
              <li class="breadcrumb-item text-gray-500 mx-n1">
                <h1
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0"
                >
                  의료기관 관리
                </h1>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="kt_app_content" class="app-content flex-column-fluid">
        <div class="card">
          <div class="card-header border-0 p-8">
            <article class="table-form-layout1">
              <div class="form-head-box"></div>
              <div v-if="medinstList!== undefined" class="form-body-box">
                <div class="table-form-toggle-box">
                  <router-link to="" class="table-form-toggle-btn" @click="toggleTable">
                    <i class="fa-solid" :class="showTable ? 'fa-angle-up' : 'fa-angle-down'"></i>
                  </router-link>
                </div>

                <div class="table-box with-toggle">
                  <table>
                    <colgroup>
                      <col style="width: 168px" />
                      <col style="width: auto" />
                      <col style="width: 168px" />
                      <col style="width: auto" />
                    </colgroup>
                    <tbody>
                    <tr data-toggle="false">
                      <th>지역</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px" @click="getSido">
                            <select v-model="filterMedinst['dstr1Cd']"
                                    @change="changeDstrCd1()">
                              <option value="" id="null">시/도 전체</option>
                              <option v-for="(item,idx) in cmSido" :key="idx"
                                      :value="item['cdId']">{{ item['cdNm'] }}
                              </option>
                            </select>
                          </div>

                          <div class="sbox w-175px ms-2">
                            <select :disabled="enableSecondAddressPicker" v-model="filterMedinst['dstr2Cd']"
                                    @change="changeDstrCd2()">
                              <option value="" id="null">시/군/구 전체</option>
                              <option v-for="(item,idx) in cmGugun" :key="idx"
                                      :value="item['cdId']">{{ item['cdNm'] }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </td>
                      <td colspan="2">
                        <div class="tbox w-400px with-btn">
                          <input
                            v-model="filterMedinst['text']"
                            type="text"
                            placeholder="의료기관명 또는 ID 입력"
                            @keyup.enter="search"
                            @blur='search'
                          />

                          <router-link to="" @click="search" class="input-btn">
                            <i class="fa-solid fa-magnifying-glass"></i>
                          </router-link>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>기관분류</th>
                      <td colspan="3">
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input type="checkbox" name="state" v-model="this.filterMedinst['dutyDivNam']"
                                       value='권역응급의료센터' @change='search' /><i></i>
                                <span class="txt">권역응급의료센터</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" v-model="this.filterMedinst['dutyDivNam']"
                                       value='지역응급의료센터' @change='search' /><i></i>
                                <span class="txt">지역응급의료센터</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" v-model="this.filterMedinst['dutyDivNam']"
                                       value='지역응급의료기관' @change='search' /><i></i>
                                <span class="txt">지역응급의료기관</span>
                              </label>
                            </div>

<!--                            <div class="cbox ms-4">-->
<!--                              <label>-->
<!--                                <input type="checkbox" name="state" v-model="this.filterMedinst['dutyDivNam']"-->
<!--                                       value='응급의료기관 외의 의료기관(응급의료시설)' @change='search' /><i></i>-->
<!--                                <span class="txt">응급의료시설</span>-->
<!--                              </label>-->
<!--                            </div>-->

                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr v-show="showTable">
                      <th>응급실 격리병상</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="cbox" :class='{"ms-4": idx > 0}' v-for='(item, idx) in this.emrgncyIsltnBedList' :key='idx'>
                            <label>
                              <input type="checkbox" :value='item.value' v-model='this.filterMedinst.emrgncyIsltnBed'/><i></i>
                              <span class="txt">{{ item.name }}</span>
                            </label>
                          </div>
                        </div>
                      </td>

                      <th>감염병 입원병상</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="cbox" :class='{"ms-4": idx > 0}' v-for='(item, idx) in this.infectBedList' :key='idx'>
                            <label>
                              <input type="checkbox" :value='item.value' v-model='this.filterMedinst.infectBed'/><i></i>
                              <span class="txt">{{ item.name }}</span>
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr v-show="showTable">
                      <th>가용장비</th>
                      <td colspan="3">
                        <div class="item-cell-box">
                          <div class="cbox" :class='{"ms-4": idx > 0}' v-for='(item, idx) in this.equipList' :key='idx'>
                            <label>
                              <input type="checkbox" :value='item.value' v-model='this.filterMedinst.equip'/><i></i>
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

            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div v-if='medinstList.items !== undefined' class="card-body p-8">
            <!--begin::Table-->
            <h5 class="d-flex">
              <div class="flex-grow-1 d-flex fs-16px">
                <div>검색결과</div>
                <div class="badge ms-2 rounded-pill bg-primary fs-14px px-2">
                  {{ medinstList['count'] }}
                </div>
              </div>
              <div v-if="medinstList && medinstList.items && medinstList.items.length > 0" class="small fw-lighter fs-6">업데이트 {{ getUpDt(medinstList.items[0].updtDttm) }}</div>
            </h5>

            <article class="table-list-layout1">
              <div class="table-body-box">
                <div v-if="medinstList.items.length === 0" class="table-nodata py-40">
                  <div class="img-box">
                    <img src="/img/common/img_nodata.svg" alt="이미지" />
                  </div>

                  <div class="txt-box pt-10">조회 결과가 없습니다.</div>
                </div>
                <div v-if="medinstList.items.length !== 0" class="table-box with-scroll small">
                  <table class="list-table-hoverable">
                    <colgroup>
                      <col style="width: 190px" />
                      <col style="width: 150px" />
                      <col style="width: 60px" />
                      <col style="width: 60px" />
                      <col style="width: 60px" />
                      <col style="width: 65px" />
                      <col style="width: 65px" />
                      <col style="width: 60px" />
                      <col style="width: 65px" />
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
                      <col style="width: 65px" />
                    </colgroup>
                    <thead>
                    <tr class="small">
                      <th rowspan="2">의료기관명</th>
                      <th rowspan="2">
                        대표전화/<br />
                        응급실
                      </th>
                      <th colspan="5">응급실 격리병상</th>
                      <th colspan="5">감염병 입원병상</th>
                      <th colspan="4">보유장비</th>
                      <th colspan="5">보유장비</th>
                      <th rowspan="2">
                        등록<br />
                        의료진 수
                      </th>
                    </tr>
                    <tr>
                      <th class="px-0">코호트<br />격리</th>
                      <th class="px-0">음압<br />격리</th>
                      <th class="px-0">일반<br />격리</th>
                      <th class="px-0">소아<br />음압격리</th>
                      <th class="px-0">소아<br />일반격리</th>
                      <th class="px-0">중환자실</th>
                      <th class="px-0">중환자실내<br>음압격리</th>
                      <th class="px-0">중증</th>
                      <th class="px-0">준중증</th>
                      <th class="px-0">중등증</th>
                      <th class="px-0">인공<br />호흡기</th>
                      <th class="px-0">인공호흡<br />조산아</th>
                      <th class="px-0">인큐<br />베이터</th>
                      <th class="px-0">ECMO</th>
                      <th class="px-0">고압<br />산소</th>
                      <th class="px-0">CT</th>
                      <th class="px-0">MRI</th>
                      <th class="px-0">혈관<br />촬영기</th>
                      <th class="px-0">
                        중심체온<br>조절유도기
                      </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(item, i) in medinstList.items" :key="i" @click="openMedInstDetail(item)">
                      <td class='d-none'>
                        <i
                          class="fa-regular fa-circle-check"
                          style="color: #74afeb; font-size: 20px"
                        ></i>
                      </td>
                      <td class="text-start" role='button'>
                        <div class="text-start text-black">{{ item.dutyName }}<br> <span class="text-secondary fs-12px">{{ item.dutyDivNam }}</span></div>
                      </td>
                      <td role='button'>
                        {{ item.dutyTel1 }}<br/>{{ item.dutyTel3 }}
                      </td>
                      <td>
                        {{ item.cohtBed }}
                      </td>
                      <td>
                        {{ item.emrgncyNgtvIsltnBed + item.isltnMedAreaNgtvIsltnBed }}
                      </td>
                      <td>
                        {{ item.emrgncyNrmlIsltnBed + item.isltnMedAreaNrmlIsltnBed }}
                      </td>
                      <td>
                        {{ item.ngtvIsltnChild }}
                      </td>
                      <td>
                        {{ item.nrmlIsltnChild }}
                      </td>
                      <td>
                        {{ item.gnbdIcu }}
                      </td>
                      <td>
                        {{ item.npidIcu }}
                      </td>
                      <td>
                        {{ item.gnbdSvrt }}
                      </td>
                      <td>
                        {{ item.gnbdSmsv }}
                      </td>
                      <td>
                        {{ item.gnbdModr }}
                      </td>
                      <td>
                        <i v-if="item.ventilator === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.ventilator === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.ventilatorPreemie === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.ventilatorPreemie === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.incubator === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.incubator === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.ecmo === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.ecmo === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.highPressureOxygen === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.highPressureOxygen === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.ct === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.ct === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.mri === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.mri === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.bloodVesselImaging === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.bloodVesselImaging === 'N'">-</i>
                      </td>
                      <td>
                        <i v-if="item.bodyTemperatureControl === 'Y'"
                           class='fa-regular fa-circle-check'
                           style='color: #74afeb; font-size: 20px'
                        ></i>
                        <i v-else-if="item.bodyTemperatureControl === 'N'">-</i>
                      </td>
                      <td>{{ item.medicalStaffCount ?? '0' }}</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            <data-pagination
              @change="changePage"
              :display-rows-count="displayRowsCount"
              :data-length="medinstList['count']"
            ></data-pagination>
          </div>
        </div>
      </div>

    </div>

    <div
      v-show="showModal"
      class="modal fade"
      id="kt_modal_medinst_view"
      tabindex="-1"
      aria-hidden="false"
      :class="{'show' : showModal}"
    >
      <!--begin::Modal dialog-->
      <div v-if="medinstDetail !== undefined" class="modal-dialog mw-1500px modal-dialog-centered">
        <!--begin::Modal content-->
        <div class="modal-content">
          <!--begin::Modal header-->
          <div class="modal-header px-10 py-5 d-flex justify-content-between">
            <!--begin::Modal title-->
            <h2>의료기관 세부 정보</h2>
            <!--end::Modal title-->

            <!--begin::Close-->
            <CloseButton @close="closeModal" />
            <!--end::Close-->

            <article class="floating-organ-box">
              <div class="img-box">
                <img src="/img/common/ic_lnb_organ.svg" alt="이미지" />
              </div>
              <div class="txt-box">{{ medinstDetail.hospBasicInfo.dutyName }}</div>
            </article>
          </div>

          <!--begin::Modal header-->
          <!--begin::Modal body-->
          <div class="modal-body scroll-y py-10 px-10">
            <article class="tabs-group-layout">
              <div class="tabs-nav-box">
                <router-link
                  to=""
                  @click="tabsMove(0)"
                  :class="{ active: tabidx === 0 }"
                  class="tabs-nav-btn"
                >기본정보
                </router-link
                >
                <router-link
                  to=""
                  @click="tabsMove(1)"
                  :class="{ active: tabidx === 1 }"
                  class="tabs-nav-btn"
                >세부현황
                </router-link
                >
                <router-link
                  to=""
                  @click="openTestModal()"
                  :class="{ active: tabidx === 3 }"
                  class="tabs-nav-btn"
                >감염환자 수용시설 현황</router-link
                >
                <router-link
                  to=""
                  @click="tabsMove(2)"
                  :class="{ active: tabidx === 2 }"
                  class="tabs-nav-btn"
                >병상배정시스템 등록 의료진 <span class="cnt">{{ medinstDetail.hospMedInfoCount }}</span></router-link
                >
              </div>
              <div class='addMediBtn' style='text-align: right;'>
                <a @click='openEditMedi' class="btn btn-sm btn-flex btn-primary align-self-center px-3 ms-2 addMedi">
                  <i class="fa-solid fa-plus"></i> 감염환자 수용시설 정보 입력/수정</a>
              </div>
              <div class="tabs-contents-box" style='padding-top:5px;'>
                <div class="tabs-box-list">
                  <MedInstBasicModal :image-preview='imagePreview' :medinst-detail='medinstDetail' :tabidx='tabidx'
                                :upload-image='uploadImage' />
                  <MedInstDetailModal :medinst-detail='medinstDetail' :tabidx='tabidx' />
                  <MedInstAddModal v-if='tabidx === 3' :hpId='this.hpId'/>

                  <div class="tabs-box" v-show="tabidx === 2" style="">
                    <article class="table-list-layout1">
                      <div class="table-body-box">
                        <div class="table-box with-scroll small">
                          <table>
                            <colgroup>
                              <col style="width: 70px" />
                              <col style="width: 120px" />
                              <col style="width: 70px" />
                              <col style="width: 70px" />
                              <col style="width: 110px" />
                              <col style="width: 110px" />
                              <col style="width: 70px" />
                              <col style="width: 100px" />
                              <col style="width: 100px" />
                              <col style="width: 100px" />
                            </colgroup>
                            <thead>
                            <tr class="small">
                              <th>이미지</th>
                              <th>주 담당지역</th>
                              <th>직급</th>
                              <th>이름</th>
                              <th>담당 환자유형</th>
                              <th>역할</th>
                              <th>세부권한</th>
                              <th>가입일</th>
                              <th>최근접속일</th>
                              <th>사용자상태</th>
                            </tr>
                            </thead>

                            <tbody>
                            <tr v-for='items in medinstDetail.hospMedInfo' v-bind:key='items'>
                              <td>
                                <img src="/img/common/img_profile_default.svg" alt="이미지" />
                              </td>
                              <td>{{ items.dutyDstr1Cd }}</td>
                              <td>{{ items.ocpCd }}</td>
                              <td>{{ items.userNm }}</td>
                              <td>{{ items.ptTypeCdNm }}</td>
                              <td>{{ items.jobCd }}</td>
                              <td>{{ items.authCd }}</td>
                              <td>{{ getUpDt(items.rgstDttm) }}</td>
                              <td>{{ getUpDt(items.updtDttm) }}</td>
                              <td>{{ items.userStatCdNm }}</td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </article>
                  </div>

                </div>
              </div>
            </article>
          </div>
          <!--end::Modal body-->
        </div>
        <!--end::Modal content-->
      </div>
      <!--end::Modal dialog-->
    </div>

    <MedInstEditModal v-if="showEditMedi" @close-edit-medi="closeEditMedi"
                      :medinst-detail='medinstDetail' :hpId='this.hpId' />

  </div>

  <div v-show="showModal" class="modal-backdrop fade"></div>

  <!--  alert창  -->
  <article v-show="isAlert" class="popup popup-confirm" style="z-index: 1600">
    <div class="popup-wrapper">
      <div class="popup-contents py-10 px-10" style="width: 300px">
        <article class="modal-alert-layout pb-10">
          <div class="alert-view-box pb-6">
            <img src="/img/common/ic_alert.svg" alt="이미지" />
          </div>
          <div class="alert-msg-box">{{ errMsg }}</div>
        </article>
        <article class="modal-menu-layout1">
          <div class="modal-menu-list">
            <router-link
              to=""
              @click="alertOpen(alertIdx)"
              class="modal-menu-btn menu-primary"
              data-type="success"
            >확인
            </router-link>
            <router-link
              v-show="cncBtn"
              to=""
              @click="alertClose"
              class="modal-menu-btn menu-cancel"
              data-type="cancel"
            >
              취소
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </article>
</template>

<script>
import DataPagination from '@/components/user/cpnt/DataPagination.vue'
import { ref } from 'vue'
import { mapState } from 'vuex'
import { getGugun, getSido } from '@/util/ui'
import DEFT_HOPT_IMG from '@/assets/img/img-hosp-def.jpg'
import MedInstDetailModal from '@/components/admin/modal/MedInstDetailModal.vue'
import MedInstBasicModal from '@/components/admin/modal/MedInstBasicModal.vue'
import MedInstAddModal from '@/components/admin/modal/MedInstAddModal.vue'
import MedInstEditModal from '@/components/admin/modal/MedInstEditModal.vue'
import CloseButton from '@/components/common/CloseButton.vue'

export default {
  components: { CloseButton, MedInstEditModal, MedInstAddModal, MedInstBasicModal, MedInstDetailModal, DataPagination },
  name: 'DetlAncmtListMedInst',
  props: {
    msg: String
  },
  computed: {
    ...mapState('admin', ['cmSido', 'cmGugun', 'medinstList', 'medinstDetail', 'hpId']),

    startIndex() {
      return (this.page - 1) * this.displayRowsCount
    },
    endIndex() {
      return this.page * this.displayRowsCount
    },
    filterData() {
      let params = {}
      if (this.filterMedinst['text']) {
        if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(this.filterMedinst['text'])) {
          params = { ...params, dutyName: this.filterMedinst['text'] }
        } else {
          params = { ...params, hospId: this.filterMedinst['text'] }
        }
      }
      if (this.filterMedinst['dstr1Cd']) params = { ...params, dstr1Cd: this.filterMedinst['dstr1Cd'] }
      if (this.filterMedinst['dstr2Cd']) params = { ...params, dstr2Cd: this.filterMedinst['dstr2Cd'] }
      if (this.filterMedinst['dutyDivNam'] && this.filterMedinst['dutyDivNam'].length > 0) {
        params = { ...params, dutyDivNam: this.filterMedinst['dutyDivNam'].join(",") }
      }

      return params
    },
    enableSecondAddressPicker() {
      return this.filterMedinst['dstr1Cd'] === ''
    }
  },
  mounted() {
    this.initNaverMap()
    this.setDefaultDstr1Cd()
    if (!this.medinstList) {
      this.search()
    }
  },
  setup() {
    const showTable = ref(false)
    const toggleTable = function() {
      showTable.value = !showTable.value
    }

    const isAlert = ref(false)
    const cncBtn = ref(false)
    const errMsg = ''

    return {
      showTable,
      toggleTable,
      isAlert,
      errMsg,
      cncBtn /* alert 취소버튼 유무 */
    }
  },
  data() {
    return {
      showModal: false,
      showEditMedi: false,
      tabidx: 0,
      displayRowsCount: 15,
      page: 1,
      alertIdx: 100,
      doctorCount: 0, // 의료진 수
      filterMedinst: {
        dutyDivNam: [],
        dstr1Cd: '',
        dstr2Cd: '',
        text: '',
        equip: [],
        emrgncyIsltnBed: [],
        infectBed: [],
      },
      inputValue: null,
      modMedinst: {
        hospId: '',
        childBirthYn: false,
        dialysisYn: false,
        childYn: false,
        nursingHospitalYn: false,
        mentalPatientYn: false,
        negativePressureRoomYn: false
      },
      imagePreview: DEFT_HOPT_IMG,
      emrgncyIsltnBedList: [
        { name: '코호트격리', value: 'cohort' },
        { name: '음압격리', value: 'negativePressure' },
        { name: '일반격리', value: 'normal' },
        { name: '소아음압격리', value: 'childNegativePressure' },
        { name: '소아일반격리', value: 'childNormal' }
      ],
      infectBedList: [
        { name: '중환자실', value: 'icu' },
        { name: '중환자실내음압격리', value: 'icuNegativePressure' },
        { name: '중증', value: 'severe' },
        { name: '준중증', value: 'moderate' },
        { name: '중등증', value: 'mild' }
      ],
      equipList: [
        { name: '인공호흡기', value: 'ventilator' },
        { name: '인공호흡기(조산아)', value: 'ventilatorPreemie' },
        { name: '인큐베이터', value: 'incubator' },
        { name: 'ECMO', value: 'ecmo' },
        { name: '고압산소', value: 'highPressureOxygen' },
        { name: 'CT', value: 'ct' },
        { name: 'MRI', value: 'mri' },
        { name: '혈관촬영기', value: 'bloodVesselImaging' },
        { name: '중심체온조절유도기', value: 'bodyTemperatureControl' },
      ]
    }
  },
  methods: {
    getSecondAddress(address) {
      if (address) {
        this.$store.dispatch('admin/getGuGun', address)
      }
    },
    changeDstrCd1() {
      this.getSecondAddress(this.filterMedinst['dstr1Cd'])
      this.filterMedinst['dstr2Cd'] = ''
      this.search()
    },
    changeDstrCd2() {
      this.search()
    },
    search() {
      this.$store.dispatch('admin/getMedinst', this.filterData)
      this.page = 1
    },
    changePage(newPage) {
      this.$store.dispatch('admin/getMedinst', {
        ...this.filterData,
        page: newPage
      })
      this.page = newPage
    },
    async openMedInstDetail(data) {
      await this.$store.dispatch('admin/getMedinstDetail', data)
      this.showModal = true
    },
    closeModal() {
      console.log('실행')
      this.showModal = false
      this.showEditMedi = false
      this.tabidx = 0
    },
    openEditMedi() {
      this.showEditMedi = true
    },
    closeEditMedi() {
      this.showEditMedi = false
      this.tabidx = 0
    },
    alertOpen(idx) {
      this.cncBtn = false
      if (idx === 0) {
        /*기관이미지 삭제*/
        this.errMsg = '기관 이미지를 삭제하시겠습니까?'
        this.cncBtn = true
        this.isAlert = true
        this.alertIdx = 0
      } else if (idx === 1) {
        this.errMsg = '기관 이미지가 삭제되었습니다.'
        this.isAlert = true
        this.alertIdx = 1
      }
    },
    alertClose() {
      this.errMsg = ''
      this.cncBtn = false
      this.isAlert = false
      this.alertIdx = 100
    },
    getGugun,
    getSido,
    tabsMove(idx) {
      this.tabidx = idx
    },
    getMedinst() {
      console.log(this.filterMedinst)
      this.$store.dispatch('admin/getMedinst', this.filterMedinst)
    },
    removeInstImg() {
      this.$store.dispatch('admin/removeMedinstImg', this.medinstDetail)
    },
    getUpDt(date) {
      if (date !== null && date !== undefined) {
        return (
          date.slice(0, 4) +
          '\n' +
          date.slice(5, 7) +
          '.' +
          date.slice(8, 10)
        )
      } else return ''
    },
    initNaverMap() {
      // 네이버 지도 API 로드
      const script = document.createElement('script')
      script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=1ewyt3v33o'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    },
    uploadImage(event) {
      const input = event.target
      if (input.files && input.files[0]) {
        const reader = new FileReader()

        reader.onload = (e) => {
          this.imagePreview = e.target.result
        }
        console.log(input.files[0])
        reader.readAsDataURL(input.files[0])
      } else {
        this.imagePreview = ''
      }
    },
    setDefaultDstr1Cd() {
      // 대구로 설정
      this.getSido()
      this.filterMedinst['dstr1Cd'] = '27'
      this.getSecondAddress('27')
      // const userInfo = store.getters['user/getUserInfo']
      // if (userInfo.dutyDstr1Cd) {
        // this.filterMedinst['dstr1Cd'] = userInfo.dutyDstr1Cd
        // this.getSecondAddress(userInfo.dutyDstr1Cd)
      // }
    },
    openTestModal() {
      this.tabidx = 3
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article.tabs-group-layout .tabs-contents-box .tabs-box-list .tabs-box {
  display: block;
}

.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.modal-dialog {
  margin-top: 50px;
  margin-bottom: 50px;
}

.modal-backdrop .fade {
  opacity: 0.4 !important;
  display: block !important;
}

.popup {
  display: block;
}

.addMedi {
  margin-top: 5px;
}

.tabs-nav-btn.active {
  background-color: rgb(116, 175, 235);
  color: white !important;
}
</style>
