import axios from 'axios'

import config from './shared/config'

const instance = axios.create({ baseURL: config.address })

instance.interceptors.request.use((_config) => {
	_config.headers.Authorization = window.localStorage.getItem('token')

	return _config
})

export default instance
