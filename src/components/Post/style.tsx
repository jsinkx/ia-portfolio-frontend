import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

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

	.project {
		display: flex;
		justify-content: right;
		width: 99%;
		float: right;
		transition: all 0.3s;
	}

	.project--burger {
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

export const StyledBigPost = styled.div`
	width: 80%;
	margin: 0 auto;

	h2 {
		font-size: 2em;
	}

	.post__content {
		width: 100%;
		margin: 0 auto;
		text-align: left;

		.postImages {
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
