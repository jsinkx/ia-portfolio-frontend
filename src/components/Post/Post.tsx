import React from 'react'
import { NavLink } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit'

import useAppDispatch from '../../hooks/useAppDispatch'

import { fetchRemovePost } from '../../redux/slices/post/slice'

import config from '../../shared/config'

import classes from './Post.module.scss'

type PostProps = {
	id?: string
	title?: string
	children?: React.ReactNode
	backgroundImageUrl?: string
	images?: string[]
	isLoading?: boolean
	isEditable?: boolean
	isBurger?: boolean
	isFullPost?: boolean
}

const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)

const Post: React.FC<PostProps> = ({
	id,
	title,
	children,
	backgroundImageUrl,
	images,
	isEditable,
	isBurger,
	isFullPost,
}) => {
	const dispatch = useAppDispatch()

	const onClickRemove = () => {
		if (window.confirm('Вы действительно хотите удалить статью ?')) {
			id && dispatch(fetchRemovePost(id))
			// window.location.reload()
		}
	}

	const bgrImgStyle = {
		marginTop: '-150px',
		width: '100%',
		height: '200px',
		backgroundImage: backgroundImageUrl ? 'url(' + backgroundImageUrl + ')' : 'none',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		backgroundSize: 'cover',
		backgroundColor: randomColor,
		// userSelect: 'none'
	}

	return isFullPost ? (
		<>
			<div style={bgrImgStyle}></div>
			<div className={classes.postBox}>
				<h2> {title} </h2>
				<div className={classes.content}>
					{children}
					{images && images.length > 0 ? (
						<div className={classes.postImages}>
							{images.map((imageAddress) => {
								return (
									<>
										<img src={`${config.address}${imageAddress}`} alt='pic' />
									</>
								)
							})}
						</div>
					) : (
						''
					)}
				</div>
			</div>
		</>
	) : (
		<NavLink to={`/posts/${id}`} className={classes.projNav}>
			<div className={isBurger ? classes.projectBgr : classes.project}>
				{isEditable ? (
					<div className={classes.editButtons}>
						<NavLink to={`/posts/${id}/edit`}>
							<IconButton color='primary'>
								<EditIcon />
							</IconButton>
						</NavLink>
						<IconButton onClick={onClickRemove} color='error'>
							<DeleteIcon />
						</IconButton>
					</div>
				) : (
					''
				)}
				{title}
			</div>
		</NavLink>
	)
}

export default Post
