import axios from 'axios'

const laxios = axios.create()
laxios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8'
laxios.defaults.headers['Accept'] = 'application/json'
laxios.defaults.headers['Access-Control-Allow-Credentials'] = 'true'
laxios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
laxios.defaults.withCredentials = true

function axios_cstm() {
  const token = sessionStorage.getItem('userToken')
	if (token && token.length > 0) {
		laxios.defaults.headers['Authorization'] = `Bearer ${token}`
	}
	return laxios
}

export { axios_cstm }
