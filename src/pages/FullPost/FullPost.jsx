import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import axios from '../../axios'
import Post from '../../components/Post/Post'
import classes from './FullPost.module.scss'
import address from '../../config'

const FullPost = () => {
	const [data, setData] = React.useState()
	const [isLoading, setLoading] = React.useState(true)
	const { id } = useParams()

	React.useEffect(() => {
		axios
			.get(`/posts/${id}`)
			.then((res) => {
				setData(res.data)
				setLoading(false)
			})
			.catch((err) => {
				console.warn(err)
				alert('Ошибка при получении статьи')
			})
	}, [id])

	if (isLoading) {
		return <Post isLoading={isLoading} isFullPost />
	}

	return (
		<div className={classes.fullPostPage}>
			<Post
				id={data._id}
				title={data.title}
				images={data.images}
				backgroundImageUrl={data.backgroundImageUrl ? `${address}${data.backgroundImageUrl}` : ''}
				user={data.user}
				isFullPost>
				<ReactMarkdown children={data.text} />
			</Post>
		</div>
	)
}

export default FullPost
