import React from 'react'

import config from '../../shared/config'
import { StyledBigPost } from './style'

type BigPostProps = {
	title?: string | undefined
	images?: string[] | undefined
	backgroundImageUrl?: string | undefined
	children?: React.ReactNode | undefined
}
const BigPost: React.FC<BigPostProps> = ({ title, images, backgroundImageUrl, children }) => {
	const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

	const bgrImgStyle = {
		marginTop: '-150px',
		width: '100%',
		height: '200px',
		backgroundImage: backgroundImageUrl ? 'url(' + backgroundImageUrl + ')' : 'none',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundColor: randomColor,
		//userSelect: 'none'
	}

	return (
		<>
			<div style={bgrImgStyle}></div>
			<StyledBigPost>
				<h2> {title} </h2>
				<div className="post__content">
					{children}
					{images && images.length > 0 ? (
						<div className="postImages">
							{images.map((imageAddress) => (
								<img
									key={imageAddress}
									src={`${config.address}${imageAddress}`}
									alt={title}
								/>
							))}
						</div>
					) : null}
				</div>
			</StyledBigPost>
		</>
	)
}

export default BigPost
