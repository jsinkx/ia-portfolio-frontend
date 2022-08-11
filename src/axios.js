import axios from 'axios'
import config from './config.json'

const instance = axios.create({
	baseURL: config.adress,
})

instance.interceptors.request.use((cfg) => {
	cfg.headers.Authorization = window.localStorage.getItem('token')
	return cfg
})

export default instance
