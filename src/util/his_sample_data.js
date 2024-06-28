const sampleData = [
  {
    pid: '0010001',
    admsDt: '20230111',
    monStrtDt: '20230112',
    monStrtTm: '230000'
  },
  {
    pid: '0010002',
    admsDt: '20230206',
    monStrtDt: '20230206',
    monStrtTm: '223000'
  },
  {
    pid: '0010003',
    admsDt: '20230122',
    monStrtDt: '20230122',
    monStrtTm: '233000'
  },
  {
    pid: '0010004',
    admsDt: '20230715',
    monStrtDt: '20230715',
    monStrtTm: '230000'
  },
  {
    pid: '0010005',
    admsDt: '20230320',
    monStrtDt: '20230320',
    monStrtTm: '230000'
  },
  {
    pid: '0020001',
    admsDt: '20230105',
    monStrtDt: '20230105',
    monStrtTm: '210000'
  },
  {
    pid: '0020002',
    admsDt: '20230730',
    monStrtDt: '20230730',
    monStrtTm: '230000'
  },
  {
    pid: '0020003',
    admsDt: '20220103',
    monStrtDt: '20220103',
    monStrtTm: '170000'
  },
  {
    pid: '0020004',
    admsDt: '20211221',
    monStrtDt: '20211221',
    monStrtTm: '170000'
  },
  {
    pid: '0020005',
    admsDt: '20211230',
    monStrtDt: '20211230',
    monStrtTm: '210000'
  },
  {
    pid: '0030001',
    admsDt: '20220208',
    monStrtDt: '20220208',
    monStrtTm: '230000'
  },
  {
    pid: '0030002',
    admsDt: '20210115',
    monStrtDt: '20210115',
    monStrtTm: '230000'
  },
  {
    pid: '0030003',
    admsDt: '20220223',
    monStrtDt: '20220223',
    monStrtTm: '214000'
  },
  {
    pid: '0030004',
    admsDt: '20200905',
    monStrtDt: '20200905',
    monStrtTm: '230000'
  },
  {
    pid: '0030005',
    admsDt: '20201117',
    monStrtDt: '20201117',
    monStrtTm: '230000'
  },
]

export function getHisSampleData(pid) {
  return sampleData.find((data) => data.pid === pid)
}