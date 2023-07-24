// Field static for using inside routes
// Method dynamic with args for using in navigation components

const Paths = {
	home: '/',
	login: '/login',
	post: {
		static: '/posts/:id',
		dynamic(id: string) {
			return `/posts/${id}`
		},
	},
	editPost: {
		static: '/posts/:id/edit',
		dynamic(id: string) {
			return `/posts/${id}/edit`
		},
	},
	addPost: '/add-post',
} as const

export default Paths
