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
              <li class="breadcrumb-item">
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
              </li>
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">환자관리</li>
              <li class="breadcrumb-item">
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
              </li>
              <li class="breadcrumb-item text-gray-500 mx-n1">
                <h1
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0"
                >
                  중증 환자 관리
                </h1>
              </li>
              <li class="breadcrumb-item ml-2">
                <span>&nbsp;중증 모니터링 중인 환자 목록입니다.</span>
              </li>
            </ul>
          </div>
        </div>
        <!--end::Toolbar wrapper-->
      </div>
      <!--end::Toolbar-->
      <!--begin::Content-->
      <div v-if="ptList !== null" id="kt_app_content" class="app-content flex-column-fluid">
        <div class="card">
          <!--begin::Card header-->
          <div class="card-header border-0 p-8">
            <!--begin::Card toolbar-->
            <article class="table-form-layout1">
              <div class="form-head-box"></div>
              <div class="form-body-box">
                <div class="table-box">
                  <table>
                    <colgroup>
                      <col style="width: 168px" />
                      <col style="width: auto" />
                      <col style="width: 168px" />
                      <col style="width: auto" />
                    </colgroup>
                    <tbody>
                    <tr>
                      <th>지역</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select v-model="filterPatient['address']['first']"
                                    @change="changeDstrCd1()">
                              <option value="" id="null">시/도 전체</option>
                              <option v-for="(item,idx) in cmSido" :key="idx"
                                      :value="item['cdId']">{{ item['cdNm'] }}
                              </option>
                            </select>
                          </div>

                          <div class="sbox w-175px ms-2">
                            <select :disabled="enableSecondAddressPicker" v-model="filterPatient['address']['second']"
                                    @change="changeDstrCd2()">
                              <option value="" id="null">시/군/구 전체</option>
                              <option v-for="(item,idx) in cmGugun" :key="idx"
                                      :value="item['cdId']">{{ item['cdNm'] }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </td>
                      <th>배정병원</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select :disabled="enableHospitalPicker" v-model="filterPatient['hospitalName']"
                                    @change="search()">
                              <option :value="null" id="null">병원 전체</option>
                              <option v-for="(item,idx) in hospList" :key="idx"
                                      :value="item">{{ item }}
                              </option>
                            </select>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>검색어</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="tbox w-400px with-btn">
                            <input
                              type="text"
                              v-model="filterPatient['searchText']"
                              placeholder="환자 이름, 생년월일 6자리 또는 휴대폰번호 입력"
                              @keyup.enter="search"
                            />

                            <a @click="search" class="input-btn" role="button">
                              <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
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
          <div class="card-body p-8">
            <!--begin::Table-->
            <h5>
              검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">{{
                ptList.count
              }}</span>
            </h5>

            <article class="table-list-layout1">
              <div class="table-body-box">
                <div class="table-box with-scroll small">
                  <table class="list-table-hoverable">
                    <colgroup>
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 70px" />
                      <col style="width: 50px" />
                      <col style="width: auto" />
                      <col style="width: 140px" />
                      <col style="width: 100px" />
                      <col style="width: auto" />
                      <col style="width: 120px" />
                      <col style="width: 100px" />
                      <col style="width: 50px" />
                      <col style="width: 70px" />
                    </colgroup>
                    <thead>
                    <tr class="small" style='cursor:default !important'>
                      <th>배정상태</th>
                      <th>이름</th>
                      <th>생년월일</th>
                      <th>성별</th>
                      <th>배정병원</th>
                      <th>거주지</th>
                      <th>중증도</th>
                      <th>질병명</th>
                      <th>연락처</th>
                      <th>국적</th>
                      <th>업데이트<br/>일시</th>
                      <th>작업</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr
                      v-for="(pt, idx) in ptList['items']"
                      :key="idx"
                      @click="selectPatient(pt)"
                    >
                      <td>{{ pt['bedStatCdNm'] ? pt['bedStatCdNm'] : '환자정보등록' }}</td>
                      <td>
                        <div class='text-center'>
                          <div class='pt-nm'>{{
                              pt['ptNm'].length > 1 ? (pt['ptNm'].substring(0, 1) + '*' + pt['ptNm'].substring(2, pt['ptNm'].length)) : pt['ptNm']
                            }}
                          </div>
                        </div>
                      </td>
                      <td>
                        {{ pt['rrno1'] ? pt['rrno1'].slice(0, 2) + '.' + pt['rrno1'].slice(2, 4) + '.' + pt['rrno1'].slice(4) : '-' }}
                      </td>
                      <td>{{ pt['gndr'] }}자</td>
                      <td class="text-start">{{ pt['hospNm'] ? pt['hospNm'] : '-' }}</td>
                      <td>{{ `${pt['dstr1CdNm']} ${pt['dstr2CdNm'] || ''}` }}</td>
                      <td v-if="pt['svrtTypeCdNm']">{{ pt['svrtTypeCdNm'] }}<br>({{ pt['svrtIptTypeCdNm'] }})</td>
                      <td v-if="!pt['svrtTypeCdNm']">-</td>
                      <td class="text-start">{{ pt['tagList'].length > 0 ? pt['tagList'].join(', ') : '-' }}</td>
                      <td>{{ pt['mpno'] ? pt['mpno'] : '-' }}</td>
                      <td>{{ pt['natiCdNm'] ? pt['natiCdNm'] : '-' }}</td>
                      <td>{{ getDate(pt['updtDttm']) }}</td>
                      <td
                        @click='toggleCheckbox()'
                      ><a @click.stop='showPatntModal(pt,2)'
                          class='btn btn-flex btn-xs btn-outline btn-outline-primary'
                      >수정</a>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            <data-pagination
              @change="changePage"
              :next-page-buttons-count="nextPageButtonsCount"
              :previous-page-buttons-count="previousPageButtonsCount"
              :display-change-page-buttons-count="displayChangePageButtonsCount"
              :display-rows-count="displayRowsCount"
              :data-length="ptList['count']"
            ></data-pagination>

            <!--end::Table-->
          </div>
          <!--end::Card body-->
        </div>
      </div>
      <!--end::Content-->
    </div>
    <!--end::Content wrapper-->
  </div>
  <!--end:::Main-->

  <!--  환자 상세 정보  -->
  <div v-show='showModal === 1' class="modal fade" :class="{'show' : showModal === 1}" id="kt_modal_patnt_detail"
       tabindex="-1" aria-hidden="true" style="">
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header px-10 pt-5 pb-0 d-flex justify-content-between">
          <h2>환자 상세 정보</h2>
          <div class="btn-list">
            <div
              class="btn btn-sm btn-icon btn-active-color-primary"
              @click="closeModal(0)"
              data-bs-dismiss="modal"
            >
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
            </div>
          </div>
        </div>
        <div class="modal-body scroll-y py-10 px-10">
          <article v-if="ptDetail !== null" class="detail-layout1">
            <div class="detail-wrap">
              <div class="detail-info-box w-33">
                <div class="detail-head-box px-10">
                  <div class="head-box d-flex">
                    <div class="head-txt-box">환자정보</div>
                    <div class="btn-primary-outline"
                         v-if="ptDetail.ptId==='PT00000085' || ptDetail.ptId==='PT00000086'">※ 관찰환자
                    </div>
                  </div>

                  <div class="option-box">
                    <a href="#none" class="option-btn">
                      <i class="fa-solid fa-share-nodes text-black" style="font-size: 18px"></i>
                    </a>
                  </div>
                </div>

                <div class="detail-body-box ps-5">
                  <article class="table-form-layout1">
                    <div class="form-body-box overflow-y-auto">
                      <div class="table-box">
                        <table>
                          <colgroup>
                            <col style="width: 128px" />
                            <col style="width: auto" />
                          </colgroup>
                          <tbody>
                          <tr>
                            <th>환자ID</th>
                            <td>{{ ptDetail.ptId }}</td>
                          </tr>

                          <tr>
                            <th>이름</th>
                            <td>{{ ptDetail.ptNm }}</td>
                          </tr>

                          <tr>
                            <th>주민번호</th>
                            <td>{{ `${ptDetail.rrno1}-${ptDetail.rrno2}******` }}</td>
                          </tr>

                          <tr>
                            <th>나이</th>
                            <td>{{ ptDetail.age }}세</td>
                          </tr>

                          <tr>
                            <th>성별</th>
                            <td>{{ ptDetail.gndr }}자</td>
                          </tr>

                          <tr>
                            <th>주소</th>
                            <td>
                              [{{ ptDetail.zip }}]<br />
                              {{ ptDetail.bascAddr }}&nbsp;{{ ptDetail.detlAddr }}
                            </td>
                          </tr>

                          <tr>
                            <th>사망여부</th>
                            <td>{{ ptDetail.dethYn === 'Y' ? '사망' : '생존' }}</td>
                          </tr>

                          <tr>
                            <th>국적</th>
                            <td>{{ ptDetail.natiNm }}</td>
                          </tr>

                          <tr>
                            <th>휴대전화번호</th>
                            <td>{{ getTelno(ptDetail.mpno) }}</td>
                          </tr>

                          <tr>
                            <th>전화번호</th>
                            <td>{{ ptDetail.telno ? ptDetail.telno : '-' }}</td>
                          </tr>

                          <tr>
                            <th>보호자 이름</th>
                            <td>{{ ptDetail.nokNm ? ptDetail.nokNm : '-' }}</td>
                          </tr>

                          <tr>
                            <th>직업</th>
                            <td>{{ ptDetail.job ? ptDetail.job : '-' }}</td>
                          </tr>

                          <tr>
                            <th>기저질환</th>
                            <td>{{ ptDs ? getTag(ptDs?.undrDsesNms || []) : '-' }}</td>
                          </tr>

                          <tr>
                            <th>환자유형</th>
                            <td>{{ ptDs ? getTag(ptDs?.ptTypeNms || []) : '-' }}</td>
                          </tr>
                          </tbody>
                        </table>
                      </div>

                      <div class="table-img-box pt-4"></div>
                    </div>
                  </article>
                </div>

                <div class="detail-foot-box pb-5">
                  <article class="modal-menu-layout1">
                    <div class="modal-menu-list">
                      <router-link
                        to=""
                        class="modal-menu-btn menu-primary"
                        @click='openSvrtInfoModal()'
                      >관찰환자 생체정보
                      </router-link>
                      <router-link
                        to=""
                        data-bs-target="#kt_modal_patnt"
                        data-bs-toggle="modal"
                        class="modal-menu-btn menu-primary"
                        @click='showPatntModal(ptDetail,2)'
                      >환자 정보 수정
                      </router-link>
                    </div>
                  </article>
                </div>
              </div>

              <div v-if="bdasHisInfo" class="detail-info-box">
                <div class="detail-head-box px-10">
                  <div class="head-box">
                    <div class="head-txt-box">병상배정 이력</div>
                  </div>

                  <div class="option-box"></div>
                </div>

                <div class="detail-body-box px-0">
                  <article class="table-list-layout2">
                    <div class="table-body-box overflow-y-auto">
                      <div class="table-box">

                        <table v-if='bdasHisInfo.items && bdasHisInfo.items.length>0'>
                          <colgroup>
                            <col style="width: 50px" />
                            <col style="width: auto" />
                          </colgroup>
                          <tr v-for="(item,i) in bdasHisInfo.items" :key="i">
                            <td class="py-5 px-1 text-center text-gray-700 fw-medium fs-6">
                              <div
                                class="d-inline-flex align-items-center justify-content-center w-auto bg-primary w-40px h-20px text-white rounded-2">
                                {{ item.order }}차
                              </div>
                            </td>
                            <td class="py-5 px-3">
                              <div class="top-info-box d-flex align-items-center">
                                <div
                                  class="d-inline-flex align-items-center justify-content-center w-auto bg-primary h-25px w-65px text-white rounded-2 px-0 w-auto"
                                  :class="{'bg-gray-500' : item.bedStatCdNm === '완료'}"
                                >
                                  {{ item.bedStatCdNm }}
                                </div>

                                <div class="eclipse-box mx-3">{{ item.hospNm ? item.hospNm : '-' }}</div>
                                <div class="date-box text-gray-700 fw-regular">
                                  {{ item.updttDttm ? getDt(item.updtDttm) : '' }}
                                </div>
                              </div>
                              <div class="bottom-info-box d-flex mt-2">
                                <!--                                <div class="name-box">{{ item.hospNm ? item.hospNm : '-' }}</div>-->
                                <div class="tag-box text-primary ms-2">{{
                                    item.tagList ? getTag(item.tagList) : '-'
                                  }}
                                </div>
                              </div>
                            </td>
                          </tr>
                        </table>

                        <div class="img-box" v-if='!bdasHisInfo.items || bdasHisInfo.items.length===0'>
                          <img src="/img/common/img_nodata.svg" alt="이미지">
                          <h2 data-v-70fc8ce7="">최근 이력 없음</h2>
                        </div>

                      </div>
                    </div>
                  </article>
                  <svrt-chart-unit-no-title :pt-id="ptDetail.ptId" class='svrt-chart'
                                            v-if="monitorPatntsList?.includes(ptDetail.ptId)" />
                </div>

                <div class="detail-foot-box pb-5">
                  <article class="modal-menu-layout1">
                    <div class="modal-menu-list">
                      <router-link
                        to=""
                        class="modal-menu-btn menu-primary"
                        @click='showPatntModal(ptDetail,1)'
                      >병상요청
                      </router-link>
                    </div>
                  </article>
                </div>
              </div>

              <div class="detail-info-box w-44 full d-flex flex-column">
                <div class="detail-head-box px-10 h-60px">

                  <div class="head-box d-flex">

                    <div class="head-txt-box" @click='timelineSection' role='button'>타임라인</div>

                    <div v-if="timeline !== null && timeline !== undefined" class="head-sub-box mt-1">
                      <div
                        class="d-inline-flex align-items-center justify-content-center w-auto bg-primary w-40px h-20px text-white rounded-2"
                      >
                        1차
                      </div>
                      <div
                        class="d-inline-flex align-items-center justify-content-center w-auto text-gray-700 ms-2"
                      >
                        {{ getTLDt(timeline.items[0].updtDttm, 0) }}
                      </div>
                    </div>
                  </div>

                  <div class="option-box">
                    <a href="#none" class="option-btn">
                      <i class="fa-solid fa-share-nodes text-black" style="font-size: 18px"></i>
                    </a>
                  </div>
                </div>

                <div class="detail-body-box flex-root" style="min-height: 0">
                  <article class="timeline-layout1 pb-5" style="height: 100%">
                    <div
                      v-if="timeline !== null"
                      class="timeline-wrap overflow-y-auto ps-10"
                      style="height: 100%"
                    >
                      <ul>
                        <li
                          v-for="(item, idx) in timeline.items"
                          :key="idx"
                          :class="{
                              off: item.timeLineStatus === 'complete',
                              'custom-style':
                                idx < timeline.items.length - 1 &&
                                timeline.items[idx + 1].timeLineStatus === 'closed'
                            }"
                        >
                          <div class="ic-box" v-if="item.timeLineStatus !== 'closed'">
                            <img :src="getTLIcon(item, idx)" alt="이미지" />
                          </div>

                          <div
                            class="item-box"
                            :class="{ suspend: item.timeLineStatus === 'suspend' }"
                            v-if="item.timeLineStatus !== 'closed'"
                          >
                            <div class="top-item-box">
                              <div class="state-box">{{ item.title }}</div>
                              <div class="date-box">
                                {{ item.updtDttm ? getTLDt(item.updtDttm, 1) : '' }}
                              </div>
                            </div>
                            <div class="mid-item-box">{{ item.by }}</div>
                            <div class="bottom-item-box">
                              <div class="item-img-group mb-4">
                                <div class="img-list"></div>
                              </div>
                              <div class="msg-box" v-if="item.msg">{{ item.msg }}</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div v-if="timeline === null" class="img-box" data-v-70fc8ce7=""><img
                      src="/img/common/img_nodata.svg" alt="이미지" data-v-70fc8ce7="">
                      <h2 data-v-70fc8ce7="">최근 이력 없음</h2></div>
                    <div class="detail-foot-box pb-5">
                      <article class="msg-send-layout1">
                        <div class="img-upload-result">
                          <div class="img-list"></div>
                        </div>

                        <div class="msg-group-box">
                          <div class="img-upload-box">
                            <label>
                              <input type="file" />
                              <img src="/img/common/ic_msg_img_upload.svg" alt="이미지" />
                            </label>
                          </div>
                          <div class="msg-input-box">
                            <input type="text" placeholder="메시지 입력" />
                          </div>
                          <div class="msg-send-box">
                            <a href="#none" class="send-btn">
                              <img src="/img/common/ic_msg_send.svg" alt="이미지" />
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>

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
              @click="cfrmAl(alertIdx)"
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

  <svrt-info-modal v-if='this.showSvrtInfoModal' :exist-pt='this.ptDetail' @closeModal='closeSvrtInfoModal()' />

</template>

<script>
import DataPagination from '@/components/user/cpnt/DataPagination.vue'
import { mapState } from 'vuex'
import SvrtChartUnitNoTitle from '@/components/user/unit/SvrtChartUnitNoTitle.vue'
import {
  getDt,
  getTag,
  getTelno,
  getTLDt,
  getTLIcon,
  toggleCheckbox
} from '@/util/ui'
import { reactive, ref } from 'vue'
import SvrtInfoModal from '@/components/user/modal/SvrtInfoModal.vue'

export default {
  components: {
    SvrtInfoModal,
    DataPagination,
    SvrtChartUnitNoTitle
  },
  name: 'ListPatnt',
  props: {
    msg: String
  },
  created() {
  },
  mounted() {
    this.initNewPt = this.newPt
    this.initDsInfo = this.dsInfo
    this.setDefaultDstr1Cd()
  },
  setup() {
    const isAlert = ref(false)
    const cncBtn = ref(false)
    const errMsg = ''
    let model = reactive({
      timeline: ''
    })

    return {
      isAlert,
      errMsg,
      cncBtn, /* alert 취소버튼 유무 */
      model
    }
  },
  data() {
    return {
      showModal: 0,
      tab: 0 /* 병상요청 */,
      alertIdx: 100 /* alert창 확인버튼 */,
      popup: 100 /* 팝업창 */,
      rptYn: false /* 역조서 유무 */,
      preRpt: null /*역조서 이미지 링크*/,
      reportFile: null,
      newPt: {
        ptNm: '', gndr: null, rrno1: null, rrno2: null,
        dethYn: '', natiCd: '', natiNm: '대한민국',
        dstr1Cd: '', dstr2Cd: '', telno: '', picaVer: null,
        nokNm: '', mpno: '', job: '', attcId: null,
        bascAddr: '', detlAddr: '', zip: '',
        undrDsesCd: [], undrDsesEtc: null
      },
      epidReportImage: '',
      dsInfo: {
        ptId: '',
        occrDt: '',
        diagDt: '',
        rptDt: '',
        instZip: '',
        instBascAddr: '',
        instDetlAddr: '',
        esvyAttcId: null,
        rptType: null,
        diagAttcId: null,
        diagDrNm: '',
        instId: '',
        rcptPhc: 0
      },
      bioAnlys: {},
      genders: ['남', '여'],
      patientData: [],
      patientBasicInfo: [],
      patientDiseaseInfo: [],
      displayRowsCount: 15,
      displayChangePageButtonsCount: 10,
      previousPageButtonsCount: 4,
      nextPageButtonsCount: 4,
      page: 1,
      checkedPatients: [],
      allPatientsSelected: false,
      filterPatient: {
        address: {
          first: '',
          second: ''
        },
        hospitalName: null,
        monitoring: null,
        assignmentStatus: [],
        searchText: ''
      },
      image: 'assets/logo.png',
      visibleRef: false,
      imgsRef: '',
      indexRef: 0,
      medinstInfo: {
        dstr1Cd: ''
      },
      showPatnt: false,
      showSvrtInfoModal: false,
    }
  },
  computed: {
    ...mapState('user', ['userInfo']),
    ...mapState('admin', ['cmSido', 'cmGugun', 'organMedi']),
    ...mapState('bedasgn', ['timeline', 'ptDs', 'bdasHisInfo']),
    ...mapState('patnt', ['ptDetail', 'ptBI', 'existPt', 'ptList', 'severPts', 'severPtList', 'hospList', 'rptInfo', 'attcRpt']),
    ...mapState('severity', ['severityData']),
    startIndex() {
      return (this.page - 1) * this.displayRowsCount
    },
    endIndex() {
      return this.page * this.displayRowsCount
    },
    filterData() {
      let params = { sever: true }
      if (this.filterPatient['searchText']) params = { ...params, ptNm: this.filterPatient['searchText'] }
      if (this.filterPatient['searchText']) params = { ...params, rrno1: this.filterPatient['searchText'] }
      if (this.filterPatient['searchText']) params = { ...params, mpno: this.filterPatient['searchText'] }
      if (this.filterPatient['address']['first']) params = {
        ...params,
        dstr1Cd: this.filterPatient['address']['first']
      }
      if (this.filterPatient['address']['second']) params = {
        ...params,
        dstr2Cd: this.filterPatient['address']['second']
      }
      if (this.filterPatient['hospitalName']) params = { ...params, hospNm: this.filterPatient['hospitalName'] }
      if (this.filterPatient['monitoring']) params = { ...params, sever: this.filterPatient['monitoring'] }

      return params
    },
    enableHospitalPicker() {
      return this.filterPatient['address']['second'] === ''
    },
    enableSecondAddressPicker() {
      return this.filterPatient['address']['first'] === ''
    },
    monitorPatntsList() {
      return this.ptList.items.filter(x => x.monitoring).map(x => x.ptId)
    }
  },
  //정예준
  watch: {
    checkedPatients() {
      this.allPatientsSelected = this.checkedPatients.length === this.patientData.length
      if (!this.patientData.length) {
        this.allPatientsSelected = false
      }
    },
    severPts(newValue) {
      this.filterPatient.monitoring = newValue
    },
    'newPt.natiCd': function(newNatiCd) {
      if (newNatiCd === 'NATI0001') {
        this.newPt.natiNm = '대한민국'
      } else {
        this.newPt.natiNm = null
      }
    }
  },
  methods: {
    toggleCheckbox,
    getDt,
    getTag,
    getTelno,
    getTLDt,
    getTLIcon,
    getSecondAddress(address) {
      if (address) {
        this.$store.dispatch('admin/getGuGun', address)
      }
    },
    getMedInst() {
      let data = this.medinstInfo
      data['instTypeCd'] = 'ORGN0003'
      this.$store.dispatch('admin/getOrganMedi', data)
    },
    changeDstrCd1() {
      this.getSecondAddress(this.filterPatient['address']['first'])
      this.filterPatient['address']['second'] = ''
      this.filterPatient['hospitalName'] = null
      this.search()
    },
    changeDstrCd2() {
      this.getHospList()
      this.filterPatient['hospitalName'] = null
      this.search()
    },
    getHospList() {
      this.$store.dispatch('patnt/getHospList', this.filterData)
      console.log(this.hospList)
    },
    async updateExistPt() {
      const data = { ptId: this.existPt.ptId, newPt: this.newPt }
      await this.$store.dispatch('patnt/modiPtInfo', data)
      this.closePopup(0)
      this.tab = 1
      this.showModal = 0
      this.closeModal(0)
    },
    getDate(data) {
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
    },
    alertOpen(idx) {
      this.cncBtn = false
      if (idx === 3) {
        this.errMsg = '환자 정보가\n등록되었습니다.'
        this.isAlert = true
        this.alertIdx = 3
      } else if (idx === 4) {
        /*역조서 파싱 */
        this.errMsg =
          '역학조사서 파일 기반으로\n환자정보를 자동입력 하였습니다.\n내용을 확인해주세요.'
        this.isAlert = true
        this.newPt = { ...this.rptInfo, bascAddr: this.rptInfo.baseAddr, undrDsesCd: [], undrDsesEtc: null }
        console.log(this.newPt)
        this.alertIdx = 4
      } else if (idx === 9) {
        /*역조서 삭제*/
        this.errMsg = '역학조사서 이미지를\n삭제하시겠습니까?'
        this.cncBtn = true
        this.isAlert = true
        this.alertIdx = 9
      } else if (idx === 10) {
        this.errMsg = '역학조사서가\n삭제되었습니다.'
        this.isAlert = true
        this.alertIdx = 10
      }
    },
    setNull() {
      console.log('실행' + this.initNewPt)
      this.tab = 0
      this.tabidx = 0
      this.popup = 100
      this.alertIdx = 100
      this.rptYn = false
      this.newPt = JSON.parse(JSON.stringify(this.initNewPt))
      this.dsInfo = JSON.parse(JSON.stringify(this.initDsInfo))
      this.$store.commit('patnt/setRpt', null)
      this.preRpt = null
      this.undrDsesCdArr = []
    },
    cfrmAl(res) {
      if (res === 0) {
        console.log(0)
        this.alertOpen(1)
      } else if (res === 1) {
        console.log('1')
        this.alertOpen(2)
      } else if (res === 3) {
        this.alertClose()
      } else if (res === 4) {
        this.alertClose()
      } else if (res === 9) {
        this.removeRpt()
        this.newPt = this.initNewPt
        this.dsInfo = this.initDsInfo
        this.alertClose()
        this.alertOpen(10)
      } else if (res === 10) {
        this.alertClose()
      }
    },
    closePopup(idx) {
      if (idx === 0) {
        this.popup = 100
        this.content = ''
        this.characterCount = 0
      }
    },
    closeModal(idx) {
      if (idx === 0) {
        /*세부내용 모달*/
        this.showModal = 0
        {
          this.$store.commit('bedasgn/setDisesInfo', null)
          this.$store.commit('bedasgn/setTimeline', null)
          this.$store.commit('patnt/setBasicInfo', null)
          this.$store.commit('patnt/setRpt', null)
          this.reportFile = null
        }
      }
    },
    alertClose() {
      this.errMsg = ''
      this.cncBtn = false
      this.isAlert = false
      this.alertIdx = 100
    },
    async uploadRpt(event) {
      const fileInput = event.target
      const file = fileInput.files[0]

      console.log(file)
      const formData = new FormData()
      formData.append('param1', 'edidemreport')
      formData.append('param2', file)

      await this.$store.dispatch('patnt/uploadRpt', formData)
      if (this.rptInfo !== null) {
        // console.log('실행')
        this.alertOpen(4)
      }
      //역조서 이미지 미리보기 만들기
      await this.showImage(this.rptInfo.attcId)
    },
    removeRpt() {
      /*역조서 삭제*/
      this.$store.dispatch('patnt/removeRpt', this.rptInfo.attcId)
      this.preRpt = null
    },
    async selectPatient(patient) {
      if (patient['bdasSeq']) {
        await this.$store.dispatch('bedasgn/getTimeline', patient)
        await this.$store.dispatch('bedasgn/getDSInfo', patient)
      } else {
        this.$store.commit('bedasgn/setTimeline', null)
        this.$store.commit('bedasgn/setDisesInfo', null)
      }
      await this.$store.dispatch('patnt/getBasicInfo', patient)
      await this.$store.dispatch('bedasgn/getBdasHisInfo', patient)

      if (this.ptDetail !== null) {
        this.newPt = this.ptDetail
      }
      if (this.ptDs !== null) {
        this.dsInfo = this.ptDs
      }
      this.preRpt = this.attcRpt

      this.showModal = 1
    },
    changePage(newPage) {
      this.$store.dispatch('patnt/getPatntList', {
        ...this.filterData,
        page: newPage
      })
      this.page = newPage
    },
    allCodesChangeState() {
      if (this.allPatientsSelected) {
        this.checkedPatients = []
        this.patientData.forEach((patient) => this.checkedPatients.push(patient))
      } else {
        this.checkedPatients = []
      }
    },
    search() {
      console.log(this.filterPatient['assignmentStatus'])
      this.$store.dispatch('patnt/getPatntList', this.filterData)
      this.page = 1
    },
    async showPatntModal(patient, idx) {
      await this.$store.dispatch('patnt/getBasicInfo', patient)
      if (this.ptDetail !== null) {
        this.newPt = this.ptDetail
        console.log(this.newPt)
      }
      await this.showImage(this.newPt.attcId)
      if (idx === 2) {
        this.showModal = idx
      } else {
        this.showPatnt = true
      }
    },
    async showImage(attcId) {
      if (attcId === null || attcId === '') {
        this.epidReportImage = ''
      } else {
        await this.$store.dispatch('user/readPrivateImage', attcId)
          .then((result) => {
            const blob = new Blob([result], { type: 'image/jpeg' })
            this.epidReportImage = URL.createObjectURL(blob)
          })
          .catch((error) => {
            console.error('An error occurred while fetching the image:', error)
          })
      }
    },
    timelineSection() {
      this.model.mode = 'timeline'
    },
    showImageLightBox() {
      this.imgsRef = this.epidReportImage
      this.visibleRef = true
    },
    onHide() {
      this.visibleRef = false
    },
    setDefaultDstr1Cd() {
      // 대구로 설정
      this.filterPatient.address.first = '27'
      this.getSecondAddress('27')
      // this.filterPatient.address.first = this.userInfo.dutyDstr1Cd
      // if (this.userInfo.dutyDstr1Cd) {
        // this.getSecondAddress(this.userInfo.dutyDstr1Cd)
      // }
    },
    openSvrtInfoModal() {
      this.showSvrtInfoModal = true
    },
    closeSvrtInfoModal() {
      this.showSvrtInfoModal = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  --bs-modal-width: 98%;
  display: block;
}

.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.item-box.suspend {
  border: 3px solid #74afeb !important;
  background-color: #74afeb33;
}

.chart-container {
  min-height: initial;
}

.head-sub-box {
  margin-left: 12px;
}

.detail-info-box {
  position: relative;
}

.detail-layout1,
.detail-wrap {
  height: 100%;
}

li.custom-style::before {
  display: none;
}

.bg-gray-500 {
  --bs-bg-rgb-color: var(--bs-gray-500-rgb);
  background-color: var(--bs-gray-500) !important;
}

article.detail-layout1 .detail-wrap .detail-head-box .head-box .head-txt-box {
  line-height: 28px;
}

.btn-primary-outline {
  border: 1px solid #82b7ed;
  color: #82b7ed;
  background-color: #fff;
  margin-left: 12px;
  border-radius: 19px;
  padding: 4px 9px 4px 6px;
}

td > .btn-primary-outline {
  width: 85px;
}

.pt-nm {
  line-height: 24px;
}

.img-box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.img-box > h2 {
  color: #595959;
  font-weight: normal;
  margin-top: 12px;
}

.chart-apex {
  width: 100%;
  position: absolute;
  left: 0;
  top: 100px;
  height: 350px;
  background-color: white;
}

.btn.btn-xs {
  padding: 8px 10px;
}
.detail-info-box.w-23 {
  width: 23% !important;
}
.detail-info-box.w-44 {
  width: 44% !important;
}
.item-cell-box {
  margin-bottom: 0.5rem;
}
.detail-info-box + .detail-info-box {
  border-left: 1px dashed #ccc;
}

.img-upload-box {
  z-index: 400;
  background-color: white;
}
.svrt-chart {
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 1rem);
  padding-bottom: 55px;
}

</style>
