import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { Post as PostT } from '../redux/slices/post/types'

import { useLazyGetPostQuery } from '../redux/services/endpoints/post/endpoint'

import isErrorWithMessage from '../utils/is-error-with-message'

import config from '../shared/config'

import MainLayout from '../layouts/MainLayout'

import Post from '../components/Post/Post'

import classes from '../assets/styles/pages/FullPost.module.scss'
import notify from '../utils/toasty-notify'

const FullPost: React.FC = () => {
	const { id } = useParams()

	const navigate = useNavigate()

	const [data, setData] = React.useState<PostT>()
	const [isLoading, setLoading] = React.useState(true)

	const [getPost] = useLazyGetPostQuery()

	React.useEffect(() => {
		id &&
			getPost(id)
				.unwrap()
				.then((data) => {
					setData(data)
					setLoading(false)
				})
				.catch((err) => {
					const errMessage =
						(isErrorWithMessage(err) && err?.data[0]?.msg) || 'Ошибка при получении поста!'

					notify(errMessage, false)

					navigate('/')
				})
	}, [getPost, id, navigate])

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
					backgroundImageUrl={
						data?.backgroundImageUrl ? `${config.address}${data?.backgroundImageUrl}` : ''
					}
					isFullPost
				>
					<ReactMarkdown>{data?.text as unknown as string}</ReactMarkdown>
				</Post>
			</div>
		</MainLayout>
	)
}

export default FullPost
