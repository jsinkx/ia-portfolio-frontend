import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

import config from '../../shared/config'

const baseQuery = fetchBaseQuery({
	baseUrl: config.address,
	prepareHeaders(headers) {
		const token = localStorage.getItem('token')

		token && headers.set('authorization', token)
	},
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

const api = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithRetry,
	refetchOnMountOrArgChange: true,
	endpoints: () => ({}),
})

// api endpoints inject in ./endpoints

export default api