import React from 'react'
import ContentLoader from 'react-content-loader'

import { StyledBigPost, StyledPostHeader } from './style'

const BigPostSkeleton: React.FC = () => {
	return (
		<>
			<StyledPostHeader $isLoading>
				<ContentLoader
					speed={1}
					width="100%"
					height="100%"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
				>
					<rect x="0" y="0" rx="0" ry="0" width="100%" height="200px" />
				</ContentLoader>
			</StyledPostHeader>
			<StyledBigPost>
				<ContentLoader
					style={{ margin: '26.50px auto' }}
					speed={1}
					width="30%"
					height="2em"
					backgroundColor="#f3f3f3"
					foregroundColor="#ecebeb"
				>
					<rect x="0" y="0" rx="0" ry="0" width="100%" height="200px" />
				</ContentLoader>
				<div className="post__content">
					<ContentLoader
						style={{ margin: 0 }}
						speed={1}
						width="60%"
						height="160px"
						backgroundColor="#f3f3f3"
						foregroundColor="#ecebeb"
					>
						<rect x="0" y="0" rx="0" ry="0" width="100%" height="1.7em" />
						<rect x="0" y="40" rx="0" ry="0" width="40%" height="1.7em" />
						<rect x="0" y="80" rx="0" ry="0" width="70%" height="1.7em" />
						<rect x="0" y="120" rx="0" ry="0" width="80%" height="1.7em" />
					</ContentLoader>
					<div className="post__images">
						<ContentLoader
							style={{ margin: '15px auto' }}
							speed={1}
							width="300px"
							height="300px"
							backgroundColor="#f3f3f3"
							foregroundColor="#ecebeb"
						>
							<rect x="0" y="0" rx="0" ry="0" width="100%" height="100%" />
						</ContentLoader>
					</div>
				</div>
			</StyledBigPost>
		</>
	)
}

export default BigPostSkeleton
