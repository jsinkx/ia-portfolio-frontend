import React from 'react'
import { Link } from 'react-router-dom'

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
import ConfirmationWindow from '../ConfirmationWindow'

const Header = () => {
	const dispatch = useAppDispatch()

	const isAuth = useAppSelector(selectIsAuth)

	const [isOpen, setIsOpen] = React.useState(false)

	React.useEffect(() => {
		dispatch(fetchPosts())
	}, [dispatch])

	const handleClose = () => {
		setIsOpen(false)
	}

	const handleAccept = () => {
		handleClose()
		dispatch(logout())

		window.localStorage.removeItem('token')
	}

	return (
		<>
			{isOpen && (
				<ConfirmationWindow
					title="Выход с аккаунта"
					acceptText="Выйти"
					onAccept={handleAccept}
					onClose={handleClose}
				>
					Вы действительно хотите выйти ?
				</ConfirmationWindow>
			)}
			<StyledHeader>
				<nav>
					<Link to="/">
						<div className="headerLogoBox">
							<h3>и</h3>
						</div>
					</Link>
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
										<Link to="/add-post">
											<IconButton color="primary">
												<AddIcon sx={{ fontSize: '40px' }} />
											</IconButton>
										</Link>
									</li>
									<li>
										<Button
											onClick={() => setIsOpen(true)}
											variant="contained"
											color="error"
										>
											Выйти
										</Button>
									</li>
								</>
							) : null}
						</ul>
					</div>
				</nav>
			</StyledHeader>
		</>
	)
}

export default React.memo(Header)
