import React from 'react'

import { SERVER_URL } from '../../shared/constants'

import BigPostSkeleton from './BigPostSkeleton'
import { StyledBigPost, StyledPostHeader } from './style'

type BigPostProps = {
	title?: string | undefined
	images?: string[] | undefined
	backgroundImageUrl?: string | undefined
	children?: React.ReactNode | undefined
	isLoading?: boolean | undefined
}
const BigPost: React.FC<BigPostProps> = ({ title, images, backgroundImageUrl, children, isLoading }) => {
	return isLoading ? (
		<BigPostSkeleton />
	) : (
		<>
			<StyledPostHeader $backgroundImageUrl={backgroundImageUrl || ''}></StyledPostHeader>
			<StyledBigPost>
				<h2 className="post__title"> {title} </h2>
				<div className="post__content">
					{children}
					{images?.length ? (
						<div className="post__images">
							{images.map((imageUrl) => (
								<img key={imageUrl} src={`${SERVER_URL + imageUrl}`} alt={imageUrl} />
							))}
						</div>
					) : null}
				</div>
			</StyledBigPost>
		</>
	)
}

export default BigPost
