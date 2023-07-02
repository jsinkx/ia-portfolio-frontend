import React from 'react'
import { Route, Routes } from 'react-router-dom'

import useAppDispatch from './hooks/useAppDispatch'

import { fetchAuthMe } from './redux/slices/auth/auth'

import Header from './components/Header/Header'

import Login from './pages/Login'
import Home from './pages/Home'
import FullPost from './pages/FullPost'
import AddPost from './pages/AddPost'

import './assets/styles/App.scss'

const App = () => {
	const dispatch = useAppDispatch()

	React.useEffect(() => {
		dispatch(fetchAuthMe())
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='app'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/*' element={<Home />} />
					<Route path='login' element={<Login />} />
					<Route path='posts/:id' element={<FullPost />} />
					<Route path='posts/:id/edit' element={<AddPost />} />
					<Route path='add-post' element={<AddPost />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
