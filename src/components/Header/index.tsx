import React from 'react'
import { NavLink } from 'react-router-dom'

import { Button, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/AddCircleOutline'

import useAppSelector from '../../hooks/useAppSelector'
import useAppDispatch from '../../hooks/useAppDispatch'

import { selectIsAuth } from '../../redux/slices/auth/selectors'
import { logout } from '../../redux/slices/auth/auth'
import { fetchPosts } from '../../redux/slices/post/slice'

import BurgerMenu from '../BurgerMenu'
import Posts from './Posts'
import StyledHeader from './style'

const Header = () => {
	const dispatch = useAppDispatch()

	const isAuth = useAppSelector(selectIsAuth)

	React.useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	const onClickLogout = () => {
		if (window.confirm('Вы действительно хотите выйти ?')) {
			dispatch(logout())
			window.localStorage.removeItem('token')
		}
	}

	return (
		<StyledHeader>
			<nav>
				<NavLink to="/">
					<div className="headerLogoBox">
						<h3>и</h3>
					</div>
				</NavLink>
				<div className="NavActionBlock">
					<ul className="header__action__buttons">
						<li>
							<BurgerMenu>
								<Posts />
							</BurgerMenu>
						</li>
						{isAuth ? (
							<>
								<li>
									<NavLink to="/add-post">
										<IconButton color="primary">
											<AddIcon sx={{ fontSize: '40px' }} />
										</IconButton>
									</NavLink>
								</li>
								<li>
									<Button onClick={onClickLogout} variant="contained" color="error">
										Выйти
									</Button>
								</li>
							</>
						) : null}
					</ul>
				</div>
			</nav>
		</StyledHeader>
	)
}

export default Header
