<template>
  <vue-apex-charts :options="chartOptions" :series="series" height="350px"></vue-apex-charts>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'

const series = [4, 3, 2, 1]
const chartOptions = {
  chart: {
    width: '100%',
    height: '350px',
    type: 'pie'
  },
  labels: ['중증', '준중증', '준등증', '일반'],
  theme: {
    monochrome: {
      enabled: true
    }
  },
  plotOptions: {
    pie: {
      dataLabels: {
        offset: -5
      }
    }
  },
  title: {
    text: '중증도별 중증환자 집계'
  },
  dataLabels: {
    formatter(val, opts) {
      const name = opts.w.globals.labels[opts.seriesIndex]
      return [name, val.toFixed(1) + '%']
    }
  },
  legend: {
    show: false
  }
}
</script>

<style scoped></style>
