import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Paths from '../../shared/paths'

import useAppDispatch from '../../hooks/useAppDispatch'

import { fetchAuthMe } from '../../redux/slices/auth/slice'

import StyledApp from './style'
import Loading from '../Loading'

import Home from '../../pages/Home'
import FullPost from '../../pages/FullPost'

import GlobalStyles from '../GlobalStyles'

// Lazy components
const Login = React.lazy(() => import(/* webpackChunkName: "Login" */ '../../pages/Login'))

const AddPost = React.lazy(() => import(/* webpackChunkName: "AddPost" */ '../../pages/AddPost'))

const router = createBrowserRouter([
	{
		path: Paths.home,
		element: <Home />,
	},
	{
		path: Paths.login,
		element: <Login />,
	},
	{
		path: Paths.post.static,
		element: <FullPost />,
	},
	{
		path: Paths.editPost.static,
		element: <AddPost />,
	},
	{
		path: Paths.addPost,
		element: <AddPost />,
	},
])

const Routes: React.FC = () => {
	const dispatch = useAppDispatch()

	// Try auth by token
	React.useEffect(() => {
		window.localStorage.getItem('token') && dispatch(fetchAuthMe())
	}, [dispatch])

	return (
		<StyledApp>
			<GlobalStyles />
			<React.Suspense fallback={<Loading />}>
				<RouterProvider router={router} />
			</React.Suspense>
		</StyledApp>
	)
}

export default Routes
