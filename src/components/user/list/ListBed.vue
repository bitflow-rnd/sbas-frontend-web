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
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">병상배정</li>
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
              <li class="breadcrumb-item text-gray-500 mx-n1">
                <h1
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0"
                >
                  병상배정 현황
                </h1>
              </li>
              <li class="breadcrumb-item ml-2 ms-5">
                <span>내 기관에 할당된 병상배정 업무 목록을 표시합니다</span>
              </li>
              <div @click='getBdList' style='cursor: pointer; margin-left: 30px;'>
                <a class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7">
                  <i class="fa-solid fa-arrows-rotate"></i> 새로고침
                </a>
              </div>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
          </div>
          <!--end::Page title-->
          <!--begin::Actions-->
          <div class="d-flex align-items-center gap-2 gap-lg-3">
            <a
              @click="openModal(0)"
              class="btn btn-sm btn-flex btn-primary align-self-center px-3"
              data-bs-target='#kt_modal_request'
            >
              <i class="fa-solid fa-plus"></i> 신규병상요청
            </a>
          </div>
          <!--end::Actions-->
        </div>
        <!--end::Toolbar wrapper-->
      </div>
      <!--end::Toolbar-->
      <!--begin::Content-->
      <div id="kt_app_content" class="app-content flex-column-fluid">
        <div class="card">
          <!--begin::Card header-->
          <div class="card-header border-0 p-8">
            <!--begin::Card toolbar-->
            <article class="table-form-layout1">
              <div class="form-head-box"></div>

              <div class="form-body-box">
                <div class="table-form-toggle-box">
                  <a class="table-form-toggle-btn" @click="toggleTable" role="button">
                    <i class="fa-solid" :class="showTable ? 'fa-angle-up' : 'fa-angle-down'"></i>
                  </a>
                </div>

                <div class="table-box with-toggle">
                  <table>
                    <colgroup>
                      <col style="width: 100px" />
                      <col style="width: 190px" />
                      <col style="width: 190px" />
                      <col style="width: 190px" />
                      <col style="width: 120px" />
                      <col style="width: 170px" />
                      <col style="width: 120px" />
                      <col style="width: auto" />
                    </colgroup>
                    <tbody>
                    <tr data-toggle="false">
                      <th>배정상태</th>
                      <td colspan="3">
                        <div class="item-row-box">
                          <article class="toggle-list-layout1">
                            <div class="toggle-list">
                              <div class="toggle-list">
                                <label>
                                  <input type='radio' name='state' v-model='search.bedStatCd'
                                         :value='null'
                                         @change='searchBedAsgn' checked />
                                  <span class='txt'>전체</span>
                                </label>
                              </div>
                              <div v-for='(item, idx) in bedStatCount'
                                   :key='idx' class="toggle-list">
                                <label>
                                  <input
                                    type='radio'
                                    name='state'
                                    v-model='search.bedStatCd'
                                    :value='this.filter.selectedStates[idx]'
                                    @change='searchBedAsgn' /><i></i>
                                  <span class='txt'>{{ this.filter.states[idx].label }}
                                    <span class='cnt ms-1'
                                          style='color: rgb(255, 102, 110)'>
                                      &nbsp;&nbsp;&nbsp;{{ item.count }}
                                    </span>
                                  </span>
                                </label>
                              </div>
                            </div>
                          </article>
                        </div>
                      </td>

                      <td colspan="3" style='padding-left: 0'>
                        <div class="item-cell-box full">
                          <div class="tbox full with-btn">
                            <input
                              type="text"
                              v-model='search.kwd'
                              placeholder="환자이름, 생년월일6자리 또는 휴대폰번호"
                              @keyup.enter='searchBedAsgn'
                            />

                            <a @click='searchBedAsgn' role='button' class="input-btn">
                              <i class="fa-solid fa-magnifying-glass"></i>
                            </a>
                          </div>

<!--                          <div class="sbox w-150px ms-5">-->
<!--                            <select v-model='search.period' @change="searchBedAsgn">-->
<!--                              <option value=''>전체</option>-->
<!--                              <option value='7'>최근 1주</option>-->
<!--                              <option value='30'>최근 1개월</option>-->
<!--                              <option value='90'>최근 3개월</option>-->
<!--                              <option value='180'>최근 6개월</option>-->
<!--                              <option value='365'>최근 1년</option>-->
<!--                            </select>-->
<!--                          </div>-->
                        </div>
                      </td>
                    </tr>

                    <tr v-show="showTable">
                      <th>환자유형</th>
                      <td colspan="3">
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0001' type="checkbox" name="type2" /><i></i>
                                <span class="txt">일반</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0002' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">소아</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0004' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">임산부</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0003' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">투석</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0006' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">인공호흡기</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0005' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">수술</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0007' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">적극적 치료요청</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.ptTypeCd' value='PTTP0008' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">신생아</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>

                      <th>중증도</th>
                      <td colspan="3">
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="cbox" :class='{"ms-4": idx > 0 }' v-for='(item, idx) in svrtTypeCd' :key='idx'>
                              <label>
                                <input v-model='search.svrtTypeCd' :value='item.cdId' type="checkbox"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">{{ item.cdNm }}</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr v-show="showTable">
                      <th>병상유형</th>
                      <td colspan="3">
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0003' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">음압격리</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0002' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">일반격리</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0006' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">일반</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0005' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">소아음압격리</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0004' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">소아일반격리</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.reqBedTypeCd' value='BDTP0007' type="checkbox" name="type2"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">소아</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>

                      <th>성별</th>
                      <td>
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input v-model='search.gndr' value='남' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">남자</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input v-model='search.gndr' value='여' type="checkbox" name="type3"
                                       @change="searchBedAsgn" /><i></i>
                                <span class="txt">여자</span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </td>

                      <th>나이 (만)</th>
                      <td>
                        <div class="item-row-box">
                          <div class="item-cell-box">
                            <div class="tbox w-50px me-2">
                              <input v-model='search.toAge' type="text" class="px-2 text-center" placeholder="숫자"
                                     @input="searchBedAsgn" />
                            </div>
                            <span class="text-gray-600">이상 ~</span>
                            <div class="tbox w-50px mx-2">
                              <input v-model='search.fromAge' type="text" class="px-2 text-center" placeholder="숫자"
                                     @input="searchBedAsgn" />
                            </div>
                            <span class="text-gray-600">이하</span>
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
            <h5 class="d-flex">
              <div class="flex-grow-1 d-flex fs-16px">
                <div>검색결과</div>
                <div class="badge ms-2 rounded-pill bg-primary fs-14px px-2">
                  {{ bdListWeb.count }}
                </div>
              </div>
            </h5>

            <article v-if="bdListWeb === []" class="table-list-layout1">
              <div class="table-body-box">
                <div class="table-nodata py-40">
                  <div class="img-box">
                    <img src="/img/common/img_nodata.svg" alt="이미지" />
                  </div>

                  <div class="txt-box pt-10">조회 결과가 없습니다.</div>
                </div>
              </div>
            </article>
            <article v-if="bdListWeb !== []" class="table-list-layout1">
              <div class="table-body-box">
                <div class="table-box with-scroll small">
                  <table class="list-table-hoverable">
                    <colgroup>
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 300px" />
                      <col style="width: 140px" />
                      <col style="width: 100px" />
                    </colgroup>
                    <thead>
                    <tr class="small" style='cursor:default !important'>
                      <th>배정상태</th>
                      <th>환자이름</th>
                      <th>성별</th>
                      <th>나이</th>
                      <th>진단명</th>
                      <th>중증도</th>
                      <th>병상유형</th>
                      <th>환자유형</th>
                      <th>주소</th>
                      <th>업데이트일시</th>
                      <th>작업</th>
                    </tr>
                    </thead>

                    <tbody v-if="bdListWeb.count === 0">
                    <tr>
                      <td colspan="15">내역이 없습니다</td>
                    </tr>
                    </tbody>

                    <tbody v-if="bdListWeb.count !== 0">
                    <tr v-for="(item, i) in bdListWeb.items" :key="i" @click='openBedMod(item)'>
                      <td>{{ item.bedStatCdNm }}</td>
                      <td>{{ maskingNm(item.ptNm) }}</td>
                      <td>{{ item.gndr }}자</td>
                      <td>
                        {{ item.rrno1 ? item.rrno1.slice(0, 2) + '.' + item.rrno1.slice(2, 4) + '.' + item.rrno1.slice(4) : '-' }}
                      </td>
                      <td>{{ item.diagNm ? item.diagNm : '-' }}</td>
                      <td>{{ item.svrtTypeCdNm ? item.svrtTypeCdNm : '-' }}</td>
                      <td>{{ reqBedType[item.reqBedTypeCd] }}</td>
                      <td>{{ getTag(item.ptTypeCdNmTagList) }}</td>
                      <td class="text-start">{{ item.bascAddr }}</td>
                      <td v-html='getDtBlue(item.updtDttm)'></td>
                      <td>
                        <a v-if="!(item.bedStatCd==='BAST0007' || item.bedStatCd==='BAST0008')"
                          class="btn btn-flex btn-xs btn-outline btn-outline-primary justify-content-center"
                          :style="{color: getBtnColor(item.bedStatCd)}"
                        >{{ getBtn(item.bedStatCd)[0] }}</a
                        >
                        <div v-if="item.bedStatCd==='BAST0007' || item.bedStatCd==='BAST0008'">
                          {{ getBtn(item.bedStatCd)[0] }}
                        </div>
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
              :data-length="bdListWeb.count"
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

  <!--  신규병상요청 0  -->
  <BdasReqModal v-if='this.showModal === 0' @close-patnt-request='closePatntRequest'
                @closeDetailModal="closeModal(2)"
                :pt-id='newPt.ptId' />

  <!--  추천병원선택 1  -->
  <RcmdHospModal v-if='this.showRcmdHospModal' :bd-detail='this.bdDetail'
                @closeModal='closeRcmdHospModal()' @returnToList='returnToList()' />

  <!--  병상배정 세부 내용 2 -->
  <BdasDetailModal v-if='this.showModal === 2' :bd-detail='this.bdDetail' :pt-detail='this.ptDetail'
                   :pt-ds='ptDs' :timeline='this.timeline' :trans-info='this.transInfo' :trsfInfo='this.trsfInfo'
                   :trans-condition1='transCondition1' :trans-condition2='transCondition2' :user-info='userInfo'
                   @open-rcmd-hosp-modal='openRcmdHospModal()'
                   @close-modal='closeModal(2)' />

  <!--  역학조사서 비교   -->
  <article v-show="false" class="popup popup-update-check">
    <div class="popup-wrapper">
      <div class="popup-contents py-10 px-10" style="width: 300px">
        <article class="modal-alert-layout pb-10">
          <div class="alert-view-box pb-6"><img src="/img/common/ic_alert.svg" alt="이미지" /></div>
          <div class="alert-msg-box">
            등록된 환자의 이름 또는 주민등록번호가<br />역학조사서의 내용과 다릅니다.<br />내용을
            확인해주세요.
          </div>
        </article>
        <article class="modal-menu-layout1">
          <div class="modal-menu-list">
            <a
              href="javascript:popupClose('update-check')"
              class="modal-menu-btn menu-cancel"
              data-type="cancel"
            >이전</a
            >
            <a
              href="javascript:popupClose('update-check'); popupClose('exist'); alertPopupOpen('환자 정보가</br>등록되었습니다.')"
              class="modal-menu-btn menu-primary"
              data-type="success"
            >신규등록</a
            >
          </div>
        </article>
      </div>
    </div>
  </article>

</template>

<script>
import DataPagination from '@/components/user/cpnt/DataPagination.vue'
import { mapState, useStore } from 'vuex'
import { ref } from 'vue'
import { getDtBlue, getSido, getTag, maskingNm, reqBedType } from '@/util/ui'
import user from '@/store/modules/user'
import MyInfoModal from '@/components/user/modal/MyInfoModal.vue'
import CloseButton from '@/components/common/CloseButton.vue'
import BdasDetailModal from '@/components/user/bdas/BdasDetailModal.vue'
import RcmdHospModal from '@/components/user/bdas/RcmdHospModal.vue'
import BdasReqModal from '@/components/user/bdas/BdasReqModal.vue'

export default {
  components: { BdasReqModal, RcmdHospModal, BdasDetailModal, CloseButton, MyInfoModal, DataPagination },
  name: 'ListBed',
  props: {},

  created() {
    this.getBdList()
    this.initNewPt = JSON.parse(JSON.stringify(this.newPt))
    this.initDsInfo = JSON.parse(JSON.stringify(this.dsInfo))
    this.initSvInfo = JSON.parse(JSON.stringify(this.svInfo))
    this.initSpInfo = JSON.parse(JSON.stringify(this.spInfo))
    this.initSearch = JSON.parse(JSON.stringify(this.search))
  },
  mounted() {
    this.initNaverMap()
  },
  setup() {
    const showTable = ref(false)
    const toggleTable = function() {
      showTable.value = !showTable.value
    }
    const store = useStore()

    return {
      showTable,
      toggleTable,
      store
    }
  },
  watch: {},
  data() {
    return {
      sortedList: [],
      reqBedType,
      displayChangePageButtonsCount: 10,
      previousPageButtonsCount: 4,
      nextPageButtonsCount: 4,
      displayRowsCount: 15,
      page: 1,
      showModal: null,
      transCondition1: false,
      transCondition2: false,
      allChked: false,
      mode: '',
      filter: {
        states: [
          { label: '승인대기', value: 'BAST0003' },
          { label: '배정대기', value: 'BAST0004' },
          { label: '이송대기', value: 'BAST0005' },
          { label: '이송중', value: 'BAST0006' },
          { label: '완료', value: 'BAST0007,BAST0008' },
        ],
        selectedStates: ['BAST0003', 'BAST0004', 'BAST0005', 'BAST0006', 'BAST0007,BAST0008'],
        selectedRow: 0
      },
      search: {
        kwd: '',
        period: '',
        reqBedTypeCd: [],
        ptTypeCd: [],
        svrtTypeCd: [],
        fromAge: null,
        toAge: null,
        gndr: [],
        page: 1,
        bedStatCd: null
      },
      svrtTypeCd: this.store.getters['common/getSeverityType'],
      preRpt: null,
      selectedFile: true,
      imgUrl: null,
      rptYn: false /* 역조서 유무 */,
      medinstInfo: {
        dstr1Cd: ''
      },
      newPt: {
        ptNm: '',
        rrno1: '',
        rrno2: '',
        gndr: '',
        zip: '',
        bascAddr: '',
        detlAddr: '',
        natiCd: '',
        picaVer: null,
        natiNm: '대한민국',
        attcId: null,
        dethYn: '',
        mpno: '',
        telno: ''
      },
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
      svInfo: {
        ptId: '',
        ptTypeCd: [],
        svrtIptTypeCd: 'SVIP0001',
        svrtTypeCd: null,
        undrsesCd: [],
        dnrAgreYn: null,
        reqBedTypeCd: null
      },
      bioAnlys: {},
      spInfo: {
        ptId: '',
        dprtDstrTypeCd: '',
        dprtDstrBascAddr: '',
        dprtDstrDetlAddr: '',
        dprtDstrZip: '',
        nok1Telno: '',
        nok2Telno: '',
        chrgTelno: '',
        spclNm: '',
        dprtHospId: '',
        inhpAsgnYn: 'N',
        reqDstr1Cd: '27',
        reqDstr2Cd: null
      },
      trsfInfo: {
        instId: '',
        chfTelno: '',
        ptId: '',
        bdasSeq: '',
        ambsNm: '',
        crew1Id: '구급대원',
        crew2Id: '구급대원',
        crew3Id: '구급대원'
      },
      chrgUserId: [],
      undrDsesCdArr: [],
      showRcmdHospModal: false,
    }
  },
  computed: {
    user() {
      return user
    },
    ...mapState('bedasgn', [
      'bdList',
      'bdListWeb',
      'bdCnt',
      'bdDetail',
      'newPtInfo',
      'ptDs',
      'ptSv',
      'ptBio',
      'timeline',
      'transInfo',
      'bedStatCount',
    ]),
    ...mapState('patnt', ['ptDetail']),
    ...mapState('user', ['userInfo']),
    filterData() {
      let params = {}
      if (this.search['kwd']) params = { ...params, ptNm: this.search['kwd'] }
      if (this.search['kwd']) params = { ...params, rrno1: this.search['kwd'] }
      if (this.search['kwd']) params = { ...params, mpno: this.search['kwd'] }
      if (this.search['period']) params = { ...params, period: this.search['period'] }
      if (this.search['fromAge']) params = { ...params, fromAge: this.search['fromAge'] }
      if (this.search['toAge']) params = { ...params, toAge: this.search['toAge'] }
      if (this.search['ptTypeCd'].length) params = { ...params, ptTypeCd: this.search['ptTypeCd'].join(',') }
      if (this.search['svrtTypeCd'].length) params = { ...params, svrtTypeCd: this.search['svrtTypeCd'].join(',') }
      if (this.search['reqBedTypeCd'].length) params = {
        ...params,
        reqBedTypeCd: this.search['reqBedTypeCd'].join(',')
      }
      if (this.search['gndr'].length) params = { ...params, gndr: this.search['gndr'].join(',') }
      params = { ...params, bedStatCd: this.search['bedStatCd'] }
      return params
    }
  },
  methods: {
    getSido,
    changePage(newPage) {
      this.$store.dispatch('bedasgn/getBdListWeb', {
        ...this.filterData,
        page: newPage
      })
      this.page = newPage
    },
    openModal(idx) {
      this.showModal = null
      this.showModal = idx
    },
    closeModal(idx) {
      if (idx === 2) {
        /*세부내용 모달*/
        this.showModal = null
        this.$store.commit('bedasgn/setDisesInfo', null)
        this.$store.commit('bedasgn/setTimeline', null)
        this.$store.commit('patnt/setBasicInfo', null)
        this.$store.commit('patnt/setRpt', null)
        this.newPt = this.initNewPt
        this.dsInfo = this.initDsInfo
        this.$store.dispatch('bedasgn/getBdListWeb', this.filterData)
      }
    },
    getBdList() {
      //this.search = this.initSearch
      this.$store.dispatch('bedasgn/getBdListWeb')
      this.$store.dispatch('bedasgn/getBedStatCount')
    },
    searchBedAsgn() {
      this.$store.dispatch('bedasgn/getBdListWeb', this.filterData)
      this.page = 1
    },
    initNaverMap() {
      // 네이버 지도 API 로드
      const script = document.createElement('script')
      script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=1ewyt3v33o'
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    },
    setNull() {
      console.log('실행' + this.initNewPt)
      this.rptYn = false
      this.newPt = JSON.parse(JSON.stringify(this.initNewPt))
      this.dsInfo = JSON.parse(JSON.stringify(this.initDsInfo))
      this.svInfo = this.initSvInfo
      this.spInfo = this.initSpInfo
      this.$store.commit('patnt/setRpt', null)
      this.preRpt = null
      this.undrDsesCdArr = []
    },
    maskingNm,
    getDtBlue,
    getTag,
    getBtn(sts) {
      if (sts === 'BAST0001') {
        return ['배정 없음', '']
      } else if (sts === 'BAST0002') {
        return ['역학조사 중', '']
      } else if (sts === 'BAST0003') {
        return ['승인 대기', '#kt_modal_detail']
      } else if (sts === 'BAST0004') {
        return ['배정 대기', '#kt_modal_dispatch']
      } else if (sts === 'BAST0005') {
        return ['이송·배차 처리', '#kt_modal_dispatch']
      } else if (sts === 'BAST0006') {
        return ['입·퇴원 처리', '#kt_modal_hospitalization']
      } else if (sts === 'BAST0007') {
        return ['완료', '#kt_modal_detail']
      } else if (sts === 0) {
        //추천병원 모달 띄우기
        return ['완료', '#kt_modal_recommend']
      } else {
        return ['완료', '#kt_modal_detail']
      }
    },
    getBtnColor(sts) {
      if (sts === 'BAST0001') {
        return ''
      } else if (sts === 'BAST0002') {
        return '#67CCAAFF'
      } else if (sts === 'BAST0003') {
        return '#67CCAAFF'
      } else if (sts === 'BAST0004') {
        return '#4CAFF1FF'
      } else if (sts === 'BAST0005') {
        return '#4CAFF1FF'
      } else if (sts === 'BAST0006') {
        return '#4CAFF1FF'
      } else if (sts === 'BAST0007' || sts === 'BAST0008') {
        return '#FF666EFF'
      }
    },
    async openBedMod(data) {
      this.$store.commit('bedasgn/setbdDetail', data)
      this.$store.dispatch('patnt/getBasicInfo', data)
      await this.$store.dispatch('bedasgn/getTimeline', data)
      this.$store.dispatch('bedasgn/getDSInfo', data)
      this.$store.dispatch('bedasgn/getTransInfo', data)
      this.transCondition1 = this.bdDetail.bedStatCd === 'BAST0006' || this.bdDetail.bedStatCd === 'BAST0007'
      this.transCondition2 = this.bdDetail.bedStatCd === 'BAST0005' || this.bdDetail.bedStatCd === 'BAST0006' || this.bdDetail.bedStatCd === 'BAST0007'
      this.getChrgId()
      this.openModal(2)
    },
    getChrgId() {
      if (this.timeline !== null) {
        this.chrgUserId = []
        this.timeline.items.forEach((item) => {
          if (item.timeLineStatus === 'suspend') {
            if (item.asgnReqSeq) {
              console.log('의료진 배정')
              this.chrgUserId.push({ chrgUserId: item.chrgUserId, asgnReqSeq: item.asgnReqSeq })
              console.log(this.chrgUserId)
            } else if (item.chrgUserId) {
              console.log('해당')
              this.chrgUserId.push(item.chrgUserId)
              console.log(this.chrgUserId)
            }
          }
        })
      }
    },
    closeRcmdHospModal() {
      this.showRcmdHospModal = false
      this.showModal = 2
    },
    openRcmdHospModal() {
      this.showRcmdHospModal = true
      this.showModal = 1
    },
    closePatntRequest() {
      this.showModal = null
      this.getBdList()
    },
    returnToList() {
      this.showRcmdHospModal = false
      this.getBdList()
    }
  }
}
</script>

<style scoped>
.modal.show {
  background-color: rgba(0, 0, 0, 0.4);
  display: block;
}

.popup {
  display: block;
}

.btn.btn-outline.btn-outline-primary {
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  min-width: 100px;
}

.list-table-hoverable tr {
  cursor: pointer;
}

.list-table-hoverable tr:hover td {
  background-color: #74afeb22;
}

.spinner {
  position: fixed;
  left: calc(50% - 32px);
  top: calc(50% - 32px);
}

article.toggle-list-layout1 .toggle-list label input:checked ~ .txt {
  padding: 0 13px;
}

article.toggle-list-layout1 .toggle-list label .txt {
  padding: 0 13px;
}

</style>
