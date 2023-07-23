// TODO: Refactor for global use in createBrowserRouter and navigation components
const Paths = {
	home: '/',
	login: '/login',
	post: '/posts/:id',
	editPost: '/posts/:id/edit',
	addPost: '/add-post',
} as const

export default Paths
