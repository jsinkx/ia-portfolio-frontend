import { createGlobalStyle } from 'styled-components'

import consolasFont from '../../assets/fonts/consolas.ttf'

const GlobalStyleFonts = createGlobalStyle`
@font-face {
	font-display: swap;
	font-family: Consolas;
	src: url(${consolasFont}) format('truetype');
}
`

export default GlobalStyleFonts
