const sampleData = [
  {
    pid: '0010001',
    admsDt: '20240629',
    monStrtDt: '20240629',
    monStrtTm: '230000',
    deptNm: '감염내과',
    wardNm: '86동병동',
    roomNm: '8609',
    spclNm: '담당의'
  },
  {
    pid: '0010002',
    admsDt: '20240630',
    monStrtDt: '20240630',
    monStrtTm: '223000',
    deptNm: '호흡기내과',
    wardNm: '66서병동',
    roomNm: '6625',
    spclNm: '담당의'
  },
  {
    pid: '0010003',
    admsDt: '20240701',
    monStrtDt: '20240701',
    monStrtTm: '233000',
    deptNm: '감염내과',
    wardNm: '86동병동',
    roomNm: '8611',
    spclNm: '담당의'
  },
  {
    pid: '0010004',
    admsDt: '20240702',
    monStrtDt: '20240702',
    monStrtTm: '230000',
    deptNm: '호흡기내과',
    wardNm: '66서병동',
    roomNm: '6630',
    spclNm: '담당의'
  },
  {
    pid: '0010005',
    admsDt: '20240703',
    monStrtDt: '20240703',
    monStrtTm: '230000',
    deptNm: '감염내과',
    wardNm: '73병동',
    roomNm: '7388',
    spclNm: '담당의'
  },
  {
    pid: '0020001',
    admsDt: '20240629',
    monStrtDt: '20240629',
    monStrtTm: '210000',
    deptNm: '감염내과',
    wardNm: '73병동',
    roomNm: '7387',
    spclNm: '담당의'
  },
  {
    pid: '0020002',
    admsDt: '20240630',
    monStrtDt: '20240630',
    monStrtTm: '230000',
    deptNm: '감염내과',
    wardNm: '73병동',
    roomNm: '7391',
    spclNm: '담당의'
  },
  {
    pid: '0020003',
    admsDt: '20240701',
    monStrtDt: '20240701',
    monStrtTm: '170000',
    deptNm: '감염내과',
    wardNm: '43병동',
    roomNm: '4327',
    spclNm: '담당의'
  },
  {
    pid: '0020004',
    admsDt: '20240702',
    monStrtDt: '20240702',
    monStrtTm: '170000',
    deptNm: '감염내과',
    wardNm: '73병동',
    roomNm: '7393',
    spclNm: '담당의'
  },
  {
    pid: '0020005',
    admsDt: '20240703',
    monStrtDt: '20240703',
    monStrtTm: '210000',
    deptNm: '호흡기내과',
    wardNm: '73병동',
    roomNm: '7386',
    spclNm: '담당의'
  },
  {
    pid: '0030001',
    admsDt: '20240703',
    monStrtDt: '20240703',
    monStrtTm: '230000',
    deptNm: '감염내과',
    wardNm: '43병동',
    roomNm: '4328',
    spclNm: '담당의'
  },
  {
    pid: '0030002',
    admsDt: '20240629',
    monStrtDt: '20240629',
    monStrtTm: '230000',
    deptNm: '감염내과',
    wardNm: '73병동',
    roomNm: '7393',
    spclNm: '담당의'
  },
  {
    pid: '0030003',
    admsDt: '20240630',
    monStrtDt: '20240630',
    monStrtTm: '214000',
    deptNm: '신장내과',
    wardNm: '73병동',
    roomNm: '7394',
    spclNm: '담당의'
  },
  {
    pid: '0030004',
    admsDt: '20240701',
    monStrtDt: '20240701',
    monStrtTm: '230000',
    deptNm: '알레르기감염내과',
    wardNm: 'ICU2',
    roomNm: 'ERW',
    spclNm: '담당의'
  },
  {
    pid: '0030005',
    admsDt: '20240702',
    monStrtDt: '20240702',
    monStrtTm: '230000',
    deptNm: '알레르기감염내과',
    wardNm: 'ICU2',
    roomNm: 'ERW',
    spclNm: '담당의'
  },
  {
    pid: '0040001',
    admsDt: '20240620',
    monStrtDt: '20240620',
    monStrtTm: '230000',
    deptNm: '외과',
    wardNm: 'MICU',
    roomNm: 'MICUC',
    spclNm: '담당의'
  },
  {
    pid: '0040002',
    admsDt: '20240711',
    monStrtDt: '20240711',
    monStrtTm: '210000',
    deptNm: '감염내과',
    wardNm: '43병동',
    roomNm: '4328',
    spclNm: '담당의'
  },
  {
    pid: '0040003',
    admsDt: '20240713',
    monStrtDt: '20240713',
    monStrtTm: '210000',
    deptNm: '감염내과',
    wardNm: '66동병동',
    roomNm: '6604',
    spclNm: '담당의'
  },
  {
    pid: '0040004',
    admsDt: '20240711',
    monStrtDt: '20240711',
    monStrtTm: '225200',
    deptNm: '외과',
    wardNm: 'ICU2',
    roomNm: 'ERW',
    spclNm: '담당의'
  },
  {
    pid: '0040005',
    admsDt: '20240711',
    monStrtDt: '20240711',
    monStrtTm: '230000',
    deptNm: '외과',
    wardNm: 'ICU2',
    roomNm: 'ERW',
    spclNm: '담당의'
  }
]

export function getHisSampleData(pid) {
  const data = sampleData.find((data) => data.pid === pid)
  if (data) {
    return data
  } else {
    return null
  }
}