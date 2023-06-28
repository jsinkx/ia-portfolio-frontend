import Status from '../../../shared/status'

import { User } from '../auth/types'

export type Post = {
	_id: string
	title: string
	text: string
	images: string[]
	backgroundImageUrl: string
	user: User
	createdAt: string
	updatedAt: string
	__v: number
}

export interface IPostState {
	items: Post[]
	status: Status
}
