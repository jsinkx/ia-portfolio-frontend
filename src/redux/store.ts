import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from './slices/auth/auth'
import { postsReducer } from './slices/post/slice'

import api from './services/api'

const store = configureStore({
	reducer: {
		auth: authReducer,
		posts: postsReducer,
		[api.reducerPath]: api.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
})

export default store
