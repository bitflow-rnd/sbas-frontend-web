<template>
  <div>
    <h4 v-if="model.ptDetail" @click="selectPatient" role="button" class='patient-info'>
      <i class="fa-solid fa-bed-pulse"></i> {{ model.ptDetail.ptNm }}({{ model.ptDetail.age }}세 / {{ model.ptDetail.gndr }} /
      {{ model.ptDetail.bascAddr }})
    </h4>
  </div>
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
import { defineEmits, defineProps, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  ptId: {
    type: String,
    required: true
  }
})
const emit = defineEmits(['onPatientSelected'])
const store = useStore()
let model = reactive({
  series: [],
  ptDetail: store.getters['patnt/getPtDetail']
})

onMounted(() => {
  if (props.ptId) {
    store.dispatch('severity/getSeverityData2', props.ptId).then((result) => {
      updateChart(result)
    })
  }
})

function selectPatient() {
  emit('onPatientSelected', model.ptDetail)
}

function updateChart(result) {
  // console.log('updateChart', JSON.stringify(result))

  if (typeof result === 'undefined' || result.length < 1) {
    return
  }
  let chartData = [
    { name: 'CovSF', data: [] },
    { name: 'oxygenApply', data: [], type: 'line' },
  ]

  result.first.forEach((day) => {
    chartData[0].data.push({
      x: day.prdtDt,
      y: parseFloat(day.CovSF),
    })
    chartData[1].data.push({
      x: day.prdtDt,
      y: convertToChartValue(day.oxygenApply),
    })
  })
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
.patient-info {
  margin-left: 24px;
  font-size: 15px;
}
.patient-info > i { margin-right: 9px; }
</style>
