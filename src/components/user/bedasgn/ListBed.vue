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
                            <li class="breadcrumb-item text-gray-700 fw-semibold lh-1 mx-n1 fs-6">병상배정</li>
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
                                    class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">병상배정
                                현황</h1></li>
                            <li class="breadcrumb-item ml-2"><span>내 기관에 할당된 병상배정 업무 목록을 표시합니다</span></li>

                            <!--end::Item-->
                        </ul>
                        <!--end::Breadcrumb-->
                        <!--begin::Title-->
                        <!--end::Title-->
                    </div>
                    <!--end::Page title-->
                    <!--begin::Actions-->
                    <div class="d-flex align-items-center gap-2 gap-lg-3">
                        <a href="#" class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7" data-bs-toggle="modal"
                           data-bs-target="#kt_modal_view_users"><i class="fa-regular fa-trash-can"></i> 삭제</a>
                        <a href="#" class="btn btn-flex btn-sm btn-secondary fs-7" data-bs-toggle="modal"
                           data-bs-target="#kt_modal_view_users"><i class="fa-solid fa-download"></i> 엑셀다운로드</a>
                        <a href="javascript:requestModal();" class="btn btn-sm btn-flex btn-primary align-self-center px-3">
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

                            <div class="form-head-box">

                            </div>

                            <div class="form-body-box">

                                <div class="table-form-toggle-box">
                                    <a class="table-form-toggle-btn" @click="toggleTable">
                                        <i class="fa-solid" :class="showTable ? 'fa-angle-up' : 'fa-angle-down'"></i>
                                    </a>
                                </div>

                                <div class="table-box with-toggle">
                                    <table>
                                        <colgroup>
                                            <col style="width: 168px;">
                                            <col style="width: auto;">
                                            <col style="width: 168px;">
                                            <col style="width: auto;">
                                            <col style="width: 168px;">
                                            <col style="width: auto;">
                                            <col style="width: 168px;">
                                            <col style="width: auto;">
                                        </colgroup>
                                        <tbody>
                                        <tr data-toggle="false">
                                            <th>검색조건</th>
                                            <td colspan="3">
                                                <div class="item-row-box">

                                                    <div class="item-cell-box">
                                                        <div class="cbox">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">병상요청 <span class="cnt ms-1">{{ bdCnt[0] }}</span></span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">병상배정반 <span class="cnt ms-1">{{ bdCnt[1] }}</span></span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">이송 · 배차 <span class="cnt ms-1">{{ bdCnt[2] }}</span></span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">입 ·퇴원 처리 <span class="cnt ms-1">{{ bdCnt[3] }}</span></span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">완료 <span class="cnt ms-1">{{ bdCnt[4] }}</span></span>
                                                            </label>
                                                        </div>

                                                    </div>

                                                </div>

                                            </td>
                                            <td colspan="4" class="border-left-1 border-color-gray">
                                                <div class="item-cell-box full">

                                                    <div class="tbox full with-btn">
                                                        <input type="text" placeholder="이름, 생년월일 또는 휴대폰 번호 입력">

                                                        <a href="javascript:void(0)" class="input-btn">
                                                            <i class="fa-solid fa-magnifying-glass"></i>
                                                        </a>
                                                    </div>


                                                    <div class="sbox w-150px ms-5">
                                                        <select>
                                                            <option>최근 1개월</option>
                                                        </select>
                                                    </div>


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
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">투석</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">임산부</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">신생아</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">소아</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">인공호흡기</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">적극적 치료요청</span>
                                                            </label>
                                                        </div>

                                                    </div>

                                                </div>
                                            </td>

                                            <th>중증도</th>
                                            <td colspan="3">
                                                <div class="item-row-box">
                                                    <div class="item-cell-box">
                                                        <div class="cbox">
                                                            <label>
                                                                <input type="checkbox" name="type3"><i></i>
                                                                <span class="txt">중환자</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type3"><i></i>
                                                                <span class="txt">중증</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type3"><i></i>
                                                                <span class="txt">준증증</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type3"><i></i>
                                                                <span class="txt">중등증</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type3"><i></i>
                                                                <span class="txt">기타</span>
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
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">읍압격리</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">일반격리</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">일반</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">소아읍압격리</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">소아일반격리</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
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
                                                                <input type="checkbox" name="type3"><i></i>
                                                                <span class="txt">여자</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type3"><i></i>
                                                                <span class="txt">남자</span>
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
                                                            <input type="text" class="px-2 text-center" placeholder="숫자">
                                                        </div>
                                                        <span class="text-gray-600">이상 ~</span>
                                                        <div class="tbox w-50px mx-2">
                                                            <input type="text" class="px-2 text-center" placeholder="숫자">
                                                        </div>
                                                        <span class="text-gray-600">이하</span>

                                                    </div>

                                                </div>
                                            </td>


                                        </tr>


                                        <tr v-show="showTable">
                                            <th>장비정보</th>
                                            <td colspan="7">
                                                <div class="item-row-box">

                                                    <div class="item-cell-box">
                                                        <div class="cbox">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">인공호흡기 일반</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">인공호흡기 조산아</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">인큐베이터</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">ECMO</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">중심체온조절유도기</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">CT</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">MRI</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">혈관촬영기</span>
                                                            </label>
                                                        </div>


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
                        <h5>검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">{{ bdList.length }}</span></h5>

                        <article v-if="bdList === []" class="table-list-layout1">

                            <div class="table-body-box">

                                <div class="table-nodata py-40">

                                    <div class="img-box">
                                        <img src="/img/common/img_nodata.svg" alt="이미지">
                                    </div>

                                    <div class="txt-box pt-10">조회 결과가 없습니다.</div>

                                </div>

                            </div>

                        </article>
                        <article v-if="bdList !== [] " class="table-list-layout1">

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

                                        <tbody>

                                        <tr v-for="(item,i) in bdList" :key="i">
                                            <td>{{i+1}}</td>
                                            <td>
                                                <div class="cbox d-flex justify-content-center">
                                                    <label>
                                                        <input type="checkbox"><i></i>
                                                    </label>
                                                </div>
                                            </td>
                                            <td>{{ item.bedStatCdNm }}</td>
                                            <td>{{ maskingNm(item.ptNm) }}</td>
                                            <td>{{ item.gndr }}</td>
                                            <td>{{ item.age }}</td>
                                            <td>{{ item.diagNm }}</td>
                                            <td>중환자</td>
                                            <td>읍압격리</td>
                                            <td>{{ getTag(item.tagList) }}</td>
                                            <td>{{ item.bascAddr }}</td>
                                            <td>23:22</td>
                                            <td>
                                                <a href="" data-bs-toggle="modal" :data-bs-target="getBtn(item.bedStatCd)[1]"
                                                   class="btn btn-flex btn-xs btn-outline btn-outline-primary w-125px justify-content-center"
                                                   style="line-height: 1.2">{{ getBtn(item.bedStatCd)[0] }}</a>
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
<!--  신규병상요청   -->
    <div class="modal fade" id="kt_modal_request" tabindex="-1" aria-hidden="true">
        <!--begin::Modal dialog-->
        <div class="modal-dialog mw-1500px modal-dialog-centered">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header px-10 py-5 d-flex justify-content-between">
                    <!--begin::Modal title-->
                    <h2>병상요청</h2>
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

                    <article class="floating-request-box">

                        <div class="img-box">
                            <img src="/img/common/ic_request_patient.svg" alt="이미지">
                        </div>
                        <div class="txt-box">신규 환자 등록</div>
                        <div class="txt-box">성경희 <span class="text-gray-600 fw-normal">(여 / 76세 / 경상북도 칠곡군 / 010-8833-1234)</span>
                        </div>
                        <div class="txt-box"><span class="text-primary">#중증 #투석</span></div>


                    </article>
                </div>

                <!--begin::Modal header-->
                <!--begin::Modal body-->
                <div class="modal-body scroll-y py-10 px-10">

                    <article class="request-step-layout">

                        <div class="step-list">

                            <div class="step-box active">
                                <div class="order-box">1</div>
                                <div class="info-box">
                                    <div class="subject-box">1단계</div>
                                    <div class="con-box">환자정보 입력,<br/>
                                        역학조사서 업로드
                                    </div>
                                </div>

                            </div>

                            <div class="step-box">
                                <div class="order-box">2</div>
                                <div class="info-box">
                                    <div class="subject-box">2단계</div>
                                    <div class="con-box">질병정보 입력</div>
                                </div>

                            </div>

                            <div class="step-box">
                                <div class="order-box">3</div>
                                <div class="info-box">
                                    <div class="subject-box">3단계</div>
                                    <div class="con-box">중증정보 입력</div>
                                </div>

                            </div>

                            <div class="step-box">
                                <div class="order-box">4</div>
                                <div class="info-box">
                                    <div class="subject-box">4단계</div>
                                    <div class="con-box">출발지·요청내용 입력</div>
                                </div>

                            </div>

                        </div>


                    </article>


                    <article class="tabs-group-list-layout">

                        <div class="tabs-box" data-tabs="tabs1" style="">
                            <div class="d-flex justify-content-end text-danger pb-2">* 필수 입력 항목</div>

                            <div class="d-flex">
                                <div class="table-view-box" style="width:363px;">

                                    <article class="table-form-layout1 h-100">

                                        <div class="form-head-box">

                                        </div>


                                        <div class="form-body-box h-100">

                                            <div class="table-box h-100">
                                                <table class="h-100">
                                                    <colgroup>
                                                        <col style="width: 363px;">
                                                    </colgroup>
                                                    <tbody>
                                                    <tr>
                                                        <th>역학조사서 업로드 (선택)</th>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <article class="modal-profile-layout1">

                                                                <div class="profile-card-box flex-column mx-auto" style="width: 264px;">
                                                                    <div class="profile-view-box " style="width: 100%; height: 264px;">
                                                                        <img src="/img/common/img_profile_dummy.png" alt="이미지">
                                                                        <a href="javascript:confirmPopupOpen('역학조사서 이미지를<br/> 삭제하시겠습니까?',
                                                                        function() {profileImgRemove();confirmPopupClose();alertPopupOpen('역학조사서가 삭제되었습니다.');})"
                                                                           class="remove-btn"><img src="/img/common/ic_profile_remove.svg" alt="이미지"></a>
                                                                    </div>

                                                                    <div class="profile-upload-box">

                                                                        <div class="upload-box">
                                                                            <label
                                                                                    class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px certify-btn rounded-1 mt-2 btn-outline btn-outline-primary ">
                                                                                <input type="file">
                                                                                수정하기
                                                                            </label>
                                                                        </div>

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

                                </div>
                                <div class="table-info-box">

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
                                                        <th>환자이름 <span class="text-primary">*</span></th>
                                                        <td>
                                                            <div class="item-cell-box">
                                                                <div class="tbox">
                                                                    <input type="text" value="이름">
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <th>성별</th>
                                                        <td>여</td>
                                                    </tr>

                                                    <tr>
                                                        <th>주민등록번호 <span class="text-primary">*</span></th>
                                                        <td>
                                                            <div class="item-row-box">
                                                                <div class="item-cell-box">
                                                                    <div class="tbox">
                                                                        <input type="text" value="이름">
                                                                    </div>
                                                                    <div class="unit-box mx-2 text-gray-600">-</div>
                                                                    <div class="tbox w-30px" style="min-width: 30px;">
                                                                        <input type="password" value="*" class="p-0 text-center fs-3x" maxlength="1">
                                                                    </div>
                                                                    <div class="unit-box ms-2" style="line-height: 30px;">●●●●●●</div>

                                                                </div>
                                                            </div>
                                                            <div class="item-row-box">
                                                                <div class="item-note-box">* 주민등록번호 입력</div>
                                                            </div>

                                                        </td>
                                                        <th>나이 (만)</th>
                                                        <td>76세</td>
                                                    </tr>

                                                    <tr>
                                                        <th rowspan="3">주소 <span class="text-primary">*</span></th>
                                                        <td rowspan="3">
                                                            <div class="item-row-box">
                                                                <div class="item-cell-box full">
                                                                    <div class="tbox full">
                                                                        <input type="text" value="03672" readonly>
                                                                    </div>
                                                                    <a href="javascript:void(0);"
                                                                       class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                                                                       style="min-width: 80px;">주소검색</a>
                                                                </div>
                                                            </div>

                                                            <div class="item-row-box">
                                                                <div class="item-cell-box full">
                                                                    <div class="tbox full">
                                                                        <input type="text" value="경상북도 칠곡군 왜관읍 중앙로">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="item-row-box">
                                                                <div class="item-cell-box full">
                                                                    <div class="tbox full">
                                                                        <input type="text" value="118 110동 101호">
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="item-row-box">
                                                                <div class="item-cell-box">
                                                                    <div class="item-note-box">* 기본주소 입력</div>
                                                                </div>
                                                            </div>


                                                        </td>

                                                        <th>휴대전화번호</th>
                                                        <td>
                                                            <div class="item-cell-box full">
                                                                <div class="tbox full">
                                                                    <input type="text" value="010-7579-1591">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>보호자 이름</th>
                                                        <td>
                                                            <div class="item-cell-box full">
                                                                <div class="tbox full">
                                                                    <input type="text" value="성민호">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                    <tr>
                                                        <th>전화번호</th>
                                                        <td>
                                                            <div class="item-cell-box full">
                                                                <div class="tbox full">
                                                                    <input type="text" value="010-7579-1591">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>사망여부 <span class="text-primary">*</span></th>
                                                        <td>
                                                            <div class="item-cell-box full justify-content-between">
                                                                <article class="toggle-list-layout2">

                                                                    <div class="toggle-list">

                                                                        <label>
                                                                            <input type="radio" name="toggle1" checked="">
                                                                            <span class="txt">생존</span>
                                                                        </label>

                                                                        <label>
                                                                            <input type="radio" name="toggle1">
                                                                            <span class="txt">사망</span>
                                                                        </label>


                                                                    </div>

                                                                </article>

                                                                <div class="item-note-box">* 사망여부 선택</div>
                                                            </div>
                                                        </td>

                                                        <th>직업</th>
                                                        <td>
                                                            <div class="item-cell-box full">
                                                                <div class="tbox full">
                                                                    <input type="text" value="회사원">
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>국적 <span class="text-primary">*</span></th>
                                                        <td>
                                                            <div class="item-row-box">
                                                                <div class="item-cell-box full justify-content-between">
                                                                    <article class="toggle-list-layout2">

                                                                        <div class="toggle-list">

                                                                            <label>
                                                                                <input type="radio" name="nation" checked="">
                                                                                <span class="txt">대한민국</span>
                                                                            </label>

                                                                            <label>
                                                                                <input type="radio" name="nation">
                                                                                <span class="txt">알수없음</span>
                                                                            </label>

                                                                            <label>
                                                                                <input type="radio" name="nation" value="input">
                                                                                <span class="txt">직접입력</span>
                                                                            </label>


                                                                        </div>

                                                                    </article>

                                                                    <div class="item-note-box">* 국적 선택</div>
                                                                </div>
                                                            </div>

                                                            <div class="item-row-box">
                                                                <div class="tbox" style="width: 211px;">
                                                                    <input type="text" value="" placeholder="국가명 입력" readonly class="nation-input">
                                                                </div>
                                                            </div>
                                                        </td>

                                                    </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>


                                    </article>
                                </div>
                            </div>

                            <article class="modal-menu-layout1 pt-10">
                                <div class="modal-menu-list">
                                    <!--								<a href="javascript:requestTabMove(2)" class="modal-menu-btn menu-primary">다음</a>-->
                                    <a href="javascript:popupOpen('exist')" class="modal-menu-btn menu-primary">다음</a>
                                </div>
                            </article>
                        </div>

                        <div class="tabs-box" data-tabs="tabs2" style="display: none;">
                            <div class="d-flex justify-content-end text-danger pb-2">* 필수 입력 항목</div>

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
                                                <th>담당보건소</th>
                                                <td>
                                                    <div class="item-row-box">
                                                        <div class="item-cell-box">
                                                            <div class="sbox" style="width: 170px;">
                                                                <select>
                                                                    <option>대구광역시</option>
                                                                </select>
                                                            </div>
                                                            <div class="sbox ms-3" style="width: 170px;">
                                                                <select>
                                                                    <option>보건소 선택</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="item-row-box">
                                                        <div class="item-cell-box">
                                                            <div class="tbox w-350px">
                                                                <input readonly placeholder="보건소명 직접 입력">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <th>코로나19 증상 및 증후</th>
                                                <td>
                                                    <div class="textbox">
                                                        <textarea style="height: 66px;" class="py-2 px-4"></textarea>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>질병명</th>
                                                <td>
                                                    <div class="item-cell-box">
                                                        <div class="tbox w-350px">
                                                            <input type="text" value="" placeholder="질병명 입력">
                                                        </div>
                                                    </div>
                                                </td>
                                                <th>확진검사결과</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="검사결과 입력 예) 양성">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <th>질병급</th>
                                                <td>
                                                    <div class="item-cell-box">
                                                        <div class="tbox w-350px">
                                                            <input type="text" placeholder="질병급 입력">
                                                        </div>
                                                    </div>
                                                </td>
                                                <th>발병일 / 진단일 / 신고일</th>
                                                <td>
                                                    <div class="item-cell-box">
                                                        <div class="tbox" style="width: 110px;">
                                                            <input type="text" placeholder="YYYY-MM-DD">
                                                        </div>

                                                        <a href="javascript:void(0);"
                                                           class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                                                           style="min-width: 80px; line-height: 1.2;">전체동일</a>

                                                        <div class="tbox ms-3" style="width: 110px;">
                                                            <input type="text" placeholder="YYYY-MM-DD">
                                                        </div>
                                                        <div class="tbox ms-3" style="width: 110px;">
                                                            <input type="text" placeholder="YYYY-MM-DD">
                                                        </div>

                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>환자등분류</th>
                                                <td>
                                                    <div class="item-cell-box">
                                                        <div class="tbox w-350px">
                                                            <input type="text" value="" placeholder="환자등분류 입력">
                                                        </div>
                                                    </div>
                                                </td>
                                                <th>비고</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="PCR 등 검사방법 외">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>입원여부 <span class="text-primary">*</span></th>
                                                <td>
                                                    <div class="item-cell-box full justify-content-between">
                                                        <article class="toggle-list-layout2">

                                                            <div class="toggle-list">

                                                                <label>
                                                                    <input type="radio" name="toggle2-1" checked="">
                                                                    <span class="txt">입원</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle2-1">
                                                                    <span class="txt">외래</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle2-1">
                                                                    <span class="txt">재택</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle2-1">
                                                                    <span class="txt">기타</span>
                                                                </label>


                                                            </div>

                                                        </article>

                                                        <div class="item-note-box">* 입원여부 선택</div>
                                                    </div>
                                                </td>
                                                <th>요양기관 기호 / 이름</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox" style="min-width:205px;">
                                                            <input type="text" placeholder="요양기관기호 입력">
                                                        </div>

                                                        <div class="tbox full ms-3">
                                                            <input type="text" placeholder="요양기관명 입력">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <th rowspan="3">요양기관 주소 <span class="text-primary">*</span></th>
                                                <td rowspan="3">
                                                    <div class="item-row-box">
                                                        <div class="item-cell-box full">
                                                            <div class="tbox full">
                                                                <input type="text" value="" readonly placeholder="우편번호">
                                                            </div>
                                                            <a href="javascript:void(0);"
                                                               class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                                                               style="min-width: 80px;">주소검색</a>
                                                        </div>
                                                    </div>

                                                    <div class="item-row-box">
                                                        <div class="item-cell-box full">
                                                            <div class="tbox full">
                                                                <input type="text" value="" placeholder="기본주소 입력">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="item-row-box">
                                                        <div class="item-cell-box full">
                                                            <div class="tbox full">
                                                                <input type="text" value="" placeholder="상세주소 입력 (선택)">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="item-row-box">
                                                        <div class="item-cell-box">
                                                            <div class="item-note-box">* 기본주소 입력</div>
                                                        </div>
                                                    </div>


                                                </td>

                                                <th>상세주소 입력 (선택)</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" value="" placeholder="요양기관 전화번호 입력">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>진단의사 성명</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" value="" placeholder="진단의사 성명 입력">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <th>신고기관장 성명</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" value="" placeholder="신고기관장 성명 입력">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <th>기타 진단 이미지·영상 <span class="text-primary">*</span></th>
                                                <td colspan="3">

                                                    <article class="upload-form-layout1">

                                                        <div class="upload-result-wrap">

                                                            <div class="img-upload-result">
                                                                <div class="img-list">
                                                                    <div href="javascript:void(0)" class="img-box">
                                                                        <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                        <a href="javascript:void(0)" class="remove-btn"
                                                                           onclick="$(this).parents('.img-box').remove();">
                                                                            <img src="/img/common/ic_profile_remove.svg" alt="이미지">
                                                                        </a>
                                                                    </div>

                                                                    <div href="javascript:void(0)" class="img-box">
                                                                        <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                        <a href="javascript:void(0)" class="remove-btn"
                                                                           onclick="$(this).parents('.img-box').remove();">
                                                                            <img src="/img/common/ic_profile_remove.svg" alt="이미지">
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>


                                                        <div class="upload-form-wrap" style="height: 70px;">

                                                            <div class="no-file-box">
                                                                <div class="img-box">
                                                                    <img src="/img/common/ic_img_upload.svg" alt="이미지">
                                                                </div>
                                                                <div class="txt-box">첨부할 파일들을 여기로 끌어 놓으세요</div>


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
                            <article class="modal-menu-layout1 pt-10">

                                <div class="modal-menu-list">
                                    <a href="javascript:requestTabMove(1)" class="modal-menu-btn menu-cancel">이전</a>
                                    <a href="javascript:requestTabMove(3)" class="modal-menu-btn menu-primary">다음</a>
                                </div>


                            </article>
                        </div>

                        <div class="tabs-box" data-tabs="tabs3" style="display: none;">
                            <div class="d-flex justify-content-end text-danger pb-2">* 필수 입력 항목</div>

                            <article class="table-form-layout1">

                                <div class="form-head-box">


                                </div>


                                <div class="form-body-box">

                                    <div class="table-box">
                                        <table>
                                            <colgroup>
                                                <col style="width: 168px;">
                                                <col style="width: 168px;">
                                                <col style="width: auto;">
                                                <col style="width: 168px;">
                                                <col style="width: auto;">
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th>환자유형</th>
                                                <td colspan="4">
                                                    <div class="item-cell-box">
                                                        <div class="cbox">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">투석</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">임산부</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">신생아</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">소아</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">인공호흡기</span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">적극적 치료요청</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>기저질환</th>
                                                <td colspan="4">
                                                    <article class="cbox-list-layout">

                                                        <div class="cbox-row">

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">고혈압</span>
                                                                </label>
                                                            </div>

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">당뇨</span>
                                                                </label>
                                                            </div>

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">고지혈증</span>
                                                                </label>
                                                            </div>

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">심혈관</span>
                                                                </label>
                                                            </div>

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">뇌혈관</span>
                                                                </label>
                                                            </div>

                                                        </div>

                                                        <div class="cbox-row">

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">암</span>
                                                                </label>
                                                            </div>

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">만성폐질환</span>
                                                                </label>
                                                            </div>

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">신장질환</span>
                                                                </label>
                                                            </div>

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">정신질환</span>
                                                                </label>
                                                            </div>

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">결핵</span>
                                                                </label>
                                                            </div>

                                                        </div>

                                                        <div class="cbox-row">

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">천식 등 알레르기</span>
                                                                </label>
                                                            </div>

                                                            <div class="cbox">
                                                                <label>
                                                                    <input type="checkbox" name="disease"><i></i>
                                                                    <span class="txt">면역력저하자</span>
                                                                </label>
                                                            </div>

                                                        </div>

                                                        <div class="cbox-row">


                                                            <div class="d-inline-flex">


                                                                <div class="cbox w-auto">
                                                                    <label>
                                                                        <input type="checkbox" name="disease"><i></i>
                                                                        <span class="txt">기타</span>
                                                                    </label>
                                                                </div>

                                                                <div class="tbox d-inline-flex ms-4 w-300px">
                                                                    <input type="text" placeholder="직접 입력">
                                                                </div>
                                                            </div>


                                                        </div>


                                                    </article>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>요청 병상 유형 <span class="text-primary">*</span></th>
                                                <td colspan="4">
                                                    <div class="item-cell-box full justify-content-between">
                                                        <article class="toggle-list-layout2">

                                                            <div class="toggle-list">

                                                                <label>
                                                                    <input type="radio" name="toggle3-1" checked="">
                                                                    <span class="txt">음압격리</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle3-1">
                                                                    <span class="txt">일반격리</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle3-1">
                                                                    <span class="txt">소아음압격리</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle3-1">
                                                                    <span class="txt">소아일반격리</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle3-1">
                                                                    <span class="txt">소아</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle3-1">
                                                                    <span class="txt">일반</span>
                                                                </label>


                                                            </div>

                                                        </article>
                                                    </div>
                                                    <div class="item-cell-box pt-2" style="font-size:12px; letter-spacing: -0.05em; color:#696971;">
                                                        * 요청 병상 유형을 선택해주세요
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>DNR 동의 여부 <span class="text-primary">*</span></th>
                                                <td colspan="4">
                                                    <div class="item-cell-box full justify-content-between">
                                                        <article class="toggle-list-layout2">

                                                            <div class="toggle-list">

                                                                <label>
                                                                    <input type="radio" name="toggle4-1" checked="">
                                                                    <span class="txt">동의</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle4-1">
                                                                    <span class="txt">비동의</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle4-1">
                                                                    <span class="txt">해당없음</span>
                                                                </label>

                                                            </div>

                                                        </article>
                                                    </div>
                                                    <div class="item-cell-box pt-2" style="font-size:12px; letter-spacing: -0.05em; color:#696971;">
                                                        * DNR 동의여부를 선택해주세요
                                                    </div>
                                                </td>
                                            </tr>


                                            <tr>
                                                <th rowspan="6">중증도분류 <span class="text-primary">*</span></th>
                                                <td colspan="4">
                                                    <div class="item-cell-box full justify-content-between">
                                                        <article class="toggle-list-layout2">

                                                            <div class="toggle-list">

                                                                <label>
                                                                    <input type="radio" name="toggle5-1" checked="">
                                                                    <span class="txt">중환자</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle5-1">
                                                                    <span class="txt">중증</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle5-1">
                                                                    <span class="txt">준증증</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle5-1">
                                                                    <span class="txt">일반</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle5-1">
                                                                    <span class="txt">생체정보AI분석</span>
                                                                </label>

                                                            </div>

                                                        </article>
                                                    </div>
                                                    <div class="item-cell-box pt-2" style="font-size:12px; letter-spacing: -0.05em; color:#696971;">
                                                        * 중증 정보를 선택해주세요
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>의식상태</th>
                                                <td>
                                                    <div class="item-cell-box full justify-content-between">
                                                        <article class="toggle-list-layout2">

                                                            <div class="toggle-list">
                                                                <label>
                                                                    <input type="radio" name="toggle3-6" checked="">
                                                                    <span class="txt">명료</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle3-6">
                                                                    <span class="txt">비명료</span>
                                                                </label>

                                                            </div>

                                                        </article>
                                                    </div>
                                                </td>
                                                <th>산소 투여 여부</th>
                                                <td>
                                                    <div class="item-cell-box full justify-content-between">
                                                        <article class="toggle-list-layout2">

                                                            <div class="toggle-list">
                                                                <label>
                                                                    <input type="radio" name="toggle3-7" checked="">
                                                                    <span class="txt">투여</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle3-7">
                                                                    <span class="txt">비투여</span>
                                                                </label>

                                                            </div>

                                                        </article>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>체온(℃)</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="">
                                                        </div>
                                                    </div>
                                                </td>
                                                <th>맥박(회/분)</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>분당호흡수(회/분)</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="">
                                                        </div>
                                                    </div>
                                                </td>
                                                <th>산소포화도(%)</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>수축기혈압(mmHg)</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="">
                                                        </div>
                                                    </div>
                                                </td>
                                                <td colspan="2">
                                                </td>
                                            </tr>

                                            <tr>
                                                <td colspan="4">

                                                    <article class="analysis-layout1">

                                                        <div class="analysis-submit-box">
                                                            <a href="javascript:void(0)" class="analysis-submit-btn">분석</a>
                                                            <div class="submit-note-box">* 생체정보를 모두 입력하신 경우 AI 분석이 가능합니다</div>
                                                        </div>

                                                        <div class="analysis-result-box">

                                                            <div class="result-box">
                                                                <div class="subject-box">중증도 분석 결과 :</div>
                                                                <div class="con-box text-primary">중증</div>
                                                            </div>

                                                            <div class="result-box">
                                                                <div class="subject-box">NEWs Score :</div>
                                                                <div class="con-box text-primary">20</div>
                                                            </div>


                                                        </div>

                                                        <div class="analysis-note-box">
                                                            <div class="pt-2" style="font-size:12px; letter-spacing: -0.05em; color:#696971;">
                                                                * 중증도 분석 A.I 시스템의 분석 값 입니다
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


                            <article class="modal-menu-layout1 pt-10">

                                <div class="modal-menu-list">
                                    <a href="javascript:requestTabMove(2)" class="modal-menu-btn menu-cancel">이전</a>


                                    <a href="javascript:requestTabMove(4)" class="modal-menu-btn menu-primary">다음</a>
                                </div>


                            </article>
                        </div>

                        <div class="tabs-box" data-tabs="tabs4" style="display: none;">
                            <div class="d-flex justify-content-end text-danger pb-2">* 필수 입력 항목</div>

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
                                                <th>배정요청 지역 <span class="text-primary">*</span></th>
                                                <td>
                                                    <div class="item-cell-box full" style="">
                                                        <div class="sbox w-350px">
                                                            <select>
                                                                <option>대구광역시</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="item-cell-box pt-2" style="font-size:12px; letter-spacing: -0.05em; color:#696971;">
                                                        * 병상배정 지자체를 선택해주세요
                                                    </div>
                                                </td>

                                                <th data-type="type1" style=";">보호자 1 연락처</th>
                                                <td data-type="type1" style=";">
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="검사결과 입력 예) 양성">
                                                        </div>
                                                    </div>
                                                </td>


                                                <th data-type="type2" style="display: none;">원내배정 여부 <span class="text-primary">*</span></th>
                                                <td data-type="type2" style="display: none;">
                                                    <div class="item-cell-box full justify-content-between">
                                                        <article class="toggle-list-layout2">

                                                            <div class="toggle-list">

                                                                <label>
                                                                    <input type="radio" name="toggle4-1" checked="">
                                                                    <span class="txt">전원요청</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle4-1">
                                                                    <span class="txt">원내배정</span>
                                                                </label>

                                                            </div>

                                                        </article>
                                                    </div>
                                                    <div class="item-cell-box pt-2" style="font-size:12px; letter-spacing: -0.05em; color:#696971;">
                                                        * 원내배정 여부 선택
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th data-type="dynamic">환자 출발지<span class="text-primary">*</span></th>
                                                <td data-type="dynamic" style="vertical-align: top;">
                                                    <div class="item-cell-box full justify-content-between">
                                                        <article class="toggle-list-layout2">

                                                            <div class="toggle-list">

                                                                <label>
                                                                    <input type="radio" name="toggle4-2" checked="" value="type1">
                                                                    <span class="txt">자택</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle4-2" value="type2">
                                                                    <span class="txt">병원</span>
                                                                </label>

                                                                <label>
                                                                    <input type="radio" name="toggle4-2" value="type3">
                                                                    <span class="txt">기타지역</span>
                                                                </label>

                                                            </div>

                                                        </article>
                                                    </div>
                                                    <div class="item-cell-box pt-2" style="font-size:12px; letter-spacing: -0.05em; color:#696971;">
                                                        * 유효성 검사 문구
                                                    </div>
                                                </td>
                                                <th data-type="type1">보호자 2 연락처</th>
                                                <td data-type="type1">
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="검사결과 입력 예) 양성">
                                                        </div>
                                                    </div>
                                                </td>

                                                <!-- 출발지 병원 -->
                                                <th data-type="type2" style="display: none;">진료과</th>

                                                <td data-type="type2" style="display: none;">
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="진료과 입력">
                                                        </div>
                                                    </div>
                                                </td>

                                            </tr>

                                            <!-- 출발지 병원 -->
                                            <tr class="" data-type="type2" style="display: none;">
                                                <th>담당의</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="담당의 이름 입력">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="" data-type="type2" style="display: none;">
                                                <th>전화번호</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="tbox full">
                                                            <input type="text" placeholder="연락 전화번호 입력">
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>

                                            <tr>
                                                <th>출발지 주소</th>
                                                <td>
                                                    <div class="item-row-box">
                                                        <div class="item-cell-box full">
                                                            <div class="tbox full">
                                                                <input type="text" value="" readonly placeholder="우편번호">
                                                            </div>
                                                            <a href="javascript:void(0);"
                                                               class="btn btn-flex justify-content-center btn-primary py-0 px-0 h-30px w-80px ms-3 certify-btn rounded-1"
                                                               style="min-width: 80px;">주소검색</a>
                                                        </div>
                                                    </div>

                                                    <div class="item-row-box">
                                                        <div class="item-cell-box full">
                                                            <div class="tbox full">
                                                                <input type="text" value="" placeholder="기본주소 입력">
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div class="item-row-box">
                                                        <div class="item-cell-box full">
                                                            <div class="tbox full">
                                                                <input type="text" value="" placeholder="상세주소 입력 (선택)">
                                                            </div>
                                                        </div>
                                                    </div>


                                                </td>

                                                <th>요청 메시지</th>
                                                <td>
                                                    <div class="item-cell-box full">
                                                        <div class="textbox full">
                                                            <textarea style="height: 85px;" class="py-2 px-4"></textarea>
                                                        </div>
                                                    </div>
                                                    <div class="item-cell-box full pt-2 justify-content-end"
                                                         style="font-size:12px; letter-spacing: -0.05em; color:#696971;">
                                                        * 유효성 검사 문구
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
                                    <a href="javascript:requestTabMove(3)" class="modal-menu-btn menu-cancel">이전</a>

                                    <a href="javascript:alertPopupOpen('메시지 입력')" class="modal-menu-btn menu-primary">병상요청완료</a>
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

<!--  추천병원선택   -->
    <div class="modal fade" id="kt_modal_recommend" tabindex="-1" aria-hidden="true" style="">
        <!--begin::Modal dialog-->
        <div class="modal-dialog mw-1500px modal-dialog-centered">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header px-10 py-5 d-flex justify-content-between">
                    <!--begin::Modal title-->
                    <h2>추천병원 선택</h2>
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

                    <article class="floating-request-box">

                        <div class="img-box">
                            <img src="/img/common/ic_request_patient.svg" alt="이미지">
                        </div>
                        <div class="txt-box">신규 환자 등록</div>
                        <div class="txt-box">성경희 <span class="text-gray-600 fw-normal">(여 / 76세 / 경상북도 칠곡군 / 010-8833-1234)</span>
                        </div>
                        <div class="txt-box"><span class="text-primary">#중증 #투석</span></div>


                    </article>
                </div>

                <!--begin::Modal header-->
                <!--begin::Modal body-->
                <div class="modal-body scroll-y py-10 px-10">

                    <article class="table-form-layout1 pb-6">

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
                                        <th rowspan="2">출발지</th>
                                        <td rowspan="2">
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
                                        <th>병상유형</th>
                                        <td>
                                            <div class="item-cell-box">

                                                <div class="cbox">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">음압격리</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">중증일반격리</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">소아음압격리</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">소아</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">일반</span>
                                                    </label>
                                                </div>


                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>중등도</th>
                                        <td>
                                            <div class="item-cell-box">

                                                <div class="cbox">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">중환자</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">중증</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">준증증</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">중등증</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">일반</span>
                                                    </label>
                                                </div>


                                            </div>
                                        </td>

                                    </tr>

                                    <tr>
                                        <th>환자유형</th>
                                        <td>
                                            <div class="item-cell-box full">

                                                <div class="cbox">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">임산부</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">투석</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">수술</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">신생아</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">소아</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">인공호흡기</span>
                                                    </label>
                                                </div>


                                            </div>
                                            <div class="item-cell-box full mt-3">


                                                <div class="cbox">
                                                    <label>
                                                        <input type="checkbox" name="permission"><i></i>
                                                        <span class="txt">적극적치료요청</span>
                                                    </label>
                                                </div>

                                            </div>

                                        </td>
                                        <td class="border-left-1 border-color-gray" colspan="2">
                                            <div class="tbox w-400px with-btn">
                                                <input type="text" placeholder="의료기관명 검색">

                                                <a href="javascript:void(0)" class="input-btn">
                                                    <i class="fa-solid fa-magnifying-glass"></i>
                                                </a>
                                            </div>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>환자유형</th>
                                        <td colspan="3">

                                            <div class="item-cell-box">

                                                <div class="cbox">
                                                    <label>
                                                        <input type="checkbox" name="type3"><i></i>
                                                        <span class="txt">인공호흡기 일반</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="type3"><i></i>
                                                        <span class="txt">인공호흡기 조산아</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="type3"><i></i>
                                                        <span class="txt">인큐베이터</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="type3"><i></i>
                                                        <span class="txt">ECMO</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="type3"><i></i>
                                                        <span class="txt">중심체온조절유도기</span>
                                                    </label>
                                                </div>
                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="type3"><i></i>
                                                        <span class="txt">고압산소치료기</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="type3"><i></i>
                                                        <span class="txt">CT</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="type3"><i></i>
                                                        <span class="txt">MRI</span>
                                                    </label>
                                                </div>

                                                <div class="cbox ms-4">
                                                    <label>
                                                        <input type="checkbox" name="type3"><i></i>
                                                        <span class="txt">혈관촬영기</span>
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

                    <article class="table-list-layout1">

                        <div class="table-head-box pb-4">

                            <div class="head-box">

                                <div class="head-txt-box">검색결과 <span class="rounded-pill bg-primary text-white px-2 ms-2">99+</span></div>
                            </div>

                            <div class="option-box">


                                <div class="option-item-box d-flex align-items-center">

                                    <div class="option-label-box pe-4">목록표시</div>

                                    <article class="toggle-list-layout2">

                                        <div class="toggle-list">

                                            <label>
                                                <input type="radio" name="toggle1" checked="">
                                                <span class="txt">10행</span>
                                            </label>

                                            <label>
                                                <input type="radio" name="toggle1">
                                                <span class="txt">25행</span>
                                            </label>

                                            <label>
                                                <input type="radio" name="toggle1">
                                                <span class="txt">50행</span>
                                            </label>


                                        </div>

                                    </article>
                                </div>

                                <div class="option-item-box d-flex align-items-center ms-8">

                                    <div class="option-label-box pe-4">목록표시</div>

                                    <article class="toggle-list-layout2">

                                        <div class="toggle-list">

                                            <label>
                                                <input type="radio" name="toggle" checked="">
                                                <span class="txt">거리순</span>
                                            </label>

                                            <label>
                                                <input type="radio" name="toggle">
                                                <span class="txt">추천순</span>
                                            </label>


                                        </div>

                                    </article>
                                </div>

                            </div>

                        </div>

                        <div class="table-body-box">

                            <div class="table-box with-scroll small">
                                <table>
                                    <colgroup>
                                        <col style="width: 70px;">
                                        <col style="width: 50px;">
                                        <col style="width: 70px;">
                                        <col style="width: 200px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 60px;">
                                        <col style="width: 90px;">
                                        <col style="width: 90px;">

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
                                        <th>이미지</th>
                                        <th>병원명</th>
                                        <th>중환자</th>
                                        <th>중증</th>
                                        <th>준중증</th>
                                        <th>중등증</th>
                                        <th>일반</th>
                                        <th>분만</th>
                                        <th>투석</th>
                                        <th>소아</th>
                                        <th>인공
                                            호흡</th>
                                        <th>인공호흡
                                            (조산아)</th>
                                        <th>인큐
                                            베이터</th>
                                        <th>ECMO</th>
                                        <th>중심체온
                                            조절유도기</th>
                                        <th>고압
                                            산소</th>
                                        <th>CT</th>
                                        <th>MRI</th>
                                        <th>거리 /
                                            예상이동시간</th>
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
                                        <td>

                                            <div class="img-box w-50px h-50px m-auto">
                                                <img src="/img/common/img_profile_dummy.png" alt="이미지" class="w-100 h-100">
                                            </div>

                                        </td>
                                        <td class="text-start">
                                            <div class="d-flex align-items-center">

                                                <div class="text-start text-black" style="">칠곡경북대학교 병원</div>
                                                <div class="label-txt d-inline-flex text-primary px-1 py-1 border border-primary rounded-1 fs-xs ms-2" style="min-width:37px;">AI추천</div>

                                            </div>

                                            <div class="text-gray-600 fs-12px pt-2">#임산부 #투석 #수술 #신생아 #유아</div>
                                        </td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-danger">0</span>/1</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td>150m / 3분</td>
                                    </tr>

                                    <tr>
                                        <td>7</td>
                                        <td>
                                            <div class="cbox d-flex justify-content-center">
                                                <label>
                                                    <input type="checkbox"><i></i>
                                                </label>
                                            </div>
                                        </td>
                                        <td>

                                            <div class="img-box w-50px h-50px m-auto">
                                                <img src="/img/common/img_profile_dummy.png" alt="이미지" class="w-100 h-100">
                                            </div>

                                        </td>
                                        <td class="text-start">
                                            <div class="d-flex align-items-center">

                                                <div class="text-start text-black" style="">칠곡경북대학교 병원</div>

                                            </div>

                                            <div class="text-gray-600 fs-12px pt-2">#임산부 #투석 #수술 #신생아 #유아</div>
                                        </td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-danger">0</span>/1</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td><span class="text-primary">13</span>/55</td>
                                        <td>150m / 3분</td>
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
                            <div class="dataTables_paginate paging_simple_numbers" >
                                <ul class="pagination">
                                    <li class="paginate_button page-item previous disabled" ><a
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
                                    <li class="paginate_button page-item next" ><a href="#"
                                                                                   aria-controls="kt_table_users"
                                                                                   data-dt-idx="4"
                                                                                   tabindex="0"
                                                                                   class="page-link"><i
                                            class="next"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <article class="modal-menu-layout1 pt-10">
                        <div class="modal-menu-list">
                            <!--								<a href="javascript:requestTabMove(2)" class="modal-menu-btn menu-primary">다음</a>-->
                            <a href="javascript:popupOpen('assignment-request1')" class="modal-menu-btn menu-cancel">이전</a>
                            <a href="javascript:popupOpen('assignment-cancel')" class="modal-menu-btn menu-primary-outline">배정불가</a>
                            <a href="javascript:popupOpen('assignment-request2')" class="modal-menu-btn menu-primary">배정요청</a>
                        </div>
                    </article>

                </div>
                <!--end::Modal body-->
            </div>
            <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
    </div>

<!--  병상배정 세부 내용  -->
    <div class="modal fade" id="kt_modal_detail" tabindex="-1" aria-hidden="true" style="">
        <!--begin::Modal dialog-->
        <div class="modal-dialog mw-1500px modal-dialog-centered">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header px-10 py-5 d-flex justify-content-between">
                    <!--begin::Modal title-->
                    <h2>병상배정 세부내용</h2>
                    <!--end::Modal title-->
                    <!--begin::Close-->

                    <div class="btn-list">
                        <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                            <i class="fa-solid fa-share-nodes text-black" style="font-size:18px;"></i>
                        </div>

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

                    <article class="detail-layout1">

                        <div class="detail-wrap">

                            <div class="detail-info-box">

                                <div class="detail-head-box px-10">

                                    <div class="head-box">
                                        <div class="head-txt-box">환자정보</div>
                                    </div>

                                    <div class="option-box">

                                        <a href="#none" class="option-btn">
                                            <i class="fa-solid fa-share-nodes text-black" style="font-size:18px;"></i>
                                        </a>
                                    </div>

                                </div>

                                <div class="detail-body-box px-10">

                                    <article class="table-form-layout1">

                                        <div class="form-body-box overflow-y-auto mb-5" style="height:590px">

                                            <div class="table-box pe-5">
                                                <table>
                                                    <colgroup>
                                                        <col style="width: 117px;">
                                                        <col style="width: auto;">
                                                    </colgroup>
                                                    <tbody>
                                                    <tr>
                                                        <th>진료과</th>
                                                        <td>김덕자 (남/88세)</td>
                                                    </tr>

                                                    <tr>
                                                        <th>주민등록번호</th>
                                                        <td>760702-1*******</td>
                                                    </tr>

                                                    <tr>
                                                        <th>주소</th>
                                                        <td>대구광역시 호암로 51<br/>
                                                            4층 407호
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <th>사망여부</th>
                                                        <td>생존</td>
                                                    </tr>

                                                    <tr>
                                                        <th>국적</th>
                                                        <td>대한민국</td>
                                                    </tr>

                                                    <tr>
                                                        <th>휴대전화번호</th>
                                                        <td>010-5678-1234</td>
                                                    </tr>

                                                    <tr>
                                                        <th>보호자 이름</th>
                                                        <td>김덕환</td>
                                                    </tr>

                                                    <tr>
                                                        <th>전화번호</th>
                                                        <td>-</td>
                                                    </tr>

                                                    <tr>
                                                        <th>직업</th>
                                                        <td>기타 리스트</td>
                                                    </tr>

                                                    <tr>
                                                        <th>증상 ·징후<br/>
                                                            / 검사결과
                                                        </th>
                                                        <td>코로나19감염병 / 양성</td>
                                                    </tr>

                                                    <tr>
                                                        <th>기저질환</th>
                                                        <td>#고혈압 #당뇨 #고지혈증 #심혈관</td>
                                                    </tr>

                                                    <tr>
                                                        <th>환자유형</th>
                                                        <td>#고혈압, #당뇨</td>
                                                    </tr>

                                                    <tr>
                                                        <th>진료<br/>
                                                            이미지·영상
                                                        </th>
                                                        <td>
                                                            <div class="table-img-box pt-4">

                                                                <a href="javascript:void(0)" class="img-box">
                                                                    <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                </a>

                                                                <a href="javascript:void(0)" class="img-box">
                                                                    <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                </a>

                                                                <a href="javascript:void(0)" class="img-box">
                                                                    <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                </a>

                                                                <a href="javascript:void(0)" class="img-box">
                                                                    <div class="cnt-box">+5</div>
                                                                    <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                </a>

                                                            </div>

                                                        </td>
                                                    </tr>

                                                    </tbody>
                                                </table>
                                            </div>


                                        </div>

                                    </article>


                                </div>


                            </div>

                            <div class="detail-info-box full d-flex flex-column" style="height: 665px;">

                                <div class="detail-head-box px-10 h-80px">

                                    <article class="tabs-list-layout1 w-100 px-10">
                                        <div class="tabs-list full">
                                            <a href="javascript:detailTabsMove(1)" class="tabs-btn active">
                                                <span class="txt">타임라인</span>
                                            </a>

                                            <a href="javascript:detailTabsMove(2)" class="tabs-btn">
                                                <span class="txt">질병정보</span>
                                            </a>

                                            <a href="javascript:detailTabsMove(3)" class="tabs-btn">
                                                <span class="txt">출발·도착 정보</span>
                                            </a>
                                        </div>
                                    </article>

                                </div>

                                <div class="detail-tabs-group flex-root" style="height: 100%; min-height:0;">
                                    <div class="tabs-box flex-root" data-tabs="tabs1" style=";">

                                        <div class="detail-body-box pe-5 flex-root" style="min-height: 0;">
                                            <article class="timeline-layout1 pb-5" style="height: 100%;">

                                                <div class="timeline-wrap overflow-y-auto ps-10 pe-5" style="height:100%;">

                                                    <div class="text-center py-4 fw-bold">2023년 2월 28일</div>

                                                    <ul>

                                                        <li>
                                                            <div class="ic-box">
                                                                <img src="/img/common/ic_timeline_state0.svg" alt="이미지">

                                                                <!-- 상태별로 사용 -->
                                                                <img src="/img/common/ic_timeline_state0_off.svg" alt="이미지">
                                                            </div>

                                                            <div class="item-box">
                                                                <div class="top-item-box">
                                                                    <div class="state-box">병상요청 (원내배정)</div>
                                                                    <div class="date-box">오후 2시 23분</div>
                                                                </div>
                                                                <div class="mid-item-box">경북대병원 응급실 / 파트장 / 김혜숙</div>
                                                                <div class="bottom-item-box">

                                                                    <div class="item-img-group mb-4">
                                                                        <div class="img-list">
                                                                            <a href="javascript:void(0)" class="img-box">
                                                                                <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                            </a>

                                                                            <a href="javascript:void(0)" class="img-box">
                                                                                <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                            </a>
                                                                        </div>

                                                                    </div>

                                                                    <div class="msg-box">상기 질환으로 본원에서 f/u 중인 환자로 두차례 s/d (syncope 가능성 있음)<br/>
                                                                        있었으며, 넘어진 것 기억하지 못하며 지남력 떨어지고 Rt.arm weakness<br/>
                                                                        발생하여 칠곡경대병원 응급실 내원하여 시행한 응급선별용 PCR검사에서<br/>
                                                                        양성 확인되었습니다.(E gene 14.2, N2 gene 14.4)
                                                                    </div>

                                                                </div>

                                                            </div>
                                                        </li>

                                                        <li>
                                                            <div class="ic-box">
                                                                <img src="/img/common/ic_timeline_state6.svg" alt="이미지">

                                                                <!-- 상태별로 사용 -->
                                                                <img src="/img/common/ic_timeline_state6_off.svg" alt="이미지">

                                                            </div>

                                                            <div class="item-box">
                                                                <div class="top-item-box">
                                                                    <div class="state-box">승인대기</div>
                                                                </div>
                                                                <div class="mid-item-box">대구광역시 병상배정반</div>

                                                            </div>
                                                        </li>

                                                        <li class="off">
                                                            <div class="ic-box">
                                                                <img src="/img/common/ic_timeline_state4.svg" alt="이미지">

                                                                <!-- 상태별로 사용 -->
                                                                <img src="/img/common/ic_timeline_state4_off.svg" alt="이미지">
                                                            </div>

                                                            <div class="item-box">
                                                                <div class="top-item-box">
                                                                    <div class="state-box">병상배정</div>
                                                                    <div class="date-box"></div>
                                                                </div>

                                                            </div>
                                                        </li>

                                                        <li class="off">
                                                            <div class="ic-box">
                                                                <img src="/img/common/ic_timeline_state5.svg" alt="이미지">

                                                                <!-- 상태별로 사용 -->
                                                                <img src="/img/common/ic_timeline_state5_off.svg" alt="이미지">

                                                            </div>

                                                            <div class="item-box">
                                                                <div class="top-item-box">
                                                                    <div class="state-box">이송</div>
                                                                    <div class="date-box"></div>
                                                                </div>

                                                            </div>
                                                        </li>

                                                        <li class="off">
                                                            <div class="ic-box">
                                                                <img src="/img/common/ic_timeline_state3.svg" alt="이미지">

                                                                <!-- 상태별로 사용 -->
                                                                <img src="/img/common/ic_timeline_state3_off.svg" alt="이미지">


                                                            </div>

                                                            <div class="item-box">
                                                                <div class="top-item-box">
                                                                    <div class="state-box">입원</div>
                                                                    <div class="date-box"></div>
                                                                </div>

                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>


                                            </article>
                                        </div>

                                        <div class="detail-foot-box">

                                            <article class="msg-send-layout1">

                                                <div class="img-upload-result">
                                                    <div class="img-list">
                                                        <div href="javascript:void(0)" class="img-box">
                                                            <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                            <a href="javascript:void(0)" class="remove-btn"
                                                               onclick="$(this).parents('.img-box').remove();">
                                                                <img src="/img/common/ic_profile_remove.svg" alt="이미지">
                                                            </a>
                                                        </div>

                                                        <div href="javascript:void(0)" class="img-box">
                                                            <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                            <a href="javascript:void(0)" class="remove-btn"
                                                               onclick="$(this).parents('.img-box').remove();">
                                                                <img src="/img/common/ic_profile_remove.svg" alt="이미지">
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="msg-menu-group-box">

                                                    <div class="msg-group-box">

                                                        <div class="img-upload-box">
                                                            <label>
                                                                <input type="file">
                                                                <img src="/img/common/ic_msg_img_upload.svg" alt="이미지">
                                                            </label>
                                                        </div>
                                                        <div class="msg-input-box">
                                                            <input type="text" placeholder="메세지 입력">
                                                        </div>
                                                        <div class="msg-send-box">
                                                            <a href="#none" class="send-btn">
                                                                <img src="/img/common/ic_msg_send.svg" alt="이미지">
                                                            </a>
                                                        </div>

                                                    </div>


                                                    <div class="menu-group-box">

                                                        <article class="modal-menu-layout1">
                                                            <div class="modal-menu-list">
                                                                <a href="javascript:alertPopupOpen('메시지 입력')"
                                                                   class="modal-menu-btn menu-primary-outline radius-0 big">배정 불가</a>
                                                                <a href="javascript:alertPopupOpen('메시지 입력')"
                                                                   class="modal-menu-btn menu-primary radius-0 big">병상요청 승인</a>
                                                            </div>

                                                        </article>


                                                    </div>
                                                </div>


                                            </article>

                                        </div>

                                    </div>


                                    <div class="tabs-box flex-root" data-tabs="tabs2" style=";">

                                        <div class="scroll-wrap px-5 mx-5 mb-5">

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
                                                                <th>담당보건소</th>
                                                                <td>대구 북구 보건소</td>
                                                                <th>입원여부</th>
                                                                <td>입원</td>
                                                            </tr>

                                                            <tr>
                                                                <th>코로나19증상 및 징후</th>
                                                                <td>코로나19감염병</td>
                                                                <th>확진검사결과</th>
                                                                <td>양성</td>
                                                            </tr>

                                                            <tr>
                                                                <th>질병급</th>
                                                                <td>2급</td>
                                                                <th>DNR 동의</th>
                                                                <td>동의</td>
                                                            </tr>

                                                            <tr>
                                                                <th>질병급</th>
                                                                <td>2급</td>
                                                                <th>DNR 동의</th>
                                                                <td>동의</td>
                                                            </tr>

                                                            <tr>
                                                                <th>기저질환</th>
                                                                <td colspan="3">#고혈압 #당뇨 #고지혈증 #심혈관</td>
                                                            </tr>

                                                            <tr>
                                                                <th>환자유형</th>
                                                                <td colspan="3">#임산부 #투석 #인공호흡기사용</td>
                                                            </tr>

                                                            <tr>
                                                                <th>중증도 분류</th>
                                                                <td colspan="3">
                                                                    <div class="item-cell-box full">중증 / NEWS Score 13</div>
                                                                    <div class="item-cell-box pt-3 full">

                                                                        <article class="category-list-layout1">

                                                                            <div class="category-item-box">
                                                                                <div class="subject-box">체온(℃)</div>
                                                                                <div class="con-box">39</div>
                                                                            </div>

                                                                            <div class="category-item-box">
                                                                                <div class="subject-box">맥박<br/>
                                                                                    (회/분)</div>
                                                                                <div class="con-box">60</div>
                                                                            </div>

                                                                            <div class="category-item-box">
                                                                                <div class="subject-box">분당호흡수<br/>
                                                                                    (회/분)</div>
                                                                                <div class="con-box">80</div>
                                                                            </div>

                                                                            <div class="category-item-box">
                                                                                <div class="subject-box">산소포화도<br/>
                                                                                    (%)</div>
                                                                                <div class="con-box">39</div>
                                                                            </div>

                                                                            <div class="category-item-box">
                                                                                <div class="subject-box">수축기혈압<br/>
                                                                                    (mmHg)</div>
                                                                                <div class="con-box">39</div>
                                                                            </div>

                                                                        </article>


                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th>발병일 / 진단일 / 신고일</th>
                                                                <td colspan="3">2023.01.02 / 2023.01.04 / 2023.01.04</td>
                                                            </tr>

                                                            <tr>
                                                                <th>요양기관 기호/명</th>
                                                                <td>A10378 / 칠곡경북대병원</td>
                                                                <th>요양기관 주소</th>
                                                                <td>대구 북구 호국로 807</td>
                                                            </tr>

                                                            <tr>
                                                                <th>요양기관 전화번호</th>
                                                                <td>053-012-4567</td>
                                                                <th>진단의사 성명</th>
                                                                <td>권승구</td>
                                                            </tr>

                                                            <tr>
                                                                <th>신고기관장 성명</th>
                                                                <td>이재용</td>
                                                                <th>요청 병상유형</th>
                                                                <td>음압격리</td>
                                                            </tr>

                                                            <tr>
                                                                <th>역학조사서 및
                                                                    진료 이미지·영상
                                                                </th>
                                                                <td colspan="3">

                                                                    <article class="upload-form-layout1">
                                                                        <div class="upload-result-wrap">
                                                                            <div class="img-upload-result">
                                                                                <div class="img-list">
                                                                                    <a href="javascript:void(0)" class="img-box">
                                                                                        <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                                    </a>

                                                                                    <a href="javascript:void(0)" class="img-box">
                                                                                        <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                                    </a>

                                                                                    <a href="javascript:void(0)" class="img-box">
                                                                                        <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                                    </a>

                                                                                    <a href="javascript:void(0)" class="img-box">
                                                                                        <img src="/img/common/img_dummy_item1.png" alt="이미지">
                                                                                    </a>
                                                                                </div>
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

                                        </div>


                                    </div>

                                    <div class="tabs-box flex-root" data-tabs="tabs3" style=";">

                                        <div class="scroll-wrap px-5 mx-5 mb-5">

                                            <article class="table-form-layout1">

                                                <div class="form-head-box fs-3 fw-bold pb-4">

                                                    이송중 <span class="text-primary">거리 2.3km, 예상 소요시간 25분</span>

                                                </div>


                                                <div class="form-body-box">

                                                    <div class="table-box">
                                                        <table>
                                                            <colgroup>
                                                                <col style="width:273px;">
                                                                <col style="width: 168px;">
                                                                <col style="width: auto;">
                                                            </colgroup>
                                                            <tbody>
                                                            <tr>
                                                                <td class="p-0" rowspan="9">맵 영역</td>
                                                                <th class="bg-accent" colspan="2">담당보건소</th>
                                                            </tr>
                                                            <tr>
                                                            </tr>

                                                            <tr>
                                                                <th>배정 요청 지역</th>
                                                                <td>대구광역시</td>
                                                            </tr>

                                                            <tr>
                                                                <th>환자 출발지</th>
                                                                <td>자택</td>
                                                            </tr>
                                                            <tr>
                                                                <th>주소</th>
                                                                <td>대구광역시 북구 호암로 51 르아르망디 빌라 309호</td>
                                                            </tr>
                                                            <tr>
                                                                <th>위도, 경도</th>
                                                                <td>132.12121044, 38.121212121</td>
                                                            </tr>
                                                            <tr>
                                                                <th>보호자 1 연락처</th>
                                                                <td>010-2222-3344</td>
                                                            </tr>
                                                            <tr>
                                                                <th>보호자 2 연락처</th>
                                                                <td>010-3345-6859</td>
                                                            </tr>
                                                            <tr>
                                                                <th>요청 메세지</th>
                                                                <td>호흡곤란이 있으시니 인공호흡 준비해주시기 바랍니다.</td>
                                                            </tr>



                                                            </tbody>
                                                        </table>
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
                                                                <th colspan="4" class="bg-accent">이송 정보</th>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-0" colspan="4">
                                                                    <div class="d-flex align-items-center justify-content-center flex-column py-5">
                                                                        <div class="img-box">
                                                                            <img src="/img/common/ic_warning.svg" alt="이미지">
                                                                        </div>
                                                                        <div class="txt-box text-gray-600 fw-bold pt-5">환자 이송 전</div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>구급대명</th>
                                                                <td>대구 북구 대명</td>
                                                                <th>차량번호</th>
                                                                <td>382차3838</td>
                                                            </tr>
                                                            <tr>
                                                                <th>대원 / 연락처</th>
                                                                <td colspan="3">사. 김찬기, 교. 이주원, 위. 박장혁 / 010-2565-7080</td>
                                                            </tr>

                                                            <tr>
                                                                <th colspan="4" class="bg-accent">도착지 정보</th>
                                                            </tr>
                                                            <tr>
                                                                <td class="p-0" colspan="4">
                                                                    <div class="d-flex align-items-center justify-content-center flex-column py-5">
                                                                        <div class="img-box">
                                                                            <img src="/img/common/ic_warning.svg" alt="이미지">
                                                                        </div>
                                                                        <div class="txt-box text-gray-600 fw-bold pt-5">병상배정 전</div>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <th>의료기관</th>
                                                                <td>대구서울대병원</td>
                                                                <th>전화번호</th>
                                                                <td>010-2233-5554</td>
                                                            </tr>

                                                            <tr>
                                                                <th>주소</th>
                                                                <td>대구광역시 중구 호암로 51 대구서울대병원
                                                                    7103호</td>
                                                                <th>위도, 경도</th>
                                                                <td>132.12121044, 38.121212121</td>
                                                            </tr>

                                                            <tr>
                                                                <th>병실</th>
                                                                <td>7402호</td>
                                                                <th>원내 배정 여부</th>
                                                                <td>전원요청</td>
                                                            </tr>

                                                            <tr>
                                                                <th>진료과</th>
                                                                <td>감염내과</td>
                                                            </tr>
                                                            <tr>
                                                                <th>담당의</th>
                                                                <td>김강식</td>
                                                            </tr>
                                                            <tr>
                                                                <th>승인 메시지</th>
                                                                <td>응급실 앞에서 대기하고 있겠습니다.</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>


                                            </article>

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

<!--  이송 배차 처리  -->
    <div class="modal fade" id="kt_modal_dispatch" tabindex="-1" aria-hidden="true" style="">
        <!--begin::Modal dialog-->
        <div class="modal-dialog mw-1500px modal-dialog-centered">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header px-10 py-5 d-flex justify-content-between">
                    <!--begin::Modal title-->
                    <h2>이송·배차 처리</h2>
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

                    <article class="floating-request-box">

                        <div class="img-box">
                            <img src="/img/common/ic_request_patient.svg" alt="이미지">
                        </div>
                        <div class="txt-box">신규 환자 등록</div>
                        <div class="txt-box">성경희 <span class="text-gray-600 fw-normal">(여 / 76세 / 경상북도 칠곡군 / 010-8833-1234)</span>
                        </div>
                        <div class="txt-box"><span class="text-primary">#중증 #투석</span></div>


                    </article>
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
                                        <col style="width: 46px;">
                                        <col style="width: auto;">
                                        <col style="width: 168px;">
                                        <col style="width: auto;">
                                    </colgroup>
                                    <tbody>
                                    <tr>
                                        <th>출발지</th>
                                        <td colspan="4">
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

                                                <div class="tbox w-175px ms-3">
                                                    <input placeholder="구급대명 직접 입력" readonly>
                                                </div>

                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th rowspan="3">탑승대원 및 의료진</th>
                                        <th>#1</th>
                                        <td colspan="3">
                                            <div class="item-cell-box">

                                                <div class="sbox" style="width: 128px;">
                                                    <select>
                                                        <option>대원 선택</option>
                                                    </select>
                                                </div>

                                                <div class="tbox w-175px ms-3">
                                                    <input placeholder="직급 입력" readonly>
                                                </div>
                                                <div class="tbox w-175px ms-3">
                                                    <input placeholder=" 이름 입력" readonly>
                                                </div>
                                                <div class="tbox w-175px ms-3">
                                                    <input placeholder=" 전화번호 입력" readonly>
                                                </div>

                                            </div>
                                        </td>

                                    </tr>

                                    <tr>
                                        <th>#2</th>
                                        <td colspan="3">
                                            <div class="item-cell-box">

                                                <div class="sbox" style="width: 128px;">
                                                    <select>
                                                        <option>대원 선택</option>
                                                    </select>
                                                </div>

                                                <div class="tbox w-175px ms-3">
                                                    <input placeholder="직급 입력" readonly>
                                                </div>
                                                <div class="tbox w-175px ms-3">
                                                    <input placeholder=" 이름 입력" readonly>
                                                </div>
                                                <div class="tbox w-175px ms-3">
                                                    <input placeholder=" 전화번호 입력" readonly>
                                                </div>

                                            </div>
                                        </td>

                                    </tr>

                                    <tr>
                                        <th>#3</th>
                                        <td colspan="3">
                                            <div class="item-cell-box">

                                                <div class="sbox" style="width: 128px;">
                                                    <select>
                                                        <option>대원 선택</option>
                                                    </select>
                                                </div>

                                                <div class="tbox w-175px ms-3">
                                                    <input placeholder="직급 입력" readonly>
                                                </div>
                                                <div class="tbox w-175px ms-3">
                                                    <input placeholder=" 이름 입력" readonly>
                                                </div>
                                                <div class="tbox w-175px ms-3">
                                                    <input placeholder=" 전화번호 입력" readonly>
                                                </div>

                                            </div>
                                        </td>

                                    </tr>

                                    <tr>
                                        <th>환자유형</th>
                                        <td colspan="2">
                                            <article class="toggle-list-layout2">

                                                <div class="toggle-list">

                                                    <label>
                                                        <input type="radio" name="nation" checked="">
                                                        <span class="txt">대원#1 </span>
                                                    </label>

                                                    <label>
                                                        <input type="radio" name="nation">
                                                        <span class="txt">대원#2</span>
                                                    </label>

                                                    <label>
                                                        <input type="radio" name="nation">
                                                        <span class="txt">대원#3</span>
                                                    </label>


                                                </div>

                                            </article>
                                        </td>
                                        <th>배차정보</th>
                                        <td>

                                            <div class="item-cell-box full">
                                                <div class="tbox">
                                                    <input type="text" placeholder="차량번호 입력">
                                                </div>

                                                <div class="ms-3 d-flex">
                                                    <div class="px-3 py-2 text-white bg-primary rounded-4">54노1234</div>
                                                    <div class="px-3 py-2 text-white bg-primary rounded-4 ms-3">54노1234</div>
                                                </div>
                                            </div>

                                        </td>
                                    </tr>

                                    <tr>
                                        <th>환자유형</th>
                                        <td colspan="4">

                                            <div class="item-cell-box full">

                                                <div class="textbox full">
                                                    <textarea onkeyup="limitTextarea(this,'textarea4',500)" maxlength="500" placeholder="메시지 입력" style="height: 120px;"></textarea>
                                                    <div class="limit-box"><span id="textarea4">0</span>/500자</div>
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
                            <a href="javascript:void(0)" class="modal-menu-btn menu-primary">이송처리 완료</a>
                        </div>
                    </article>

                </div>
                <!--end::Modal body-->
            </div>
            <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
    </div>

<!--  입퇴원처리  -->
    <div class="modal fade" id="kt_modal_hospitalization" tabindex="-1" aria-hidden="true" style="">
        <!--begin::Modal dialog-->
        <div class="modal-dialog mw-1500px modal-dialog-centered">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header px-10 py-5 d-flex justify-content-between">
                    <!--begin::Modal title-->
                    <h2>입·퇴원 처리</h2>
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

                    <article class="floating-request-box">

                        <div class="img-box">
                            <img src="/img/common/ic_request_patient.svg" alt="이미지">
                        </div>
                        <div class="txt-box">신규 환자 등록</div>
                        <div class="txt-box">성경희 <span class="text-gray-600 fw-normal">(여 / 76세 / 경상북도 칠곡군 / 010-8833-1234)</span>
                        </div>
                        <div class="txt-box"><span class="text-primary">#중증 #투석</span></div>


                    </article>
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
                                        <th>병원명</th>
                                        <td colspan="3">칠곡경북대학교병원</td>
                                    </tr>

                                    <tr>
                                        <th>진료과</th>
                                        <td><div class="tbox full"><input placeholder="진료과 입력"></div></td>
                                        <th>병실</th>
                                        <td><div class="tbox full"><input placeholder="병실번호 입력"></div></td>
                                    </tr>

                                    <tr>
                                        <th>담당의</th>
                                        <td><div class="tbox full"><input placeholder="담당의 이름 입력"></div></td>
                                        <th>연락처</th>
                                        <td><div class="tbox full"><input placeholder="의료진 연락처 입력"></div></td>
                                    </tr>


                                    <tr>
                                        <th>전달사항</th>
                                        <td colspan="3">

                                            <div class="item-cell-box full">

                                                <div class="textbox full">
                                                    <textarea onkeyup="limitTextarea(this,'textarea5',500)" maxlength="500" placeholder="입원 / 퇴원 / 회송 사유 등 전달 메시지 입력" style="height: 120px;"></textarea>
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
                            <a href="javascript:void(0)" class="modal-menu-btn menu-cancel">재택회송</a>
                            <a href="javascript:void(0)" class="modal-menu-btn menu-primary-outline">퇴원처리</a>
                            <a href="javascript:void(0)" class="modal-menu-btn menu-primary">입원처리</a>
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

    <article class="popup popup-exist" style="">
        <div class="popup-wrapper">
            <div class="popup-contents">

                <div class="popup-head-box py-5 px-10">

                    <div class="head-tit-box">환자정보 존재</div>

                    <div class="head-option-box">
                        <a href="javascript:popupClose('exist')" class="popup-close-btn">
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


                    <div class="patient-exist-box">

                        <div class="exist-box d-flex align-items-center">
                            <div
                                    class="d-inline-flex align-items-center justify-content-center w-auto bg-primary h-30px w-50px text-white rounded-4 px-0">
                                일치
                            </div>
                            <div class="d-inline-flex w-auto ms-3">이름 : 김덕자 (남/88세)</div>
                        </div>

                        <div class="exist-box d-flex align-items-center mt-3">
                            <div
                                    class="d-inline-flex align-items-center justify-content-center w-auto bg-primary h-30px w-50px text-white rounded-4 px-0">
                                일치
                            </div>
                            <div class="d-inline-flex w-auto ms-3">주민등록번호 : 780412-1******</div>
                        </div>

                        <div class="exist-box d-flex align-items-center mt-3">
                            <div
                                    class="d-inline-flex align-items-center justify-content-center w-auto bg-primary h-30px w-50px text-white rounded-4 px-0">
                                일치
                            </div>
                            <div class="d-inline-flex w-auto ms-3">주소 : 대구시 북구</div>
                        </div>

                        <div class="exist-box d-flex align-items-center mt-3">
                            <div
                                    class="d-inline-flex align-items-center justify-content-center w-auto bg-gray-400 h-30px w-50px text-white rounded-4 px-0">
                                불일치
                            </div>
                            <div class="d-inline-flex w-auto ms-3">연락처 : 010-1234-5678</div>
                        </div>

                        <div class="exist-box d-flex align-items-center mt-6">
                            <div class="text-gray-800">※ 동명이인 여부를 확인해주세요.</div>
                        </div>


                    </div>


                </div>

                <div class="popup-foot-box py-5 px-10">
                    <article class="modal-menu-layout1">

                        <div class="modal-menu-list">
                            <a href="javascript:popupClose('exist'); requestTabMove(2)"
                               class="modal-menu-btn menu-primary-outline">신규등록</a>


                            <a href="javascript:popupOpen('update-check')" class="modal-menu-btn menu-primary">기존정보 업데이트</a>
                        </div>


                    </article>
                </div>

            </div>

        </div>
    </article>

    <article class="popup popup-update-check">
        <div class="popup-wrapper">
            <div class="popup-contents py-10 px-10" style="width: 300px;">
                <article class="modal-alert-layout pb-10">
                    <div class="alert-view-box pb-6"><img src="/img/common/ic_alert.svg" alt="이미지"></div>
                    <div class="alert-msg-box">등록된 환자의 이름 또는 주민등록번호가<br>역학조사서의 내용과 다릅니다.<br>내용을 확인해주세요.</div>
                </article>
                <article class="modal-menu-layout1">
                    <div class="modal-menu-list">
                        <a href="javascript:popupClose('update-check')" class="modal-menu-btn menu-cancel" data-type="cancel">이전</a>
                        <a href="javascript:popupClose('update-check'); popupClose('exist'); alertPopupOpen('환자 정보가</br>등록되었습니다.')"
                           class="modal-menu-btn menu-primary" data-type="success">신규등록</a></div>
                </article>
            </div>
        </div>
    </article>

    <article class="popup popup-assignment-request1" style="">
        <div class="popup-wrapper">
            <div class="popup-contents">

                <div class="popup-head-box py-5 px-10">

                    <div class="head-tit-box">병상요청 승인</div>

                    <div class="head-option-box">
                        <a href="javascript:popupClose('assignment-request1')" class="popup-close-btn">
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

                    <div>
                        <div>
                            <div class="textbox">
                                <textarea onkeyup="limitTextarea(this,'textarea2',500)" maxlength="500" placeholder="메시지 입력" style="height: 200px;"></textarea>
                                <div class="limit-box"><span id="textarea2">0</span>/500자</div>
                            </div>
                        </div>

                    </div>



                </div>

                <div class="popup-foot-box py-5 px-10">
                    <article class="modal-menu-layout1">

                        <div class="modal-menu-list">

                            <a href="javascript:confirmPopupOpen('병상요청을<br/>승인 하시겠습니까?',
                            function() {confirmPopupClose();alertPopupOpen('승인 되었습니다.',
                            function (){alertPopupClose();popupClose('assignment-request1');});})"
                               class="modal-menu-btn menu-primary">승인완료</a>
                        </div>


                    </article>
                </div>

            </div>

        </div>
    </article>

    <article class="popup popup-assignment-request2" style="">
        <div class="popup-wrapper">
            <div class="popup-contents">

                <div class="popup-head-box py-5 px-10">

                    <div class="head-tit-box">병상배정 승인</div>

                    <div class="head-option-box">
                        <a href="javascript:popupClose('assignment-request2')" class="popup-close-btn">
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

                        <div class="fw-medium fs-16px text-black pb-4">배정정보 입력</div>

                        <div class="">
                            <article class="table-form-layout1">

                                <div class="form-head-box">


                                </div>


                                <div class="form-body-box">

                                    <div class="table-box">
                                        <table>
                                            <colgroup>
                                                <col style="width: 127px;">
                                                <col style="width: auto;">
                                            </colgroup>
                                            <tbody>
                                            <tr>
                                                <th>병실 (선택)</th>
                                                <td><div class="tbox full"><input placeholder="병실번호 입력"></div></td>
                                            </tr>

                                            <tr>
                                                <th>진료과 (선택)</th>
                                                <td><div class="tbox full"><input placeholder="병실번호 입력"></div></td>
                                            </tr>

                                            <tr>
                                                <th>담당의 (선택)</th>
                                                <td><div class="tbox full"><input placeholder="병실번호 입력"></div></td>
                                            </tr>

                                            <tr>
                                                <th>연락처 (선택)</th>
                                                <td><div class="tbox full"><input placeholder="병실번호 입력"></div></td>
                                            </tr>



                                            </tbody>
                                        </table>
                                    </div>
                                </div>


                            </article>


                        </div>

                    </div>

                    <div>

                        <div class="fw-medium fs-16px text-black pb-4">승인관련 메시지 입력</div>

                        <div>
                            <div class="textbox">
                                <textarea onkeyup="limitTextarea(this,'textarea3',500)" maxlength="500" placeholder="메시지 입력" style="height: 120px;"></textarea>
                                <div class="limit-box"><span id="textarea3">0</span>/500자</div>
                            </div>
                        </div>

                    </div>



                </div>

                <div class="popup-foot-box py-5 px-10">
                    <article class="modal-menu-layout1">

                        <div class="modal-menu-list">

                            <a href="javascript:confirmPopupOpen('병상요청을<br/>승인 하시겠습니까?',
                            function() {confirmPopupClose();alertPopupOpen('승인 되었습니다.',
                            function (){alertPopupClose();popupClose('assignment-request2');});})"
                               class="modal-menu-btn menu-primary">승인완료</a>
                        </div>


                    </article>
                </div>

            </div>

        </div>
    </article>

    <article class="popup popup-assignment-cancel" style="">
        <div class="popup-wrapper">
            <div class="popup-contents">

                <div class="popup-head-box py-5 px-10">

                    <div class="head-tit-box">배정 불가</div>

                    <div class="head-option-box">
                        <a href="javascript:popupClose('assignment-cancel')" class="popup-close-btn">
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

                        <div class="fw-medium fs-16px text-black pb-4">미수용 사유를 선택해주세요.</div>

                        <div class="">
                            <article class="toggle-list-layout3">

                                <div class="toggle-list">

                                    <label>
                                        <input type="checkbox" name="toggle1" checked>
                                        <span class="txt">중환자실 부족</span>
                                    </label>

                                    <label>
                                        <input type="checkbox" name="toggle1">
                                        <span class="txt">일반병실 부족</span>
                                    </label>

                                    <label>
                                        <input type="checkbox" name="toggle1">
                                        <span class="txt">응급수술 불가</span>
                                    </label>

                                    <label>
                                        <input type="checkbox" name="toggle1">
                                        <span class="txt">일반병실 부족</span>
                                    </label>

                                    <label>
                                        <input type="checkbox" name="toggle1">
                                        <span class="txt">응급실 과밀화</span>
                                    </label>

                                    <label>
                                        <input type="checkbox" name="toggle1">
                                        <span class="txt">장비 부족</span>
                                    </label>

                                    <label>
                                        <input type="checkbox" name="toggle1">
                                        <span class="txt">기타</span>
                                    </label>

                                </div>

                            </article>
                        </div>

                    </div>

                    <div>

                        <div class="fw-medium fs-16px text-black pb-4">상세 사유 입력</div>

                        <div>
                            <div class="textbox">
                                <textarea onkeyup="limitTextarea(this,'textarea1',500)" maxlength="500" placeholder="메시지 입력" style="height: 120px;"></textarea>
                                <div class="limit-box"><span id="textarea1">0</span>/500자</div>
                            </div>
                        </div>

                    </div>



                </div>

                <div class="popup-foot-box py-5 px-10">
                    <article class="modal-menu-layout1">

                        <div class="modal-menu-list">

                            <a href="javascript:confirmPopupOpen('배정불가 처리 하시겠습니까?',
                            function() {confirmPopupClose();alertPopupOpen('배정불가 처리 되었습니다',
                            function (){alertPopupClose();popupClose('assignment-cancel');});})"
                               class="modal-menu-btn menu-primary">미수용 처리</a>
                        </div>


                    </article>
                </div>

            </div>

        </div>
    </article>
</template>

<script>

import {mapState} from "vuex";
import {ref} from "vue";
import {maskingNm} from "@/util/ui";

export default {
    components: {

    },
    name: 'ListBed',
    props: {
        msg: String
    },
    mounted() {
    },
    setup(){
      const showTable = ref(false);
      const toggleTable = function(){
          showTable.value = !showTable.value;
      }
      return{
          showTable,
          toggleTable,
      }
    },
    data() {
        return {
        }
    },
    computed:{
        ...mapState('bedasgn',['bdList','bdCnt'])
    },
    methods: {
        maskingNm,
        getBtn(sts) {
            if (sts === 'BAST0001') {
                return ['배정 승인·불가','#kt_modal_request']
            } else if (sts === 'BAST0002') {
                return ['추천병원 선택','#kt_modal_recommend']
            } else if (sts === 'BAST0003') {
                return ['이송·배차 처리','#kt_modal_dispatch']
            } else if (sts === 'BAST0004') {
                return ['입·퇴원 처리','#kt_modal_hospitalization']
            } else if (sts === 'BAST0005') {
                return ['완료','#kt_modal_detail']
            }
        },
        getTag(data){
            let str =''
            data.forEach(item => {
                str += '#'+item+' '
            })
            return str
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
