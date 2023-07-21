import React from 'react'
import { createPortal } from 'react-dom'

// Before use Portal component, needs to create container where portal will be located
// Container can be created in manually in public/index.HTML or with DOM
// Best way its call create-container({id, mountNode?}) from utils

type PortalProps = {
	id: string // Container DOM id for location portal
	children: React.ReactNode
}

const PORTAL_ERROR_MSG =
	'There is no portal container in markup. Please add portal container with proper id attribute.'

const Portal: React.FC<PortalProps> = ({ id, children }) => {
	const [container, setContainer] = React.useState<HTMLElement>()

	React.useEffect(() => {
		const portalContainer = document.getElementById(id)

		if (!portalContainer) {
			throw new Error(PORTAL_ERROR_MSG)
		}

		setContainer(portalContainer)
	}, [id])

	return container ? createPortal(children, container) : null
}

export default Portal
