import React from 'react'

import { Button, Typography } from '@mui/material'

import StyledConfirmationWindow from './style'
import Modal from '../Modal'

type ConfirmationWindowProps = {
	title?: string
	children?: React.ReactNode
	acceptText?: string
	cancelText?: string
	onAccept: () => void
	onClose: () => void
}

const ConfirmationWindow: React.FC<ConfirmationWindowProps> = ({
	title = 'Подтвердите действие',
	children,
	acceptText = 'Подтвердить',
	cancelText = 'Отмена',
	onAccept,
	onClose,
}) => {
	return (
		<Modal title={title} onClose={onClose}>
			<StyledConfirmationWindow>
				{children}
				<Typography sx={{ marginTop: '30px' }}>
					<Button sx={{ marginInline: '10px' }} variant="outlined" color="info" onClick={onClose}>
						{cancelText}
					</Button>
					<Button sx={{ marginInline: '10px' }} variant="outlined" color="error" onClick={onAccept}>
						{acceptText}
					</Button>
				</Typography>
			</StyledConfirmationWindow>
		</Modal>
	)
}

export default ConfirmationWindow
