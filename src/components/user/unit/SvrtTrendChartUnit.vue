<template>
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
</style>
