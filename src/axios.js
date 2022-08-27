import axios from 'axios'
import address from './config'

const instance = axios.create({
	baseURL: address,
})

instance.interceptors.request.use((cfg) => {
	cfg.headers.Authorization = window.localStorage.getItem('token')
	return cfg
})

export default instance
