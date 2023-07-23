import api from '../api'
import type { CreatePostBody, UpdatePostBody } from './types'
import type { Post } from '../../slices/post/types'
import type { ApiStatusResponse } from '../../types'

export const postApi = api.injectEndpoints({
	endpoints: (builder) => ({
		uploadImage: builder.mutation<{ url: string }, FormData>({
			query: (formData) => ({
				url: '/upload',
				method: 'post',
				body: formData,
			}),
		}),
		createPost: builder.mutation<Post, CreatePostBody>({
			query: (fields) => ({
				url: '/posts',
				method: 'POST',
				body: fields,
			}),
		}),
		updatePost: builder.mutation<ApiStatusResponse, UpdatePostBody>({
			query: ({ id, fields }) => ({
				url: `/posts/${id}`,
				method: 'PATCH',
				body: fields,
			}),
		}),
		getPost: builder.query<Post, string>({
			query: (id) => ({ url: `/posts/${id}` }),
		}),
	}),
})

export const { useUploadImageMutation, useCreatePostMutation, useUpdatePostMutation, useLazyGetPostQuery } =
	postApi
