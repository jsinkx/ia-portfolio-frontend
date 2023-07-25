import React from 'react'
import { Normalize } from 'styled-normalize'

import GlobalStyleTags from './tags.style'
import GlobalStyleFonts from './font.style'

const GlobalStyles: React.FC = () => {
	return (
		<>
			<GlobalStyleFonts />
			<GlobalStyleTags />
			<Normalize />
		</>
	)
}

export default GlobalStyles
