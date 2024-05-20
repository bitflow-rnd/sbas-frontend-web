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
                  중증환자 대시보드
                </h1>
              </li>
              <li class="breadcrumb-item ml-2">
                <span>&nbsp;입원환자 중 중증환자 정보를 요약하여 확인 하실 수 있습니다</span>
              </li>
            </ul>
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
            <table class="dashbd-table">
              <colgroup>
                <col style="width: auto" />
                <col style="width: 350px" />
                <col style="width: 45%" />
              </colgroup>
              <tr>
                <td rowspan="2">
                  <sevr-patnt-list-unit @onPatientSelected="onPatientSelected" />
                </td>
                <td>
                  <pie-chart />
                </td>
                <td>
                  <svrt-chart-unit :pt-id="'PT00000086'" @onPatientSelected="onPatientSelected" />
                </td>
              </tr>

              <tr>
                <td>
                  <pie-chart-location />
                </td>
                <td>
                  <svrt-chart-unit :pt-id="'PT00000305'" @onPatientSelected="onPatientSelected" />
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <svrt-trend-chart-unit />
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

  <patnt-detl-modal v-if="model.ptDetail" :pt-detail="model.ptDetail" @closeModal="closeModal" />
</template>

<script setup>
import SvrtChartUnit from '@/components/user/unit/SvrtChartUnit.vue'
import PieChart from '@/components/user/unit/PieChart.vue'
import PieChartLocation from '@/components/user/unit/PieChartLocation.vue'
import SevrPatntListUnit from '@/components/user/unit/SevrPatntListUnit.vue'
import PatntDetlModal from '@/components/user/modal/PatntDetlModal.vue'
import SvrtTrendChartUnit from '@/components/user/unit/SvrtTrendChartUnit.vue'
import { reactive } from 'vue'

let model = reactive({
  ptDetail: null
})

function onPatientSelected(data) {
  model.ptDetail = data
}

function closeModal() {
  model.ptDetail = null
}
</script>

<style scoped>
.card-header.p-8 {
  padding-bottom: 22px;
}
.dashbd-table {
  width: 100%;
}
.dashbd-table td:first-child { vertical-align: top; }
td {
  padding: 1rem 1.5rem;
}
@media (max-width: 1920px) {
  .app-content {
    height: fit-content;
  }
}
</style>
