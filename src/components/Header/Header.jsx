import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { Button, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutline'

import { logout, selectIsAuth } from '../../redux/slices/auth'
import classes from './Header.module.scss'
import BurgerMenu from '../BurgerMenu/BurgerMenu'
import { fetchPosts } from '../../redux/slices/posts'
import Post from '../../components/Post/Post'

const Header = () => {
	const dispatch = useDispatch()
	const isAuth = useSelector(selectIsAuth)
	const userData = useSelector((state) => state.auth.data)
	const { posts } = useSelector((state) => state.posts)

	const isPostsLoading = posts.status === 'loading'

	React.useEffect(() => {
		dispatch(fetchPosts())
	}, [])

	const onClickLogout = () => {
		if (window.confirm('Вы действительно хотите выйти ?')) {
			dispatch(logout())
			window.localStorage.removeItem('token')
		}
	}

	return (
		<header>
			<nav>
				<NavLink to='/'>
					<div className={classes.headerLogoBox}>
						<h3>и</h3>
					</div>
				</NavLink>
				<div className={classes.NavActionBlock}>
					<ul>
						<li>
							<BurgerMenu>
								{(isPostsLoading ? [...Array(2)] : posts.items).map((obj, index) =>
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
									)
								)}
							</BurgerMenu>
						</li>
						{isAuth ? (
							<>
								<li>
									<NavLink to='/add-post'>
										<IconButton color='primary'>
											<AddIcon sx={{ fontSize: '40px' }} />
										</IconButton>
									</NavLink>
								</li>
								<li>
									<Button onClick={onClickLogout} variant='contained' color='error'>
										Выйти
									</Button>
								</li>
							</>
						) : (
							''
						)}
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
