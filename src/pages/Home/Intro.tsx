import React from 'react'

import { StyledHomeIntro, StyledHomeProfileTitle } from './style'

const Intro: React.FC = () => {
	return (
		<StyledHomeIntro>
			<StyledHomeProfileTitle> ВСТУПЛЕНИЕ </StyledHomeProfileTitle>
			<h1 className="intro__text-header__name"> Аленичев Илья Владимирович </h1>
			<h2 className="intro__text-header__role"> Member of Rosatom Junior Council </h2>
		</StyledHomeIntro>
	)
}

export default Intro
