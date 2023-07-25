// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import CssBaseline from '@mui/material/CssBaseline'

import store from './redux/store'
import Routes from './components/Routes'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<>
		<CssBaseline />
		<Provider store={store}>
			<Routes />
		</Provider>
	</>,
)
