const JobCode = {
  Rqst: 'PMGR0001',
  Aprv: 'PMGR0002',
  Meds: 'PMGR0003',
  Sysa: 'PMGR0004',
  Full: 'PMGR0009'
}

const InstType = {
  Rqst: 'ORGN0001',
  Emerg: 'ORGN0002',
  Aprv: 'ORGN0003',
  Meds: 'ORGN0004',
  Sysa: 'ORGN0005',
}

const AuthCode = {
  Member: { code: 'DTPM0001', label: '일반' },
  Guest: { code: 'DTPM0002', label: '게스트' }
}

export { JobCode, InstType, AuthCode }