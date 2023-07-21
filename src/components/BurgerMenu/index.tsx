import React from 'react'

import BurgerIcon from '@mui/icons-material/DensitySmall'
import { IconButton } from '@mui/material'

import StyledBurgerMenu from './style'

type BurgerMenuProps = {
	children: React.ReactNode
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ children }) => {
	const [isOpen, setIsOpen] = React.useState(false)

	return (
		<>
			<div>
				<IconButton onClick={() => setIsOpen((p) => !p)}>
					<BurgerIcon sx={{ fontSize: 40 }} />
				</IconButton>
			</div>
			<StyledBurgerMenu $isOpen={isOpen} onClick={() => setIsOpen((p) => !p)}>
				<p> Закрыть </p>
				{children}
			</StyledBurgerMenu>
		</>
	)
}

export default BurgerMenu
