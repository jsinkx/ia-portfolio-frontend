import React from 'react'

import BigPost from './BigPost'
import MiniPost from './MiniPost'

type PostProps = {
	id?: string
	title?: string
	backgroundImageUrl?: string
	images?: string[]
	isLoading?: boolean
	isEditable?: boolean
	isBurger?: boolean
	isFullPost?: boolean
	children?: React.ReactNode
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
	isLoading,
}) => {
	return isFullPost ? (
		<BigPost title={title} images={images} backgroundImageUrl={backgroundImageUrl} isLoading={isLoading}>
			{children}
		</BigPost>
	) : (
		<MiniPost title={title} id={id} isBurger={isBurger} isEditable={isEditable} isLoading={isLoading} />
	)
}

export default React.memo(Post)
