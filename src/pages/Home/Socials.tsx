import React from 'react'

import telegramIcon from '../../assets/img/icons/tg-icon.png'
import whatsappIcon from '../../assets/img/icons/whatsapp-icon.png'

import { StyledHomeProfileTitle, StyledHomeSocialIntegration, StyledHomeSocials } from './style'

const Socials: React.FC = () => {
	return (
		<StyledHomeSocials>
			<StyledHomeProfileTitle> ТАКЖЕ ЕСТЬ </StyledHomeProfileTitle>
			<div className="social__links">
				<StyledHomeSocialIntegration
					$iconUrl={telegramIcon}
					$hoverColor="#179cde"
					href="https://t.me/ilyaalenichev"
					rel="noreferrer"
					target="_blank"
				>
					<div className="social__links__item"></div>
				</StyledHomeSocialIntegration>
				<StyledHomeSocialIntegration
					$iconUrl={whatsappIcon}
					$hoverColor="#4bc959"
					href="https://wa.me/79260005005"
					rel="noreferrer"
					target="_blank"
				>
					<div className="social__links__item"></div>
				</StyledHomeSocialIntegration>
			</div>
		</StyledHomeSocials>
	)
}

export default Socials
