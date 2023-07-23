import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import { Post as PostT } from '../redux/slices/post/types'

import { useLazyGetPostQuery } from '../redux/services/post/endpoints'

import isErrorWithMessage from '../utils/is-error-with-message'
import notify from '../utils/toasty-notify'

import MainLayout from '../layouts/MainLayout'

import Post from '../components/Post'

import classes from '../assets/styles/pages/FullPost.module.scss'

const FullPost: React.FC = () => {
	const { id } = useParams()

	const navigate = useNavigate()

	const [data, setData] = React.useState<PostT>({} as PostT)
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

	return (
		<MainLayout title={data.title} image={data.backgroundImageUrl}>
			<div className={classes.fullPostPage}>
				<Post
					id={data._id}
					title={data.title}
					images={data.images}
					backgroundImageUrl={data.backgroundImageUrl}
					isLoading={isLoading}
					isFullPost
				>
					<ReactMarkdown>{data.text}</ReactMarkdown>
				</Post>
			</div>
		</MainLayout>
	)
}

export default FullPost
