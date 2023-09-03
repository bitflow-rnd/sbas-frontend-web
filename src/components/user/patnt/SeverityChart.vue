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

<script>
import VueApexCharts from 'vue3-apexcharts'
import { sverityLineChartOptions } from '@/util/chart_util'
import { mapState } from 'vuex'

export default {
  name: 'SeverityChart',
  components: {
    apexchart: VueApexCharts
  },
  async created() {
    await this.$store.dispatch('severity/getSeverityData', 'PT00000085')
  },
  data() {
    return {
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: true
          }
        },
        colors: [
          '#676767',
          '#000000',
          '#676767',
          '#00ff26',
          '#fcce14',
          '#fc1f1f',
          '#00ff26',
          '#00ff26',
          '#00ff26',
          '#fcce14',
          '#fcce14',
          '#fcce14',
          '#fc1f1f'
        ],
        tooltip: {
          shared: true,
          y: {
            formatter: function (val) {
              return val.toFixed(2)
            }
          }
        },
        markers: {
          size: [0, 0, 0, 4, 4, 4, 0, 0, 4, 0, 0, 4, 0]
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 0, 100]
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [2, 2, 2, 2, 2, 2, 1, 1, 2, 1, 1, 2, 1],
          curve: 'smooth',
          dashArray: [2, 0, 2, 0, 0, 0, 2, 2, 0, 2, 2, 0, 2]
        },
        title: {
          text: 'Severity level',
          align: 'left'
        },
        yaxis: {
          min: 0,
          max: 1,
          tickAmount: 10,
          labels: {
            formatter: (y) => {
              return y?.toFixed(1)
            }
          },
          title: {
            text: 'probability'
          }
        },
        xaxis: {
          type: 'datetime'
        },
        annotations: {
          yaxis: [
            {
              y: 0.3,
              borderColor: '#f36666',
              opacity: 0.5,
              borderWidth: 1,
              strokeDashArray: 5
            },
            {
              y: 0.8,
              borderColor: '#ffb009',
              opacity: 0.5,
              borderWidth: 1,
              strokeDashArray: 5
            },
            {
              y: 0.0,
              y2: 0.3,
              borderColor: '#000000',
              fillColor: '#2eff00',
              opacity: 0.1
            },
            {
              y: 0.3,
              y2: 0.8,
              borderColor: '#000000',
              fillColor: '#fcce14',
              opacity: 0.1
            },
            {
              y: 0.8,
              y2: 1.0,
              borderColor: '#000000',
              fillColor: '#fc1f1f',
              opacity: 0.1
            }
          ]
        },
        legend: {
          show: true,
          position: 'right',
          offsetY: 50,
          height: 2530,
          formatter: (seriesName, opts) => {
            if (opts.seriesIndex > 5) return ''
            return seriesName
          },
          markers: {
            width: [12, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0]
          }
        }
      }
    }
  },
  computed: {
    ...mapState('severity', ['severityData']),
    series() {
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
      if (this.severityData.ptId) {
        this.severityData.first.forEach((day) => {
          chartData[0].data.push({
            x: day.prdtDt,
            y: parseFloat(day.svrtProb)
          })
        })
        this.severityData.second.forEach((day) => {
          chartData[1].data.push({
            x: day.prdtDt,
            y: parseFloat(day.svrtProb)
          })
        })
        this.severityData.third.forEach((day) => {
          chartData[2].data.push({
            x: day.prdtDt,
            y: parseFloat(day.svrtProb)
          })
        })

        // Dots for +1, +2 and +3 days data
        chartData[3].data.push({
          x: this.severityData.second.at(-3).prdtDt,
          y: parseFloat(this.severityData.second.at(-3).svrtProb)
        })
        chartData[4].data.push({
          x: this.severityData.second.at(-2).prdtDt,
          y: parseFloat(this.severityData.second.at(-2).svrtProb)
        })
        chartData[5].data.push({
          x: this.severityData.second.at(-1).prdtDt,
          y: parseFloat(this.severityData.second.at(-1).svrtProb)
        })

        // Lines for +1 day data
        chartData[6].data.push({
          x: this.severityData.second.at(-4).prdtDt,
          y: parseFloat(this.severityData.second.at(-4).svrtProb)
        })
        chartData[6].data.push({
          x: this.severityData.first.at(-3).prdtDt,
          y: parseFloat(this.severityData.first.at(-3).svrtProb)
        })
        chartData[7].data.push({
          x: this.severityData.second.at(-4).prdtDt,
          y: parseFloat(this.severityData.second.at(-4).svrtProb)
        })
        chartData[7].data.push({
          x: this.severityData.third.at(-3).prdtDt,
          y: parseFloat(this.severityData.third.at(-3).svrtProb)
        })
        chartData[8].data.push({
          x: this.severityData.first.at(-3).prdtDt,
          y: parseFloat(this.severityData.first.at(-3).svrtProb)
        })
        chartData[8].data.push({
          x: this.severityData.third.at(-3).prdtDt,
          y: parseFloat(this.severityData.third.at(-3).svrtProb)
        })

        // Lines for +2 days data
        chartData[9].data.push({
          x: this.severityData.second.at(-3).prdtDt,
          y: parseFloat(this.severityData.second.at(-3).svrtProb)
        })
        chartData[9].data.push({
          x: this.severityData.first.at(-2).prdtDt,
          y: parseFloat(this.severityData.first.at(-2).svrtProb)
        })
        chartData[10].data.push({
          x: this.severityData.second.at(-3).prdtDt,
          y: parseFloat(this.severityData.second.at(-3).svrtProb)
        })
        chartData[10].data.push({
          x: this.severityData.third.at(-2).prdtDt,
          y: parseFloat(this.severityData.third.at(-2).svrtProb)
        })
        chartData[11].data.push({
          x: this.severityData.first.at(-2).prdtDt,
          y: parseFloat(this.severityData.first.at(-2).svrtProb)
        })
        chartData[11].data.push({
          x: this.severityData.third.at(-2).prdtDt,
          y: parseFloat(this.severityData.third.at(-2).svrtProb)
        })

        // Line for +3 days data
        chartData[12].data.push({
          x: this.severityData.second.at(-2).prdtDt,
          y: parseFloat(this.severityData.second.at(-2).svrtProb)
        })
        chartData[12].data.push({
          x: this.severityData.second.at(-1).prdtDt,
          y: parseFloat(this.severityData.second.at(-1).svrtProb)
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
    }
  }
}
</script>

<style scoped>
.chart-container {
  min-height: initial;
}
</style>
