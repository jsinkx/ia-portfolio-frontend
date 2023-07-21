import React from 'react'
import { NavLink } from 'react-router-dom'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Clear'
import EditIcon from '@mui/icons-material/Edit'

import useAppDispatch from '../../hooks/useAppDispatch'

import { fetchRemovePost } from '../../redux/slices/post/slice'

import { StyledMiniPost } from './style'

type MiniPostProps = {
	title?: string | undefined
	id?: string | undefined
	isBurger?: boolean | undefined
	isEditable?: boolean | undefined
}

const MiniPost: React.FC<MiniPostProps> = ({ title, id, isBurger, isEditable }) => {
	const dispatch = useAppDispatch()

	const onClickRemove = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		event.preventDefault()

		if (window.confirm('Вы действительно хотите удалить статью ?')) {
			id && dispatch(fetchRemovePost(id))
		}
	}

	return (
		<StyledMiniPost to={`/posts/${id}`} className="projNav">
			<div className={isBurger ? 'projectBgr' : 'project'}>
				{isEditable ? (
					<div className="editButtons">
						<NavLink to={`/posts/${id}/edit`}>
							<IconButton color="primary">
								<EditIcon />
							</IconButton>
						</NavLink>
						<IconButton onClick={onClickRemove} color="error">
							<DeleteIcon />
						</IconButton>
					</div>
				) : null}
				{title}
			</div>
		</StyledMiniPost>
	)
}

export default MiniPost
