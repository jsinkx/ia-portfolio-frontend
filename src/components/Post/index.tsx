import React from 'react'

import BigPost from './BigPost'
import MiniPost from './MiniPost'

type PostProps = {
	id?: string
	title?: string
	children?: React.ReactNode
	backgroundImageUrl?: string
	images?: string[]
	isLoading?: boolean
	isEditable?: boolean
	isBurger?: boolean
	isFullPost?: boolean
}

const Post: React.FC<PostProps> = ({
	id,
	title,
	children,
	backgroundImageUrl,
	images,
	isEditable,
	isBurger,
	isFullPost,
}) => {
	return isFullPost ? (
		<BigPost title={title} images={images} backgroundImageUrl={backgroundImageUrl}>
			{children}
		</BigPost>
	) : (
		<MiniPost title={title} id={id} isBurger={isBurger} isEditable={isEditable} />
	)
}

export default React.memo(Post)
