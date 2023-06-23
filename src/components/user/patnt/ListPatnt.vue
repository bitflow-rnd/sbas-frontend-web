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
                <a href="/index.html" class="text-hover-primary">
                  <i class="fa-solid fa-house"></i>
                </a>
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                <span class="svg-icon svg-icon-4 mx-n1">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
                              d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                              fill="currentColor"/>
												</svg>
											</span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">환자관리</li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item">
                <!--begin::Svg Icon | path: icons/duotune/arrows/arr071.svg-->
                <span class="svg-icon svg-icon-4 mx-n1">
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path
                              d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z"
                              fill="currentColor"/>
												</svg>
											</span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-500 mx-n1"><h1
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">환자
                정보 관리</h1></li>
              <li class="breadcrumb-item ml-2"><span>&nbsp;설명란</span></li>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
            <!--begin::Title-->
            <!--end::Title-->
          </div>
          <!--end::Page title-->
          <!--begin::Actions-->
          <div class="d-flex align-items-center gap-2 gap-lg-3">
            <a href="#" class="btn btn-flex btn-sm btn-secondary fs-7" data-bs-toggle="modal"
               data-bs-target="#kt_modal_view_users"><i class="fa-solid fa-download"></i> 엑셀다운로드</a>
            <a href="#" class="btn btn-sm btn-flex btn-primary align-self-center px-3" data-bs-toggle="modal"
               data-bs-target="#kt_modal_bedasgn_detail">
              <i class="fa-solid fa-plus"></i> 등록
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

              <div class="form-head-box">

              </div>


              <div class="form-body-box">

                <div class="table-box">
                  <table>
                    <colgroup>
                      <col style="width: 168px;">
                      <col style="width: auto;">
                      <col style="width: 168px;">
                      <col style="width: auto;">
                    </colgroup>
                    <tbody>
                    <tr>
                      <th>주 담당지역 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box">

                          <div class="cbox">
                            <label>
                              <input type="checkbox" name="permission"><i></i>
                              <span class="txt">남</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="permission"><i></i>
                              <span class="txt">여</span>
                            </label>
                          </div>

                        </div>
                      </td>
                      <th>국적</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select>
                              <option>전체</option>
                              <option>대한민국</option>
                              <option>외국인</option>
                              <option>정보미등록</option>
                            </select>
                          </div>

                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>지역</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select>
                              <option>시/도 전체</option>
                            </select>
                          </div>

                          <div class="sbox w-175px ms-2">
                            <select>
                              <option>시/군/구 전체</option>
                            </select>
                          </div>
                        </div>
                      </td>
                      <th>배정병원</th>
                      <td>
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select disabled>
                              <option>병원 전체</option>
                            </select>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>배정상태</th>
                      <td colspan="3">
                        <div class="item-cell-box">

                          <div class="cbox">
                            <label>
                              <input type="checkbox" name="state"><i></i>
                              <span class="txt">병상요청</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="state"><i></i>
                              <span class="txt">병상배정</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="state"><i></i>
                              <span class="txt">이송/배차</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="state"><i></i>
                              <span class="txt">입·퇴원처리</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="state"><i></i>
                              <span class="txt">완료</span>
                            </label>
                          </div>


                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="state"><i></i>
                              <span class="txt">해당없음</span>
                            </label>
                          </div>


                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>기간검색</th>
                      <td colspan="3">
                        <div class="item-cell-box">
                          <div class="sbox w-175px me-5">
                            <select>
                              <option>등록일</option>
                            </select>
                          </div>

                          <div class="rbox">
                            <label>
                              <input type="radio" name="range"><i></i>
                              <span class="txt">오늘</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" name="range"><i></i>
                              <span class="txt">1개월</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" name="range"><i></i>
                              <span class="txt">3개월</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" name="range"><i></i>
                              <span class="txt">6개월</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" name="range"><i></i>
                              <span class="txt">1년</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" name="range"><i></i>
                              <span class="txt">전체</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" name="range"><i></i>
                              <span class="txt">직접지정</span>
                            </label>
                          </div>

                          <div class="tbox w-150px ms-10 with-calendar">
                            <input type="text" disabled class="date-picker" placeholder="2023-01-23">
                          </div>
                          <div class="unit-box ms-2 text-gray-600">~</div>
                          <div class="tbox w-150px ms-2 with-calendar">
                            <input type="text" disabled class="date-picker" placeholder="2023-01-23">
                          </div>
                        </div>

                      </td>
                    </tr>

                    <tr>
                      <th>검색어</th>
                      <td colspan="3">
                        <div class="item-cell-box">

                          <div class="sbox w-175px me-5">
                            <select>
                              <option>환자이름</option>
                            </select>
                          </div>

                          <div class="tbox w-400px with-btn">
                            <input type="text" placeholder="검색어 입력">

                            <a href="javascript:void(0)" class="input-btn">
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
            <h5>검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">99+</span></h5>

            <article class="table-list-layout1">

              <div class="table-body-box">

                <div class="table-box with-scroll small">
                  <table>
                    <colgroup>
                      <col style="width: 70px;">
                      <col style="width: 50px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">
                      <col style="width: 100px;">

                    </colgroup>
                    <thead>
                    <tr class="small">
                      <th>순번</th>
                      <th>
                        <div class="cbox">
                          <label>
                            <input type="checkbox" class="all-chk"><i></i>
                          </label>
                        </div>
                      </th>
                      <th>이름</th>
                      <th>나이</th>
                      <th>성별</th>
                      <th>질병명</th>
                      <th>연락처</th>
                      <th>국적</th>
                      <th>거주지</th>
                      <th>배정병원</th>
                      <th>배정상태</th>
                      <th>최근 업데이트일</th>
                      <th>작업</th>
                    </tr>
                    </thead>

                    <tbody>
                    <tr v-for="(patient, idx) in paginatedPatientData" :key="idx">

                      //
                      // Fix this
                      //

                      <td>{{idx}}</td>
                      <td>
                        <div class="cbox d-flex justify-content-center">
                          <label>
                            <input type="checkbox"><i></i>
                          </label>
                        </div>
                      </td>
                      <td>{{ patient['ptNm'] }}</td>
                      <td>{{ patient['age'] }}</td>
                      <td>{{ patient['gndr'] }}</td>
                      <td>코로나19 외 2건</td>
                      <td>{{ patient['mpno'] }}</td>
                      <td>{{ patient['natiCd'] }}</td>
                      <td>{{ `${patient['dstr1CdNm']} ${patient['dstr2CdNm']}`}}</td>
                      <td>{{ patient['hospNm'] }}</td>
                      <td>{{ patient['statCdNm'] }}</td>
                      <td>{{ new Date(patient['updtDttm']).toDateString()}}</td>
                      <td>
                        <a href="javascript:void(0)" class="btn btn-flex btn-xs btn-outline btn-outline-primary"
                           data-bs-toggle="modal" data-bs-target="#kt_modal_user_profile_view">수정</a>
                      </td>
                    </tr>
                    </tbody>

                  </table>

                </div>
              </div>

            </article>

            <data-pagination @change="changePage" :next-page-buttons-count="nextPageButtonsCount"
                             :previous-page-buttons-count="previousPageButtonsCount"
                             :display-change-page-buttons-count="displayChangePageButtonsCount"
                             :display-rows-count="displayRowsCount"
                             :data-length="patientData.length"></data-pagination>


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
</template>

<script>

import DataPagination from "@/components/layout/DataPagination";

export default {
  components: {
    DataPagination
  },
  name: 'ListPatnt',
  props: {
    msg: String
  },
  async created() {
    await this.$store.dispatch("user/loadPatientData").then(res => this.patientData = res.data['result']['items'])
  },
  data() {
    return {
      patientData: [],
      displayRowsCount: 10,
      displayChangePageButtonsCount: 10,
      previousPageButtonsCount: 4,
      nextPageButtonsCount: 4,
      page: 1,
    }
  },
  computed: {
    startIndex() {
      return (this.page - 1) * this.displayRowsCount;
    },
    endIndex() {
      return this.page * this.displayRowsCount;
    },
    paginatedPatientData() {
      return this.patientData.slice(this.startIndex, this.endIndex)
    }
  },
  methods: {
    changePage(newPage) {
      this.page = newPage
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
