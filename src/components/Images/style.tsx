import styled from 'styled-components'

import { SERVER_URL } from '../../shared/constants'

const StyledImages = styled.div<{ $imgAddress: string }>`
	width: 180px;
	height: 300px;
	margin: 20px 0;
	margin-right: 60px;
	background-color: #f5f5f5;
	border-radius: 15px;
	align-items: center;
	transition: all 0.3s;
	background-image: url(${({ $imgAddress }) => SERVER_URL + $imgAddress});
	background-repeat: 'no-repeat';
	background-position: 'center';
	background-size: 'cover';
	user-select: 'none';

	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
`

export default StyledImages
