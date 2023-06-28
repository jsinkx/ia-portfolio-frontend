import axios from '../axios'

import PostFields from './types/PostFields'

const updatePost = async (id: string, fields: PostFields) => {
	const { data } = await axios.patch(`/posts/${id}`, fields)

	return data
}

export default updatePost
