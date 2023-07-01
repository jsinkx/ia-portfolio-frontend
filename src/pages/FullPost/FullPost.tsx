import React from 'react'
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import Post from '../../components/Post/Post'

import { Post as PostT } from '../../redux/slices/post/types'

import getPost from '../../api/getPost'

import config from '../../shared/config'

import classes from './FullPost.module.scss'
import MainLayout from '../../layouts/MainLayout'

const FullPost: React.FC = () => {
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
					// eslint-disable-next-line no-console
					console.warn(err)
					alert('Ошибка при получении поста')
				})
	}, [id])

	if (isLoading || !data?.title) {
		return <Post isLoading={isLoading} isFullPost />
	}

	return (
		<MainLayout title={data?.title} image={`${config.address}${data?.backgroundImageUrl}`}>
			<div className={classes.fullPostPage}>
				<Post
					id={data?._id as unknown as string}
					title={data?.title as unknown as string}
					images={data?.images as unknown as string[]}
					backgroundImageUrl={data?.backgroundImageUrl ? `${config.address}${data?.backgroundImageUrl}` : ''}
					isFullPost>
					<ReactMarkdown>{data?.text as unknown as string}</ReactMarkdown>
				</Post>
			</div>
		</MainLayout>
	)
}

export default FullPost
