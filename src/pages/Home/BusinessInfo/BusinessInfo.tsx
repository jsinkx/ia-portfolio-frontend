import React from 'react'

import Intro from './Intro/Intro'
import Contacts from './Contacts/Contacts'
import Socials from './Socials/Socials'

import classes from './BusinessInfo.module.scss'

const BusinessInfo: React.FC = () => {
	return (
		<div className={classes.businessItems}>
			<Intro />
			{/* <AboutMe/> */}
			<Contacts />
			<Socials />
		</div>
	)
}

export default BusinessInfo
