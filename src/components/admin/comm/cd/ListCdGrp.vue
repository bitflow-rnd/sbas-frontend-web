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
                            <li class="breadcrumb-item text-gray-500 mx-n1"><h1 class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">의료기관 관리</h1></li>
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
                    <!--end::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body p-8">
                        <!--begin::Table-->
                        <h5>검색결과<span class="position-absolute translate-middle rounded-pill bg-primary">99+</span></h5>

                        <article class="code-layout1">

                            <div class="code-form-box">

                                <article class="table-list-layout1">

                                    <div class="table-head-box pb-4">

                                        <div class="head-box">

                                            <div class="head-txt-box">그룹 코드 관리</div>
                                        </div>

                                        <div class="option-box">
                                            <a href="javascript:codeGroupRemove()" class="btn btn-flex btn-xs btn-outline btn-outline-gray" >	<i class="fa-solid fa-plus"></i> 선택삭제</a>


                                            <a href="javascript:codeGroupReg()" class="btn btn-flex btn-xs btn-outline btn-outline-primary ms-2">
                                                <i class="fa-solid fa-plus" style="color:#74AFEB;"></i> 그룹코드 추가</a>


                                        </div>

                                    </div>

                                    <div class="table-body-box">

                                        <div class="table-box with-scroll small">
                                            <table>
                                                <colgroup>
                                                    <col style="width: 50px;">
                                                    <col style="width: 100px;">
                                                    <col style="width: 100px;">
                                                    <col style="width: 200px;">

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
                                                    <th>그룹코드 번호<span class="text-primary">*</span></th>
                                                    <th>그룹코드 명<span class="text-primary">*</span></th>
                                                    <th>설명</th>
                                                </tr>
                                                </thead>

                                                <tbody id="codeGroup">

                                                <tr class="cursor">
                                                    <td>
                                                        <div class="cbox d-flex justify-content-center">
                                                            <label>
                                                                <input type="checkbox"><i></i>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>A101</td>
                                                    <td>사용자상태</td>
                                                    <td class="left">사용자 사용 가능 상태를</td>
                                                </tr>

                                                <tr class="cursor selected">
                                                    <td>
                                                        <div class="cbox d-flex justify-content-center">
                                                            <label>
                                                                <input type="checkbox"><i></i>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>A101</td>
                                                    <td>사용자상태</td>
                                                    <td class="left">사용자 사용 가능 상태를</td>
                                                </tr>


                                                </tbody>

                                            </table>
                                        </div>
                                    </div>

                                </article>

                            </div>
                            <div class="code-form-box">

                                <article class="table-list-layout1">

                                    <div class="table-head-box pb-4">

                                        <div class="head-box">

                                            <div class="head-txt-box">코드 관리</div>
                                        </div>

                                        <div class="option-box">
                                            <a href="javascript:codeRemove()" class="btn btn-flex btn-xs btn-outline btn-outline-gray" >	<i class="fa-solid fa-plus"></i> 선택삭제</a>


                                            <a href="javascript:codeReg()" class="btn btn-flex btn-xs btn-outline btn-outline-primary ms-2">
                                                <i class="fa-solid fa-plus" style="color:#74AFEB;"></i> 코드 추가</a>


                                        </div>

                                    </div>

                                    <div class="table-body-box">

                                        <div class="table-box with-scroll small">
                                            <table>
                                                <colgroup>
                                                    <col style="width: 50px;">
                                                    <col style="width: 100px;">
                                                    <col style="width: 100px;">
                                                    <col style="width: 100px;">
                                                    <col style="width: 200px;">

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
                                                    <th>코드 번호<span class="text-primary">*</span></th>
                                                    <th>코드 명<span class="text-primary">*</span></th>
                                                    <th>정렬순서<span class="text-primary">*</span></th>
                                                    <th>설명</th>
                                                </tr>
                                                </thead>

                                                <tbody id="code">

                                                <tr>
                                                    <td>
                                                        <div class="cbox d-flex justify-content-center">
                                                            <label>
                                                                <input type="checkbox"><i></i>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>A101</td>
                                                    <td>사용자상태</td>
                                                    <td>20</td>
                                                    <td class="left">사용자 사용 가능 상태를</td>
                                                </tr>

                                                <tr class="">
                                                    <td>
                                                        <div class="cbox d-flex justify-content-center">
                                                            <label>
                                                                <input type="checkbox"><i></i>
                                                            </label>
                                                        </div>
                                                    </td>
                                                    <td>A101</td>
                                                    <td>사용자상태</td>
                                                    <td>20</td>
                                                    <td class="left">사용자 사용 가능 상태를</td>
                                                </tr>


                                                </tbody>

                                            </table>
                                        </div>
                                    </div>

                                </article>



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
    name: 'ListCdGrp',
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