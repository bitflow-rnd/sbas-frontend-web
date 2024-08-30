import { AuthCode, JobCode } from '@/util/sbas_cnst'

export function getSido() {
  this.$store.dispatch('admin/getSido')
}

export function getGugun(code) {
  this.$store.dispatch('admin/getGuGun', code)
}

export function getTelno(data) {
  if (data !== null && data !== undefined) {
    return data.slice(0, 3) + '-' + data.slice(3, 7) + '-' + data.slice(7, 12)
  } else return '-'
}

export function maskingNm(nm) {
  return nm.slice(0, 1) + '*' + nm.slice(2)
}

/*
idx === 0: YYYY년 MM월 DD일
idx === 1: (오후/오전) hh시 mm분
idx === 2: YYYY년 MM월 DD일,(오후/오전) hh시 mm분
*/
export function getTLDt(date, idx) {
  /*표준시라서  +9 해줘야 함 */
  let dd = new Date(date)
  if (idx === 0) {
    return dd.getFullYear() + '년 ' + (dd.getMonth() + 1) + '월 ' + dd.getDate() + '일'
  } else if (idx === 1) {
    if (dd.getHours() > 12) {
      return '오후 ' + (dd.getHours() - 12) + '시 ' + dd.getMinutes() + '분'
    } else if (idx === 1 && date !== null && date !== undefined) {
      return '오전 ' + dd.getHours() + '시 ' + dd.getMinutes() + '분'
    } else {
      return '오전 ' + dd.getHours() + '시 ' + dd.getMinutes() + '분'
    }
  } else if (idx === 2) {
    if (dd.getHours() > 12) {
      return dd.getFullYear() + '년 ' + (dd.getMonth() + 1) + '월 ' + dd.getDate() + '일, ' +
        '오후 ' + (dd.getHours() - 12) + '시 ' + dd.getMinutes() + '분'
    } else {
      return dd.getFullYear() + '년 ' + (dd.getMonth() + 1) + '월 ' + dd.getDate() + '일, ' +
        '오전 ' + dd.getHours() + '시 ' + dd.getMinutes() + '분'
    }
  } else {
    return ''
  }
}

export function getTag(data) {
  if (data === '' || data === null) return '-'
  let str = ''
  data.forEach((item) => {
    if (item.length>0) {
      str += '#' + item + ' '
    }
  })
  return str
}

export function getGndr(no2) {
  if (no2 !== '' && no2 !== null) {
    if (no2.length > 1) {
      no2 = no2.slice(0, 1)
    }
    if (no2 === '1' || no2 === '3') {
      return '남'
    } else {
      return '여'
    }
  }
}

export function getAge(rrno1, rrno2) {
  if (rrno1 === null || rrno1 === '' || rrno2 === null || rrno2 === '') {
    return null
  }
  const curData = new Date()
  const curYear = curData.getFullYear()
  const curMonth = curData.getMonth() + 1
  const curDay = curData.getDate()

  let year = parseInt(rrno1.substring(0, 2))
  const month = parseInt(rrno1.substring(2, 4))
  const day = parseInt(rrno1.substring(4, 6))

  if (rrno2.length > 1) {
    rrno2 = rrno2.slice(0, 1)
  }
  if (rrno2 === '1' || rrno2 === '2' || rrno2 === '5' || rrno2 === '6') {
    year += 1900
  } else {
    year += 2000
  }

  const americanAge = curYear - year
  if (month > curMonth || (month === curMonth && day > curDay)) {
    return americanAge - 1
  } else {
    return americanAge
  }
}

export function getAuthCd(code) {
  if (code === AuthCode.Member.code) {
    return AuthCode.Member.label
  } else if (code === AuthCode.Guest.code) {
    return AuthCode.Guest.label
  }
}

export function getPmgr(code) {
  if (code === JobCode.Rqst) {
    return '병상요청'
  } else if (code === JobCode.Aprv) {
    return '병상승인'
  } else if (code === JobCode.Meds) {
    return '병상배정'
  } else {
    return '시스템관리'
  }
}


export function getPtType(code) {
  if (code !== undefined && code !== null) {
    const arr = code.split(';')
    const res = arr.map((item) => ptType[item])
    return res.join(', ')
  } else return '-'
}

export const ptType = {
  PTTP0001: '일반',
  PTTP0002: '소아',
  PTTP0003: '투석',
  PTTP0004: '산모',
  PTTP0005: '수술',
  PTTP0006: '인공호흡기 사용',
  PTTP0007: '적극적 치료요청',
  PTTP0008: '신생아'
}

export const reqBedType = {
  BDTP0001: '미분류',
  BDTP0002: '일반격리',
  BDTP0003: '음압격리',
  BDTP0004: '소아일반격리',
  BDTP0005: '소아음압격리',
  BDTP0006: '일반',
  BDTP0007: '소아'
}

export function toggleCheckbox() {
  event.stopPropagation()
}

export function getUndrDses(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return ''
  } else {
    console.log(arr)
    const strArr = arr.map((item) => String(item))
    const resStr = strArr.join(';')
    console.log(resStr)
    return resStr
  }
}

export function openAddressFinder(idx) {
  const self = this
  // eslint-disable-next-line no-undef
  new daum.Postcode({
    oncomplete: function(data) {
      if (idx === 0) {
        self.newPt.zip = data.zonecode
        self.newPt.bascAddr = data.address
      } else if (idx === 1) {
        self.dsInfo.instZip = data.zonecode
        self.dsInfo.instBascAddr = data.address
      } else if (idx === 3) {
        self.spInfo.dprtDstrZip = data.zonecode
        self.spInfo.dprtDstrBascAddr = data.address
      }
    }
  }).open()
}

export function getTLIcon(data, idx) {
  const iconSuffixes = [
    'state0',
    'state1',
    'state2',
    'state3',
    'state4',
    'state5',
  ]
  const iconBasePath = '/img/common/ic_timeline_'

  let iconState = ''
  if (data.timeLineStatus === 'complete') {
    iconState = ''
  } else if (data.timeLineStatus === 'suspend') {
    iconState = ''
  } else {
    iconState = '_off'
  }

  let img = ''
  if (idx >= 0) {
    if (data.title.includes('병상요청')) {
      img = `${iconBasePath}${iconSuffixes[0]}${iconState}.svg`
    } else if (data.title.includes('승인')) {
      img = `${iconBasePath}${iconSuffixes[1]}${iconState}.svg`
    } else if (data.title.includes('배정')) {
      img = `${iconBasePath}${iconSuffixes[1]}${iconState}.svg`
    } else if (data.title.includes('이송')) {
      img = `${iconBasePath}${iconSuffixes[4]}${iconState}.svg`
    } else if (data.title.includes('입원')) {
      img = `${iconBasePath}${iconSuffixes[3]}${iconState}.svg`
    }
    if (data.title.includes('불가')) {
      img = `${iconBasePath}${iconSuffixes[2]}${iconState}.svg`
    }
    if (data.title.includes('대기')) {
      img = `${iconBasePath}${iconSuffixes[5]}${iconState}.svg`
    }
    if (data.title.includes('이송중')) {
      img = `${iconBasePath}${iconSuffixes[5]}${iconState}.svg`
    }
  }
  return img
}

export function getDt(data) {
  const curData = new Date()
  const curYear = curData.getFullYear()
  const curMonth = curData.getMonth() + 1
  const curDate = curData.getDate()

  const dData = new Date(data)
  const dYear = dData.getFullYear()
  const dMonth = dData.getMonth() + 1
  const dDate = dData.getDate()
  const dHours = String(dData.getHours()).padStart(2, '0')
  const dMinutes = String(dData.getMinutes()).padStart(2, '0')

  if (curYear === dYear && curMonth === dMonth && curDate === dDate) {
    return `${dHours}:${dMinutes}`
  } else {
    return `${dYear}.${String(dMonth).padStart(2, '0')}.${String(dDate).padStart(2, '0')} ${dHours}:${dMinutes}`
  }
}

export function getDtBlue(data) {
  const curData = new Date()
  const curYear = curData.getFullYear()
  const curMonth = curData.getMonth() + 1
  const curDate = curData.getDate()

  const dData = new Date(data)
  const dYear = dData.getFullYear()
  const dMonth = dData.getMonth() + 1
  const dDate = dData.getDate()
  const dHours = String(dData.getHours()).padStart(2, '0')
  const dMinutes = String(dData.getMinutes()).padStart(2, '0')

  if (curYear === dYear && curMonth === dMonth && curDate === dDate) {
    return `<span style='color: #1976D2;'>${dHours}:${dMinutes}</span>`
  } else {
    return `${dYear.toString().substring(2) + '\''}.${String(dMonth).padStart(2, '0')}.${String(dDate).padStart(2, '0')} ${dHours}시`
  }
}

export function formatYyyyMmDd(data) {
  const year = data.substring(0, 4)
  const month = data.substring(4, 6)
  const day = data.substring(6, 8)
  return `${year}.${month}.${day}`
}

export function TimestampToDateWithDot(data) {
  const dData = new Date(data)
  const dYear = dData.getFullYear()
  let dMonth = dData.getMonth() + 1
  let dDate = dData.getDate()

  if (dMonth < 10) {
    dMonth = '0' + dMonth
  }
  if (dDate < 10) {
    dDate = '0' + dDate
  }
  return dYear + '.' + dMonth + '.' + dDate
}