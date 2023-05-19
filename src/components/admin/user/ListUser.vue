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
                            <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">시스템 관리</li>
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
                                    class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">사용자
                                관리</h1></li>
                            <!--end::Item-->
                        </ul>
                        <!--end::Breadcrumb-->
                        <!--begin::Title-->
                        <!--end::Title-->
                    </div>
                    <!--end::Page title-->
                    <!--begin::Actions-->
                    <div class="d-flex align-items-center gap-2 gap-lg-3">
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
                                                        <input type="text" placeholder="제목 또는 내용 입력">

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
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">병상배정반</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">의료진</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">보건소</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">구급대</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
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
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">투석</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">임산부</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">신생아</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">소아</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">응급실</span>
                                                        </label>
                                                    </div>

                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <th>사용자 상태</th>
                                            <td>
                                                <div class="item-cell-box">

                                                    <div class="cbox">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">활성</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">휴먼</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">탈퇴</span>
                                                        </label>
                                                    </div>

                                                </div>
                                            </td>

                                            <th>승인상태</th>
                                            <td>
                                                <div class="item-cell-box">

                                                    <div class="cbox">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">승인대기</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">승인</span>
                                                        </label>
                                                    </div>

                                                    <div class="cbox ms-4">
                                                        <label>
                                                            <input type="checkbox" name="state"><i></i>
                                                            <span class="txt">반려</span>
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

                                    <div class="head-txt-box">검색결과 <span
                                            class="rounded-pill bg-primary text-white px-2 ms-2">99+</span></div>
                                </div>

                                <div class="option-box">

                                    <a href="#" class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7"
                                       data-bs-toggle="modal" data-bs-target="#kt_modal_view_users"><i
                                            class="fa-regular fa-trash-can"></i> 삭제</a>

                                    <a href="#" class="btn btn-flex btn-sm btn-secondary fs-7 ms-2" data-bs-toggle="modal"
                                       data-bs-target="#kt_modal_view_users"><i class="fa-solid fa-download"></i> 엑셀다운로드</a>

                                    <a href="javascript:userEditModal();"
                                       class="btn btn-sm btn-flex btn-primary align-self-center px-3 ms-2">
                                        <i class="fa-solid fa-plus"></i> 사용자 등록</a>


                                </div>

                            </div>


                            <div class="table-body-box">

                                <div class="table-box with-scroll small">
                                    <table class="table-layout-fixed">
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
                                        <tr>
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
                                                <a href="javascript:confirmPopupOpen('선택하신 사용자상태로 적용하시겠습니까?',function() {
																confirmPopupClose(); alertPopupOpen('적용 되었습니다.')})"
                                                   class="btn btn-flex btn-xs btn-outline btn-outline-primary w-75px px-0 justify-content-center">승인/반려</a>
                                            </td>
                                        </tr>

                                        <tr>
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
                                        </tr>


                                        </tbody>

                                    </table>
                                </div>
                            </div>

                        </article>

                        <div class="row mt-10">
                            <div
                                    class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                            <div class="col-12 d-flex align-items-center justify-content-center">
                                <div class="dataTables_paginate paging_simple_numbers" id="kt_table_users_paginate">
                                    <ul class="pagination">
                                        <li class="paginate_button page-item previous disabled" id="kt_table_users_previous"><a
                                                href="#" aria-controls="kt_table_users" data-dt-idx="0" tabindex="0" class="page-link"><i
                                                class="previous"></i></a></li>
                                        <li class="paginate_button page-item active"><a href="#" aria-controls="kt_table_users"
                                                                                        data-dt-idx="1" tabindex="0"
                                                                                        class="page-link">1</a></li>
                                        <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                  data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                        </li>
                                        <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                  data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                        </li>
                                        <li class="paginate_button page-item next" id="kt_table_users_next"><a href="#"
                                                                                                               aria-controls="kt_table_users"
                                                                                                               data-dt-idx="4"
                                                                                                               tabindex="0"
                                                                                                               class="page-link"><i
                                                class="next"></i></a></li>
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
  <!--begin::Modal - 내정보-->
    <div class="modal fade " id="kt_modal_edit_user" tabindex="-1" aria-hidden="true" style=";">
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
                        <div class="form-head-box">

                            <div class="head-box">
                                <div class="head-txt-box fs-16px fw-bold pb-5">사용자 기본 정보</div>
                            </div>

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
                                        <th>아이디 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="text" value="ladder@battele.net" readonly>
                                                </div>
                                            </div>
                                        </td>
                                        <th>비밀번호 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="password" value="">
                                                </div>
                                            </div>
                                            <div class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 비밀번호 유효성 확인 문구</div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>휴대폰번호 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="text" value="010-1234-5678">
                                                </div>
                                            </div>
                                        </td>
                                        <th>비밀번호 확인 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="password" value="ladder@battele.net">
                                                </div>
                                            </div>
                                            <div class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 비밀번호와 비밀번호 확인 일치 확인 문구</div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>이름 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="text" value="010-1234-5678">
                                                </div>
                                            </div>
                                            <div class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 이름 유효성 확인 문구</div>
                                            </div>
                                        </td>
                                        <th>생년월일 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="text" value="1945-07-01">
                                                </div>
                                            </div>
                                            <div class="item-cell-box full">
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
                                        <col style="width: 168px;">
                                        <col style="width: auto;">
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <th>소속기관 유형 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-cell-box full">
                                                <div class="rbox">
                                                    <label>
                                                        <input type="radio" name="public" checked>
                                                        <i></i><span class="txt">보건소</span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="public">
                                                        <i></i><span class="txt">병상배정반</span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="public">
                                                        <i></i><span class="txt">의료진</span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="public">
                                                        <i></i><span class="txt">구급대</span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="public">
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
                                                        <input type="radio" name="t1">
                                                        <div class="selector-wrap">
                                                            <div class="img-box">
                                                                <img src="/img/common/img_permission_item1.svg" alt="이미지" class="on">
                                                                <img src="/img/common/img_permission_item1_off.svg" alt="이미지" class="off">
                                                            </div>
                                                            <div class="info-box">
                                                                <div class="main-box">병상요청그룹</div>
                                                                <div class="sub-box">보건소, 병상배정반, 의료진</div>

                                                            </div>
                                                        </div>
                                                    </label>

                                                    <label class="selector-box">
                                                        <input type="radio" name="t1">
                                                        <div class="selector-wrap">
                                                            <div class="img-box">
                                                                <img src="/img/common/img_permission_item2.svg" alt="이미지" class="on">
                                                                <img src="/img/common/img_permission_item2_off.svg" alt="이미지" class="off">
                                                            </div>
                                                            <div class="info-box">
                                                                <div class="main-box">병상승인그룹</div>
                                                                <div class="sub-box">병상배정반</div>

                                                            </div>
                                                        </div>
                                                    </label>

                                                    <label class="selector-box">
                                                        <input type="radio" name="t1">
                                                        <div class="selector-wrap">
                                                            <div class="img-box">
                                                                <img src="/img/common/img_permission_item3.svg" alt="이미지" class="on">
                                                                <img src="/img/common/img_permission_item3_off.svg" alt="이미지" class="off">
                                                            </div>
                                                            <div class="info-box">
                                                                <div class="main-box">병상배정그룹</div>
                                                                <div class="sub-box">의료진</div>

                                                            </div>
                                                        </div>
                                                    </label>

                                                    <label class="selector-box">
                                                        <input type="radio" name="t1">
                                                        <div class="selector-wrap">
                                                            <div class="img-box">
                                                                <img src="/img/common/img_permission_item4.svg" alt="이미지" class="on">
                                                                <img src="/img/common/img_permission_item4_off.svg" alt="이미지" class="off">
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
                                                        <input type="radio" name="permission" checked>
                                                        <i></i><span class="txt text-black">일반 <span class="fw-normal text-gray-600 ps-2">일반 업무처리 및 사용자 초대 권한</span></span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="permission">
                                                        <i></i><span class="txt text-black">게스트 <span
                                                            class="fw-normal text-gray-600 ps-2">업무조회만 가능</span></span>
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
                                        <col style="width: 168px;">
                                        <col style="width: auto;">
                                        <col style="width: 168px;">
                                        <col style="width: auto;">
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
                                                <div class="text-danger pt-2 fs-12px">※ 주 담당지역 선택여부 확인 문구</div>
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
                                                    <input type="text" value="소속기관명 직접 입력" readonly>
                                                </div>
                                            </div>
                                            <div class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 비밀번호와 비밀번호 확인 일치 확인 문구</div>
                                            </div>

                                        </td>
                                        <th>직급 <span class="text-primary">*</span></th>
                                        <td class="vertical-top">
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="text" value="ladder@battele.net">
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
                                                        <input type="checkbox" name="state"><i></i>
                                                        <span class="txt">해당없음</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="state"><i></i>
                                                        <span class="txt">투석</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="state"><i></i>
                                                        <span class="txt">임산부</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="state"><i></i>
                                                        <span class="txt">신생아</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="state"><i></i>
                                                        <span class="txt">소아</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="state"><i></i>
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
                                                            <input type="file">
                                                            <span class="upload-btn-box">
															<img src="/img/common/img_upload_img.svg" alt="이미지">
															<span class="txt">클릭하여 업로드</span>
														</span>
                                                        </label>

                                                    </div>

                                                    <div class="result-list">
                                                        <div class="result-box">
                                                            <div class="edit-btn-box">
                                                                <label>
                                                                    <input type="file">
                                                                    <img src="/img/common/img_upload_btn.svg" alt="이미지">
                                                                </label>
                                                            </div>
                                                            <img src="/img/common/img_profile_dummy.png" alt="이미지">

                                                            <a href="javascript:void(0)" class="remove-btn" onclick="imgRemove(this)"><img
                                                                    src="/img/common/ic_profile_remove.svg" alt="이미지"></a>

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
                                                            <input type="file">
                                                            <span class="upload-btn-box">
															<img src="/img/common/img_upload_img.svg" alt="이미지">
															<span class="txt">클릭하여 업로드</span>
														</span>
                                                        </label>

                                                    </div>

                                                    <div class="result-list">
                                                        <div class="result-box">
                                                            <img src="/img/common/img_profile_dummy.png" alt="이미지">

                                                            <a href="javascript:void(0)" class="remove-btn" onclick="imgRemove(this)"><img
                                                                    src="/img/common/ic_profile_remove.svg" alt="이미지"></a>

                                                        </div>

                                                    </div>


                                                </article>

                                            </div>
                                            <div class="item-cell-box full">
                                                <div class="text-danger pt-2 fs-12px">※ 빠른 승인처리를 위해 해당 기관 소속임을 증명할 수 있는 명함, 또는 신분증 사진을 업로드 해주세요.
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
                            <a href="javascript:void(0)" class="modal-menu-btn menu-cancel">취소</a>

                            <a href="javascript:confirmPopupOpen('사용자를 등록하였습니다')" class="modal-menu-btn menu-primary">등록완료</a>
                        </div>


                    </article>
                </div>
                <!--end::Modal body-->
            </div>
            <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
    </div>

    <div class="modal fade" id="kt_modal_view_user" tabindex="-1" aria-hidden="true" style=";">
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

                    <div class="tabs-head-box" style="max-width:460px; margin:0 auto;">
                        <article class="tabs-list-layout1 w-100">
                            <div class="tabs-list full">
                                <a href="javascript:detailTabsMove(1)" class="tabs-btn active">
                                    <span class="txt">개요</span>
                                </a>

                                <a href="javascript:detailTabsMove(2)" class="tabs-btn">
                                    <span class="txt">접속기록</span>
                                </a>
                            </div>
                        </article>
                    </div>


                    <div class="tabs-group flex-root">

                        <div class="tabs-box" data-tabs="tabs1">
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
                                                <col style="width: 191px;">
                                                <col style="width: 168px;">
                                                <col style="width: auto;">
                                                <col style="width: 168px;">
                                                <col style="width: auto;">
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <td rowspan="4" class="p-0">사진영역</td>
                                                <th>사용자번호</th>
                                                <td>U000112</td>
                                                <th>아이디</th>
                                                <td>kb5020@naver.com</td>
                                            </tr>
                                            <tr>
                                                <th>이름</th>
                                                <td>홍길동</td>
                                                <th>휴대전화번호</th>
                                                <td>010-1234-5678</td>
                                            </tr>
                                            <tr>
                                                <th>생년월일</th>
                                                <td>1980.5.20</td>
                                                <th>성별</th>
                                                <td>남</td>
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
                                                <col style="width: 168px;">
                                                <col style="width: auto;">
                                                <col style="width: 168px;">
                                                <col style="width: auto;">
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th>소속기관 유형</th>
                                                <td>병상배정반</td>
                                                <th>직급</th>
                                                <td>실장</td>
                                            </tr>

                                            <tr>
                                                <th>권한그룹</th>
                                                <td>
                                                    <div class="item-cell-box full">

                                                        <article class="permission-selector-layout">

                                                            <div class="selector-box" style="cursor: default">
                                                                <div class="selector-wrap">
                                                                    <div class="img-box">
                                                                        <img src="/img/common/img_permission_item1.svg" alt="이미지" class="on">
                                                                        <img src="/img/common/img_permission_item1_off.svg" alt="이미지" class="off">
                                                                    </div>
                                                                    <div class="info-box">
                                                                        <div class="main-box">병상요청그룹</div>
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
                                                <col style="width: 168px;">
                                                <col style="width: auto;">
                                                <col style="width: 168px;">
                                                <col style="width: auto;">
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
                                                                <img src="/img/common/img_profile_dummy.png" alt="이미지">
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
                                                <col style="width: 168px;">
                                                <col style="width: auto;">
                                                <col style="width: 168px;">
                                                <col style="width: auto;">
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
                                                    <a href="javascript:confirmPopupOpen('$회원번호(회원명)$님에게<br/> 임시비밀번호를 발급하시겠습니까?',function()
                                                    {confirmPopupClose();alertPopupOpen('휴대폰으로 임시비밀번호가<br/>전송 되었습니다.');});"
                                                       class="btn btn-sm btn-flex btn-primary align-self-center px-3">임시비밀번호 발급</a>
                                                </td>

                                                <th>사용자 탈퇴처리</th>
                                                <td>
                                                    <a href="javascript:popupOpen('leave');"
                                                       class="btn btn-sm btn-flex btn-primary align-self-center px-3">탈퇴처리</a>

                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </article>

                            <article class="modal-menu-layout1 pt-10">

                                <div class="modal-menu-list">
                                    <a href="javascript:void(0)" class="modal-menu-btn menu-cancel">취소</a>

                                    <a href="javascript:alertPopupOpen('저장 되었습니다.')" class="modal-menu-btn menu-primary-outline">수정완료</a>
                                    <a href="javascript:confirmPopupOpen('사용자를 등록하였습니다')" class="modal-menu-btn menu-primary">등록완료</a>
                                </div>


                            </article>
                        </div>

                        <div class="tabs-box" data-tabs="tabs2" style="display: none;">


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
                                                        <col style="width: 70px;">
                                                        <col style="width: 100px;">
                                                        <col style="width: 100px;">
                                                        <col style="width: 100px;">

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
                                                class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                                        <div class="col-12 d-flex align-items-center justify-content-center">
                                            <div class="dataTables_paginate paging_simple_numbers" id="">
                                                <ul class="pagination">
                                                    <li class="paginate_button page-item previous disabled" id=""><a
                                                            href="#" aria-controls="kt_table_users" data-dt-idx="0" tabindex="0" class="page-link"><i
                                                            class="previous"></i></a></li>
                                                    <li class="paginate_button page-item active"><a href="#" aria-controls="kt_table_users"
                                                                                                    data-dt-idx="1" tabindex="0"
                                                                                                    class="page-link">1</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                              data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                                    </li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                              data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                                    </li>
                                                    <li class="paginate_button page-item next" id=""><a href="#"
                                                                                                        aria-controls="kt_table_users"
                                                                                                        data-dt-idx="4"
                                                                                                        tabindex="0"
                                                                                                        class="page-link"><i
                                                            class="next"></i></a></li>
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
                                                        <col style="width: 70px;">
                                                        <col style="width: 100px;">
                                                        <col style="width: 150px;">
                                                        <col style="width: 100px;">

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
                                                class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                                        <div class="col-12 d-flex align-items-center justify-content-center">
                                            <div class="dataTables_paginate paging_simple_numbers" id="">
                                                <ul class="pagination">
                                                    <li class="paginate_button page-item previous disabled" id=""><a
                                                            href="#" aria-controls="kt_table_users" data-dt-idx="0" tabindex="0" class="page-link"><i
                                                            class="previous"></i></a></li>
                                                    <li class="paginate_button page-item active"><a href="#" aria-controls="kt_table_users"
                                                                                                    data-dt-idx="1" tabindex="0"
                                                                                                    class="page-link">1</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                              data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                                    </li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                              data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                                    </li>
                                                    <li class="paginate_button page-item next" id=""><a href="#"
                                                                                                        aria-controls="kt_table_users"
                                                                                                        data-dt-idx="4"
                                                                                                        tabindex="0"
                                                                                                        class="page-link"><i
                                                            class="next"></i></a></li>
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
                                                        <col style="width: 70px;">
                                                        <col style="width: 100px;">
                                                        <col style="width: 300px;">
                                                        <col style="width: 100px;">

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
                                                class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                                        <div class="col-12 d-flex align-items-center justify-content-center">
                                            <div class="dataTables_paginate paging_simple_numbers" id="">
                                                <ul class="pagination">
                                                    <li class="paginate_button page-item previous disabled" id=""><a
                                                            href="#" aria-controls="kt_table_users" data-dt-idx="0" tabindex="0" class="page-link"><i
                                                            class="previous"></i></a></li>
                                                    <li class="paginate_button page-item active"><a href="#" aria-controls="kt_table_users"
                                                                                                    data-dt-idx="1" tabindex="0"
                                                                                                    class="page-link">1</a></li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                              data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                                    </li>
                                                    <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users"
                                                                                              data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                                    </li>
                                                    <li class="paginate_button page-item next" id=""><a href="#"
                                                                                                        aria-controls="kt_table_users"
                                                                                                        data-dt-idx="4"
                                                                                                        tabindex="0"
                                                                                                        class="page-link"><i
                                                            class="next"></i></a></li>
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

  <!--end::Modal - 내정보-->
    <article class="popup popup-leave" style="">
        <div class="popup-wrapper">
            <div class="popup-contents">

                <div class="popup-head-box py-5 px-10">

                    <div class="head-tit-box">사용자 탈퇴 처리</div>

                    <div class="head-option-box">
                        <a href="javascript:popupClose('leave')" class="popup-close-btn">
						<span class="svg-icon svg-icon-1">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)"
                        fill="currentColor"></rect>
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                        fill="currentColor"></rect>
								</svg>
							</span>
                        </a>
                    </div>

                </div>

                <div class="popup-body-box py-5 px-10">

                    <div class="d-flex flex-column pb-6">

                        <div class="fw-medium fs-16px text-black pb-4 fw-bold">활동 내역</div>

                        <div class="text-gray-600">
                            - 병상요청 : 2건<br/>
                            - 배정승인 : 2건<br/>
                            - 이송 : 0건<br/>
                            - 입원 : 0건
                        </div>

                    </div>

                    <div>

                        <div class="fw-medium fs-16px text-black pb-4 fw-bold">탈퇴처리 사유 입력</div>

                        <div>
                            <div class="textbox">
							<textarea onkeyup="limitTextarea(this,'textarea3',500)" maxlength="500" placeholder="메시지 입력"
                        style="height: 120px;"></textarea>
                                <div class="limit-box"><span id="textarea3">0</span>/500자</div>
                            </div>
                        </div>

                    </div>


                </div>

                <div class="popup-foot-box py-5 px-10">
                    <article class="modal-menu-layout1">

                        <div class="modal-menu-list">

                            <a href="javascript:popupClose('leave')" class="modal-menu-btn menu-cancel">닫기</a>

                            <a href="javascript:confirmPopupOpen('탈퇴 후 동일한 ID를 이용한<br/>재가입은 불가능 합니다.<br/>정말 탈퇴하시겠습니까?',
                            function() {confirmPopupClose();alertPopupOpen('회원탈퇴 되었습니다.',function (){popupClose('leave');});})"
                               class="modal-menu-btn menu-primary">저장</a>
                        </div>


                    </article>
                </div>

            </div>

        </div>
    </article>


  <!--end::Modals-->
</template>

<script>

export default {
    components: {

    },
    name: 'DetlAncmt',
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