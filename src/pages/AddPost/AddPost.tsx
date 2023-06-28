import React from 'react'
import SimpleMDE from 'react-simplemde-editor'
import { useNavigate, Navigate, useParams } from 'react-router-dom'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import useAppSelector from '../../hooks/useAppSelector'

import { selectIsAuth } from '../../redux/slices/auth/selectors'

import axios from '../../axios'
import config from '../../shared/config'

import Image from '../../components/Image/Image'

import 'easymde/dist/easymde.min.css'
import classes from './AddPost.module.scss'

const AddPost = () => {
	const { id } = useParams()

	const navigate = useNavigate()

	const isAuth = useAppSelector(selectIsAuth)

	const [, setLoading] = React.useState(false)
	const [text, setText] = React.useState('')
	const [title, setTitle] = React.useState('')
	const [, setImage] = React.useState('')
	const [images, setImages] = React.useState<string[]>([])
	const [backgroundImageUrl, setImageBackgroundUrl] = React.useState('')

	const inputFileRef = React.useRef<HTMLInputElement>(null)
	const inputAddImgRef = React.useRef<HTMLInputElement>(null)

	const isEditing = Boolean(id)

	// Rewrite on one handle with cb

	const handleAddImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const formData = new FormData()
			const file = (event.target.files || [])[0] as unknown as Blob

			formData.append('image', file)

			const { url } = (await axios.post('/upload', formData)).data

			setImage(url)
			setImages((p) => [...p, url])
		} catch (err) {
			console.warn(err)

			alert('Ошибка при загрузке файла!')
		}
	}

	const deleteImage = (imgIndex: number) => {
		const newImages = images.filter((_, index) => index !== imgIndex)

		setImages(newImages)
	}

	const handleChangeFile = async (event: React.ChangeEvent<HTMLInputElement>) => {
		try {
			const formData = new FormData()
			const file = (event.target.files || [])[0] as unknown as Blob

			formData.append('image', file)

			const { url } = (await axios.post('/upload', formData)).data

			setImageBackgroundUrl(url)
		} catch (err) {
			console.warn(err)

			alert('Ошибка при загрузке файла!')
		}
	}

	const onClickRemoveImage = () => {
		setImageBackgroundUrl('')
	}

	const onChange = React.useCallback((value: string) => {
		setText(value)
	}, [])

	const onSubmit = async () => {
		try {
			setLoading(true)

			const fields = {
				title,
				backgroundImageUrl: backgroundImageUrl,
				images,
				text,
			}

			const { data } = isEditing
				? await axios.patch(`/posts/${id}`, fields)
				: await axios.post('/posts', fields)

			const _id = isEditing ? id : data._id
			navigate(`/posts/${_id}`)
		} catch (err) {
			console.warn(err)
			alert('Ошибка при создании поста!')
		}
	}

	React.useEffect(() => {
		if (id) {
			axios
				.get(`/posts/${id}`)
				.then(({ data }) => {
					setTitle(data.title)
					setText(data.text)
					setImages(data.images)
					setImageBackgroundUrl(data.backgroundImageUrl)
				})
				.catch((err) => {
					console.warn(err)
					alert('Ошибка при получении поста')
				})
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

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
		[]
	)

	if (!window.localStorage.getItem('token') && !isAuth) <Navigate to='/' />

	const bgrImgStyle = {
		width: '100%',
		height: '200px',
		backgroundImage: backgroundImageUrl ? `url(${config.address}${backgroundImageUrl})` : 'none',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		// userSelect: 'none',
	}

	return (
		<>
			<div style={bgrImgStyle}></div>
			<div className={classes.addPostPage}>
				<input ref={inputFileRef} type='file' onChange={handleChangeFile} hidden />
				<div className={classes.actionButtonsImg}>
					<Button onClick={() => inputFileRef.current?.click()} variant='outlined' size='large'>
						Загрузить превью
					</Button>
					{backgroundImageUrl ? (
						<Button variant='contained' color='error' onClick={onClickRemoveImage}>
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
					variant='standard'
					placeholder='Заголовок поста...'
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					fullWidth
				/>
				<SimpleMDE
					className={classes.editor}
					value={text}
					onChange={onChange}
					options={options as EasyMDE.Options}
				/>
				<h2> Добавить изображения </h2>
				<div className={classes.blockAddImages}>
					<input ref={inputAddImgRef} type='file' onChange={handleAddImage} hidden />
					<div
						className={classes.addImageBlock}
						title='Добавить изображение'
						onClick={() => inputAddImgRef.current?.click()}>
						<IconButton>
							<AddIcon sx={{ fontSize: '120px' }} />
						</IconButton>
					</div>
					<Image images={images} deleteImage={deleteImage} isEditing />
				</div>
				<div className={classes.buttons}>
					<Button onClick={onSubmit} size='large' variant='contained'>
						{isEditing ? 'Сохранить' : 'Опубликовать'}
					</Button>
					<a href='/'>
						<Button size='large' color='error'>
							Отмена
						</Button>
					</a>
				</div>
			</div>
		</>
	)
}

export default AddPost
