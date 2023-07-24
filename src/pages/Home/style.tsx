import styled from 'styled-components'

export const StyledHomeProfileTitle = styled.p`
	font-family: 'Consolas', Consolas, 'Inconsolata', monospace;
	color: #ababab;
	user-select: none;
`

// Home page
export const StyledHomeBackgroundWrap = styled.div`
	display: grid;
	position: relative;
	grid-template-areas: 'bc1 bc2';
	grid-template-columns: 1fr 3fr;
	min-height: 100vh;
	z-index: 5;

	.background--first {
	}

	.background--second {
		height: 100%;
		background-color: #f5f5f5;
	}

	@media only screen and (min-width: 750px) and (max-width: 1300px) {
		grid-template-areas: 'bc1';
		grid-template-columns: 2fr 4fr;
		min-height: 100fr;
	}
`

export const StyledHome = styled.div`
	display: grid;
	grid-template-areas: 'ib pb';
	grid-template-columns: 3fr 2fr;
	position: absolute;
	top: 0;
	width: 100%;
	margin-top: 230px;
	box-sizing: border-box;
	z-index: 99;

	.profile__contacts {
		grid-area: ib;
		margin-left: 117px;

		@media only screen and (min-width: 290px) and (max-width: 1300px) {
			margin-left: 30px;
		}
	}

	.profile__posts {
		grid-area: pb;
		text-align: right;
		margin-right: 30px;

		@media only screen and (min-width: 290px) and (max-width: 1000px) {
			display: none;
		}
	}

	@media only screen and (min-width: 750px) and (max-width: 1300px) {
		display: grid;
		grid-template-areas: 'ib pb';
		grid-template-columns: 3fr 2fr;
		margin-top: 110px;
	}
`

// Intro
export const StyledHomeIntro = styled.section`
	.intro__text-header__name,
	.intro__text-header__role {
		margin: 5px 0 5px 0;
		font-family: 'Times New Roman', Times, serif;
		font-weight: 500;
	}

	.intro__text-header__name {
		font-size: 4.5em;
	}

	.intro__text-header__role {
		font-size: 3em;
	}

	@media only screen and (min-width: 290px) and (max-width: 1300px) {
		.intro__text-header__name {
			font-size: 2.3em;
		}

		.intro__text-header__role {
			font-size: 1.4em;
		}
	}
`

// Contacts
export const StyledHomeContacts = styled.section`
	.contacts__links {
		display: inline-block;
		vertical-align: middle;
		transition: all 0.211s;

		div {
			a {
				color: black;
				text-decoration-color: black;
				transition: all 0.211s;

				&:hover {
					color: #1976d2;
					text-decoration-color: #1976d2;
				}

				.contacts__links__icon {
					height: 17px;
					margin-right: 10px;
					vertical-align: middle;
					user-select: none;
				}
			}
		}
	}
`

// Socials
export const StyledHomeSocialIntegration = styled.a<{ $iconUrl: string; $hoverColor: string }>`
	width: 50px;
	height: 50px;
	margin-right: 40px;

	.social__links__item {
		width: 50px;
		height: 50px;
		background-image: url(${({ $iconUrl }) => $iconUrl});
		background-color: black;
		background-size: 40px;
		background-repeat: no-repeat;
		background-position: 50% 50%;
		transition: all 0.3s;
		cursor: pointer;

		&:hover {
			background-color: ${({ $hoverColor }) => $hoverColor};
		}
	}
`

export const StyledHomeSocials = styled.section`
	margin-top: 210px;
	margin-bottom: 20px;

	.social__links {
		display: flex;
	}
`
