import React from 'react'

import emailIcon from '../../assets/img/icons/email-icon.png'
import phoneIcon from '../../assets/img/icons/telephone-icon.png'

import { StyledHomeContacts, StyledHomeProfileTitle } from './style'

const Contacts: React.FC = () => {
	return (
		<StyledHomeContacts>
			<StyledHomeProfileTitle> КОНТАКТЫ </StyledHomeProfileTitle>
			<div className="contacts__links">
				<div>
					<a href="tel:+79260005005">
						<img className="contacts__links__icon" src={phoneIcon} alt="phone" /> +7 926 000 50 05
					</a>
				</div>
				<div>
					<a href="mailto:ilyaalenichev@gmail.com">
						<img className="contacts__links__icon" src={emailIcon} alt="mail" />
						ilyaalenichev@gmail.com
					</a>
				</div>
			</div>
		</StyledHomeContacts>
	)
}

export default Contacts
