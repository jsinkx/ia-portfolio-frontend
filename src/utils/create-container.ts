export type ContainerOptions = {
	id: string
	mountNode?: HTMLElement
}

type CreateContainer = (options: ContainerOptions) => void

const createContainer: CreateContainer = ({ id, mountNode = document.body }) => {
	if (document.getElementById(id)) return

	const portalContainer = document.createElement('div')

	portalContainer.setAttribute('id', id)

	mountNode.appendChild(portalContainer)
}

export default createContainer
