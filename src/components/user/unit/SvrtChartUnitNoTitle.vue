<template>
  <div id="chart" class="d-flex justify-content-center chart-container">
    <vue-apex-charts
      ref="severityChart"
      class="severity-chart"
      type="area"
      height="350"
      :options="simpleSeverityLineChartOpt"
      :series="model.series"
    ></vue-apex-charts>
  </div>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { simpleSeverityLineChartOpt } from '@/util/chart_util'
import {defineProps, onMounted, reactive, watch} from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  ptId: {
    type: String,
    required: true
  }
})
const store = useStore()
let model = reactive({
  series: [],
  ptDetail: store.getters['patnt/getPtDetail']
})

onMounted(() => {
  getPtData();
})

function getPtData() {
  if (props.ptId) {
    store.dispatch('severity/getSeverityData2', props.ptId).then((result) => {
      updateChart(result)
    })
    store.dispatch('patnt/getBasicInfo2', { ptId: props.ptId }).then((result) => {
      model.ptDetail = result
    })
  }
}

watch(() => props.ptId, () => {
  getPtData()
})

function updateChart(result) {
  // console.log('updateChart', JSON.stringify(result))

  if (typeof result === 'undefined' || result.length < 1) {
    return
  }

  let chartData = [
    { name: 'CovSF', data: [] },
  ]

  result.first.forEach((day) => {
    chartData[0].data.push({
      x: day.prdtDt,
      y: parseFloat(day.CovSF)
    })
  })
  model.series = chartData
}
</script>

<style scoped>
.severity-chart {
  width: 100%;
  height: 350px;
}
</style>
