import React from 'react'

import { IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import StyledModalWindow from './style'

type ModalWindowProps = {
	rootRef: React.RefObject<HTMLDivElement>
	title?: string | undefined
	children: React.ReactNode
	handleClose: () => void
}

// Wrapper layout for modal, basic styled window
const ModalWindow: React.FC<ModalWindowProps> = ({ rootRef, title, handleClose, children }) => {
	return (
		<StyledModalWindow ref={rootRef}>
			<div className="modal__window">
				<header>
					<h2> {title || ''} </h2>
					<IconButton onClick={handleClose}>
						<CloseIcon />
					</IconButton>
				</header>
				{children}
			</div>
		</StyledModalWindow>
	)
}

export default ModalWindow
