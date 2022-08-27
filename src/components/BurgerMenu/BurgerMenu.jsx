import React from 'react'
import BurgerIcon from '@mui/icons-material/DensitySmall'

import classes from './BurgerMenu.module.scss'
import { useState } from 'react'
import { IconButton } from '@mui/material'

const BurgerMenu = ({ children }) => {
	const [display, setDisplay] = useState(false)
	const elementsStyle = { display: display ? 'inline' : 'none' }

	const changeWindow = (state) => setDisplay(state ? false : true)

	return (
		<>
			<div className={classes.burgerMenu}>
				<IconButton onClick={() => changeWindow(display)}>
					<BurgerIcon sx={{ fontSize: 40 }} />
				</IconButton>
			</div>
			<div className={classes.elements} style={elementsStyle} onClick={() => changeWindow(display)}>
				<p> Закрыть </p>
				{children}
			</div>
		</>
	)
}

export default BurgerMenu
