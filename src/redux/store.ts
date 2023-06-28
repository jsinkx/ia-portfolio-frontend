import { configureStore } from '@reduxjs/toolkit'

import { authReducer } from './slices/auth/auth'
import { postsReducer } from './slices/post/slice'

const store = configureStore({
	reducer: {
		auth: authReducer,
		posts: postsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store
