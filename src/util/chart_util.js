import ko from 'apexcharts/dist/locales/ko.json'

let today = new Date()
let year = today.getFullYear()
let month = (today.getMonth() + 1).toString().padStart(2, '0')
let day = today.getDate().toString().padStart(2, '0')

let formattedDate = `${year}-${month}-${day}`
let todayDate = `${month}.${day}`

export let data = {
  firstMsreDt: null,
  oxygenApply: [],
};

export const simpleSeverityLineChartOpt = {
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false
    },
    locales: [ko],
    defaultLocale: 'ko',
    toolbar: {
      show: false
    },
  },
  colors: [
    '#fc1f1f',
    '#000000',
    '#676767',
    '#00ff26',
    '#fcce14',
  ],
  tooltip: {
    custom: function({series, seriesIndex, dataPointIndex, w}) {
      return '<div style="padding: 10px">' +
        '<span>' + new Date(w.globals.labels[dataPointIndex]).toISOString().split('T')[0] + '</span>' + '<br>' +
        '<span>' + 'CovSF: ' + series[seriesIndex][dataPointIndex] + '</span>' + '<br>' +
        '<span>' + 'OxygenApply: ' + (data.oxygenApply[dataPointIndex]) + '</span>' +
        '</div>'
    }
  },
  markers: {
    size: 5
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
  forecastDataPoints: {
    count: 3,
  },
  stroke: {
    width: 3,
    curve: 'smooth',
    // dashArray: [2, 0, 2, 0, 0, 0, 2, 2, 0, 2, 2, 0, 2]
  },
  title: { },
  yaxis: {
    seriesName: 'CovSF',
    min: 0,
    max: 1,
    tickAmount: 10,
    labels: {
      formatter: (y) => {
        return y?.toFixed(1)
      }
    },
    title: {
      text: 'CovSF'
    }
  },
  xaxis: {
    type: 'category',
    labels: {
      formatter: function(value) {
        let date = new Date(value)
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
      }
    },
    crosshairs: {
      show: true,
    },
    tooltip: {
      enabled: false,
    }
  },
  annotations: {
    xaxis: [{
      x: new Date(formattedDate).getTime(),
      strokeDashArray: 0,
      borderColor: '#008FFB',
      borderWidth: 1.5,
      label: {
        orientation: 'horizontal',
        borderColor: '#008FFB',
        style: {
          fontSize: '13px',
          color: '#fff',
          background: '#008FFB'
        },
        text: `오늘(${todayDate})`
      }
    }],
    yaxis: [
      // 기준선
      {
        y: 0.4,
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
      // 백그라운드 색깔
      {
        y: 0.0,
        y2: 0.4,
        borderColor: '#000000',
        fillColor: '#2eff00',
        opacity: 0.1
      },
      {
        y: 0.4,
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
}

export const trendLineChartOptions = {
  chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    toolbar: {
      show: false
    },
    locales: [ko],
    defaultLocale: 'ko'
  },
  colors: ['#545454'], // '#77B6EA'
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'smooth'
  },
  title: { },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    }
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['1월', '2월', '3월', '4월', '5월', '6월', '7월'],
    title: {
      text: '월'
    }
  },
  yaxis: {
    title: {
      text: '환자 수'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
}
