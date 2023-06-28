import axios from '../axios'

import { Post } from '../redux/slices/post/types'

type GetPost = (id: string) => Promise<Post>

const getPost: GetPost = async (id) => {
	return new Promise(async (resolve, reject) => {
		try {
			const { data }: { data: Post } = await axios.get(`/posts/${id}`)

			resolve(data)
		} catch (err) {
			reject(err)
		}
	})
}

export default getPost
