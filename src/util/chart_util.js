export const sverityLineChartOptions = {
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
    }
  },
  colors: ['#545454'], // '#77B6EA'
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'smooth'
  },
  title: {
    text: '중증환자 발생 추이 (최근 6개월)',
    align: 'left'
  },
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
