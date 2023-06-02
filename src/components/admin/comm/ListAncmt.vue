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
                                    class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">공지사항 관리</h1></li>
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
                                            <th>공지유형</th>
                                            <td>
                                                <div class="item-cell-box">

                                                    <div class="rbox">
                                                        <label>
                                                            <input type="radio" name="type" checked><i></i>
                                                            <span class="txt">전체</span>
                                                        </label>
                                                    </div>

                                                    <div class="rbox ms-4">
                                                        <label>
                                                            <input type="radio" name="type"><i></i>
                                                            <span class="txt">공지</span>
                                                        </label>
                                                    </div>

                                                    <div class="rbox ms-4">
                                                        <label>
                                                            <input type="radio" name="type"><i></i>
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
                                                            <input type="radio" name="type2" checked><i></i>
                                                            <span class="txt">전체</span>
                                                        </label>
                                                    </div>

                                                    <div class="rbox ms-4">
                                                        <label>
                                                            <input type="radio" name="type2"><i></i>
                                                            <span class="txt">공지</span>
                                                        </label>
                                                    </div>

                                                    <div class="rbox ms-4">
                                                        <label>
                                                            <input type="radio" name="type2"><i></i>
                                                            <span class="txt">일반</span>
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

                                                    <div class="tbox w-150px  with-calendar">
                                                        <input type="text" class="date-picker" placeholder="2023-01-23">
                                                    </div>
                                                    <div class="unit-box ms-2 text-gray-600">~</div>
                                                    <div class="tbox w-150px ms-2 with-calendar">
                                                        <input type="text" class="date-picker" placeholder="2023-01-23">
                                                    </div>

                                                    <div class="rbox ms-10">
                                                        <label>
                                                            <input type="radio" name="range" checked><i></i>
                                                            <span class="txt">오늘</span>
                                                        </label>
                                                    </div>

                                                    <div class="rbox ms-4">
                                                        <label>
                                                            <input type="radio" name="range"><i></i>
                                                            <span class="txt">7일</span>
                                                        </label>
                                                    </div>

                                                    <div class="rbox ms-4">
                                                        <label>
                                                            <input type="radio" name="range"><i></i>
                                                            <span class="txt">15일</span>
                                                        </label>
                                                    </div>

                                                    <div class="rbox ms-4">
                                                        <label>
                                                            <input type="radio" name="range"><i></i>
                                                            <span class="txt">30일</span>
                                                        </label>
                                                    </div>

                                                    <div class="rbox ms-4">
                                                        <label>
                                                            <input type="radio" name="range"><i></i>
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
                                                        <input type="text" placeholder="제목 또는 내용 입력">

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

                                    <div class="head-txt-box">검색결과 <span class="rounded-pill bg-primary text-white px-2 ms-2">99+</span></div>
                                </div>

                                <div class="option-box">

                                    <a href="javascript:void(0)" class="btn btn-flex btn-xs btn-primary py-2" data-bs-toggle="modal" data-bs-target="#kt_modal_edit_board">공지사항 등록</a>


                                </div>

                            </div>



                            <div class="table-body-box">

                                <div class="table-box with-scroll small">
                                    <table class="table-layout-fixed">
                                        <colgroup>
                                            <col style="width: 70px;">
                                            <col style="width: 100px;">
                                            <col style="width: auto;">
                                            <col style="width: 100px;">
                                            <col style="width: 200px;">
                                            <col style="width: 100px;">
                                            <col style="width: 200px;">
                                            <col style="width: 100px;">
                                            <col style="width: 70px;">

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
                                            <th>기능</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        <tr>
                                            <td>7</td>
                                            <td><span class="rounded-pill bg-primary text-white px-2">공지</span></td>
                                            <td class="left">
                                                <div class="txt-with-label">
                                                    <div class="txt-box">공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목공지사항 제목</div>
                                                    <div class="label-box ms-2"><span class="text-primary">NEW</span></div>
                                                </div>
                                            </td>
                                            <td><i class="fa-regular fa-floppy-disk" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td>2023-06-01 ~ 2023-09-01</td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td>2023.06.12 09시</td>
                                            <td>홍길동 (sbamaster)</td>
                                            <td>
                                                <a href="javascript:detailView()" class="btn btn-flex btn-xs btn-outline btn-outline-primary">수정</a>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>7</td>
                                            <td><span class="rounded-pill border border-1 border-gray-600 text-gray-600 px-2">일반</span></td>
                                            <td class="left">
                                                <div class="txt-with-label">
                                                    <div class="txt-box">공지사항</div>
                                                </div>
                                            </td>
                                            <td>-</td>
                                            <td>2023-06-01 ~ 2023-09-01</td>
                                            <td><i class="fa-regular fa-circle-check" style="color: #74afeb; font-size:20px;"></i></td>
                                            <td>2023.06.12 09시</td>
                                            <td>홍길동 (sbamaster)</td>
                                            <td>
                                                <a href="javascript:detailView()" class="btn btn-flex btn-xs btn-outline btn-outline-primary">수정</a>
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
    <div class="modal fade" id="kt_modal_edit_board" tabindex="-1" aria-hidden="true" style="">
        <!--begin::Modal dialog-->
        <div class="modal-dialog mw-1500px modal-dialog-centered">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header px-10 py-5 d-flex justify-content-between">
                    <!--begin::Modal title-->
                    <h2>시스템 공지사항 등록/수정</h2>
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
                                        <th>공지유형 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-cell-box">
                                                <div class="rbox">
                                                    <label>
                                                        <input type="radio" name="type" checked>
                                                        <i></i><span class="txt">일반</span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="type" >
                                                        <i></i><span class="txt">공지</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>제목 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-cell-box full">
                                                <div class="tbox full">
                                                    <input type="text" value="">
                                                </div>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <th>내용 <span class="text-primary">*</span></th>
                                        <td>
                                            에디터 영역
                                        </td>

                                    </tr>

                                    <tr>
                                        <th>첨부파일</th>
                                        <td>
                                            <div class="item-row-box">
                                                <div class="item-cell-box">
                                                    <div class="upload-group-box d-flex">
                                                        <div class="upload-btn-box">
                                                            <label>
                                                                <input type="file">
                                                                <span class="txt">첨부파일</span>
                                                            </label>
                                                        </div>
                                                        <div class="upload-note-box">형식 : jpg, jpeg, png, svg, xls, xlsx, doc, docx, ppt, pptx, pdf, hwp / 용량 : 최대 5MB로 등록해 주세요.</div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div class="item-row-box">

                                                <div class="file-upload-list">
                                                    <div class="file-upload-item">
                                                        <span class="txt">Project Notice.jpg</span>
                                                        <a href="javascript:void(0)" onclick="fileRemove(this)">
                                                            <i class="fa-solid fa-xmark" style="color:#74AFEB"></i>
                                                        </a>
                                                    </div>
                                                </div>

                                            </div>

                                        </td>
                                    </tr>


                                    <tr>
                                        <th>공지기간 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-cell-box">
                                                <div class="tbox w-150px  with-calendar me-5">
                                                    <input type="text" class="date-picker" placeholder="2023-01-23">
                                                </div>

                                                <div class="sbox w-75px me-5">
                                                    <select>
                                                        <option>10</option>
                                                    </select>
                                                </div>

                                                <div class="sbox w-75px me-2">
                                                    <select>
                                                        <option>00</option>
                                                    </select>
                                                </div>

                                                <div class="unit-box mx-2 text-gray-600">~</div>


                                                <div class="tbox w-150px  with-calendar me-5">
                                                    <input type="text" class="date-picker" placeholder="2023-01-23">
                                                </div>

                                                <div class="sbox w-75px me-5">
                                                    <select>
                                                        <option>10</option>
                                                    </select>
                                                </div>

                                                <div class="sbox w-75px">
                                                    <select>
                                                        <option>00</option>
                                                    </select>
                                                </div>


                                                <div class="cbox ms-5">
                                                    <label>
                                                        <input type="checkbox" name="check" ><i></i>
                                                        <span class="txt">종료일 무제한</span>
                                                    </label>
                                                </div>


                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <th>노출 여부 <span class="text-primary">*</span></th>
                                        <td>
                                            <div class="item-cell-box">
                                                <div class="rbox">
                                                    <label>
                                                        <input type="radio" name="public" checked>
                                                        <i></i><span class="txt">노출</span>
                                                    </label>
                                                </div>

                                                <div class="rbox ms-4">
                                                    <label>
                                                        <input type="radio" name="public" >
                                                        <i></i><span class="txt">미노출</span>
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



                    <article class="modal-menu-layout1 pt-10">

                        <div class="modal-menu-list">
                            <a href="javascript:alertPopupOpen('파일용량은 5MB 이하만<br/>등록 가능합니다.')" class="modal-menu-btn menu-cancel">닫기</a>

                            <a href="javascript:confirmPopupOpen('저장 하시겠습니까?')" class="modal-menu-btn menu-primary">저장</a>
                        </div>


                    </article>
                </div>
                <!--end::Modal body-->
            </div>
            <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
    </div>

<!--  detail  -->
    <div class="modal fade" id="kt_modal_board_view" tabindex="-1" aria-hidden="true">
        <!--begin::Modal dialog-->
        <div class="modal-dialog mw-800px modal-dialog-centered">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header px-10 py-5 d-flex justify-content-between">
                    <!--begin::Modal title-->
                    <h2>시스템 공지사항 상세</h2>
                    <!--end::Modal title-->
                    <!--begin::Close-->

                    <div class="btn-list">

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
                    </div>

                    <!--end::Close-->
                </div>

                <!--begin::Modal header-->
                <!--begin::Modal body-->
                <div class="modal-body scroll-y py-10 px-10">

                    <article class="board-view-layout1">

                        <div class="view-head-box py-6 px-6">

                            <div class="head-main-box">
                                <div class="label-box me-2">
                                    <span class="rounded-pill bg-primary text-white px-2">공지</span>

                                    <!--
                                    <span class="rounded-pill border border-1 border-gray-600 text-gray-600 px-2">일반</span>
                                    -->

                                </div>
                                <div class="subject-box">병상배정 시스템 프로젝트 오픈 공지</div>
                            </div>

                            <div class="head-sub-box pt-3">
                                <span class="sub-txt text-gray-600">등록일 : 2023-04-05</span>
                                <span class="sub-txt text-gray-600">등록자 : 홍길동</span>
                            </div>

                        </div>

                        <div class="view-body-box py-8 px-6">

                            <div class="view-contents">내용</div>

                        </div>

                        <div class="view-foot-box">

                            <div class="foot-row-box py-4">

                                <div class="subject-box">첨부파일</div>

                                <div class="con-box">
                                    <div class="file-upload-list">
                                        <div class="file-upload-item">
                                            <span class="txt">Project Notice.jpg</span>
                                            <a href="javascript:void(0)" onclick="fileRemove(this)">
                                                <i class="fa-solid fa-xmark" style="color:#74AFEB"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

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
  <!--end::Modal - 내정보-->
</template>

<script>

export default {
    components: {

    },
    name: 'ListAncmt',
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