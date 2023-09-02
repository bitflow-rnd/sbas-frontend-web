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
                            <li class="breadcrumb-item text-gray-500 mx-n1"><h1 class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0">중증환자대시보드</h1></li>
                            <li class="breadcrumb-item ml-2"><span>&nbsp;입원환자 중 중증환자 정보를 요약하여 확인 하실 수 있습니다</span></li>
                            <!--end::Item-->
                        </ul>
                        <!--end::Breadcrumb-->
                        <!--begin::Title-->
                        <!--end::Title-->
                    </div>
                    <!--end::Page title-->
                    <!--begin::Actions-->
                    <div class="d-flex align-items-center gap-2 gap-lg-3">
                        <label class="form-check form-switch form-check-custom form-check-solid ">
                            <span class="form-check-label fw-semibold text-muted pe-3 text-gray-900">현황카드 자동선택</span>
                            <input class="form-check-input" type="checkbox" value="1" checked="checked">
                        </label>
                    </div>
                    <!--end::Actions-->
                </div>
                <!--end::Toolbar wrapper-->
            </div>
            <!--end::Toolbar-->
            <!--begin::Content-->
            <div id="kt_app_content" class="app-content flex-column-fluid">
                <div class="card">
                    <!--begin:: Cardheader-->
                    <div class="card-header border-0 p-8">
                        <!--begin::Card toolbar-->

                        <div class="dashboard-header">

                            <article class="dashboard-tabs-list pb-8">
                                <div class="list-wrap">
                                    <a href="javascript:dashboardChange(1)" class="dashboard-tabs-btn active" data-dashboard="1">요약 현황</a>
                                    <a href="javascript:dashboardChange(2)" class="dashboard-tabs-btn" data-dashboard="2">오늘의 현황</a>
                                </div>
                            </article>

                            <div class="dashboard-head-box d-flex justify-content-between align-items-end pb-5">

                            </div>

                        </div>

                        <!--end::Card toolbar-->
                    </div>
                    <!--end::Card header-->

                </div>
            </div>
            <!--end::Content-->
        </div>
        <!--end::Content wrapper-->
    </div>
    <!--end:::Main-->

</template>

<script setup>
</script>

<style scoped>
</style>
