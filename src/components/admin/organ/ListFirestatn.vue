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
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-500 mx-n1">
                <h1
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0"
                >
                  구급대 관리
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

          <!--end::Actions-->
        </div>
        <!--end::Toolbar wrapper-->
      </div>
      <!--end::Toolbar-->
      <!--begin::Content-->
      <div id="kt_app_content" class="app-content flex-column-fluid">
        <div class="card d-flex flex-row">
          <div class="card-contents" style="flex: 1; min-width: 0">
            <div class="card-option p-8 pb-0">
              <div class="d-flex align-items-center gap-2 gap-lg-3 justify-content-end">
                <a
                  href="#"
                  class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_view_users"
                  ><i class="fa-regular fa-trash-can"></i> 삭제</a
                >
                <a
                  href="#"
                  class="btn btn-flex btn-sm btn-secondary fs-7"
                  data-bs-toggle="modal"
                  data-bs-target="#kt_modal_view_users"
                  ><i class="fa-solid fa-download"></i> 엑셀다운로드</a
                >
                <a
                  @click="handleModal(0, null)"
                  class="btn btn-sm btn-flex btn-primary align-self-center px-3"
                >
                  <i class="fa-solid fa-plus"></i> 구급대 등록</a
                >
              </div>
            </div>

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
                      </colgroup>
                      <tbody>
                        <tr>
                          <th>검색조건</th>
                          <td>
                            <div class="item-cell-box">
                              <div class="sbox w-175px" @click="getSido()">
                                <select v-model="search.dstrCd1" @change="getGugun(search.dstrCd1)">
                                  <option value="null">시/도 전체</option>
                                  <option v-for="(item, i) in cmSido" :key="i" :value="item.cdId">
                                    {{ item.cdNm }}
                                  </option>
                                </select>
                              </div>
                              <div class="sbox w-175px ms-2">
                                <select v-model="search.dstrCd2">
                                  <option value="null">시/군/구 전체</option>
                                  <option v-for="(item, i) in cmGugun" :key="i" :value="item.cdId">
                                    {{ item.cdNm }}
                                  </option>
                                </select>
                              </div>

                              <div class="tbox full with-btn ms-2" style="max-width: 300px">
                                <input
                                  v-model="inputValue"
                                  @input="handleChange"
                                  type="text"
                                  placeholder="구급대명 또는 ID 입력"
                                />

                                <router-link to="" @click="getFireStatn" class="input-btn">
                                  <i class="fa-solid fa-magnifying-glass"></i>
                                </router-link>
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
            <div v-if="firestatnList !== undefined && firestatnList !== null" class="card-body p-8">
              <!--begin::Table-->
              <h5>
                조회결과<span class="position-absolute translate-middle rounded-pill bg-primary">{{
                  firestatnList.length
                }}</span>
              </h5>
              <article v-if="firestatnList.length === 0" class="table-list-layout1">
                <div class="table-body-box">
                  <div class="table-nodata py-40">
                    <div class="img-box">
                      <img src="/img/common/img_nodata.svg" alt="이미지" />
                    </div>

                    <div class="txt-box pt-10">조회된 구급대가 없습니다</div>
                  </div>
                </div>
              </article>
              <article
                v-if="firestatnList.length !== 0 && fsDetail !== null"
                class="table-list-layout1"
              >
                <div class="table-body-box">
                  <div class="table-box with-scroll small">
                    <table>
                      <colgroup>
                        <col style="width: 70px" />
                        <col style="width: 50px" />
                        <col style="width: 100px" />
                        <col style="width: 100px" />
                        <col style="width: 100px" />
                        <col style="width: 100px" />
                        <col style="width: 100px" />
                        <col style="width: 100px" />
                      </colgroup>
                      <thead>
                        <tr class="small">
                          <th>순번</th>
                          <th>
                            <div class="cbox">
                              <label> <input type="checkbox" class="all-chk" /><i></i> </label>
                            </div>
                          </th>
                          <th>지역(시/도)</th>
                          <th>지역(시/군/구)</th>
                          <th>구급대 (119안전센터)</th>
                          <th>전화번호</th>
                          <th>등록 대원 수</th>
                          <th>작업</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr
                          :class="{ selected: fsDetail.instId === item.instId }"
                          @click="getFS(item)"
                          v-for="(item, i) in firestatnList"
                          :key="i"
                        >
                          <td>{{ i + 1 }}</td>
                          <td>
                            <div class="cbox d-flex justify-content-center">
                              <label> <input type="checkbox" /><i></i> </label>
                            </div>
                          </td>
                          <td>{{ item.dstrCd1 }}</td>
                          <td>{{ item.dstrCd2 }}</td>
                          <td>{{ item.instNm }}</td>
                          <td>{{ item.chrgTelno }}</td>
                          <td>{{ item.crewCount }}</td>
                          <td>
                            <a
                              @click="handleModal(5, item)"
                              class="btn btn-flex btn-xs btn-outline btn-outline-primary"
                              >수정</a
                            >

                            <a
                              @click="handleModal(1, item)"
                              class="btn btn-flex btn-xs btn-outline btn-outline-primary ms-2"
                              >상세</a
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
                  <div
                    class="dataTables_paginate paging_simple_numbers"
                    id="kt_table_users_paginate"
                  >
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
                      <li class="paginate_button page-item">
                        <a
                          href="#"
                          aria-controls="kt_table_users"
                          data-dt-idx="2"
                          tabindex="0"
                          class="page-link"
                          >2</a
                        >
                      </li>
                      <li class="paginate_button page-item">
                        <a
                          href="#"
                          aria-controls="kt_table_users"
                          data-dt-idx="3"
                          tabindex="0"
                          class="page-link"
                          >3</a
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

          <article class="card-sub-contents px-6" style="width: 560px">
            <div class="card-option p-8">
              <div class="d-flex align-items-center gap-2 gap-lg-3 justify-content-end">
                <!--                                <a @click="delFM" href="#" class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users"><i class="fa-regular fa-trash-can"></i> 삭제</a>-->
                <a @click="delFM" class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7"
                  ><i class="fa-regular fa-trash-can"></i> 삭제</a
                >
                <a
                  @click="handleModal(2, null)"
                  class="btn btn-sm btn-flex btn-primary align-self-center px-3"
                >
                  <i class="fa-solid fa-plus"></i> 대원등록
                </a>
              </div>
            </div>

            <div class="card-sub-wrap p-8">
              <!--begin::Card header-->
              <div class="card-header border-0 p-0 pb-6">
                <h5 class="pb-5 mb-0">구급대원 목록</h5>

                <article class="card-header-search-form">
                  <div class="tbox full with-btn">
                    <input type="text" placeholder="대원이름 또는 ID 입력" />

                    <a href="javascript:void(0)" class="input-btn">
                      <i class="fa-solid fa-magnifying-glass"></i>
                    </a>
                  </div>
                </article>
              </div>
              <!--end::Card header-->
              <!--begin::Card body-->
              <div class="card-body p-0">
                <!--begin::Table-->
                <h5 v-if="firemenList">
                  조회결과<span
                    class="position-absolute translate-middle rounded-pill bg-primary"
                    >{{ firemenList.count }}</span
                  >
                </h5>
                <h5 v-if="!firemenList">
                  조회결과<span class="position-absolute translate-middle rounded-pill bg-primary"
                    >0</span
                  >
                </h5>
                <article v-if="!firemenList" class="table-list-layout1">
                  <div class="table-body-box">
                    <div class="table-nodata py-40">
                      <div class="img-box">
                        <img src="/img/common/img_nodata.svg" alt="이미지" />
                      </div>

                      <div class="txt-box pt-10">조회된 구급대원이 없습니다</div>
                    </div>
                  </div>
                </article>
                <article v-if="firemenList" class="table-list-layout1">
                  <div class="table-body-box">
                    <div class="table-box with-scroll small">
                      <table>
                        <colgroup>
                          <col style="width: 70px" />
                          <col style="width: 100px" />
                          <col style="width: 100px" />
                          <col style="width: 100px" />
                          <col style="width: 100px" />
                        </colgroup>
                        <thead>
                          <tr class="small">
                            <th>
                              <div class="cbox">
                                <label>
                                  <input
                                    type="checkbox"
                                    class="all-chk"
                                    v-model="allChked"
                                    @change="allChk"
                                  /><i></i>
                                </label>
                              </div>
                            </th>
                            <th>이름</th>
                            <th>직급</th>
                            <th>전화번호</th>
                            <th>액션</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr v-for="(person, i) in firemenList.items" :key="i">
                            <td>
                              <div class="cbox d-flex justify-content-center">
                                <label>
                                  <input
                                    v-model="person.chked"
                                    @change="setDelInfo(person)"
                                    type="checkbox"
                                  /><i></i>
                                </label>
                              </div>
                            </td>
                            <td @click="handleModal(4, person)">{{ mskData(0, person.crewNm) }}</td>
                            <td>{{ person.pstn }}</td>
                            <td>{{ mskData(1, person.telno) }}</td>
                            <td>
                              <a
                                @click="handleModal(3, person)"
                                class="btn btn-flex btn-xs btn-outline btn-outline-primary"
                                >수정</a
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
                    <div class="dataTables_paginate paging_simple_numbers" id="">
                      <ul class="pagination">
                        <li class="paginate_button page-item previous disabled" id="">
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
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="kt_table_users"
                            data-dt-idx="2"
                            tabindex="0"
                            class="page-link"
                            >2</a
                          >
                        </li>
                        <li class="paginate_button page-item">
                          <a
                            href="#"
                            aria-controls="kt_table_users"
                            data-dt-idx="3"
                            tabindex="0"
                            class="page-link"
                            >3</a
                          >
                        </li>
                        <li class="paginate_button page-item next" id="">
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
          </article>
        </div>
      </div>
      <!--end::Content-->
    </div>
    <!--end::Content wrapper-->
  </div>
  <!--end:::Main-->

  <!--begin::Modals-->
  <!-- 구급대 등록   -->
  <div
    v-show="openModal[0]"
    class="modal fade"
    id="kt_modal_group_edit"
    tabindex="-1"
    aria-hidden="true"
    style=""
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>구급대 등록</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span @click="toggleModal(0)" class="svg-icon svg-icon-1">
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
        </div>
        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="table-form-layout1">
            <div class="form-head-box"></div>

            <form @submit="onSubmitFS" class="form-body-box">
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
                      <th>구급대 이름 <span class="text-primary">*</span></th>
                      <td colspan="3">
                        <div class="item-cell-box">
                          <div class="tbox w-450px">
                            <input v-model="fsForm.instNm" placeholder="구급대명 직접 입력" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>주소 <span class="text-primary">*</span></th>
                      <td colspan="3">
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select v-model="fsForm.dstrCd1" @change="getGugun(fsForm.dstrCd1)">
                              <option value="null">시/도</option>
                              <option v-for="(item, i) in cmSido" :key="i" :value="item.cdId">
                                {{ item.cdNm }}
                              </option>
                            </select>
                          </div>

                          <div class="sbox w-175px ms-3">
                            <select v-model="fsForm.dstrCd2">
                              <option value="null">구급대 선택</option>
                              <option v-for="(item, i) in cmGugun" :key="i" :value="item.cdId">
                                {{ item.cdNm }}
                              </option>
                            </select>
                          </div>

                          <div class="tbox w-450px ms-3">
                            <input
                              v-model="fsForm.detlAddr"
                              placeholder="상세주소 입력 (선택사항)"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>담당자 이름</th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="tbox w-175px full">
                            <input v-model="fsForm.chrgNm" placeholder="담당자 입력 (선택사항)" />
                          </div>
                        </div>
                      </td>
                      <th>담당자 연락처</th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="tbox w-175px full">
                            <input
                              v-model="fsForm.chrgTelno"
                              placeholder="담당자 연락처 입력 (선택사항)"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>비고</th>
                      <td colspan="3">
                        <div class="item-cell-box full">
                          <div class="textbox full">
                            <textarea
                              v-model="fsForm.rmk"
                              maxlength="500"
                              placeholder="메시지 입력"
                              style="height: 120px"
                            ></textarea>
                            <div class="limit-box">
                              <span id="textarea4">{{ fsForm.rmk.length }}</span
                              >/500자
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </article>

          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <router-link to="" @click="onSubmitFS" class="modal-menu-btn menu-primary"
                >저장</router-link
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
  <!-- 구급대 수정   -->
  <div
    v-if="fsDetail !== null"
    v-show="openModal[5]"
    class="modal fade"
    id="kt_modal_group_edit"
    tabindex="-1"
    aria-hidden="true"
    style=""
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>구급대 수정</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span @click="toggleModal(5)" class="svg-icon svg-icon-1">
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
        </div>
        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="table-form-layout1">
            <div class="form-head-box"></div>

            <form @submit="onEditFS" class="form-body-box">
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
                      <th>구급대 이름 <span class="text-primary">*</span></th>
                      <td colspan="3">
                        <div class="item-cell-box">
                          <div class="tbox w-450px">
                            <input v-model="fsDetail.instNm" placeholder="구급대명 직접 입력" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>주소 <span class="text-primary">*</span></th>
                      <td colspan="3">
                        <div class="item-cell-box">
                          <div class="sbox w-175px">
                            <select v-model="fsDetail.dstrCd1" @change="getGugun(fsDetail.dstrCd1)">
                              <option value="null">시/도</option>
                              <option v-for="(item, i) in cmSido" :key="i" :value="item.cdId">
                                {{ item.cdNm }}
                              </option>
                            </select>
                          </div>

                          <div class="sbox w-175px ms-3">
                            <select v-model="fsDetail.dstrCd2">
                              <option value="null">구/군</option>
                              <option v-for="(item, i) in cmGugun" :key="i" :value="item.cdId">
                                {{ item.cdNm }}
                              </option>
                            </select>
                          </div>

                          <div class="tbox w-450px ms-3">
                            <input
                              v-model="fsDetail.detlAddr"
                              placeholder="상세주소 입력 (선택사항)"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>담당자 이름</th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="tbox w-175px full">
                            <input v-model="fsDetail.chrgNm" placeholder="담당자 입력 (선택사항)" />
                          </div>
                        </div>
                      </td>
                      <th>담당자 연락처</th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="tbox w-175px full">
                            <input
                              v-model="fsDetail.chrgTelno"
                              placeholder="담당자 연락처 입력 (선택사항)"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>비고</th>
                      <td colspan="3">
                        <div class="item-cell-box full">
                          <div class="textbox full">
                            <textarea
                              v-model="fsDetail.rmk"
                              @input="updateCharacterCount"
                              maxlength="500"
                              placeholder="메시지 입력"
                              style="height: 120px"
                            ></textarea>
                            <div class="limit-box">
                              <span id="textarea4">{{ characterCount }}</span
                              >/500자
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </article>

          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <router-link to="" @click="onEditFS" class="modal-menu-btn menu-primary"
                >저장</router-link
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

  <!-- 구급대 상세   -->
  <div
    v-if="fsDetail !== null"
    v-show="openModal[1]"
    class="modal fade"
    id="kt_modal_group_view"
    tabindex="-1"
    aria-hidden="true"
    style=""
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>구급대 상세</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span @click="toggleModal(1)" class="svg-icon svg-icon-1">
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
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="table-form-layout1">
            <div class="form-head-box"></div>

            <div class="form-body-box">
              <div class="table-box">
                <table>
                  <colgroup>
                    <col style="width: 530px" />
                    <col style="width: 168px" />
                    <col style="width: auto" />
                    <col style="width: 168px" />
                    <col style="width: auto" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td rowspan="6" class="p-0">지도 영역</td>
                      <th>구급대 ID</th>
                      <td>{{ fsDetail.instId }}</td>
                      <th>구급대 명</th>
                      <td>{{ fsDetail.instNm }}</td>
                    </tr>
                    <tr>
                      <th>주소</th>
                      <td colspan="3">
                        {{ fsDetail.dstrCd1 + ' ' + fsDetail.dstrCd2 + ' ' + fsDetail.detlAddr }}
                      </td>
                    </tr>
                    <tr>
                      <th>담당자명</th>
                      <td>{{ fsDetail.chrgNm }}</td>
                      <th>연락처</th>
                      <td>{{ fsDetail.chrgTelno }}</td>
                    </tr>
                    <tr>
                      <th>위도,경도</th>
                      <td colspan="3">{{ fsDetail.lat + ', ' + fsDetail.lon }}</td>
                    </tr>
                    <tr>
                      <th>차량번호</th>
                      <td colspan="3">123가4567, 45노0532, 747하3366</td>
                    </tr>

                    <tr>
                      <th>비고</th>
                      <td colspan="3" style="height: 200px; vertical-align: top">
                        {{ fsDetail.rmk }}
                      </td>
                    </tr>
                  </tbody>
                </table>
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

  <!-- 구급대원 등록   -->
  <div
    v-if="fsDetail !== null"
    v-show="openModal[2]"
    class="modal fade"
    id="kt_modal_member_edit"
    tabindex="-1"
    aria-hidden="true"
    style=""
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>구급대원 등록</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span @click="toggleModal(2)" class="svg-icon svg-icon-1">
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
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="table-form-layout1">
            <div class="form-head-box"></div>

            <form @submit="onSubmitFM" class="form-body-box">
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
                      <th>구급대 주소</th>
                      <td>
                        {{ fsDetail.dstrCd1 + ' ' + fsDetail.dstrCd2 + ' ' + fsDetail.detlAddr }}
                      </td>
                      <th>구급대명</th>
                      <td>{{ fsDetail.instNm }}</td>
                    </tr>
                    <tr>
                      <th>직위</th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input v-model="fmForm.pstn" placeholder="직위 입력" />
                          </div>
                        </div>
                      </td>
                      <th>구급대원 이름 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input v-model="fmForm.crewNm" placeholder="이름 입력" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>연락처 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input v-model="fmForm.telno" placeholder="연락처 입력" />
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>비고</th>
                      <td colspan="3">
                        <div class="item-cell-box full">
                          <div class="textbox full">
                            <textarea
                              v-model="fmForm.rmk"
                              maxlength="500"
                              placeholder="메시지 입력"
                              style="height: 120px"
                            ></textarea>
                            <div class="limit-box">
                              <span id="textarea5">{{ fmForm.rmk.length }}</span
                              >/500자
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </article>

          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <router-link
                to=""
                @click="onSubmitFM(fsDetail.instId)"
                class="modal-menu-btn menu-primary"
                >저장
              </router-link>
            </div>
          </article>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!-- 구급대원 수정 -->
  <div
    v-if="fmDetail !== null && fsDetail !== null"
    v-show="openModal[3]"
    class="modal fade"
    id="kt_modal_member_edit"
    tabindex="-1"
    aria-hidden="true"
    style=""
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>구급대원 수정</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span @click="toggleModal(3)" class="svg-icon svg-icon-1">
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
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="table-form-layout1">
            <div class="form-head-box"></div>

            <form @submit="onEditFM" class="form-body-box">
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
                      <th>구급대 주소</th>
                      <td>
                        {{ fsDetail.dstrCd1 + ' ' + fsDetail.dstrCd2 + ' ' + fsDetail.detlAddr }}
                      </td>
                      <th>구급대명</th>
                      <td>{{ fsDetail.instNm }}</td>
                    </tr>
                    <tr>
                      <th>직위</th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input placeholder="직위 입력" v-model="fmDetail.pstn" />
                          </div>
                        </div>
                      </td>
                      <th>구급대원 이름 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input placeholder="이름 입력" v-model="fmDetail.crewNm" />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>연락처 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input placeholder="연락처 입력" v-model="fmDetail.telno" />
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>비고</th>
                      <td colspan="3">
                        <div class="item-cell-box full">
                          <div class="textbox full">
                            <textarea
                              v-model="fmDetail.rmk"
                              @input="updateCharacterCount"
                              maxlength="500"
                              placeholder="메시지 입력"
                              style="height: 120px"
                            ></textarea>
                            <div class="limit-box">
                              <span id="textarea5">{{ fmDetail.rmk.length }}</span
                              >/500자
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </form>
          </article>

          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <router-link to="" @click="onEditFM" class="modal-menu-btn menu-primary"
                >저장</router-link
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

  <!-- 구급대원 상세   -->
  <div
    v-if="fmDetail !== null && fsDetail !== null"
    v-show="openModal[4]"
    class="modal fade"
    id="kt_modal_member_view"
    tabindex="-1"
    aria-hidden="true"
    style=""
  >
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>구급대원 상세</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span @click="toggleModal(4)" class="svg-icon svg-icon-1">
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
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
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
                      <th>구급대 주소</th>
                      <td>{{ fsDetail.dstrCd1 + ' ' + fsDetail.dstrCd2 }}</td>
                      <th>구급대명</th>
                      <td>{{ fsDetail.instNm }}</td>
                    </tr>
                    <tr>
                      <th>직위</th>
                      <td>{{ fmDetail.pstn }}</td>
                      <th>구급대원 이름 <span class="text-primary">*</span></th>
                      <td>{{ fmDetail.crewNm }}</td>
                    </tr>
                    <tr>
                      <th>연락처 <span class="text-primary">*</span></th>
                      <td>{{ getTelno(fmDetail.telno) }}</td>
                    </tr>

                    <tr>
                      <th>비고</th>
                      <td colspan="3" style="height: 200px; vertical-align: top">
                        {{ fmDetail.rmk }}
                      </td>
                    </tr>
                  </tbody>
                </table>
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

  <!--alert창-->
  <article v-show="isAlert" class="popup popup-confirm" style="display: block">
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
            <!--                        <router-link to="" @click="alertClose" class="modal-menu-btn menu-cancel" data-type=cancel>취소</router-link>-->
            <router-link
              to=""
              @click="alertClose"
              class="modal-menu-btn menu-primary"
              data-type="success"
              >확인
            </router-link>
          </div>
        </article>
      </div>
    </div>
  </article>

  <!--end::Modals-->
</template>

<script>
import { reactive, ref } from 'vue'
import { mapState } from 'vuex'
import { getGugun, getSido, getTelno } from '@/util/ui'

export default {
  components: {},
  name: 'ListFirestatn',
  props: {
    msg: String
  },
  mounted() {},
  data() {
    return {
      content: '',
      characterCount: 0,
      search: {
        instId: null,
        instNm: null,
        dstrCd1: null,
        dstrCd2: null,
        chrgTelno: null
      },
      fsForm: {
        dstrCd1: null,
        dstrCd2: null,
        rmk: ''
      },
      fmForm: {
        rmk: ''
      },
      inputValue: null,
      statnDetail: null,
      delFMInfo: [],
      allChked: false
    }
  },
  computed: {
    ...mapState('admin', [
      'cmSido',
      'cmGugun',
      'firestatnList',
      'firemenList',
      'fsDetail',
      'fmDetail'
    ])
  },
  setup() {
    const openModal = reactive([false, false, false, false, false, false])
    const menDetail = ''
    const errMsg = ''
    const isAlert = ref(false)
    const toggleModal = function (idx) {
      console.log(openModal[idx])
      openModal[idx] = !openModal[idx]
      if (idx === 2) {
        this.fmForm = { rmk: '' }
      }
    }
    const alertOpen = function (msg, idx) {
      this.errMsg = msg
      this.isAlert = true
      return idx
    }
    const alertClose = function () {
      isAlert.value = !isAlert.value
    }
    return {
      isAlert,
      openModal,
      menDetail,
      errMsg,
      toggleModal,
      alertOpen,
      alertClose
    }
  },
  methods: {
    getSido,
    getGugun,
    getTelno,
    updateCharacterCount() {
      if (this.fsDetail.rmk === null || this.fsForm.rmk === '') {
        this.characterCount = this.content.length
      } else {
        this.characterCount = this.fsDetail.rmk.length
      }
    },
    handleChange() {
      if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(this.inputValue)) {
        this.search.instNm = this.inputValue
      } else {
        this.search.instId = this.inputValue
      }
    },
    getFS(data) {
      const request = { id: data.instId }
      this.$store.dispatch('admin/getFSDetail', request)
      this.$store.dispatch('admin/getFiremen', request)
    },
    onSubmitFS() {
      this.$store.dispatch('admin/regFS', this.fsForm)
      this.alertOpen('저장하였습니다', 0)
      this.$store.dispatch('admin/getFireStatn', this.search)
      this.toggleModal(0)
    },
    onEditFS() {
      console.log(this.fsDetail)
      this.$store.dispatch('admin/editFS', this.fsDetail)
      this.alertOpen('저장하였습니다', 1)
      this.$store.dispatch('admin/getFireStatn', this.search)
      this.toggleModal(1)
    },
    onSubmitFM(id) {
      console.log(id)
      this.fmForm.instId = id
      this.$store.dispatch('admin/regFM', this.fmForm)
      this.alertOpen('저장하였습니다', 2)
      this.$store.dispatch('admin/getFireStatn', this.search)
      this.fmForm = { rmk: '' }
      this.toggleModal(2)
    },
    onEditFM() {
      console.log(this.fmDetail)
      this.$store.dispatch('admin/editFM', this.fmDetail)
      this.alertOpen('저장하였습니다', 3)
      this.$store.dispatch('admin/getFiremen', { id: this.fmDetail.instId })
      this.toggleModal(3)
    },
    getFireStatn() {
      console.log(this.search)
      this.$store.dispatch('admin/getFireStatn', this.search)
    },
    mskData(idx, data) {
      if (idx === 0) {
        return data.slice(0, 1) + '*' + data.slice(2)
      } else {
        return data.slice(0, 3) + '-****-' + data.slice(7, 12)
      }
    },
    allChk() {
      this.firemenList.items.forEach((fm) => {
        fm.chked = this.allChked
        this.setDelInfo(fm)
      })
    },
    setDelInfo(data) {
      const info = { instId: data.instId, crewId: data.crewId }
      this.delFMInfo.push(info)
    },
    delFM() {
      this.delFMInfo.forEach((fm) => {
        this.$store.dispatch('admin/delFM', fm)
      })
      this.alertOpen('삭제하였습니다', 5)
      this.$store.dispatch('admin/getFireStatn', this.search)
    },
    handleModal(idx, data) {
      if (idx === 0) {
        console.log(idx)
        this.toggleModal(idx)
      } else if (idx === 1) {
        /*상세*/ const request = { id: data.instId }
        this.$store.dispatch('admin/getFSDetail', request)
        this.$store.dispatch('admin/getFiremen', request)
        this.toggleModal(idx)
      } else if (idx === 2) {
        /*구급대원등록*/ console.log('대원등록')
        this.toggleModal(idx)
      } else if (idx === 3) {
        /*대원수정*/ const request = { id: data.instId, crewId: data.crewId }
        this.$store.dispatch('admin/getFMDetail', request)
        this.toggleModal(idx)
      } else if (idx === 4) {
        /*대원상세*/ const request = { id: data.instId, crewId: data.crewId }
        this.$store.dispatch('admin/getFMDetail', request)
        this.toggleModal(idx)
      } else if (idx === 5) {
        /*구급대수정*/ const request = { id: data.instId }
        this.$store.dispatch('admin/getFSDetail', request)
        this.toggleModal(idx)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#kt_modal_group_edit,
#kt_modal_member_view,
#kt_modal_member_edit,
#kt_modal_group_view {
  display: inline-block;
  opacity: 100;
  --bs-modal-width: 1200px;
}
</style>
