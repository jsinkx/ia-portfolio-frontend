import React from 'react'
import { BarLoader } from 'react-spinners'

import StyledLoading from './style'

const Loading: React.FC = () => (
	<StyledLoading>
		<h2> Загрузка... </h2>
		<BarLoader
			cssOverride={{ width: '20vw', margin: '2vh auto' }}
			color="#1976d2"
			width={200}
			height={20}
			speedMultiplier={1}
		/>
	</StyledLoading>
)

export default Loading
