import React from 'react'
import SimpleMDE from 'react-simplemde-editor'
import { useNavigate, Navigate, useParams, Link } from 'react-router-dom'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import useAppSelector from '../hooks/useAppSelector'

import { selectAuthStatus, selectIsAuth } from '../redux/slices/auth/selectors'

import notify from '../utils/toasty-notify'
import isErrorWithMessage from '../utils/is-error-with-message'

import Status from '../shared/status'

import MainLayout from '../layouts/MainLayout'

import Loading from '../components/Loading'
import Images from '../components/Images'

import { SERVER_URL } from '../shared/constants'

import {
	useCreatePostMutation,
	useLazyGetPostQuery,
	useUpdatePostMutation,
	useUploadImageMutation,
} from '../redux/services/post/endpoints'
import type { CreatePostBody } from '../redux/services/post/types'

import 'easymde/dist/easymde.min.css'
import classes from '../assets/styles/pages/AddPost/AddPost.module.scss'

const AddPost: React.FC = () => {
	const { id } = useParams()

	const navigate = useNavigate()

	const authStatus = useAppSelector(selectAuthStatus)
	const isAuth = useAppSelector(selectIsAuth)

	const [uploadImage] = useUploadImageMutation()
	const [createPost] = useCreatePostMutation()
	const [updatePost] = useUpdatePostMutation()
	const [getPost] = useLazyGetPostQuery()

	// Post attachments
	const [title, setTitle] = React.useState('')
	const [text, setText] = React.useState('')
	const [images, setImages] = React.useState<string[]>([])
	const [backgroundImageUrl, setImageBackgroundUrl] = React.useState('')

	const inputFileBackgroundImage = React.useRef<HTMLInputElement>(null)
	const inputFileImage = React.useRef<HTMLInputElement>(null)

	const isEditing = Boolean(id)

	// Handling images

	const addNewImage = (newImage: string) => {
		setImages((p) => [...p, newImage])
	}

	const handleUploadImage = async (
		event: React.ChangeEvent<HTMLInputElement>,
		cb: (url: string) => void,
	) => {
		try {
			const file = (event.target.files || [])[0] as unknown as Blob

			const formData = new FormData()

			formData.append('image', file)

			const { url } = await uploadImage(formData).unwrap()

			// Calls after success upload image file with api
			cb(url)
		} catch (err) {
			const errMessage = (isErrorWithMessage(err) && err?.data[0]?.msg) || 'Ошибка при загрузке файла!'

			notify(errMessage, false)
		}
	}

	const handleRemoveHeaderImage = () => {
		setImageBackgroundUrl('')
	}
	const handleRemoveImage = (imgIndex: number) => {
		const newImages = images.filter((_, index) => index !== imgIndex)

		setImages(newImages)
	}

	// Markdown editor onchange handler
	const handleChangeMDE = React.useCallback((value: string) => {
		setText(value)
	}, [])

	const onSubmit = async () => {
		try {
			const fields: CreatePostBody = {
				title,
				backgroundImageUrl: backgroundImageUrl,
				images,
				text,
			}

			if (isEditing && id) {
				await updatePost({ id, fields }).unwrap()

				navigate(`/posts/${id}`)
			} else {
				const data = await createPost(fields).unwrap()

				navigate(`/posts/${data._id}`)
			}
		} catch (err) {
			const errMessage = (isErrorWithMessage(err) && err?.data[0]?.msg) || 'Ошибка при создании поста!'

			notify(errMessage, false)

			// eslint-disable-next-line no-console
			console.warn(err)
		}
	}

	// Getting post by id
	React.useEffect(() => {
		id &&
			getPost(id)
				.unwrap()
				.then((data) => {
					setTitle(data.title)
					setText(data.text)
					setImages(data.images)
					setImageBackgroundUrl(data.backgroundImageUrl)
				})
				.catch((err) => {
					const errMessage =
						(isErrorWithMessage(err) && err?.data[0]?.msg) || 'Ошибка при получении поста!'

					notify(errMessage, false)

					navigate('/')
				})
	}, [getPost, id, navigate])

	// MD Editor options
	const options = React.useMemo(
		() => ({
			spellChecker: false,
			maxHeight: '400px',
			autofocus: true,
			placeholder: 'Введите текст...',
			status: false,
			autosave: {
				enabled: true,
				delay: 1000,
			},
		}),
		[],
	)

	const backgroundImageStyles = {
		width: '100%',
		height: '200px',
		backgroundImage: backgroundImageUrl ? `url(${SERVER_URL + backgroundImageUrl})` : 'none',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		// userSelect: 'none',
	}

	if (authStatus === Status.LOADING) return <Loading />

	if (!window.localStorage.getItem('token') || !isAuth) return <Navigate to={`/posts/${id}`} />

	return (
		<MainLayout title={isEditing ? 'Редактирование' : 'Создание'}>
			<div style={backgroundImageStyles}></div>
			<div className={classes.addPostPage}>
				<input
					ref={inputFileBackgroundImage}
					type="file"
					onChange={(e) => handleUploadImage(e, setImageBackgroundUrl)}
					hidden
				/>
				<div className={classes.actionButtonsImg}>
					<Button
						onClick={() => inputFileBackgroundImage.current?.click()}
						variant="outlined"
						size="large"
					>
						Загрузить превью
					</Button>
					{backgroundImageUrl ? (
						<Button variant="contained" color="error" onClick={handleRemoveHeaderImage}>
							Удалить
						</Button>
					) : (
						''
					)}
				</div>
				<br />
				<br />
				<TextField
					classes={{ root: classes.title }}
					variant="standard"
					placeholder="Заголовок поста..."
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					fullWidth
				/>
				<SimpleMDE
					className={classes.editor}
					value={text}
					onChange={handleChangeMDE}
					options={options as EasyMDE.Options}
				/>
				<h2> Добавить изображения </h2>
				<div className={classes.blockAddImages}>
					<input
						ref={inputFileImage}
						type="file"
						onChange={(e) => handleUploadImage(e, addNewImage)}
						hidden
					/>
					<div
						className={classes.addImageBlock}
						title="Добавить изображение"
						onClick={() => inputFileImage.current?.click()}
					>
						<IconButton>
							<AddIcon sx={{ fontSize: '120px' }} />
						</IconButton>
					</div>
					<Images images={images} deleteImage={handleRemoveImage} isEditing />
				</div>
				<div className={classes.buttons}>
					<Button onClick={onSubmit} size="large" variant="contained">
						{isEditing ? 'Сохранить' : 'Опубликовать'}
					</Button>
					<Link to="/">
						<Button size="large" color="error">
							Отмена
						</Button>
					</Link>
				</div>
			</div>
		</MainLayout>
	)
}

export default AddPost
