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
  } else return ''
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
      this.newPt.gndr = '남'
      return this.newPt.gndr
    } else {
      this.newPt.gndr = '여'
      return this.newPt.gndr
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

export async function openPopup(idx) {
  if (idx === 0 && !this.rptYn) {
    console.log(this.newPt)
    await this.$store.dispatch('patnt/isExistPt', this.newPt)
    console.log(this.existPt)
    if (this.existPt !== null) {
      this.popup = 0
    } else {
      await this.$store.dispatch('patnt/regBasicInfo', this.newPt)
      if (this.ptBI !== null) {
        this.alertOpen(3)
      }
    }
  } else if (idx === 1) {
    /*병상 배정 불가*/
    this.popup = 4
    document.getElementById('deniedAsgn').focus()
  } else if (idx === 2 && this.timeline !== null) {
    console.log('요청' + this.userInfo.jobCd)

    if ( (this.userInfo.jobCd === JobCode.Aprv || this.userInfo.jobCd === JobCode.Sysa)
      && this.bdDetail.bedStatCd !== 'BAST0004' ) {
      /*병상 요청 승인 - 배정반 */
      if (this.timeline.items[0].title.includes('원내')) {
        console.log('원내배정 - 배정반')
        this.popup = 2
      } else {
        console.log('전원요청')
        await this.$store.dispatch('bedasgn/rcmdHpList', this.bdDetail)
        this.openModal(1)
      }
    } else if (this.userInfo.jobCd === JobCode.Meds || this.userInfo.jobCd === JobCode.Sysa) {
      console.log('의료진 / 해당')
      this.popup = 3
    }
  }
}

export function toggleCheckbox() {
  event.stopPropagation()
}

export function backBtn(idx) {
  this.tab = idx
  this.popup = 100
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

export async function goAsgn(idx) {
  if (idx === 2) {
    // 감염병 정보 등록
    if (this.dsInfo.ptId === '' && this.ptBI !== null) {
      this.dsInfo.ptId = this.ptBI
    } else if (this.ptDetail !== null) {
      this.dsInfo.ptId = this.ptDetail.ptId
    } else {
      console.log(this.dsInfo.ptId)
    }
    if (this.dsInfo.rcptPhc === 1) {
      this.dsInfo.rcptPhc = this.medinstInfo.rcptPhc
    }
    this.$store.dispatch('bedasgn/regDsInfo', this.dsInfo)
    this.spInfo.spclNm = this.dsInfo.diagDrNm
    console.log(this.ptDs)
    this.tab = idx
  } else if (idx === 3) {
    /*기존정보 업데이트*/
    if (this.rptInfo !== null) {
      /*역조서 입력 시*/
      if (this.rptInfo.instAddr !== null) {
        await this.$store.dispatch('patnt/geoCoding', [1, this.rptInfo.instAddr])
      }
      this.dsInfo = this.rptInfo
      if (this.dsInfo.rcptPhc !== null) {
        this.medinstInfo.rcptPhc = this.dsInfo.rcptPhc
        this.dsInfo.rcptPhc = 1
      }
      console.log(this.dsInfo.ptId)
    }
    this.dsInfo.ptId = this.existPt.ptId
    this.tab = 1
  } else if (idx === 4) {
    /* 중증 정보 등록*/
    if (this.svInfo.ptId === '') {
      this.svInfo.ptId = this.dsInfo.ptId
    }
    if (this.svInfo.ptTypeCd === []) {
      this.svInfo.ptTypeCd = 'PTTP0001'
    } else {
      console.log(this.svInfo.ptTypeCd)
      this.svInfo.ptTypeCd = getUndrDses(this.svInfo.ptTypeCd)
    }
    //this.svInfo.undrDsesCd = this.getUndrDses(this.svInfo.undrDsesCd)
    //this.$store.dispatch('bedasgn/regSvInfo',this.svInfo)
    this.spInfo.dprtDstrTypeCd = this.getStrType
    this.tab = 3
  } else if (idx === 5) {
    /*출발지 정보 등록*/
    console.log(this.spInfo)
    console.log(this.svInfo)
    this.spInfo.ptId = this.svInfo.ptId
    if (this.spInfo.inhpAsgnYn === 'Y' && this.spInfo.dprtDstrTypeCd === 'DPTP0002') {
      this.spInfo.dprtHospId = this.dsInfo.instId
    }
    this.alertOpen(0)
  }
  this.popup = 100
}

export function regNewPt() {
  console.log(this.newPt)
  this.$store.dispatch('patnt/regBasicInfo', this.newPt)
  this.alertOpen(3)
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
    'state6',
    'state4',
    'state5',
    'state3',
    'state2'
  ]
  const iconBasePath = '/img/common/ic_timeline_'

  const iconState = data.timeLineStatus === 'complete' ? '' : '_off'

  if (idx >= 0) {
    if (data.title.includes('요청')) {
      return `${iconBasePath}${iconSuffixes[0]}${iconState}.svg`
    } else if (data.title.includes('승인')) {
      return `${iconBasePath}${iconSuffixes[1]}${iconState}.svg`
    } else if (data.title.includes('배정')) {
      return `${iconBasePath}${iconSuffixes[2]}${iconState}.svg`
    } else if (data.title.includes('이송')) {
      return `${iconBasePath}${iconSuffixes[3]}${iconState}.svg`
    } else if (data.title.includes('불가')) {
      return `${iconBasePath}${iconSuffixes[5]}${iconState}.svg`
    } else {
      return `${iconBasePath}${iconSuffixes[4]}${iconState}.svg`
    }
  }
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