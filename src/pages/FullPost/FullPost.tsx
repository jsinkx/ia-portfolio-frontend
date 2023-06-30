import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import Post from '../../components/Post/Post'

import { Post as PostT } from '../../redux/slices/post/types'

import getPost from '../../api/getPost'

import config from '../../shared/config'

import classes from './FullPost.module.scss'
import MainLayout from '../../layouts/MainLayout'

const FullPost = () => {
	const { id } = useParams()

	const [data, setData] = React.useState<PostT>()
	const [isLoading, setLoading] = React.useState(true)

	React.useEffect(() => {
		id &&
			getPost(id)
				.then((data) => {
					setData(data)
					setLoading(false)
				})
				.catch((err) => {
					console.warn(err)
					alert('Ошибка при получении поста')
				})
	}, [id])

	if (isLoading) {
		return <Post isLoading={isLoading} isFullPost />
	}

	return (
		<MainLayout title={data?.title || 'Загрузка'}>
			<div className={classes.fullPostPage}>
				<Post
					id={data?._id as unknown as string}
					title={data?.title as unknown as string}
					images={data?.images as unknown as string[]}
					backgroundImageUrl={data?.backgroundImageUrl ? `${config.address}${data?.backgroundImageUrl}` : ''}
					isFullPost>
					<ReactMarkdown children={data?.text as unknown as string} />
				</Post>
			</div>
		</MainLayout>
	)
}

export default FullPost
