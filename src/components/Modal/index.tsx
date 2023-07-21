import React from 'react'

import createContainer from '../../utils/create-container'

import Portal from '../Portal'
import ModalWindow from './ModalWindow'

// Use this component only like wrapper for other components
// Only 1 modal can be rendered in page

type ModalProps = {
	title?: string
	children: React.ReactNode
	onClose: () => void
}

const MODAL_CONTAINER_ID = 'react-modal-with-portal'

const Modal: React.FC<ModalProps> = ({ title, children, onClose }) => {
	const rootRef = React.useRef<HTMLDivElement>(null)

	const [isMounted, setIsMounted] = React.useState(false)

	const handleClose: () => void = React.useCallback(() => {
		onClose()
	}, [onClose])

	React.useEffect(() => {
		createContainer({ id: MODAL_CONTAINER_ID })
		setIsMounted(true)

		// Close modal
		const handleOutsideClick = ({ target }: MouseEvent) => {
			if (target instanceof Node && rootRef.current === target) {
				onClose()
			}
		}

		const handleEscapeClick = ({ key }: KeyboardEvent) => {
			if (key === 'Escape') {
				onClose()
			}
		}

		window.addEventListener('click', handleOutsideClick)
		window.addEventListener('keydown', handleEscapeClick)

		// Disable the use, display of scrolling and user select
		document.body.style.overflow = 'hidden'
		document.body.style.userSelect = 'none'

		return () => {
			// Remove on unmount
			window.removeEventListener('click', handleOutsideClick)
			window.removeEventListener('keydown', handleEscapeClick)

			document.body.style.overflow = 'unset'
			document.body.style.userSelect = 'all'
		}
	}, [onClose])

	return isMounted ? (
		<Portal id={MODAL_CONTAINER_ID}>
			<ModalWindow rootRef={rootRef} title={title} handleClose={handleClose}>
				{children}
			</ModalWindow>
		</Portal>
	) : null
}

export default Modal
