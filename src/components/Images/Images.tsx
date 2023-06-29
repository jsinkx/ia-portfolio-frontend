import React from 'react'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

import config from '../../shared/config'

import classes from './Images.module.scss'

type ImagesProps = {
	images: string[]
	deleteImage: (index: number) => void
	isEditing: boolean
}

const Images: React.FC<ImagesProps> = ({ images, deleteImage, isEditing }) => {
	return (
		<>
			{isEditing
				? images.map((imgAddress: string, index: number) => {
						const styleImg = {
							backgroundImage: `url(${config.address}${imgAddress})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: 'center',
							backgroundSize: 'cover',
							// userSelect: 'none',
						}

						return (
							<div key={imgAddress} className={classes.addImageBlock} style={styleImg}>
								<IconButton onClick={() => deleteImage(index)}>
									<DeleteIcon sx={{ fontSize: '120px' }} color='error' />
								</IconButton>
							</div>
						)
				  })
				: ''}
		</>
	)
}

export default Images