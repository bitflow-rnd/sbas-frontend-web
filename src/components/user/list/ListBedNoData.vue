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
                        <article class="table-form-layout1">

                            <div class="form-head-box">

                            </div>

                            <div class="form-body-box">

                                <div class="table-form-toggle-box">
                                    <a href="javascript:void(0)" class="table-form-toggle-btn" onclick="tableFormToggle(this)">
                                        <i class="fa-solid fa-angle-up"></i>
                                        <i class="fa-solid fa-angle-down"></i>
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
                                                                <span class="txt">병상요청 <span class="cnt ms-1">12</span></span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">병상배정반 <span class="cnt ms-1">12</span></span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">이송 · 배차 <span class="cnt ms-1">12</span></span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">입 ·퇴원 처리 <span class="cnt ms-1">12</span></span>
                                                            </label>
                                                        </div>

                                                        <div class="cbox ms-4">
                                                            <label>
                                                                <input type="checkbox" name="state"><i></i>
                                                                <span class="txt">완료 <span class="cnt ms-1">12</span></span>
                                                            </label>
                                                        </div>

                                                    </div>

                                                </div>

                                            </td>
                                            <td colspan="4">
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

                                        <tr data-toggle="true">
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

                                        <tr data-toggle="true">
                                            <th>병상유형</th>
                                            <td colspan="3">
                                                <div class="item-row-box">

                                                    <div class="item-cell-box">
                                                        <div class="cbox">
                                                            <label>
                                                                <input type="checkbox" name="type2"><i></i>
                                                                <span class="txt">음압격리</span>
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
                                                                <span class="txt">소아음압격리</span>
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



                                        <tr data-toggle="true">
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
                        <h5>검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">99+</span></h5>

                        <article class="table-list-layout1">

                            <div class="table-body-box">

                                <div class="table-nodata py-40">

                                    <div class="img-box">
                                        <img src="/img/common/img_nodata.svg" alt="이미지">
                                    </div>

                                    <div class="txt-box pt-10">조회 결과가 없습니다.</div>

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
</template>

<script>

export default {
    components: {

    },
    name: 'ListBedNoData',
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
