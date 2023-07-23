import React from 'react'
import { useNavigate } from 'react-router-dom'

import { Skeleton } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit'

import useAppDispatch from '../../hooks/useAppDispatch'

import { fetchRemovePost } from '../../redux/slices/post/slice'

import ConfirmationWindow from '../ConfirmationWindow'
import { StyledMiniPost } from './style'

type MiniPostProps = {
	title?: string | undefined
	id?: string | undefined
	isBurger?: boolean | undefined
	isEditable?: boolean | undefined
	isLoading?: boolean | undefined
}

const MiniPost: React.FC<MiniPostProps> = ({ title, id, isBurger, isEditable, isLoading }) => {
	const navigate = useNavigate()
	const dispatch = useAppDispatch()

	const [isOpen, setIsOpen] = React.useState(false)

	const onClickRemove = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()

		setIsOpen(true)
	}

	const handleClose = () => {
		setIsOpen(false)
	}

	const handleAccept = () => {
		handleClose()

		id && dispatch(fetchRemovePost(id))
	}

	const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()

		navigate(`/posts/${id}/edit`)
	}

	return isLoading ? (
		<Skeleton sx={{ width: '80%', height: 75, float: 'right', marginTop: 3 }} />
	) : (
		<>
			{isOpen && (
				<ConfirmationWindow title="Удаление поста" onAccept={handleAccept} onClose={handleClose}>
					Вы действительно хотите удалить пост <b> {title} </b> ?
				</ConfirmationWindow>
			)}
			<StyledMiniPost to={`/posts/${id}`}>
				<div className={isBurger ? 'post--burger' : 'post'}>
					{isEditable ? (
						<div className="buttons--edit">
							<IconButton onClick={handleEditClick} color="primary">
								<EditIcon />
							</IconButton>
							<IconButton onClick={onClickRemove} color="error">
								<DeleteIcon />
							</IconButton>
						</div>
					) : null}
					{title}
				</div>
			</StyledMiniPost>
		</>
	)
}

export default MiniPost
