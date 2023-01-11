import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import { useDispatch } from 'react-redux'

import './App.scss'
import { fetchAuthMe } from './redux/slices/auth'
import Header from './components/Header/Header'

import Home from './pages/Home/Home'
import FullPost from './pages/FullPost/FullPost'
import AddPost from './pages/AddPost/AddPost'

const App = () => {
	const dispatch = useDispatch()

	React.useEffect(() => {
		dispatch(fetchAuthMe())
	}, [])

	return (
		<div className='app-wrapper'>
			<Header />
			<div className='content-wrapper'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Login' element={<Login />} />
					<Route path='/posts/:id' element={<FullPost />} />
					<Route path='/posts/:id/edit' element={<AddPost />} />
					<Route path='/add-post' element={<AddPost />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
