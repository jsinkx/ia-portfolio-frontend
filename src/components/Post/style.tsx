import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { SERVER_URL } from '../../shared/constants'

const randomHexColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16)

export const StyledMiniPost = styled(NavLink)`
	width: 100%;
	color: black;
	text-decoration: none;
	font-family: 'Times New Roman', Times, serif;
	font-size: 50px;
	font-weight: 900;

	:hover {
		background-color: #ebff00;
	}

	.post {
		display: flex;
		justify-content: right;
		width: 99%;
		float: right;
		transition: all 0.3s;
	}

	.post--burger {
		display: flex;
		justify-content: center;
		width: 100%;
		text-align: center;
		align-items: center;
		font-size: 1.2em;
		transition: all 0.3s;
		padding: 30px;
	}
`

export const StyledPostHeader = styled.div<{ $backgroundImageUrl?: string; $isLoading?: boolean }>`
	margin-top: -150px;
	width: 100%;
	height: 200px;
	${({ $isLoading, $backgroundImageUrl }) =>
		$isLoading
			? ''
			: `
	background-image: url(${SERVER_URL + $backgroundImageUrl})`};
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-color: ${randomHexColor()};
	user-select: none;
`

export const StyledBigPost = styled.div`
	width: 80%;
	margin: 0 auto;

	.post__title {
		font-size: 2em;
	}

	.post__content {
		width: 100%;
		margin: 0 auto;
		text-align: left;

		.post__images {
			display: flex;
			justify-content: flex-start;
			flex-wrap: wrap;

			img {
				width: 56%;
				margin: 15px auto;
				pointer-events: none;
				user-select: none;
			}
		}
	}
`
