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
                                <a href="#" class="btn btn-sm btn-flex btn-primary align-self-center px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
                                    <i class="fa-solid fa-plus"></i> 신규병상요청</a>
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

                                    <div class="table-nodata py-40">

                                        <div class="img-box">
                                            <img src="/img/common/img_nodata.svg" alt="이미지">
                                        </div>

                                        <div class="txt-box pt-10">조회된 구급대원이 없습니다</div>

                                    </div>

                                </div>

                            </article>




                            <!--end::Table-->
                        </div>
                        <!--end::Card body-->

                    </div>

                    <article class="card-sub-contents px-6" style="width: 560px;">

                        <div class="card-option p-8">
                            <div class="d-flex align-items-center gap-2 gap-lg-3 justify-content-end">
                                <a href="#" class="btn btn-flex btn-sm btn-outline btn-outline-light fs-7" data-bs-toggle="modal" data-bs-target="#kt_modal_view_users"><i class="fa-regular fa-trash-can"></i> 삭제</a>
                                <a href="#" class="btn btn-sm btn-flex btn-primary align-self-center px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">
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

                                        <div class="table-nodata py-40">

                                            <div class="img-box">
                                                <img src="/img/common/img_nodata.svg" alt="이미지">
                                            </div>

                                            <div class="txt-box pt-10">조회된 구급대원이 없습니다</div>

                                        </div>

                                    </div>

                                </article>




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
