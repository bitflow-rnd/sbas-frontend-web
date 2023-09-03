<template>
  <!--begin::Header-->
  <div id="kt_app_header" class="app-header" data-kt-sticky="true" data-kt-sticky-activate="{default: false, lg: true}"
       data-kt-sticky-name="app-header-sticky" data-kt-sticky-offset="{default: false, lg: '300px'}">
    <!--begin::Header container-->
    <div class="app-container container-fluid d-flex align-items-stretch justify-content-between"
         id="kt_app_header_container">
      <!--begin::Header logo-->
      <div class="app-header-logo d-flex align-items-center">
        <!--begin::Mobile toggle-->
        <div class="btn btn-icon btn-color-gray-500 btn-active-color-primary w-35px h-35px ms-n2 me-2 d-flex d-lg-none"
             id="kt_app_header_menu_toggle">
          <!--begin::Svg Icon | path: icons/duotune/abstract/abs015.svg-->
          <span class="svg-icon svg-icon-2">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z"
                      fill="currentColor"/>
								<path opacity="0.3"
                      d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z"
                      fill="currentColor"/>
							</svg>
						</span>
          <!--end::Svg Icon-->
        </div>
        <!--end::Mobile toggle-->
        <!--begin::Logo image-->
        <router-link to="/dashbd">
          <img alt="Logo" src="/img/logos/title-bar.webp" class="theme-light-show"/>
          <img alt="Logo" src="/img/logos/demo44-dark.svg" class="h-25px theme-dark-show"/>
        </router-link>
        <!--end::Logo image-->
      </div>
      <!--end::Header logo-->
      <!--begin::Header wrapper-->
      <div class="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
        <!--begin::Menu wrapper-->
        <div class="d-flex align-items-stretch" id="kt_app_header_menu_wrapper">
          <!--begin::Menu-->
          <div
              class="menu menu-top-rounded menu-column menu-lg-row menu-active-bg menu-title-gray-600 menu-state-dark menu-arrow-gray-400 fw-semibold fw-semibold fs-6 align-items-stretch my-5 my-lg-0 px-2 px-lg-0"
              id="kt_app_header_menu" data-kt-menu="true">
            <!--begin:Menu item-->
            <router-link to="/dashbd" @click="setActive(0)"
                         :class="{'here': selectedTabIdx === 0}"
                         class="menu-item me-0 me-lg-1">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">상황판</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <router-link to="" @click="handlefunc(getBdList,1)"
                         :class="{'here': selectedTabIdx === 1}"
                         class="menu-item me-0 me-lg-1">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">병상배정</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <router-link to="/user/patnt/list" @click="handlefunc(getPtList,2)"
                         :class="{'here': selectedTabIdx === 2}"
                         class="menu-item me-0 me-lg-1">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">환자관리</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <router-link to="/user/cntc/list" @click="handlefunc(getUsersList,3)"
                         :class="{'here': selectedTabIdx === 3}"
                         class="menu-item me-0 me-lg-1">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">연락처/메시지</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <router-link to="/user/svrt/dashbd" @click="setActive(4)"
                         class="menu-item me-0 me-lg-1"
                         :class="{'here': selectedTabIdx === 4}">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">중증환자모니터링</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
            <!--begin:Menu item-->
            <router-link to="" @click="handlefunc(getUserList,5)"
                         :class="{'here': selectedTabIdx === 5}"
                         class="menu-item me-0 me-lg-1">
              <!--begin:Menu link-->
              <span class="menu-link">
                <span class="menu-title">시스템관리</span>
              </span>
              <!--end:Menu link-->
            </router-link>
            <!--end:Menu item-->
          </div>
          <!--end::Menu-->
        </div>
        <!--end::Menu wrapper-->

        <!--begin::Navbar-->
        <div class="app-navbar flex-shrink-0">

          <div class="app-navbar-item" id="kt_app_header_middle_wrapper">
            <a href="#" class="btn btn-flex btn-sm btn-danger my-auto fs-5"><i
                class="fa-solid fa-triangle-exclamation fs-4"></i> 병상요청</a>
          </div>

          <!--begin::User menu-->
          <div class="app-navbar-item" id="kt_header_user_menu_toggle">
            <!--begin::Menu wrapper-->
            <div class="cursor-pointer symbol symbol-35px symbol-md-40px"
                 data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
                 data-kt-menu-placement="bottom-end">
              <img class="symbol symbol-35px symbol-md-40px" data-kt-menu-trigger="{default: 'click', lg: 'hover'}"
                   data-kt-menu-attach="parent" data-kt-menu-placement="bottom-end"
                   src="/img/avatars/ic-user-default.svg" alt="user"/>
            </div>
            <!--begin::User account menu-->
            <div
                class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-color fw-semibold py-4 fs-6 w-275px"
                data-kt-menu="true">
              <!--begin::Menu item-->
              <div class="menu-item px-3">
                <div class="menu-content d-flex align-items-center px-3">
                  <!--begin::Avatar-->
                  <div class="symbol symbol-50px me-5">
                    <img alt="Logo" src="/img/avatars/ic-user-default.svg"/>
                  </div>
                  <!--end::Avatar-->
                  <!--begin::Username-->
                  <div class="d-flex flex-column">
                    <div class="fw-bold d-flex align-items-center fs-3">{{ userInfo.userNm }}
                      <span class="badge badge-light-success fw-bold fs-5 px-2 py-1 ms-2">{{ userInfo.ocpCd }}</span>
                    </div>
                    <a class="fw-semibold text-muted text-hover-primary fs-5">{{ userInfo.id }}</a>
                  </div>
                  <!--end::Username-->
                </div>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu separator-->
              <div class="separator my-2"></div>
              <!--end::Menu separator-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <a href="" data-bs-toggle="modal" data-bs-target="#kt_modal_user_profile_view" class="menu-link px-5">내
                  정보</a>
              </div>
              <!--end::Menu item-->
              <!--begin::Menu item-->
              <div class="menu-item px-5">
                <router-link to="/" class="menu-link px-5">로그아웃</router-link>
              </div>
              <!--end::Menu item-->
            </div>
            <!--end::User account menu-->
            <!--end::Menu wrapper-->
          </div>
          <!--end::User menu-->

          <!--begin::Activities-->
          <div class="app-navbar-item ms-3 d-none d-xxl-flex">
            <!--begin::Drawer toggle-->
            <div class="h-35px h-md-40px" id="kt_activities_toggle">
              <p>{{ userInfo.userNm }} {{ userInfo.ocpCd }}</p>
              <p class="text-truncate">{{ userInfo.instNm }}</p>
            </div>
            <!--end::Drawer toggle-->
          </div>
          <!--end::Activities-->

          <!--begin::Notifications-->
          <div class="app-navbar-item ms-3 ms-lg-4">
            <!--begin::Menu- wrapper-->
            <div class="btn btn-icon btn-custom w-35px h-35px w-md-40px h-md-40px position-relative"
                 data-kt-menu-trigger="{default: 'click', lg: 'hover'}" data-kt-menu-attach="parent"
                 data-kt-menu-placement="bottom-end">
              <i class="fa-regular fa-bell"></i>
              <span
                  class="d-none position-absolute top-0 start-100 translate-middle badge badge-sm rounded-pill mt-3 bg-primary">99+</span>
            </div>
            <!--end::Menu wrapper-->
          </div>
          <!--end::Notifications-->

        </div>
        <!--end::Navbar-->
      </div>
      <!--end::Header wrapper-->
    </div>
    <!--end::Header container-->
  </div>
  <!--end::Header-->
  <!--  내 정보   -->
  <!--begin::Modals-->

  <!--begin::Modal - 내정보-->
  <div v-if="userInfo!==null" class="modal fade" id="kt_modal_user_profile_view" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-750px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>내 정보</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1" data-bs-dismiss="modal">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)"
                        fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                        fill="currentColor"></rect>
								</svg>
							</span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">

          <article class="modal-profile-layout1">

            <div class="profile-card-box">
              <div class="profile-view-box">
                <img src="@/assets/img/img-hosp-def.jpg" alt="이미지">
              </div>
              <div class="profile-info-box">

                <div class="row">
                  <div class="subject-box">아이디</div>
                  <div class="con-box">{{ userInfo.updtUserId }}</div>

                  <a href="#none" class="profile-btn">
                    <img src="/img/common/img_profile_default.svg" alt="이미지">
                  </a>

                </div>

                <div class="row">
                  <div class="subject-box">이름</div>
                  <div class="con-box">{{ userInfo.userNm }}</div>
                </div>

                <div class="row">
                  <div class="subject-box">휴대폰번호</div>
                  <div class="con-box">{{ getTelno(userInfo.telno) }}</div>
                </div>
              </div>
            </div>

            <div class="profile-table-box pt-8">

              <article class="table-form-layout1">

                <div class="form-head-box"></div>

                <div class="form-body-box">

                  <div class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px;">
                        <col style="width: auto;">
                      </colgroup>
                      <tr>
                        <th>주 담당지역</th>
                        <td>{{ userInfo.dutyDstr1Cd }} {{ userInfo.dutyDstr2Cd }}</td>
                      </tr>

                      <tr>
                        <th>소속기관 유형</th>
                        <td>{{ userInfo.jobCd }}</td>
                      </tr>

                      <tr>
                        <th>소속기관</th>
                        <td>{{ userInfo.instNm }}</td>
                      </tr>

                      <tr>
                        <th>권한그룹</th>
                        <td>{{ getPmgr(userInfo.jobCd) }}</td>
                      </tr>

                      <tr>
                        <th>세부권한</th>
                        <td>{{ getAuthCd(userInfo.authCd) }}</td>
                      </tr>

                      <tr>
                        <th>직급</th>
                        <td>{{ userInfo.ocpCd }}</td>
                      </tr>

                      <tr>
                        <th>담당환자 유형</th>
                        <td>{{ getptType(userInfo.ptTypeCd) }}</td>
                      </tr>

                    </table>
                  </div>
                </div>

              </article>

            </div>

          </article>

        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - 내정보-->

  <!--begin::Modal - 내정보 수정 -->
  <div v-if="userInfo!==null" class="modal fade" id="kt_modal_user_profile_modify" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-750px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>내 정보</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)"
                        fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                        fill="currentColor"></rect>
								</svg>
							</span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">

          <article class="modal-profile-layout1">

            <div class="profile-card-box">

              <div class="profile-edit-box">
                <img src="/img/common/img_profile_dummy.png" alt="이미지">

                <div class="upload-box">
                  <label>
                    <input type="file">
                    <img src="/img/common/ic_profile_upload.svg" alt="이미지">
                  </label>
                </div>

                <a href="javascript:profileImgRemove()" class="remove-btn"><img src="/img/common/ic_profile_remove.svg"
                                                                                alt="이미지"></a>
              </div>
              <div class="profile-info-box">

                <div class="row">
                  <div class="subject-box">아이디</div>
                  <div class="con-box">{{ userInfo.updtUserId }}</div>
                </div>

                <div class="row">
                  <div class="subject-box">이름</div>
                  <div class="con-box">{{ userInfo.userNm }}</div>
                </div>

                <div class="row">
                  <div class="subject-box">휴대폰번호</div>
                  <div class="con-box">{{ getTelno(userInfo.telno) }}</div>
                </div>
              </div>

              <div class="profile-note-box text-danger ">* 승인 필요 항목</div>
            </div>

            <div class="profile-table-box pt-8">
              <article class="table-form-layout1">

                <div class="form-head-box"></div>

                <div class="form-body-box">

                  <div class="table-box">
                    <table>
                      <colgroup>
                        <col style="width: 168px;">
                        <col style="width: auto;">
                      </colgroup>
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
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>소속기관 유형 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">

                            <div class="rbox">
                              <label>
                                <input type="radio" name="belong"><i></i>
                                <span class="txt">보건소</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong"><i></i>
                                <span class="txt">병상배정반</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong"><i></i>
                                <span class="txt">의료진</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong"><i></i>
                                <span class="txt">구급대</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="belong"><i></i>
                                <span class="txt">전산담당</span>
                              </label>
                            </div>

                          </div>

                        </td>
                      </tr>

                      <tr>
                        <th>소속기관 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">
                            <div class="sbox w-175px">
                              <select>
                                <option>중구 보건소</option>
                              </select>
                            </div>

                            <div class="tbox w-175px ms-2">
                              <input type="text" readonly placeholder="기관명 입력">
                            </div>
                          </div>

                        </td>
                      </tr>

                      <tr>
                        <th>권한그룹 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">

                            <div class="cbox">
                              <label>
                                <input type="checkbox" name="permission"><i></i>
                                <span class="txt">병상요청</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="permission"><i></i>
                                <span class="txt">병상승인</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="permission"><i></i>
                                <span class="txt">병상배정</span>
                              </label>
                            </div>

                            <div class="cbox ms-4">
                              <label>
                                <input type="checkbox" name="permission"><i></i>
                                <span class="txt">시스템관리</span>
                              </label>
                            </div>

                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>세부권한 <span class="text-primary">*</span></th>
                        <td>
                          <div class="item-cell-box">

                            <div class="rbox">
                              <label>
                                <input type="radio" name="role"><i></i>
                                <span class="txt">일반</span>
                              </label>
                            </div>

                            <div class="rbox ms-4">
                              <label>
                                <input type="radio" name="role"><i></i>
                                <span class="txt">게스트</span>
                              </label>
                            </div>

                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>직급</th>
                        <td>
                          <div class="tbox w-175px">
                            <input type="text">
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <th>담당환자 유형</th>
                        <td>
                          <article class="check-list-layout1">
                            <div class="list-box">
                              <div class="item-box d-inline-flex flex-center justify-content-center">
                                <label>
                                  <input type="checkbox">
                                  <span class="txt">#투석</span>
                                </label>
                              </div>
                              <div class="item-box">
                                <label>
                                  <input type="checkbox">
                                  <span class="txt">#임산부</span>
                                </label>
                              </div>
                              <div class="item-box">
                                <label>
                                  <input type="checkbox">
                                  <span class="txt">#신생아</span>
                                </label>
                              </div>
                              <div class="item-box">
                                <label>
                                  <input type="checkbox">
                                  <span class="txt">#응급</span>
                                </label>
                              </div>

                            </div>

                          </article>

                        </td>

                      </tr>

                    </table>

                  </div>

                </div>

                <div class="table-foot-box mt-10">

                  <article class="modal-menu-layout1">

                    <div class="modal-menu-list">
                      <a href="#none" class="modal-menu-btn menu-cancel" data-bs-dismiss="modal">취소</a>
                      <a href="#none" class="modal-menu-btn menu-primary ms-4">수정완료</a>
                    </div>

                  </article>

                </div>

              </article>

            </div>

          </article>

        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - 내정보 수정 -->

  <!--begin::Modal - 내정보 휴대폰번호 변경 -->
  <div class="modal fade" id="kt_modal_user_phone" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-550px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>휴대폰번호 변경</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)"
                        fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                        fill="currentColor"></rect>
								</svg>
							</span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->

        <div class="modal-body scroll-y py-10 px-10">

          <article class="modal-head-layout1">

            <div class="modal-head-box pb-12">
              <div class="head-box">휴대폰번호 변경</div>
              <div class="sub-box">변경하실 휴대폰번호로 인증을 진행해 주세요.</div>

            </div>

          </article>


          <article class="table-form-layout1">

            <div class="form-head-box"></div>

            <div class="form-body-box">

              <div class="table-box">
                <table>
                  <colgroup>
                    <col style="width: 168px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tr>
                    <th>휴대폰번호 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box">
                          <div class="tbox full">
                            <input type="text" placeholder="휴대폰번호 입력">
                          </div>
                          <a href="javascript:phoneCertify();" class="btn btn-sm btn-primary h-30px ms-3 certify-btn"
                             style="min-width: 103px;">인증번호 발송</a>

                        </div>
                      </div>

                      <div class="item-row-box mt-3">
                        <div class="item-note-box">* 유효성 검사 문구</div>
                      </div>

                    </td>
                  </tr>

                  <tr class="certify-row" style="display: none;">
                    <th>인증번호 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box">
                          <div class="tbox full">
                            <input type="text" placeholder="인증번호 6자리">
                          </div>

                          <div class="timer-box ms-3 text-danger" style="min-width: 103px">유효시간: <span class="timer">02:59</span>
                          </div>

                        </div>
                      </div>
                    </td>
                  </tr>

                </table>

              </div>

            </div>

            <div class="table-foot-box mt-10">

              <article class="modal-menu-layout1">

                <div class="modal-menu-list">
                  <a href="javascript:alertPopupOpen('메시지 입력')" class="modal-menu-btn menu-primary">변경완료</a>
                </div>

              </article>

            </div>

          </article>

        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - 내정보 수정 -->

  <!--begin::Modal - 사용자 초대 -->
  <div class="modal fade" id="kt_modal_user_invite" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-550px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>사용자 초대</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)"
                        fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                        fill="currentColor"></rect>
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
                    <col style="width: 168px;">
                    <col style="width: auto;">
                  </colgroup>
                  <tr>
                    <th>이름 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" placeholder="휴대폰번호 입력">
                          </div>
                        </div>
                      </div>

                      <div class="item-row-box mt-3">
                        <div class="item-note-box">* 이름은 필수 입력입니다</div>
                      </div>

                    </td>
                  </tr>

                  <tr>
                    <th>휴대폰번호 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box full">
                          <div class="tbox full">
                            <input type="text" placeholder="휴대폰번호를 입력해주세요.">
                          </div>
                        </div>
                      </div>

                      <div class="item-row-box mt-3">
                        <div class="item-note-box">* 숫자만 입력 해주세요</div>
                      </div>

                    </td>
                  </tr>

                  <tr>
                    <th>내 조직으로 초대 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box full">

                          <div class="rbox">
                            <label>
                              <input type="radio" name="invite" checked><i></i>
                              <span class="txt text-black">내 조직</span>
                            </label>
                          </div>
                          <div class="rbox ms-4">
                            <label>
                              <input type="radio" name="invite"><i></i>
                              <span class="txt text-black">내 조직</span>
                            </label>
                          </div>
                        </div>
                      </div>

                      <div class="item-row-box mt-3">
                        <div class="item-note-box">* 숫자만 입력 해주세요</div>
                      </div>

                    </td>
                  </tr>

                  <tr>
                    <th>내 조직으로 초대 <span class="text-primary">*</span></th>
                    <td>
                      <div class="item-row-box">
                        <div class="item-cell-box">
                          <div class="rbox">
                            <label>
                              <input type="radio" name="role" checked><i></i>
                              <span class="txt text-black">일반</span>
                            </label>
                          </div>

                          <div class="item-alarm-box ms-6">일반 업무처리 및 사용자 초대 권한</div>
                        </div>

                      </div>

                      <div class="item-row-box mt-2">
                        <div class="item-cell-box">
                          <div class="rbox">
                            <label>
                              <input type="radio" name="role" checked><i></i>
                              <span class="txt text-black">게스트</span>
                            </label>
                          </div>

                          <div class="item-alarm-box ms-6">업무조회만 가능</div>

                        </div>

                      </div>

                    </td>
                  </tr>

                </table>

              </div>

            </div>

            <div class="table-foot-box mt-10">

              <article class="modal-menu-layout1">

                <div class="modal-menu-list">
                  <a href="javascript:void(0)" class="modal-menu-btn menu-primary">초대전송</a>
                </div>

              </article>

            </div>

          </article>

        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - 내정보 수정 -->

  <!--begin::Modal - 사용자 승인 처리 -->
  <div class="modal fade" id="kt_modal_user_approval" tabindex="-1" aria-hidden="true">
    <!--begin::Modal dialog-->
    <div class="modal-dialog mw-550px modal-dialog-centered">
      <!--begin::Modal content-->
      <div class="modal-content">
        <!--begin::Modal header-->
        <div class="modal-header px-10 py-5 d-flex justify-content-between">
          <!--begin::Modal title-->
          <h2>승인 처리</h2>
          <!--end::Modal title-->
          <!--begin::Close-->
          <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-1">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1"
                      transform="rotate(-45 6 17.3137)" fill="currentColor"></rect>
                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                      fill="currentColor"></rect>
              </svg>
            </span>
            <!--end::Svg Icon-->
          </div>
          <!--end::Close-->
        </div>

        <!--begin::Modal header-->
        <!--begin::Modal body-->
        <div class="modal-body scroll-y py-10 px-10">

          <article class="table-form-layout2">

            <div class="form-head-box"></div>

            <div class="form-body-box">

              <div class="row">

                <div class="subject-box">승인/반려 여부</div>
                <div class="con-box">

                  <div class="item-cell-box">
                    <div class="rbox">
                      <label>
                        <input type="radio" name="approval"><i></i>
                        <span class="txt">승인</span>
                      </label>
                    </div>

                    <div class="rbox ms-4">
                      <label>
                        <input type="radio" name="approval"><i></i>
                        <span class="txt">반려</span>
                      </label>
                    </div>
                  </div>

                </div>

              </div>

              <div class="row">

                <div class="subject-box">메시지</div>
                <div class="con-box">

                  <div class="textbox">
                    <textarea onkeyup="limitTextarea(this,'textarea1',500)" maxlength="500"></textarea>
                    <div class="option-box d-flex justify-content-end">
                      <span id="textarea1">0</span>/500자

                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div class="form-foot-box pt-10">
              <article class="modal-menu-layout1">

                <div class="modal-menu-list">
                  <a href="javascript:confirmPopupOpen('$회원번호(회원명)$님을<br/>사용자로<br/>승인 하시겠습니까?')"
                     class="modal-menu-btn menu-primary">저장</a>
                </div>

              </article>

            </div>

          </article>

        </div>
        <!--end::Modal body-->
      </div>
      <!--end::Modal content-->
    </div>
    <!--end::Modal dialog-->
  </div>
  <!--end::Modal - 내정보 수정 -->

  <!--end::Modals-->


</template>

<script>
import {mapState} from "vuex"
import {getTelno, getAuthCd} from "@/util/ui"
import store from '@/store/store'

export default {
  name: "AppHeader",
  data() {
    return {
      tabidx: 0,
      ptTpye: {
        'PTTP0001': '일반', 'PTTP0002': '소아', 'PTTP0003': '투석', 'PTTP0004': '산모',
        'PTTP0005': '수술', 'PTTP0006': '인공호흡기 사용', 'PTTP0007': '적극적 치료요청', 'PTTP0008': '신생아'
      }
    }
  },
  computed: {
    ...mapState('user', ['userInfo']),
    selectedTabIdx: function() {
      return store.getters['user/getSelectedTabIdx']
    }
  },
  methods: {
    getAuthCd,
    getTelno,
    getPmgr(code) {
      if (code === 'PMGR0001') {
        return '병상요청'
      } else if (code === 'PMGR0002') {
        return '병상승인'
      } else if (code === 'PMGR0003') {
        return '병상배정'
      } else {
        return '시스템관리'
      }
    },
    getptType(code) {
      const arr = code.split(";");
      const res = arr.map(item => this.ptTpye[item]);
      return res.join(', ')
    },
    setActive(idx) {
      this.$store.commit('user/setSelectedTabIdx', idx)
    },
    handlefunc(fun, idx) {
      this.setActive(idx);
      fun();
    },
    getUserList() {
      this.$store.dispatch('admin/getSido')
      this.$store.dispatch('admin/getUserList')
    },
    getUsersList() {
      this.$store.dispatch('user/getUsersList')
    },
    getBdList() {
      this.$store.dispatch('bedasgn/getBdList')
    },
    getPtList() {
      this.$store.dispatch('patnt/getPatntList')
    }
  }
}
</script>

<style scoped>
.fs-5 {
  font-size: 0.85rem !important;
}

.profile-view-box > img {
  opacity: 0.7;
}
</style>
