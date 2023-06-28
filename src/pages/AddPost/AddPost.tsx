import React from 'react'
import SimpleMDE from 'react-simplemde-editor'
import { useNavigate, Navigate, useParams } from 'react-router-dom'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

import useAppSelector from '../../hooks/useAppSelector'

import { selectIsAuth } from '../../redux/slices/auth/selectors'

import updatePost from '../../api/updatePost'
import createPost from '../../api/createPost'
import getPost from '../../api/getPost'
import uploadImage from '../../api/uploadImage'
import type PostFields from '../../api/types/PostFields'

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

	const setImageStates = (newImage: string) => {
		setImage(newImage)
		setImages((p) => [...p, newImage])
	}

	const handleChangeImage = async (event: React.ChangeEvent<HTMLInputElement>, cb: (url: string) => void) => {
		try {
			const file = (event.target.files || [])[0] as unknown as Blob

			const { url } = await uploadImage(file)

			cb(url)
		} catch (err) {
			console.warn(err)

			alert('Ошибка при загрузке файла!')
		}
	}

	const deleteImage = (imgIndex: number) => {
		const newImages = images.filter((_, index) => index !== imgIndex)

		setImages(newImages)
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

			const fields: PostFields = {
				title,
				backgroundImageUrl: backgroundImageUrl,
				images,
				text,
			}

			const data = isEditing && id ? await updatePost(id, fields) : await createPost(fields)

			const _id = isEditing ? id : data._id
			navigate(`/posts/${_id}`)
		} catch (err) {
			console.warn(err)
			alert('Ошибка при создании поста!')
		}
	}

	// Getting post by id
	React.useEffect(() => {
		id &&
			getPost(id)
				.then((data) => {
					setTitle(data.title)
					setText(data.text)
					setImages(data.images)
					setImageBackgroundUrl(data.backgroundImageUrl)
				})
				.catch((err) => {
					console.warn(err)
					alert('Ошибка при получении поста')
				})
	}, [id])

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
		[]
	)

	const headerImageStyles = {
		width: '100%',
		height: '200px',
		backgroundImage: backgroundImageUrl ? `url(${config.address}${backgroundImageUrl})` : 'none',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		// userSelect: 'none',
	}

	if (!window.localStorage.getItem('token') && !isAuth) <Navigate to='/' />

	return (
		<>
			<div style={headerImageStyles}></div>
			<div className={classes.addPostPage}>
				<input
					ref={inputFileRef}
					type='file'
					onChange={(e) => handleChangeImage(e, setImageBackgroundUrl)}
					hidden
				/>
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
					<input
						ref={inputAddImgRef}
						type='file'
						onChange={(e) => handleChangeImage(e, setImageStates)}
						hidden
					/>
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
