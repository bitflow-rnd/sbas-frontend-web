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
													<path d="M12.6343 12.5657L8.45001 16.75C8.0358 17.1642 8.0358 17.8358 8.45001 18.25C8.86423 18.6642 9.5358 18.6642 9.95001 18.25L15.4929 12.7071C15.8834 12.3166 15.8834 11.6834 15.4929 11.2929L9.95001 5.75C9.5358 5.33579 8.86423 5.33579 8.45001 5.75C8.0358 6.16421 8.0358 6.83579 8.45001 7.25L12.6343 11.4343C12.9467 11.7467 12.9467 12.2533 12.6343 12.5657Z" fill="currentColor" />
												</svg>
											</span>
                                <!--end::Svg Icon-->
                            </li>
                            <!--end::Item-->
                            <!--begin::Item-->
                            <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">기관정보 관리</li>
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
                            <li class="breadcrumb-item text-gray-500 mx-n1"><h1 class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">구급대 관리</h1></li>
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

                    <div class="card-contents" style="flex:1; min-width:0;">

                        <div class="card-option p-8 pb-0">
                            <div class="d-flex align-items-center gap-2 gap-lg-3 justify-content-end">
                                <a href="#" class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users"><i class="fa-regular fa-trash-can"></i> 삭제</a>
                                <a href="#" class="btn btn-flex btn-sm btn-secondary fs-7" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users"><i class="fa-solid fa-download"></i> 엑셀다운로드</a>
                                <a @click="toggleModal(0)" class="btn btn-sm btn-flex btn-primary align-self-center px-3">
                                    <i class="fa-solid fa-plus"></i> 구급대 등록</a>
                            </div>
                        </div>


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
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th>검색조건</th>
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

                                                        <div class="tbox full with-btn ms-2" style="max-width:300px;">
                                                            <input type="text" placeholder="구급대명 또는 ID 입력">

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
                            <h5>조회결과<span class="position-absolute translate-middle rounded-pill bg-primary">99+</span></h5>

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
                                                <th>지역(시/도)</th>
                                                <th>지역(시/군/구)</th>
                                                <th>구급대 (119안전센터)</th>
                                                <th>전화번호</th>
                                                <th>등록 대원 수</th>
                                                <th>작업</th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr>
                                                <td>7</td>
                                                <td>
                                                    <div class="cbox d-flex justify-content-center">
                                                        <label>
                                                            <input type="checkbox"><i></i>
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>경상북도</td>
                                                <td>포항시</td>
                                                <td>봉천</td>
                                                <td>02-445-9993</td>
                                                <td>13</td>
                                                <td>
                                                    <a @click="toggleModal(0)" class="btn btn-flex btn-xs btn-outline btn-outline-primary">수정</a>

                                                    <a @click="toggleModal(1)" class="btn btn-flex btn-xs btn-outline btn-outline-primary ms-2">상세</a>
                                                </td>
                                            </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>

                            </article>

                            <div class="row mt-10">
                                <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                                <div class="col-12 d-flex align-items-center justify-content-center">
                                    <div class="dataTables_paginate paging_simple_numbers" id="kt_table_users_paginate">
                                        <ul class="pagination">
                                            <li class="paginate_button page-item previous disabled" id="kt_table_users_previous"><a href="#" aria-controls="kt_table_users" data-dt-idx="0" tabindex="0" class="page-link"><i class="previous"></i></a></li>
                                            <li class="paginate_button page-item active"><a href="#" aria-controls="kt_table_users" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                            <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                            </li>
                                            <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users" data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                            </li>
                                            <li class="paginate_button page-item next" id="kt_table_users_next"><a href="#" aria-controls="kt_table_users" data-dt-idx="4" tabindex="0" class="page-link"><i class="next"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>




                            <!--end::Table-->
                        </div>
                        <!--end::Card body-->

                    </div>

                    <article class="card-sub-contents px-6" style="width: 560px;">

                        <div class="card-option p-8">
                            <div class="d-flex align-items-center gap-2 gap-lg-3 justify-content-end">
                                <a href="#" class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users"><i class="fa-regular fa-trash-can"></i> 삭제</a>
                                <a @click="toggleModal(2)" class="btn btn-sm btn-flex btn-primary align-self-center px-3">
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
                                        <input type="text" placeholder="대원이름 또는 ID 입력">

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
                                <h5>조회결과<span class="position-absolute translate-middle rounded-pill bg-primary">99+</span></h5>

                                <article class="table-list-layout1">

                                    <div class="table-body-box">

                                        <div class="table-box with-scroll small">
                                            <table>
                                                <colgroup>
                                                    <col style="width: 70px;">
                                                    <col style="width: 100px;">
                                                    <col style="width: 100px;">
                                                    <col style="width: 100px;">
                                                    <col style="width: 100px;">

                                                </colgroup>
                                                <thead>
                                                <tr class="small">
                                                    <th>
                                                        <div class="cbox">
                                                            <label>
                                                                <input type="checkbox" class="all-chk"><i></i>
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
                                                <tr>
                                                    <td>
                                                        <div class="cbox d-flex justify-content-center">
                                                            <label>
                                                                <input type="checkbox"><i></i>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td @click="toggleModal(3)" >한*진</td>
                                                    <td>소방교</td>
                                                    <td>010-***-4567</td>
                                                    <td>
                                                        <a @click="toggleModal(2)" class="btn btn-flex btn-xs btn-outline btn-outline-primary">수정</a>
                                                    </td>
                                                </tr>


                                                </tbody>

                                            </table>
                                        </div>
                                    </div>

                                </article>

                                <div class="row mt-10">
                                    <div class="col-sm-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start"></div>
                                    <div class="col-12 d-flex align-items-center justify-content-center">
                                        <div class="dataTables_paginate paging_simple_numbers" id="">
                                            <ul class="pagination">
                                                <li class="paginate_button page-item previous disabled" id=""><a href="#" aria-controls="kt_table_users" data-dt-idx="0" tabindex="0" class="page-link"><i class="previous"></i></a></li>
                                                <li class="paginate_button page-item active"><a href="#" aria-controls="kt_table_users" data-dt-idx="1" tabindex="0" class="page-link">1</a></li>
                                                <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                                                </li>
                                                <li class="paginate_button page-item "><a href="#" aria-controls="kt_table_users" data-dt-idx="3" tabindex="0" class="page-link">3</a>
                                                </li>
                                                <li class="paginate_button page-item next" id=""><a href="#" aria-controls="kt_table_users" data-dt-idx="4" tabindex="0" class="page-link"><i class="next"></i></a></li>
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
    <div v-show="openModal[0]" class="modal fade" id="kt_modal_group_edit" tabindex="-1" aria-hidden="true" style="">
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

                        </div>

                        <form @submit="onSubmitFirestatn" class="form-body-box">

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
                                        <th>구급대 이름 <span class="text-primary">*</span></th>
                                        <td colspan="3">
                                            <div class="item-cell-box">
                                                <div class="tbox w-450px">
                                                    <input v-model="crewId" placeholder="구급대명 직접 입력">
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>주소 <span class="text-primary">*</span></th>
                                        <td colspan="3">
                                            <div class="item-cell-box">

                                                <div class="sbox w-175px">
                                                    <select>
                                                        <option>대구광역시</option>
                                                    </select>
                                                </div>

                                                <div class="sbox w-175px ms-3">
                                                    <select>
                                                        <option>구급대 선택</option>
                                                    </select>
                                                </div>

                                                <div class="tbox w-450px ms-3">
                                                    <input placeholder="상세주소 입력 (선택사항)" readonly>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>담당자 이름</th>
                                        <td>
                                            <div class="item-cell-box full">
                                                <div class="tbox w-175px full">
                                                    <input v-model="crewNm" placeholder="담당자 입력 (선택사항)">
                                                </div>

                                            </div>
                                        </td>
                                        <th>담당자 연락처</th>
                                        <td>
                                            <div class="item-cell-box full">
                                                <div class="tbox w-175px full">
                                                    <input v-model="telno" placeholder="담당자 연락처 입력 (선택사항)">
                                                </div>

                                            </div>
                                        </td>

                                    </tr>

                                    <tr>
                                        <th>비고</th>
                                        <td colspan="3">

                                            <div class="item-cell-box full">

                                                <div class="textbox full">
                                                    <textarea v-model="rmk" onkeyup="limitTextarea(this,'textarea4',500)" maxlength="500" placeholder="메시지 입력" style="height: 120px;"></textarea>
                                                    <div class="limit-box"><span id="textarea4">0</span>/500자</div>
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
                            <a href="javascript:alertPopupOpen('저장 하였습니다')" class="modal-menu-btn menu-primary">저장</a>
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
    <div v-show="openModal[1]" class="modal fade" id="kt_modal_group_view" tabindex="-1" aria-hidden="true" style="">
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

                        </div>


                        <div class="form-body-box">

                            <div class="table-box">
                                <table>
                                    <colgroup>
                                        <col style="width:530px;">
                                        <col style="width: 168px;">
                                        <col style="width: auto;">
                                        <col style="width: 168px;">
                                        <col style="width: auto;">
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <td rowspan="6" class="p-0">
                                            지도 영역
                                        </td>
                                        <th>구급대 ID</th>
                                        <td>A300174</td>
                                        <th>구급대 명</th>
                                        <td>봉천</td>
                                    </tr>
                                    <tr>
                                        <th>구급대 ID</th>
                                        <td colspan="3">서울특별시  관악구 신림동 432</td>
                                    </tr>
                                    <tr>
                                        <th>담당자명</th>
                                        <td>임재범</td>
                                        <th>연락처</th>
                                        <td>02-332-4321</td>
                                    </tr>
                                    <tr>
                                        <th>담당자명</th>
                                        <td colspan="3">182.111234234234, 38.444888 </td>
                                    </tr>
                                    <tr>
                                        <th>차량번호</th>
                                        <td colspan="3">123가4567, 45노0532, 747하3366</td>
                                    </tr>

                                    <tr>
                                        <th>비고</th>
                                        <td colspan="3" style="height: 200px; vertical-align: top;">당소에는 FAX가 없습니다.</td>
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
    <div v-show="openModal[2]" class="modal fade" id="kt_modal_member_edit" tabindex="-1" aria-hidden="true" style="">
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
                                        <th>구급대 주소</th>
                                        <td>경상북도 포항시 남구</td>
                                        <th>구급대명</th>
                                        <td>사상</td>
                                    </tr>
                                    <tr>
                                        <th>직위</th>
                                        <td>
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input placeholder="직위 입력">
                                                </div>
                                            </div>
                                        </td>
                                        <th>구급대원 이름 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input placeholder="이름 입력">
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>연락처 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input placeholder="이름 입력">
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>비고</th>
                                        <td colspan="3">

                                            <div class="item-cell-box full">

                                                <div class="textbox full">
                                                    <textarea onkeyup="limitTextarea(this,'textarea5',500)" maxlength="500" placeholder="메시지 입력" style="height: 120px;"></textarea>
                                                    <div class="limit-box"><span id="textarea5">0</span>/500자</div>
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
                            <a href="javascript:alertPopupOpen('저장 하였습니다')" class="modal-menu-btn menu-primary">저장</a>
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
    <div v-show="openModal[3]" class="modal fade" id="kt_modal_member_view" tabindex="-1" aria-hidden="true" style="">
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
                                        <th>구급대 주소</th>
                                        <td>경상북도 포항시 남구</td>
                                        <th>구급대명</th>
                                        <td>사상</td>
                                    </tr>
                                    <tr>
                                        <th>직위</th>
                                        <td>소방교</td>
                                        <th>구급대원 이름 <span class="text-primary">*</span></th>
                                        <td>남춘식</td>
                                    </tr>
                                    <tr>
                                        <th>연락처 <span class="text-primary">*</span></th>
                                        <td>010-2555-4555</td>
                                    </tr>

                                    <tr>
                                        <th>비고</th>
                                        <td colspan="3" style="height: 200px; vertical-align: top;">중환자 응급전문 대원 입니다</td>
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



  <!--end::Modals-->
</template>

<script>

import {reactive} from "vue";


export default {
    components: {

    },
    name: 'ListFirestatn',
    props: {
        msg: String
    },
    mounted() {
    },
    data() {
        return {
        }
    },
    setup(){
      const openModal = reactive([false,false,false,false]);

      const toggleModal = function(idx) {
          console.log(openModal[idx]);
          openModal[idx] = !openModal[idx];
      }

      return{
          openModal,
          toggleModal,

      }
    },
    methods: {
        onSubmitFirestatn(values){
            console.log(values)

            this.$store.dispatch("regFirestatn",values)
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#kt_modal_group_edit, #kt_modal_member_view, #kt_modal_member_edit, #kt_modal_group_view {
    display: inline-block;
    opacity: 100;
    --bs-modal-width: 1200px;
}
</style>