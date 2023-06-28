import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../../axios'

import { IPostState, Post } from './types'
import Status from '../../../shared/status'

// Thunks

export const fetchPosts = createAsyncThunk<Post[]>('posts/fetchPosts', async () => {
	const { data } = await axios.get('/posts')
	return data
})

export const fetchRemovePost = createAsyncThunk<{}, string>('posts/fetchRemovePost', async (id) => {
	axios.delete(`/posts/${id}`)
})

const initialState: IPostState = {
	items: [],
	status: Status.LOADING,
}

// Slice

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchPosts.pending, (state) => {
			state.items = []
			state.status = Status.LOADING
		})
		builder.addCase(fetchPosts.fulfilled, (state, action) => {
			state.items = action.payload
			state.status = Status.LOADED
		})
		builder.addCase(fetchPosts.rejected, (state) => {
			state.items = []
			state.status = Status.ERROR
		})
		builder.addCase(fetchRemovePost.pending, (state, action) => {
			state.items = state.items.filter((obj: Post) => obj._id !== action.meta.arg)
		})
	},
})

export const postsReducer = postsSlice.reducer
