import axios from 'axios'
import adress from './config'

const instance = axios.create({
	baseURL: adress,
})

instance.interceptors.request.use((cfg) => {
	cfg.headers.Authorization = window.localStorage.getItem('token')
	return cfg
})

export default instance
