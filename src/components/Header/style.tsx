import styled from 'styled-components'

const StyledHeader = styled.header`
	width: 100%;
	position: fixed;
	z-index: 1000;

	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;

		.header__nav__logo {
			width: 100px;
			height: 100px;
			margin: 17px;
			text-align: center;
			font-size: 85px;
			font-family: 'Times New Roman', Times, serif;
			line-height: 83px;
			color: black;
			background-color: #ebff00;
			cursor: pointer;
			transition: all 0.5s;

			&:hover {
				background-color: black;
				color: white;
			}

			h3 {
				display: inline-block;
				vertical-align: middle;
				margin: 0;
				margin-bottom: 17px;
				user-select: none;
			}

			@media only screen and (min-width: 290px) and (max-width: 1100px) {
				margin-right: 5px !important;
			}
		}

		.header__nav__buttons {
			display: flex;
			justify-content: right;
			list-style: none;
			align-items: center;

			li {
				margin-left: 15px;
				margin-right: 25px;

				a {
					text-decoration: none;
					font-size: 2em;

					button {
						margin-bottom: 22%;
						padding: 0;
					}
				}
			}
		}

		@media only screen and (min-width: 290px) and (max-width: 1100px) {
			ul {
				li {
					margin: 0 3px !important;
				}
			}
		}
	}
`

export default StyledHeader
