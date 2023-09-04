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
                  사용자 관리
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
          <div class="d-flex align-items-center gap-2 gap-lg-3"></div>
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
                      <tr>
                        <th>주 담당지역 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">
                            <div class="sbox w-175px">
                              <select>
                                <option>대구광역시</option>
                                <option>서울특별시</option>
                              </select>
                            </div>

                            <div class="sbox w-175px ms-2">
                              <select>
                                <option>전체</option>
                              </select>
                            </div>

                            <div class="tbox w-500px with-btn ms-2">
                              <input type="text" placeholder="사용자 이름 또는 휴대전화번호 입력" />

                              <a href="javascript:void(0)" class="input-btn">
                                <i class="fa-solid fa-magnifying-glass"></i>
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>소속기관 유형</th>
                        <td>
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">병상배정반</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">의료진</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">보건소</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">구급대</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">전산담당</span>
                              </label>
                            </div>
                          </div>
                        </td>

                        <th>담당환자 유형</th>
                        <td>
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">투석</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">임산부</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">신생아</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">소아</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">응급실</span>
                              </label>
                            </div>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>사용자 상태</th>
                        <td colspan="3">
                          <div class="item-cell-box">
                            <div class="cbox">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">승인대기</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">반려</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">활성</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">휴면</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="state" /><i></i>
                                <span class="txt">탈퇴</span>
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
          <div class="card-body p-8">
            <!--begin::Table-->

            <article class="table-list-layout1">
              <div class="table-head-box pb-4">
                <div class="head-box">
                  <div class="head-txt-box">
                    검색결과
                    <span class="rounded-pill bg-primary text-white px-2 ms-2">{{
                      userList.length
                    }}</span>
                  </div>
                </div>

                <div class="option-box">
                  <a
                    href="#"
                    class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_view_users"
                    ><i class="fa-regular fa-trash-can"></i> 삭제</a
                  >

                  <router-link
                    to=""
                    class="btn btn-flex btn-sm btn-secondary fs-7 ms-2"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_view_users"
                    ><i class="fa-solid fa-download"></i> 엑셀다운로드</router-link
                  >

                  <a
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_reg_user"
                    class="btn btn-sm btn-flex btn-primary align-self-center px-3 ms-2"
                  >
                    <i class="fa-solid fa-plus"></i> 사용자 등록</a
                  >
                </div>
              </div>

              <div class="table-body-box">
                <div class="table-box with-scroll small">
                  <table v-if="userList !== []" class="table-layout-fixed">
                    <colgroup>
                      <col style="width: 35px" />
                      <col style="width: 50px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                      <col style="width: 100px" />
                    </colgroup>
                    <thead>
                      <tr class="small">
                        <th>
                          <div class="cbox">
                            <label> <input type="checkbox" class="all-chk" /><i></i> </label>
                          </div>
                        </th>
                        <th @click="checkInfo">순번</th>
                        <th>주 담당지역</th>
                        <th>기관유형</th>
                        <th>소속기관</th>
                        <th>이름</th>
                        <th>직급</th>
                        <th>세부권한</th>
                        <th>가입일</th>
                        <th>최근접속일</th>
                        <th>사용자상태</th>
                        <th>작업</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr v-for="(item, i) in userList" :key="i">
                        <td>
                          <div class="cbox">
                            <label> <input type="checkbox" class="all-chk" /><i></i> </label>
                          </div>
                        </td>
                        <td>{{ i + 1 }}</td>
                        <td>{{ item.dutyDstr1CdNm }}</td>
                        <td>{{ getInstNm(item.instTypeCd) }}</td>
                        <td>{{ item.instNm }}</td>
                        <td>{{ maskingNm(item.userNm) }}</td>
                        <td>{{ getJobCd(item.jobCd) }}</td>
                        <td>{{ getAuthCd(item.authCd) }}</td>
                        <td>{{ getrgDt(item.rgstDttm) }}</td>
                        <td>{{ getrgDt(item.rgstDttm) }}</td>
                        <td>{{ item.userStatCdNm }}</td>
                        <td>
                          <!--todo userInfo 정보 비교해서 띄우기? -->
                          <a
                            data-bs-toggle="modal"
                            :data-bs-target="isDetail ? getBtn(item.userStatCd)[1] : ''"
                            @click="setUsrSts(item)"
                            class="btn btn-flex btn-xs btn-outline btn-outline-primary w-75px px-0 justify-content-center"
                            >{{ getBtn(item.userStatCd)[0] }}</a
                          >
                        </td>
                      </tr>
                      <!--                                    <tr>
                                                                                <td>7</td>
                                                                                <td>
                                                                                    <div class="cbox">
                                                                                        <label>
                                                                                            <input type="checkbox" class="all-chk"><i></i>
                                                                                        </label>
                                                                                    </div>
                                                                                </td>
                                                                                <td>서울특별시</td>
                                                                                <td>보건소</td>
                                                                                <td>칠곡경북대병원</td>
                                                                                <td>김*선</td>
                                                                                <td>주임</td>
                                                                                <td>일반</td>
                                                                                <td>2022.12.31</td>
                                                                                <td>2023.02.28</td>
                                                                                <td>등록요청</td>
                                                                                <td>
                                                                                    <a href="javascript:userViewModal()"
                                                                                       class="btn btn-flex btn-xs btn-outline btn-outline-primary w-75px px-0 justify-content-center">수정</a>
                                                                                </td>
                                                                            </tr>-->
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
            <!--페이징처리-->
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
                      <router-link
                        to=""
                        aria-controls="kt_table_users"
                        data-dt-idx="0"
                        tabindex="0"
                        class="page-link"
                        ><i class="previous"></i
                      ></router-link>
                    </li>
                    <li class="paginate_button page-item active">
                      <router-link
                        to=""
                        aria-controls="kt_table_users"
                        data-dt-idx="1"
                        tabindex="0"
                        class="page-link"
                        >1</router-link
                      >
                    </li>
                    <!--                                        <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                                                          data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                                                                </li>
                                                                                <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                                                          data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                                                                </li>-->
                    <li class="paginate_button page-item next" id="kt_table_users_next">
                      <router-link
                        to=""
                        aria-controls="kt_table_users"
                        data-dt-idx="4"
                        tabindex="0"
                        class="page-link"
                        ><i class="next"></i
                      ></router-link>
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

  <!--begin::Modals-->
  <!-- 사용자등록요청   -->
  <div class="modal fade" id="kt_modal_reg_user" tabindex="-1" aria-hidden="true" style="">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-1500px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>사용자 정보 등록</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div
            @click="toggleModal(5)"
            class="btn btn-sm btn-icon btn-active-color-primary"
            data-bs-dismiss="modal"
          >
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
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
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article @submit.prevent="submitAdmin" class="table-form-layout1">
            <div class="form-head-box">
              <div class="head-box">
                <div class="head-txt-box fs-16px fw-bold pb-5">사용자 기본 정보</div>
              </div>
            </div>
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
                      <th>아이디 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" v-model="form.userId" />
                          </div>
                        </div>
                      </td>
                      <th>비밀번호 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="password" v-model="form.pw" />
                          </div>
                        </div>
                        <div v-show="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 비밀번호 유효성 확인 문구</div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>휴대폰번호 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" v-model="form.telno" />
                          </div>
                        </div>
                      </td>
                      <th>비밀번호 확인 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="password" />
                          </div>
                        </div>
                        <div v-show="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">
                            ※ 비밀번호와 비밀번호 확인 일치 확인 문구
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>이름 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" v-model="form.userNm" />
                          </div>
                        </div>
                        <div v-show="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 이름 유효성 확인 문구</div>
                        </div>
                      </td>
                      <th>생년월일 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" v-model="form.btDt" />
                          </div>
                        </div>
                        <div v-show="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 생년월일 유효성 확인 문구</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class="table-form-layout1 mt-10">
            <div class="form-head-box">
              <div class="head-box">
                <div class="head-txt-box fs-16px fw-bold pb-5">업무 역할</div>
              </div>
            </div>
            <div class="form-body-box">
              <div class="table-box">
                <table>
                  <colgroup>
                    <col style="width: 168px" />
                    <col style="width: auto" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>소속기관 유형 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="rbox">
                            <label>
                              <input type="radio" v-model="form.instTypeCd" value="ORGN0003" />
                              <i></i><span class="txt">보건소</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" v-model="form.instTypeCd" value="ORGN0001" />
                              <i></i><span class="txt">병상배정반</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" v-model="form.instTypeCd" value="ORGN0004" />
                              <i></i><span class="txt">의료진</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" v-model="form.instTypeCd" value="ORGN0002" />
                              <i></i><span class="txt">구급대</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" v-model="form.instTypeCd" value="ORGN0005" />
                              <i></i><span class="txt">전산담당</span>
                            </label>
                          </div>
                        </div>
                        <div v-show="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 소속기관 선택여부 확인 문구</div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>권한 그룹 선택 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box full">
                          <article class="permission-selector-layout">
                            <label class="selector-box">
                              <input type="radio" v-model="form.jobCd" value="PMGR0001" />
                              <div class="selector-wrap">
                                <div class="img-box">
                                  <img
                                    src="/img/common/img_permission_item1.svg"
                                    alt="이미지"
                                    class="on"
                                  />
                                  <img
                                    src="/img/common/img_permission_item1_off.svg"
                                    alt="이미지"
                                    class="off"
                                  />
                                </div>
                                <div class="info-box">
                                  <div class="main-box">병상요청그룹</div>
                                  <div class="sub-box">보건소, 병상배정반, 의료진</div>
                                </div>
                              </div>
                            </label>

                            <label class="selector-box">
                              <input type="radio" v-model="form.jobCd" value="PMGR0002" />
                              <div class="selector-wrap">
                                <div class="img-box">
                                  <img
                                    src="/img/common/img_permission_item2.svg"
                                    alt="이미지"
                                    class="on"
                                  />
                                  <img
                                    src="/img/common/img_permission_item2_off.svg"
                                    alt="이미지"
                                    class="off"
                                  />
                                </div>
                                <div class="info-box">
                                  <div class="main-box">병상승인그룹</div>
                                  <div class="sub-box">병상배정반</div>
                                </div>
                              </div>
                            </label>

                            <label class="selector-box">
                              <input type="radio" v-model="form.jobCd" value="PMGR0003" />
                              <div class="selector-wrap">
                                <div class="img-box">
                                  <img
                                    src="/img/common/img_permission_item3.svg"
                                    alt="이미지"
                                    class="on"
                                  />
                                  <img
                                    src="/img/common/img_permission_item3_off.svg"
                                    alt="이미지"
                                    class="off"
                                  />
                                </div>
                                <div class="info-box">
                                  <div class="main-box">병상배정그룹</div>
                                  <div class="sub-box">의료진</div>
                                </div>
                              </div>
                            </label>

                            <label class="selector-box">
                              <input type="radio" v-model="form.jobCd" value="PMGR0004" />
                              <div class="selector-wrap">
                                <div class="img-box">
                                  <img
                                    src="/img/common/img_permission_item4.svg"
                                    alt="이미지"
                                    class="on"
                                  />
                                  <img
                                    src="/img/common/img_permission_item4_off.svg"
                                    alt="이미지"
                                    class="off"
                                  />
                                </div>
                                <div class="info-box">
                                  <div class="main-box">시스템 관리자</div>
                                  <div class="sub-box">전산운영</div>
                                </div>
                              </div>
                            </label>
                          </article>
                        </div>
                        <div v-show="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 권한그룹 선택여부 확인 문구</div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>세부 권한 선택 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="rbox">
                            <label>
                              <input type="radio" v-model="form.authCd" value="DTPM0001" />
                              <i></i
                              ><span class="txt text-black"
                                >일반
                                <span class="fw-normal text-gray-600 ps-2"
                                  >일반 업무처리 및 사용자 초대 권한</span
                                ></span
                              >
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" v-model="form.authCd" value="DTPM0002" />
                              <i></i
                              ><span class="txt text-black"
                                >게스트
                                <span class="fw-normal text-gray-600 ps-2"
                                  >업무조회만 가능</span
                                ></span
                              >
                            </label>
                          </div>
                        </div>
                        <div v-show="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 세부권한 선택여부 확인 문구</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class="table-form-layout1 mt-10">
            <div class="form-head-box">
              <div class="head-box">
                <div class="head-txt-box fs-16px fw-bold pb-5">소속기관</div>
              </div>
            </div>
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
                      <th>담당/근무지역 <span class="text-primary">*</span></th>
                      <td colspan="3" class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="sbox w-175px">
                            <select v-model="form.dutyDstr1Cd">
                              <option>대구광역시</option>
                              <option>서울특별시</option>
                            </select>
                          </div>

                          <div class="sbox w-175px ms-2">
                            <select v-model="form.dutyDstr2Cd">
                              <option>전체</option>
                            </select>
                          </div>
                        </div>
                        <div v-show="false" class="item-cell-box full">
                          <div v-show="false" class="text-danger pt-2 fs-12px">
                            ※ 주 담당지역 선택여부 확인 문구
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>소속기관 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="sbox w-175px">
                            <select v-model="form.instId">
                              <option>국립암센터</option>
                            </select>
                          </div>
                          <div class="tbox full ms-2">
                            <input
                              type="text"
                              v-model="form.instNm"
                              placeholder="소속기관명 직접 입력"
                            />
                          </div>
                        </div>
                        <div v-show="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">
                            ※ 비밀번호와 비밀번호 확인 일치 확인 문구
                          </div>
                        </div>
                      </td>
                      <th>직급 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" v-model="form.ocpCd" />
                          </div>
                        </div>
                        <div v-show="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 직급 입력 여부 확인 문구</div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>담당환자 유형 <span class="text-primary">*</span></th>
                      <td colspan="3">
                        <div class="item-cell-box">
                          <div class="cbox">
                            <label>
                              <input
                                type="checkbox"
                                v-model="form.ptTypeCd"
                                value="PTTP0001"
                              /><i></i>
                              <span class="txt">일반</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input
                                type="checkbox"
                                v-model="form.ptTypeCd"
                                value="PTTP0002"
                              /><i></i>
                              <span class="txt">소아</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input
                                type="checkbox"
                                v-model="form.ptTypeCd"
                                value="PTTP0003"
                              /><i></i>
                              <span class="txt">투석</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input
                                type="checkbox"
                                v-model="form.ptTypeCd"
                                value="PTTP0004"
                              /><i></i>
                              <span class="txt">산모</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input
                                type="checkbox"
                                v-model="form.ptTypeCd"
                                value="PTTP0005"
                              /><i></i>
                              <span class="txt">수술</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input
                                type="checkbox"
                                v-model="form.ptTypeCd"
                                value="PTTP0006"
                              /><i></i>
                              <span class="txt">중환자</span>
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>프로필 이미지</th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <article class="img-upload-layout">
                            <div class="upload-box">
                              <label>
                                <input type="file" />
                                <span class="upload-btn-box">
                                  <img src="/img/common/img_upload_img.svg" alt="이미지" />
                                  <span class="txt">클릭하여 업로드</span>
                                </span>
                              </label>
                            </div>

                            <div class="result-list">
                              <div class="result-box d-none">
                                <div class="edit-btn-box">
                                  <label>
                                    <input type="file" />
                                    <img src="/img/common/img_upload_btn.svg" alt="이미지" />
                                  </label>
                                </div>
                                <!--
                                                            <img src="/img/common/img_profile_dummy.png" alt="이미지">
                                                            -->
                                <a
                                  href="javascript:void(0)"
                                  class="remove-btn"
                                  onclick="imgRemove(this)"
                                  ><img src="/img/common/ic_profile_remove.svg" alt="이미지"
                                /></a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </td>
                      <th>소속 증명 정보</th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <article class="img-upload-layout">
                            <div class="upload-box">
                              <label>
                                <input type="file" />
                                <span class="upload-btn-box">
                                  <img src="/img/common/img_upload_img.svg" alt="이미지" />
                                  <span class="txt">클릭하여 업로드</span>
                                </span>
                              </label>
                            </div>

                            <div class="result-list">
                              <div class="result-box">
                                <!--
                                                            <img src="/img/common/img_profile_dummy.png" alt="이미지">
                                                            -->

                                <a
                                  href="javascript:void(0)"
                                  class="remove-btn"
                                  onclick="imgRemove(this)"
                                  ><img src="/img/common/ic_profile_remove.svg" alt="이미지"
                                /></a>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">
                            ※ 빠른 승인처리를 위해 해당 기관 소속임을 증명할 수 있는 명함, 또는
                            신분증 사진을 업로드 해주세요.
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <router-link to="" @click="toggleModal(5)" class="modal-menu-btn menu-cancel"
                >취소</router-link
              >

              <router-link to="" @click="addUsrAdmin" class="modal-menu-btn menu-primary"
                >등록완료</router-link
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
  <!--사용자 수정 - -->
  <div
    v-if="usrDetail !== null"
    class="modal fade"
    id="kt_modal_edit_user"
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
          <h2>사용자 정보 수정</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
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
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <article class="table-form-layout1">
            <div class="form-head-box">
              <div class="head-box">
                <div class="head-txt-box fs-16px fw-bold pb-5">사용자 기본 정보</div>
              </div>
            </div>
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
                      <th>아이디 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" :value="usrDetail.id" readonly />
                          </div>
                        </div>
                      </td>
                      <th>비밀번호 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="password" value="" />
                          </div>
                        </div>
                        <div v-if="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 비밀번호 유효성 확인 문구</div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>휴대폰번호 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" :value="gettelno(usrDetail.telno)" />
                          </div>
                        </div>
                      </td>
                      <th>비밀번호 확인 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="password" value="" />
                          </div>
                        </div>
                        <div class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">
                            ※ 비밀번호와 비밀번호 확인 일치 확인 문구
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>이름 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" :value="usrDetail.userNm" />
                          </div>
                        </div>
                        <div v-if="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 이름 유효성 확인 문구</div>
                        </div>
                      </td>
                      <th>생년월일 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" :value="getbtDt(usrDetail.btDt)" />
                          </div>
                        </div>
                        <div v-if="false" class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 생년월일 유효성 확인 문구</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class="table-form-layout1 mt-10">
            <div class="form-head-box">
              <div class="head-box">
                <div class="head-txt-box fs-16px fw-bold pb-5">업무 역할</div>
              </div>
            </div>
            <div class="form-body-box">
              <div class="table-box">
                <table>
                  <colgroup>
                    <col style="width: 168px" />
                    <col style="width: auto" />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>소속기관 유형 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="rbox">
                            <label>
                              <input
                                type="radio"
                                name="public"
                                value="ORGN0003"
                                :checked="getInstNm(usrDetail.instTypeCd) === '보건소'"
                              />
                              <i></i><span class="txt">보건소</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input
                                type="radio"
                                name="public"
                                value="ORGN0001"
                                :checked="getInstNm(usrDetail.instTypeCd) === '지방자치단체'"
                              />
                              <i></i><span class="txt">병상배정반</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input
                                type="radio"
                                name="public"
                                value="ORGN0004"
                                :checked="getInstNm(usrDetail.instTypeCd) === '의료기관'"
                              />
                              <i></i><span class="txt">의료진</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input
                                type="radio"
                                name="public"
                                value="ORGN0002"
                                :checked="getInstNm(usrDetail.instTypeCd) === '구급대'"
                              />
                              <i></i><span class="txt">구급대</span>
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input
                                type="radio"
                                name="public"
                                value="ORGN0005"
                                :checked="getInstNm(usrDetail.instTypeCd) === '전산담당'"
                              />
                              <i></i><span class="txt">전산담당</span>
                            </label>
                          </div>
                        </div>
                        <div class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 소속기관 선택여부 확인 문구</div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>권한 그룹 선택 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box full">
                          <article class="permission-selector-layout">
                            <label class="selector-box">
                              <input
                                type="radio"
                                name="t1"
                                value="PMGR0001"
                                :checked="getPmgr === '1'"
                              />
                              <div class="selector-wrap">
                                <div class="img-box">
                                  <img
                                    src="/img/common/img_permission_item1.svg"
                                    alt="이미지"
                                    class="on"
                                  />
                                  <img
                                    src="/img/common/img_permission_item1_off.svg"
                                    alt="이미지"
                                    class="off"
                                  />
                                </div>
                                <div class="info-box">
                                  <div class="main-box">병상요청그룹</div>
                                  <div class="sub-box">보건소, 병상배정반, 의료진</div>
                                </div>
                              </div>
                            </label>

                            <label class="selector-box">
                              <input
                                type="radio"
                                name="t1"
                                value="PMGR0002"
                                :checked="getPmgr === '2'"
                              />
                              <div class="selector-wrap">
                                <div class="img-box">
                                  <img
                                    src="/img/common/img_permission_item2.svg"
                                    alt="이미지"
                                    class="on"
                                  />
                                  <img
                                    src="/img/common/img_permission_item2_off.svg"
                                    alt="이미지"
                                    class="off"
                                  />
                                </div>
                                <div class="info-box">
                                  <div class="main-box">병상승인그룹</div>
                                  <div class="sub-box">병상배정반</div>
                                </div>
                              </div>
                            </label>

                            <label class="selector-box">
                              <input
                                type="radio"
                                name="t1"
                                value="PMGR0003"
                                :checked="getPmgr === '3'"
                              />
                              <div class="selector-wrap">
                                <div class="img-box">
                                  <img
                                    src="/img/common/img_permission_item3.svg"
                                    alt="이미지"
                                    class="on"
                                  />
                                  <img
                                    src="/img/common/img_permission_item3_off.svg"
                                    alt="이미지"
                                    class="off"
                                  />
                                </div>
                                <div class="info-box">
                                  <div class="main-box">병상배정그룹</div>
                                  <div class="sub-box">의료진</div>
                                </div>
                              </div>
                            </label>

                            <label class="selector-box">
                              <input
                                type="radio"
                                name="t1"
                                value="PMGR0004"
                                :checked="getPmgr === '4'"
                              />
                              <div class="selector-wrap">
                                <div class="img-box">
                                  <img
                                    src="/img/common/img_permission_item4.svg"
                                    alt="이미지"
                                    class="on"
                                  />
                                  <img
                                    src="/img/common/img_permission_item4_off.svg"
                                    alt="이미지"
                                    class="off"
                                  />
                                </div>
                                <div class="info-box">
                                  <div class="main-box">시스템 관리자</div>
                                  <div class="sub-box">전산운영</div>
                                </div>
                              </div>
                            </label>
                          </article>
                        </div>
                        <div class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 권한그룹 선택여부 확인 문구</div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>세부 권한 선택 <span class="text-primary">*</span></th>
                      <td>
                        <div class="item-cell-box full">
                          <div class="rbox">
                            <label>
                              <input
                                type="radio"
                                name="permission"
                                :checked="getAuthCd(usrDetail.authCd) === '일반'"
                              />
                              <i></i
                              ><span class="txt text-black"
                                >일반
                                <span class="fw-normal text-gray-600 ps-2"
                                  >일반 업무처리 및 사용자 초대 권한</span
                                ></span
                              >
                            </label>
                          </div>

                          <div class="rbox ms-4">
                            <label>
                              <input
                                type="radio"
                                name="permission"
                                :checked="getAuthCd(usrDetail.authCd) === '게스트'"
                              />
                              <i></i
                              ><span class="txt text-black"
                                >게스트
                                <span class="fw-normal text-gray-600 ps-2"
                                  >업무조회만 가능</span
                                ></span
                              >
                            </label>
                          </div>
                        </div>
                        <div class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 세부권한 선택여부 확인 문구</div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class="table-form-layout1 mt-10">
            <div class="form-head-box">
              <div class="head-box">
                <div class="head-txt-box fs-16px fw-bold pb-5">소속기관</div>
              </div>
            </div>
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
                      <th>담당/근무지역 <span class="text-primary">*</span></th>
                      <td colspan="3" class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="sbox w-175px">
                            <select>
                              <option>대구광역시</option>
                              <option>서울특별시</option>
                            </select>
                          </div>

                          <div class="sbox w-175px ms-2">
                            <select>
                              <option>전체</option>
                            </select>
                          </div>
                        </div>
                        <div class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">
                            ※ 주 담당지역 선택여부 확인 문구
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>소속기관 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="sbox w-175px">
                            <select>
                              <option>국립암센터</option>
                            </select>
                          </div>
                          <div class="tbox full ms-2">
                            <input type="text" value="소속기관명 직접 입력" readonly />
                          </div>
                        </div>
                        <div class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">
                            ※ 비밀번호와 비밀번호 확인 일치 확인 문구
                          </div>
                        </div>
                      </td>
                      <th>직급 <span class="text-primary">*</span></th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" :value="usrDetail.ocpCd" />
                          </div>
                        </div>
                        <div class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">※ 직급 입력 여부 확인 문구</div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>담당환자 유형 <span class="text-primary">*</span></th>
                      <td colspan="3">
                        <div class="item-cell-box">
                          <div class="cbox">
                            <label>
                              <input type="checkbox" name="state" /><i></i>
                              <span class="txt">해당없음</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="state" /><i></i>
                              <span class="txt">투석</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="state" /><i></i>
                              <span class="txt">임산부</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="state" /><i></i>
                              <span class="txt">신생아</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="state" /><i></i>
                              <span class="txt">소아</span>
                            </label>
                          </div>

                          <div class="cbox ms-4">
                            <label>
                              <input type="checkbox" name="state" /><i></i>
                              <span class="txt">응급</span>
                            </label>
                          </div>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <th>프로필 이미지</th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <article class="img-upload-layout">
                            <div class="upload-box">
                              <label>
                                <input type="file" />
                                <span class="upload-btn-box">
                                  <img src="/img/common/img_upload_img.svg" alt="이미지" />
                                  <span class="txt">클릭하여 업로드</span>
                                </span>
                              </label>
                            </div>

                            <div class="result-list">
                              <div class="result-box d-none">
                                <div class="edit-btn-box">
                                  <label>
                                    <input type="file" />
                                    <img src="/img/common/img_upload_btn.svg" alt="이미지" />
                                  </label>
                                </div>
                                <!--
                                                            <img src="/img/common/img_profile_dummy.png" alt="이미지">
                                                            -->

                                <a
                                  href="javascript:void(0)"
                                  class="remove-btn"
                                  onclick="imgRemove(this)"
                                  ><img src="/img/common/ic_profile_remove.svg" alt="이미지"
                                /></a>
                              </div>
                            </div>
                          </article>
                        </div>
                      </td>
                      <th>소속 증명 정보</th>
                      <td class="vertical-top">
                        <div class="item-cell-box full">
                          <article class="img-upload-layout">
                            <div class="upload-box">
                              <label>
                                <input type="file" />
                                <span class="upload-btn-box">
                                  <img src="/img/common/img_upload_img.svg" alt="이미지" />
                                  <span class="txt">클릭하여 업로드</span>
                                </span>
                              </label>
                            </div>

                            <div class="result-list">
                              <div class="result-box d-none">
                                <!--
                                                            <img src="/img/common/img_profile_dummy.png" alt="이미지">
                                                            -->

                                <a
                                  href="javascript:void(0)"
                                  class="remove-btn"
                                  onclick="imgRemove(this)"
                                  ><img src="/img/common/ic_profile_remove.svg" alt="이미지"
                                /></a>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div class="item-cell-box full">
                          <div class="text-danger pt-2 fs-12px">
                            ※ 빠른 승인처리를 위해 해당 기관 소속임을 증명할 수 있는 명함, 또는
                            신분증 사진을 업로드 해주세요.
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>

          <article class="modal-menu-layout1 pt-10">
            <div class="modal-menu-list">
              <router-link to="" @click="toggleModal(0)" class="modal-menu-btn menu-cancel"
                >취소</router-link
              >

              <router-link to="" @click="editUsrInfo" class="modal-menu-btn menu-primary"
                >수정완료</router-link
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

  <!-- 상세정보-승인/반려 모달    -->
  <div
    v-if="usrDetail !== null"
    class="modal fade"
    id="kt_modal_view_user"
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
          <h2>사용자 상세 정보</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
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
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">
          <div class="tabs-head-box" style="max-width: 460px; margin: 0 auto">
            <article class="tabs-list-layout1 w-100">
              <div class="tabs-list full">
                <router-link
                  to=""
                  @click="detailTabsMove(1)"
                  class="tabs-btn"
                  :class="{ active: detail1 === true }"
                >
                  <span class="txt">개요</span>
                </router-link>

                <router-link
                  to=""
                  @click="detailTabsMove(2)"
                  class="tabs-btn"
                  :class="{ active: detail2 === true }"
                >
                  <span class="txt">접속기록</span>
                </router-link>
              </div>
            </article>
          </div>

          <div class="tabs-group flex-root">
            <div v-show="detail1" class="tabs-box">
              <article class="table-form-layout1">
                <div class="form-head-box">
                  <div class="head-box">
                    <div class="head-txt-box fs-16px fw-bold pb-5">사용자 기본 정보</div>
                  </div>
                </div>
                <div class="form-body-box">
                  <div class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 191px" />
                        <col style="width: 168px" />
                        <col style="width: auto" />
                        <col style="width: 168px" />
                        <col style="width: auto" />
                      </colgroup>
                      <tbody>
                        <tr>
                          <td rowspan="4" class="p-0">
                            <img src="" />
                          </td>
                          <th>사용자번호</th>
                          <td>사용자번호</td>
                          <th>아이디</th>
                          <td>{{ usrDetail.userId }}</td>
                        </tr>
                        <tr>
                          <th>이름</th>
                          <td>{{ usrDetail.userNm }}</td>
                          <th>휴대전화번호</th>
                          <td>{{ gettelno(usrDetail.telno) }}</td>
                        </tr>
                        <tr>
                          <th>생년월일</th>
                          <td>{{ getbtDt(usrDetail.btDt) }}</td>
                          <th>성별</th>
                          <td>{{ getGndr(usrDetail.gndr) }}</td>
                        </tr>
                        <tr>
                          <th>소셜로그인 사용</th>
                          <td colspan="3">사용</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>

              <article class="table-form-layout1 mt-10">
                <div class="form-head-box">
                  <div class="head-box">
                    <div class="head-txt-box fs-16px fw-bold pb-5">업무역할</div>
                  </div>
                </div>
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
                          <th>소속기관 유형</th>
                          <td>{{ getInstNm(usrDetail.instTypeCd) }}</td>
                          <th>직급</th>
                          <td>{{ usrDetail.ocpCd }}</td>
                        </tr>

                        <tr>
                          <th>권한그룹</th>
                          <td>
                            <div class="item-cell-box full">
                              <article class="permission-selector-layout">
                                <div class="selector-box" style="cursor: default">
                                  <div
                                    v-show="getPmgr(usrDetail.jobCd) === 1"
                                    class="selector-wrap"
                                  >
                                    <div class="img-box">
                                      <img
                                        src="/img/common/img_permission_item1.svg"
                                        alt="이미지"
                                        class="on"
                                      />
                                      <img
                                        src="/img/common/img_permission_item1_off.svg"
                                        alt="이미지"
                                        class="off"
                                      />
                                    </div>
                                    <div class="info-box">
                                      <div class="main-box">병상요청그룹</div>
                                      <div class="sub-box">보건소, 병상배정반, 의료진</div>
                                    </div>
                                  </div>
                                  <div
                                    v-show="getPmgr(usrDetail.jobCd) === 2"
                                    class="selector-wrap"
                                  >
                                    <div class="img-box">
                                      <img
                                        src="/img/common/img_permission_item2.svg"
                                        alt="이미지"
                                        class="on"
                                      />
                                      <img
                                        src="/img/common/img_permission_item2_off.svg"
                                        alt="이미지"
                                        class="off"
                                      />
                                    </div>
                                    <div class="info-box">
                                      <div class="main-box">병상승인그룹</div>
                                      <div class="sub-box">보건소, 병상배정반, 의료진</div>
                                    </div>
                                  </div>
                                  <div
                                    v-show="getPmgr(usrDetail.jobCd) === 3"
                                    class="selector-wrap"
                                  >
                                    <div class="img-box">
                                      <img
                                        src="/img/common/img_permission_item3.svg"
                                        alt="이미지"
                                        class="on"
                                      />
                                      <img
                                        src="/img/common/img_permission_item3_off.svg"
                                        alt="이미지"
                                        class="off"
                                      />
                                    </div>
                                    <div class="info-box">
                                      <div class="main-box">병상배정그룹</div>
                                      <div class="sub-box">보건소, 병상배정반, 의료진</div>
                                    </div>
                                  </div>
                                  <div
                                    v-show="getPmgr(usrDetail.jobCd) === 4"
                                    class="selector-wrap"
                                  >
                                    <div class="img-box">
                                      <img
                                        src="/img/common/img_permission_item4.svg"
                                        alt="이미지"
                                        class="on"
                                      />
                                      <img
                                        src="/img/common/img_permission_item4_off.svg"
                                        alt="이미지"
                                        class="off"
                                      />
                                    </div>
                                    <div class="info-box">
                                      <div class="main-box">시스템관리그룹</div>
                                      <div class="sub-box">보건소, 병상배정반, 의료진</div>
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </td>
                          <th>세부권한</th>
                          <td>일반</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>

              <article class="table-form-layout1 mt-10">
                <div class="form-head-box">
                  <div class="head-box">
                    <div class="head-txt-box fs-16px fw-bold pb-5">소속기관</div>
                  </div>
                </div>
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
                          <th>주 담당지역</th>
                          <td>대구광역시 전체</td>

                          <th>소속기관</th>
                          <td>칠곡경북대학교병원</td>
                        </tr>

                        <tr>
                          <th>담당환자 유형</th>
                          <td colspan="3">#투석, #임산부, #신생아</td>
                        </tr>

                        <tr>
                          <th>소속 증명 정보</th>
                          <td colspan="3">
                            <article class="img-upload-layout">
                              <div class="result-list">
                                <div class="result-box">
                                  <!--
                                                                <img src="/img/common/img_profile_dummy.png" alt="이미지">
                                                                -->
                                </div>
                              </div>
                            </article>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>

              <article class="table-form-layout1 mt-10">
                <div class="form-head-box">
                  <div class="head-box">
                    <div class="head-txt-box fs-16px fw-bold pb-5">기타정보</div>
                  </div>
                </div>
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
                          <th>사용자 상태</th>
                          <td>활성</td>

                          <th>등록일 / 최근접속일</th>
                          <td>2023-02-15 / 2023-03-11</td>
                        </tr>

                        <tr>
                          <th>승인(초대) 일자</th>
                          <td>2023.02.15</td>

                          <th>승인(초대) 일자</th>
                          <td>정현오/서울특별시/라임헬스케어/수석</td>
                        </tr>
                        <tr>
                          <th>임시비밀번호</th>
                          <td>
                            <a
                              href="javascript:confirmPopupOpen('$회원번호(회원명)$님에게<br/> 임시비밀번호를 발급하시겠습니까?',function()
                                                    {confirmPopupClose();alertPopupOpen('휴대폰으로 임시비밀번호가<br/>전송 되었습니다.');});"
                              class="btn btn-sm btn-flex btn-primary align-self-center px-3"
                              >임시비밀번호 발급</a
                            >
                          </td>

                          <th>사용자 탈퇴처리</th>
                          <td>
                            <router-link
                              to=""
                              @click="toggleModal(2)"
                              class="btn btn-sm btn-flex btn-primary align-self-center px-3"
                              >탈퇴처리</router-link
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>

              <article class="modal-menu-layout1 pt-10">
                <div class="modal-menu-list">
                  <router-link to="" @click="toggleModal(1)" class="modal-menu-btn menu-cancel"
                    >취소</router-link
                  >
                  <a
                    @click="test()"
                    data-bs-toggle="modal"
                    data-bs-target="#kt_modal_edit_user"
                    class="modal-menu-btn menu-primary-outline"
                    >수정</a
                  >
                  <router-link
                    v-show="usrDetail.userStatCd === 'URST0001'"
                    to=""
                    @click="toggleModal(4)"
                    class="modal-menu-btn menu-primary"
                    >승인/반려</router-link
                  >
                </div>
              </article>
            </div>

            <div v-show="detail2" class="tabs-box">
              <div class="d-flex pt-6">
                <div class="table-wrap">
                  <article class="table-list-layout1">
                    <div class="table-head-box pb-4">
                      <div class="head-box">
                        <div class="head-txt-box">1. 사용자 상태 변경 이력</div>
                      </div>
                    </div>

                    <div class="table-body-box">
                      <div class="table-box with-scroll small">
                        <table class="table-layout-fixed">
                          <colgroup>
                            <col style="width: 70px" />
                            <col style="width: 100px" />
                            <col style="width: 100px" />
                            <col style="width: 100px" />
                          </colgroup>
                          <thead>
                            <tr class="small">
                              <th>순번</th>
                              <th>작업</th>
                              <th>처리자</th>
                              <th>일자</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>7</td>
                              <td>비밀번호 재발급</td>
                              <td>본인</td>
                              <td>2023.07.01</td>
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
                </div>

                <div class="table-wrap ms-8">
                  <article class="table-list-layout1">
                    <div class="table-head-box pb-4">
                      <div class="head-box">
                        <div class="head-txt-box">2. 로그인 이력</div>
                      </div>
                    </div>

                    <div class="table-body-box">
                      <div class="table-box with-scroll small">
                        <table class="table-layout-fixed">
                          <colgroup>
                            <col style="width: 70px" />
                            <col style="width: 100px" />
                            <col style="width: 150px" />
                            <col style="width: 100px" />
                          </colgroup>
                          <thead>
                            <tr class="small">
                              <th>순번</th>
                              <th>IP</th>
                              <th>장치</th>
                              <th>일자</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>7</td>
                              <td>207.46.34.110</td>
                              <td>Chome - Windows</td>
                              <td>2023.07.01</td>
                            </tr>
                            <tr>
                              <td>7</td>
                              <td>207.46.34.110</td>
                              <td>Chome - Windows</td>
                              <td>2023.07.01</td>
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
                </div>

                <div class="table-wrap ms-8">
                  <article class="table-list-layout1">
                    <div class="table-head-box pb-4">
                      <div class="head-box">
                        <div class="head-txt-box">3. 활동 로그</div>
                      </div>
                    </div>

                    <div class="table-body-box">
                      <div class="table-box with-scroll small">
                        <table class="table-layout-fixed">
                          <colgroup>
                            <col style="width: 70px" />
                            <col style="width: 100px" />
                            <col style="width: 300px" />
                            <col style="width: 100px" />
                          </colgroup>
                          <thead>
                            <tr class="small">
                              <th>순번</th>
                              <th>STATUS</th>
                              <th>URL</th>
                              <th>일자</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>7</td>
                              <td>200</td>
                              <td class="left">/api/v1/hospitals</td>
                              <td>2023.07.01</td>
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>

  <!--탈퇴 팝업창-->
  <article v-show="isWithdraw" class="popup popup-leave" style="">
    <div class="popup-wrapper">
      <div class="popup-contents">
        <div class="popup-head-box py-5 px-10">
          <div class="head-tit-box">사용자 탈퇴 처리</div>

          <div @click="toggleModal(2)" class="head-option-box">
            <router-link to="" class="popup-close-btn">
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
            </router-link>
          </div>
        </div>

        <div class="popup-body-box py-5 px-10">
          <div class="d-flex flex-column pb-6">
            <div class="fw-medium fs-16px text-black pb-4 fw-bold">활동 내역</div>

            <div class="text-gray-600">
              - 병상요청 : 2건<br />
              - 배정승인 : 2건<br />
              - 이송 : 0건<br />
              - 입원 : 0건
            </div>
          </div>

          <div>
            <div class="fw-medium fs-16px text-black pb-4 fw-bold">탈퇴처리 사유 입력</div>

            <div>
              <div class="textbox">
                <textarea
                  v-model="content"
                  @input="updateCharacterCount"
                  maxlength="500"
                  placeholder="메시지 입력"
                  style="height: 120px"
                ></textarea>
                <div class="limit-box">
                  <span>{{ characterCount }}</span
                  >/500자
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="popup-foot-box py-5 px-10">
          <article class="modal-menu-layout1">
            <div class="modal-menu-list">
              <router-link to="" @click="toggleModal(2)" class="modal-menu-btn menu-cancel"
                >닫기</router-link
              >

              <router-link to="" @click="toggleModal(3)" class="modal-menu-btn menu-primary"
                >저장</router-link
              >
            </div>
          </article>
        </div>
      </div>
    </div>
  </article>

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
              >확인</router-link
            >
          </div>
        </article>
      </div>
    </div>
  </article>

  <article v-show="isAlertWd" class="popup popup-confirm" style="display: block">
    <div class="popup-wrapper">
      <div class="popup-contents py-10 px-10" style="width: 300px">
        <article class="modal-alert-layout pb-10">
          <div class="alert-view-box pb-6">
            <img src="/img/common/ic_alert.svg" alt="이미지" />
          </div>
          <div class="alert-msg-box">{{ this.msgUsr }}</div>
        </article>
        <article class="modal-menu-layout1">
          <div class="modal-menu-list">
            <router-link
              to=""
              @click="setWdOrAprv(usrDetail.userId, num, 1)"
              class="modal-menu-btn menu-cancel"
              data-type="cancel"
              >취소</router-link
            >
            <router-link
              to=""
              @click="setWdOrAprv(usrDetail.userId, num, 0)"
              class="modal-menu-btn menu-primary"
              data-type="success"
              >확인</router-link
            >
          </div>
        </article>
      </div>
    </div>
  </article>

  <!--end::Modals-->
</template>

<script>
import { mapState } from 'vuex'
import { ref } from 'vue'
import { getAuthCd } from '@/util/ui'
export default {
  components: {},
  computed: {
    ...mapState('admin', ['userList', 'usrDetail'])
  },
  mounted() {},
  data() {
    return {
      content: '',
      characterCount: 0,
      form: {
        userId: '',
        pw: '',
        userNm: '',
        telno: '',
        jobCd: '',
        ocpCd: '',
        ptTypeCd: [],
        instTypeCd: '',
        instId: '',
        instNm: '',
        dutyDstr1Cd: '',
        dutyDstr2Cd: '',
        attcId: '',
        btDt: '',
        authCd: ''
      }
    }
  },
  setup() {
    const addUsr = ref(false)
    const isEdit = ref(false)
    const isAlert = ref(false)
    const errMsg = ''
    const msgUsr = ''
    const num = null
    const isWithdraw = ref(false)
    const isAlertWd = ref(false)
    const isAdd = ref(false)
    const isDetail = ref(true)
    const detail1 = ref(true)
    const detail2 = ref(false)
    const alertOpen = function (msg, idx) {
      this.errMsg = msg
      this.isAlert = true
      return idx
    }
    const alertClose = function () {
      isAlert.value = !isAlert.value
    }
    const toggleModal = function (num) {
      if (num === 0) {
        console.log(num)
      } else if (num === 1) {
        isDetail.value = !isDetail.value
      } else if (num === 2) {
        isDetail.value = false
        isWithdraw.value = !isWithdraw.value
      } else if (num === 3) {
        this.msgUsr = '탈퇴 후 동일한 ID를 이용한\n재가입은 불가능 합니다.\n정말 탈퇴하시겠습니까?'
        this.num = 3
        isAlertWd.value = !isAlertWd.value
      } else if (num === 4) {
        this.msgUsr = '선택하신 사용자 상태로\n적용하시겠습니까?'
        this.num = 4
        isAlertWd.value = !isAlertWd.value
      } else {
        isAdd.value = !isAdd.value
      }
    }
    return {
      addUsr,
      isEdit,
      isAlert,
      errMsg,
      msgUsr,
      num,
      isWithdraw,
      isAlertWd,
      isAdd,
      isDetail,
      detail1,
      detail2,
      alertOpen,
      alertClose,
      toggleModal
    }
  },
  methods: {
    updateCharacterCount() {
      this.characterCount = this.content.length
    },
    checkInfo() {
      console.log(this.$store.state.userList)
    },
    getDutyDstrCd(code) {
      this.$store.dispatch('admin/getDutyDstr', code)
    },
    getInstNm(code) {
      if (code === 'ORGN0001') {
        return '지방자치단체'
      } else if (code === 'ORGN0002') {
        return '구급대'
      } else if (code === 'ORGN0003') {
        return '보건소'
      } else if (code === 'ORGN0004') {
        return '의료기관'
      } else {
        return '전산담당'
      }
    },
    getAuthCd,
    getrgDt(str) {
      const date = new Date(str)
      const year = date.getFullYear()
      const month = String(date.getMonth() + 1).padStart(2, '0')
      const day = String(date.getDate()).padStart(2, '0')
      return `${year}.${month}.${day}`
    },
    getbtDt(dt) {
      const year = dt.substring(0, 4)
      const month = dt.substring(4, 6)
      const day = dt.substring(6)
      return `${year}-${month}-${day}`
    },
    gettelno(num) {
      const num1 = num.substring(0, 3)
      const num2 = num.substring(3, 7)
      const num3 = num.substring(7)
      return `${num1}-${num2}-${num3}`
    },
    getGndr(str) {
      if (str === 'M') {
        return '남'
      } else return '여'
    },
    getPmgr(code) {
      if (code === 'PMGR0001') {
        return 1
      } else if (code === 'PMGR0002') {
        return 2
      } else if (code === 'PMGR0003') {
        return 3
      } else if (code === 'PMGR0004') {
        return 4
      }
    },
    getJobCd(code) {
      if (code === 'PMGR0001') {
        return '병상요청그룹'
      } else if (code === 'PMGR0002') {
        return '병상승인그룹'
      } else if (code === 'PMGR0003') {
        return '병상배정그룹'
      } else if (code === 'PMGR0004') {
        return '시스템관리자'
      } else {
        return code
      }
    },
    maskingNm(nm) {
      return nm
    },
    getBtn(sts) {
      if (sts === 'URST0001') {
        return ['승인/반려', '#kt_modal_view_user']
      } else {
        return ['수정', '#kt_modal_edit_user']
      }
    },
    setUsrSts(data) {
      if (data.userStatCd === 'URST0001') {
        this.$store.dispatch('admin/getUserInfo', data.userId)
        this.isDetail = true
      } else {
        this.$store.dispatch('admin/getUserInfo', data.userId)
        this.isDetail = true
      }
    },
    detailTabsMove(num) {
      if (num === 1) {
        this.detail1 = true
        this.detail2 = false
        return true
      } else {
        this.detail2 = true
        this.detail1 = false
        return true
      }
    },
    setWdOrAprv(id, num, idx) {
      if (num === 3) {
        if (idx === 0) {
          this.delUsr(id)
        } else {
          this.toggleModal(3)
        }
      } else {
        if (idx === 0) {
          this.aprvUsr(id)
        } else {
          this.toggleModal(4)
        }
      }
    },
    delUsr(id) {
      if (this.characterCount !== 0) {
        console.log(id)
        /*todo 탈퇴 확인하려면 주석해제*/
        //this.$store.dispatch('admin/delUsr',id)
        this.isAlertWd = false
        this.alertOpen('회원탈퇴 되었습니다.')
        this.isWithdraw = false
      } else {
        this.isAlertWd = false
        this.alertOpen('회원탈퇴 사유를\n' + '입력해 주세요')
      }
    },
    aprvUsr(id) {
      console.log(id)
      /*todo 승인 확인하려면 주석해제*/
      //this.$store.dispatch('admin/aprvUsr',id)
      this.isAlertWd = false
      this.alertOpen('적용 되었습니다.')
      this.isWithdraw = false
    },
    editUsrInfo() {
      this.alertOpen('사용자를 등록하였습니다')
    },
    submitAdmin() {
      /*vuex에 등록됐는지 확인하고 사용자 등록됐다는 알림창 띄우기*/
    },
    addUsrAdmin() {
      this.$store.dispatch('admin/regUsr', this.form)
    },
    test() {
      console.log('test')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.modal {
  --bs-modal-width: 98%;
}
</style>
