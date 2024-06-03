<template>
  <vue-apex-charts :options="chartOptions" :series="series" height="350px"></vue-apex-charts>
</template>

<script setup>
import VueApexCharts from 'vue3-apexcharts'
import ko from 'apexcharts/dist/locales/ko.json'

const series = [5, 2, 1, 1, 1, 1]
const chartOptions = {
  chart: {
    width: '100%',
    height: '350px',
    type: 'pie',
    locales: [ko],
    defaultLocale: 'ko',
    toolbar: {
      show: false
    },
  },
  labels: ['대구', '경북', '경기', '서울', '부산', '제주'],
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
    text: '지역별 중증환자 수용 집계'
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
