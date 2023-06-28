import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from '../../../axios'

import { AuthData, AuthLoginThunk, IAuthState } from './types'
import Status from '../../../shared/status'

// Thunks

export const fetchAuth = createAsyncThunk<AuthData, AuthLoginThunk>('auth/fetchAuth', async (params) => {
	const { data } = await axios.post('/auth/login', params)
	return data
})

export const fetchAuthMe = createAsyncThunk<AuthData>('auth/fetchAuthMe', async () => {
	const { data } = await axios.get('/auth/me')
	return data
})

const initialState: IAuthState = {
	data: null,
	status: Status.LOADING,
}

// Slice

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		logout: (state) => {
			state.data = null
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchAuth.pending, (state) => {
			state.data = null
			state.status = Status.LOADING
		})
		builder.addCase(fetchAuth.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = Status.LOADED
		})
		builder.addCase(fetchAuth.rejected, (state) => {
			state.data = null
			state.status = Status.ERROR
		})
		builder.addCase(fetchAuthMe.pending, (state) => {
			state.data = null
			state.status = Status.LOADING
		})
		builder.addCase(fetchAuthMe.fulfilled, (state, action) => {
			state.data = action.payload
			state.status = Status.LOADED
		})
		builder.addCase(fetchAuthMe.rejected, (state) => {
			state.data = null
			state.status = Status.ERROR
		})
	},
})

export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions
