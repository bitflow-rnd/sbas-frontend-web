<template>
  <div>
    <h4 v-if="model.ptDetail">
      {{ model.ptDetail.ptNm }}({{ model.ptDetail.age }}세 / {{ model.ptDetail.gndr }},
      {{ model.ptDetail.bascAddr }})
    </h4>
  </div>
  <div id="chart" class="d-flex justify-content-center chart-container">
    <vue-apex-charts
      ref="severityChart"
      class="severity-chart"
      type="area"
      height="350"
      :options="sverityLineChartOptions"
      :series="model.series"
    ></vue-apex-charts>
  </div>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'
import { sverityLineChartOptions } from '@/util/chart_util'
import { defineProps, onMounted, reactive } from 'vue'
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
  if (props.ptId) {
    store.dispatch('severity/getSeverityData2', props.ptId).then((result) => {
      updateChart(result)
    })
    store.dispatch('patnt/getBasicInfo2', { ptId: props.ptId }).then((result) => {
      console.log('ptDetail', result)
      model.ptDetail = result
    })
  }
})

function updateChart(result) {
  // console.log('updateChart', JSON.stringify(result))

  if (typeof result === 'undefined' || result.length < 1) {
    return
  }

  let chartData = [
    { name: 'mean + std', data: [] },
    { name: 'mean', data: [] },
    { name: 'mean - std', data: [] },
    { name: '+1 day', data: [] },
    { name: '+2 days', data: [] },
    { name: '+3 days', data: [] },
    { name: '+1 day + std', data: [] },
    { name: '+1 day - std', data: [] },
    { name: '+1 day vert', data: [] },
    { name: '+2 days + std', data: [] },
    { name: '+2 days - std', data: [] },
    { name: '+2 days vert', data: [] },
    { name: '+3 days mean', data: [] }
  ]

  result.first.forEach((day) => {
    chartData[0].data.push({
      x: day.prdtDt,
      y: parseFloat(day.svrtProb)
    })
  })
  result.second.forEach((day) => {
    chartData[1].data.push({
      x: day.prdtDt,
      y: parseFloat(day.svrtProb)
    })
  })
  result.third.forEach((day) => {
    chartData[2].data.push({
      x: day.prdtDt,
      y: parseFloat(day.svrtProb)
    })
  })
  // Dots for +1, +2 and +3 days data
  chartData[3].data.push({
    x: result.second.at(-3).prdtDt,
    y: parseFloat(result.second.at(-3).svrtProb)
  })
  chartData[4].data.push({
    x: result.second.at(-2).prdtDt,
    y: parseFloat(result.second.at(-2).svrtProb)
  })
  chartData[5].data.push({
    x: result.second.at(-1).prdtDt,
    y: parseFloat(result.second.at(-1).svrtProb)
  })
  // Lines for +1 day data
  chartData[6].data.push({
    x: result.second.at(-4).prdtDt,
    y: parseFloat(result.second.at(-4).svrtProb)
  })
  chartData[6].data.push({
    x: result.first.at(-3).prdtDt,
    y: parseFloat(result.first.at(-3).svrtProb)
  })
  chartData[7].data.push({
    x: result.second.at(-4).prdtDt,
    y: parseFloat(result.second.at(-4).svrtProb)
  })
  chartData[7].data.push({
    x: result.third.at(-3).prdtDt,
    y: parseFloat(result.third.at(-3).svrtProb)
  })
  chartData[8].data.push({
    x: result.first.at(-3).prdtDt,
    y: parseFloat(result.first.at(-3).svrtProb)
  })
  chartData[8].data.push({
    x: result.third.at(-3).prdtDt,
    y: parseFloat(result.third.at(-3).svrtProb)
  })
  // Lines for +2 days data
  chartData[9].data.push({
    x: result.second.at(-3).prdtDt,
    y: parseFloat(result.second.at(-3).svrtProb)
  })
  chartData[9].data.push({
    x: result.first.at(-2).prdtDt,
    y: parseFloat(result.first.at(-2).svrtProb)
  })
  chartData[10].data.push({
    x: result.second.at(-3).prdtDt,
    y: parseFloat(result.second.at(-3).svrtProb)
  })
  chartData[10].data.push({
    x: result.third.at(-2).prdtDt,
    y: parseFloat(result.third.at(-2).svrtProb)
  })
  chartData[11].data.push({
    x: result.first.at(-2).prdtDt,
    y: parseFloat(result.first.at(-2).svrtProb)
  })
  chartData[11].data.push({
    x: result.third.at(-2).prdtDt,
    y: parseFloat(result.third.at(-2).svrtProb)
  })
  // Line for +3 days data
  chartData[12].data.push({
    x: result.second.at(-2).prdtDt,
    y: parseFloat(result.second.at(-2).svrtProb)
  })
  chartData[12].data.push({
    x: result.second.at(-1).prdtDt,
    y: parseFloat(result.second.at(-1).svrtProb)
  })
  chartData[0].data = chartData[0].data.slice(0, -3)
  chartData[2].data = chartData[2].data.slice(0, -3)
  chartData[1].data = chartData[1].data.slice(0, -3)
  model.series = chartData
}
</script>

<style scoped>
.severity-chart {
  width: 100%;
  height: 350px;
}
</style>
