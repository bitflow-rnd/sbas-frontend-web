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
              <li class="breadcrumb-item text-gray-500 mx-n1">
                <h1
                  class="page-heading d-flex flex-column justify-content-center text-dark fw-bolder fs-2 m-0"
                >
                  중증환자대시보드
                </h1>
              </li>
              <li class="breadcrumb-item ml-2">
                <span>&nbsp;입원환자 중 중증환자 정보를 요약하여 확인 하실 수 있습니다</span>
              </li>
              <!--end::Item-->
            </ul>
            <!--end::Breadcrumb-->
            <!--begin::Title-->
            <!--end::Title-->
          </div>
          <!--end::Page title-->
        </div>
        <!--end::Toolbar wrapper-->
      </div>
      <!--end::Toolbar-->
      <!--begin::Content-->
      <div class="app-content flex-column-fluid">
        <div class="card">
          <!--begin:: Cardheader-->
          <div class="card-header border-0 p-8 container-fluid">
            <table>
              <colgroup>
                <col style="width: 33.3%" />
                <col style="width: 33.3%" />
                <col style="width: 33.3%" />
              </colgroup>
              <tr>
                <td rowspan="2">
                  <sevr-patnt-list-unit />
                </td>
                <td>
                  <pie-chart />
                </td>
                <td>
                  <svrt-chart-unit :pt-id="'PT00000085'" />
                </td>
              </tr>

              <tr>
                <td>
                  <pie-chart-location />
                </td>
                <td>
                  <svrt-chart-unit :pt-id="'PT00000086'" />
                </td>
              </tr>
            </table>
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
import SvrtChartUnit from '@/components/user/unit/SvrtChartUnit'
import PieChart from '@/components/user/unit/PieChart'
import PieChartLocation from '@/components/user/unit/PieChartLocation'
import SevrPatntListUnit from '@/components/user/unit/SevrPatntListUnit'
</script>

<style scoped>
.card-header.p-8 {
  padding-bottom: 22px;
}
td {
  padding: 1rem 1.5rem;
}
</style>
