import React from 'react'

import useAppDispatch from '../../hooks/useAppDispatch'
import useAppSelector from '../../hooks/useAppSelector'

import { User } from '../../redux/slices/auth/types'
import { selectAuthData } from '../../redux/slices/auth/selectors'
import { selectPosts } from '../../redux/slices/post/selectors'
import { fetchPosts } from '../../redux/slices/post/slice'

import MainLayout from '../../layouts/MainLayout'

import Post from '../../components/Post/Post'

import Intro from './Intro'
// import AboutMe from './AboutMe'
import Contacts from './Contacts'
import Socials from './Socials'

import classes from '../../assets/styles/pages/Home/Home.module.scss'

const Home: React.FC = () => {
	const dispatch = useAppDispatch()

	const userData = useAppSelector(selectAuthData) as unknown as User
	const { items, status } = useAppSelector(selectPosts)

	const isPostsLoading = status === 'loading'

	React.useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	return (
		<MainLayout>
			<div className={classes.backgroundWrap}>
				<div className={classes.backgroundFirst}></div>
				<div className={classes.backgroundSecond}></div>
			</div>
			<div className={classes.contentSection}>
				<div className={classes.businessItems}>
					<Intro />
					{/* <AboutMe /> */}
					<Contacts />
					<Socials />
				</div>

				<div className={classes.workSection}>
					<p className={classes.pTitle}> МОИ ДОСТИЖЕНИЯ </p>
					{(isPostsLoading ? [...Array(2)] : items).map((obj, index) =>
						isPostsLoading ? (
							<Post key={index} isLoading={true} />
						) : (
							<Post
								key={index}
								id={obj._id}
								title={obj.title}
								isEditable={userData?._id === obj.user._id}
							/>
						),
					)}
				</div>
			</div>
		</MainLayout>
	)
}

export default Home
