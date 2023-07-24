import styled from 'styled-components'

import { SERVER_URL } from '../../shared/constants'

const randomHexColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

export const StyledAddPostHeader = styled.div<{ $backgroundImageUrl?: string }>`
	width: 100%;
	height: 200px;
	background-image: ${({ $backgroundImageUrl }) => `url(${SERVER_URL + $backgroundImageUrl})`};
	background-color: ${randomHexColor()};
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	user-select: none;
`

export const StyledAddPost = styled.div`
	width: 80%;
	margin: 0 auto;
	text-align: center;
	box-sizing: border-box;

	.buttons__backgroundImage--actions {
		margin: 10px;
		display: flex;
		margin-bottom: 30px;
		button {
			margin-right: 15px;
		}
	}

	.title {
		input {
			font-size: 42px;
			font-weight: 900;
			background-color: #f5f5f5;
		}

		div {
			&:before,
			&:after {
				display: none;
			}
		}
	}
	.MDE-editor {
		max-width: 100%;
		margin: 30px auto;

		:global {
			.cm-s-easymde {
				border: 0;
				font-size: 22px;
				background-color: #f5f5f5;
			}
			.editor-toolbar {
				border: 0;
				background-color: rgb(0 0 0 / 2%);
			}
		}
	}

	.add-images--actions {
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;
		margin: 20px 0;

		.add-images--actions--upload-image {
			width: 180px;
			height: 300px;
			margin: 20px 0;
			margin-right: 60px;
			background-color: #f5f5f5;
			border-radius: 15px;
			align-items: center;
			transition: all 0.3s;

			&:hover {
				cursor: pointer;
				background-color: #ece9e9;
			}

			button {
				margin-top: 50%;
			}
		}
	}

	.buttons__post--actions {
		display: flex;
		margin-bottom: 30px;

		button {
			margin-right: 20px;
		}
	}
`

export const StyledAddPostImages = styled.div<{ $imageUrl: string }>`
	width: 180px;
	height: 300px;
	margin: 20px 0;
	margin-right: 60px;
	background-color: #f5f5f5;
	border-radius: 15px;
	align-items: center;
	transition: all 0.3s;
	background-image: url(${({ $imageUrl }) => SERVER_URL + $imageUrl});
	background-repeat: 'no-repeat';
	background-position: 'center';
	background-size: 'cover';
	user-select: 'none';

	&:hover {
		cursor: pointer;
		opacity: 0.75;
	}
`
