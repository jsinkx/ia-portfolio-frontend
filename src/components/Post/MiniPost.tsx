import React from 'react'
import { useNavigate } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit'

import useAppDispatch from '../../hooks/useAppDispatch'

import { fetchRemovePost } from '../../redux/slices/post/slice'

import { StyledMiniPost } from './style'
import ConfirmationWindow from '../ConfirmationWindow'

type MiniPostProps = {
	title?: string | undefined
	id?: string | undefined
	isBurger?: boolean | undefined
	isEditable?: boolean | undefined
}

const MiniPost: React.FC<MiniPostProps> = ({ title, id, isBurger, isEditable }) => {
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

	return (
		<>
			{isOpen && (
				<ConfirmationWindow title="Удаление поста" onAccept={handleAccept} onClose={handleClose}>
					Вы действительно хотите удалить пост <b> {title} </b> ?
				</ConfirmationWindow>
			)}
			<StyledMiniPost to={`/posts/${id}`} className="projNav">
				<div className={isBurger ? 'project--burger' : 'project'}>
					{isEditable ? (
						<div className="editButtons">
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
