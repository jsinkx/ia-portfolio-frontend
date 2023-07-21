import React from 'react'

import useAppSelector from '../../hooks/useAppSelector'
import { selectAuthData } from '../../redux/slices/auth/selectors'
import { selectPosts } from '../../redux/slices/post/selectors'
import type { User } from '../../redux/slices/auth/types'
import Status from '../../shared/status'

import Post from '../Post'

const Posts: React.FC = () => {
	const userData = useAppSelector(selectAuthData) as unknown as User

	const { items, status } = useAppSelector(selectPosts)

	const isPostsLoading = status === Status.LOADING

	return (isPostsLoading ? [...Array(2)] : items).map((obj, index) =>
		isPostsLoading ? (
			<Post key={index} isLoading={true} />
		) : (
			<Post
				key={index}
				id={obj._id}
				title={obj.title}
				isEditable={userData?._id === obj.user._id}
				isBurger
			/>
		),
	)
}

export default Posts
