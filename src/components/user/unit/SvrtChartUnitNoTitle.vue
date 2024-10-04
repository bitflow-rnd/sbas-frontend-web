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
import { data, simpleSeverityLineChartOpt } from '@/util/chart_util'
import {defineProps, onMounted, reactive, watch} from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  ptId: {
    type: String,
    required: true
  },
  rgstSeq: null,
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
    store.dispatch('severity/getSeverityData2', { ptId: props.ptId, rgstSeq: props.rgstSeq }).then((result) => {
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
    // { name: 'OxygenApply', data: [] },
  ]
  const oxygenApply = []
  if (result.first && result.first.length > 0) {
    data.firstMsreDt = result.first[0].prdtDt
  }

  result.first.forEach((day) => {
    chartData[0].data.push({
      x: day.prdtDt,
      y: parseFloat(day.CovSF),
    })
    oxygenApply.push(day.oxygenApply)
    // chartData[1].data.push({
    //   x: day.prdtDt,
    //   y: convertToChartValue(day.oxygenApply),
    // })
  })
  data.oxygenApply = oxygenApply
  model.series = chartData
}

function convertToChartValue(data) {
  if (data === 'UNDEFINED') {
    return 4
  } else if (data === 'ROOM AIR') {
    return 5
  } else if (data === 'NASAL') {
    return 6
  } else if (data === 'MASK') {
    return 7
  } else if (data === 'HFNC') {
    return 8
  } else if (data === 'VENTILATION') {
    return 9
  }
}

</script>

<style scoped>
.severity-chart {
  width: 100%;
  height: 350px;
}
</style>
