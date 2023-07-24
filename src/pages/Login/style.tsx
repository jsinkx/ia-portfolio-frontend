import styled from 'styled-components'

const StyledLogin = styled.div`
	width: 600px;
	margin: 150px auto;
	text-align: center;
	box-sizing: border-box;

	.title {
		font-weight: bold;
		margin-bottom: 30px;
	}

	form {
		display: flex;
		flex-direction: column;

		.input__field {
			width: 350px;
			margin: 0 auto;
			margin-bottom: 20px;
		}

		button {
			width: 250px;
			background-color: black;
			margin: 0 auto;

			&:hover {
				background-color: #4d4d4d;
			}
		}

		@media only screen and (min-width: 290px) and (max-width: 1300px) {
			width: 300px;
			margin: 150px auto;
			text-align: center;
			align-items: center;
			box-sizing: border-box;

			.input__field {
				width: 250px !important;
			}
		}
	}
`

export default StyledLogin
