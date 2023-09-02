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
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
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
												<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
												</svg>
											</span>
                <!--end::Svg Icon-->
              </li>
              <!--end::Item-->
              <!--begin::Item-->
              <li class="breadcrumb-item text-gray-500 mx-n1"><h1 class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">병상배정 현황</h1></li>
              <li class="breadcrumb-item ml-2"><span>&nbsp;내 기관에 할당된 병상배정 업무 목록을 표시합니다</span></li>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
            <!--begin::Title-->
            <!--end::Title-->
          </div>
          <!--end::Page title-->
          <!--begin::Actions-->
          <div class="d-flex align-items-center gap-2 gap-lg-3">
            <a href="#" class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users"><i class="fa-regular fa-trash-can"></i> 삭제</a>
            <a href="#" class="btn btn-flex btn-sm btn-secondary fs-7" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users"><i class="fa-solid fa-download"></i> 엑셀다운로드</a>
            <a href="#" class="btn btn-sm btn-flex btn-primary align-self-center px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
              <i class="fa-solid fa-plus"></i> 병상요청
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
            <div class="card-toolbar">
              <table class="table align-middle table-row-bordered fs-6 dataTable no-footer">
                <!--begin::Table head-->
                <thead>
                <!--begin::Table row-->
                <tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                  <th class="pe-2 sorting_disabled" rowspan="1" colspan="1" aria-label="" style="width: 110px;">배정상태</th>
                  <td>
                    <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                      <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1"> 병상요청
                    </div>
                  </td>
                  <td colspan="2"></td>
                </tr>
                <!--end::Table row-->
                <!--begin::Table row-->
                <tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                  <th class="pe-2 sorting_disabled" rowspan="1" colspan="1" aria-label="" style="width: 110px;">환자유형</th>
                  <td>
                    <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                      <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1"> 투석
                    </div>
                  </td>
                  <th class="pe-2 sorting_disabled" rowspan="1" colspan="1" aria-label="" style="width: 110px;">중증도</th>
                  <td>
                    <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                      <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1"> 중환자
                    </div>
                  </td>
                </tr>
                <!--end::Table row-->
                </thead>
                <!--end::Table head-->
              </table>
            </div>
            <!--end::Card toolbar-->
          </div>
          <!--end::Card header-->
          <!--begin::Card body-->
          <div class="card-body p-8">
            <!--begin::Table-->
            <h5>검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">99+</span></h5>
            <div id="kt_table_users_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
              <div class="table-responsive">
                <table class="table align-middle table-row-bordered fs-6 dataTable no-footer" id="kt_table_users">
                  <!--begin::Table head-->
                  <thead>
                  <!--begin::Table row-->
                  <tr class="text-start text-muted fw-bold fs-7 text-uppercase gs-0">
                    <th class="w-10px pe-2 sorting_disabled" rowspan="1" colspan="1" aria-label="" style="width: 29.8906px;">
                      <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                        <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1">
                      </div>
                    </th>
                    <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_table_users" rowspan="1" colspan="1" aria-label="User: activate to sort column ascending" style="width: 360px;">순번</th>
                    <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_table_users" rowspan="1" colspan="1" aria-label="Role: activate to sort column ascending" style="width: 211.922px;">배정상태</th>
                    <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_table_users" rowspan="1" colspan="1" aria-label="Last login: activate to sort column ascending" style="width: 211.922px;">환자이름</th>
                    <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_table_users" rowspan="1" colspan="1" aria-label="Two-step: activate to sort column ascending" style="width: 211.922px;">성별</th>
                    <th class="min-w-125px sorting" tabindex="0" aria-controls="kt_table_users" rowspan="1" colspan="1" aria-label="Joined Date: activate to sort column ascending" style="width: 277px;">진단명</th>
                    <th class="text-end min-w-100px sorting_disabled" rowspan="1" colspan="1" aria-label="Actions" style="width: 170.844px;">중증도</th>
                  </tr>
                  <!--end::Table row-->
                  </thead>
                  <!--end::Table head-->
                  <!--begin::Table body-->
                  <tbody class="text-gray-600 fw-semibold">

                  <tr class="odd">
                    <!--begin::Checkbox-->
                    <td>
                      <div class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1">
                      </div>
                    </td>
                    <!--end::Checkbox-->
                    <!--begin::User=-->
                    <td class="d-flex align-items-center">
                      <!--begin:: Avatar -->
                      <div class="symbol overflow-hidden me-3">
                        <a href="/apps/user-management/users/view.html">
                          <div class="symbol-label">
                            <img src="/media/avatars/300-6.jpg" alt="Emma Smith">
                          </div>
                        </a>
                      </div>
                      <!--end::Avatar-->
                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a href="/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Emma Smith</a>
                        <span>smith@kpmg.com</span>
                      </div>
                      <!--begin::User details-->
                    </td>
                    <!--end::User=-->
                    <!--begin::Role=-->
                    <td>Administrator</td>
                    <!--end::Role=-->
                    <!--begin::Last login=-->
                    <td data-order="2023-04-07T18:18:31+09:00">
                      <div class="badge badge-light fw-bold">Yesterday</div>
                    </td>
                    <!--end::Last login=-->
                    <!--begin::Two step=-->
                    <td></td>
                    <!--end::Two step=-->
                    <!--begin::Joined-->
                    <td data-order="2023-08-19T10:30:00+09:00">19 Aug 2023, 10:30 am</td>
                    <!--begin::Joined-->
                    <!--begin::Action=-->
                    <td class="text-end">
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                        <span class="svg-icon svg-icon-5 m-0">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
																	</svg>
																</span>
                        <!--end::Svg Icon--></a>
                      <!--begin::Menu-->
                      <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="/apps/user-management/users/view.html" class="menu-link px-3">Edit</a>
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    </td>
                    <!--end::Action=-->
                  </tr><tr class="even">
                    <!--begin::Checkbox-->
                    <td>
                      <div class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1">
                      </div>
                    </td>
                    <!--end::Checkbox-->
                    <!--begin::User=-->
                    <td class="d-flex align-items-center">
                      <!--begin:: Avatar -->
                      <div class="symbol overflow-hidden me-3">
                        <a href="/apps/user-management/users/view.html">
                          <div class="symbol-label fs-3 bg-light-danger text-danger">M</div>
                        </a>
                      </div>
                      <!--end::Avatar-->
                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a href="/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Melody Macy</a>
                        <span>melody@altbox.com</span>
                      </div>
                      <!--begin::User details-->
                    </td>
                    <!--end::User=-->
                    <!--begin::Role=-->
                    <td>Analyst</td>
                    <!--end::Role=-->
                    <!--begin::Last login=-->
                    <td data-order="2023-04-08T17:58:31+09:00">
                      <div class="badge badge-light fw-bold">20 mins ago</div>
                    </td>
                    <!--end::Last login=-->
                    <!--begin::Two step=-->
                    <td>
                      <div class="badge badge-light-success fw-bold">Enabled</div>
                    </td>
                    <!--end::Two step=-->
                    <!--begin::Joined-->
                    <td data-order="2023-12-20T17:20:00+09:00">20 Dec 2023, 5:20 pm</td>
                    <!--begin::Joined-->
                    <!--begin::Action=-->
                    <td class="text-end">
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                        <span class="svg-icon svg-icon-5 m-0">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
																	</svg>
																</span>
                        <!--end::Svg Icon--></a>
                      <!--begin::Menu-->
                      <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="/apps/user-management/users/view.html" class="menu-link px-3">Edit</a>
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    </td>
                    <!--end::Action=-->
                  </tr><tr class="odd">
                    <!--begin::Checkbox-->
                    <td>
                      <div class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1">
                      </div>
                    </td>
                    <!--end::Checkbox-->
                    <!--begin::User=-->
                    <td class="d-flex align-items-center">
                      <!--begin:: Avatar -->
                      <div class="symbol overflow-hidden me-3">
                        <a href="/apps/user-management/users/view.html">
                          <div class="symbol-label">
                            <img src="/media/avatars/300-1.jpg" alt="Max Smith">
                          </div>
                        </a>
                      </div>
                      <!--end::Avatar-->
                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a href="/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Max Smith</a>
                        <span>max@kt.com</span>
                      </div>
                      <!--begin::User details-->
                    </td>
                    <!--end::User=-->
                    <!--begin::Role=-->
                    <td>Developer</td>
                    <!--end::Role=-->
                    <!--begin::Last login=-->
                    <td data-order="2023-04-05T18:18:31+09:00">
                      <div class="badge badge-light fw-bold">3 days ago</div>
                    </td>
                    <!--end::Last login=-->
                    <!--begin::Two step=-->
                    <td></td>
                    <!--end::Two step=-->
                    <!--begin::Joined-->
                    <td data-order="2023-02-21T17:20:00+09:00">21 Feb 2023, 5:20 pm</td>
                    <!--begin::Joined-->
                    <!--begin::Action=-->
                    <td class="text-end">
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                        <span class="svg-icon svg-icon-5 m-0">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
																	</svg>
																</span>
                        <!--end::Svg Icon--></a>
                      <!--begin::Menu-->
                      <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="/apps/user-management/users/view.html" class="menu-link px-3">Edit</a>
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    </td>
                    <!--end::Action=-->
                  </tr><tr class="even">
                    <!--begin::Checkbox-->
                    <td>
                      <div class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1">
                      </div>
                    </td>
                    <!--end::Checkbox-->
                    <!--begin::User=-->
                    <td class="d-flex align-items-center">
                      <!--begin:: Avatar -->
                      <div class="symbol overflow-hidden me-3">
                        <a href="/apps/user-management/users/view.html">
                          <div class="symbol-label">
                            <img src="/media/avatars/300-5.jpg" alt="Sean Bean">
                          </div>
                        </a>
                      </div>
                      <!--end::Avatar-->
                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a href="/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Sean Bean</a>
                        <span>sean@dellito.com</span>
                      </div>
                      <!--begin::User details-->
                    </td>
                    <!--end::User=-->
                    <!--begin::Role=-->
                    <td>Support</td>
                    <!--end::Role=-->
                    <!--begin::Last login=-->
                    <td data-order="2023-04-08T13:18:31+09:00">
                      <div class="badge badge-light fw-bold">5 hours ago</div>
                    </td>
                    <!--end::Last login=-->
                    <!--begin::Two step=-->
                    <td>
                      <div class="badge badge-light-success fw-bold">Enabled</div>
                    </td>
                    <!--end::Two step=-->
                    <!--begin::Joined-->
                    <td data-order="2023-10-25T20:43:00+09:00">25 Oct 2023, 8:43 pm</td>
                    <!--begin::Joined-->
                    <!--begin::Action=-->
                    <td class="text-end">
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                        <span class="svg-icon svg-icon-5 m-0">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
																	</svg>
																</span>
                        <!--end::Svg Icon--></a>
                      <!--begin::Menu-->
                      <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="/apps/user-management/users/view.html" class="menu-link px-3">Edit</a>
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    </td>
                    <!--end::Action=-->
                  </tr><tr class="odd">
                    <!--begin::Checkbox-->
                    <td>
                      <div class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1">
                      </div>
                    </td>
                    <!--end::Checkbox-->
                    <!--begin::User=-->
                    <td class="d-flex align-items-center">
                      <!--begin:: Avatar -->
                      <div class="symbol overflow-hidden me-3">
                        <a href="/apps/user-management/users/view.html">
                          <div class="symbol-label">
                            <img src="/media/avatars/300-25.jpg" alt="Brian Cox">
                          </div>
                        </a>
                      </div>
                      <!--end::Avatar-->
                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a href="/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Brian Cox</a>
                        <span>brian@exchange.com</span>
                      </div>
                      <!--begin::User details-->
                    </td>
                    <!--end::User=-->
                    <!--begin::Role=-->
                    <td>Developer</td>
                    <!--end::Role=-->
                    <!--begin::Last login=-->
                    <td data-order="2023-04-06T18:18:31+09:00">
                      <div class="badge badge-light fw-bold">2 days ago</div>
                    </td>
                    <!--end::Last login=-->
                    <!--begin::Two step=-->
                    <td>
                      <div class="badge badge-light-success fw-bold">Enabled</div>
                    </td>
                    <!--end::Two step=-->
                    <!--begin::Joined-->
                    <td data-order="2023-03-10T22:10:00+09:00">10 Mar 2023, 10:10 pm</td>
                    <!--begin::Joined-->
                    <!--begin::Action=-->
                    <td class="text-end">
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                        <span class="svg-icon svg-icon-5 m-0">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
																	</svg>
																</span>
                        <!--end::Svg Icon--></a>
                      <!--begin::Menu-->
                      <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="/apps/user-management/users/view.html" class="menu-link px-3">Edit</a>
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    </td>
                    <!--end::Action=-->
                  </tr><tr class="even">
                    <!--begin::Checkbox-->
                    <td>
                      <div class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1">
                      </div>
                    </td>
                    <!--end::Checkbox-->
                    <!--begin::User=-->
                    <td class="d-flex align-items-center">
                      <!--begin:: Avatar -->
                      <div class="symbol overflow-hidden me-3">
                        <a href="/apps/user-management/users/view.html">
                          <div class="symbol-label fs-3 bg-light-warning text-warning">C</div>
                        </a>
                      </div>
                      <!--end::Avatar-->
                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a href="/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Mikaela Collins</a>
                        <span>mik@pex.com</span>
                      </div>
                      <!--begin::User details-->
                    </td>
                    <!--end::User=-->
                    <!--begin::Role=-->
                    <td>Administrator</td>
                    <!--end::Role=-->
                    <!--begin::Last login=-->
                    <td data-order="2023-04-03T18:18:31+09:00">
                      <div class="badge badge-light fw-bold">5 days ago</div>
                    </td>
                    <!--end::Last login=-->
                    <!--begin::Two step=-->
                    <td></td>
                    <!--end::Two step=-->
                    <!--begin::Joined-->
                    <td data-order="2023-04-15T14:40:00+09:00">15 Apr 2023, 2:40 pm</td>
                    <!--begin::Joined-->
                    <!--begin::Action=-->
                    <td class="text-end">
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                        <span class="svg-icon svg-icon-5 m-0">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
																	</svg>
																</span>
                        <!--end::Svg Icon--></a>
                      <!--begin::Menu-->
                      <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="/apps/user-management/users/view.html" class="menu-link px-3">Edit</a>
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    </td>
                    <!--end::Action=-->
                  </tr><tr class="odd">
                    <!--begin::Checkbox-->
                    <td>
                      <div class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1">
                      </div>
                    </td>
                    <!--end::Checkbox-->
                    <!--begin::User=-->
                    <td class="d-flex align-items-center">
                      <!--begin:: Avatar -->
                      <div class="symbol overflow-hidden me-3">
                        <a href="/apps/user-management/users/view.html">
                          <div class="symbol-label">
                            <img src="/media/avatars/300-9.jpg" alt="Francis Mitcham">
                          </div>
                        </a>
                      </div>
                      <!--end::Avatar-->
                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a href="/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Francis Mitcham</a>
                        <span>f.mit@kpmg.com</span>
                      </div>
                      <!--begin::User details-->
                    </td>
                    <!--end::User=-->
                    <!--begin::Role=-->
                    <td>Trial</td>
                    <!--end::Role=-->
                    <!--begin::Last login=-->
                    <td data-order="2023-03-18T18:18:31+09:00">
                      <div class="badge badge-light fw-bold">3 weeks ago</div>
                    </td>
                    <!--end::Last login=-->
                    <!--begin::Two step=-->
                    <td></td>
                    <!--end::Two step=-->
                    <!--begin::Joined-->
                    <td data-order="2023-08-19T21:23:00+09:00">19 Aug 2023, 9:23 pm</td>
                    <!--begin::Joined-->
                    <!--begin::Action=-->
                    <td class="text-end">
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                        <span class="svg-icon svg-icon-5 m-0">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
																	</svg>
																</span>
                        <!--end::Svg Icon--></a>
                      <!--begin::Menu-->
                      <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="/apps/user-management/users/view.html" class="menu-link px-3">Edit</a>
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    </td>
                    <!--end::Action=-->
                  </tr><tr class="even">
                    <!--begin::Checkbox-->
                    <td>
                      <div class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1">
                      </div>
                    </td>
                    <!--end::Checkbox-->
                    <!--begin::User=-->
                    <td class="d-flex align-items-center">
                      <!--begin:: Avatar -->
                      <div class="symbol overflow-hidden me-3">
                        <a href="/apps/user-management/users/view.html">
                          <div class="symbol-label fs-3 bg-light-danger text-danger">O</div>
                        </a>
                      </div>
                      <!--end::Avatar-->
                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a href="/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Olivia Wild</a>
                        <span>olivia@corpmail.com</span>
                      </div>
                      <!--begin::User details-->
                    </td>
                    <!--end::User=-->
                    <!--begin::Role=-->
                    <td>Administrator</td>
                    <!--end::Role=-->
                    <!--begin::Last login=-->
                    <td data-order="2023-04-07T18:18:31+09:00">
                      <div class="badge badge-light fw-bold">Yesterday</div>
                    </td>
                    <!--end::Last login=-->
                    <!--begin::Two step=-->
                    <td></td>
                    <!--end::Two step=-->
                    <!--begin::Joined-->
                    <td data-order="2023-10-25T10:30:00+09:00">25 Oct 2023, 10:30 am</td>
                    <!--begin::Joined-->
                    <!--begin::Action=-->
                    <td class="text-end">
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                        <span class="svg-icon svg-icon-5 m-0">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
																	</svg>
																</span>
                        <!--end::Svg Icon--></a>
                      <!--begin::Menu-->
                      <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="/apps/user-management/users/view.html" class="menu-link px-3">Edit</a>
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    </td>
                    <!--end::Action=-->
                  </tr><tr class="odd">
                    <!--begin::Checkbox-->
                    <td>
                      <div class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1">
                      </div>
                    </td>
                    <!--end::Checkbox-->
                    <!--begin::User=-->
                    <td class="d-flex align-items-center">
                      <!--begin:: Avatar -->
                      <div class="symbol overflow-hidden me-3">
                        <a href="/apps/user-management/users/view.html">
                          <div class="symbol-label fs-3 bg-light-primary text-primary">N</div>
                        </a>
                      </div>
                      <!--end::Avatar-->
                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a href="/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Neil Owen</a>
                        <span>owen.neil@gmail.com</span>
                      </div>
                      <!--begin::User details-->
                    </td>
                    <!--end::User=-->
                    <!--begin::Role=-->
                    <td>Analyst</td>
                    <!--end::Role=-->
                    <!--begin::Last login=-->
                    <td data-order="2023-04-08T17:58:31+09:00">
                      <div class="badge badge-light fw-bold">20 mins ago</div>
                    </td>
                    <!--end::Last login=-->
                    <!--begin::Two step=-->
                    <td>
                      <div class="badge badge-light-success fw-bold">Enabled</div>
                    </td>
                    <!--end::Two step=-->
                    <!--begin::Joined-->
                    <td data-order="2023-04-15T17:30:00+09:00">15 Apr 2023, 5:30 pm</td>
                    <!--begin::Joined-->
                    <!--begin::Action=-->
                    <td class="text-end">
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                        <span class="svg-icon svg-icon-5 m-0">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
																	</svg>
																</span>
                        <!--end::Svg Icon--></a>
                      <!--begin::Menu-->
                      <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="/apps/user-management/users/view.html" class="menu-link px-3">Edit</a>
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    </td>
                    <!--end::Action=-->
                  </tr><tr class="even">
                    <!--begin::Checkbox-->
                    <td>
                      <div class="form-check form-check-sm form-check-custom form-check-solid">
                        <input class="form-check-input" type="checkbox" value="1">
                      </div>
                    </td>
                    <!--end::Checkbox-->
                    <!--begin::User=-->
                    <td class="d-flex align-items-center">
                      <!--begin:: Avatar -->
                      <div class="symbol overflow-hidden me-3">
                        <a href="/apps/user-management/users/view.html">
                          <div class="symbol-label">
                            <img src="/media/avatars/300-23.jpg" alt="Dan Wilson">
                          </div>
                        </a>
                      </div>
                      <!--end::Avatar-->
                      <!--begin::User details-->
                      <div class="d-flex flex-column">
                        <a href="/apps/user-management/users/view.html" class="text-gray-800 text-hover-primary mb-1">Dan Wilson</a>
                        <span>dam@consilting.com</span>
                      </div>
                      <!--begin::User details-->
                    </td>
                    <!--end::User=-->
                    <!--begin::Role=-->
                    <td>Developer</td>
                    <!--end::Role=-->
                    <!--begin::Last login=-->
                    <td data-order="2023-04-05T18:18:31+09:00">
                      <div class="badge badge-light fw-bold">3 days ago</div>
                    </td>
                    <!--end::Last login=-->
                    <!--begin::Two step=-->
                    <td></td>
                    <!--end::Two step=-->
                    <!--begin::Joined-->
                    <td data-order="2023-11-10T18:05:00+09:00">10 Nov 2023, 6:05 pm</td>
                    <!--begin::Joined-->
                    <!--begin::Action=-->
                    <td class="text-end">
                      <a href="#" class="btn btn-light btn-active-light-primary btn-sm" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">Actions
                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr072.svg-->
                        <span class="svg-icon svg-icon-5 m-0">
																	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
																		<path d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z" fill="currentColor"></path>
																	</svg>
																</span>
                        <!--end::Svg Icon--></a>
                      <!--begin::Menu-->
                      <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold fs-7 w-125px py-4" data-kt-menu="true">
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="/apps/user-management/users/view.html" class="menu-link px-3">Edit</a>
                        </div>
                        <!--end::Menu item-->
                        <!--begin::Menu item-->
                        <div class="menu-item px-3">
                          <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                        </div>
                        <!--end::Menu item-->
                      </div>
                      <!--end::Menu-->
                    </td>
                    <!--end::Action=-->
                  </tr></tbody>
                  <!--end::Table body-->
                </table>
              </div>
              <div class="row">
                <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                <div class="col-12 d-flex align-items-center justify-content-center">
                  <div class="dataTables_paginate paging_simple_numbers" id="kt_table_users_paginate">
                    <ul class="pagination"><li class="paginate_button page-item previous disabled" id="kt_table_users_previous"><a href="#" aria-controls="kt_table_users" data-dt-idx="0" tabindex="0" class="page-link"><i class="previous"></i></a></li><li class="paginate_button page-item active"><a href="#" aria-controls="kt_table_users" data-dt-idx="1" tabindex="0" class="page-link">1</a></li><li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users" data-dt-idx="2" tabindex="0" class="page-link">2</a></li><li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users" data-dt-idx="3" tabindex="0" class="page-link">3</a></li><li class="paginate_button page-item next" id="kt_table_users_next"><a href="#" aria-controls="kt_table_users" data-dt-idx="4" tabindex="0" class="page-link"><i class="next"></i></a></li></ul>
                  </div>
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
</template>

<script>

export default {
  components: {
  },
  name: 'MainIndex',
  props: {
    msg: String
  },
  mounted() {
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
