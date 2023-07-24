import React from 'react'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'

import { StyledAddPostImages } from './style'

type ImagesProps = {
	images: string[]
	deleteImage: (index: number) => void
}

const Images: React.FC<ImagesProps> = ({ images, deleteImage }) => {
	return (
		images &&
		images.map((imageUrl: string, index: number) => (
			<StyledAddPostImages key={imageUrl} $imageUrl={imageUrl}>
				<IconButton sx={{ marginTop: '50%' }} onClick={() => deleteImage(index)}>
					<DeleteIcon sx={{ fontSize: '120px' }} color="error" />
				</IconButton>
			</StyledAddPostImages>
		))
	)
}

export default Images
