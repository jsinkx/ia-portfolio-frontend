import React from 'react'

import BurgerIcon from '@mui/icons-material/DensitySmall'
import { IconButton } from '@mui/material'

import classes from './BurgerMenu.module.scss'

type BurgerMenuProps = {
	children: React.ReactNode
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ children }) => {
	const [display, setDisplay] = React.useState(false)

	const elementsStyle = { display: display ? 'inline' : 'none' }

	return (
		<>
			<div className={classes.burgerMenu}>
				<IconButton onClick={() => setDisplay((p) => !p)}>
					<BurgerIcon sx={{ fontSize: 40 }} />
				</IconButton>
			</div>
			<div className={classes.elements} style={elementsStyle} onClick={() => setDisplay((p) => !p)}>
				<p> Закрыть </p>
				{children}
			</div>
		</>
	)
}

export default BurgerMenu
