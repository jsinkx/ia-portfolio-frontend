import React from 'react'

import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'

import { User } from '../../redux/slices/auth/types'
import { selectAuthData } from '../../redux/slices/auth/selectors'
import { selectPosts } from '../../redux/slices/post/selectors'
import { fetchPosts } from '../../redux/slices/post/slice'

import BusinessInfo from './BusinessInfo/BusinessInfo'
import Post from '../../components/Post/Post'

import classes from './Home.module.scss'

const Home = () => {
	const dispatch = useAppDispatch()

	const userData = useAppSelector(selectAuthData) as unknown as User
	const { items, status } = useAppSelector(selectPosts)

	const isPostsLoading = status === 'loading'

	React.useEffect(() => {
		dispatch(fetchPosts())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<>
			<div className={classes.backgroundWrap}>
				<div className={classes.backgroundFirst}></div>
				<div className={classes.backgroundSecond}></div>
			</div>
			<div className={classes.contentSection}>
				<BusinessInfo />
				<div className={classes.workSection}>
					<p className={classes.pTitle}> МОИ ДОСТИЖЕНИЯ </p>
					{(isPostsLoading ? [...Array(2)] : items).map((obj, index) =>
						isPostsLoading ? (
							<Post key={index} isLoading={true} />
						) : (
							<Post key={index} id={obj._id} title={obj.title} isEditable={userData?._id === obj.user._id} />
						)
					)}
				</div>
			</div>
		</>
	)
}

export default Home
