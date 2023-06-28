import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutline'

import useAppSelector from '../../hooks/useAppSelector'
import useAppDispatch from '../../hooks/useAppDispatch'

import { selectAuthData, selectIsAuth } from '../../redux/slices/auth/selectors'
import { selectPosts } from '../../redux/slices/post/selectors'
import { User } from '../../redux/slices/auth/types'
import { logout } from '../../redux/slices/auth/auth'
import { fetchPosts } from '../../redux/slices/post/slice'

import Status from '../../shared/status'

import BurgerMenu from '../BurgerMenu/BurgerMenu'
import Post from '../Post/Post'

import classes from './Header.module.scss'

const Header = () => {
	const dispatch = useAppDispatch()

	const isAuth = useAppSelector(selectIsAuth)
	const userData = useAppSelector(selectAuthData) as unknown as User

	const { items, status } = useAppSelector(selectPosts)

	const isPostsLoading = status === Status.LOADING

	React.useEffect(() => {
		dispatch(fetchPosts())
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
								{(isPostsLoading ? [...Array(2)] : items).map((obj, index) =>
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
