import React from 'react'

import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'

import { selectAuthData } from '../../redux/slices/auth/selectors'
import { selectPosts } from '../../redux/slices/post/selectors'
import { fetchPosts } from '../../redux/slices/post/slice'
import type { Post as PostT } from '../../redux/slices/post/types'

import isUser from '../../utils/is-user'

import MainLayout from '../../layouts/MainLayout'

import Intro from './Intro'
import Contacts from './Contacts'
import Socials from './Socials'
import Post from '../../components/Post'
import { StyledHome, StyledHomeBackgroundWrap, StyledHomeProfileTitle } from './style'

const Home: React.FC = () => {
	const dispatch = useAppDispatch()

	const userData = useAppSelector(selectAuthData)
	const { items, status } = useAppSelector(selectPosts)

	const isPostsLoading = status === 'loading'

	React.useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	return (
		<MainLayout>
			<StyledHomeBackgroundWrap>
				<div className="background--first" />
				<div className="background--second" />
			</StyledHomeBackgroundWrap>
			<StyledHome>
				<div className="profile__contacts">
					<Intro />
					<Contacts />
					<Socials />
				</div>
				<div className="profile__posts">
					<StyledHomeProfileTitle>МОИ ДОСТИЖЕНИЯ</StyledHomeProfileTitle>
					{(isPostsLoading ? [...Array(4)] : items).map((post: PostT, index) =>
						isPostsLoading ? (
							<Post key={index} isLoading={true} />
						) : (
							<Post
								key={index}
								id={post._id}
								title={post.title}
								isEditable={(isUser(userData) && userData?._id) === post.user._id}
							/>
						),
					)}
				</div>
			</StyledHome>
		</MainLayout>
	)
}

export default Home
