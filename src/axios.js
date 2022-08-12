import axios from 'axios'
import config from './config.json'

const instance = axios.create({
	baseURL: process.env.REACT_APP_API_URL || config.adress,
})

instance.interceptors.request.use((cfg) => {
	cfg.headers.Authorization = window.localStorage.getItem('token')
	return cfg
})

export default instance
