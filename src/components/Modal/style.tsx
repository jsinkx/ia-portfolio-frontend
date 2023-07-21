import styled from 'styled-components'

const StyledModalWindow = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	place-items: center;
	background-color: #0000007c;
	backdrop-filter: blur(2px);
	z-index: 999999;

	@media (max-height: 350px) {
		overflow-y: scroll;
	}

	.modal__window {
		width: 50vw;
		margin: 25vh auto;
		padding: 2vw;
		padding-top: 0.1vw;
		padding-bottom: 3vw;
		text-align: center;
		background-color: #d3d3d3;
		user-select: all;

		header {
			display: flex;
			align-items: center;
			margin: 1vw;
			user-select: none;

			h2 {
				font-size: 1.7em;
				text-align: center;
				margin-inline: auto;
			}
		}

		@media (max-height: 350px) {
			margin-top: 5vh;
		}
	}
`

export default StyledModalWindow
