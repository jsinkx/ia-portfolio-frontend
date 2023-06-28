import axios from '../axios'

const uploadImage = async (image: Blob) => {
	const formData = new FormData()

	formData.append('image', image)

	const { data } = await axios.post('/upload', formData)

	return data
}

export default uploadImage
