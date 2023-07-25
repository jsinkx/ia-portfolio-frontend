import { createGlobalStyle } from 'styled-components'

const GlobalStyleTags = createGlobalStyle`

html {
	height: 100%;
	background-color: white;
	font-display: swap;

	body {
		margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
			'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		::selection {
			color: white;
			background-color: #abbdd7;
		}

		a,
		a:hover,
		a:active,
		a:focus {
			text-decoration: none;
			outline: none;
		}

		code {
			font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
		}
	}
}



`

export default GlobalStyleTags
