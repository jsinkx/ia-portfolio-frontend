import axios from '../axios'

import PostFields from './types/PostFields'

const createPost = async (fields: PostFields) => {
	const { data } = await axios.post('/posts', fields)

	return data
}

export default createPost
