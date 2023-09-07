<template>
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
              <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">시스템 관리</li>
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
                  공지사항 관리
                </h1>
              </li>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
            <!--begin::Title-->
            <!--end::Title-->
          </div>
          <!--end::Page title-->
          <!--begin::Actions-->
          <div class="d-flex align-items-center gap-2 gap-lg-3">
            <a
              href="#"
              class="btn btn-flex btn-sm btn-secondary fs-7"
              data-bs-toggle="modal"
              data-bs-target="#kt_modal_view_users"
              ><i class="fa-solid fa-download"></i> 엑셀다운로드</a
            >
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
                <div class="table-box">
                  <table>
                    <colgroup>
                      <col style="width: 168px" />
                      <col style="width: auto" />
                      <col style="width: 168px" />
                      <col style="width: auto" />
                    </colgroup>
                    <tbody>
                      <tr >
                        <th>공지유형</th>
                        <td>
                          <div class="item-cell-box">
                            <div class="rbox">
                              <label>
                                <input type="radio" name="type1" checked /><i></i>
                                <span class="txt">전체</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="type1" /><i></i>
                                <span class="txt">공지</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="type1" /><i></i>
                                <span class="txt">일반</span>
                              </label>
                            </div>
                          </div>
                        </td>
                        <th>노출여부</th>
                        <td>
                          <div class="item-cell-box">
                            <div class="rbox">
                              <label>
                                <input type="radio" name="type2" checked /><i></i>
                                <span class="txt">전체</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="type2" /><i></i>
                                <span class="txt">노출</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="type2" /><i></i>
                                <span class="txt">비노출</span>
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
                                <option>공지시작일</option>
                              </select>
                            </div>

                            <div class="tbox w-150px with-calendar">
                              <input type="text" class="date-picker" placeholder="2023-01-23" />
                            </div>
                            <div class="unit-box ms-2 text-gray-600">~</div>
                            <div class="tbox w-150px ms-2 with-calendar">
                              <input type="text" class="date-picker" placeholder="2023-01-23" />
                            </div>

                            <div class="rbox ms-10">
                              <label>
                                <input type="radio" name="range" checked /><i></i>
                                <span class="txt">오늘</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="range" /><i></i>
                                <span class="txt">7일</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="range" /><i></i>
                                <span class="txt">15일</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="range" /><i></i>
                                <span class="txt">30일</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="range" /><i></i>
                                <span class="txt">90일</span>
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>검색어</th>
                        <td colspan="3">
                          <div class="item-cell-box">
                            <div class="tbox w-500px with-btn">
                              <input type="text" placeholder="제목 또는 내용 입력" />

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

            <article class="table-list-layout1">
              <div class="table-head-box pb-4">
                <div class="head-box">
                  <div class="head-txt-box">
                    검색결과 <span class="rounded-pill bg-primary text-white px-2 ms-2">2</span>
                  </div>
                </div>

                <div class="option-box">
                  <a @click="showReg" class="btn btn-flex btn-xs btn-primary py-2"
                    ><i class="fa-solid fa-plus"></i> 공지사항 등록</a
                  >
                </div>
              </div>

              <div class="table-body-box">
                <div class="table-box with-scroll small">
                  <table class="table-layout-fixed">
                    <colgroup>
                      <col style="width: 70px" />
                      <col style="width: 100px" />
                      <col style="width: auto" />
                      <col style="width: 100px" />
                      <col style="width: 200px" />
                      <col style="width: 100px" />
                      <col style="width: 200px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                    </colgroup>
                    <thead>
                      <tr class="small">
                        <th>순번</th>
                        <th>구분</th>
                        <th>제목</th>
                        <th>첨부파일</th>
                        <th>공지기간</th>
                        <th>노출여부</th>
                        <th>수정일시</th>
                        <th>수정자</th>
                        <th>작업</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr @click="showDetail(1)" role='button'>
                        <td>2</td>
                        <td><span class="rounded-pill bg-primary text-white px-2">공지</span></td>
                        <td class="left">
                          <div class="txt-with-label">
                            <div class="txt-box">기능 업데이트에 따른 서버작업 공지 (3시간)</div>
                            <div class="label-box ms-2"><span class="text-primary">NEW</span></div>
                          </div>
                        </td>
                        <td>
                          <i
                            class="fa-regular fa-floppy-disk"
                            style="color: #74afeb; font-size: 20px"
                          ></i>
                        </td>
                        <td>2023-06-01 ~ 2023-09-01</td>
                        <td>
                          <i
                            class="fa-regular fa-circle-check"
                            style="color: #74afeb; font-size: 20px"
                          ></i>
                        </td>
                        <td>2023.09.03 09시</td>
                        <td>주서연</td>
                        <td>
                          <a
                            role="button"
                            @click="showMod($event, 1)"
                            class="btn btn-flex btn-xs btn-outline btn-outline-primary"
                            >수정
                          </a>
                        </td>
                      </tr>

                      <tr @click="showDetail(2)" role='button'>
                        <td>1</td>
                        <td>
                          <span
                            class="rounded-pill border border-1 border-gray-600 text-gray-600 px-2"
                            >일반</span
                          >
                        </td>
                        <td class="left">
                          <div class="txt-with-label">
                            <div class="txt-box">병상배정 시스템 프로젝트 오픈 공지</div>
                          </div>
                        </td>
                        <td>-</td>
                        <td>2023-06-01 ~ 2023-10-01</td>
                        <td>
                          <i
                            class="fa-regular fa-circle-check"
                            style="color: #74afeb; font-size: 20px"
                          ></i>
                        </td>
                        <td>2023.06.12 09시</td>
                        <td>곽택연</td>
                        <td>
                          <a
                            role="button"
                            @click="showMod($event, 2)"
                            class="btn btn-flex btn-xs btn-outline btn-outline-primary"
                          >
                            수정</a
                          >
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>

            <div class="row mt-10">
              <div
                class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"
              ></div>
              <div class="col-12 d-flex align-items-center justify-content-center">
                <div class="dataTables_paginate paging_simple_numbers" id="kt_table_users_paginate">
                  <ul class="pagination">
                    <li
                      class="paginate_button page-item previous disabled"
                      id="kt_table_users_previous"
                    >
                      <a
                        href="#"
                        aria-controls="kt_table_users"
                        data-dt-idx="0"
                        tabindex="0"
                        class="page-link"
                        ><i class="previous"></i
                      ></a>
                    </li>
                    <li class="paginate_button page-item active">
                      <a
                        href="#"
                        aria-controls="kt_table_users"
                        data-dt-idx="1"
                        tabindex="0"
                        class="page-link"
                        >1</a
                      >
                    </li>
                    <li class="paginate_button page-item next" id="kt_table_users_next">
                      <a
                        href="#"
                        aria-controls="kt_table_users"
                        data-dt-idx="4"
                        tabindex="0"
                        class="page-link"
                        ><i class="next"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

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

  <!-- 공지사항 등록/수정 모달 -->
  <ancmt-detl-modal v-if="model.mode === 'detl'" @closeModal="closeModal" />
  <!-- 공지사항 등록/수정 모달 -->

  <!-- 공지사항 상세 모달 -->
  <ancmt-reg-modal
    v-if="model.mode === 'reg' || model.mode === 'mod'"
    :mode="model.mode"
    :seq="model.seq"
    @closeModal="closeModal"
  />
  <!-- 공지사항 상세 모달 -->

  <!--end::Modal - 내정보-->
</template>

<script setup>
import AncmtRegModal from '@/components/user/modal/AncmtRegModal'
import AncmtDetlModal from '@/components/user/modal/AncmtDetlModal'
import { reactive } from 'vue'

let model = reactive({
  mode: '',
  seq: null
})

function showDetail(seq) {
  model.mode = 'detl'
  model.seq = seq
}

function showReg() {
  model.mode = 'reg'
}

function showMod(e, seq) {
  model.mode = 'mod'
  model.seq = seq
  e.stopPropagation()
}

function closeModal() {
  model.mode = ''
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.modal {
  display: block;
}
</style>
