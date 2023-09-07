<template>
  <h4>
    <i class="fa-solid fa-bed-pulse"></i> 중증환자 발생 추이 (최근 1주)
  </h4>
  <div id="chart" class="d-flex justify-content-center chart-container">
    <vue-apex-charts
      ref="severityChart"
      class="severity-chart"
      type="area"
      height="350"
      :options="trendLineChartOptions"
      :series="model.series"
    ></vue-apex-charts>
  </div>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { trendLineChartOptions } from '@/util/chart_util'
import { reactive } from 'vue'

let model = reactive({
  series: [
    {
      name: '2023년',
      data: [12, 11, 14, 18, 17, 13, 13]
    }
  ]
})
</script>

<style scoped>
.severity-chart {
  width: 100%;
  height: 350px;
}
h4 { margin-left: 24px; }
h4 > i { margin-right: 9px; }
</style>
