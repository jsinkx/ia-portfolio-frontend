import styled from 'styled-components'

const StyledBurgerMenu = styled.div<{ $isOpen: boolean }>`
	display: ${({ $isOpen }) => ($isOpen ? 'inline' : 'none')};
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	width: 100%;
	background-color: white;
	align-items: center;
	text-align: center;
	overflow-y: auto;
	-webkit-overflow-scrolling: touch;
	overflow: hidden;
	z-index: 99;

	p {
		display: flex;
		justify-content: center;
		width: 100%;
		text-align: center;
		align-items: center;
		transition: all 0.3s;
		margin: 0;
		padding: 10px 0;
		font-family: 'Times New Roman', Times, serif;
		font-size: 30px;
		font-weight: 900;
		cursor: pointer;

		&:hover {
			background-color: #ebff00;
		}
	}
`

export default StyledBurgerMenu
