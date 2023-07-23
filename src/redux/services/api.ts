import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

import { SERVER_URL } from '../../shared/constants'

const baseQuery = fetchBaseQuery({
	baseUrl: SERVER_URL,
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
