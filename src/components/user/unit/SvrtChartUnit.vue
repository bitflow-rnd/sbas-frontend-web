<template>
  <div id="chart" class="container d-flex justify-content-center chart-container">
    <apexchart
      ref="severityChart"
      class="col-lg-8"
      type="area"
      height="350"
      :options="sverityLineChartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
import { sverityLineChartOptions } from '@/util/chart_util'
import { computed, defineProps, onMounted, reactive } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  ptId: {
    type: String,
    required: true
  }
})

const store = useStore()
let severityData = reactive({})

console.log('severityData', severityData)
onMounted(() => {
  store.dispatch('severity/getSeverityData', props.ptId)
})

const series = computed(() => {
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
  if (props.ptId) {
    severityData.first.forEach((day) => {
      chartData[0].data.push({
        x: day.prdtDt,
        y: parseFloat(day.svrtProb)
      })
    })
    severityData.second.forEach((day) => {
      chartData[1].data.push({
        x: day.prdtDt,
        y: parseFloat(day.svrtProb)
      })
    })
    severityData.third.forEach((day) => {
      chartData[2].data.push({
        x: day.prdtDt,
        y: parseFloat(day.svrtProb)
      })
    })

    // Dots for +1, +2 and +3 days data
    chartData[3].data.push({
      x: severityData.second.at(-3).prdtDt,
      y: parseFloat(severityData.second.at(-3).svrtProb)
    })
    chartData[4].data.push({
      x: severityData.second.at(-2).prdtDt,
      y: parseFloat(severityData.second.at(-2).svrtProb)
    })
    chartData[5].data.push({
      x: severityData.second.at(-1).prdtDt,
      y: parseFloat(severityData.second.at(-1).svrtProb)
    })

    // Lines for +1 day data
    chartData[6].data.push({
      x: severityData.second.at(-4).prdtDt,
      y: parseFloat(severityData.second.at(-4).svrtProb)
    })
    chartData[6].data.push({
      x: severityData.first.at(-3).prdtDt,
      y: parseFloat(severityData.first.at(-3).svrtProb)
    })
    chartData[7].data.push({
      x: severityData.second.at(-4).prdtDt,
      y: parseFloat(severityData.second.at(-4).svrtProb)
    })
    chartData[7].data.push({
      x: severityData.third.at(-3).prdtDt,
      y: parseFloat(severityData.third.at(-3).svrtProb)
    })
    chartData[8].data.push({
      x: severityData.first.at(-3).prdtDt,
      y: parseFloat(severityData.first.at(-3).svrtProb)
    })
    chartData[8].data.push({
      x: severityData.third.at(-3).prdtDt,
      y: parseFloat(severityData.third.at(-3).svrtProb)
    })

    // Lines for +2 days data
    chartData[9].data.push({
      x: severityData.second.at(-3).prdtDt,
      y: parseFloat(severityData.second.at(-3).svrtProb)
    })
    chartData[9].data.push({
      x: severityData.first.at(-2).prdtDt,
      y: parseFloat(severityData.first.at(-2).svrtProb)
    })
    chartData[10].data.push({
      x: severityData.second.at(-3).prdtDt,
      y: parseFloat(severityData.second.at(-3).svrtProb)
    })
    chartData[10].data.push({
      x: severityData.third.at(-2).prdtDt,
      y: parseFloat(severityData.third.at(-2).svrtProb)
    })
    chartData[11].data.push({
      x: severityData.first.at(-2).prdtDt,
      y: parseFloat(severityData.first.at(-2).svrtProb)
    })
    chartData[11].data.push({
      x: severityData.third.at(-2).prdtDt,
      y: parseFloat(severityData.third.at(-2).svrtProb)
    })

    // Line for +3 days data
    chartData[12].data.push({
      x: severityData.second.at(-2).prdtDt,
      y: parseFloat(severityData.second.at(-2).svrtProb)
    })
    chartData[12].data.push({
      x: severityData.second.at(-1).prdtDt,
      y: parseFloat(severityData.second.at(-1).svrtProb)
    })

    chartData[0].data = chartData[0].data.slice(0, -3)
    chartData[2].data = chartData[2].data.slice(0, -3)
    chartData[1].data = chartData[1].data.slice(0, -3)
  } else {
    chartData = [
      {
        name: '.',
        data: [
          {
            x: '1970-01-21',
            y: 0
          }
        ]
      }
    ]
  }
  return chartData
})
</script>

<style scoped>
.chart-container {
  min-height: initial;
}
</style>
