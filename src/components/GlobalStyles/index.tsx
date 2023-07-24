import React from 'react'

import GlobalStyleTags from './tags.style'
import GlobalStyleFonts from './font.style'

const GlobalStyles: React.FC = () => {
	return (
		<>
			<GlobalStyleFonts />
			<GlobalStyleTags />
		</>
	)
}

export default GlobalStyles
