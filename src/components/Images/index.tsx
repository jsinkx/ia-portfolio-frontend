import React from 'react'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

import StyledImages from './style'

type ImagesProps = {
	images: string[]
	deleteImage: (index: number) => void
	isEditing: boolean
}

const Images: React.FC<ImagesProps> = ({ images, deleteImage, isEditing }) => {
	return (
		<>
			{isEditing
				? images.map((imgAddress: string, index: number) => (
						<StyledImages key={imgAddress} className="addImageBlock" $imgAddress={imgAddress}>
							<IconButton sx={{ marginTop: '50%' }} onClick={() => deleteImage(index)}>
								<DeleteIcon sx={{ fontSize: '120px' }} color="error" />
							</IconButton>
						</StyledImages>
				  ))
				: null}
		</>
	)
}

export default Images
