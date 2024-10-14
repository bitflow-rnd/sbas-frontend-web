import axios from 'axios'
import { ref } from 'vue'

const laxios = axios.create()
laxios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8'
laxios.defaults.headers['Accept'] = 'application/json'
laxios.defaults.headers['Access-Control-Allow-Credentials'] = 'true'
laxios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
laxios.defaults.withCredentials = true

const isLoading = ref(false)  // 글로벌 로딩 상태

const axios_cstm = () => {
  const token = sessionStorage.getItem('userToken')

  if (token && token.length > 0) {
    laxios.defaults.headers['Authorization'] = `Bearer ${token}`
  }
  // 요청 인터셉터
  laxios.interceptors.request.use(config => {
    isLoading.value = true  // 요청이 시작될 때 스피너 표시
    return config
  }, error => {
    isLoading.value = false  // 오류 발생 시 스피너 숨김
    return Promise.reject(error)
  })

  // 응답 인터셉터
  laxios.interceptors.response.use(response => {
    isLoading.value = false  // 응답 성공 시 스피너 숨김
    return response
  }, error => {
    isLoading.value = false  // 오류 발생 시 스피너 숨김
    return Promise.reject(error)
  })

  return laxios
}

export { axios_cstm, isLoading }
