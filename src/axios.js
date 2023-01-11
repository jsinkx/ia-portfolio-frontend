import axios from 'axios'
import address from './config'

const instance = axios.create({
	baseURL: address,
})

instance.interceptors.request.use((config) => {
	config.headers.Authorization = window.localStorage.getItem('token')
	return config
})

export default instance
